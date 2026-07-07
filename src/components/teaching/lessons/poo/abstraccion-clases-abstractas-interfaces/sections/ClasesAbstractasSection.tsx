import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ClasesAbstractasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Clases abstractas"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clase abstracta = no se instancia con new; puede tener estado y código común."}</li>
        <li>{"Métodos abstract obligan implementación en derivadas."}</li>
        <li>{"Template Method: flujo común en la base, paso variable en derivada."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una clase abstracta (abstract class) combina contrato parcial con implementación compartida. Puede tener campos, constructores, métodos con cuerpo y métodos abstract sin cuerpo que las derivadas deben implementar."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de clase abstracta"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Varias derivadas comparten validación, logging o flujo idéntico."}</li>
        <li>{"Necesitas estado común (Destino en notificaciones)."}</li>
        <li>{"Un método público no sobrescribible orquesta pasos (Enviar → EnviarCore)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: Notificacion (Template Method)"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;

public abstract class Notificacion
{
    public string Destino { get; }

    protected Notificacion(string destino)
    {
        if (string.IsNullOrWhiteSpace(destino)) throw new ArgumentException("Destino requerido");
        Destino = destino;
    }

    public void Enviar(string mensaje)
    {
        if (string.IsNullOrWhiteSpace(mensaje)) throw new ArgumentException("Mensaje requerido");
        Console.WriteLine($"Preparando notificación para {Destino}...");
        EnviarCore(mensaje);
        Console.WriteLine("Notificación enviada.");
    }

    protected abstract void EnviarCore(string mensaje);
}

public class NotificacionEmail : Notificacion
{
    public NotificacionEmail(string destino) : base(destino) { }

    protected override void EnviarCore(string mensaje) =>
        Console.WriteLine($"Email a {Destino}: {mensaje}");
}

public class NotificacionSms : Notificacion
{
    public NotificacionSms(string destino) : base(destino) { }

    protected override void EnviarCore(string mensaje) =>
        Console.WriteLine($"SMS a {Destino}: {mensaje}");
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"abstract vs virtual"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"abstract: obliga implementación en derivada; sin cuerpo en la base."}</li>
        <li>{"virtual: ofrece implementación por defecto sobrescribible."}</li>
        <li>{"new Notificacion(\"x\") no compila — las abstractas no se instancian directamente."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: notificaciones"}</h3>
      <p className="my-4">
        {
          "Con solo interfaz INotificacion, cada canal duplicaba validación de mensaje y formato de log. Con clase abstracta, Enviar centraliza reglas; canales solo implementan EnviarCore."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama: jerarquía Notificacion"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Notificacion <|-- NotificacionEmail
  Notificacion <|-- NotificacionSms
  class Notificacion {
    <<abstract>>
    +string Destino
    +Enviar(string mensaje)
    #EnviarCore(string mensaje)*
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clase abstracta vacía solo para prohibir new cuando una interfaz bastaría."}</li>
        <li>{"Cada derivada repite validación que debería vivir en la base."}</li>
      </ul>
      <PracticeExercise
        prompt="¿Por qué `Enviar` no es abstracto pero `EnviarCore` sí? ¿Qué patrón de diseño preview introduce esto?"
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
