import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CuandoNoUsarHerenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Cuándo NO usar herencia? (composición como alternativa)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"“Necesito reutilizar” ≠ “necesito heredar”."}</li>
        <li>{"Composición = un objeto usa otro como parte (“tiene un”)."}</li>
        <li>{"Interfaz = contrato que varias clases implementan sin jerarquía rígida."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es composición"}</h3>
      <p className="my-4">
        {
          "Un objeto incorpora otro en su implementación en lugar de heredar. Ejemplo: un celular tiene cámara, GPS y batería; no es una cámara."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Menos acoplamiento que jerarquías profundas."}</li>
        <li>{"Combinar comportamientos de forma flexible (estrategias intercambiables)."}</li>
        <li>{"Extender sin modificar la clase cliente (principio abierto/cerrado, preview SOLID)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: alertas de monitoreo"}</h3>
      <p className="my-4">
        {
          "Un servicio propone AlarmaEmail : AlarmaBase, AlarmaSms : AlarmaBase. Añadir WhatsApp implica nueva subclase y duplicar Disparar(). Refactor a Alarma con INotificador inyectado: nuevos canales = nueva implementación; Alarma no cambia."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: Alarma + INotificador"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;

public interface INotificador
{
    void Enviar(string mensaje);
}

public class NotificadorEmail : INotificador
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"Email: {mensaje}");
}

public class NotificadorSms : INotificador
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"SMS: {mensaje}");
}

public class Alarma
{
    private readonly INotificador _notificador;

    public Alarma(INotificador notificador)
    {
        _notificador = notificador
            ?? throw new ArgumentNullException(nameof(notificador));
    }

    public void Disparar() => _notificador.Enviar("Alerta!");
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Extender sin modificar Alarma"}</h3>
      <CodeFiddle
        language="csharp"
        code={`public class NotificadorWhatsApp : INotificador
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"WhatsApp: {mensaje}");
}

// Uso:
var alarma = new Alarma(new NotificadorWhatsApp());
alarma.Disparar();`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Herencia vs composición"}</h3>
      <CompareTable
        headers={["Criterio", "Herencia (: Base)", "Composición (tiene un)"]}
        rows={[
          ["Relación", '"Es un"', '"Tiene un" / "Usa un"'],
          ["Reutilización", "Comportamiento de la base", "Delegar en objeto interno"],
          ["Extensión", "Nuevas subclases", "Nuevas implementaciones de interfaz"],
          ["Acoplamiento", "Alto con jerarquía profunda", "Menor si dependes de abstracción"],
          ["Riesgo típico", "Romper contrato de la base", "Más clases pequeñas que coordinar"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama: Alarma y notificadores"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class Alarma {
    -INotificador _notificador
    +Alarma(INotificador notificador)
    +Disparar()
  }
  class INotificador {
    <<interface>>
    +Enviar(string mensaje)
  }
  Alarma --> INotificador : usa
  INotificador <|.. NotificadorEmail
  INotificador <|.. NotificadorSms
  INotificador <|.. NotificadorWhatsApp`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Decisión de diseño"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  A[¿Necesito modelar tipos?] --> B{¿Relación es un clara y estable?}
  B -->|Sí| C[Herencia + virtual/override]
  B -->|No| D{¿Solo reutilizar comportamiento?}
  D -->|Sí| E[Composición o interfaz]
  D -->|No| F[Revisar modelo del dominio]
  C --> G[Verificar sustituibilidad]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes a evitar"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Heredar solo para copiar código (class ReportePdf : UtilidadesString)."}</li>
        <li>{"Confundir “tiene un” con “es un” (class Celular : Camara)."}</li>
        <li>{"Jerarquías profundas: Animal → Mamifero → Domestico → PerroGolden → …"}</li>
        <li>{"Cuadrado : Rectangulo con Ancho y Alto independientes — antipatrón clásico."}</li>
      </ul>
      <PracticeExercise
        prompt='Explica con tus palabras la diferencia entre “es un” y “tiene un”. Da un ejemplo de dominio (biblioteca, hospital o e-commerce) para cada uno.'
        hints={[
          "Herencia modela especialización: Carro es un Vehiculo",
          "Composición modela partes: un Pedido tiene Items",
          "Piensa si la relación es sustituible en todos los contextos",
        ]}
        expectedKeywords={["es un", "tiene un", "herencia", "composición"]}
        successMessage='Correcto. “Es un” → herencia cuando es estable; “tiene un” → composición o agregación.'
      />
    </section>
  );
}
