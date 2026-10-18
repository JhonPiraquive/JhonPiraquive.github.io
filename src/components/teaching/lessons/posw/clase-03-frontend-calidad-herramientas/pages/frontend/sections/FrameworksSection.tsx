import { CompareTable } from "@/components/teaching/CompareTable";

export function FrameworksSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Frameworks: React, Angular, Vue, Svelte"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"En síntesis"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"React (Meta):"}</strong>
          {" librería de UI; JSX; Virtual DOM; mayor demanda laboral (~40.6%)."}
        </li>
        <li>
          <strong>{"Angular (Google):"}</strong>
          {" framework completo; TypeScript por defecto; enterprise (~17.1%)."}
        </li>
        <li>
          <strong>{"Vue.js (Evan You):"}</strong>
          {" framework progresivo; curva baja (~15.4%)."}
        </li>
        <li>
          <strong>{"Svelte (Rich Harris):"}</strong>
          {" compila a JS puro; sin Virtual DOM runtime (~6.5%)."}
        </li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Comparativa de frameworks"}
      </h3>
      <CompareTable
        headers={[
          "Framework",
          "Tipo",
          "Curva",
          "Ecosistema / meta-framework",
          "Mejor para",
        ]}
        rows={[
          [
            "React",
            "Librería",
            "Media",
            "Next.js, Redux, React Query",
            "Mayor demanda laboral, flexibilidad",
          ],
          [
            "Angular",
            "Framework completo",
            "Alta",
            "Angular CLI integrado",
            "Enterprise, equipos grandes con TS",
          ],
          [
            "Vue",
            "Framework progresivo",
            "Baja",
            "Nuxt.js, Pinia",
            "Aprender rápido, adopción incremental",
          ],
          [
            "Svelte",
            "Compilador",
            "Baja-media",
            "SvelteKit",
            "Apps pequeñas/medianas, alto rendimiento",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"React vs librería vs framework"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"React"}</strong>
          {
            " es una librería: hace falta elegir routing, estado y herramientas de build."
          }
        </li>
        <li>
          <strong>{"Angular"}</strong>
          {" es un framework: trae MVC, DI, módulos y CLI integrados."}
        </li>
        <li>
          <strong>{"Vue"}</strong>
          {
            " es progresivo: se puede usar solo la capa de vista o escalar a SPA completa."
          }
        </li>
        <li>
          <strong>{"Svelte"}</strong>
          {
            " mueve trabajo al compilador en build time — menos overhead en runtime."
          }
        </li>
      </ul>
    </section>
  );
}
