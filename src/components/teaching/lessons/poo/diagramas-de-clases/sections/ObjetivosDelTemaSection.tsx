import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Un diagrama de clases UML es el plano del modelo: clases, atributos, métodos y relaciones. No describe algoritmos paso a paso ni orden de ejecución — eso es otro tipo de diagrama."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar para qué sirve un diagrama de clases y qué no representa (comportamiento dinámico detallado)."
          }
        </li>
        <li>
          {
            "Dibujar en Mermaid clases con atributos y métodos, herencia (<|--) e implementación de interfaz (<|..)."
          }
        </li>
        <li>
          {
            "Distinguir asociación, agregación (o--) y composición (*--) con justificación de ciclo de vida."
          }
        </li>
        <li>
          {
            "Modelar un mini-dominio (tienda/pedidos) con cardinalidades y relación a código C# equivalente."
          }
        </li>
        <li>
          {"Detectar en un diagrama señales de mal diseño (clases sobrecargadas, jerarquías profundas)."}
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección asociacion-agregacion-composicion: asociación, agregación, composición en POO."
          }
        </li>
        <li>
          {"Lección override-y-sobrecarga: herencia y métodos en jerarquías (reflejados en diagrama)."}
        </li>
        <li>
          {
            "Lección abstraccion-clases-abstractas-interfaces: interfaces y abstractas en UML."
          }
        </li>
        <li>
          {"Lección polimorfismo: IPasarelaPago y variantes como caso recurrente."}
        </li>
      </ul>
      <Callout title="Estructura, no secuencia">
        {
          "El diagrama de clases muestra el mapa estático del dominio. Alinea al equipo antes de codificar y detecta acoplamiento temprano."
        }
      </Callout>
      <MermaidDiagram
        chart={`flowchart LR
  UML[Diagrama UML] -->|guía| CSharp[Clases C#]
  UML -->|comunica| Equipo[Equipo dev]
  CSharp -->|implementa| Dominio[Dominio real]`}
      />
    </section>
  );
}
