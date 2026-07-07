import { CompareTable } from "@/components/teaching/CompareTable";

export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Diagrama de clases:"}</strong>
          {" estructura estática — clases, atributos, métodos, relaciones."}
        </li>
        <li>
          <strong>{"Herencia"}</strong>
          {" <|--; "}
          <strong>{"implementación"}</strong>
          {" <|..; estereotipos <<abstract>>, <<interface>>."}
        </li>
        <li>
          <strong>{"Relaciones:"}</strong>
          {" asociación -->, agregación o--, composición *-- + cardinalidad."}
        </li>
        <li>
          <strong>{"Mermaid"}</strong>
          {" reutilizable en el curso; mismo modelo mapeable a C#."}
        </li>
        <li>
          <strong>{"Foco:"}</strong>
          {" diagramas pequeños, actualizados, alineados al código."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" solid-principios — reglas para clases sobrecargadas detectadas en diagramas."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist símbolos Mermaid"}</h3>
      <CompareTable
        headers={["Concepto", "Sintaxis Mermaid"]}
        rows={[
          ["Herencia", "Base <|-- Derivada"],
          ["Implementación interfaz", "IContrato <|.. Clase"],
          ["Asociación", "A --> B"],
          ["Agregación", "Todo o-- Parte"],
          ["Composición", "Todo *-- Parte"],
          ['Cardinalidad', '"1" --> "0..*"'],
        ]}
      />
    </section>
  );
}
