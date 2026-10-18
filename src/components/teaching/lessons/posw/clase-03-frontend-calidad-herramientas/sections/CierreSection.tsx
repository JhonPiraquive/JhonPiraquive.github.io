export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Un framework de frontend se elige por el problema, el equipo y el ecosistema, no por la moda."}</li>
        <li>{"TypeScript, SOLID y las convenciones de nombres reducen el costo de mantener el código."}</li>
        <li>{"La IA acelera el trabajo, pero lo que produce se verifica antes de integrarlo."}</li>
      </ol>
      <p className="my-4">{"Con la clase 3 se completa el recorrido: desde el modelo cliente-servidor hasta una aplicación con frontend, API y criterios de calidad."}</p>
    </section>
  );
}
