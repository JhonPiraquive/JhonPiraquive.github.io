import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const CONTRATO_IENVIO = `public interface IEnvio
{
    decimal Calcular(decimal pesoKg);
}

public class EnvioExpress : IEnvio
{
    public decimal Calcular(decimal pesoKg) => pesoKg * 10;
}

public class EnvioNormal : IEnvio
{
    public decimal Calcular(decimal pesoKg) => pesoKg * 5;
}

public class CalculadoraEnvioPedido
{
    private readonly IEnvio _estrategia;
    public CalculadoraEnvioPedido(IEnvio estrategia) => _estrategia = estrategia;
    public decimal Costo(decimal pesoKg) => _estrategia.Calcular(pesoKg);
}`;

export function OcpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"O — Abierto a extensión, cerrado al cliente (OCP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Nueva modalidad de envío cada trimestre"}</h3>
      <p className="my-4">
        {
          "Tienda Andes vende artesanías pesadas: express, normal y promos. OCP (Open/Closed Principle) pide que agregar «envío gratis» sea una clase nueva, no otro else en CalculadoraEnvioPedido. El polimorfismo que ya practicaste es la herramienta."
        }
      </p>
      <CodeFiddle language="csharp" code={CONTRATO_IENVIO} />
      <MermaidDiagram
        chart={`classDiagram
  class IEnvio {
    <<interface>>
    +Calcular(decimal pesoKg) decimal
  }
  IEnvio <|.. EnvioExpress
  IEnvio <|.. EnvioNormal`}
      />
      <StepReveal
        title="EnvioGratis sin editar CalculadoraEnvioPedido"
        steps={[
          { title: "Cliente usa IEnvio", content: "CalculadoraEnvioPedido solo delega en _estrategia." },
          { title: "Express y Normal existen", content: "Main elige cuál inyectar." },
          { title: "Llega EnvioGratis", content: "Nueva clase : IEnvio con regla promo." },
          { title: "Calculadora intacta", content: "Solo cambia la línea de composición en Main." },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"No confundir con «nunca editar nada»"}</h3>
      <p className="my-4">
        {
          "Sí editas implementaciones y corriges bugs. Lo que no debería crecer es el switch en el orquestador cada vez que marketing inventa una promo."
        }
      </p>
      <PracticeExercise
        prompt="Implementa EnvioGratis : IEnvio (peso ≤ 1 kg → 0, si no → 3) sin tocar EnvioExpress ni CalculadoraEnvioPedido."
        hints={[
          "Nueva clase con Calcular",
          "Registra en Main",
          "OCP = extensión, no modificación del cliente",
        ]}
        expectedKeywords={["EnvioGratis", "IEnvio", "Calcular"]}
        successMessage="Correcto. OCP en acción sobre envíos de la tienda."
      />
    </section>
  );
}
