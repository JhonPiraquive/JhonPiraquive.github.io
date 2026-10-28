import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MetodoParaAprenderSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Un método para aprender cualquier tecnología</h2>
      <p className="my-4">
        Decidir adoptar una tecnología implica, casi siempre, aprenderla. Las tecnologías emergentes cambian tan rápido que
        la habilidad más duradera no es saber una herramienta, sino saber aprender una nueva en poco tiempo. Este método
        sirve para cualquiera, desde una librería de JavaScript hasta un servidor MCP.
      </p>
      <MermaidDiagram
        title="Seis pasos para aprender una tecnología"
        description="Flujo de seis pasos: entender el problema que resuelve, recorrer el tutorial oficial, construir algo pequeño propio, leer los conceptos de la documentación, compartir o explicar, y repetir con un proyecto más grande."
        chart={`flowchart LR
  A["1. Qué problema<br/>resuelve"] --> B["2. Tutorial<br/>oficial"]
  B --> C["3. Proyecto pequeño<br/>propio"]
  C --> D["4. Conceptos de la<br/>documentación"]
  D --> E["5. Explicarlo<br/>a otra persona"]
  E --> F["6. Proyecto<br/>más grande"]`}
      />
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li><strong>Entender qué problema resuelve.</strong> Antes de escribir código, leer la página de inicio y la sección «por qué» de la documentación. Sin esa respuesta, todo lo demás se olvida rápido.</li>
        <li><strong>Seguir el tutorial oficial,</strong> no el primer video que aparece. La fuente oficial está actualizada y muestra la forma recomendada.</li>
        <li><strong>Construir algo pequeño y propio,</strong> distinto del tutorial. Es la prueba de que se entendió y no solo se copió.</li>
        <li><strong>Leer los conceptos de fondo</strong> de la documentación, una vez se tiene experiencia práctica. Ahora tienen sentido.</li>
        <li><strong>Explicarlo</strong> a un compañero o por escrito. Lo que no se puede explicar, no se entendió del todo.</li>
        <li><strong>Usarlo en un proyecto más grande,</strong> donde aparecen los problemas reales.</li>
      </ol>
      <Callout title="Desconfiar de los tutoriales sin fecha" variant="callout-warning">
        <p className="mb-0">
          En tecnologías emergentes, un tutorial de hace dos años puede enseñar una forma que ya no funciona. Antes de
          seguirlo, se compara lo que usa con la documentación actual. La guía de apoyo React lo muestra con varios
          ejemplos de código antiguo y su equivalente actual.
        </p>
      </Callout>
    </section>
  );
}
