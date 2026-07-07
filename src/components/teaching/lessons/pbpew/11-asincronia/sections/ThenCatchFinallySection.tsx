import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ThenCatchFinallySection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"then, catch, finally"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{".then(onFulfilled)"}</strong>
          {" registra qué hacer cuando la promesa se cumple. Devuelve otra promesa, lo que permite encadenar pasos."}
        </li>
        <li>
          <strong>{".catch(onRejected)"}</strong>
          {" maneja rechazos en la promesa actual o en cualquier `.then` anterior de la cadena."}
        </li>
        <li>
          <strong>{".finally(onFinally)"}</strong>
          {
            " se ejecuta siempre al terminar (éxito o error). Útil para ocultar spinners o logging; no recibe el valor resuelto ni sustituye a `catch`."
          }
        </li>
      </ul>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        <strong>{"Preview lección 12:"}</strong>
        {" `fetch`, cabeceras y `response.ok` se profundizan en HTTP; aquí el foco es el flujo de promesas."}
      </p>
      <Callout title="Error frecuente — olvidar return en .then">
        {
          ".then(x => { procesar(x); }) sin return hace que el siguiente .then reciba undefined. Si el siguiente paso necesita el valor, usa return procesar(x) o una arrow de expresión."
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`fetch("/api/datos.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Fallo", err))
  .finally(() => console.log("Fin del intento"));`}
      />
      <CodeChallenge
        title="Completa la cadena fetch"
        template={`fetch("/api/user")
  .{{blank1}}(r => r.json())
  .{{blank2}}(user => console.log(user.nombre))
  .{{blank3}}(err => console.error(err));`}
        blanks={[
          { id: "blank1", answer: "then", placeholder: "primer paso" },
          { id: "blank2", answer: "then", placeholder: "segundo paso" },
          { id: "blank3", answer: "catch", placeholder: "errores" },
        ]}
      />
      <PracticeExercise
        prompt="Ordena el flujo del event loop simplificado: (a) Web API completa el timer, (b) callback a la cola, (c) stack ejecuta código sincrónico, (d) stack vacío, event loop saca callback, (e) se registra setTimeout. Indica el orden correcto."
        hints={["Primero se registra setTimeout", "Luego código sync", "Al final el callback"]}
        expectedKeywords={["e", "c", "a", "b", "d"]}
        successMessage="Correcto. Orden: (e) registra → (c) sync → (a) timer completa → (b) a cola → (d) event loop ejecuta."
      />
    </section>
  );
}
