import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function VentanaDeContextoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">La ventana de contexto</h2>
      <p className="my-4">
        La <strong>ventana de contexto</strong> es la cantidad máxima de tokens que un modelo puede considerar en una sola
        llamada: instrucciones del sistema, historial de la sesión, documentos adjuntos, resultados de herramientas y la
        propia respuesta. Funciona como una mesa de trabajo: todo lo que el modelo necesita para responder tiene que caber
        encima.
      </p>
      <MermaidDiagram
        title="Qué ocupa la ventana de contexto"
        description="Diagrama de torta con la distribución aproximada de una ventana de contexto en una sesión de trabajo: instrucciones del sistema, archivos de instrucciones, historial, resultados de herramientas y espacio libre para la respuesta."
        chart={`pie showData
  title Ventana de contexto de una sesión de trabajo (ejemplo)
  "Instrucciones del sistema" : 5
  "Archivos de instrucciones y herramientas disponibles" : 10
  "Historial de la conversación" : 35
  "Resultados de herramientas (archivos leídos, búsquedas)" : 30
  "Espacio libre para seguir" : 20`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué pasa cuando se llena</h3>
      <p className="my-4">
        Cuando la sesión se acerca al límite hay que liberar espacio. Las herramientas lo resuelven de varias formas:
      </p>
      <CompareTable
        headers={["Estrategia", "Qué hace", "Ventaja", "Costo"]}
        rows={[
          ["Compactar", "Reemplaza la conversación antigua por un resumen y sigue trabajando.", "La sesión continúa sin perder lo esencial.", "Se pierden detalles que el resumen no incluyó."],
          ["Recortar", "Elimina los mensajes más antiguos.", "Simple.", "El modelo olvida decisiones tomadas al inicio."],
          ["Empezar de nuevo", "Abre una sesión limpia, con un resumen escrito a mano o un archivo de instrucciones.", "Contexto limpio y enfocado.", "Hay que volver a explicar lo necesario."],
          ["Delegar", "Envía una subtarea a otro agente con su propia ventana y recibe solo el resultado.", "La ventana principal no se llena de detalles.", "Más llamadas al modelo."],
        ]}
      />
      <Callout title="Más contexto no siempre es mejor" variant="callout-warning">
        <p className="mb-0">
          Aunque un modelo acepte una ventana enorme, su atención se reparte entre todo lo que recibe. Una ventana llena de
          información irrelevante suele producir respuestas peores que una ventana pequeña y bien elegida. Gestionar el
          contexto (qué entra, qué sale y cuándo) es una de las habilidades centrales al trabajar con IA; algunos la llaman
          <em> ingeniería de contexto</em>.
        </p>
      </Callout>
    </section>
  );
}
