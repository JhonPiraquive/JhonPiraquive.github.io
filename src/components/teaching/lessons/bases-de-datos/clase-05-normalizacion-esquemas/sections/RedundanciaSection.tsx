export function RedundanciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Redundancia"}</h2>
      <p className="my-4">
        {
          "Redundancia: la misma verdad de negocio copiada en varios sitios y puede divergir. No es índice ni backup — es duplicar hechos que deberían vivir en un solo lugar lógico."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anomalías (qué se rompe)"}</h3>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Anomalía"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Idea"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Ejemplo Rutas Digitales"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">
                <strong>{"Inserción"}</strong>
              </td>
              <td className="px-3 py-2">{"No puedes insertar un hecho sin inventar otro"}</td>
              <td className="px-3 py-2">
                {"Quieres un programa nuevo, pero la sábana exige un estudiante inventado"}
              </td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">
                <strong>{"Actualización"}</strong>
              </td>
              <td className="px-3 py-2">{"Cambias un dato en N sitios y olvidas uno"}</td>
              <td className="px-3 py-2">
                {"Corrijen el teléfono de sede; quedan filas con el número viejo"}
              </td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">
                <strong>{"Borrado"}</strong>
              </td>
              <td className="px-3 py-2">{"Al borrar una fila pierdes un hecho que aún necesitabas"}</td>
              <td className="px-3 py-2">
                {"Borras la última inscripción y “desaparece” el programa"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Detección (checklist)"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"¿Este valor se repite y describe otra entidad?"}</li>
        <li>{"Si lo cambio, ¿toco varios sitios?"}</li>
        <li>{"Si sí → candidato a extraer (normalizar)."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso — “Rutas Digitales” (teléfono de Cali)'}
      </h3>
      <p className="my-4">{"Tabla sucia Matriculas_Sucias:"}</p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"id"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Nombre_Estudiante"}
              </th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"documento"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Nombre_Programa"}
              </th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"sede_programa"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"telefono_sede"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"1"}</td>
              <td className="px-3 py-2">{"Ana Ruiz"}</td>
              <td className="px-3 py-2">{"110011"}</td>
              <td className="px-3 py-2">{"Técnica… Servicios Web"}</td>
              <td className="px-3 py-2">{"Cali"}</td>
              <td className="px-3 py-2">{"602-111"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"2"}</td>
              <td className="px-3 py-2">{"Luis Pérez"}</td>
              <td className="px-3 py-2">{"110022"}</td>
              <td className="px-3 py-2">{"Técnica… Servicios Web"}</td>
              <td className="px-3 py-2">{"Cali"}</td>
              <td className="px-3 py-2">{"602-111"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"3"}</td>
              <td className="px-3 py-2">{"Ana Ruiz"}</td>
              <td className="px-3 py-2">{"110011"}</td>
              <td className="px-3 py-2">{"Técnica en Sistemas"}</td>
              <td className="px-3 py-2">{"Cali"}</td>
              <td className="px-3 py-2">{"602-111"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4">
        {
          "Al corregir el teléfono de Cali, la mitad de las filas quedan viejas: anomalía de actualización. Solución de procedimiento: Sedes dueña del teléfono; Programas e Inscripciones apuntan con FK."
        }
      </p>
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {
          "Si cambias el teléfono de la sede en la tabla sucia, ¿cuántas filas tocas? ¿Qué anomalía es?"
        }
      </p>
    </section>
  );
}
