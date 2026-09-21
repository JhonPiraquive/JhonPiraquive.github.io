import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const MENSAJES_POLIMORFICOS_CODE = `using System;
using System.Collections.Generic;

public class Mensaje
{
    public virtual void Enviar(string texto)
        => Console.WriteLine($"Enviando mensaje genérico: {texto}");
}

public class MensajeEmail : Mensaje
{
    public override void Enviar(string texto)
        => Console.WriteLine($"Enviando EMAIL: {texto}");
}

public class MensajeSms : Mensaje
{
    public override void Enviar(string texto)
        => Console.WriteLine($"Enviando SMS: {texto}");
}`;

const LISTA_MENSAJES_CODE = `var mensajes = new List<Mensaje>
{
    new MensajeEmail(),
    new MensajeSms()
};

foreach (var m in mensajes)
    m.Enviar("Hola"); // EMAIL, luego SMS`;

export function OverrideSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Override (sobrescritura)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Override reemplaza implementación heredada con la misma firma."}</li>
        <li>{"Base marca virtual o abstract; derivada usa override."}</li>
        <li>{"Dispatch en runtime cuando la variable es del tipo base."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Override permite que una clase derivada sustituya el comportamiento de un método de la base. Con referencia Mensaje m = new MensajeEmail(), m.Enviar() ejecuta la versión de la instancia real — complemento directo del polimorfismo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de override correcto"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Método base con virtual o abstract."}</li>
        <li>{"Derivada con override (no new)."}</li>
        <li>{"Cliente itera List<Mensaje> sin if por tipo."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: mensajes polimórficos"}</h3>
      <CodeFiddle language="csharp" code={MENSAJES_POLIMORFICOS_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Lista polimórfica con override"}</h3>
      <CodeFiddle language="csharp" code={LISTA_MENSAJES_CODE} />
      <StepReveal
        title="m.Enviar() con referencia Mensaje"
        steps={[
          {
            title: "Variable declarada como Mensaje",
            content: "La referencia es del tipo base; el contrato es `Enviar(string)`.",
          },
          {
            title: "Instancia real MensajeEmail",
            content: "El objeto en memoria es `MensajeEmail`, no la base genérica.",
          },
          {
            title: "Dispatch a override",
            content: "El runtime resuelve `override Enviar` de la derivada.",
          },
          {
            title: "Salida específica del canal",
            content: "Se imprime el formato EMAIL, no el mensaje genérico.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Jerarquía Mensaje"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Mensaje <|-- MensajeEmail
  Mensaje <|-- MensajeSms
  class Mensaje {
    +Enviar(string texto)
  }
  class MensajeEmail {
    +Enviar(string texto)
  }
  class MensajeSms {
    +Enviar(string texto)
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: canal de notificaciones"}</h3>
      <p className="my-4">
        {
          "Un sistema de alertas mantenía if (tipo == \"email\") en un método de 200 líneas. Con Mensaje + override, el orquestador itera List<Mensaje> sin ramas por tipo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"override sin virtual/abstract en la base — error de compilación."}</li>
        <li>{"new pensando que polimorfiza — con referencia base se llama la versión de Animal."}</li>
        <li>{"Override que rompe contrato — derivada lanza excepción donde la base no lo hace (preview LSP)."}</li>
      </ul>
      <CodeChallenge
        title="Completa el override de Enviar"
        template={`public class MensajeSms : Mensaje
{
    public {{b1}} void Enviar(string texto)
        => Console.WriteLine($"Enviando SMS: {texto}");
}`}
        blanks={[
          {
            id: "b1",
            answer: "override",
            placeholder: "Keyword para redefinir un método virtual de la base",
          },
        ]}
      />
    </section>
  );
}
