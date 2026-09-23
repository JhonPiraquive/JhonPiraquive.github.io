import { ClayCard } from "@/components/clay/ClayCard";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const PROMOCION_CODE = `using System;

// Tienda Andes: una promoción tiene ventana de fechas válida
public class Promocion
{
    public DateTime Inicio { get; }
    public DateTime Fin { get; }
    public string Nombre { get; }

    public Promocion(string nombre, DateTime inicio, DateTime fin)
    {
        if (string.IsNullOrWhiteSpace(nombre))
            throw new ArgumentException("Nombre requerido");
        if (fin <= inicio)
            throw new ArgumentException(
                $"Fin ({fin:yyyy-MM-dd}) debe ser posterior a Inicio ({inicio:yyyy-MM-dd})");
        Nombre = nombre;
        Inicio = inicio;
        Fin = fin;
    }

    public bool EstaActiva(DateTime hoy) => hoy >= Inicio && hoy <= Fin;
}`;

export function InvariantesReglasQueElSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Invariantes: reglas que el objeto no deja romper"}
      </h2>
      <p className="my-4">
        {
          "Una invariante es una condición que debe ser siempre verdadera mientras el objeto exista. Ejemplos en Tienda Andes: Cantidad >= 0; en una promoción, Fin > Inicio; un Pedido no salta de Creado a Entregado sin pasar por Pagado."
        }
      </p>
      <p className="my-4">
        {
          "La regla se aplica donde el estado cambia: constructor y métodos mutadores. Si solo está en un comentario o en la UI, otro servicio la saltará."
        }
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Nacer inválido"}</strong>
        <p>
          {
            "new InventarioProducto(\"CAF-001\", -100) no debería existir. El constructor es el primer candado."
          }
        </p>
      </ClayCard>
      <CodeFiddle language="csharp" title="Promoción con fechas coherentes" code={PROMOCION_CODE} />
      <MermaidDiagram
        chart={`flowchart TD
  Input[Datos de entrada] --> Validate{Invariantes OK?}
  Validate -->|No| Error[Excepcion clara]
  Validate -->|Si| Create[Objeto valido]`}
      />
      <CodeChallenge
        title="Completa la validación del constructor"
        template={`public Promocion(string nombre, DateTime inicio, DateTime fin)
{
    if (string.IsNullOrWhiteSpace(nombre))
        throw new ArgumentException("Nombre requerido");
    {{blank1}}
        throw new ArgumentException(
            $"Fin ({fin:yyyy-MM-dd}) debe ser posterior a Inicio ({inicio:yyyy-MM-dd})");
    Nombre = nombre;
    Inicio = inicio;
    Fin = fin;
}`}
        blanks={[
          { id: "blank1", answer: "if (fin <= inicio)", placeholder: "condición de invariante" },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"DTO vs objeto de dominio"}</h3>
      <p className="my-4">
        {
          "DTO: solo mueve datos entre capas — encapsulamiento estricto suele ser excesivo. Objeto de dominio (pedido, inventario, promoción): las reglas viven en el tipo."
        }
      </p>
      <PracticeExercise
        prompt="¿Cuándo basta un DTO y cuándo necesitas un objeto de dominio encapsulado? Usa un ejemplo de Tienda Andes."
        hints={["DTO = transporte", "Dominio = reglas"]}
        expectedKeywords={["dto", "dominio", "reglas", "transporte"]}
        successMessage="DTO para enviar un JSON al front; dominio para InventarioProducto o Pedido que protegen stock y estados."
      />
      <PracticeExercise
        prompt="Compara public int Cantidad { get; set; } vs { get; private set; }. ¿Qué invariante protege el segundo?"
        hints={["¿Quién asigna desde fuera?", "Cantidad >= 0"]}
        expectedKeywords={["private set", "negativ", "invariante"]}
        successMessage="private set obliga a mutar por métodos que validan Cantidad >= 0."
      />
    </section>
  );
}
