import { Callout } from "@/components/teaching/Callout";

export function DependenciaFuncionalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Dependencia funcional (DF)"}
      </h2>
      <p className="my-4">
        {
          "A → B: si conozco A, determino B de forma única (regla del esquema). A es el determinante; B el determinado. No es “A causa B en el mundo físico”."
        }
      </p>
      <p className="my-4">
        {
          "Base para ejecutar formas: 2FN combate dependencias parciales de una PK compuesta; 3FN combate dependencias transitivas (no-clave → no-clave). Sin DF, “normalizar” es jerga vacía."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo detectar (pasos)"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Lista atributos de la tabla."}</li>
        <li>{"Identifica la clave candidata (lo que identifica la fila)."}</li>
        <li>{"Para cada par: ¿fijado A, B queda fijo?"}</li>
        <li>{"Escribe las DFs (id_programa → Nombre_Programa)."}</li>
        <li>{"Marca si B depende de toda la clave o solo de parte."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo — matrículas"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"id_programa → Nombre_Programa"}</li>
        <li>{"id_programa → sede"}</li>
        <li>{"documento → Nombre_Estudiante (si documento es único)"}</li>
        <li>
          {
            "PK (estudiante_id, programa_id) con programa_id → Nombre_Programa → DF parcial → problema de 2FN."
          }
        </li>
      </ul>
      <Callout title="Tip: DF primero, jerga después" variant="callout-info">
        {
          "Antes de decir «estamos en 3FN», escribe en la pizarra al menos tres A → B del dominio. Si no puedes listarlas, aún no estás listo para las formas."
        }
      </Callout>
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong> {"Escribe una DF del dominio matrículas con la forma A → B."}
      </p>
    </section>
  );
}
