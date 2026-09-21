import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { Callout } from "@/components/teaching/Callout";

const MAPA = `flowchart TD
  A[Redundancia y anomalías] --> B[Dependencia funcional DF]
  B --> C[1FN → 2FN → 3FN + BCNF]
  C --> D[Desnormalización consciente]
  D --> E[Estrella vs copo de nieve]
  E --> F[Práctica + Reto + Quiz]`;

export function IntroMapaLeccionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Mapa de la lección — limpiar el diseño"}
      </h2>
      <p className="my-4">
        {
          "Ya diseñaste el ER (clase 03) y escribiste DDL/DML (clase 04). Ahora limpias el esquema: detectar redundancia, listar dependencias funcionales y aplicar 1FN → 2FN → 3FN. Luego decides, con criterio, cuándo no normalizar y cómo se ve eso en analítica (estrella / copo)."
        }
      </p>
      <p className="my-4">
        {
          "Hilo: academia “Rutas Digitales” (Cali) y startup “Andes Tech” — matrículas, facturas y tableros."
        }
      </p>
      <figure className="my-6 rounded-lg bg-white p-4">
        <MermaidDiagram
          title="Mapa de la lección — limpiar el diseño"
          description="Progresión desde redundancia hasta práctica y quiz"
          chart={MAPA}
        />
      </figure>
      <Callout title="Normalizar no es odio al JOIN" variant="callout-warning">
        {
          "Normalizar pone cada hecho en su dueño lógico. Desnormalizar no es odio al diseño: es una decisión posterior, documentada, con dueño de la verdad."
        }
      </Callout>
    </section>
  );
}
