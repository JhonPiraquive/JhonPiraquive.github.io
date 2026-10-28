import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DefinicionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es una tecnología emergente</h2>
      <p className="my-4">
        Una <strong>tecnología emergente</strong> es una tecnología que está naciendo o creciendo, que todavía no se usa
        en todas partes, pero que ya muestra que puede cambiar la manera en que las personas trabajan, estudian o se
        comunican. La palabra clave es «potencial»: su impacto completo todavía no ha llegado.
      </p>
      <p className="my-4">
        Una analogía útil es la de una semilla que ya germinó. Se sabe que está viva y que crece rápido, pero todavía no
        se sabe qué tan grande será el árbol, ni si resistirá la primera sequía.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Emergente no significa reciente</h3>
      <p className="my-4">
        El término no depende de la edad. La inteligencia artificial se estudia desde mediados del siglo XX y hoy se
        considera emergente porque solo en los últimos años reunió la capacidad de cómputo, los datos y los algoritmos
        necesarios para usarse de forma masiva. Al revés, una aplicación publicada ayer puede no ser emergente si solo
        repite lo que ya hacen otras.
      </p>
      <p className="my-4">
        Por eso una tecnología <strong>deja de ser emergente</strong> cuando su uso se vuelve normal: cuando ya nadie la
        presenta como novedad y simplemente se usa. El correo electrónico, la nube o el pago con el celular pasaron por
        esa etapa.
      </p>

      <MermaidDiagram
        title="De la idea a la tecnología cotidiana"
        description="Línea de cuatro etapas: idea o investigación, tecnología emergente, tecnología en adopción masiva y tecnología cotidiana o madura."
        chart={`flowchart LR
  A["Idea o investigación<br/>Existe en laboratorios"] --> B["Tecnología emergente<br/>Funciona y crece, con incertidumbre"]
  B --> C["Adopción masiva<br/>La mayoría empieza a usarla"]
  C --> D["Tecnología cotidiana<br/>Ya nadie la llama nueva"]`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ejemplos que fueron emergentes</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>El teléfono inteligente.</strong> Al principio era un teléfono con correo. Pocos imaginaban que
          reemplazaría la cámara, el mapa, la linterna y la billetera.
        </li>
        <li>
          <strong>La computación en la nube.</strong> Alquilar servidores por minutos parecía arriesgado; hoy es la forma
          habitual de publicar una aplicación.
        </li>
        <li>
          <strong>Las librerías de interfaz como React.</strong> Cambiaron la forma de construir páginas web: de
          modificar el documento a mano a describir la pantalla con componentes. Hoy son una opción estándar.
        </li>
      </ul>

      <Callout title="Por qué importa saber reconocerlas" variant="callout-tip">
        <p className="mb-0">
          Quien reconoce a tiempo una tecnología emergente puede aprenderla antes que la mayoría y proponer su uso cuando
          aporta valor. Quien la reconoce mal invierte tiempo y dinero en algo que no llega a madurar. El módulo enseña a
          hacer ese reconocimiento con método.
        </p>
      </Callout>
    </section>
  );
}
