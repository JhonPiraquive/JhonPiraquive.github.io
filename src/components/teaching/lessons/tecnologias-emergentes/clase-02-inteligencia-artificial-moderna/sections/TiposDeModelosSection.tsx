import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function TiposDeModelosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Tipos de modelos y cómo elegir uno</h2>
      <p className="my-4">
        No existe «el mejor modelo». Hay familias de modelos que se diferencian por tamaño, por lo que pueden procesar y
        por cómo se distribuyen. Elegir es, de nuevo, un ejercicio de criterio.
      </p>
      <CompareTable
        title="Formas de clasificar los modelos"
        headers={["Criterio", "Opciones", "Qué cambia"]}
        rows={[
          [
            "Tamaño",
            "Grandes, medianos y pequeños.",
            "Los grandes razonan mejor en tareas difíciles; los pequeños son más rápidos y baratos, y algunos caben en un celular o en el navegador.",
          ],
          [
            "Tipo de datos (modalidad)",
            "Solo texto o multimodales (texto, imagen, audio, video).",
            "Un modelo multimodal puede leer una captura de pantalla o un plano, no solo texto.",
          ],
          [
            "Forma de responder",
            "Respuesta directa o con razonamiento extendido.",
            "Algunos modelos «piensan» paso a paso antes de responder: tardan más, pero se equivocan menos en problemas de varios pasos.",
          ],
          [
            "Distribución",
            "Cerrados (se usan solo a través del servicio del proveedor) o de pesos abiertos (se pueden descargar y ejecutar en equipos propios).",
            "Los abiertos dan control y privacidad, pero exigen hardware y mantenimiento; los cerrados son más fáciles de usar, pero los datos salen hacia el proveedor.",
          ],
          [
            "Especialización",
            "Generales o especializados (código, medicina, derecho, embeddings).",
            "Un modelo especializado puede superar a uno general en su tema, pero no sirve fuera de él.",
          ],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cuatro preguntas para elegir</h3>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li><strong>Calidad:</strong> ¿resuelve bien la tarea concreta? Se comprueba con ejemplos propios, no solo con tablas publicitarias.</li>
        <li><strong>Costo:</strong> ¿cuánto cuesta por cada mil o millón de tokens, multiplicado por el uso esperado?</li>
        <li><strong>Velocidad:</strong> ¿responde a tiempo para la experiencia que se quiere ofrecer?</li>
        <li><strong>Privacidad y control:</strong> ¿pueden los datos salir de la organización? ¿Qué dice la regulación del sector?</li>
      </ol>
      <Callout title="Los modelos cambian muy rápido" variant="callout-info">
        <p className="mb-0">
          Cada pocos meses aparecen modelos nuevos que superan a los anteriores. Por eso es mala idea atar un proyecto a un
          modelo concreto escrito por todo el código. La práctica recomendada es guardar el nombre del modelo en una
          variable de configuración y tener un conjunto de pruebas propias para comparar modelos cuando aparezca uno nuevo.
        </p>
      </Callout>
    </section>
  );
}
