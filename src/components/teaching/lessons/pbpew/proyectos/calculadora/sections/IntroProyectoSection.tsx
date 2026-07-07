export function IntroProyectoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Proyecto integrador: calculadora interactiva"}
      </h2>
      <p className="my-4">
        {
          "Esta es la primera de cuatro lecciones-proyecto del track PBPEW. No introduce APIs nuevas: consolida en un solo artefacto lo visto en las lecciones 01–12 — variables, operadores, funciones, DOM, eventos y manejo básico de errores — en un front sin servidor."
        }
      </p>
      <p className="my-4">
        {
          "La calculadora combina una pantalla de lectura (`#display`) y una rejilla de botones (dígitos `0`–`9`, punto decimal, operadores `+` `−` `×` `÷`, `C` y `=`). El HTML define la estructura; JavaScript define el comportamiento."
        }
      </p>
      <p className="my-4">
        <strong>{"Regla pedagógica del curso:"}</strong>{" "}
        {
          "el display es la vista del estado; la fuente de verdad vive en variables JavaScript. No uses `eval()` ni `Function()` para evaluar expresiones."
        }
      </p>
    </section>
  );
}
