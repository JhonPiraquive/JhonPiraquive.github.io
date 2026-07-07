export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de operadores y estructuras de decisión en JavaScript. Con ellos, tus scripts pueden reaccionar a datos del usuario, validar formularios y aplicar reglas de negocio — base indispensable antes de bucles y manejo de errores en la lección 05."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`===` y `!==`"}</strong>{" por defecto; la coerción de `==` oculta bugs con strings de formularios."}
        </li>
        <li>
          <strong>{"Truthy/falsy"}</strong>{" no coincide con “vacío visual”: `\"0\"` y `[]` son truthy."}
        </li>
        <li>
          <strong>{"`&&` y `||`"}</strong>{" cortocircuitan; úsalos para valores por defecto y condiciones compuestas."}
        </li>
        <li>
          <strong>{"`if`"}</strong>{" para rangos y validación; "}
          <strong>{"`switch`"}</strong>{" para un valor contra muchas constantes — no olvides `break`."}
        </li>
        <li>
          <strong>{"Valida `Number.isNaN`"}</strong>{" antes de comparar rangos numéricos."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección 05-bucles-y-errores — bucles `for`/`while` y manejo de errores con `try/catch`."}
      </p>
    </section>
  );
}
