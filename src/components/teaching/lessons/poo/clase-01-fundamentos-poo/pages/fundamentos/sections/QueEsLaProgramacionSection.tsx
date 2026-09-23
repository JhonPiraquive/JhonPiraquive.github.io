import { ClayCard } from "@/components/clay/ClayCard";
import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const PRODUCTO_CODE = `using System;

// Tienda Andes: un producto del catálogo
public class Producto
{
    public string Nombre { get; private set; }
    public decimal Precio { get; private set; }

    public Producto(string nombre, decimal precio)
    {
        if (string.IsNullOrWhiteSpace(nombre))
            throw new ArgumentException("El nombre no puede estar vacío");
        if (precio < 0)
            throw new ArgumentException("El precio no puede ser negativo");
        Nombre = nombre;
        Precio = precio;
    }

    public void AplicarDescuento(decimal porcentaje)
    {
        if (porcentaje <= 0 || porcentaje > 50)
            throw new ArgumentException("Descuento entre 0 y 50%");
        Precio -= Precio * (porcentaje / 100m);
    }
}

public class Program
{
    public static void Main()
    {
        var cafe = new Producto("Café de Nariño", 12_000m);
        cafe.AplicarDescuento(10);
        Console.WriteLine($"{cafe.Nombre}: {cafe.Precio}"); // 10800
    }
}`;

const MALO_CODE = `// Evitar: cualquiera puede romper el precio desde afuera
public class ProductoRotto
{
    public decimal Precio { get; set; } // ← sin control
}`;

export function QueEsLaProgramacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Empecemos por un problema concreto"}
      </h2>
      <p className="my-4">
        {
          "Imagina Tienda Andes: una tienda que vende café, panela y artesanías. En el código, sin orientación a objetos, suele pasar esto: variables sueltas (nombreProducto, precio, stock) y funciones repartidas que las tocan. Un día el checkout pone precio = -500. Nadie lo impidió."
        }
      </p>
      <p className="my-4">
        {
          "Qué es POO en una frase: un estilo de programar donde modelas el negocio como objetos — entidades con estado (datos) y comportamiento (métodos) — en lugar de datos sueltos y funciones que los tocan desde afuera."
        }
      </p>
      <p className="my-4">
        {
          "La Programación Orientada a Objetos (POO) responde a esa molestia: en vez de datos sueltos, modelas “cosas” del negocio — un Producto, un Pedido, un Cliente — que cargan sus datos y las reglas de cómo pueden cambiar."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"La idea en una frase"}</h3>
      <p className="my-4">
        {
          "Un objeto agrupa estado (los datos actuales) y comportamiento (lo que puede hacer con esos datos). El resto del programa no “mete mano” al estado a ciegas: le pide al objeto que haga algo válido."
        }
      </p>
      <MermaidDiagram
        title="De variables sueltas a un objeto"
        description="El Producto concentra nombre, precio y las reglas de cambio"
        chart={`flowchart LR
  subgraph Antes["Sin POO"]
    A1[nombre]
    A2[precio]
    A3[descuento]
    F1[función checkout]
    F1 --> A2
  end
  subgraph Despues["Con POO"]
    P["Producto\nnombre + precio\n+AplicarDescuento"]
  end
  Antes -.->|modelar| Despues`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Míralo en C#"}</h3>
      <p className="my-4">
        {
          "Abajo, Producto nace con nombre y precio válidos. AplicarDescuento es la única forma de bajar el precio: si pasas un porcentaje absurdo, el objeto rechaza el cambio."
        }
      </p>
      <CodeFiddle language="csharp" title="Producto en Tienda Andes" code={PRODUCTO_CODE} />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error típico al empezar"}</strong>
        <p>
          {
            "Crear “clases” que solo tienen getters y setters públicos, y dejar toda la lógica en el Program o en un controlador. Eso no es POO útil: el objeto no protege nada."
          }
        </p>
      </ClayCard>
      <CodeFiddle language="csharp" title="Anti-ejemplo" code={MALO_CODE} />
      <Callout title="Por qué importa en la vida del código">
        {
          "Cuando el precio solo cambia por métodos del Producto, un bug en el checkout no puede inventar un monto negativo. Las reglas viven junto al dato. Eso es mantenibilidad concreta, no teoría."
        }
      </Callout>
      <PracticeExercise
        prompt="Con tus palabras: ¿qué gana Tienda Andes si el carrito es un objeto (con ítems y total) en lugar de tres variables sueltas que toca cada función?"
        hints={["¿Quién valida el descuento o el total?", "Piensa en un solo lugar con las reglas"]}
        expectedKeywords={["reglas", "estado", "objeto", "valid"]}
        successMessage="Bien. El objeto concentra estado y reglas: menos inconsistencias y cambios más localizados."
      />
    </section>
  );
}
