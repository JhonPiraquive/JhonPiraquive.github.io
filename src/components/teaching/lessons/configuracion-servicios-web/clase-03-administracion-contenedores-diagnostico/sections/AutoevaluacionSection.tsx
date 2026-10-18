export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Configurar acceso por SSH con claves y documentar la conexión."}</li>
        <li>{"Reconocer el entorno remoto con uname, whoami, hostname, systemctl y ss."}</li>
        <li>{"Diferenciar contenedor y máquina virtual y escribir un Dockerfile mínimo."}</li>
        <li>{"Levantar un stack con Docker Compose."}</li>
        <li>{"Diagnosticar un fallo por capas y validar la corrección."}</li>
        <li>{"Redactar un informe técnico con problema, método, solución y lecciones."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://www.openssh.com/manual.html" target="_blank" rel="noreferrer">Manual de OpenSSH</a>{": referencia oficial."}
        </li>
        <li>
          <a href="https://docs.docker.com/" target="_blank" rel="noreferrer">Documentación de Docker</a>{": guías de imágenes, contenedores y Compose."}
        </li>
        <li>
          <a href="https://www.virtualbox.org/manual/" target="_blank" rel="noreferrer">Manual de VirtualBox</a>{": máquinas virtuales de laboratorio."}
        </li>
      </ul>
    </section>
  );
}
