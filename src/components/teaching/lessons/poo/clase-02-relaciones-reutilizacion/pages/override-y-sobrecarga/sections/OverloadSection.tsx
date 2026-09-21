import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const CALCULADORA_CODE = `using System;

public class Calculadora
{
    public int Sumar(int a, int b) => a + b;
    public int Sumar(int a, int b, int c) => a + b + c;
    public decimal Sumar(decimal a, decimal b) => a + b;
    public int Sumar(params int[] valores)
    {
        var total = 0;
        foreach (var v in valores) total += v;
        return total;
    }
}`;

export function OverloadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Overload (sobrecarga)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Varios métodos con el mismo nombre y firmas distintas en la misma clase."}</li>
        <li>{"No requiere herencia — resolución en compile time."}</li>
        <li>{"Todas las sobrecargas deben representar la misma intención operativa."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Overload permite ofrecer ergonomía de API: Sumar(1, 2) vs Sumar(1, 2, 3) vs Sumar(1.5m, 2.0m). El compilador elige la firma según los tipos estáticos de los argumentos."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: calculadora con varias firmas"}</h3>
      <CodeFiddle language="csharp" code={CALCULADORA_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Resolución por firma"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  Call1["Sumar(1,2)"] --> PickA["Sumar(int,int)"]
  Call2["Sumar(1,2,3)"] --> PickB["Sumar(int,int,int)"]
  Call3["Sumar(1.5m,2.0m)"] --> PickC["Sumar(decimal,decimal)"]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: API de búsqueda"}</h3>
      <p className="my-4">
        {
          "Un repositorio exponía BuscarPorId, BuscarPorNombre, BuscarCompleto. El equipo unificó en Buscar(int id), Buscar(string nombre) y Buscar(string nombre, decimal precioMax) — misma intención, firmas distintas."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Sobrecargas con intenciones distintas — API confusa."}</li>
        <li>{"Demasiadas sobrecargas — preferir parámetros opcionales u objeto de opciones."}</li>
        <li>{"Ambigüedad con params — Sumar(int a, int b) vs Sumar(params int[] valores)."}</li>
        <li>{"Asumir resolución en runtime — siempre es decisión del compilador."}</li>
      </ul>
      <PracticeExercise
        prompt="Predice qué firma de `Sumar` usa el compilador para `Sumar(1, 2, 3, 4)` antes de ejecutar. Verifica en consola."
        hints={[
          "Cuatro argumentos int no coincide con Sumar(int,int)",
          "params int[] acepta cualquier cantidad de int",
          "La resolución es en compile time",
        ]}
        expectedKeywords={["params", "int[]", "4"]}
        successMessage="Correcto. Sumar(params int[] valores) suma los cuatro enteros."
      />
    </section>
  );
}
