import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function FormularioYEstadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Formulario y alta de tareas"}
      </h2>
      <p className="my-4">{"Referencias al DOM y función de alta:"}</p>
      <CodeFiddle
        language="javascript"
        code={`const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");

function agregarTarea(texto) {
  const limpio = texto.trim();
  if (!limpio) return;
  tareas.push({ id: siguienteId++, texto: limpio, completada: false });
  render();
  guardar(); // opcional
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarTarea(input.value);
  input.value = "";
  input.focus();
});`}
      />
      <Callout title="Error frecuente">
        {
          "Sin preventDefault el navegador recarga la página y pierdes el estado en memoria. Parece que JavaScript no funciona."
        }
      </Callout>
      <CodeChallenge
        title="Completa preventDefault"
        template={`form.addEventListener("submit", (e) => {
  e.{{blank1}}();
  agregarTarea(input.value);
});`}
        blanks={[{ id: "blank1", answer: "preventDefault", placeholder: "evita recarga" }]}
      />
      <PracticeExercise
        prompt="Ordena mentalmente el flujo al pulsar Agregar: (a) render(), (b) usuario envía formulario, (c) push al array, (d) preventDefault, (e) leer y validar texto. Escribe la secuencia correcta (ej. d-e-c-a)."
        hints={["Primero evitas recarga", "Luego validas y mutas", "Al final pintas"]}
        expectedKeywords={["d", "e", "c", "a", "preventDefault", "push", "render"]}
        successMessage="Secuencia: d → e → c → a (y opcionalmente guardar). Mutar primero, pintar después."
      />
    </section>
  );
}
