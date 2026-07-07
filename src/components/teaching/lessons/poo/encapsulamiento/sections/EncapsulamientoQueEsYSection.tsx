import { ClayCard } from "@/components/clay/ClayCard";
import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const CUENTA_BANCARIA_CODE = `using System;

public class CuentaBancaria
{
    public decimal Saldo { get; private set; }

    public CuentaBancaria(decimal saldoInicial)
    {
        if (saldoInicial < 0)
            throw new ArgumentException("Saldo inicial inválido");
        Saldo = saldoInicial;
    }

    public void Depositar(decimal monto)
    {
        if (monto <= 0)
            throw new ArgumentException("Monto inválido");
        Saldo += monto;
    }

    public void Retirar(decimal monto)
    {
        if (monto <= 0)
            throw new ArgumentException("Monto inválido");
        if (monto > Saldo)
            throw new InvalidOperationException("Fondos insuficientes");
        Saldo -= monto;
    }
}

public class Program
{
    public static void Main()
    {
        var cuenta = new CuentaBancaria(100);
        cuenta.Retirar(30);
        Console.WriteLine(cuenta.Saldo); // 70
        // cuenta.Saldo = -100; // Error de compilación: set es private
    }
}`;

const CUENTA_INSEGURA_CODE = `public class CuentaInsegura
{
    public decimal Saldo { get; set; } // cualquiera puede asignar
}

// Uso problemático:
var c = new CuentaInsegura { Saldo = -999 };`;

const EJEMPLO_ACCESO_CODE = `public class EjemploAcceso
{
    private string _datoInterno;           // solo esta clase
    protected int contadorHijos;           // esta clase + derivadas
    internal Guid idSesion;                // mismo proyecto
    public string Nombre { get; private set; } // lectura pública, escritura interna
}`;

const PRODUCTO_CANTIDAD_CODE = `public class Producto
{
    private int _cantidad;

    public int Cantidad
    {
        get => _cantidad;
        private set
        {
            if (value < 0)
                throw new ArgumentOutOfRangeException(nameof(value), "Cantidad no puede ser negativa");
            _cantidad = value;
        }
    }

    public void AjustarStock(int delta)
    {
        Cantidad += delta; // usa el setter privado vía método público
    }
}`;

export function EncapsulamientoQueEsYSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Encapsulamiento: qué es y para qué sirve"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Ocultar detalles internos."}</li>
        <li>{"Exponer una forma segura de usar el objeto."}</li>
        <li>{"Proteger invariantes (reglas que siempre deben cumplirse)."}</li>
        <li>{"Reducir acoplamiento: cambias por dentro sin romper a los demás."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Encapsulamiento es el principio de controlar el acceso al estado interno de un objeto. Ocultas detalles de implementación y expones solo lo necesario mediante métodos y propiedades públicas. La idea central: nadie debería poder poner al objeto en un estado inválido desde afuera."
        }
      </p>
      <p className="my-4">
        {
          "Estado interno vs interfaz pública: el estado vive en campos/propiedades (idealmente no mutables desde fuera); la interfaz pública son operaciones con nombres del dominio (Depositar, Retirar, CancelarReserva) que validan antes de cambiar el estado."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Evitar estados imposibles (ej. saldo negativo sin permitir sobregiro)."}</li>
        <li>{"Centralizar reglas (validación en un solo lugar)."}</li>
        <li>{"Permitir cambios internos sin cambiar el “contrato” público."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Modificadores de acceso en C#"}</h3>
      <CompareTable
        headers={["Modificador", "Visibilidad típica"]}
        rows={[
          ["public", "Cualquier código con referencia al tipo"],
          ["private", "Solo la misma clase (default implícito en miembros de clase)"],
          ["protected", "La clase y sus derivadas (preview para lección herencia)"],
          ["internal", "Dentro del mismo ensamblado (proyecto)"],
        ]}
      />
      <p className="my-4">
        {
          "Patrón frecuente: public decimal Saldo { get; private set; } — cualquiera puede leer, solo la clase puede modificar (vía constructor o métodos internos)."
        }
      </p>
      <CompareTable
        headers={["Aspecto", "Saldo { get; set; }", "Saldo { get; private set; } + Retirar/Depositar"]}
        rows={[
          ["Quién puede cambiar saldo", "Cualquier código", "Solo la clase"],
          ["Validación", "Dispersa o inexistente", "Centralizada"],
          ["Estado inválido posible", "Sí (Saldo = -999)", "No (excepción al retirar)"],
          ["Cambio interno de implementación", "Rompe si alguien asignó directo", "Clientes usan métodos estables"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen/mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Aplica cuando: hay reglas sobre cómo cambia el estado (casi siempre en dominio)."}</li>
        <li>{"No aplica cuando: el objeto es un DTO (solo transporte de datos) y no hay reglas."}</li>
        <li>{"Buen uso: private set, métodos con nombres del dominio, validación cerca del dato, excepciones claras."}</li>
        <li>{"Mal uso: setters públicos para todo, validación repetida en cada capa, campos public mutables."}</li>
      </ul>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente — setter público en todo"}</strong>
        <p>
          {
            "public decimal Saldo { get; set; } permite cuenta.Saldo = -999 desde cualquier parte. La regla de saldo no negativo debe vivir en el objeto, no solo en la UI o el controlador."
          }
        </p>
      </ClayCard>
      <p className="my-4">
        {
          "Un cajero automático: tú no cambias el saldo “a mano”. Solo puedes pedir operaciones permitidas (retirar, consultar), y el sistema valida."
        }
      </p>
      <Callout title="Caso real — incidente bancario">
        {
          "Un equipo expone public decimal Saldo { get; set; } en CuentaBancaria para “facilitar tests”. Un módulo de migración ejecuta cuenta.Saldo = cuenta.Saldo - ajuste sin validar fondos. En producción aparecen cuentas con saldo -847.50. Decisión: cambiar a { get; private set; }, forzar Depositar/Retirar con validación."
        }
      </Callout>
      <CodeFiddle language="csharp" title="Encapsulamiento básico" code={CUENTA_BANCARIA_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-ejemplo — setter público rompe invariante"}</h3>
      <CodeFiddle language="csharp" title="Anti-ejemplo — setter público" code={CUENTA_INSEGURA_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Modificadores de acceso — visibilidad típica"}</h3>
      <CodeFiddle language="csharp" title="Modificadores de acceso" code={EJEMPLO_ACCESO_CODE} />
      <MermaidDiagram
        chart={`classDiagram
  class CuentaBancaria {
    +decimal Saldo
    +CuentaBancaria(decimal saldoInicial)
    +Depositar(decimal monto)
    +Retirar(decimal monto)
  }`}
      />
      <StepReveal
        title="Ciclo de una operación encapsulada (Retirar)"
        steps={[
          {
            title: "Cliente llama cuenta.Retirar(30)",
            content:
              "El código externo no toca Saldo directamente; usa el método público del dominio.",
          },
          {
            title: "Validar monto > 0",
            content: "Si monto <= 0, lanza ArgumentException con mensaje claro.",
          },
          {
            title: "Comprobar invariante monto <= Saldo",
            content:
              "Si no hay fondos, lanza InvalidOperationException — el objeto rechaza el estado inválido.",
          },
          {
            title: "Actualizar Saldo internamente",
            content: "Solo la clase asigna a Saldo gracias a private set.",
          },
          {
            title: "Cliente lee el nuevo saldo vía get",
            content: "Lectura pública permitida; escritura externa bloqueada en compilación.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart LR
  subgraph cliente [Codigo cliente]
    C[Llama Depositar / Retirar]
    R[Lee Saldo get]
  end
  subgraph objeto [CuentaBancaria]
    M[Metodos publicos con validacion]
    S[Saldo private set]
  end
  C --> M
  M --> S
  R -.->|solo lectura| S
  X[Asignacion directa Saldo = x] -.->|bloqueado| S`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Propiedad con campo privado y validación"}</h3>
      <p className="my-4">
        {
          "Cuando set requiere validación o transformación, usa un campo privado (_cantidad) y controla el acceso en la propiedad:"
        }
      </p>
      <CodeFiddle language="csharp" title="Propiedad con campo privado" code={PRODUCTO_CANTIDAD_CODE} />
      <PracticeExercise
        prompt="Explica con tus palabras por qué un cajero automático es analogía de encapsulamiento. ¿Qué operaciones expone y qué oculta?"
        hints={["Piensa en retirar vs cambiar saldo a mano", "¿Quién valida fondos?"]}
        expectedKeywords={["operaciones", "oculta", "valida", "saldo"]}
        successMessage="Correcto. El cajero expone operaciones del dominio (retirar, consultar) y oculta cómo se almacena y actualiza el saldo internamente."
      />
    </section>
  );
}
