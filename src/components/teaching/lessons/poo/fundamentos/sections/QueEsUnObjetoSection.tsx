import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const CUENTA_CODE = `using System;

public class CuentaBancaria
{
    public decimal Saldo { get; private set; }

    public CuentaBancaria(decimal saldoInicial)
    {
        if (saldoInicial < 0) throw new ArgumentException("Saldo inicial inválido");
        Saldo = saldoInicial;
    }

    public void Retirar(decimal monto)
    {
        if (monto <= 0) throw new ArgumentException("Monto inválido");
        if (monto > Saldo) throw new InvalidOperationException("Fondos insuficientes");
        Saldo -= monto;
    }
}`;

export function QueEsUnObjetoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es un Objeto?"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Tiene identidad (es “ese” objeto)."}</li>
        <li>{"Tiene estado (datos actuales)."}</li>
        <li>{"Tiene comportamiento (métodos)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un objeto es una instancia que vive en memoria y representa algo del dominio. No es “solo un paquete de datos”: también sabe ejecutar operaciones válidas sobre sí mismo y proteger sus invariantes."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Encapsular reglas: “solo se puede retirar si hay saldo”."}</li>
        <li>{"Evitar estados inválidos: “un pedido no puede enviarse si no está pagado”."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Bien: métodos que expresan intención (Pagar(), Retirar()), no setters públicos masivos."}</li>
        <li>{"Mal: objetos anémicos (solo propiedades) con reglas dispersas en servicios gigantes."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo de vida real"}</h3>
      <p className="my-4">
        {
          "Una tarjeta de acceso: no cualquiera decide que “ahora es válida”. Hay reglas (fecha, permisos, bloqueo). El objeto controla cuándo puede usarse."
        }
      </p>
      <CodeFiddle language="csharp" code={CUENTA_CODE} />
      <p className="my-4">{"Variante: agrega Depositar(decimal monto) rechazando montos ≤ 0."}</p>
      <MermaidDiagram
        chart={`classDiagram
  class CuentaBancaria {
    +decimal Saldo
    +CuentaBancaria(decimal saldoInicial)
    +Retirar(decimal monto)
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estado vs comportamiento"}</h3>
      <CompareTable
        headers={["Concepto", "Representación en C#", "Ejemplo en CuentaBancaria"]}
        rows={[
          ["Estado", "Propiedades / campos", "Saldo"],
          ["Comportamiento", "Métodos", "Retirar(), Depositar()"],
        ]}
      />
      <PracticeExercise
        prompt="Implementa Depositar(decimal monto) en CuentaBancaria rechazando montos ≤ 0. Prueba depósito y retiro válidos con dotnet run."
        hints={["Valida monto <= 0 con ArgumentException", "Suma al Saldo si el monto es válido"]}
        expectedKeywords={["Depositar", "Saldo", "ArgumentException"]}
        successMessage="Correcto. El objeto controla cómo cambia su saldo mediante métodos validados, no con setters públicos."
      />
    </section>
  );
}
