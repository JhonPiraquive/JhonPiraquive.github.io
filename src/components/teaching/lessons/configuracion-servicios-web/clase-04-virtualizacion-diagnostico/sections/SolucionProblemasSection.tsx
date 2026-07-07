import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const COMANDOS_DIAGNOSTICO = `# DNS
dig +short staging.tienda.com.co A
dig MX tienda.com.co

# TLS
curl -vI https://staging.tienda.com.co 2>&1 | grep -E 'expire|SSL'

# Contenedor caído
docker ps -a
docker logs tienda-api-1 --tail 50

# SSH verboso
ssh -v deploy@190.25.80.42`;

export function SolucionProblemasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Troubleshooting integrador por capas"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El troubleshooting integrador aplica la metodología de capas del curso completo: DNS → hosting/TLS → correo → SSH → contenedores/VM → caché cliente. Cada síntoma apunta a una capa; el operador confirma con una herramienta antes de cambiar configuración."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <p className="my-4">
        {
          "Un operador en Buenos Aires que ve «sitio caído» debe saber si el fallo está en propagación DNS, certificado vencido o contenedor que no escucha el puerto. Diagnosticar TLS cuando el fallo es DNS desperdicia tiempo y puede empeorar la situación si se tocan registros innecesariamente."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Metodología de diagnóstico"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Reproducir el fallo y anotar el mensaje exacto (navegador, cliente correo, terminal)."}</li>
        <li>{"Acotar la capa: ¿DNS resuelve? ¿HTTPS válido? ¿Puerto abierto? ¿Servicio activo?"}</li>
        <li>{"Consultar logs: DevTools → Red, `journalctl -u nginx`, `docker logs`, panel del hosting."}</li>
        <li>{"Un cambio a la vez y verificar antes del siguiente."}</li>
        <li>{"Documentar la solución (runbook interno)."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tabla de diagnóstico por síntoma"}</h3>
      <CompareTable
        headers={["Síntoma", "Capa", "Causa probable", "Acción de diagnóstico", "Corrección"]}
        rows={[
          [
            "Dominio no abre / no resuelve",
            "DNS",
            "Registro A/CNAME incorrecto, TTL alto, propagación pendiente",
            "`dig ejemplo.com`, `nslookup`, whatsmydns.net",
            "Corregir registro; esperar TTL; limpiar caché DNS local",
          ],
          [
            "Sitio carga por IP pero no por dominio",
            "DNS",
            "Mismo que arriba; caché del resolver",
            "Comparar `curl http://IP` vs `curl http://dominio`",
            "Arreglar zona DNS; verificar que A apunta a IP correcta",
          ],
          [
            "Navegador muestra «No seguro» / certificado inválido",
            "TLS",
            "Certificado vencido, SAN incorrecto, HTTP sin redirección",
            "`openssl s_client -connect dominio:443`, DevTools → Seguridad",
            "`certbot renew` o `certbot --nginx`; forzar HTTPS en Nginx",
          ],
          [
            "Correo rebota o va a spam",
            "Correo/DNS",
            "MX incorrectos, SPF/DKIM ausentes, MX duplicados",
            "`dig MX dominio`, revisar TXT SPF",
            "Un solo proveedor MX; añadir SPF/DKIM; eliminar registros obsoletos",
          ],
          [
            "`ssh: Connection refused`",
            "SSH/Red",
            "`sshd` detenido, firewall, puerto erróneo",
            "`ssh -v usuario@IP`, `systemctl status ssh`, `ufw status`",
            "Iniciar servicio; abrir puerto 22; verificar IP y clave",
          ],
          [
            "FileZilla no conecta",
            "SFTP",
            "FTP plano bloqueado, protocolo o credenciales incorrectas",
            "Confirmar SFTP puerto 22, no FTP 21",
            "Usar SFTP con clave SSH; verificar usuario",
          ],
          [
            "Contenedor caído / puerto no responde",
            "Contenedor",
            "Imagen corrupta, puerto no mapeado, crash al inicio",
            "`docker ps -a`, `docker logs <nombre>`, `docker port <nombre>`",
            "Revisar Dockerfile/CMD; mapear `-p 8080:80`; `docker compose up` de nuevo",
          ],
          [
            "`docker run` falla en Windows",
            "Host/Docker",
            "WSL 2 o virtualización deshabilitada en BIOS",
            "Mensaje de Docker Desktop, `wsl --status`",
            "Habilitar virtualización; `wsl --install`; reiniciar Docker Desktop",
          ],
          [
            "VM sin red",
            "VM",
            "Adaptador NAT/bridge mal configurado",
            "`ping` gateway desde invitado; revisar VirtualBox/Hyper-V",
            "Cambiar modo de red; reinstalar guest additions si aplica",
          ],
          [
            "Sitio muestra versión antigua",
            "Caché",
            "Caché navegador o CDN",
            "Hard refresh; ventana incógnito",
            "Ctrl+Shift+R; purgar CDN; revisar `Cache-Control`",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comandos de diagnóstico por capa"}</h3>
      <CodeFiddle language="bash" title="Comandos de diagnóstico por capa" code={COMANDOS_DIAGNOSTICO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Casos reales"}</h3>
      <p className="my-4">
        <strong>{"E-commerce en Lima (`moda.pe`):"}</strong>
        {
          " Sin staging, los cambios iban directo a producción. Un error en variables de entorno tumbaron el checkout 2 horas en Black Friday. La decisión fue crear `staging.moda.pe` → registro A al VPS → Nginx reverse proxy → `docker compose` con imagen etiquetada `moda-api:v1.4.2`. Lección: contenedor + Compose no reemplaza DNS ni HTTPS; integra con lo aprendido en clases 1–3."
        }
      </p>
      <p className="my-4">
        <strong>{"Consultora en Santiago:"}</strong>
        {
          " Cliente reporta «sitio no seguro». El desarrollador asume DNS porque «ayer cambiaron el hosting». Diagnóstico: `dig cliente.cl` resuelve bien; `curl -vI https://cliente.cl` muestra certificado expirado hace 12 días. Acción: `certbot renew --dry-run` → timer systemd → `certbot renew`. Lección: IP que responde y DNS correcto no implican TLS válido; acotar capa antes de tocar registros."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal diagnóstico"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen diagnóstico:"}</strong>
          {" parte del síntoma, confirma capa con una herramienta (`dig`, `curl -vI`, `docker logs`), documenta."}
        </li>
        <li>
          <strong>{"Mal diagnóstico:"}</strong>
          {
            " reiniciar servidor sin revisar logs, cambiar DNS y TLS simultáneamente, asumir «propagación» sin verificar el registro, hard refresh como única solución cuando un CDN también cachea."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Asumir propagación 48 h sin dig:"}</strong>
          {" Sitio «caído» 2 días; registro A estaba mal, no era TTL. Corrección: dig autoritativo vs recursivo antes de esperar."}
        </li>
        <li>
          <strong>{"certbot en DNS incorrecto:"}</strong>
          {" Renovación falló porque A apuntaba a otro servidor. Corrección: confirmar capa DNS antes de capa TLS."}
        </li>
        <li>
          <strong>{"docker restart loop sin leer logs:"}</strong>
          {" Contenedor reiniciado 50 veces empeoró corrupción de volumen. Corrección: docker logs --tail 100 antes de restart."}
        </li>
      </ul>

      <PracticeExercise
        prompt="Síntoma: `curl http://IP` funciona, pero `curl http://dominio` falla. Escribe tres comprobaciones en orden y la causa más probable."
        hints={["Empieza por la capa DNS", "Compara resolución con `dig`", "¿El registro A apunta a la IP correcta?"]}
        expectedKeywords={["dig", "DNS", "registro A", "propagación"]}
        successMessage="Correcto. La causa más probable es un registro DNS incorrecto o propagación pendiente, no TLS ni contenedores."
      />
      <PracticeExercise
        prompt="Ordena el diagnóstico «dominio resuelve pero certificado expirado»: (a) `certbot renew`, (b) confirmar DNS con `dig`, (c) verificar fechas con `curl -vI`, (d) probar en navegador incógnito. Indica el orden correcto."
        hints={["Primero confirma que DNS resuelve", "Luego verifica el certificado", "La renovación va después de confirmar el problema"]}
        expectedKeywords={["b", "c", "a", "d"]}
        successMessage="Orden: (b) dig → (c) curl -vI → (a) certbot renew → (d) incógnito para descartar caché."
      />
    </section>
  );
}
