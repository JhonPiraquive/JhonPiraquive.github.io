import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function QueEsFrontendSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es el frontend?"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Frontend (client-side):"}</strong>
          {" capa que el usuario ve y con la que interactúa en el navegador."}
        </li>
        <li>{"El código se ejecuta en el dispositivo del usuario, no en el servidor."}</li>
        <li>{"Se comunica con el backend por HTTP (APIs)."}</li>
        <li>{"Responsabilidades: UI, consumo de APIs, estado, routing, rendimiento, accesibilidad, SEO."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Separación frontend / backend"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  subgraph Browser [Navegador - Frontend]
    JS[JavaScript / Framework]
    UI[Componentes UI]
    JS --> UI
  end
  subgraph Server [Servidor - Backend]
    API[API REST]
    DB[(Base de datos)]
    API --> DB
  end
  UI -->|HTTP fetch| API
  API -->|JSON| UI`}
      />
      <StepReveal
        title="Responsabilidades del frontend"
        steps={[
          {
            title: "1. Renderizar interfaz",
            content: "HTML, CSS y componentes reutilizables que el usuario ve y manipula.",
          },
          {
            title: "2. Consumir APIs",
            content: "fetch o axios hacia el backend; manejar loading, errores HTTP y parsear JSON.",
          },
          {
            title: "3. Manejar estado",
            content: "Formularios, sesión, carrito — estado local o global (Context, Pinia, Redux).",
          },
          {
            title: "4. Routing SPA",
            content: "Navegación entre vistas sin recargar la página completa.",
          },
          {
            title: "5. Optimizar UX",
            content: "Rendimiento (Core Web Vitals), accesibilidad (labels, alt) y SEO cuando aplica.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Consumir API desde JavaScript"}</h3>
      <CodeFiddle
        language="javascript"
        title="Consumir API desde JavaScript"
        code={`async function cargarProductos() {
  const res = await fetch("https://api.ejemplo.com/api/v1/productos");
  if (!res.ok) throw new Error(\`Error \${res.status}\`);
  const productos = await res.json();
  return productos;
}`}
      />
    </section>
  );
}
