export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "La clase cierra el ciclo hardware → almacenamiento → software de base: clasificación de sistemas operativos, planificación de la instalación, consola de Linux y Windows, usuarios con permisos rwx y respaldo en cuatro niveles."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ideas clave"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"El SO abstrae hardware y el planificador reparte CPU entre procesos."}</li>
        <li>{"Escritorio, móvil, servidor y RTOS responden a restricciones distintas."}</li>
        <li>{"Instalación segura: requisitos, UEFI/GPT, drivers y actualizaciones."}</li>
        <li>{"Consola: ls/cd/mkdir en Linux; dir/cd/mkdir en Windows; rutas absolutas vs relativas."}</li>
        <li>{"Usuarios + chmod rwx; evitar root y chmod 777 en producción."}</li>
        <li>{"Respaldo 3-2-1: espejo, NAS, nube y geo-redundancia según criticidad."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"Estos conceptos se llevan al laboratorio con una máquina virtual, la creación de usuarios y un respaldo de prueba con verificación de restauración."}
      </p>
    </section>
  );
}
