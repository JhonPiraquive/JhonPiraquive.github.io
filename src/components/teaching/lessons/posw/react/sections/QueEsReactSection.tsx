import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsReactSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es React?"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"React:"}</strong>
          {" librería JavaScript (Meta, 2013) para interfaces con componentes reutilizables."}
        </li>
        <li>{"Tres pilares: componentes, Virtual DOM, flujo unidireccional de datos."}</li>
        <li>
          {
            "Virtual DOM: representación en memoria; React calcula el diff mínimo y actualiza solo lo necesario."
          }
        </li>
        <li>{"Componentes funcionales: estándar moderno con Hooks (desde 2019)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo unidireccional de datos"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  EST[Estado en componente padre] -->|props| HIJO[Componente hijo]
  HIJO -->|callback onAgregar| EST
  EST --> RENDER[Re-render Virtual DOM]
  RENDER --> DOM[DOM real actualizado]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"React vs Angular"}</h3>
      <CompareTable
        headers={["Aspecto", "React", "Angular"]}
        rows={[
          ["Naturaleza", "Librería de UI", "Framework completo"],
          ["Plantillas", "JSX en JavaScript/TS", "HTML declarativo con directivas"],
          ["Estado", "useState, useReducer, librerías externas", "Servicios + DI integrados"],
          ["Ciclo de vida", "useEffect (hooks)", "ngOnInit, ngOnDestroy, etc."],
          ["HTTP", "fetch, React Query, SWR", "HttpClient integrado"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Crear proyecto con Vite"}</h3>
      <CodeFiddle
        language="bash"
        title="Crear proyecto con Vite"
        code={`npm create vite@latest mi-app -- --template react-ts
cd mi-app
npm install
npm run dev`}
      />
      <Callout title="Producto equivocado al navegar rápido">
        {
          "El usuario va de /productos/1 a /productos/2. useEffect sin limpieza aplica la respuesta tardía del ID anterior. Decisión: dependencia [id], flag cancelado o AbortController en cleanup."
        }
      </Callout>
    </section>
  );
}
