export function IsoiecVsIsoiecSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"ISO/IEC 27001 vs ISO/IEC 27002"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"ISO/IEC 27001 (el sistema)"}</h3>
      <p className="my-4">{"27001 se enfoca en el Sistema de Gestión de Seguridad de la Información (SGSI): políticas, roles, evaluación de riesgos, mejora continua y auditoría. Es “cómo gestionas la seguridad” como proceso organizacional."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"ISO/IEC 27002 (los controles)"}</h3>
      <p className="my-4">{"27002 es un catálogo de controles y buenas prácticas. Es “qué controles pueden aplicarse” para tratar riesgos: acceso, criptografía, operaciones, proveedores, incidentes, etc."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Idea clave"}</h3>
      <p className="my-4">{"27001 exige gobernar; 27002 sugiere controles. Se pueden usar controles sin certificarse, y se puede “cumplir” en papel sin reducir el riesgo si no se ejecutan bien."}</p>
    </section>
  );
}
