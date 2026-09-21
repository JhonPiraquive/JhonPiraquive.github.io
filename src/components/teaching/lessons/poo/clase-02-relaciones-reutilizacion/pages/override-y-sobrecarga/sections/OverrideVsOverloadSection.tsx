import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const ANIMAL_PERRO_CODE = `using System;

public class Animal
{
    public virtual void Hablar() => Console.WriteLine("Sonido genérico");

    public void Comer(string comida) => Console.WriteLine($"Come {comida}");
    public void Comer(string comida, int cantidad)
        => Console.WriteLine($"Come {cantidad} de {comida}");
}

public class Perro : Animal
{
    public override void Hablar() => Console.WriteLine("Guau!");
}

Animal a = new Perro();
a.Hablar();              // Guau! — override, runtime
a.Comer("croquetas");    // overload 1, compile time
a.Comer("croquetas", 2); // overload 2, compile time`;

const NEW_VS_OVERRIDE_CODE = `public class Animal
{
    public virtual void Hablar() => Console.WriteLine("Sonido genérico");
}

public class GatoMal : Animal
{
    public new void Hablar() => Console.WriteLine("Miau!");
}

Animal refBase = new GatoMal();
refBase.Hablar(); // Sonido genérico — new no polimorfiza`;

export function OverrideVsOverloadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comparación práctica: override, overload y `new`"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Una clase puede tener overload y override al mismo tiempo — mecanismos independientes."}</li>
        <li>{"new oculta sin dispatch polimórfico."}</li>
        <li>{"Override respeta contrato; overload mejora ergonomía."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Override y overload en la misma jerarquía"}</h3>
      <CodeFiddle language="csharp" code={ANIMAL_PERRO_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"`new` vs `override`"}</h3>
      <CodeFiddle language="csharp" code={NEW_VS_OVERRIDE_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Animal: override + overload"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Animal <|-- Perro
  class Animal {
    +Hablar()
    +Comer(string comida)
    +Comer(string comida, int cantidad)
  }
  class Perro {
    +Hablar()
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo usar cada uno"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Override: especializar comportamiento en familia de tipos (canales, impuestos, mensajes)."}</li>
        <li>{"Overload: ergonomía de API sin duplicar nombres de operación (búsqueda, cálculo)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Confundir override con overload — override = misma firma + herencia."}</li>
        <li>{"Mezclar ocultamiento y polimorfismo en el mismo método sin entender la salida."}</li>
        <li>{"Olvidar using System.Collections.Generic al usar List<Mensaje>."}</li>
      </ul>
      <PracticeExercise
        prompt="Con `Animal a = new Perro()` y `Perro p = new Perro()`, ¿cambia la salida de `Hablar()` en cada caso? Explica override y tipo de referencia."
        hints={[
          "Perro usa override de Hablar",
          "a es referencia Animal pero instancia Perro — dispatch polimórfico",
          "p es referencia Perro — misma implementación override",
        ]}
        expectedKeywords={["Guau", "override", "runtime", "referencia"]}
        successMessage="Correcto. Ambas imprimen Guau! porque override resuelve por tipo real del objeto."
      />
    </section>
  );
}
