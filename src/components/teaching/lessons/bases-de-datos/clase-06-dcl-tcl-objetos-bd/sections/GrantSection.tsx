import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL = `CREATE USER 'app_rutas'@'localhost' IDENTIFIED BY 'clave_segura_lab';
GRANT SELECT, INSERT ON academia_rutas.Inscripciones TO 'app_rutas'@'localhost';
GRANT SELECT ON academia_rutas.Programas TO 'app_rutas'@'localhost';
GRANT SELECT ON academia_rutas.v_programas_cupos TO 'reporte_rutas'@'localhost';
REVOKE DELETE ON academia_rutas.Inscripciones FROM 'app_rutas'@'localhost';`;

export function GrantSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"GRANT con mínimo privilegio"}
      </h2>
      <p className="my-4">
        {
          "Pasos: identifica el usuario → lista privilegios explícitos (no ALL por costumbre) → acota BD/tabla/vista → verifica. La app de matrículas inserta sin poder DROP TABLE."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="GRANT / REVOKE mínimo privilegio"
        filename="grant-app-reporte.sql"
        code={SQL}
      />
      <p className="my-4">
        {
          "Andes Tech: 'app_rutas'@'localhost' puede INSERT en Inscripciones y SELECT cupos; 'reporte_rutas' solo lee la vista. Si usas PROCEDURE, no olvides GRANT EXECUTE."
        }
      </p>
      <Callout title="GRANT ALL ON *.*" variant="callout-warning">
        {
          "GRANT ALL PRIVILEGES ON *.* “por si acaso” abre DROP, DELETE masivo y administración completa. Privilegia por operación y objeto."
        }
      </Callout>
    </section>
  );
}
