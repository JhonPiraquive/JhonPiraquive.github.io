import { LabBaseSection } from "./LabBaseSection";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"El bloque de código siguiente sirve de base para las prácticas y el reto. Está escrito para MySQL o MariaDB (InnoDB)."}</p>
      <LabBaseSection />
      <PracticeExercise
        prompt="Escribir un SELECT con WHERE, ORDER BY y LIMIT sobre Programas."
        hints={["ORDER BY va antes de LIMIT"]}
        expectedKeywords={["SELECT", "WHERE", "ORDER BY", "LIMIT"]}
        successMessage="Consulta filtrada, ordenada y limitada."
        rows={4}
      />
      <PracticeExercise
        prompt="Agrupar por sede con GROUP BY y filtrar los grupos con HAVING COUNT(*) >= 1."
        hints={["HAVING usa funciones de agregado", "WHERE actúa antes del GROUP BY"]}
        expectedKeywords={["GROUP BY", "HAVING", "COUNT"]}
        successMessage="Agregación por sede con filtro de grupos."
        rows={4}
      />
      <PracticeExercise
        prompt="¿Qué pasa con DELETE FROM Programas sin WHERE si hay una FK desde Inscripciones? Responder en 3–5 líneas."
        hints={["Afecta todas las filas", "La restricción de FK puede bloquearlo"]}
        expectedKeywords={["WHERE", "todas", "FK", "backup"]}
        successMessage="Sin WHERE intenta borrar todas las filas; con FK puede fallar o actuar en cascada según la definición. La regla es usar siempre WHERE y tener respaldo."
        rows={5}
      />
      <PracticeExercise
        prompt="Escribir un INNER JOIN y un LEFT JOIN entre Programas e Inscripciones, e indicar cuál detecta programas sin inscritos."
        hints={["LEFT conserva todo el lado izquierdo", "Se busca NULL en el lado derecho"]}
        expectedKeywords={["INNER JOIN", "LEFT JOIN", "NULL"]}
        successMessage="LEFT JOIN con el filtro WHERE i.id IS NULL muestra los programas sin inscritos."
        rows={5}
      />
      <PracticeExercise
        prompt="Etiquetar cada sentencia como DDL, DML, DCL o TCL: GRANT; CREATE TABLE; COMMIT; INSERT; CREATE VIEW."
        hints={["VIEW pertenece a DDL", "GRANT pertenece a DCL", "COMMIT pertenece a TCL"]}
        expectedKeywords={["DDL", "DML", "DCL", "TCL"]}
        successMessage="GRANT = DCL; CREATE TABLE y CREATE VIEW = DDL; COMMIT = TCL; INSERT = DML."
        rows={4}
      />
      <PracticeExercise
        prompt="Escribir un GRANT SELECT sobre v_programas_cupos para el usuario reporte y un REVOKE DELETE para el usuario app sobre Inscripciones."
        hints={["ON base.objeto", "TO 'usuario'@'host'"]}
        expectedKeywords={["GRANT", "REVOKE", "SELECT", "DELETE"]}
        successMessage="Reportería de solo lectura y aplicación sin DELETE masivo."
        rows={4}
      />
      <PracticeExercise
        prompt="Escribir la transacción que descuenta el cupo e inserta la inscripción, e indicar cuándo corresponde un ROLLBACK si cupos = 0."
        hints={["WHERE cupos > 0", "Revisar las filas afectadas por el UPDATE"]}
        expectedKeywords={["START TRANSACTION", "COMMIT", "ROLLBACK", "cupos"]}
        successMessage="Si el UPDATE no afecta ninguna fila, se hace ROLLBACK y no se inserta la inscripción."
        rows={5}
      />
      <PracticeExercise
        prompt="Explicar ACID en cuatro frases cortas con el ejemplo de la inscripción."
        hints={["Todo o nada", "Estado válido", "Operaciones concurrentes", "Persistencia tras COMMIT"]}
        expectedKeywords={["Atomicity", "Consistency", "Isolation", "Durability"]}
        successMessage="A: ambos cambios o ninguno. C: cupos e inscripción coherentes. I: dos aplicaciones no se pisan. D: tras COMMIT el cambio persiste."
        rows={5}
      />
      <PracticeExercise
        prompt="Decidir si cada tarea va en la aplicación o en la BD: formato de email; FK; WhatsApp de bienvenida; descuento atómico de cupo. Una línea por tarea."
        hints={["Integridad → BD", "Experiencia con servicios externos → aplicación"]}
        expectedKeywords={["app", "BD", "FK", "cupo", "email"]}
        successMessage="Email y WhatsApp: aplicación. FK y cupo atómico: BD (o BD coordinada con la aplicación)."
        rows={4}
      />
    </section>
  );
}
