import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: vitrina y caja en consola"}
      </h2>
      <p className="my-4">
        {"Consola .NET para Tienda Andes: override en catálogo y overload en totales."}
      </p>
      <p className="my-4 font-semibold">{"Parte A — Override (etiquetas)"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Producto con virtual string DescripcionEtiqueta()."}</li>
        <li>{"Libro y Artesania con override."}</li>
        <li>{"ServicioVitrina.ImprimirEtiquetas(List<Producto>) sin if por tipo."}</li>
        <li>{"Main con al menos dos tipos en la lista."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Overload (totales)"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"CalculadoraPedido con Total(decimal precio, int cantidad)."}</li>
        <li>{"Sobrecarga con descuento porcentual."}</li>
        <li>{"Sobrecarga Total(params decimal[] preciosLinea)."}</li>
        <li>{"Main llama las tres variantes e imprime resultados."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — new vs override"}</p>
      <ol className="my-4 list-decimal pl-6" start={9}>
        <li>{"Gadget : Producto con override correcto de DescripcionEtiqueta."}</li>
        <li>{"Comentario: qué pasaría con new y List<Producto>."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Éxito: compila; foreach polimórfico; tres Total sin ambigüedad; explicas runtime vs compile time."
        }
      </p>
      <PracticeExercise
        prompt="Enumera qué partes del reto usan runtime y cuáles compile time, con un ejemplo de cada una."
        hints={[
          "DescripcionEtiqueta en foreach — runtime",
          "Total con distintos argumentos — compile time",
          "Contraste new vs override",
        ]}
        expectedKeywords={["runtime", "compile", "override", "overload"]}
        successMessage="Excelente. Integraste ambos mecanismos en Tienda Andes."
        rows={6}
      />
    </section>
  );
}
