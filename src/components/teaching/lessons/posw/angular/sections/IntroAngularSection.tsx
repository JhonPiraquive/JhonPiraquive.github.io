import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function IntroAngularSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Introducción a Angular"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Angular: framework frontend de Google, escrito en TypeScript."}</li>
        <li>{"Opinionado: define estructura, routing, HTTP, forms, testing y despliegue."}</li>
        <li>{"Arquitectura: componentes + servicios + inyección de dependencias + módulos."}</li>
        <li>{"vs React: Angular es framework completo; React es librería de UI."}</li>
      </ul>
      <CompareTable
        headers={["Aspecto", "Angular", "React"]}
        rows={[
          ["Naturaleza", "Framework completo", "Librería de UI"],
          ["Lenguaje base", "TypeScript nativo", "JavaScript/TypeScript opcional"],
          ["Plantillas", "HTML declarativo con directivas", "JSX en JavaScript"],
          ["HTTP", "HttpClient integrado", "fetch o librerías externas"],
          ["Estado/DI", "Servicios + DI integrados", "Hooks + librerías (Redux, etc.)"],
        ]}
      />
      <CodeFiddle
        language="bash"
        title="Crear proyecto Angular"
        code={`npm install -g @angular/cli
ng new mi-tienda --routing --style=scss
cd mi-tienda
ng serve`}
      />
      <MermaidDiagram
        chart={`flowchart TD
  APP[AppComponent] --> NAV[NavbarComponent]
  APP --> CAT[CatalogoComponent]
  CAT --> T1[TarjetaProductoComponent]
  CAT --> T2[TarjetaProductoComponent]
  APP --> CAR[CarritoComponent]
  CAR --> ITEM[ItemCarritoComponent]`}
      />
      <Callout title="Migración a Angular con DI">
        {
          "Cada componente hacía fetch directo duplicando URLs y headers JWT. Un cambio en la API obligó a editar 12 componentes. Decisión: TransferenciasService con HttpClient e interceptores; componentes solo consumen Observables."
        }
      </Callout>
    </section>
  );
}
