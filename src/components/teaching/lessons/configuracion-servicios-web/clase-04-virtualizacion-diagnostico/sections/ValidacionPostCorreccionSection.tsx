import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const VALIDACION_CURL = `# Desde el servidor (local)
curl -s -o /dev/null -w "HTTP %{http_code}\\n" http://127.0.0.1/
curl -v http://127.0.0.1/ 2>&1 | head -20

# Por nombre interno (si aplica server_name)
curl -s -o /dev/null -w "HTTP %{http_code}\\n" http://intranet.empresa.local/

# Verificar contenido esperado
curl -s http://127.0.0.1/ | head -5

# Desde otra máquina (conectividad externa)
curl -s -o /dev/null -w "HTTP %{http_code}\\n" http://IP_PUBLICA:PUERTO/`;

export function ValidacionPostCorreccionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Validación tras la corrección"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La validación post-corrección confirma que la acción correctiva restauró el servicio web en todos los puntos de acceso relevantes: localhost dentro del servidor, nombre interno (server_name) y, cuando aplica, el cliente externo (navegador o curl desde otra máquina). Sin esta fase, el informe técnico queda incompleto."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Es posible que nginx responda en 127.0.0.1 pero falle por nombre por un /etc/hosts erróneo, o que el puerto interno 80 no coincida con el mapeo externo. Validar en capas evita cerrar un ticket prematuramente y demuestra que entiendes la diferencia entre prueba local y acceso de usuario final."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <StepReveal
        title="Secuencia de validación"
        steps={[
          {
            title: "Servicio activo",
            content: "systemctl status nginx debe mostrar active (running) sin errores recientes en journalctl.",
          },
          {
            title: "curl local",
            content: "curl http://127.0.0.1/ → HTTP 200 (o código esperado). Incluir -w para documentar código en informe.",
          },
          {
            title: "curl por server_name",
            content: "Si el sitio usa nombre interno, repetir curl con ese hostname; confirma server_name y /etc/hosts.",
          },
          {
            title: "Navegador o curl externo",
            content: "Desde el equipo cliente, abrir URL con IP:puerto o dominio. Captura como evidencia final.",
          },
          {
            title: "Registro en informe",
            content: "Anotar comandos, códigos HTTP y hora de verificación. Comparar con síntoma inicial.",
          },
        ]}
      />

      <CodeFiddle language="bash" title="Comandos curl de validación" code={VALIDACION_CURL} />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Incidencia: sitio intranet devolvía 403. Corrección: chmod 644 y chown www-data en index.html. Validación: curl local → 200; curl http://intranet.empresa.local/ → 200; navegador en estación de trabajo → página visible. Informe incluye las tres evidencias con timestamp."
        }
      </p>

      <PracticeExercise
        prompt="Tras corregir nginx, curl http://127.0.0.1/ devuelve 200 pero el navegador externo muestra timeout. Menciona dos comprobaciones adicionales (comando o capa) antes de dar por cerrada la incidencia."
        hints={["Piensa en firewall e iptables", "¿El puerto externo coincide con listen interno?"]}
        expectedKeywords={["ss", "firewall", "iptables", "puerto", "curl"]}
        successMessage="Revisar ss -tlnp vs puerto esperado externamente, reglas iptables/ufw, y curl desde el host cliente hacia IP:puerto mapeado."
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" validar local y externo; guardar código HTTP en informe; probar tras cada cambio único."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" cerrar ticket solo con «nginx restart»; confiar en ping cuando el fallo es HTTP; no probar server_name."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Cerrar ticket sin verificar externo:"}</strong>
          {" Soporte validó solo en LAN oficina; clientes móviles seguían fallando. Corrección: prueba desde red celular o herramienta externa."}
        </li>
        <li>
          <strong>{"Smoke test único sin regresión:"}</strong>
          {" Fix TLS rompió redirect www. Corrección: checklist: apex, www, http, https, API health."}
        </li>
      </ul>

    </section>
  );
}
