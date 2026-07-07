import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const COMPOSICION_MAIN_CODE = `IReporteRenderer renderer = new HtmlRenderer();
var reportes = new ReporteService(renderer);
reportes.Generar();

var repo = new RepositorioPedidosMemoria();
var pedidos = new ServicioPedidos(repo);
pedidos.Crear("PED-001");`;

export function ChecklistDisenoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Checklist práctico de diseño"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Checklist integra SOLID + cohesión + acoplamiento + modularidad."}</li>
        <li>{"Aplicar antes de merge o al revisar código mezclado."}</li>
        <li>{"Cierre del track: criterios para diseño mantenible."}</li>
      </ul>
      <StepReveal
        title="Checklist antes de dar por bueno un diseño"
        steps={[
          {
            title: "SRP — un motivo de cambio",
            content: "¿Cada clase tiene un rol claro? ¿Hay God class o Utilidades mezclada?",
          },
          {
            title: "OCP — extensión sin editar cliente",
            content: "¿Nuevas variantes son nuevas clases bajo contrato? ¿Hay switch por tipo en cliente?",
          },
          {
            title: "LSP — sustituibilidad",
            content: "¿Toda derivada cumple el contrato de la base sin excepciones sorpresa?",
          },
          {
            title: "ISP — interfaces pequeñas",
            content: "¿Las interfaces fuerzan métodos innecesarios?",
          },
          {
            title: "DIP — abstracciones en el centro",
            content: "¿El dominio evita new de Sql/Pdf/Smtp? ¿Inyección por constructor?",
          },
          {
            title: "Cohesión y acoplamiento",
            content: "¿Alta cohesión por clase? ¿Bajo acoplamiento entre módulos vía contratos?",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Composición en Main (borde de la aplicación)"}</h3>
      <CodeFiddle language="csharp" code={COMPOSICION_MAIN_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Síntesis del track de Programación Orientada a Objetos (POO)"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  Fund[Fundamentos POO] --> Enc[Encapsulamiento]
  Enc --> Her[Herencia]
  Her --> Rel[Asociación Agregación Composición]
  Rel --> Abs[Abstracción Interfaces]
  Abs --> Pol[Polimorfismo]
  Pol --> Ovr[Override y Overload]
  Ovr --> Dia[Diagramas UML]
  Dia --> Sol[SOLID]
  Sol --> Mod[Modularidad Cohesión Acoplamiento]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes al usar el checklist"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Marcar cumplimiento sin evidencia en código o diagrama."}</li>
        <li>{"Refactor solo cosmético — carpetas nuevas sin contratos."}</li>
        <li>{"Olvidar actualizar diagrama tras cambiar dependencias."}</li>
      </ul>
    </section>
  );
}
