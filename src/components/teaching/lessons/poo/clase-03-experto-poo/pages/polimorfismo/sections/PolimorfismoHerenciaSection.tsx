import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PolimorfismoHerenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Polimorfismo con herencia: descuentos en el catálogo"}
      </h2>
      <p className="my-4">
        {
          "Polimorfismo (en POO) es que una misma llamada — por ejemplo CalcularDescuento() — ejecuta lógica distinta según el tipo real del objeto, aunque la variable se declare con el tipo base Producto. El compilador ve Producto; en runtime elige Libro o Gadget."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Una promoción, reglas distintas por producto"}</h3>
      <p className="my-4">
        {
          "La caja de Tienda Andes recorre líneas del pedido y pregunta a cada producto cuánto descuenta. Libro y Gadget son Producto en el diagrama, pero CalcularDescuento() no devuelve lo mismo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"C#: Producto abstracto y derivadas"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;
using System.Collections.Generic;

public abstract class Producto
{
    public decimal Precio { get; }
    protected Producto(decimal precio) => Precio = precio;
    public abstract decimal CalcularDescuento();
}

public class Libro : Producto
{
    public Libro(decimal precio) : base(precio) { }
    public override decimal CalcularDescuento() => Precio * 0.10m;
}

public class Gadget : Producto
{
    public Gadget(decimal precio) : base(precio) { }
    public override decimal CalcularDescuento() => Precio * 0.05m;
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Foreach sobre List<Producto>"}</h3>
      <CodeFiddle
        language="csharp"
        code={`var catalogo = new List<Producto>
{
    new Libro(20_000m),
    new Gadget(50_000m)
};

foreach (var p in catalogo)
    Console.WriteLine(p.CalcularDescuento()); // 2000, 2500`}
      />
      <MermaidDiagram
        title="Dispatch en runtime"
        description="Referencia Producto; CalcularDescuento resuelve en Libro o Gadget"
        chart={`sequenceDiagram
  participant C as Caja
  participant R as Producto ref
  participant L as Libro
  participant G as Gadget
  C->>R: CalcularDescuento()
  alt instancia Libro
    R->>L: override
    L-->>C: 10% del precio
  else instancia Gadget
    R->>G: override
    G-->>C: 5% del precio
  end`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Impuestos: mismo mecanismo, otro subdominio"}</h3>
      <p className="my-4">
        {
          "Al facturar, List<Impuesto> con Iva, ImpuestoCero e ImpuestoFijo se comporta igual: una llamada Calcular(base), distintos montos. Úsalo en el reto si quieres practicar abstractas además del catálogo."
        }
      </p>
      <CodeFiddle
        language="csharp"
        code={`public abstract class Impuesto
{
    public abstract decimal Calcular(decimal baseImponible);
}

public class Iva : Impuesto
{
    public override decimal Calcular(decimal b) => b * 0.19m;
}

public class ImpuestoCero : Impuesto
{
    public override decimal Calcular(decimal b) => 0m;
}

foreach (var imp in new Impuesto[] { new Iva(), new ImpuestoCero() })
    Console.WriteLine(imp.Calcular(100)); // 19, 0`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Trampas en C#"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"new en lugar de override — oculta sin dispatch polimórfico."}</li>
        <li>{"Olvidar abstract/virtual en la base."}</li>
        <li>{"Una derivada lanza excepción donde las demás cumplen — rompe LSP (lo verás en SOLID)."}</li>
      </ul>
      <PracticeExercise
        prompt="Antes de ejecutar: ¿qué imprime el foreach sobre Libro(10000) y Gadget(10000)? Luego verifica en consola."
        hints={[
          "Libro: 10% → 1000",
          "Gadget: 5% → 500",
          "La firma es la misma; el cuerpo no",
        ]}
        expectedKeywords={["1000", "500", "CalcularDescuento"]}
        successMessage="Correcto. Misma llamada, respuestas distintas — polimorfismo con herencia."
      />
    </section>
  );
}
