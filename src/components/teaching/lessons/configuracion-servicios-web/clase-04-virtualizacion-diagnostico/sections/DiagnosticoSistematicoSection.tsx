import { StepReveal } from "@/components/teaching/StepReveal";
import { Callout } from "@/components/teaching/Callout";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const CHECKLIST_DIAGNOSTICO = [
  "1. Reproducir el síntoma y registrar mensaje exacto (navegador, curl, terminal).",
  "2. Confirmar entorno: whoami, hostname, hostname -I (¿servidor correcto?).",
  "3. Estado del servicio web: systemctl status nginx (active/inactive/failed).",
  "4. Validar configuración: sudo nginx -t (sintaxis sites-available).",
  "5. Puertos en escucha: sudo ss -tlnp | grep -E ':80|:443'.",
  "6. Conectividad local: curl -v http://127.0.0.1/ y curl -v http://nombre-interno/.",
  "7. Logs del servicio: journalctl -u nginx -n 50 --no-pager.",
  "8. Logs de acceso/error Nginx: tail /var/log/nginx/*.log.",
  "9. Archivos del sitio: ls -la /var/www/…/index.html (existencia y permisos).",
  "10. Un cambio correctivo → repetir pasos 3, 5, 6 para validar.",
];

export function DiagnosticoSistematicoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Metodología de diagnóstico sistemático"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El diagnóstico sistemático es un procedimiento ordenado para encontrar la causa raíz de una incidencia en un servicio web: partir del síntoma observable, verificar capa por capa (servicio, configuración, red, archivos, logs) y aplicar una corrección a la vez con validación posterior. Evita cambios al azar que empeoran el estado o ocultan la causa real."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Cuando un sitio corporativo «no carga», las causas posibles son muchas: nginx detenido, error de sintaxis en virtual host, puerto incorrecto, permisos en index.html, firewall, DNS local (/etc/hosts) o archivo eliminado. Un técnico que reinicia todo sin checklist pierde tiempo y no aprende. La metodología convierte el soporte en un proceso auditable y enseñable."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist de diagnóstico web en servidor Linux"}</h3>
      <ol className="my-4 list-decimal pl-6">
        {CHECKLIST_DIAGNOSTICO.map((item) => (
          <li key={item} className="mb-2">
            {item}
          </li>
        ))}
      </ol>

      <StepReveal
        title="Justificación de cada acción"
        steps={[
          {
            title: "systemctl status nginx",
            content:
              "Responde: ¿el daemon está corriendo? Si inactive o failed, el sitio no servirá aunque la config sea correcta.",
          },
          {
            title: "nginx -t",
            content:
              "Prueba sintaxis sin aplicar cambios. Un error en sites-available impide arranque o deja el servicio en failed.",
          },
          {
            title: "ss -tlnp",
            content:
              "Confirma que nginx escucha en el puerto esperado (80/443). Un listen 8080 cuando el proxy espera 80 explica timeouts externos.",
          },
          {
            title: "curl local",
            content:
              "Distingue problema de red externa vs aplicación: si curl http://127.0.0.1 falla, el fallo está en el servidor, no en el firewall del cliente.",
          },
          {
            title: "journalctl y logs Nginx",
            content:
              "Muestran el error concreto: permission denied, file not found, bind() failed, directiva inválida.",
          },
        ]}
      />

      <Callout title="Regla: un cambio a la vez">
        {
          "Tras cada corrección (reiniciar servicio, editar config, chmod), vuelve a systemctl status y curl antes de tocar otra capa. Si cambias config y firewall a la vez, no sabrás cuál resolvió el problema."
        }
      </Callout>

      <PracticeExercise
        prompt="Síntoma: curl http://127.0.0.1 devuelve «Connection refused» pero ss muestra nginx en puerto 8080. ¿Cuál es la causa más probable y qué dos comandos confirmarían la hipótesis?"
        hints={["Compara puerto en ss con puerto en curl", "Revisa sites-available listen directive"]}
        expectedKeywords={["8080", "listen", "80", "nginx -t", "sites-available"]}
        successMessage="Probable desajuste de puerto: nginx escucha 8080 pero se prueba :80. Confirmar con grep listen en sites-available y curl http://127.0.0.1:8080."
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" checklist impreso o en runbook; anotar salida de cada paso; hipótesis antes de editar archivos."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" reiniciar nginx sin nginx -t; asumir DNS externo cuando curl local ya falla; omitir logs tras un failed."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Saltar capas: reiniciar todo:"}</strong>
          {" Reboot ocultó bug de disco lleno que volvió en horas. Corrección: metodología capa por capa con evidencia en log."}
        </li>
        <li>
          <strong>{"Un cambio múltiple:"}</strong>
          {" DNS y cert cambiados juntos; imposible saber cuál falló. Corrección: un cambio, verificar, documentar, siguiente."}
        </li>
      </ul>

    </section>
  );
}
