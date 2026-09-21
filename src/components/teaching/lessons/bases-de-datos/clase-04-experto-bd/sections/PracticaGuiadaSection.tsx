import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {
          "Errores frecuentes a evitar: hablar de 2FN/3FN sin listar DFs; CSV en celdas; desnormalizar el día 1 o “quitar FK”; llamar estrella/copo al ER operacional; copo extremo por pureza."
        }
      </p>
      <PracticeExercise
        prompt="Describe la anomalía de actualización cuando el teléfono de sede está repetido en cada fila de Programas."
        hints={["Cambias en N sitios", "Olvidas una fila"]}
        expectedKeywords={["actualización", "redundancia", "teléfono", "sede"]}
        successMessage="Hay que actualizar muchas filas; si olvidas una, la verdad diverge."
        rows={5}
      />
      <PracticeExercise
        prompt="De una celda programas = 'A, B' a un esquema 1FN: describe tablas/filas resultantes."
        hints={["Una fila por valor", "O tabla hija de inscripción"]}
        expectedKeywords={["1FN", "atómico", "fila", "CSV"]}
        successMessage="Cada programa en su fila (o relación); nada de listas en una celda."
        rows={5}
      />
      <PracticeExercise
        prompt="Ordena: sucia → DFs → 1FN → 2FN → 3FN → BCNF (mención)."
        hints={["Primero listar dependencias", "BCNF es refuerzo al final"]}
        expectedKeywords={["DF", "1FN", "2FN", "3FN", "BCNF"]}
        successMessage="Sucia → DFs → 1FN → 2FN → 3FN → mención BCNF."
        rows={5}
      />
      <PracticeExercise
        prompt="PK (estudiante_id, programa_id) con Nombre_Programa solo de programa_id. Escribe el DDL 2FN (extraer Programas + FK)."
        hints={["Programas es padre", "Inscripción guarda solo FKs"]}
        expectedKeywords={["CREATE TABLE", "FOREIGN KEY", "Nombre_Programa", "programa_id"]}
        successMessage="Nombre_Programa sale de la inscripción; vive en Programas."
        rows={5}
      />
      <PracticeExercise
        prompt="En 4–6 líneas: desnormalización consciente (snapshot en factura) vs incorrecta (copiar nombres en 4 tablas OLTP sin sync)."
        hints={["Dueño de la verdad", "Historia vs operación"]}
        expectedKeywords={["snapshot", "factura", "sync", "3FN", "riesgo"]}
        successMessage="Snapshot documentado en documentos históricos ≠ duplicar sin dueño en tablas operativas."
        rows={5}
      />
    </section>
  );
}
