export function ModeloConceptualSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Modelo conceptual"}
      </h2>
      <p className="my-4">
        {
          "Qué existe en el negocio: entidades y relaciones en lenguaje del cliente. Quién lo usa: analista + negocio. Ejemplo: “Estudiante se inscribe en Programa”."
        }
      </p>
      <p className="my-4">
        {
          "El conceptual no menciona INT AUTO_INCREMENT ni índices. Si aparece jerga de columnas, ya bajaste de nivel demasiado pronto."
        }
      </p>
    </section>
  );
}
