import { CompareTable } from "@/components/teaching/CompareTable";

export function AcidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"ACID en la inscripción"}
      </h2>
      <p className="my-4">
        {
          "Con el ejemplo de cupo + matrícula: Atomicity protege el empaquetado UPDATE+INSERT; Consistency exige estados válidos (cupos ≥ 0, FK); Isolation limita anomalías entre sesiones concurrentes; Durability hace que tras COMMIT sobreviva a una caída."
        }
      </p>
      <CompareTable
        headers={["Letra", "Inglés", "Español", "Idea"]}
        rows={[
          ["A", "Atomicity", "Atomicidad", "Todo o nada"],
          ["C", "Consistency", "Consistencia", "Estado válido → estado válido"],
          [
            "I",
            "Isolation",
            "Aislamiento",
            "Concurrentes no se pisan de forma anómala (según nivel)",
          ],
          ["D", "Durability", "Durabilidad", "Tras COMMIT, sobrevive a caídas"],
        ]}
      />
      <p className="my-4">
        {
          "No digas “somos ACID” con auto-commit suelto y sin FK: la C de ACID no es solo validación en el frontend."
        }
      </p>
    </section>
  );
}
