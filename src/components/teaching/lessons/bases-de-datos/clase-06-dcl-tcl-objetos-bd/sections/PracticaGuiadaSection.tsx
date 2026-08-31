import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <PracticeExercise
        prompt="Etiqueta cada sentencia como DDL/DML/DCL/TCL: GRANT; CREATE TABLE; COMMIT; INSERT; CREATE VIEW."
        hints={["VIEW = DDL", "GRANT = DCL", "COMMIT = TCL"]}
        expectedKeywords={["DDL", "DML", "DCL", "TCL"]}
        successMessage="GRANT=DCL; CREATE TABLE/VIEW=DDL; COMMIT=TCL; INSERT=DML."
        rows={4}
      />
      <PracticeExercise
        prompt="Escribe GRANT SELECT sobre v_programas_cupos al usuario reporte y REVOKE DELETE al usuario app sobre Inscripciones."
        hints={["ON bd.objeto", "TO 'user'@'host'"]}
        expectedKeywords={["GRANT", "REVOKE", "SELECT", "DELETE"]}
        successMessage="Reportería solo-lectura; app sin DELETE masivo."
        rows={4}
      />
      <PracticeExercise
        prompt="Escribe la transacción cupo + inscripción; indica cuándo harías ROLLBACK si cupos = 0."
        hints={["WHERE cupos > 0", "Revisar filas afectadas"]}
        expectedKeywords={["START TRANSACTION", "COMMIT", "ROLLBACK", "cupos"]}
        successMessage="Si el UPDATE no afecta filas, ROLLBACK y no insertes la inscripción."
        rows={5}
      />
      <PracticeExercise
        prompt="Explica ACID en 4 frases cortas con el ejemplo de inscripción."
        hints={["Todo-o-nada", "Estado válido", "Concurrentes", "Tras COMMIT"]}
        expectedKeywords={["Atomicity", "Consistency", "Isolation", "Durability"]}
        successMessage="A: ambos cambios o ninguno. C: cupos e inscripción coherentes. I: dos apps no pisan mal. D: tras COMMIT persiste."
        rows={5}
      />
      <PracticeExercise
        prompt="Decide app vs BD para: formato de email; FK; WhatsApp de bienvenida; descuento de cupo atómico. Una línea cada uno."
        hints={["Integridad → BD", "UX externa → app"]}
        expectedKeywords={["app", "BD", "FK", "cupo", "email"]}
        successMessage="Email/WhatsApp→app; FK y cupo atómico→BD (o BD+app coordinada)."
        rows={4}
      />
    </section>
  );
}
