import { ClayCard } from "@/components/clay/ClayCard";
import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const CARRO_CODE = `using System;

public class Carro
{
    public int Velocidad { get; private set; }

    public void Acelerar(int delta)
    {
        if (delta <= 0) throw new ArgumentException("delta debe ser positivo");
        Velocidad += delta;
    }
}

public class Program
{
    public static void Main()
    {
        var carro = new Carro();
        carro.Acelerar(10);
        Console.WriteLine(carro.Velocidad); // 10
    }
}`;

const CARRO_MALO_CODE = `// Evitar: cualquiera puede poner velocidad negativa
public class CarroMalo
{
    public int Velocidad { get; set; } // ← rompe el control del objeto
}`;

export function QueEsLaProgramacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué es la Programación Orientada a Objetos (POO)?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Modelar el mundo (o el negocio) como “cosas” con datos + acciones."}</li>
        <li>{"Agrupar datos y comportamiento en la misma unidad: el objeto."}</li>
        <li>{"Reutilizar y extender comportamiento sin copiar y pegar."}</li>
        <li>{"Mejorar mantenibilidad: cambios más localizados."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La POO es un estilo de programación donde organizas el software alrededor de objetos. Un objeto suele representar una entidad del dominio (por ejemplo, Pedido, Usuario, Carrito) y contiene:"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Estado: sus datos internos (propiedades o campos)."}</li>
        <li>{"Comportamiento: lo que puede hacer (métodos)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Reducir caos: en vez de funciones sueltas repartidas por el código, tienes unidades con responsabilidades claras."}</li>
        <li>{"Evitar inconsistencias: el objeto protege sus reglas (invariantes)."}</li>
        <li>{"Diseñar para el cambio: agregar variantes (por ejemplo, nuevos métodos de pago) sin tocar todo el sistema."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Aplica cuando: hay reglas de negocio, estados válidos e inválidos, entidades que “hacen” cosas."}</li>
        <li>{"No aplica cuando: el problema es pura transformación de datos (pipeline funcional simple) y una estructura sin objetos basta."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Fintech LATAM: carrito con public decimal Total { get; set; } — checkout asigna total sin validar; pedidos con monto negativo en reportes. Corrección: métodos AplicarDescuento y Total con private set."
          }
        </li>
        <li>
          {
            "ERP PYME: 200 variables globales para un pedido — nadie sabe quién cambió el estado. Corrección: clase Pedido con estado encapsulado y métodos de dominio."
          }
        </li>
        <li>
          {
            "Microservicio migrado a C# con clases anémicas (solo getters/setters) y toda la lógica en controllers. Corrección: mover reglas al dominio y proteger invariantes en el objeto."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo de vida real"}</h3>
      <p className="my-4">
        {
          "Piensa en un carro: tiene estado (velocidad, combustible) y comportamientos (acelerar, frenar). No tiene sentido “sumar velocidad” desde cualquier parte sin reglas: el carro controla cómo cambia su estado."
        }
      </p>
      <CodeFiddle language="csharp" title="Ejemplo C# (mínimo)" code={CARRO_CODE} />
      <MermaidDiagram
        chart={`classDiagram
  class Carro {
    +int Velocidad
    +Acelerar(int delta)
  }`}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Anti-ejemplo: setter público rompe invariantes"}</strong>
        <p>
          {
            "Evitar exponer todo con public set. Si Velocidad tuviera { get; set; }, cualquier código podría asignar velocidad negativa y romper las reglas del dominio."
          }
        </p>
      </ClayCard>
      <CodeFiddle language="csharp" code={CARRO_MALO_CODE} />
      <Callout title="Caso real: saldo negativo por setter público">
        {
          "Un equipo migra un módulo de carrito a clases pero deja public decimal Saldo { get; set; } en CuentaBancaria. Un bug en checkout hace cuenta.Saldo = -100 directamente. Los pedidos se procesan con saldo inválido hasta que auditoría detecta inconsistencias. Decisión clave: private set + métodos Retirar/Depositar que validen montos."
        }
      </Callout>
      <PracticeExercise
        prompt="Explica con tus palabras qué gana un proyecto al modelar un carrito de compras como objeto en lugar de variables sueltas (total, items, descuento) repartidas por funciones."
        hints={["Piensa en reglas de negocio centralizadas", "¿Quién valida el descuento o el total?"]}
        expectedKeywords={["reglas", "estado", "encapsul", "manten"]}
        successMessage="Correcto. Un objeto agrupa estado y reglas en un solo lugar, reduce inconsistencias y facilita cambios localizados."
      />
    </section>
  );
}
