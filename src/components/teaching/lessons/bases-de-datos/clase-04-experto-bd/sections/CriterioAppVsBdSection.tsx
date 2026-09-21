import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const APP_O_BD = `flowchart TD
  R{Qué tipo de regla}
  R -->|Integridad permisos atomicidad corta| BD[Motor SGBD]
  R -->|UX email APIs externas| APP[Aplicación]
  R -->|Cálculo reutilizable simple| UDF[UDF o app]
  R -->|Proceso multi-paso en BD| SP[PROCEDURE]`;

export function CriterioAppVsBdSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿App o BD?"}
      </h2>
      <p className="my-4">
        {
          "Decide dónde vive la regla. Evita doble fuente de verdad, “todo en triggers” opaco y “todo en la app sin FK”."
        }
      </p>
      <CompareTable
        headers={["Preferir en la BD", "Preferir en la app"]}
        rows={[
          ["Integridad PK/FK/UNIQUE", "UX / orquestación de pantallas"],
          ["Invariantes ante cualquier cliente SQL", "Reglas que cambian cada sprint"],
          ["Auditoría mínima", "Email, pagos, colas externas"],
          ["Transacciones cortas multi-tabla", "Flujos multi-sistema"],
          ["Vistas + GRANT", "Personalización compleja"],
        ]}
      />
      <figure className="my-6 rounded-lg bg-white p-4">
        <MermaidDiagram
          title="¿App o BD?"
          description="Flujo de decisión para ubicar una regla"
          chart={APP_O_BD}
        />
      </figure>
      <p className="my-4 font-semibold">{"Casos rápidos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Formato de email / WhatsApp de bienvenida → app."}</li>
        <li>{"FK y descuento de cupo atómico → BD (o BD + app coordinada)."}</li>
        <li>
          {
            "PYME con un solo desarrollador: FK + transacciones en BD; poca lógica en triggers."
          }
        </li>
      </ul>
    </section>
  );
}
