import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: validador de PIN con reintentos"}
      </h2>
      <p className="my-4">
        {
          'Un cajero simulado en JavaScript debe validar un PIN correcto (const PIN_CORRECTO = "1234") aplicando bucles, control de flujo y manejo de errores.'
        }
      </p>
      <p className="my-4 font-semibold">{"Reglas:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Máximo 3 intentos usando un bucle (for o while con contador)."}</li>
        <li>{"Si el intento es vacío o no numérico, usar continue sin consumir intento."}</li>
        <li>{"Si el PIN es correcto, imprimir “Acceso concedido” y salir con break."}</li>
        <li>{"Si tras 3 intentos fallidos no acertó, imprimir “Tarjeta bloqueada”."}</li>
        <li>
          {
            "Envolver la lectura simulada en try/catch: una función leerPinSimulado(valor) lanza Error si valor es null (simula fallo de hardware)."
          }
        </li>
        <li>
          {
            "En catch, mostrar “Error de lectura, reintente” y no contar ese intento como fallo de PIN."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          'Datos de prueba sugeridos: ["", "12ab", "0000", "1234"] o entrada por prompt en consola del navegador.'
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Esqueleto — validador de PIN"
        code={`const PIN_CORRECTO = "1234";
const MAX_INTENTOS = 3;
let accesoConcedido = false;

function leerPinSimulado(valor) {
  if (valor === null) {
    throw new Error("Fallo de lectura del teclado");
  }
  return valor;
}

function esPinValido(texto) {
  return texto !== "" && /^\\d+$/.test(texto);
}

// Simula entradas (reemplaza por prompt en navegador)
const entradas = ["", "12ab", null, "0000", "1234"];
let indiceEntrada = 0;
let intentosFallidos = 0;

while (intentosFallidos < MAX_INTENTOS && !accesoConcedido) {
  const valor = entradas[indiceEntrada++] ?? "0000";

  try {
    const pin = leerPinSimulado(valor);

    if (!esPinValido(pin)) {
      console.log("Entrada inválida, reintente");
      continue; // no consume intento fallido
    }

    if (pin === PIN_CORRECTO) {
      console.log("Acceso concedido");
      accesoConcedido = true;
      break;
    }

    intentosFallidos++;
    console.log(\`PIN incorrecto (\${intentosFallidos}/\${MAX_INTENTOS})\`);
  } catch (err) {
    console.log("Error de lectura, reintente");
    // no incrementar intentosFallidos
  }
}

if (!accesoConcedido && intentosFallidos >= MAX_INTENTOS) {
  console.log("Tarjeta bloqueada");
}`}
      />
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: usa al menos un bucle, break o continue con propósito claro, throw + try/catch, límite de 3 intentos fallidos de PIN, mensajes distintos para éxito, bloqueo y error de lectura."
        }
      </p>
      <PracticeExercise
        prompt="Implementa o completa el validador de PIN según las 6 reglas. Documenta qué hace continue en entradas inválidas y qué hace catch cuando valor es null."
        hints={[
          "continue cuando pin vacío o no numérico — no sumes al contador de fallos",
          "break tras Acceso concedido",
          "leerPinSimulado(null) → throw; catch → Error de lectura, reintente",
          "Tras 3 fallos de PIN (no lectura) → Tarjeta bloqueada",
        ]}
        expectedKeywords={["break", "continue", "try", "catch", "throw", "3"]}
        successMessage="Excelente. Has integrado bucles, control de flujo y manejo de errores en un flujo con reintentos limitados — patrón habitual en formularios y APIs."
        rows={6}
      />
    </section>
  );
}
