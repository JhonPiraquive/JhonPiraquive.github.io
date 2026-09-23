import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const UTILIDADES_CODE = `// Anti-ejemplo en Tienda Andes — baja cohesión
public class UtilidadesTienda
{
    public string FormatearSku(string sku) => sku.Trim().ToUpperInvariant();
    public decimal CalcularIva(decimal valor) => valor * 0.19m;
    public void EnviarSmsCliente(string destino) { }
}

// Alta cohesión — un objetivo por clase
public class FormateoSku
{
    public string Normalizar(string sku) => sku.Trim().ToUpperInvariant();
}

public class CalculadoraIva
{
    public decimal Calcular(decimal valor) => valor * 0.19m;
}

public class NotificadorSms
{
    public void Enviar(string destino) => Console.WriteLine($"SMS a {destino}");
}`;

export function CohesionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cohesión: una idea por clase"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"UtilidadesTienda otra vez"}</h3>
      <p className="my-4">
        {
          "Cohesión mide si lo que vive junto en una clase persigue el mismo objetivo. UtilidadesTienda mezcla formato de SKU, impuesto y SMS — tres motivos de cambio distintos. Cuatro devs en el mismo archivo = merges eternos."
        }
      </p>
      <CodeFiddle language="csharp" code={UTILIDADES_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"No confundir con «pocas líneas»"}</h3>
      <p className="my-4">
        {
          "Doscientas líneas que solo calculan totales de pedido pueden ser más cohesas que cinco clases arbitrarias. Pregunta: «¿todo esto cambia por la misma razón de negocio?»"
        }
      </p>
      <PracticeExercise
        prompt="Separa UtilidadesTienda en tres clases cohesas (nombres del ejemplo). ¿Qué motivo de cambio tiene cada una?"
        hints={[
          "SKU → FormateoSku",
          "IVA → CalculadoraIva",
          "SMS → NotificadorSms",
        ]}
        expectedKeywords={["FormateoSku", "CalculadoraIva", "NotificadorSms"]}
        successMessage="Correcto. Alta cohesión = un rol reconocible por clase."
      />
    </section>
  );
}
