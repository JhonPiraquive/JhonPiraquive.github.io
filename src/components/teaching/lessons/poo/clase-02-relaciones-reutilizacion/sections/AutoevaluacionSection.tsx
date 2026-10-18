export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Modelar una relación «es un» con herencia y reconocer cuándo no heredar."}</li>
        <li>{"Distinguir override de sobrecarga."}</li>
        <li>{"Elegir entre asociación, agregación y composición según el ciclo de vida."}</li>
        <li>{"Dibujar un diagrama de clases con herencia, interfaces y relaciones."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/tutorials/inheritance" target="_blank" rel="noreferrer">Microsoft Learn: herencia en C#</a>{": tutorial oficial."}
        </li>
        <li>
          <a href="https://mermaid.js.org/syntax/classDiagram.html" target="_blank" rel="noreferrer">Mermaid: diagramas de clases</a>{": sintaxis para dibujar relaciones UML."}
        </li>
      </ul>
    </section>
  );
}
