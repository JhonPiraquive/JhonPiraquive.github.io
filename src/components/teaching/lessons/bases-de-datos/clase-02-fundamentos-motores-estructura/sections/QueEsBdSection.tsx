export function QueEsBdSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"BD — Base de Datos"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una BD (Base de Datos) es un conjunto organizado de datos relacionados, persistentes, pensados para consultarlos, actualizarlos y compartirlos con reglas de consistencia. No es “cualquier archivo con información”."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué"}</h3>
      <p className="my-4">
        {
          "Varias personas o aplicaciones trabajan sobre la misma fuente de verdad. Se define un esquema o modelo; el software gestor valida y persiste; otras apps leen datos ya consistentes."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Se define un esquema o modelo (tablas o colecciones, campos, tipos, claves)."}</li>
        <li>{"La aplicación o el usuario envía operaciones al SGBD (alta, consulta, actualización, borrado)."}</li>
        <li>{"El SGBD valida reglas, escribe en disco y gestiona concurrencia."}</li>
        <li>{"Otras apps leen los mismos datos ya consistentes, sin copiar archivos a mano."}</li>
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "La academia “Rutas Digitales” (Cali) deja de tener nombres de programas distintos por sede en Word/Excel y pasa a una BD academia con tabla Programas. Cualquier sede consulta el mismo nombre oficial — p. ej. 'Técnica Profesional en Configuración de Servicios Web' — sin versiones divergentes por WhatsApp."
        }
      </p>
    </section>
  );
}
