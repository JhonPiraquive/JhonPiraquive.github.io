export function EsquemaEstrellaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Esquema en estrella"}
      </h2>
      <p className="my-4">
        {
          "En BI / data warehouse: una tabla de hechos (medidas) conectada a dimensiones planas — a menudo desnormalizadas a propósito para pocos JOINs. No reemplaza el OLTP de matrículas. Tener FK en el ER operacional no te hace “estrella”."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo se ve"}</h3>
      <div className="my-6 overflow-x-auto rounded-lg bg-[var(--color-neutral-light)] p-4 font-mono text-sm whitespace-pre-wrap">
        {
          "        Dim_Programa\n              \\\nDim_Tiempo — Hechos — Dim_Sede"
        }
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo (academia)"}</h3>
      <p className="my-4">
        {
          "Hecho: Inscripcion_Hecho(fecha_id, programa_id, sede_id, cantidad). Dimensiones: Dim_Programa (nombre, nivel), Dim_Sede (sede, ciudad, departamento en la misma fila), Dim_Tiempo (fecha, mes, año). Define el grano del hecho (¿por inscripción? ¿por día?) para no doblar conteos."
        }
      </p>
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {
          "¿La dimensión en estrella suele estar muy normalizada? (No; suele estar plana/desnormalizada.)"
        }
      </p>
    </section>
  );
}
