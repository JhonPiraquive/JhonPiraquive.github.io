export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Cerraste el ciclo hardware → almacenamiento → software de base: clasificaste sistemas operativos, planificaste instalación, dominaste la consola Linux y Windows, gestionaste usuarios con permisos rwx y diseñaste respaldo en cuatro niveles."
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
        {"Aplica estos conceptos en laboratorio: instala una VM, crea usuarios y ejecuta un respaldo de prueba con verificación de restauración."}
      </p>
    </section>
  );
}
