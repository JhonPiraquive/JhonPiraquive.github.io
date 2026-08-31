import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { Callout } from "@/components/teaching/Callout";

const SEQ = `sequenceDiagram
  participant App
  participant BD
  App->>BD: START TRANSACTION
  App->>BD: UPDATE cupos WHERE cupos > 0
  App->>BD: INSERT Inscripciones
  App->>BD: COMMIT`;

const SQL = `CREATE TABLE Inscripciones_audit (
  audit_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  insc_id INT,
  Nombre_Estudiante VARCHAR(120),
  programa_id INT,
  accion VARCHAR(10),
  registrado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
CREATE TRIGGER trg_inscripciones_ai
AFTER INSERT ON Inscripciones
FOR EACH ROW
BEGIN
  INSERT INTO Inscripciones_audit (insc_id, Nombre_Estudiante, programa_id, accion)
  VALUES (NEW.id, NEW.Nombre_Estudiante, NEW.programa_id, 'INSERT');
END$$
DELIMITER ;`;

export function TriggerSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"TRIGGER — automático ante DML"}
      </h2>
      <p className="my-4">
        {
          "Un trigger se dispara BEFORE/AFTER × INSERT/UPDATE/DELETE. Úsalo para auditoría delgada o validaciones que deben cumplirse aunque alguien abra un cliente SQL directo."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="TRIGGER AFTER INSERT de auditoría"
        filename="trg-inscripciones-audit.sql"
        code={SQL}
      />
      <figure className="my-6 rounded-lg bg-white p-4">
        <MermaidDiagram
          title="Inscripción atómica + COMMIT"
          description="App y BD coordinan START TRANSACTION, UPDATE, INSERT y COMMIT"
          chart={SEQ}
        />
      </figure>
      <Callout title="Triggers encadenados" variant="callout-warning">
        {
          "Una auditoría delgada AFTER INSERT está bien. Encadenar lógica oculta entre varios triggers es anti-patrón: difícil de depurar y de razonar. Prefiere FK cuando basta."
        }
      </Callout>
    </section>
  );
}
