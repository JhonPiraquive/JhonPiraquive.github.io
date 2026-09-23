import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function InterfacesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Interfaces: capacidades que se intercambian"}
      </h2>
      <p className="my-4">
        {
          "Una interfaz (interface) en C# es un contrato: declara qué operaciones existen (por ejemplo Guardar) sin decir cómo se implementan. Varias clases pueden cumplir el mismo contrato; el cliente depende del contrato, no del detalle."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Pedido no debería saber si guardas en SQL o en memoria"}</h3>
      <p className="my-4">
        {
          "El dominio de Tienda Andes (Pedido, líneas, totales) no debería importar si hoy persistes en una lista en memoria y mañana en SQL. El servicio recibe ese contrato en el constructor (inyección de dependencias)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"C#: IRepositorioPedidos"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;
using System.Collections.Generic;

public interface IRepositorioPedidos
{
    void Guardar(string pedidoId);
}

public class RepositorioMemoria : IRepositorioPedidos
{
    private readonly List<string> _ids = new();
    public void Guardar(string pedidoId) => _ids.Add(pedidoId);
}

public class RepositorioConsola : IRepositorioPedidos
{
    public void Guardar(string pedidoId) => Console.WriteLine($"Pedido {pedidoId} registrado");
}

public class ServicioPedidos
{
    private readonly IRepositorioPedidos _repo;

    public ServicioPedidos(IRepositorioPedidos repo) => _repo = repo;

    public void Confirmar(string pedidoId)
    {
        _repo.Guardar(pedidoId);
        Console.WriteLine("Pedido confirmado en Tienda Andes");
    }
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Intercambiar implementación en Main"}</h3>
      <CodeFiddle
        language="csharp"
        code={`var enPruebas = new ServicioPedidos(new RepositorioMemoria());
var enDemo = new ServicioPedidos(new RepositorioConsola());
enPruebas.Confirmar("PED-001");
enDemo.Confirmar("PED-002");`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Varios roles: una clase, varias interfaces"}</h3>
      <p className="my-4">
        {
          "En C# una clase puede implementar varias interfaces. Un mismo tipo puede ser «guardable» y «notificable» sin heredar de dos bases imposibles. Más adelante, con SOLID, verás ISP: contratos pequeños, no un IManagerDeTodo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comprueba"}</h3>
      <p className="my-4">
        {
          "Si ServicioPedidos hace new RepositorioConsola() por dentro, ¿sigue valiendo la interfaz? No: el acoplamiento volvió. El contrato sirve cuando quien usa el servicio elige la implementación afuera (Main o pruebas)."
        }
      </p>
      <CodeChallenge
        title="Implementa el repositorio"
        template={`public class RepositorioConsola : {{b1}}\n{\n    public void Guardar(string pedidoId) => Console.WriteLine($"Pedido {pedidoId} registrado");\n}`}
        blanks={[
          { id: "b1", answer: "IRepositorioPedidos", placeholder: "Contrato que declara Guardar" },
        ]}
      />
    </section>
  );
}
