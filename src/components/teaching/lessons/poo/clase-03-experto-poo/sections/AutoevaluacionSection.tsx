export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Elegir entre clase abstracta e interfaz según el caso."}</li>
        <li>{"Explicar el polimorfismo como una misma llamada con comportamiento distinto en ejecución."}</li>
        <li>{"Enunciar los cinco principios SOLID y reconocer una violación."}</li>
        <li>{"Evaluar cohesión y acoplamiento de un conjunto de clases."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/types/interfaces" target="_blank" rel="noreferrer">Microsoft Learn: interfaces</a>{": contratos y polimorfismo en C#."}
        </li>
        <li>
          <a href="https://learn.microsoft.com/es-es/dotnet/architecture/modern-web-apps-azure/architectural-principles" target="_blank" rel="noreferrer">Microsoft Learn: principios de arquitectura</a>{": SOLID y separación de responsabilidades."}
        </li>
      </ul>
    </section>
  );
}
