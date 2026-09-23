import { ClayCard } from "@/components/clay/ClayCard";
import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const INVENTARIO_CODE = `using System;

// Tienda Andes: stock de un producto en bodega
public class InventarioProducto
{
    public string Sku { get; }
    public int Cantidad { get; private set; }

    public InventarioProducto(string sku, int cantidadInicial)
    {
        if (string.IsNullOrWhiteSpace(sku))
            throw new ArgumentException("SKU requerido");
        if (cantidadInicial < 0)
            throw new ArgumentException("Cantidad inicial inválida");
        Sku = sku;
        Cantidad = cantidadInicial;
    }

    public void Entrada(int unidades)
    {
        if (unidades <= 0) throw new ArgumentException("Unidades inválidas");
        Cantidad += unidades;
    }

    public void Salida(int unidades)
    {
        if (unidades <= 0) throw new ArgumentException("Unidades inválidas");
        if (unidades > Cantidad)
            throw new InvalidOperationException("Stock insuficiente");
        Cantidad -= unidades;
    }
}

public class Program
{
    public static void Main()
    {
        var cafe = new InventarioProducto("CAF-001", 100);
        cafe.Salida(30);
        Console.WriteLine(cafe.Cantidad); // 70
        // cafe.Cantidad = -5; // no compila: set es private
    }
}`;

const INSEGURO_CODE = `public class InventarioInseguro
{
    public int Cantidad { get; set; } // cualquiera asigna
}

var i = new InventarioInseguro { Cantidad = -999 };`;

const EJEMPLO_ACCESO_CODE = `public class EjemploAcceso
{
    private string _notaInterna;           // solo esta clase
    protected int contadorHijos;           // esta clase + derivadas (Clase 2)
    internal Guid idSesion;                // mismo proyecto
    public string Nombre { get; private set; } // lectura pública, escritura interna
}`;

const PRODUCTO_CANTIDAD_CODE = `public class Producto
{
    private int _cantidad;

    public int Cantidad
    {
        get => _cantidad;
        private set
        {
            if (value < 0)
                throw new ArgumentOutOfRangeException(nameof(value), "Cantidad no puede ser negativa");
            _cantidad = value;
        }
    }

    public void AjustarStock(int delta)
    {
        Cantidad += delta; // pasa por el setter privado
    }
}`;

export function EncapsulamientoQueEsYSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Encapsulamiento: no dejes que te rompan el stock"}
      </h2>
      <p className="my-4">
        {
          "En Tienda Andes, el stock de café no puede quedar en −10 porque alguien escribió inventario.Cantidad = -10 en un script de migración. Encapsulamiento es la idea de ocultar el detalle interno y exponer solo operaciones seguras: Entrada, Salida, Consultar."
        }
      </p>
      <p className="my-4">
        {
          "Estado interno = lo que el objeto guarda. Interfaz pública = lo que el resto del programa puede llamar. Si cambias cómo guardas el stock (array, diccionario, base de datos), los clientes siguen llamando Entrada/Salida."
        }
      </p>
      <CodeFiddle language="csharp" title="Stock encapsulado" code={INVENTARIO_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Quién puede ver y quién puede cambiar"}</h3>
      <CompareTable
        headers={["Modificador", "Visibilidad típica"]}
        rows={[
          ["public", "Cualquier código con referencia al tipo"],
          ["private", "Solo la misma clase"],
          ["protected", "La clase y sus derivadas (lo verás en herencia)"],
          ["internal", "Dentro del mismo proyecto (ensamblado)"],
        ]}
      />
      <p className="my-4">
        {
          "Patrón frecuente en C#: public int Cantidad { get; private set; }. Todos leen; solo la clase escribe, vía métodos que validan."
        }
      </p>
      <CompareTable
        headers={["Aspecto", "Cantidad { get; set; }", "Cantidad { get; private set; } + Entrada/Salida"]}
        rows={[
          ["Quién cambia", "Cualquiera", "Solo la clase"],
          ["Validación", "Dispersa o ausente", "Centralizada"],
          ["Estado inválido", "Sí (Cantidad = -999)", "No (excepción)"],
        ]}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"DTO vs dominio"}</strong>
        <p>
          {
            "Un DTO (Data Transfer Object) solo transporta datos entre capas: ahí los setters públicos suelen estar bien. Un objeto de dominio (inventario, pedido, cliente) casi siempre necesita encapsulamiento."
          }
        </p>
      </ClayCard>
      <CodeFiddle language="csharp" title="Anti-ejemplo" code={INSEGURO_CODE} />
      <Callout title="Historia corta">
        {
          "Un equipo dejó public int Cantidad { get; set; } “para facilitar tests”. Un job nocturno asignó cantidades negativas. Corrección: private set + Entrada/Salida. Los tests llaman métodos, no trucos."
        }
      </Callout>
      <CodeFiddle language="csharp" title="Modificadores de acceso" code={EJEMPLO_ACCESO_CODE} />
      <StepReveal
        title="Qué ocurre al llamar Salida(30)"
        steps={[
          {
            title: "El cliente pide Salida(30)",
            content: "No toca Cantidad directo; usa el método público.",
          },
          {
            title: "Validar unidades > 0",
            content: "Si no, ArgumentException con mensaje claro.",
          },
          {
            title: "Comprobar stock suficiente",
            content: "Si pide más de lo que hay, InvalidOperationException.",
          },
          {
            title: "Actualizar Cantidad",
            content: "Solo la clase asigna gracias a private set.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart LR
  subgraph cliente [Codigo cliente]
    C[Llama Entrada / Salida]
    R[Lee Cantidad]
  end
  subgraph objeto [InventarioProducto]
    M[Metodos con validacion]
    S[Cantidad private set]
  end
  C --> M
  M --> S
  R -.->|solo lectura| S`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Campo privado + propiedad"}</h3>
      <CodeFiddle language="csharp" code={PRODUCTO_CANTIDAD_CODE} />
      <PracticeExercise
        prompt="¿Por qué el mostrador de Tienda Andes es buena analogía de encapsulamiento? ¿Qué operaciones ofreces y qué ocultas?"
        hints={["No dejas que el cliente reescriba el inventario a mano", "¿Quién valida stock?"]}
        expectedKeywords={["operaciones", "oculta", "valid", "stock"]}
        successMessage="Ofreces Entrada/Salida (o venta); ocultas cómo se guarda el número y validas antes de cambiarlo."
      />
    </section>
  );
}
