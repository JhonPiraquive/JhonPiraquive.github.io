import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MensajesYRolesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Prompts, mensajes y roles</h2>
      <p className="my-4">
        Un <strong>prompt</strong> es el texto que se le entrega a un modelo para que responda. En los asistentes actuales
        no es un único texto, sino una lista de <strong>mensajes</strong>, cada uno con un <strong>rol</strong> que indica
        quién lo dice. Casi todos los proveedores usan la misma estructura.
      </p>
      <CompareTable
        headers={["Rol", "Quién lo escribe", "Para qué sirve", "Ejemplo"]}
        rows={[
          [
            "Sistema (system)",
            "Quien construye la aplicación.",
            "Fija el comportamiento general: tono, reglas, límites, formato. El usuario normalmente no lo ve.",
            "«Eres un asistente de una biblioteca universitaria. Responde en español y en menos de cien palabras.»",
          ],
          [
            "Usuario (user)",
            "La persona que usa la aplicación (o el programa en su nombre).",
            "Hace la pregunta o el pedido.",
            "«¿Qué libros hay sobre agricultura de precisión?»",
          ],
          [
            "Asistente (assistant)",
            "El modelo.",
            "Contiene las respuestas anteriores del modelo, para que la conversación tenga continuidad.",
            "«Hay tres libros disponibles…»",
          ],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué hace bueno a un prompt</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Contexto:</strong> quién lo pide, para qué y para quién es el resultado.</li>
        <li><strong>Tarea concreta:</strong> qué se espera exactamente, con verbos claros.</li>
        <li><strong>Ejemplos:</strong> uno o dos ejemplos del resultado deseado mejoran mucho la respuesta.</li>
        <li><strong>Formato:</strong> lista, tabla, JSON, extensión máxima.</li>
        <li><strong>Restricciones:</strong> qué no hacer, qué fuentes usar, qué hacer si falta información.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se ve en código</h3>
      <p className="my-4">
        Cuando una aplicación web usa un modelo, la llamada se hace desde un servidor propio, nunca desde el navegador,
        porque requiere una clave secreta. El ejemplo usa el SDK oficial de Anthropic en Node.js; otros proveedores
        siguen una estructura casi idéntica (sistema, lista de mensajes, límite de tokens).
      </p>
      <CodeFiddle
        language="javascript"
        title="servidor/asistente.js (se ejecuta en el servidor)"
        code={`import Anthropic from "@anthropic-ai/sdk";

// El SDK lee la clave de la variable de entorno ANTHROPIC_API_KEY.
const cliente = new Anthropic();

export async function preguntarAlAsistente(historial) {
  const respuesta = await cliente.messages.create({
    model: process.env.MODELO_IA, // el nombre del modelo vive en la configuración
    max_tokens: 500,              // límite de tokens de la respuesta
    system: "Eres el asistente de una biblioteca universitaria. Responde en español y en menos de cien palabras.",
    messages: historial,          // [{ role: "user", content: "..." }, { role: "assistant", content: "..." }, ...]
  });

  const bloqueDeTexto = respuesta.content.find((bloque) => bloque.type === "text");
  return bloqueDeTexto ? bloqueDeTexto.text : "";
}`}
      />
      <Callout title="Conexión con la guía de React" variant="callout-info">
        <p className="mb-0">
          Desde React, la pantalla de chat hace un <code>fetch</code> con método POST a la API propia, muestra un estado
          de carga mientras espera y maneja el error si algo falla. Es el mismo patrón del CRUD de la guía de apoyo, parte
          3: la IA no cambia la forma de comunicarse con un servidor.
        </p>
      </Callout>
    </section>
  );
}
