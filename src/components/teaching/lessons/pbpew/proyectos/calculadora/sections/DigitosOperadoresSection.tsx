import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function DigitosOperadoresSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Dígitos, punto decimal y operadores"}
      </h2>
      <p className="my-4">
        {"Al pulsar un operador sin `=`, si ya había uno pendiente, calcula primero el resultado intermedio (comportamiento de calculadora básica)."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`function manejarDigito(digito) {
  if (esperandoNuevoOperando) {
    operandoActual = digito;
    esperandoNuevoOperando = false;
  } else {
    operandoActual =
      operandoActual === "0" ? digito : operandoActual + digito;
  }
  actualizarPantalla();
}

function manejarPunto() {
  if (esperandoNuevoOperando) {
    operandoActual = "0.";
    esperandoNuevoOperando = false;
  } else if (!operandoActual.includes(".")) {
    operandoActual += ".";
  }
  actualizarPantalla();
}

function manejarOperador(nuevoOperador) {
  if (operadorPendiente !== null && !esperandoNuevoOperando) {
    const res = calcular(
      operandoAnterior,
      operadorPendiente,
      operandoActual
    );
    if (!res.ok) {
      mostrarError(res.mensaje);
      return;
    }
    operandoActual = String(res.valor);
    actualizarPantalla();
  }
  operandoAnterior = operandoActual;
  operadorPendiente = nuevoOperador;
  esperandoNuevoOperando = true;
}`}
      />
      <StepReveal
        title="Construye la calculadora en 6 pasos"
        steps={[
          {
            title: "1. Maqueta HTML",
            content:
              "Define #display y botones con data-action (digit, operator, decimal, equals, clear) y data-value donde aplique.",
          },
          {
            title: "2. Referencias y estado",
            content:
              "querySelector para #display y .teclado. Inicializa operandoActual, operandoAnterior, operadorPendiente y esperandoNuevoOperando.",
          },
          {
            title: "3. Delegación",
            content: 'Un addEventListener("click") en .teclado; closest("button") y switch por dataset.action.',
          },
          {
            title: "4. Dígitos y punto",
            content:
              "manejarDigito respeta el flag esperandoNuevoOperando; manejarPunto impide dos puntos en el mismo operando.",
          },
          {
            title: "5. Operadores e igual",
            content:
              "manejarOperador encadena cálculo intermedio; manejarIgual llama calcular() y limpia operador pendiente.",
          },
          {
            title: "6. Clear y errores",
            content:
              "limpiar() resetea todo; mostrarError() muestra mensaje y deja el estado listo para un nuevo dígito tras C.",
          },
        ]}
      />
    </section>
  );
}
