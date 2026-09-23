import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const ASESOR_CLIENTE_CODE = `using System;

public class Cliente
{
    public string Nombre { get; }
    public Cliente(string nombre) => Nombre = nombre;
}

public class AsesorVentas
{
    public string Nombre { get; }
    public AsesorVentas(string nombre) => Nombre = nombre;

    public void Recomendar(Cliente cliente, Producto producto)
    {
        Console.WriteLine($"{Nombre} sugiere a {cliente.Nombre}: {producto.Sku}");
    }
}

public class Producto
{
    public string Sku { get; }
    public Producto(string sku) => Sku = sku;
}`;

const SESION_MOSTRADOR_CODE = `public class SesionMostrador
{
    public AsesorVentas Asesor { get; }
    public Cliente Cliente { get; }
    public DateTime Inicio { get; }

    public SesionMostrador(AsesorVentas asesor, Cliente cliente, DateTime inicio)
    {
        Asesor = asesor ?? throw new ArgumentNullException(nameof(asesor));
        Cliente = cliente ?? throw new ArgumentNullException(nameof(cliente));
        Inicio = inicio;
    }
}

// AsesorVentas.Atender(SesionMostrador s) puede leer s.Cliente y s.Inicio`;

export function AsociacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Asociación: se conocen, nadie «contiene» al otro"}
      </h2>
      <p className="my-4">
        {
          "Asociación es una colaboración entre objetos independientes: se conocen (método, campo o clase puente) sin que uno sea dueño del ciclo de vida del otro."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Escena en el mostrador"}</h3>
      <p className="my-4">
        {
          "Un asesor recomienda un producto a un cliente. Ninguno es parte del otro: mañana el mismo cliente puede comprar solo y el asesor atiende a otra persona."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Uso puntual en un método"}</h3>
      <p className="my-4">
        {
          "La forma más simple es pasar el otro objeto como parámetro. El ciclo de vida sigue independiente: Cliente y Producto existen antes y después de la recomendación."
        }
      </p>
      <CodeFiddle language="csharp" code={ASESOR_CLIENTE_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuando el contexto importa: clase de enlace"}</h3>
      <p className="my-4">
        {
          "Si necesitas guardar quién atendió a quién y cuándo, una clase puente (SesionMostrador) une asesor y cliente sin herencia ni «Pedido es un Cliente»."
        }
      </p>
      <CodeFiddle language="csharp" code={SESION_MOSTRADOR_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Error que vimos en clase"}</h3>
      <p className="my-4">
        {
          "Alguien modeló VisitaMostrador : Cliente para «tener» el nombre del cliente. Los reportes mezclaron identidad con la visita y se perdió qué asesor atendió en cada fecha. SesionMostrador asocia roles con fecha."
        }
      </p>
      <MermaidDiagram
        chart={`classDiagram
  AsesorVentas --> Cliente : atiende
  AsesorVentas --> Producto : recomienda
  class SesionMostrador {
    +AsesorVentas Asesor
    +Cliente Cliente
    +DateTime Inicio
  }
  AsesorVentas --> SesionMostrador
  Cliente --> SesionMostrador`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confusión típica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Heredar para relacionar (class Pedido : Cliente)."}</li>
        <li>{"Pasar ocho parámetros sueltos cuando una SesionMostrador basta."}</li>
      </ul>
      <CodeChallenge
        title="Completa la asociación"
        template={`public void Recomendar({{b1}} cliente, Producto producto)
{
    Console.WriteLine($"{Nombre} sugiere a {cliente.Nombre}: {producto.Sku}");
}`}
        blanks={[{ id: "b1", answer: "Cliente", placeholder: "Tipo del parámetro cliente" }]}
      />
    </section>
  );
}
