export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Distinguir código sincrónico de asíncrono y usar temporizadores y promesas."}</li>
        <li>{"Escribir funciones async/await con try/catch."}</li>
        <li>{"Consumir una API con fetch, comprobar response.ok e interpretar JSON."}</li>
        <li>{"Construir una aplicación con estado, render y delegación de eventos."}</li>
        <li>{"Persistir datos en el navegador con localStorage."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises" target="_blank" rel="noreferrer">Usar promesas (MDN)</a>{": promesas paso a paso."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noreferrer">Usar Fetch (MDN)</a>{": peticiones HTTP desde el navegador."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/API/Window/localStorage" target="_blank" rel="noreferrer">localStorage (MDN)</a>{": almacenamiento en el navegador."}
        </li>
      </ul>
    </section>
  );
}
