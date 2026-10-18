export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar qué es la POO y distinguir clase, objeto, instancia y constructor."}</li>
        <li>{"Escribir una clase con estado privado y operaciones públicas que validan."}</li>
        <li>{"Explicar qué es una invariante y dónde se hace cumplir."}</li>
        <li>{"Leer una caja UML simple y escribir el código C# equivalente."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/tutorials/oop" target="_blank" rel="noreferrer">Microsoft Learn: programación orientada a objetos en C#</a>{": introducción oficial con ejemplos."}
        </li>
        <li>
          <a href="https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/classes-and-structs/" target="_blank" rel="noreferrer">Microsoft Learn: clases y structs</a>{": referencia de miembros, constructores y accesibilidad."}
        </li>
      </ul>
    </section>
  );
}
