import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const AVE_PINGUINO_ANTIEJEMPLO = `public class Ave
{
    public virtual void Volar() => Console.WriteLine("Volando");
}

public class Pinguino : Ave
{
    public override void Volar()
        => throw new InvalidOperationException("No puedo volar");
}

// Mejor: IVolador solo para aves que vuelan; Pinguino no implementa Volar`;

const REDISENO_IVOLADOR = `public interface IVolador
{
    void Volar();
}

public class Aguila : IVolador
{
    public void Volar() => Console.WriteLine("Volando alto");
}

public class Pinguino
{
    public void Nadar() => Console.WriteLine("Nadando");
}`;

export function LspSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"L — Sustitución de Liskov (LSP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Toda derivada debe sustituir a la base sin sorprender al cliente."}</li>
        <li>{"Mismo contrato — sin excepciones nuevas ni significados rotos."}</li>
        <li>{"Herencia forzada que no cumple método base viola LSP."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-ejemplo: Ave / Pingüino"}</h3>
      <CodeFiddle language="csharp" code={AVE_PINGUINO_ANTIEJEMPLO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ruptura de contrato"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  Base[Ave.Volar] --> Expect[Cliente espera éxito]
  Sub[Pinguino.Volar] --> Break[Lanza excepción]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Rediseño con IVolador"}</h3>
      <CodeFiddle language="csharp" code={REDISENO_IVOLADOR} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lista de Ave con Volar() que falla en una derivada — rompe bucle uniforme."}</li>
        <li>{"Override que rompe contrato prometido por la base."}</li>
        <li>{"Ignorar LSP al usar polimorfismo."}</li>
      </ul>
      <PracticeExercise
        prompt="¿Qué principio viola Pinguino : Ave con Volar() que lanza? Propón rediseño con IVolador o clases separadas."
        hints={[
          "LSP — sustituibilidad",
          "Pingüino no debe prometer Volar si no vuela",
          "IVolador solo para quienes vuelan",
        ]}
        expectedKeywords={["LSP", "IVolador", "sustituibilidad"]}
        successMessage="Correcto. LSP exige que la derivada cumpla el contrato de la base sin sorpresas."
      />
    </section>
  );
}
