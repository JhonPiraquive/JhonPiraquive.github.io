import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const PRODUCTO_CODE = `public class Producto
{
    public string Nombre { get; }
    public decimal Precio { get; private set; }

    public Producto(string nombre, decimal precio)
    {
        Nombre = nombre;
        Precio = precio;
    }

    public void AplicarDescuento(decimal porcentaje)
    {
        if (porcentaje < 0 || porcentaje > 100)
            throw new ArgumentException("Porcentaje inválido");
        Precio -= Precio * (porcentaje / 100m);
    }
}`;

export function ElementosBasicosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Una caja UML: dibujar lo que ya programaste"}
      </h2>
      <p className="my-4">
        {
          "Un diagrama de clases es un dibujo estático del modelo: qué tipos existen y qué datos/operaciones tiene cada uno. No muestra el orden de ejecución (eso sería un diagrama de secuencia)."
        }
      </p>
      <p className="my-4">
        {
          "Antes de las flechas (herencia, composición), necesitas leer una sola caja. UML (Unified Modeling Language) es el lenguaje visual estándar; aquí usamos Mermaid classDiagram: una caja = una clase."
        }
      </p>
      <p className="my-4">
        {
          "Tres compartimentos: nombre arriba, atributos (estado) en el medio, métodos (comportamiento) abajo. El + suele indicar público."
        }
      </p>
      <Callout title="En el aula" variant="callout-tip">
        {
          "Pide a dos estudiantes: uno dibuja la caja; el otro escribe la clase C#. Luego cruzan: ¿coinciden nombres y visibilidad?"
        }
      </Callout>
      <MermaidDiagram
        title="Producto en Tienda Andes"
        chart={`classDiagram
  class Producto {
    +string Nombre
    +decimal Precio
    +Producto(string nombre, decimal precio)
    +AplicarDescuento(decimal porcentaje)
  }`}
      />
      <p className="my-4">
        {
          "Esa caja se traduce casi línea a línea a C#. Si el diagrama y el código no coinciden, uno de los dos miente — y el equipo se pelea."
        }
      </p>
      <CodeFiddle language="csharp" code={PRODUCTO_CODE} />
      <StepReveal
        title="Cómo leer la caja"
        steps={[
          {
            title: "Nombre",
            content: "Producto: el tipo del dominio.",
          },
          {
            title: "Atributos",
            content: "Nombre y Precio: datos que guarda el objeto.",
          },
          {
            title: "Métodos",
            content: "Constructor y AplicarDescuento: operaciones. El constructor no es un “dato”.",
          },
          {
            title: "Mapeo a C#",
            content: "Cada miembro del diagrama tiene equivalente en la clase.",
          },
        ]}
      />
      <p className="my-4">
        {
          "Dibuja solo lo del dominio. No satures la caja con logs, detalles de EF Core o nombres de tablas. Un diagrama por módulo o caso de uso — no el mapa del universo."
        }
      </p>
    </section>
  );
}
