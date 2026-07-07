import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function InterfacesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Interfaces"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Interfaz = contrato de capacidad (“qué puede hacer”)."}</li>
        <li>{"Una clase puede implementar varias interfaces."}</li>
        <li>{"Inyección por constructor desacopla implementación de uso."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una interfaz (interface) declara miembros sin implementación (en el contrato). Define una capacidad intercambiable: ILogger, IPago, INotificador. El cliente recibe la abstracción en el constructor."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de interfaz"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Solo necesitas un contrato sin estado compartido en la base."}</li>
        <li>{"Un tipo puede cumplir múltiples roles (Contrato : Documento, IFirmable)."}</li>
        <li>{"Varias implementaciones intercambiables (consola, archivo, silencioso)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: ILogger y Servicio"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;

public interface ILogger
{
    void Info(string mensaje);
}

public class LoggerConsola : ILogger
{
    public void Info(string mensaje) => Console.WriteLine($"INFO: {mensaje}");
}

public class LoggerSilencioso : ILogger
{
    public void Info(string mensaje) { /* sin salida — útil en tests */ }
}

public class LoggerArchivo : ILogger
{
    public void Info(string mensaje) => Console.WriteLine($"[archivo] {mensaje}");
}

public class Servicio
{
    private readonly ILogger _logger;

    public Servicio(ILogger logger) => _logger = logger;

    public void Ejecutar() => _logger.Info("Ejecutando...");
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Intercambiar logger sin editar Servicio"}</h3>
      <CodeFiddle
        language="csharp"
        code={`var servicio1 = new Servicio(new LoggerConsola());
var servicio2 = new Servicio(new LoggerSilencioso());
servicio1.Ejecutar(); // INFO: Ejecutando...
servicio2.Ejecutar(); // sin salida`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Segregación (preview SOLID)"}</h3>
      <p className="my-4">
        {
          "Interfaces gigantes (IManagerDeTodo) obligan a implementar métodos no usados. Preferir contratos pequeños y focalizados."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Interfaces como marcadores sin métodos útiles."}</li>
        <li>{"Cliente que instancia concretos dentro del dominio en lugar de recibir el contrato."}</li>
      </ul>
      <CodeChallenge
        title="Implementa la interfaz"
        template={`public class LoggerConsola : {{b1}}\n{\n    public void Info(string mensaje) => Console.WriteLine($"INFO: {mensaje}");\n}`}
        blanks={[
          { id: "b1", answer: "ILogger", placeholder: "Contrato que declara Info(string)" },
        ]}
      />
    </section>
  );
}
