import { Callout } from "@/components/teaching/Callout";

export function IntroMapaLeccionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Limpiar el diseño"}</h2>
      <p className="my-4">
        {
          "Con el ER ya dibujado, el siguiente paso es limpiar el esquema: detectar redundancia, listar dependencias funcionales y aplicar 1FN → 2FN → 3FN. Después se decide, con criterio, cuándo no normalizar y cómo se ve eso en analítica (estrella y copo de nieve)."
        }
      </p>
      <p className="my-4">
        {
          "El hilo conductor es la academia «Rutas Digitales» (Cali) y la startup «Andes Tech»: matrículas, facturas y tableros."
        }
      </p>
      <Callout title="Normalizar no es odio al JOIN" variant="callout-warning">
        {
          "Normalizar pone cada hecho en su dueño lógico. Desnormalizar no es odio al diseño: es una decisión posterior, documentada, con dueño de la verdad."
        }
      </Callout>
    </section>
  );
}
