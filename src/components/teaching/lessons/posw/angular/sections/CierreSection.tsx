export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado los fundamentos de Angular: componentes, ciclo de vida, directivas, bindings, pipes, módulos y servicios con DI."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Un componente une clase TS, template HTML y estilos."}</li>
        <li>{"ngOnInit carga datos; ngOnDestroy limpia suscripciones."}</li>
        <li>{"No mutar @Input() — emitir eventos con @Output."}</li>
        <li>{"Servicios centralizan HTTP; DI evita duplicar lógica."}</li>
        <li>{"async pipe simplifica Observables y previene memory leaks."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"react"}</code>
        {" — librería de UI con JSX, hooks y Virtual DOM."}
      </p>
    </section>
  );
}
