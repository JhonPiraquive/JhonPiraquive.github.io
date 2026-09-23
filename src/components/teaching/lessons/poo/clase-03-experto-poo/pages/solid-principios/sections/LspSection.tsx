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
}`;

const GADGET_LSP_ROTO = `public abstract class Producto
{
    public abstract decimal CalcularDescuento();
}

public class Gadget : Producto
{
    public override decimal CalcularDescuento()
    {
        if (Precio < 10_000m)
            throw new InvalidOperationException("Gadget barato sin promo");
        return Precio * 0.05m;
    }
    public decimal Precio { get; init; }
}

// foreach (Producto p in lineas) p.CalcularDescuento(); // explota en un Gadget`;

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
        {"L — Sustituir sin sorpresas (LSP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"El pingüino que rompe el bucle"}</h3>
      <p className="my-4">
        {
          "LSP (Liskov Substitution Principle) es semántico: no basta con que compile la herencia. Si el cliente recorre List<Ave> y llama Volar(), cada ave debe poder volar o no debería ser Ave. Pingüino que lanza excepción rompe el contrato — igual que un foreach sobre Producto."
        }
      </p>
      <CodeFiddle language="csharp" code={AVE_PINGUINO_ANTIEJEMPLO} />
      <MermaidDiagram
        chart={`flowchart TD
  Base[Ave.Volar] --> Expect[Cliente espera éxito]
  Sub[Pinguino.Volar] --> Break[Lanza excepción]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mismo error en Tienda Andes"}</h3>
      <p className="my-4">
        {
          "La caja trata todo Producto igual: CalcularDescuento() debería devolver un decimal, no explotar en Gadget barato. Es la misma violación que el pingüino, con otro disfraz."
        }
      </p>
      <CodeFiddle language="csharp" code={GADGET_LSP_ROTO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Rediseño: capacidad solo donde aplica"}</h3>
      <CodeFiddle language="csharp" code={REDISENO_IVOLADOR} />
      <p className="my-4">
        {
          "En catálogo: si la promo no aplica, devuelve 0 en lugar de lanzar; o modela reglas con composición, no con herencia que miente."
        }
      </p>
      <PracticeExercise
        prompt="¿Qué principio viola Gadget.CalcularDescuento() con throw? ¿Cómo lo arreglarías para el foreach de la caja?"
        hints={[
          "LSP — sustituibilidad",
          "Devolver 0 o mover regla fuera del contrato Producto",
          "Cliente uniforme sobre Producto",
        ]}
        expectedKeywords={["LSP", "Producto", "sustituibilidad"]}
        successMessage="Correcto. LSP protege el polimorfismo que ya construiste."
      />
    </section>
  );
}
