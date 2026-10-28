import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MemoriaYRagSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Memoria persistente y recuperación de información</h2>
      <p className="my-4">
        Si el modelo no recuerda y la ventana tiene límite, ¿cómo logra un asistente «saber» las preferencias de una
        persona o responder sobre miles de documentos de una empresa? Con dos técnicas que, otra vez, viven en el programa
        y no en el modelo.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Memoria persistente</h3>
      <p className="my-4">
        La <strong>memoria persistente</strong> consiste en guardar en archivos o en una base de datos información que
        debe sobrevivir entre sesiones, y agregarla al contexto al comenzar cada sesión nueva. Puede ser escrita por la
        persona (por ejemplo, un archivo con las reglas de un proyecto) o por el propio asistente (notas sobre decisiones
        tomadas). En la página de extensiones se verán los archivos de instrucciones, que son la forma más común de esta
        memoria en las herramientas de programación.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">RAG: buscar antes de responder</h3>
      <p className="my-4">
        <strong>RAG</strong> (por <em>Retrieval-Augmented Generation</em>, generación aumentada con recuperación) es una
        técnica para responder sobre una gran cantidad de documentos sin meterlos todos en la ventana. Antes de preguntarle
        al modelo, el programa busca los fragmentos más relacionados con la pregunta y solo esos se agregan al contexto.
        Es como un estudiante que, en un examen a libro abierto, primero busca la página correcta y luego responde.
      </p>
      <MermaidDiagram
        title="Flujo de RAG"
        description="Flujo: la pregunta se convierte en un vector, se buscan los fragmentos parecidos en una base de vectores, se arma un prompt con la pregunta y los fragmentos, y el modelo responde citando las fuentes."
        chart={`flowchart LR
  P["Pregunta"] --> E["Convertir en vector<br/>embedding"]
  E --> B["Buscar fragmentos<br/>parecidos"]
  D[("Documentos<br/>divididos en fragmentos")] --> B
  B --> A["Armar prompt:<br/>pregunta + fragmentos"]
  A --> M["Modelo"]
  M --> R["Respuesta con<br/>fuentes citadas"]`}
      />
      <p className="my-4">
        Para buscar «por significado» y no solo por palabras exactas se usan <strong>embeddings</strong>: listas de
        números que representan el significado de un texto. Dos textos con significado parecido tienen embeddings
        cercanos, aunque usen palabras distintas («automóvil» y «carro», por ejemplo).
      </p>
      <CompareTable
        headers={["Técnica", "Resuelve", "Ejemplo"]}
        rows={[
          ["Historial de sesión", "Continuidad dentro de una conversación.", "Recordar lo que se dijo hace cinco mensajes."],
          ["Memoria persistente", "Continuidad entre sesiones.", "Recordar que el proyecto usa React y Material UI."],
          ["RAG", "Responder sobre información extensa o privada.", "Un asistente que responde con el reglamento estudiantil."],
          ["Herramientas de búsqueda", "Información actual que el modelo no conoce.", "Consultar la documentación vigente de una librería."],
        ]}
      />
      <Callout title="RAG también se equivoca" variant="callout-warning">
        <p className="mb-0">
          Si la búsqueda trae fragmentos equivocados, el modelo responderá con seguridad sobre información equivocada. Por
          eso las buenas aplicaciones de RAG muestran las fuentes que usaron, para que la persona pueda verificarlas.
        </p>
      </Callout>
    </section>
  );
}
