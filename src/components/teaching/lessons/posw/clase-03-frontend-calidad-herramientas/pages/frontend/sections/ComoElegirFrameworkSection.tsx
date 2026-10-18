import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComoElegirFrameworkSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cómo elegir framework"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Árbol de decisión"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  START[¿Elegir framework?] --> BIG{¿Proyecto grande?}
  BIG -->|Sí| TS{¿Experiencia TS?}
  TS -->|Sí| ANG[Angular]
  TS -->|No| REACT[React + TypeScript]
  BIG -->|No| FAST{¿Aprender rápido?}
  FAST -->|Sí| VUE[Vue o Svelte]
  FAST -->|No| REACT2[React]
  SEO{¿Necesitas SSR/SEO?} --> NEXT[Next / Nuxt / SvelteKit]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Criterios de elección"}</h3>
      <CompareTable
        headers={["Criterio", "React", "Angular", "Vue", "Svelte"]}
        rows={[
          ["Demanda laboral", "Muy alta", "Alta (enterprise)", "Media-alta", "Creciente"],
          ["TypeScript", "Opcional (común)", "Por defecto", "Opcional", "Opcional"],
          ["SSR / SEO", "Next.js", "Angular Universal", "Nuxt.js", "SvelteKit"],
          ["Curva de aprendizaje", "Media", "Alta", "Baja", "Baja-media"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"SSR y meta-frameworks"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"React"}</strong>
          {" → "}
          <strong>{"Next.js"}</strong>
          {" para SSR y SEO."}
        </li>
        <li>
          <strong>{"Vue"}</strong>
          {" → "}
          <strong>{"Nuxt.js"}</strong>
          {"."}
        </li>
        <li>
          <strong>{"Svelte"}</strong>
          {" → "}
          <strong>{"SvelteKit"}</strong>
          {"."}
        </li>
      </ul>
      <Callout title="Caso real: framework incorrecto para el equipo">
        {
          "Una startup elige Angular para un MVP con dos devs junior sin TypeScript. Tres meses después el velocity es bajo. Decisión: aplicar criterios reales — para MVP rápido → Vue o React; Angular cuando hay equipo enterprise con TS."
        }
      </Callout>
    </section>
  );
}
