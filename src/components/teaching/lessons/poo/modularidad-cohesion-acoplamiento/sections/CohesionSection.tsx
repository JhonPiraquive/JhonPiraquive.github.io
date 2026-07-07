import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const UTILIDADES_CODE = `// Anti-ejemplo — baja cohesión
public class Utilidades
{
    public string FormatearNombre(string nombre) => nombre.Trim().ToUpperInvariant();
    public decimal CalcularImpuesto(decimal valor) => valor * 0.19m;
    public void EnviarEmail(string destino) { }
}

// Mejora — alta cohesión
public class FormateoTexto
{
    public string FormatearNombre(string nombre) => nombre.Trim().ToUpperInvariant();
}

public class CalculadoraImpuestos
{
    public decimal Calcular(decimal valor) => valor * 0.19m;
}

public class NotificadorEmail
{
    public void Enviar(string destino) => Console.WriteLine($"Email a {destino}");
}`;

export function CohesionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cohesión"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Cohesión: qué tan relacionadas están las responsabilidades dentro de una clase o módulo."}</li>
        <li>{"Alta cohesión = un objetivo común por clase."}</li>
        <li>{"Clase Utilidades = anti-patrón de baja cohesión."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Baja cohesión → alta cohesión"}</h3>
      <CodeFiddle language="csharp" code={UTILIDADES_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Split Utilidades"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  Baja[Utilidades\\nbaja cohesión] --> Mezcla[Formateo + Impuestos + Email]
  Alta1[FormateoTexto] --> T[Solo texto]
  Alta2[CalculadoraImpuestos] --> I[Solo impuestos]
  Alta3[NotificadorEmail] --> N[Solo notificación]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: split de Utilidades en equipo paralelo"}</h3>
      <p className="my-4">
        {
          "Cuatro desarrolladores en el mismo Utilidades.cs — conflictos de merge diarios. Refactor a FormateoTexto, CalculadoraImpuestos, NotificadorEmail con diagrama Mermaid acordado en PR."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Utils como vertedero — cada función suelta va a Utilidades."}</li>
        <li>
          {
            'Cohesión confundida con "pocas líneas" — 200 líneas cohesas pueden ser mejor que cinco clases arbitrarias.'
          }
        </li>
        <li>{"Clase dios con formateo, impuestos, logs y SMTP."}</li>
      </ul>
      <PracticeExercise
        prompt="Lista 3 responsabilidades de Utilidades y propón 3 clases con alta cohesión que las reemplacen."
        hints={[
          "FormatearNombre → FormateoTexto",
          "CalcularImpuesto → CalculadoraImpuestos",
          "EnviarEmail → NotificadorEmail",
        ]}
        expectedKeywords={["FormateoTexto", "CalculadoraImpuestos", "NotificadorEmail"]}
        successMessage="Correcto. Cada clase con un objetivo claro — alta cohesión."
      />
    </section>
  );
}
