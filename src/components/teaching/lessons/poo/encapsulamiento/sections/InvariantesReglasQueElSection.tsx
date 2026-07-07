import { ClayCard } from "@/components/clay/ClayCard";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const RESERVA_INVARIANTE_CODE = `using System;

public class Reserva
{
    public DateTime Inicio { get; }
    public DateTime Fin { get; }

    public Reserva(DateTime inicio, DateTime fin)
    {
        if (fin <= inicio)
            throw new ArgumentException(
                $"Fin ({fin:yyyy-MM-dd}) debe ser posterior a Inicio ({inicio:yyyy-MM-dd})");
        Inicio = inicio;
        Fin = fin;
    }
}`;

export function InvariantesReglasQueElSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Invariantes (reglas que el objeto protege)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Invariante = regla que siempre debe cumplirse."}</li>
        <li>{"Se valida en el punto donde el estado cambia."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {"Una invariante es una condición que debe ser verdadera para que el objeto esté “bien”. Ejemplos:"}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Saldo >= 0"}</li>
        <li>{"Cantidad >= 0"}</li>
        <li>{"Fin > Inicio en una reserva"}</li>
        <li>{"Estado sigue un flujo válido (no saltos ilegales)"}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Evitar bugs por estados inválidos."}</li>
        <li>{"Hacer el dominio más confiable."}</li>
        <li>{"Convertir bugs silenciosos en excepciones localizadas al punto de mutación."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen/mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Bien: invariantes se aplican en constructor y métodos mutadores."}</li>
        <li>{"Mal: invariantes solo documentadas en comentarios sin código."}</li>
        <li>{"Mal: validar solo en la UI o en el controlador — si otro servicio muta el objeto, el bug reaparece."}</li>
      </ul>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente — olvidar validar en el constructor"}</strong>
        <p>
          {
            "Un objeto puede nacer inválido: new CuentaBancaria(-100) si no validas al crear. El constructor es el primer punto de defensa de las invariantes."
          }
        </p>
      </ClayCard>
      <p className="my-4">
        {
          "Una reserva de hotel: no existe una reserva con “fecha de fin antes de la fecha de inicio”. Un partner envía fechas invertidas vía API; si el modelo tiene setters públicos, el sistema persiste datos imposibles y la facturación calcula noches negativas."
        }
      </p>
      <CodeFiddle language="csharp" title="Invariante de fechas" code={RESERVA_INVARIANTE_CODE} />
      <MermaidDiagram
        chart={`flowchart TD
  Input[Datos de entrada] --> Validate{Invariantes OK?}
  Validate -->|No| Error[Excepcion / error claro]
  Validate -->|Si| Create[Objeto valido]`}
      />
      <CodeChallenge
        title="Completa la validación en el constructor de Reserva"
        template={`public Reserva(DateTime inicio, DateTime fin)
{
    {{blank1}}
        throw new ArgumentException(
            $"Fin ({fin:yyyy-MM-dd}) debe ser posterior a Inicio ({inicio:yyyy-MM-dd})");
    Inicio = inicio;
    Fin = fin;
}`}
        blanks={[
          { id: "blank1", answer: "if (fin <= inicio)", placeholder: "condición de invariante" },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"DTO vs objeto de dominio"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"DTO (Data Transfer Object): solo transporta datos sin reglas — encapsulamiento estricto no aplica."}</li>
        <li>{"Objeto de dominio (cuenta, reserva, inventario): casi siempre requiere encapsulamiento e invariantes en el propio tipo."}</li>
      </ul>
      <PracticeExercise
        prompt="¿Cuándo un DTO no necesita encapsulamiento estricto y cuándo sí conviene un objeto de dominio encapsulado?"
        hints={["DTO = transporte sin reglas", "Dominio = reglas de negocio"]}
        expectedKeywords={["dto", "dominio", "reglas", "transporte"]}
        successMessage="Correcto. Los DTOs mueven datos entre capas; los objetos de dominio protegen invariantes y centralizan mutación."
      />
      <p className="my-4">
        {
          "Flujo correcto al crear un objeto con invariantes: recibir datos en constructor → validar datos de entrada → si falla, lanzar excepción → asignar a campos/propiedades → objeto listo para usar."
        }
      </p>
      <PracticeExercise
        prompt="Compara public decimal Saldo { get; set; } vs public decimal Saldo { get; private set; }. ¿Qué invariante protege el segundo y no el primero?"
        hints={["¿Quién puede asignar desde fuera?", "Saldo >= 0"]}
        expectedKeywords={["private set", "asignar", "negativo", "invariante"]}
        successMessage="Correcto. private set impide asignación externa; las mutaciones pasan por métodos que validan Saldo >= 0."
      />
    </section>
  );
}
