import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

const SQL_SNAPSHOT = `CREATE TABLE FacturaDetalle (
  id INT NOT NULL AUTO_INCREMENT,
  factura_id INT NOT NULL,
  programa_id INT NOT NULL,
  Nombre_Programa_snapshot VARCHAR(200) NOT NULL,
  precio_snapshot DECIMAL(12,2) NOT NULL,
  PRIMARY KEY (id)
  -- FK a Programas opcional según política; el snapshot preserva historia
);`;

export function DesnormalizacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Desnormalización consciente"}
      </h2>
      <p className="my-4">
        {
          "Reintroducir redundancia después de entender el modelo normalizado, por lecturas, reportes o historia — no por pereza ni el día 1 “por si acaso”. Tampoco es “quitar FK”."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Decisión (pasos)"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Modelo 3FN (o cercano) que ya funciona."}</li>
        <li>{"Medir el dolor: ¿JOIN de muchas tablas en cada pantalla?"}</li>
        <li>{"Elegir técnica: snapshot, resumen, columna derivada, vista materializada."}</li>
        <li>{"Dueño de la verdad + sync (o inmutabilidad histórica)."}</li>
        <li>{"Documentar el riesgo de anomalía aceptado."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo — snapshot de factura"}</h3>
      <p className="my-4">
        {
          "Al emitir el comprobante, copias Nombre_Programa y precio congelados. La factura histórica no debe cambiar si mañana renombran el programa."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="Snapshot de factura — desnormalización consciente"
        filename="factura_snapshot.sql"
        code={SQL_SNAPSHOT}
      />
      <Callout title="Desnormalizar no es odio al diseño" variant="callout-info">
        {
          "Primero normaliza el OLTP; mide el dolor de lectura; solo entonces reintroduces redundancia con dueño de la verdad."
        }
      </Callout>
      <StepReveal
        title="Decisión consciente de desnormalizar"
        steps={[
          {
            title: "Modelo 3FN estable",
            content: "El OLTP ya funciona con integridad.",
          },
          {
            title: "Medir el dolor",
            content: "¿JOIN de muchas tablas en cada pantalla o reporte?",
          },
          {
            title: "Elegir técnica",
            content: "Snapshot, resumen, columna derivada, vista materializada (mención).",
          },
          {
            title: "Dueño + sync",
            content: "Quién escribe la verdad; cómo se propaga o se congela.",
          },
          {
            title: "Documentar riesgo",
            content: "Qué anomalía aceptas y por qué el negocio lo necesita.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso — “Andes Tech” tablero vs facturación'}
      </h3>
      <p className="my-4">
        {
          "OLTP bien normalizado pero tablero lento. Alguien copia nombres en 4 tablas operacionales sin sync: el tablero diverge de las facturas. Separar: 3FN en transacciones; snapshot en factura; estrella para BI."
        }
      </p>
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {"¿Desnormalizar es lo mismo que no diseñar? (No: es una decisión posterior y documentada.)"}
      </p>
    </section>
  );
}
