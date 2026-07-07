import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: mini-sistema de compras"}
      </h2>
      <p className="my-4">
        <strong>{"Reorganiza el mini-sistema de compras"}</strong>
      </p>
      <p className="my-4">
        {
          "Un solo archivo mezcla: calcular total, aplicar descuento, guardar pedido, enviar notificación, generar reporte."
        }
      </p>
      <p className="my-4 font-semibold">{"Parte A — Análisis"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Identifica 5 responsabilidades mezcladas en el código inicial."}</li>
        <li>{"Marca cuáles son dominio vs infraestructura."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Diseño modular"}</p>
      <ol className="my-4 list-decimal pl-6" start={3}>
        <li>{"Propón 4–6 clases/módulos con nombres claros (CalculadoraTotal, AplicadorDescuento, etc.)."}</li>
        <li>{"Define 2–3 interfaces (IRepositorioPedidos, INotificador, IReporteRenderer)."}</li>
        <li>{"Diagrama Mermaid con flechas: dominio no debe depender de concretos de infra."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Implementación C#"}</p>
      <ol className="my-4 list-decimal pl-6" start={6}>
        <li>{"Implementa servicios con alta cohesión (una idea por clase)."}</li>
        <li>{"OrquestadorCompra coordina; inyección por constructor."}</li>
        <li>{"Main elige RepositorioPedidosMemoria, NotificadorConsola, PdfRenderer o HtmlRenderer."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Checklist y cierre track"}</p>
      <ol className="my-4 list-decimal pl-6" start={9}>
        <li>
          {
            "Recorre checklist: SRP, OCP (¿nuevo descuento sin editar orquestador?), DIP, cohesión, acoplamiento — marca cumplimiento por ítem."
          }
        </li>
        <li>
          {
            "Párrafo final: cómo esta lección conecta con polimorfismo, SOLID y diagramas del track."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: dominio sin new de Sql/Pdf/Smtp; diagrama alineado con código; intercambio de renderer o repositorio solo en Main; checklist documentado."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Dependencias objetivo del reto"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  Orq[OrquestadorCompra] --> Calc[CalculadoraTotal]
  Orq --> Desc[AplicadorDescuento]
  Orq --> Repo[IRepositorioPedidos]
  Orq --> Notif[INotificador]
  Orq --> Rep[IReporteRenderer]
  Repo <|.. RepoMem[RepositorioMemoria]
  Notif <|.. NotifConsola[NotificadorConsola]`}
      />
      <PracticeExercise
        prompt="Documenta el checklist del reto (Parte D): marca ✓ o ✗ en SRP, OCP, DIP, cohesión y acoplamiento con una frase de evidencia por ítem."
        hints={[
          "SRP — ¿cada clase un rol?",
          "OCP — ¿nuevo descuento sin editar orquestador?",
          "DIP — ¿dominio sin new de infra?",
          "Cohesión/acoplamiento — ¿Utilidades eliminada?",
        ]}
        expectedKeywords={["checklist", "SRP", "DIP", "cohesión", "acoplamiento"]}
        successMessage="Excelente. Has cerrado el track POO con criterios de diseño verificables."
        rows={8}
      />
    </section>
  );
}
