import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador — monolito de compras Tienda Andes"}
      </h2>
      <p className="my-4">
        {
          "Un archivo mezcla total, descuento, guardar pedido, notificar y reporte. Reorganízalo antes del capstone en practica-y-cierre."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Análisis"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Lista cinco responsabilidades mezcladas."}</li>
        <li>{"Marca dominio vs infraestructura."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Diseño"}</p>
      <ol className="my-4 list-decimal pl-6" start={3}>
        <li>{"4–6 clases con nombres de dominio (CalculadoraTotal, OrquestadorCompra…)."}</li>
        <li>{"IRepositorioPedidos, INotificador, IReporteVentasRenderer."}</li>
        <li>{"Mermaid: dominio no apunta a concretos SQL/PDF."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — C#"}</p>
      <ol className="my-4 list-decimal pl-6" start={6}>
        <li>{"OrquestadorCompra con inyección; Main elige Memoria, SMS, HTML."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Checklist"}</p>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>{"✓/✗ por ítem SOLID + cohesión + acoplamiento con una frase de evidencia."}</li>
      </ol>
      <MermaidDiagram
        chart={`flowchart TD
  Orq[OrquestadorCompra] --> Calc[CalculadoraTotal]
  Orq --> Repo[IRepositorioPedidos]
  Orq --> Notif[INotificador]
  Orq --> Rep[IReporteVentasRenderer]
  Repo <|.. RepoMem[RepositorioMemoria]
  Notif <|.. Sms[NotificadorSms]`}
      />
      <PracticeExercise
        prompt="Documenta Parte D: un ✓ o ✗ por ítem del checklist con evidencia del código."
        hints={["SRP por clase", "OCP en envío/descuento", "DIP sin new Sql adentro"]}
        expectedKeywords={["checklist", "SRP", "DIP"]}
        successMessage="Excelente. Preparado para el capstone final."
        rows={8}
      />
    </section>
  );
}
