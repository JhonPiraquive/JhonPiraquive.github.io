export function FamiliaGrafosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Familia de grafos (contexto)"}
      </h2>
      <p className="my-4">
        {
          "Nodos + aristas como ciudadanos de primera clase. Encaja cuando la pregunta es de caminos: “quién estudió con quién”, recomendaciones por cohorte."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso — Andes Tech"}</h3>
      <p className="my-4">
        {
          "Quieren caminos de co-inscripción y también facturación. Relacional para matrículas/pagos; grafo (o capa) para recomendaciones — la familia sigue a la pregunta."
        }
      </p>
    </section>
  );
}
