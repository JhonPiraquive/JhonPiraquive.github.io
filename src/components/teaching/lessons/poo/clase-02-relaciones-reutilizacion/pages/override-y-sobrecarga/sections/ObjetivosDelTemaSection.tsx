import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección matiza dos mecanismos que suelen confundirse: override (herencia, misma firma, runtime) y overload (misma clase, firmas distintas, compile time). Complementa el polimorfismo de la lección anterior."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir override como redefinición con misma firma en jerarquía y overload como métodos homónimos con firmas distintas."
          }
        </li>
        <li>
          {
            "Implementar override correctamente (virtual/abstract + override) y procesar derivadas en List<TipoBase>."
          }
        </li>
        <li>{"Crear sobrecargas coherentes en una misma clase y predecir qué firma elige el compilador."}</li>
        <li>
          {
            "Distinguir resolución en runtime (override) vs compile time (overload) y el efecto de new frente a override."
          }
        </li>
        <li>
          {
            "Evaluar si un diseño debe usar especialización por herencia (override) o ergonomía de API (overload)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección polimorfismo: dispatch en runtime, programar contra contrato, preview virtual/override."
          }
        </li>
        <li>{"Lección herencia: jerarquía base/derivada, virtual, override, constructor con base."}</li>
        <li>
          {
            "Lección abstraccion-clases-abstractas-interfaces: métodos abstractos como candidatos a override."
          }
        </li>
      </ul>
      <CompareTable
        headers={["Aspecto", "Override", "Overload"]}
        rows={[
          ["Herencia", "Requerida", "No requerida"],
          ["Firma", "Igual a la base", "Distinta"],
          ["Resolución", "Runtime (si ref. base)", "Compile time"],
          ["Keyword típico", "override", "(ninguno extra)"],
        ]}
      />
      <Callout title="Dos mecanismos, dos momentos">
        {
          "Override especializa comportamiento en una familia de tipos. Overload ofrece varias formas de llamar la misma operación sin crear jerarquías."
        }
      </Callout>
    </section>
  );
}
