import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Copilot, Claude, ChatGPT, Cursor y Gemini amplifican productividad, pero no sustituyen criterio técnico. La IA es un junior muy rápido; el senior humano revisa antes de producción."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Enumerar usos productivos de IA en desarrollo web (boilerplate, debug, refactor, tests, documentación)."
          }
        </li>
        <li>
          {
            "Identificar riesgos (alucinaciones, código sin comprensión, privacidad, dependencia, desactualización)."
          }
        </li>
        <li>{"Aplicar un flujo de verificación antes de mergear código generado por IA."}</li>
        <li>
          {
            "Estructurar contexto de proyecto con .claude/, reglas y CLAUDE.md para agentes."
          }
        </li>
        <li>
          {
            "Redactar prompts efectivos con stack, convenciones y restricciones (ej. DIP, sin any)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección naming-conventions: convenciones de código y APIs."}</li>
        <li>{"Lección principios-solid: DIP, interfaces y capas de servicio."}</li>
        <li>{"Familiaridad con Git, tests y herramientas de desarrollo (Cursor, VS Code)."}</li>
      </ul>
      <Callout title="Fecha de corte del modelo">
        {
          "Los modelos desconocen librerías o APIs muy recientes. Siempre contrasta con documentación oficial y registros npm/PyPI."
        }
      </Callout>
    </section>
  );
}
