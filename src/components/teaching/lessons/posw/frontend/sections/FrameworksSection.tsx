import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CompareTable } from "@/components/teaching/CompareTable";

export function FrameworksSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Frameworks: React, Angular, Vue, Svelte"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"React (Meta, 2013):"}</strong>
          {" librería de UI; JSX; Virtual DOM; mayor demanda laboral (~40.6%)."}
        </li>
        <li>
          <strong>{"Angular (Google, 2016):"}</strong>
          {" framework completo; TypeScript por defecto; enterprise (~17.1%)."}
        </li>
        <li>
          <strong>{"Vue.js (Evan You, 2014):"}</strong>
          {" framework progresivo; curva baja (~15.4%)."}
        </li>
        <li>
          <strong>{"Svelte (Rich Harris, 2016):"}</strong>
          {" compila a JS puro; sin Virtual DOM runtime (~6.5%)."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparativa de frameworks"}</h3>
      <CompareTable
        headers={["Framework", "Tipo", "Curva", "Ecosistema / meta-framework", "Mejor para"]}
        rows={[
          ["React", "Librería", "Media", "Next.js, Redux, React Query", "Mayor demanda laboral, flexibilidad"],
          ["Angular", "Framework completo", "Alta", "Angular CLI integrado", "Enterprise, equipos grandes con TS"],
          ["Vue", "Framework progresivo", "Baja", "Nuxt.js, Pinia", "Aprender rápido, adopción incremental"],
          ["Svelte", "Compilador", "Baja-media", "SvelteKit", "Apps pequeñas/medianas, alto rendimiento"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"React vs librería vs framework"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"React"}</strong>
          {" es una librería: necesitas elegir routing, estado y herramientas de build."}
        </li>
        <li>
          <strong>{"Angular"}</strong>
          {" es un framework: trae MVC, DI, módulos y CLI integrados."}
        </li>
        <li>
          <strong>{"Vue"}</strong>
          {" es progresivo: puedes usar solo la capa de vista o escalar a SPA completa."}
        </li>
        <li>
          <strong>{"Svelte"}</strong>
          {" mueve trabajo al compilador en build time — menos overhead en runtime."}
        </li>
      </ul>
      <CodeChallenge
        title="Completa características de cada framework"
        template={`React usa {{blank1}} para mezclar HTML en JS
Angular usa {{blank2}} por defecto
Vue 3 expone lógica reutilizable con {{blank3}} API
Svelte compila en {{blank4}} time sin Virtual DOM runtime`}
        blanks={[
          { id: "blank1", answer: "JSX", placeholder: "sintaxis" },
          { id: "blank2", answer: "TypeScript", placeholder: "lenguaje" },
          { id: "blank3", answer: "Composition", placeholder: "API" },
          { id: "blank4", answer: "build", placeholder: "tiempo" },
        ]}
      />
    </section>
  );
}
