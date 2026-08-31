import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"BD = datos organizados; SGBD = software que los administra; GUI/CLI = clientes."}</li>
        <li>{"Relacional vs NoSQL según la forma de la pregunta, no según la moda."}</li>
        <li>{"Identificadores sin espacios; literales con comillas simples; tildes en el valor."}</li>
        <li>{"Siguiente: diseñar antes de crear — clase-03-modelos-datos-er."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "Continúa a la Clase 3 — Modelos de datos y diagramas ER: del requisito al plano conceptual, lógico y físico."
        }
      </p>
      <p className="my-6">
        <Link
          href="/teaching/bases-de-datos/clase-03-modelos-datos-er/modelos-conceptual-logico-fisico"
          className="clay-button"
        >
          {"Continuar a la Clase 3 — Modelos de datos y ER"}
        </Link>
      </p>
    </section>
  );
}
