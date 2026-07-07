import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const CONTRATO_IENVIO = `public interface IEnvio
{
    decimal Calcular(decimal peso);
}

public class EnvioExpress : IEnvio
{
    public decimal Calcular(decimal peso) => peso * 10;
}

public class EnvioNormal : IEnvio
{
    public decimal Calcular(decimal peso) => peso * 5;
}

public class EnvioGratis : IEnvio
{
    public decimal Calcular(decimal peso) => peso <= 1 ? 0 : 3;
}`;

export function OcpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"O — Abierto/Cerrado (OCP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Abierto a extensión — nuevas clases que implementan contrato."}</li>
        <li>{"Cerrado a modificación del cliente — sin switch creciente."}</li>
        <li>{"OCP con polimorfismo: IEnvio + variantes."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Contrato IEnvio"}</h3>
      <CodeFiddle language="csharp" code={CONTRATO_IENVIO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Jerarquía OCP"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class IEnvio {
    <<interface>>
    +Calcular(decimal peso) decimal
  }
  IEnvio <|.. EnvioExpress
  IEnvio <|.. EnvioNormal
  IEnvio <|.. EnvioGratis`}
      />
      <StepReveal
        title="Extender sin editar cliente"
        steps={[
          {
            title: "Cliente usa IEnvio",
            content: "La calculadora o servicio depende del contrato, no del concreto.",
          },
          {
            title: "Existen Express y Normal",
            content: "Implementaciones iniciales registradas en composición raíz.",
          },
          {
            title: "Nueva clase EnvioGratis",
            content: "Se añade archivo/clase que implementa IEnvio.",
          },
          {
            title: "Cliente sin cambios",
            content: "Solo Main o DI registra la nueva instancia — sin switch.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: calculadora de envíos"}</h3>
      <p className="my-4">
        {
          "Logística añadía modalidades cada trimestre. switch(tipo) duplicado en tres microservicios. Refactor a IEnvio + estrategias; nuevos tipos = nueva clase."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"switch por tipo en muchos lugares — viola OCP."}</li>
        <li>
          {
            "Confundir OCP con \"nunca editar código\" — se editan implementaciones nuevas, no el cliente estable."
          }
        </li>
      </ul>
      <PracticeExercise
        prompt="Implementa EnvioGratis : IEnvio (peso ≤ 1 → 0, si no → 3) sin modificar EnvioExpress ni EnvioNormal."
        hints={[
          "Nueva clase que implementa Calcular",
          "No tocar clases existentes ni cliente",
          "Registra instancia en Main",
        ]}
        expectedKeywords={["EnvioGratis", "IEnvio", "Calcular"]}
        successMessage="Correcto. OCP: extensión por nueva clase, cliente intacto."
      />
    </section>
  );
}
