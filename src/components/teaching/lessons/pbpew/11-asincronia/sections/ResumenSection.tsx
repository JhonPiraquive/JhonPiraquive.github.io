export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Sincrónico ejecuta línea a línea; asíncrono programa trabajo futuro sin bloquear la UI."}</li>
        <li>
          {"Temporizadores (`setTimeout`, `setInterval`) devuelven ids; limpia con `clearTimeout` / `clearInterval` cuando ya no los necesitas."}
        </li>
        <li>{"Promesas modelan valores futuros; encadena con `.then`, maneja errores con `.catch` y limpia con `.finally`."}</li>
        <li>{"`async/await` hace legibles flujos lineales; errores con `try/catch`; `await` solo dentro de `async`."}</li>
        <li>{"Template literals interpolan con `${}` dentro de backticks."}</li>
        <li>{"Preview lección 12: `fetch`, HTTP y APIs REST con más detalle."}</li>
      </ul>
    </section>
  );
}
