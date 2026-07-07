export function CasosRealesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Casos reales"}</h2>
      <h4 className="mb-2 font-semibold">{"Widget de cotización en dashboard financiero"}</h4>
      <p className="my-4">
        {
          "Un fintech muestra un mini-calc para probar comisiones. Al pulsar «%» dos veces seguidas, la pantalla mostraba `150%%` y `parseFloat` devolvía `NaN`. Reestructuraron con el mismo patrón que una calculadora: operando en edición, operando guardado, operación pendiente, validación antes de `parseFloat`, mensaje `\"Entrada no válida\"` y botón `C` que resetea todo."
        }
      </p>
      <p className="my-4">
        <strong>{"Decisión clave:"}</strong>{" tratar la UI como reflejo del estado en memoria, no como base de datos."}
      </p>
      <h4 className="mb-2 mt-6 font-semibold">{"App de propinas que mostraba `Infinity`"}</h4>
      <p className="my-4">
        {
          "La calculadora de propinas dividía la cuenta entre número de comensales sin validar cero comensales. `total / 0` mostraba `Infinity`; usuarios reportaron que la app estaba rota. Añadieron guarda explícita: si el divisor es `0`, mostrar mensaje localizado, bloquear `=` hasta `C`, y registrar el caso en analytics."
        }
      </p>
      <p className="my-4">
        <strong>{"Lección:"}</strong>{" en JavaScript la división por cero no lanza error; la UX debe anticipar el caso."}
      </p>
    </section>
  );
}
