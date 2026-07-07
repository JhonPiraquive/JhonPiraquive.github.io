import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function HerenciaQueEsYSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herencia: qué es y para qué sirve"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Herencia = relación “es un” (is-a)."}</li>
        <li>{"Reutiliza comportamiento común en una clase base."}</li>
        <li>{"Permite especialización en subclases."}</li>
        <li>{"Se usa con cuidado: puede aumentar acoplamiento."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Herencia es un mecanismo donde una clase derivada (hija) obtiene estado y comportamiento de una clase base (padre). En C# se expresa con dos puntos:"
        }
      </p>
      <CodeFiddle language="csharp" code={`class Carro : Vehiculo { }`} />
      <p className="my-4">
        {
          "Un Carro es un Vehiculo; un Moto es un Vehiculo. No confundir con “tiene un” (composición)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Compartir lógica común (Placa, Arrancar) sin duplicar en cada subclase."}</li>
        <li>{"Modelar jerarquías reales del dominio cuando el “es un” es natural y estable."}</li>
        <li>
          {
            "Habilitar polimorfismo: tratar derivadas como base; la llamada resuelve el tipo real en tiempo de ejecución."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Constructor y base(...)"}</h3>
      <p className="my-4">
        {
          "Si la clase base exige parámetros en su constructor, la derivada debe invocar base(placa) antes de añadir lógica propia. Olvidar base(...) provoca error de compilación si la base no tiene constructor sin parámetros."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"virtual y override"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"virtual en la base: marca un método que puede redefinirse en derivadas."}</li>
        <li>{"override en la derivada: reemplaza la implementación respetando la firma."}</li>
        <li>
          {
            "Sin virtual (ni abstract), override es rechazado; new solo oculta y no da polimorfismo real."
          }
        </li>
      </ul>
      <StepReveal
        title="Construcción de una derivada"
        steps={[
          { title: "Cliente", content: 'Se llama new Carro("ABC-123").' },
          {
            title: "Constructor derivado",
            content: "Entra el constructor Carro y delega en base(placa).",
          },
          {
            title: "Constructor base",
            content: "Vehiculo valida la placa y asigna Placa.",
          },
          {
            title: "Objeto listo",
            content: "La instancia es Carro; puede declararse como Vehiculo o Carro.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: Vehiculo, Carro, Moto"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;

public class Vehiculo
{
    public string Placa { get; }

    public Vehiculo(string placa)
    {
        if (string.IsNullOrWhiteSpace(placa))
            throw new ArgumentException("Placa requerida");
        Placa = placa;
    }

    public virtual void Arrancar()
    {
        Console.WriteLine("Vehículo arrancando...");
    }
}

public class Carro : Vehiculo
{
    public Carro(string placa) : base(placa) { }

    public override void Arrancar()
    {
        Console.WriteLine("Carro arrancando (inyección + encendido)...");
    }
}

public class Moto : Vehiculo
{
    public Moto(string placa) : base(placa) { }
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Polimorfismo con tipo base"}</h3>
      <CodeFiddle
        language="csharp"
        code={`Vehiculo v1 = new Carro("ABC-123");
Vehiculo v2 = new Moto("XYZ-999");

v1.Arrancar(); // Carro arrancando...
v2.Arrancar(); // Vehículo arrancando... (implementación base)`}
      />
      <StepReveal
        title="Llamada polimórfica"
        steps={[
          {
            title: "Declaración",
            content: 'Vehiculo v = new Carro("ABC-123"); — la variable es de tipo base.',
          },
          { title: "Objeto real", content: "En memoria el objeto es un Carro." },
          {
            title: "Dispatch",
            content: "v.Arrancar() ejecuta Carro.Arrancar en runtime (override).",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Método heredado sin override: Parar()"}</h3>
      <p className="my-4">
        {
          "No todo método necesita virtual. Si el comportamiento es igual para todas las derivadas, se define una vez en la base:"
        }
      </p>
      <CodeFiddle
        language="csharp"
        code={`public class Vehiculo
{
    // ... constructor y Arrancar virtual ...

    public void Parar()
    {
        Console.WriteLine("Vehículo detenido.");
    }
}
// Carro y Moto heredan Parar() sin redefinir.`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Lista polimórfica"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System.Collections.Generic;

var flota = new List<Vehiculo>
{
    new Carro("ABC-123"),
    new Moto("XYZ-999"),
    new Camion("TRL-001")
};

foreach (var v in flota)
    v.Arrancar();`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: flota de transporte"}</h3>
      <p className="my-4">
        {
          "Un sistema modela Vehiculo → Camion → CamionRefrigerado. Tras añadir tipos eléctricos, Arrancar() en la base asume motor de combustión y Parar() en Camion libera remolque — pero Moto no tiene remolque. Un foreach (var v in flota) v.Parar() falla en motos."
        }
      </p>
      <p className="my-4">
        {
          "Lección: heredar solo cuando el contrato de la base aplica a todas las derivadas. Si el comportamiento diverge mucho, composición o interfaces específicas evitan cascadas de override vacíos o excepciones."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama: jerarquía de vehículos"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Vehiculo <|-- Carro
  Vehiculo <|-- Moto
  Vehiculo <|-- Camion

  class Vehiculo {
    +string Placa
    +Vehiculo(string placa)
    +Arrancar()*
    +Parar()
  }
  class Carro {
    +Arrancar()
  }
  class Moto
  class Camion {
    +Arrancar()
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <p className="my-4 font-semibold">{"Aplica herencia cuando:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "La derivada puede reemplazar a la base sin romper expectativas (sustituibilidad, preview LSP)."
          }
        </li>
        <li>{"El “es un” es natural y estable."}</li>
      </ul>
      <p className="my-4 font-semibold">{"No aplica cuando:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Solo quieres reutilizar código (mejor composición)."}</li>
        <li>{"La jerarquía se vuelve rara: PatoElectricoConBluetoothConGPS…."}</li>
        <li>{"Modificar la base rompe muchas derivadas."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "E-commerce: Cuadrado hereda de Rectangulo para “reutilizar” ancho/alto — al redimensionar, rompe invariantes geométricas (LSP). Corrección: composición o interfaz común sin herencia forzada."
          }
        </li>
        <li>
          {
            "App bancaria: Empleado y Cliente heredan de Persona con lógica distinta — duplicación y acoplamiento. Corrección: composición (Empleado tiene Persona) o interfaces por rol."
          }
        </li>
        <li>
          {
            "Sistema de facturación: jerarquía de 8 niveles (Documento → Comprobante → Factura → …) — un cambio en Documento rompe decenas de derivadas. Corrección: aplanar con interfaces y composición."
          }
        </li>
      </ul>
      <Callout title="Error frecuente">
        {
          "Olvidar base(placa) en el constructor de la derivada cuando la base exige parámetros. También usar override sin virtual/abstract en la base — el compilador lo rechaza."
        }
      </Callout>
      <CodeChallenge
        title="Completa la lista polimórfica"
        template={`var flota = new List<Vehiculo> { new Carro("A"), new {{b1}}(), new {{b2}}() };
foreach (var v in flota) v.{{b3}}();`}
        blanks={[
          { id: "b1", answer: "Moto", placeholder: "Otra derivada de Vehiculo" },
          { id: "b2", answer: "Camion", placeholder: "Tercera derivada con override" },
          { id: "b3", answer: "Arrancar", placeholder: "Método virtual en la base" },
        ]}
      />
    </section>
  );
}
