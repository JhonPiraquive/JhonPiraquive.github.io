import { Callout } from "@/components/teaching/Callout";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function InformeTecnicoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Estructura de un informe técnico de incidencia"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un informe técnico documenta de principio a fin la resolución de una incidencia en un servicio web: qué fallaba, cómo se investigó, qué comandos se ejecutaron, qué cambio se aplicó, cómo se validó y qué aprendizajes quedan para el equipo. Es el entregable profesional que demuestra competencia más allá de «arreglarlo en silencio»."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En soporte corporativo y auditorías, el informe permite reproducir el diagnóstico meses después, capacitar a nuevos técnicos y evitar repetir el mismo error (ej. olvidar nginx -t). También justifica tiempos de intervención ante gerencia o clientes."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Secciones obligatorias"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Sección"}</th>
            <th className="border p-2 text-left">{"Contenido mínimo"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">
              <strong>{"1. Problema"}</strong>
            </td>
            <td className="border p-2">
              {"Síntoma reportado (ej. «sitio no carga», código HTTP, captura navegador). Fecha/hora detección."}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"2. Metodología"}</strong>
            </td>
            <td className="border p-2">
              {"Enfoque usado: reconocimiento entorno → checklist diagnóstico → hipótesis por capa."}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"3. Comandos y hallazgos"}</strong>
            </td>
            <td className="border p-2">
              {"Salidas relevantes: systemctl status, nginx -t, ss, curl, journalctl, tail logs. Sin volcados enormes — extractos clave."}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"4. Causa raíz"}</strong>
            </td>
            <td className="border p-2">
              {"Una frase clara: «nginx inactive», «listen 8080», «permisos 600 en index.html», etc."}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"5. Solución aplicada"}</strong>
            </td>
            <td className="border p-2">
              {"Acciones concretas: systemctl start, editar sites-available, chown/chmod, corregir /etc/hosts."}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"6. Validación"}</strong>
            </td>
            <td className="border p-2">
              {"Evidencias post-fix: curl 200, captura navegador, hora de verificación."}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"7. Lecciones aprendidas"}</strong>
            </td>
            <td className="border p-2">
              {"Prevención: monitorizar servicio, backup de index.html, nginx -t en CI, documentar puertos."}
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo de extracto (problema + comandos)"}</h3>
      <blockquote className="my-4 border-l-4 border-[var(--color-primary)] pl-4 italic text-sm">
        <p>
          <strong>{"Problema:"}</strong>
          {" El sitio intranet.empresa.local no respondía (timeout en navegador) desde las 09:15."}
        </p>
        <p className="mt-2">
          <strong>{"Hallazgos:"}</strong>
          {" systemctl status nginx → inactive (dead). nginx -t → successful (config válida). ss -tlnp → puerto 80 sin listener."}
        </p>
        <p className="mt-2">
          <strong>{"Solución:"}</strong>
          {" sudo systemctl start nginx && sudo systemctl enable nginx."}
        </p>
        <p className="mt-2">
          <strong>{"Validación:"}</strong>
          {" curl http://127.0.0.1/ → HTTP 200 a las 09:32. Captura navegador adjunta."}
        </p>
      </blockquote>

      <Callout title="Evidencias sin datos sensibles">
        {
          "En capturas y logs, oculta contraseñas, tokens y datos personales. Incluye hostname e IP solo si la política de la organización lo permite."
        }
      </Callout>

      <PracticeExercise
        prompt="Redacta en una frase la «causa raíz» si nginx -t falla por directiva_invalida en la línea 42 de intranet.conf y el servicio está en failed."
        hints={["Relaciona nginx -t con systemctl failed", "Menciona la directiva o el archivo"]}
        expectedKeywords={["directiva", "configuración", "intranet.conf", "sintaxis", "failed"]}
        successMessage="Ejemplo: «Causa raíz: directiva inválida en /etc/nginx/sites-available/intranet.conf línea 42, impide arranque de nginx (failed).»"
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" cronología clara; comandos copiables; causa raíz única; validación con códigos HTTP."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" «Se reinició y funcionó» sin logs; mezclar varias causas sin priorizar; omitir validación externa."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Informe sin timestamps ni comandos:"}</strong>
          {" Segundo turno repite diagnóstico desde cero. Corrección: hora, comando, output pegado, conclusión."}
        </li>
        <li>
          <strong>{"Culpar al usuario sin evidencia:"}</strong>
          {" «Debe ser su Wi-Fi» sin traceroute. Corrección: datos objetivos antes de conclusiones."}
        </li>
      </ul>

    </section>
  );
}
