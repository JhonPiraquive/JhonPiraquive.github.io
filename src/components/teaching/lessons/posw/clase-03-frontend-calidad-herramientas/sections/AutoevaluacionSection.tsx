export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Elegir un framework de frontend y justificar la decisión."}</li>
        <li>{"Tipar un componente con TypeScript y escribir componentes básicos en React y Angular."}</li>
        <li>{"Preparar un entorno de desarrollo con XAMPP o Docker."}</li>
        <li>{"Aplicar los cinco principios SOLID y las convenciones de nombres."}</li>
        <li>{"Usar la IA como apoyo y verificar lo que produce antes de integrarlo."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">TypeScript</a>{": documentación oficial."}
        </li>
        <li>
          <a href="https://react.dev/learn" target="_blank" rel="noreferrer">React</a>{": guía oficial."}
        </li>
        <li>
          <a href="https://angular.dev/overview" target="_blank" rel="noreferrer">Angular</a>{": documentación oficial."}
        </li>
        <li>
          <a href="https://docs.docker.com/" target="_blank" rel="noreferrer">Docker</a>{": guías y referencia."}
        </li>
      </ul>
    </section>
  );
}
