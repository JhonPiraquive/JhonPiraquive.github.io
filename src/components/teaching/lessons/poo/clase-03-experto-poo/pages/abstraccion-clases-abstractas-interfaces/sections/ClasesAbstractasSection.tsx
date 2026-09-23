import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ClasesAbstractasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Clases abstractas: el mismo guion, distinto canal"}
      </h2>
      <p className="my-4">
        {
          "Una clase abstracta (abstract class) es una clase base incompleta: no se instancia con new, puede guardar estado y métodos con cuerpo, y deja pasos abstractos que las hijas deben completar."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Problema: validación copiada en email y SMS"}</h3>
      <p className="my-4">
        {
          "Tienda Andes avisa al cliente cuando un pedido sale: por correo o por SMS. Con solo una interfaz INotificador, cada canal repetía «mensaje no vacío», el log de preparación y el cierre «enviado». Un cambio en la regla obligaba a tocar dos clases."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Idea: flujo común en la base, detalle en la derivada"}</h3>
      <p className="my-4">
        {
          "Es el patrón Template Method: un esqueleto fijo (Enviar) y un gancho variable (EnviarCore). Campos, constructores y validación compartida viven en la abstracta; el canal concreto solo hace el envío."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"C#: NotificacionPedido"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;

public abstract class NotificacionPedido
{
    public string Destino { get; }

    protected NotificacionPedido(string destino)
    {
        if (string.IsNullOrWhiteSpace(destino)) throw new ArgumentException("Destino requerido");
        Destino = destino;
    }

    public void Enviar(string mensaje)
    {
        if (string.IsNullOrWhiteSpace(mensaje)) throw new ArgumentException("Mensaje requerido");
        Console.WriteLine($"Preparando aviso de pedido para {Destino}...");
        EnviarCore(mensaje);
        Console.WriteLine("Aviso enviado.");
    }

    protected abstract void EnviarCore(string mensaje);
}

public class NotificacionEmail : NotificacionPedido
{
    public NotificacionEmail(string destino) : base(destino) { }

    protected override void EnviarCore(string mensaje) =>
        Console.WriteLine($"Email a {Destino}: {mensaje}");
}

public class NotificacionSms : NotificacionPedido
{
    public NotificacionSms(string destino) : base(destino) { }

    protected override void EnviarCore(string mensaje) =>
        Console.WriteLine($"SMS a {Destino}: {mensaje}");
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"abstract frente a virtual"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"abstract: la base no tiene cuerpo; la derivada debe implementar."}</li>
        <li>{"virtual: la base ofrece comportamiento por defecto que puedes sobrescribir."}</li>
        <li>{"new NotificacionPedido(\"x\") no compila — la abstracta es molde, no producto."}</li>
      </ul>
      <MermaidDiagram
        chart={`classDiagram
  NotificacionPedido <|-- NotificacionEmail
  NotificacionPedido <|-- NotificacionSms
  class NotificacionPedido {
    <<abstract>>
    +string Destino
    +Enviar(string mensaje)
    #EnviarCore(string mensaje)*
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Error típico"}</h3>
      <p className="my-4">
        {
          "Crear una clase abstracta vacía solo para prohibir new cuando una interfaz bastaría. Si no hay estado ni flujo compartido, IPago sigue siendo mejor que NotificacionPedido sin cuerpo común."
        }
      </p>
      <PracticeExercise
        prompt="¿Por qué Enviar no es abstracto pero EnviarCore sí? ¿Qué patrón introduce eso?"
        hints={[
          "Enviar tiene flujo común idéntico para todos los canales",
          "EnviarCore varía según Email o Sms",
          "Template Method: algoritmo común con paso variable",
        ]}
        expectedKeywords={["Template", "común", "abstract", "EnviarCore"]}
        successMessage="Correcto. La base define el esqueleto; la derivada solo implementa el paso que cambia."
      />
    </section>
  );
}
