import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function PersistenciaOpcionalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Persistencia opcional con localStorage"}
      </h2>
      <p className="my-4">
        {"Conecta la serialización JSON con una experiencia real. Se persiste después de cada mutación."}
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
      <Callout title="Errores de persistencia">
        {
          'setItem sin stringify guarda "[object Object]". JSON.parse sin try/catch lanza si el usuario corrompe datos en DevTools — resetea a [].'
        }
      </Callout>
    </section>
  );
}
