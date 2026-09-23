import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const PRODUCTO_PEDIDO_CODE = `using System;

public class Producto
{
    public virtual string DescripcionEtiqueta() => "Genérico";

    public decimal PrecioLista(decimal precio) => precio;
    public decimal PrecioLista(decimal precio, decimal descuentoPct)
        => precio * (1 - descuentoPct / 100m);
}

public class Libro : Producto
{
    public override string DescripcionEtiqueta() => "Libro — edición Andes";

    public decimal PrecioLista(decimal precio, string codigoPromo)
        => precio * 0.95m; // overload solo visible con referencia Libro
}

Producto p = new Libro();
p.DescripcionEtiqueta();           // override → runtime
p.PrecioLista(100m);               // overload base → compile time
p.PrecioLista(100m, 10m);          // overload base con descuento`;

const NEW_VS_OVERRIDE_CODE = `public class Producto
{
    public virtual string DescripcionEtiqueta() => "Genérico";
}

public class GadgetOculto : Producto
{
    public new string DescripcionEtiqueta() => "Gadget (oculto)";
}

Producto refBase = new GadgetOculto();
refBase.DescripcionEtiqueta(); // "Genérico" — new no polimorfiza`;

export function OverrideVsOverloadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Override, overload y new en la misma tienda"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Dos mecanismos a la vez"}</h3>
      <p className="my-4">
        {
          "Producto puede tener varios PrecioLista (overload) y Libro puede redefinir DescripcionEtiqueta (override). Son independientes: uno mejora la API en una sola clase; el otro especializa una jerarquía."
        }
      </p>
      <CompareTable
        headers={["Aspecto", "Override", "Overload"]}
        rows={[
          ["Herencia", "Requerida", "No requerida"],
          ["Firma", "Igual a la base", "Distinta"],
          ["Resolución", "Runtime (referencia base)", "Compile time"],
          ["Keyword típico", "override", "(ninguno extra)"],
        ]}
      />
      <Callout title="Dos momentos distintos">
        {
          "Override responde «¿qué implementación según el tipo real del objeto?». Overload responde «¿qué versión del método según los argumentos que paso?»."
        }
      </Callout>
      <CodeFiddle language="csharp" code={PRODUCTO_PEDIDO_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Por qué new engaña"}</h3>
      <p className="my-4">
        {
          "Si usas new en lugar de override, el método «nuevo» solo se ve cuando la variable es de tipo GadgetOculto. Con Producto en la vitrina polimórfica, el cliente sigue leyendo la etiqueta genérica."
        }
      </p>
      <CodeFiddle language="csharp" code={NEW_VS_OVERRIDE_CODE} />
      <MermaidDiagram
        chart={`classDiagram
  Producto <|-- Libro
  class Producto {
    +DescripcionEtiqueta()*
    +PrecioLista(decimal)
    +PrecioLista(decimal, decimal)
  }
  class Libro {
    +DescripcionEtiqueta()
    +PrecioLista(decimal, string)
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo usar cuál"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Override: comportamiento distinto por tipo de producto en una familia."}</li>
        <li>{"Overload: varias formas de llamar Total o PrecioLista sin duplicar nombres."}</li>
        <li>{"new: casi nunca en diseño docente; preferir override con virtual."}</li>
      </ul>
      <PracticeExercise
        prompt="Con Producto p = new Libro() y Libro l = new Libro(), ¿DescripcionEtiqueta() imprime lo mismo en ambos? Explica override y tipo de referencia."
        hints={[
          "Libro override DescripcionEtiqueta",
          "p es referencia Producto pero objeto Libro",
          "Misma implementación override en ambos casos",
        ]}
        expectedKeywords={["override", "runtime", "Libro", "referencia"]}
        successMessage="Correcto. Ambas llamadas usan Libro.DescripcionEtiqueta por dispatch polimórfico."
      />
    </section>
  );
}
