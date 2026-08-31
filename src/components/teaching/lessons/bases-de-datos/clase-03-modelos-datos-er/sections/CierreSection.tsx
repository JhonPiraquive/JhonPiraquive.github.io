import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <p className="my-4">{"Ideas clave de esta clase de diseño:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Diseñar antes de crear: requisitos → ER → físico → DDL."}</li>
        <li>{"Cardinalidad correcta y N:M con tabla puente."}</li>
        <li>{"Familias = contexto de la pregunta, no moda."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores frecuentes (cierre global)"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Empezar por CREATE TABLE sin modelo ni ER."}</li>
        <li>{"Mezclar niveles (tipos SQL en el conceptual)."}</li>
        <li>
          {
            "Cardinalidad incorrecta; N:M sin tabla puente; FK en el lado 1 de una 1:N."
          }
        </li>
        <li>
          {
            "Todo VARCHAR; PK inestable; FK y PK de tipos distintos; hijas antes que padres."
          }
        </li>
        <li>{"Elegir familia por moda sin mirar la forma de la pregunta."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Siguiente:"}</strong>{" "}
        {
          "Clase 4 — DDL y DML relacional: sentencias SQL sobre el esquema ya modelado (incluye JOINs)."
        }
      </p>
      <p className="my-6">
        <Link
          href="/teaching/bases-de-datos/clase-04-ddl-dml-relacional/ddl-estructura"
          className="clay-button"
        >
          {"Continuar a la Clase 4 — DDL y DML relacional"}
        </Link>
      </p>
    </section>
  );
}
