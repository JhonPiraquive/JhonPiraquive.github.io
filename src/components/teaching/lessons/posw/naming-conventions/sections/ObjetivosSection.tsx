import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "El código se lee más de lo que se escribe. Los nombres expresivos son documentación viva que reduce comentarios, bugs y tiempo de onboarding."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar por qué el naming impacta legibilidad, mantenimiento y onboarding en equipos web."}</li>
        <li>{"Aplicar camelCase, PascalCase, snake_case, kebab-case y UPPER_SNAKE_CASE según lenguaje y contexto."}</li>
        <li>{"Nombrar variables, funciones, clases, tablas SQL, URLs y archivos con la convención correcta."}</li>
        <li>{"Detectar anti-patrones (abreviaciones, nombres que mienten, mezcla de estilos en un repo)."}</li>
        <li>{"Mantener consistencia entre frontend (React/Angular), backend (TypeScript/C#), SQL y APIs REST."}</li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección principios-solid: clases, interfaces y capas de servicio."}</li>
        <li>{"Familiaridad con TypeScript/JavaScript y SQL básico."}</li>
        <li>{"Noción de APIs REST y JSON."}</li>
      </ul>
      <Callout title="El nombre es la primera documentación">
        {
          "There are only two hard things in Computer Science: cache invalidation and naming things. Acordar convenciones por capa evita el caos en monorepos."
        }
      </Callout>
    </section>
  );
}
