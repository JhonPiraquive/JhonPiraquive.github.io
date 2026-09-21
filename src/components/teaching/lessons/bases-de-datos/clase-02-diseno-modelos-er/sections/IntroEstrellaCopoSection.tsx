import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

export function IntroEstrellaCopoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Familias en una mirada + nota BI"}
      </h2>
      <CompareTable
        headers={["Familia", "Organización", "Cuándo encaja"]}
        rows={[
          ["Relacional", "Tablas + PK/FK + SQL", "Matrículas, facturas, inventario"],
          ["Documentos", "JSON flexible", "Catálogo con atributos variables"],
          ["Grafos", "Nodos + aristas", "Caminos / recomendaciones"],
        ]}
      />
      <Callout title="Estrella / copo de nieve — diferido" variant="callout-info">
        {
          "Hechos + dimensiones (estrella) y dimensiones normalizadas (copo) son formas analíticas / BI. Solo reconocimiento aquí: el detalle vive en la clase 5 (normalización y esquemas). No expandimos DW en esta clase de diseño OLTP."
        }
      </Callout>
    </section>
  );
}
