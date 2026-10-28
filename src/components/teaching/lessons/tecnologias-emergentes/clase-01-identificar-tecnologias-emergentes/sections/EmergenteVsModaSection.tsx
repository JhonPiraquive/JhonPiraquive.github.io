import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function EmergenteVsModaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Tecnología emergente, tendencia y moda</h2>
      <p className="my-4">
        En las noticias se usan como sinónimos tres palabras que en realidad significan cosas distintas. Separarlas
        evita confundir el ruido con una señal.
      </p>
      <CompareTable
        headers={["Concepto", "Qué es", "Cómo se reconoce", "Ejemplo"]}
        rows={[
          [
            "Tecnología emergente",
            "Una capacidad técnica nueva que crece y puede transformar actividades.",
            "Tiene los cinco atributos y hay evidencia de usos reales, aunque sean pocos.",
            "Los agentes de inteligencia artificial que ejecutan tareas completas.",
          ],
          [
            "Tendencia",
            "Un cambio de comportamiento o de mercado que dura años y puede apoyarse en varias tecnologías.",
            "Se observa en datos de uso y de mercado a lo largo del tiempo.",
            "El trabajo remoto, el comercio electrónico o la automatización de procesos.",
          ],
          [
            "Moda",
            "Un entusiasmo pasajero, muchas veces impulsado por publicidad.",
            "Mucho ruido y pocos casos medibles; el interés cae tan rápido como subió.",
            "Productos que agregan «con IA» o «en blockchain» al nombre sin cambiar lo que hacen.",
          ],
        ]}
      />
      <p className="my-4">
        Una tecnología emergente puede rodearse de moda, y eso no la invalida. La inteligencia artificial tiene una
        enorme carga publicitaria y, al mismo tiempo, resultados reales y medibles. El trabajo de quien evalúa consiste en
        separar ambas cosas: qué parte es promesa y qué parte ya funciona.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Tres preguntas para separar señal de ruido</h3>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>¿Existe al menos un caso real, con datos, en el que haya mejorado algo medible (tiempo, costo, calidad)?</li>
        <li>¿Quién habla de ella: solo quien la vende, o también quien la usa y quien la investiga?</li>
        <li>Si se le quita el nombre de moda, ¿el producto sigue haciendo algo distinto?</li>
      </ol>
      <Callout title="Ejemplo de moda que no prosperó" variant="callout-warning">
        <p className="mb-0">
          Los televisores con imagen en tres dimensiones llenaron las vitrinas durante unos años. Requerían gafas
          especiales, había poco contenido y la experiencia no compensaba la incomodidad. Los fabricantes dejaron de
          producirlos. La tecnología funcionaba, pero no resolvía una necesidad real de la mayoría de usuarios.
        </p>
      </Callout>
    </section>
  );
}
