import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function IgualLimpiarErroresSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Igual, limpiar y errores"}</h2>
      <p className="my-4">
        {
          "`8 / 0` en JavaScript devuelve `Infinity` sin lanzar excepción. La calculadora debe detectar divisor cero antes de mostrar el resultado."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`function manejarIgual() {
  if (operadorPendiente === null) return;
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
  operadorPendiente = null;
  operandoAnterior = "";
  esperandoNuevoOperando = true;
  actualizarPantalla();
}

function limpiar() {
  operandoActual = "0";
  operandoAnterior = "";
  operadorPendiente = null;
  esperandoNuevoOperando = false;
  actualizarPantalla();
}

function mostrarError(mensaje) {
  operandoActual = mensaje;
  operadorPendiente = null;
  operandoAnterior = "";
  esperandoNuevoOperando = true;
  actualizarPantalla();
}`}
      />
      <StepReveal
        title="Flujo de un clic en ="
        steps={[
          {
            title: "1. Leer estado",
            content: "Toma operandoAnterior, operadorPendiente y operandoActual.",
          },
          {
            title: "2. Calcular",
            content: "Llama calcular(...) con parseFloat interno.",
          },
          {
            title: "3. Si error",
            content:
              "mostrarError(mensaje): pantalla con el texto, operador pendiente a null, flag para nuevo dígito.",
          },
          {
            title: "4. Si ok",
            content: "Muestra resultado, limpia operador pendiente, esperandoNuevoOperando = true.",
          },
        ]}
      />
      <MermaidDiagram
        title="Decisiones al pulsar igual"
        chart={`flowchart TD
  A[Usuario pulsa igual] --> B{Hay operador pendiente}
  B -->|No| C[Conservar la pantalla]
  B -->|Sí| D[Calcular con el estado actual]
  D --> E{Resultado válido}
  E -->|No| F[Mostrar error y reiniciar operación]
  E -->|Sí| G[Mostrar resultado]
  G --> H[Limpiar operador pendiente]
  H --> I[Esperar un nuevo operando]`}
      />
      <Callout title="Precisión de flotantes">
        {
          "0.1 + 0.2 no es exactamente 0.3 en binario. En calculadora básica puedes usar toFixed al mostrar (p. ej. 8 decimales máx.) o aceptar el redondeo visible; no exijas precisión binaria perfecta."
        }
      </Callout>
    </section>
  );
}
