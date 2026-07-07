import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function SolucionProblemasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Diagnóstico y solución de problemas"}
      </h2>
      <p className="my-4">
        {
          "Los servicios de Internet fallan por configuración incorrecta, propagación pendiente o artefactos vencidos. El diagnóstico sistemático evita cambios al azar: identifica síntoma, capa afectada (DNS, TLS, correo, red, host) y aplica la corrección mínima."
        }
      </p>
      <CompareTable
        headers={["Síntoma", "Causa probable", "Solución"]}
        rows={[
          [
            "El dominio no abre tras cambiar DNS",
            "Propagación pendiente o registro A incorrecto",
            "Verificar A/CNAME con `dig` o herramientas online; esperar TTL; limpiar caché DNS local",
          ],
          [
            "Navegador muestra «No seguro»",
            "Certificado TLS vencido o nombre no coincide",
            "Renovar con certbot; revisar SAN del certificado; forzar HTTPS",
          ],
          [
            "Correo no llega o va a spam",
            "MX incorrectos, SPF/DKIM ausentes o MX duplicados",
            "Un solo proveedor MX; añadir TXT SPF y DKIM; verificar en panel del proveedor",
          ],
          [
            "SSH: Connection refused",
            "Servicio sshd detenido, firewall o puerto erróneo",
            "systemctl status ssh; abrir puerto en UFW/security group; confirmar IP y puerto",
          ],
          [
            "FileZilla no conecta",
            "FTP plano bloqueado; credenciales o protocolo incorrecto",
            "Usar SFTP puerto 22; verificar usuario y clave SSH",
          ],
          [
            "Sitio muestra versión antigua",
            "Caché del navegador o CDN",
            "Hard refresh (Ctrl+Shift+R); purgar CDN; revisar Cache-Control",
          ],
          [
            "docker run falla en Windows",
            "WSL 2 o virtualización deshabilitada",
            "Habilitar virtualización en BIOS; `wsl --install`; reiniciar Docker Desktop",
          ],
          [
            "VM sin red",
            "Adaptador NAT/bridge mal configurado",
            "Revisar modo de red en VirtualBox/Hyper-V; ping al gateway de la VM",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Metodología de diagnóstico"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Reproducir el fallo y anotar mensaje exacto (navegador, cliente correo, terminal)."}</li>
        <li>{"Acotar la capa: ¿DNS resuelve? ¿HTTPS válido? ¿Puerto abierto? ¿Servicio activo?"}</li>
        <li>{"Consultar logs: DevTools → Red, `journalctl -u nginx`, panel del hosting."}</li>
        <li>{"Aplicar un cambio a la vez y verificar antes del siguiente."}</li>
        <li>{"Documentar la solución para el equipo (runbook interno)."}</li>
      </ol>
      <Callout title="Regla de oro">
        {
          "No cambies nameservers y MX el mismo día sin backup de registros. Exporta la zona DNS antes de migrar correo o hosting."
        }
      </Callout>
      <PracticeExercise
        prompt="Un sitio carga por IP directa pero no por dominio. ¿Qué revisarías en orden? Escribe al menos tres pasos."
        hints={["Registro A", "Propagación DNS", "Caché del resolver"]}
        expectedKeywords={["DNS", "A", "propagación"]}
        successMessage="Correcto. Si la IP responde, el servidor funciona; el fallo suele estar en DNS o en caché del resolver."
      />
    </section>
  );
}
