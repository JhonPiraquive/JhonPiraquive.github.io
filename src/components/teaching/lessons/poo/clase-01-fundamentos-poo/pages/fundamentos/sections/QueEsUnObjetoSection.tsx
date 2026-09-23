import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const CUENTA_CODE = `using System;

// En Tienda Andes, la caja tiene una cuenta de cobros del día
public class CajaDelDia
{
    public decimal TotalCobrado { get; private set; }

    public CajaDelDia(decimal apertura)
    {
        if (apertura < 0) throw new ArgumentException("Apertura inválida");
        TotalCobrado = apertura;
    }

    public void RegistrarVenta(decimal monto)
    {
        if (monto <= 0) throw new ArgumentException("Monto inválido");
        TotalCobrado += monto;
    }

    public void AnularVenta(decimal monto)
    {
        if (monto <= 0) throw new ArgumentException("Monto inválido");
        if (monto > TotalCobrado)
            throw new InvalidOperationException("No hay tanto cobrado para anular");
        TotalCobrado -= monto;
    }
}`;

export function QueEsUnObjetoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Un objeto: una cosa viva en memoria"}
      </h2>
      <p className="my-4">
        {
          "Cuando dices “este pedido de Ana” o “esta caja del martes”, no hablas de un molde abstracto: hablas de algo concreto, con su propio historial. En POO, eso concreto es un objeto."
        }
      </p>
      <p className="my-4">
        {
          "Un objeto tiene tres cosas útiles de recordar: identidad (es ese, no otro), estado (sus datos ahora) y comportamiento (métodos que sabe ejecutar). No es solo un paquete de propiedades: también decide qué cambios son legales."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: la caja del día"}</h3>
      <p className="my-4">
        {
          "En Tienda Andes, TotalCobrado no debería poder bajar a negativo porque alguien escribió caja.TotalCobrado = -1. El objeto CajaDelDia solo cambia el total por RegistrarVenta o AnularVenta."
        }
      </p>
      <CodeFiddle language="csharp" code={CUENTA_CODE} />
      <MermaidDiagram
        chart={`classDiagram
  class CajaDelDia {
    +decimal TotalCobrado
    +CajaDelDia(decimal apertura)
    +RegistrarVenta(decimal monto)
    +AnularVenta(decimal monto)
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estado vs comportamiento"}</h3>
      <CompareTable
        headers={["Concepto", "En C#", "En CajaDelDia"]}
        rows={[
          ["Estado", "Propiedades / campos", "TotalCobrado"],
          ["Comportamiento", "Métodos", "RegistrarVenta(), AnularVenta()"],
        ]}
      />
      <p className="my-4">
        {
          "Cuidado con el “objeto anémico”: una clase que solo tiene get/set y toda la lógica vive afuera. Ahí perdiste la ventaja de modelar con objetos."
        }
      </p>
      <PracticeExercise
        prompt="Agrega mentalmente DepositarFondo(decimal monto) a CajaDelDia (solo montos > 0). ¿Por qué no bastaría un set público de TotalCobrado?"
        hints={["¿Quién valida?", "¿Qué pasa si alguien pone un negativo?"]}
        expectedKeywords={["valid", "private", "método", "regla"]}
        successMessage="Exacto. El método valida; un set público deja que cualquier código rompa el total."
      />
    </section>
  );
}
