export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {"Has aprendido las convenciones de nomenclatura por capa en aplicaciones web."}
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"El naming es documentación; el código se lee más de lo que se escribe."}</li>
        <li>{"camelCase en variables, funciones y JSON; PascalCase en clases y componentes."}</li>
        <li>{"snake_case en SQL; kebab-case en URLs y archivos; UPPER_SNAKE en constantes y .env."}</li>
        <li>{"Misma entidad, distinto estilo por capa: no es inconsistencia si está documentado."}</li>
        <li>{"Acuerdo de equipo: README, ESLint naming-convention y code review de nombres nuevos."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"ia-en-desarrollo-web"}</code>
        {" — IA como amplificador de productividad con verificación humana."}
      </p>
    </section>
  );
}
