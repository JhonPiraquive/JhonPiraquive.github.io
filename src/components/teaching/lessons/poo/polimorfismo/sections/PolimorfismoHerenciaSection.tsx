import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PolimorfismoHerenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Polimorfismo con clase abstracta"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clase abstracta Impuesto define contrato común Calcular."}</li>
        <li>{"Derivadas Iva, ImpuestoCero, ImpuestoFijo implementan con override."}</li>
        <li>{"List<Impuesto> permite bucle homogéneo."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El polimorfismo también opera con jerarquías de herencia: variable de tipo base o abstracta, objeto concreto derivado. foreach sobre List<Impuesto> llama Calcular polimórficamente."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de polimorfismo con abstracta"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Método abstract o virtual en la base."}</li>
        <li>{"Derivadas con override (no new)."}</li>
        <li>{"Colección del tipo base/contrato, no del concreto."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: impuestos"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;
using System.Collections.Generic;

public abstract class Impuesto
{
    public abstract decimal Calcular(decimal baseImponible);
}

public class Iva : Impuesto
{
    public override decimal Calcular(decimal baseImponible) => baseImponible * 0.19m;
}

public class ImpuestoCero : Impuesto
{
    public override decimal Calcular(decimal baseImponible) => 0m;
}

public class ImpuestoFijo : Impuesto
{
    private readonly decimal _monto;
    public ImpuestoFijo(decimal monto) => _monto = monto;

    public override decimal Calcular(decimal baseImponible) => _monto;
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Foreach polimórfico"}</h3>
      <CodeFiddle
        language="csharp"
        code={`var impuestos = new List<Impuesto>
{
    new Iva(),
    new ImpuestoCero(),
    new ImpuestoFijo(5m)
};

foreach (var imp in impuestos)
    Console.WriteLine(imp.Calcular(100)); // 19, 0, 5`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Preview herencia virtual (conexión lección herencia)"}</h3>
      <CodeFiddle
        language="csharp"
        code={`public class Vehiculo
{
    public virtual void Arrancar() => Console.WriteLine("Vehículo arrancando...");
}

public class Carro : Vehiculo
{
    public override void Arrancar() => Console.WriteLine("Carro arrancando...");
}

Vehiculo v = new Carro();
v.Arrancar(); // Carro arrancando... — dispatch en runtime`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Dispatch en runtime (secuencia)"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente
  participant V as Vehiculo ref
  participant Car as Carro instancia
  C->>V: Arrancar()
  V->>Car: override Arrancar()
  Car-->>C: Carro arrancando...`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Jerarquía Impuesto"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Impuesto <|-- Iva
  Impuesto <|-- ImpuestoCero
  Impuesto <|-- ImpuestoFijo
  class Impuesto {
    <<abstract>>
    +Calcular(decimal baseImponible) decimal
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"new en lugar de override — oculta sin dispatch polimórfico."}</li>
        <li>{"Olvidar virtual/abstract en la base."}</li>
        <li>{"Contrato inconsistente: una implementación lanza excepción donde otras cumplen."}</li>
      </ul>
      <PracticeExercise
        prompt="Predice la salida de imp.Calcular(100) para Iva, ImpuestoCero e ImpuestoFijo(5) antes de ejecutar. Luego verifica en consola."
        hints={[
          "Iva: 19% de 100 = 19",
          "ImpuestoCero siempre devuelve 0",
          "ImpuestoFijo ignora la base y devuelve el monto fijo",
        ]}
        expectedKeywords={["19", "0", "5"]}
        successMessage="Correcto. Cada derivada responde distinto bajo la misma firma Calcular."
      />
    </section>
  );
}
