import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

export function MapaClase05Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Objetivos y mapa de la clase"}
      </h2>
      <p className="my-4">
        {
          "Tras ER (clase 03) y SQL (clase 04), se limpia el esquema: redundancia → DF → formas normales → desnormalización consciente → formas analíticas (estrella/copo). Recorre las páginas en ese orden."
        }
      </p>
      <CompareTable
        headers={["Página", "Qué aprendes", "Entregable mental"]}
        rows={[
          [
            "Redundancia y dependencia funcional",
            "Anomalías + DF (A → B)",
            "Nombrar una anomalía y escribir 2 DFs",
          ],
          [
            "Formas normales 1FN, 2FN y 3FN",
            "Checklist ejecutable + BCNF mención",
            "Llevar una tabla sucia a 3FN",
          ],
          ["Desnormalización", "Cuándo / por qué / riesgos", "Justificar un snapshot de factura"],
          [
            "Estrella y copo de nieve",
            "Dims planas vs normalizadas en BI",
            "Dibujar estrella y copo (no OLTP)",
          ],
          [
            "Práctica y cierre",
            "Ejercicios, reto integrador, quiz",
            "Argumentar el procedimiento",
          ],
        ]}
      />
      <Callout title="Checklist mental de la clase" variant="callout-warning">
        {
          "¿Hay redundancia no controlada? ¿Listé DFs? ¿1FN (atómico)? ¿2FN (sin parciales)? ¿3FN (sin transitivas)? ¿Desnormalizo con política? ¿Estrella/copo es analítica, no el OLTP?"
        }
      </Callout>
    </section>
  );
}
