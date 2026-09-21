import { Callout } from "@/components/teaching/Callout";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>{"Dibuja o actualiza el diagrama UML de Tienda Andes con lo visto en esta clase."}</li>
        <li>{"Escribe en C# al menos dos clases con comportamiento (no solo propiedades)."}</li>
        <li>{"Explica en 3 frases qué regla de negocio protege cada clase (invariante)."}</li>
      </ol>
      <Callout title="Criterio de éxito" variant="callout-info">
        <p className="mb-0">
          {
            "Un compañero debe poder leer tu diagrama y decir qué objeto crea a cuál, sin mirar el código."
          }
        </p>
      </Callout>
    </section>
  );
}
