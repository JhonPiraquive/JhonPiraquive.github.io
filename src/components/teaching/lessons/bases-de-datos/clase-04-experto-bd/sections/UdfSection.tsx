import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL = `DELIMITER $$
CREATE FUNCTION fn_etiqueta_cupos(p_cupos INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
  IF p_cupos <= 0 THEN
    RETURN 'AGOTADO';
  ELSEIF p_cupos < 5 THEN
    RETURN 'ULTIMOS';
  ELSE
    RETURN 'DISPONIBLE';
  END IF;
END$$
DELIMITER ;

SELECT Nombre_Programa, cupos, fn_etiqueta_cupos(cupos) AS etiqueta
FROM Programas;`;

export function UdfSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"UDF — función que retorna un valor"}
      </h2>
      <p className="my-4">
        {
          "Una UDF (User-Defined Function) recibe parámetros y retorna un valor usable en SELECT u otras expresiones. Ideal para cálculos pequeños cerca de los datos — no para meter toda la app en SQL."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="UDF etiqueta de cupos"
        filename="fn-etiqueta-cupos.sql"
        code={SQL}
      />
      <Callout title="Rutinas en el sandbox" variant="callout-info">
        {
          "En clientes MySQL/MariaDB suele hacer falta DELIMITER al crear rutinas. Si el sandbox no ejecuta CREATE FUNCTION/PROCEDURE/TRIGGER, trata el SQL como referencia y pruébalo en Workbench/MariaDB local. Hosting compartido a veces bloquea routines: plan B en la app."
        }
      </Callout>
    </section>
  );
}
