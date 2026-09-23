import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const PEDIDO_SERVICE_ANTIEJEMPLO = `// Tienda Andes — todo en un método
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
        _notificador.Enviar(email, "Pedido registrado en Tienda Andes");
    }
}`;

export function SrpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"S — Una razón para cambiar (SRP)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"PedidoService hace de todo"}</h3>
      <p className="my-4">
        {
          "SRP (Single Responsibility Principle — responsabilidad única) no dice «un método por clase». Dice: si cambia la plantilla del email, no deberías recompilar la validación del total. En Tienda Andes, mezclar crear pedido y notificar en un solo servicio concentra motivos de cambio."
        }
      </p>
      <CodeFiddle language="csharp" code={PEDIDO_SERVICE_ANTIEJEMPLO} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Separar roles y orquestar"}</h3>
      <CodeFiddle language="csharp" code={REFACTOR_SRP_ORQUESTACION} />
      <MermaidDiagram
        chart={`flowchart LR
  Orquestador[OrquestadorPedido] --> Creador[CreadorPedido]
  Orquestador --> Notif[INotificador]
  Creador --> SoloCrear[Validar y registrar]
  Notif --> SoloNotif[Avisar cliente]`}
      />
      <CompareTable
        headers={["Aspecto", "PedidoService monolítico", "Separado + contratos"]}
        rows={[
          ["Motivos de cambio", "Validación, SMTP, persistencia…", "Uno por clase"],
          ["Probar sin email", "Difícil", "INotificador mock"],
          ["Cambio de canal SMS", "Toca lógica de total", "Solo notificador"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malentendido"}</h3>
      <p className="my-4">
        {
          "SRP extremo — una clase por línea — también duele. Pregunta: «¿por qué motivo real cambiaría este archivo?» Si la respuesta es una sola idea de negocio, vas bien."
        }
      </p>
    </section>
  );
}
