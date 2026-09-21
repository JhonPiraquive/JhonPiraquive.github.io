import { StepReveal } from "@/components/teaching/StepReveal";

export function DelExcelSucioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Del Excel sucio a las reglas del esquema"}
      </h2>
      <p className="my-4">
        {
          "“Rutas Digitales” pegó el Excel de matrículas a MariaDB: una sola tabla con estudiante, programa, sede y teléfono. Eso “abre”, pero la misma verdad vive muchas veces. Primero ves redundancia y lees DF; después ejecutas las formas."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Progresión (antes de 1FN)"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Detectar redundancia y nombrarla como anomalía."}</li>
        <li>{"Definir y listar DFs (A → B)."}</li>
        <li>{"Solo entonces aplicar formas (página siguiente)."}</li>
      </ol>
      <StepReveal
        title="De la sábana a las DFs"
        steps={[
          {
            title: "Mira la sábana",
            content: "Tabla Excel→SQL con valores que se repiten y describen otra entidad.",
          },
          {
            title: "Pregunta por repetición",
            content: "Si cambio este valor, ¿lo toco en varios sitios?",
          },
          {
            title: "Nombra la anomalía",
            content: "Inserción, actualización o borrado — qué se rompe.",
          },
          {
            title: "Lista DFs",
            content: "Escribe A → B: si conozco A, determino B.",
          },
          {
            title: "Marca parcial / transitiva",
            content: "¿B depende de toda la clave o solo de parte? ¿Hay no-clave → no-clave?",
          },
        ]}
      />
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {
          "¿Qué problema resuelve normalizar que “solo dibujar el ER” no garantiza?"
        }
      </p>
    </section>
  );
}
