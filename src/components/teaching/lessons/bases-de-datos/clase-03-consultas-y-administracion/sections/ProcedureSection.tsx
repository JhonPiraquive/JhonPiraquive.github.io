import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

const SQL = `DELIMITER $$
CREATE PROCEDURE sp_inscribir(
  IN p_nombre VARCHAR(120),
  IN p_programa_id INT
)
BEGIN
  DECLARE v_cupos INT;

  START TRANSACTION;
  SELECT cupos INTO v_cupos FROM Programas WHERE id = p_programa_id FOR UPDATE;
  IF v_cupos IS NULL OR v_cupos <= 0 THEN
    ROLLBACK;
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Sin cupo o programa inexistente';
  ELSE
    UPDATE Programas SET cupos = cupos - 1 WHERE id = p_programa_id;
    INSERT INTO Inscripciones (Nombre_Estudiante, programa_id)
    VALUES (p_nombre, p_programa_id);
    COMMIT;
  END IF;
END$$
DELIMITER ;

CALL sp_inscribir('Luis Pérez', 1);`;

export function ProcedureSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"PROCEDURE — proceso con CALL"}
      </h2>
      <p className="my-4">
        {
          "Un PROCEDURE encapsula un proceso multi-paso (a menudo con TCL). Se invoca con CALL. Diferencia clave: UDF = valor en expresión; PROCEDURE = proceso."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="PROCEDURE de inscripción con TCL"
        filename="sp-inscribir.sql"
        code={SQL}
      />
      <CompareTable
        headers={["Objeto", "Se invoca", "Retorno"]}
        rows={[
          ["UDF", "En SELECT / expresión", "Un valor"],
          ["PROCEDURE", "CALL", "Proceso (puede tener OUT)"],
          ["TRIGGER", "Evento DML", "Efecto lateral (p. ej. audit)"],
        ]}
      />
      <p className="my-4">
        {
          "Si el SP falla a mitad, asegura ROLLBACK. No metas la API entera en procedimientos: orquestación de pantallas y WhatsApp van en la app."
        }
      </p>
    </section>
  );
}
