import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: panel de carga con reintentos"}
      </h2>
      <p className="my-4 font-semibold">{"«Panel de carga con reintentos»"}</p>
      <p className="my-4">{"Implementa en consola o `<script>`:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "`function esperar(ms)` — promesa que resuelve tras `ms` ms (reutiliza el patrón de la lección)."
          }
        </li>
        <li>
          {
            "`function simularFetch(intentos)` — devuelve una `Promise` que tras `esperar(400)` rechaza si `intentos < 2`, y resuelve `{ ok: true, datos: \"PBPEW\" }` si `intentos >= 2` (simula red inestable)."
          }
        </li>
        <li>
          {
            "`async function cargarConReintentos(max = 3)` — bucle `for` con `await simularFetch(i)`; en `catch`, si quedan intentos, espera 300 ms con `await esperar(300)` y reintenta; si se agotan, muestra error con template literal `` `Falló tras ${max} intentos` ``."
          }
        </li>
        <li>
          {
            "`let spinnerId = setInterval(() => console.log(\"...\"), 500)` — al iniciar carga; en `finally` (o bloque al terminar), `clearInterval(spinnerId)`."
          }
        </li>
        <li>
          {
            "Flujo de prueba: llamar `cargarConReintentos(3)` y ver spinner hasta éxito en el segundo intento simulado; luego probar con `max = 1` y ver mensaje de fallo."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: usa promesa + `async/await` + temporizadores con limpieza; maneja rechazos; template literal en mensaje de error; no deja `setInterval` activo al terminar."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Esqueleto — cargarConReintentos"
        code={`function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function simularFetch(intentos) {
  return esperar(400).then(() => {
    if (intentos < 2) {
      return Promise.reject(new Error("Red inestable"));
    }
    return { ok: true, datos: "PBPEW" };
  });
}

async function cargarConReintentos(max = 3) {
  let spinnerId = setInterval(() => console.log("..."), 500);
  try {
    for (let i = 1; i <= max; i++) {
      try {
        const resultado = await simularFetch(i);
        console.log("Éxito:", resultado);
        return resultado;
      } catch (err) {
        if (i === max) throw err;
        await esperar(300);
      }
    }
  } catch (err) {
    console.error(\`Falló tras \${max} intentos\`, err.message);
  } finally {
    clearInterval(spinnerId);
  }
}

// Pruebas:
// cargarConReintentos(3);  // éxito en intento 2
// cargarConReintentos(1);  // fallo con mensaje template literal`}
      />
      <PracticeExercise
        prompt="Implementa el reto «Panel de carga con reintentos»: esperar, simularFetch, cargarConReintentos con spinner, reintentos y clearInterval en finally. Pega tu código o describe el flujo con max=3 y max=1."
        hints={[
          "simularFetch: reject si intentos < 2, resolve si >= 2",
          "Bucle for con try/catch interno para reintentos",
          "clearInterval(spinnerId) en finally",
          "Template literal en mensaje de error final",
        ]}
        expectedKeywords={["async", "await", "clearInterval", "finally", "reintento"]}
        successMessage="Excelente. Has integrado promesas, async/await, temporizadores con limpieza y manejo de errores en un flujo realista."
        rows={10}
      />
    </section>
  );
}
