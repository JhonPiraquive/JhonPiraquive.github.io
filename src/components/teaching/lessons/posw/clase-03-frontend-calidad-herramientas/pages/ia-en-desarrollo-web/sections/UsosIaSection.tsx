import { CompareTable } from "@/components/teaching/CompareTable";

export function UsosIaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Usos productivos de IA en desarrollo web"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Usos válidos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"CRUD, DTOs y boilerplate repetitivo."}</li>
        <li>{"Explicar stack traces y errores de compilación."}</li>
        <li>{"Traducir entre lenguajes o frameworks."}</li>
        <li>{"JSDoc, refactor SOLID, revisión de seguridad."}</li>
        <li>{"Diseño de arquitectura y generación de tests."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Copilot, Claude, Cursor y ChatGPT"}
      </h3>
      <CompareTable
        headers={["Herramienta", "Tipo", "Integración", "Fortaleza"]}
        rows={[
          ["GitHub Copilot", "Autocompletado", "IDE", "Snippets en tiempo real"],
          ["ChatGPT / Claude", "Chat", "Web / API", "Explicaciones y refactor largos"],
          ["Cursor", "Agente IDE", "Editor completo", "Contexto de repo + agentes"],
          ["Gemini", "Chat + IDE", "Google Cloud", "Integración con ecosistema GCP"],
        ]}
      />
    </section>
  );
}
