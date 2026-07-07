export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Angular es un framework opinionado de Google basado en TypeScript."}</li>
        <li>{"Componente = clase TS + template HTML + estilos; comunicación con @Input/@Output."}</li>
        <li>{"Ciclo de vida: ngOnInit para carga inicial; ngOnDestroy para limpiar suscripciones."}</li>
        <li>{"Bindings: interpolación, property, event y two-way [(ngModel)]."}</li>
        <li>{"Directivas: *ngIf/*ngFor (estructurales), ngClass/ngStyle (atributo)."}</li>
        <li>{"Pipes transforman datos en template; async evita leaks con Observables."}</li>
        <li>{"Servicios + DI centralizan HTTP y lógica reutilizable."}</li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"react"}</code>
          {" — librería de UI con JSX, hooks y flujo unidireccional."}
        </li>
      </ul>
    </section>
  );
}
