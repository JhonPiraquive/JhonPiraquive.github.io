import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const PEDIDO_SERVICE_ANTIEJEMPLO = `// Anti-ejemplo — mezcla crear + notificar
public class PedidoService
{
    public void CrearYNotificar(string emailCliente, decimal total)
    {
        if (total <= 0) throw new ArgumentException("Total inválido");
        Console.WriteLine("Guardando pedido...");
        Console.WriteLine($"Enviando email a {emailCliente}...");
    }
}`;

const REFACTOR_SRP_ORQUESTACION = `public class CreadorPedido
{
    public void Crear(decimal total)
    {
        if (total <= 0) throw new ArgumentException("Total inválido");
        Console.WriteLine("Guardando pedido...");
    }
}

public interface INotificador
{
    void Enviar(string destino, string mensaje);
}

public class NotificadorEmail : INotificador
{
    public void Enviar(string destino, string mensaje)
        => Console.WriteLine($"Email a {destino}: {mensaje}");
}

public class OrquestadorPedido
{
    private readonly CreadorPedido _creador;
    private readonly INotificador _notificador;

    public OrquestadorPedido(CreadorPedido creador, INotificador notificador)
    {
        _creador = creador;
        _notificador = notificador;
    }

    public void Procesar(string email, decimal total)
    {
        _creador.Crear(total);
        _notificador.Enviar(email, "Pedido registrado");
    }
}`;

export function SrpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"S — Responsabilidad única (SRP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Una clase = un motivo principal de cambio (un rol coherente)."}</li>
        <li>{"SRP ≠ un método — es separar dominio, orquestación e I/O."}</li>
        <li>{"CreadorPedido crea; INotificador notifica; OrquestadorPedido coordina."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-ejemplo: PedidoService monolítico"}</h3>
      <CodeFiddle language="csharp" code={PEDIDO_SERVICE_ANTIEJEMPLO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Refactor SRP + orquestación"}</h3>
      <CodeFiddle language="csharp" code={REFACTOR_SRP_ORQUESTACION} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo de responsabilidades"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  Orquestador[OrquestadorPedido] --> Creador[CreadorPedido]
  Orquestador --> Notif[INotificador]
  Creador --> SoloCrear[Crear pedido]
  Notif --> SoloNotif[Notificar]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: monolito de pedidos"}</h3>
      <p className="my-4">
        {
          "Un ERP tenía PedidoService con 800 líneas: validación, SQL, SMTP y PDF. Cada cambio en plantilla de email rompía tests de impuestos. Separación en CreadorPedido, INotificador, IRepositorioPedidos, OrquestadorPedido."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clase \"hace de todo\" — valida, persiste, envía email y genera PDF."}</li>
        <li>{"SRP llevado al extremo — una clase por línea sin motivos de cambio reales."}</li>
        <li>{"Orquestador que vuelve a mezclar reglas, SQL y SMTP."}</li>
      </ul>
      <CompareTable
        headers={["Aspecto", "PedidoService monolítico", "Separado SRP + DIP"]}
        rows={[
          ["Motivos de cambio", "Muchos", "Uno por clase"],
          ["Test sin DB", "Difícil", "RepositorioMemoria"],
          ["Cambio de email", "Toca validación", "Solo INotificador"],
        ]}
      />
    </section>
  );
}
