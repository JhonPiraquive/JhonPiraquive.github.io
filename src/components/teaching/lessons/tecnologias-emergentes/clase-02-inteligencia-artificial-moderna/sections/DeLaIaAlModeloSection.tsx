import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DeLaIaAlModeloSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">De la inteligencia artificial al modelo de lenguaje</h2>
      <p className="my-4">
        «Inteligencia artificial» es un término muy amplio. Se usa para cosas tan distintas como el filtro de correo no
        deseado y un asistente que escribe una aplicación completa. Conviene ordenarlo como un conjunto de cajas, una
        dentro de otra.
      </p>
      <MermaidDiagram
        title="Cajas dentro de cajas"
        description="Cuatro conjuntos anidados: la inteligencia artificial contiene al aprendizaje automático, que contiene al aprendizaje profundo, que contiene a la IA generativa y los modelos de lenguaje."
        chart={`flowchart TB
  subgraph IA["Inteligencia artificial: máquinas que realizan tareas que requieren inteligencia"]
    subgraph AA["Aprendizaje automático: aprenden patrones a partir de datos"]
      subgraph AP["Aprendizaje profundo: redes neuronales de muchas capas"]
        G["IA generativa y modelos de lenguaje<br/>crean texto, imágenes, audio o código"]
      end
    end
  end`}
      />
      <CompareTable
        headers={["Término", "Qué es", "Ejemplo"]}
        rows={[
          ["Inteligencia artificial", "Cualquier sistema que realiza tareas que normalmente requieren inteligencia humana.", "Un programa que juega ajedrez con reglas escritas a mano."],
          ["Aprendizaje automático", "Sistemas que aprenden patrones a partir de ejemplos, en lugar de seguir reglas escritas.", "Un filtro que aprende a detectar correo no deseado."],
          ["Aprendizaje profundo", "Aprendizaje automático con redes neuronales de muchas capas, capaces de aprender patrones complejos.", "Reconocimiento de rostros en fotos."],
          ["IA generativa", "Modelos que producen contenido nuevo: texto, imágenes, audio, video o código.", "Un sistema que crea una imagen a partir de una descripción."],
          ["Modelo de lenguaje grande (LLM)", "Un modelo generativo entrenado con enormes cantidades de texto para continuar y producir lenguaje.", "Los modelos detrás de los asistentes conversacionales actuales."],
        ]}
      />
      <p className="my-4">
        Un <strong>modelo</strong> es, en esencia, un archivo enorme de números (llamados <strong>parámetros</strong>) que
        resume lo que se aprendió durante el entrenamiento. Por sí solo no hace nada: necesita un programa que le entregue
        un texto y recoja su respuesta. Esa distinción entre el modelo y el programa que lo rodea será clave más adelante,
        al hablar de agentes.
      </p>
    </section>
  );
}
