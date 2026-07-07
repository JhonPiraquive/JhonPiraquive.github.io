import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre qué es Angular, anatomía de componentes, ciclo de vida, directivas y bindings, pipes y módulos, y servicios con inyección de dependencias para consumir APIs REST."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Describir Angular como framework opinionado de Google basado en TypeScript: componentes, módulos, servicios e inyección de dependencias."
          }
        </li>
        <li>
          {
            "Estructurar un componente con clase TS, plantilla HTML, @Input/@Output y ciclo de vida (ngOnInit, ngOnDestroy)."
          }
        </li>
        <li>
          {
            "Aplicar directivas estructurales y de atributo (*ngIf, *ngFor, ngClass, ngStyle) en plantillas declarativas."
          }
        </li>
        <li>
          {
            "Explicar los cuatro tipos de data binding (interpolación, property, event, two-way con ngModel)."
          }
        </li>
        <li>
          {
            "Consumir una API REST con HttpClient, servicios @Injectable y pipes (currency, date, async)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección typescript: tipos, interfaces, genéricos y tsconfig.json."}</li>
        <li>{"Familiaridad con HTML, CSS y conceptos de SPA."}</li>
        <li>{"Conocimiento básico de APIs REST y JSON."}</li>
      </ul>
      <Callout title="Angular.js ≠ Angular moderno">
        {
          "Angular.js (2010, MVC) está deprecado. Angular 2+ (2016+) es componentizado, escrito en TypeScript y usa APIs completamente distintas. No mezcles documentación antigua."
        }
      </Callout>
    </section>
  );
}
