import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const ACOPLAMIENTO_CODE = `// Alto acoplamiento
public class ReporteServiceAltoAcoplamiento
{
    private readonly PdfGenerator _pdf = new();
    public void Generar() => _pdf.CrearPdf();
}

public class PdfGenerator
{
    public void CrearPdf() => Console.WriteLine("PDF");
}

// Bajo acoplamiento
public interface IReporteRenderer
{
    void Render();
}

public class PdfRenderer : IReporteRenderer
{
    public void Render() => Console.WriteLine("PDF");
}

public class HtmlRenderer : IReporteRenderer
{
    public void Render() => Console.WriteLine("<html>...</html>");
}

public class ReporteService
{
    private readonly IReporteRenderer _renderer;
    public ReporteService(IReporteRenderer renderer) => _renderer = renderer;
    public void Generar() => _renderer.Render();
}`;

export function AcoplamientoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Acoplamiento"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Acoplamiento: fuerza de dependencia entre módulos o clases."}</li>
        <li>{"Se busca bajo acoplamiento — cambiar piezas sin efecto dominó."}</li>
        <li>{"Acoplamiento cero es imposible; el objetivo es bajo acoplamiento útil."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Alto acoplamiento → bajo acoplamiento"}</h3>
      <CodeFiddle language="csharp" code={ACOPLAMIENTO_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama acoplamiento reportes"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class IReporteRenderer {
    <<interface>>
    +Render()
  }
  ReporteService --> IReporteRenderer
  IReporteRenderer <|.. PdfRenderer
  IReporteRenderer <|.. HtmlRenderer`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparación cohesión y acoplamiento"}</h3>
      <CompareTable
        headers={["Métrica", "Malo", "Bueno"]}
        rows={[
          ["Cohesión", "Utilidades mezclada", "CalculadoraImpuestos solo impuestos"],
          ["Acoplamiento", "new PdfGenerator() en servicio", "IReporteRenderer inyectado"],
          ["Modularidad", "Todo importa todo", "Dominio → contrato ← infra"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: migración PDF a HTML"}</h3>
      <p className="my-4">
        {
          "Legal exigió versión HTML accesible. Con IReporteRenderer, solo se añadió HtmlRenderer y se cambió composición en Main — ReporteService intacto."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"new PdfGenerator() dentro de lógica de negocio."}</li>
        <li>{"Tests acoplados a infra real — sin interfaces, pruebas requieren DB o red."}</li>
        <li>{"Ignorar diagrama al modularizar — se reintroduce acoplamiento circular."}</li>
      </ul>
      <PracticeExercise
        prompt="Añade HtmlRenderer : IReporteRenderer y cambia solo la composición en Main. Verifica que ReporteService no cambia."
        hints={[
          "HtmlRenderer implementa Render con salida HTML",
          "ReporteService ya recibe IReporteRenderer por constructor",
          "Solo Main cambia new PdfRenderer() por new HtmlRenderer()",
        ]}
        expectedKeywords={["HtmlRenderer", "Main", "ReporteService"]}
        successMessage="Correcto. Bajo acoplamiento: cambio de formato solo en el borde."
      />
    </section>
  );
}
