import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { DemoEnVivoApi } from "@/components/teaching/DemoEnVivoApi";
export function DemoEnVivoApiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Demo en vivo con API pública"}
      </h2>
      <p className="my-4">
        {
          "Practica con una API real que permite CORS. El botón pide un todo de ejemplo y muestra el título en pantalla."
        }
      </p>
      <p className="my-4">
        <strong>{"Estados de la UI:"}</strong>
        {" idle → loading → éxito o error (red / HTTP)."}
      </p>
      <CodeFiddle
        language="json"
        title="Respuesta de ejemplo"
        code={`{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`}
      />
      <DemoEnVivoApi
        buttonLabel="Cargar título de ejemplo"
        url="https://jsonplaceholder.typicode.com/todos/1"
        targetSelector="#demo-titulo"
        loadingMessage="Cargando…"
        errorMessage="Error al cargar datos"
      />
    </section>
  );
}
