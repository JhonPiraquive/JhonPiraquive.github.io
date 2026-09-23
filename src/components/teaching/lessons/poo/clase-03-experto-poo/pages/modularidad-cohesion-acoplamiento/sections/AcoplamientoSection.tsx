import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const ACOPLAMIENTO_CODE = `// Alto acoplamiento — reporte atado a PDF
public class ReporteVentasDiaAcoplado
{
    private readonly GeneradorPdf _pdf = new();
    public void Generar() => _pdf.Crear();
}

// Bajo acoplamiento — Tienda Andes elige formato en Main
public interface IReporteVentasRenderer
{
    void Render();
}

public class ReportePdfRenderer : IReporteVentasRenderer
{
    public void Render() => Console.WriteLine("PDF ventas del día");
}

public class ReporteHtmlRenderer : IReporteVentasRenderer
{
    public void Render() => Console.WriteLine("<html>ventas...</html>");
}

public class ReporteVentasDia
{
    private readonly IReporteVentasRenderer _renderer;
    public ReporteVentasDia(IReporteVentasRenderer renderer) => _renderer = renderer;
    public void Generar() => _renderer.Render();
}`;

export function AcoplamientoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Acoplamiento: cuánto duele cambiar un vecino"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Contabilidad pide HTML accesible"}</h3>
      <p className="my-4">
        {
          "Acoplamiento es la fuerza del vínculo entre clases. Cero acoplamiento no existe; el objetivo es bajo acoplamiento útil: ReporteVentasDia no debería conocer bibliotecas PDF si mañana piden HTML."
        }
      </p>
      <CodeFiddle language="csharp" code={ACOPLAMIENTO_CODE} />
      <MermaidDiagram
        chart={`classDiagram
  class IReporteVentasRenderer {
    <<interface>>
    +Render()
  }
  ReporteVentasDia --> IReporteVentasRenderer
  IReporteVentasRenderer <|.. ReportePdfRenderer
  IReporteVentasRenderer <|.. ReporteHtmlRenderer`}
      />
      <CompareTable
        headers={["Métrica", "Duele", "Mejor en la tienda"]}
        rows={[
          ["Cohesión", "UtilidadesTienda mezclada", "CalculadoraIva solo impuestos"],
          ["Acoplamiento", "new GeneradorPdf() adentro", "IReporteVentasRenderer inyectado"],
          ["Modularidad", "Todo referencia todo", "Dominio → contrato ← infra"],
        ]}
      />
      <PracticeExercise
        prompt="Añade ReporteHtmlRenderer y cámbialo solo en Main. ¿Cuántas líneas tocas en ReporteVentasDia?"
        hints={[
          "HtmlRenderer implementa Render",
          "Constructor ya recibe contrato",
          "Cero en dominio si DIP está bien",
        ]}
        expectedKeywords={["HtmlRenderer", "Main", "cero"]}
        successMessage="Correcto. Bajo acoplamiento: el formato es decisión del borde."
      />
    </section>
  );
}
