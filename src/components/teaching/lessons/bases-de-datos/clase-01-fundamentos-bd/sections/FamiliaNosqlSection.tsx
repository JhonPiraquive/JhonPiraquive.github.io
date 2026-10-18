export function FamiliaNosqlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Familia NoSQL / documentos (contexto)"}
      </h2>
      <p className="my-4">
        {
          "JSON flexible u otras variantes (clave-valor, columnas). Encaja cuando el diseño pide atributos variables — p. ej. catálogo de cursos con módulos distintos — o acceso por clave simple (sesión / caché)."
        }
      </p>
      <p className="my-4">
        {
          "No es “reemplazo del relacional por moda”: la familia sigue a la forma de la pregunta."
        }
      </p>
    </section>
  );
}
