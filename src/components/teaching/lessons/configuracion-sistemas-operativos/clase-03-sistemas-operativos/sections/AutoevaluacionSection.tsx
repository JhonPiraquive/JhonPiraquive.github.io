export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar qué hace el sistema operativo y el planificador de procesos."}</li>
        <li>{"Comparar sistemas operativos de escritorio, móvil, servidor y tiempo real."}</li>
        <li>{"Planificar una instalación con requisitos, UEFI, GPT y particiones."}</li>
        <li>{"Moverse en la consola de Linux y de Windows con rutas absolutas y relativas."}</li>
        <li>{"Crear usuarios y asignar permisos rwx con chmod."}</li>
        <li>{"Diseñar un respaldo con la regla 3-2-1."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://ubuntu.com/server/docs" target="_blank" rel="noreferrer">Ubuntu Server: documentación</a>{": instalación y administración paso a paso."}
        </li>
        <li>
          <a href="https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/windows-commands" target="_blank" rel="noreferrer">Microsoft: comandos de Windows</a>{": referencia oficial de la consola."}
        </li>
        <li>
          <a href="https://www.gnu.org/software/coreutils/manual/" target="_blank" rel="noreferrer">GNU Coreutils</a>{": manual de ls, cp, mv, chmod y demás comandos básicos."}
        </li>
      </ul>
    </section>
  );
}
