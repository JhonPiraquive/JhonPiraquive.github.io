import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

export function MapaClase06Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Mapa de la clase"}
      </h2>
      <p className="my-4">
        {
          "Modo procedimiento: pasos ejecutables con mínimo privilegio y transacciones donde importa. Tras la clase 5 (esquema limpio), cierras el arco operativo SQL."
        }
      </p>
      <CompareTable
        headers={["Página", "Qué aprendes", "Entregable mental"]}
        rows={[
          [
            "Mapa de familias SQL",
            "DDL / DML / DCL / TCL",
            "Etiquetar cualquier sentencia",
          ],
          [
            "DCL: GRANT y REVOKE",
            "Mínimo privilegio",
            "GRANT acotado sin root compartido",
          ],
          [
            "TCL y ACID",
            "Transacciones + ACID",
            "Script COMMIT/ROLLBACK con WHERE en cupos",
          ],
          ["Vistas", "CREATE VIEW + proyección", "Vista consultable + GRANT"],
          [
            "UDF, PROCEDURE, TRIGGER",
            "Rutinas + app vs BD",
            "Decidir dónde vive cada regla",
          ],
          [
            "Práctica y cierre",
            "Ejercicios, reto, quiz",
            "Matrícula segura argumentada",
          ],
        ]}
      />
      <Callout title="Checklist mental de la clase" variant="callout-warning">
        {
          "¿Familia etiquetada? ¿Mínimo privilegio? ¿TX corta con WHERE? ¿Vista para proyección? ¿Función = valor, procedimiento = proceso, trigger = automático? ¿App o BD?"
        }
      </Callout>
    </section>
  );
}
