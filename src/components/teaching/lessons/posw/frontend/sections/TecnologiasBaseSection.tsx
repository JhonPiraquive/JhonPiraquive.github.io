import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function TecnologiasBaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Tecnologías base"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"JavaScript (ES2020+):"}</strong>
          {" lenguaje del comportamiento — DOM, eventos, fetch, lógica de UI."}
        </li>
        <li>
          <strong>{"TypeScript:"}</strong>
          {" superset con tipado estático opcional; usado por defecto en Angular y común en React enterprise."}
        </li>
        <li>{"Motores JS: V8 (Chrome), SpiderMonkey (Firefox)."}</li>
        <li>
          <strong>{"Componentes:"}</strong>
          {" unidad reutilizable con props (datos entrantes) y eventos (acciones del usuario)."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Request autenticado desde frontend"}</h3>
      <CodeFiddle
        language="javascript"
        title="Request autenticado desde frontend"
        code={`async function obtenerPerfil(token) {
  const res = await fetch("/api/perfil", {
    headers: {
      Authorization: \`Bearer \${token}\`,
      Accept: "application/json",
    },
  });
  if (res.status === 401) redirectToLogin();
  return res.json();
}`}
      />
      <Callout title="Caso real: SPA sin SSR pierde SEO">
        {
          "Un e-commerce migra a React SPA puro sin server-side rendering. Los crawlers ven HTML casi vacío; el tráfico orgánico cae 40%. Decisión: evaluar SSR (Next.js) cuando SEO importa; medir indexación y Core Web Vitals."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Dibuja mentalmente la separación frontend/backend de una app de mensajería. ¿Qué corre en el navegador y qué en el servidor? ¿Cómo se comunican?"
        hints={["UI y fetch en navegador", "BD y lógica en servidor", "HTTP + JSON"]}
        expectedKeywords={["navegador", "servidor", "API", "HTTP"]}
        successMessage="Correcto. Frontend: UI, estado local, fetch. Backend: persistencia, auth, reglas de negocio. Comunicación por API REST."
      />
    </section>
  );
}
