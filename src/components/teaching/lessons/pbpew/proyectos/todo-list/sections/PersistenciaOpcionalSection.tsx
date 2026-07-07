import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function PersistenciaOpcionalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Persistencia opcional con localStorage"}
      </h2>
      <p className="my-4">
        {"Conecta serialización JSON (lección 7) con UX real. Persiste después de cada mutación."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`const STORAGE_KEY = "pbpew-tareas";

function guardar() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
}

function cargar() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const datos = JSON.parse(raw);
    if (!Array.isArray(datos)) return;
    tareas = datos;
    siguienteId = tareas.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  } catch {
    tareas = [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargar();
  render();
});`}
      />
      <CodeChallenge
        title="Completa JSON.stringify"
        template={`localStorage.setItem("tareas", JSON.{{blank1}}(tareas));`}
        blanks={[{ id: "blank1", answer: "stringify", placeholder: "serializar array" }]}
      />
      <Callout title="Errores de persistencia">
        {
          'setItem sin stringify guarda "[object Object]". JSON.parse sin try/catch lanza si el usuario corrompe datos en DevTools — resetea a [].'
        }
      </Callout>
    </section>
  );
}
