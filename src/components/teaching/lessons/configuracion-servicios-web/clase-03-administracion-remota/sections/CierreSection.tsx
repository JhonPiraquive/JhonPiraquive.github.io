export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "En esta lección vinculaste la nube (NIST, IaaS/PaaS/SaaS) con la operación remota segura: modelo cliente-servidor, SSH con claves, SFTP en lugar de FTP plano y elección de herramienta según perfil (diseñador en cPanel vs dev en terminal). La siguiente lección (clase-04-virtualizacion-diagnostico) profundiza en contenedores, máquinas virtuales y diagnóstico de servicios."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ideas clave"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Principios NIST definen qué es cloud y cómo operas recursos de forma remota."}</li>
        <li>{"IaaS / PaaS / SaaS: elige según control del SO, velocidad de deploy y carga operativa."}</li>
        <li>{"En administración remota el cliente inicia la conexión; el servidor escucha en el puerto."}</li>
        <li>{"SFTP sobre SSH (puerto 22), no FTP plano, en cualquier entorno real."}</li>
        <li>{"SSH con claves Ed25519, hardening básico y usuario no-root con sudo."}</li>
        <li>{"Herramienta según perfil: cPanel para diseñadores, SSH/SFTP para desarrolladores en VPS."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Referencias"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"NIST cloud definition: "}
          <a
            href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf"
            className="text-[var(--color-secondary)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"SP 800-145"}
          </a>
        </li>
        <li>
          {"OpenSSH manual: "}
          <a
            href="https://www.openssh.com/manual.html"
            className="text-[var(--color-secondary)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"openssh.com/manual.html"}
          </a>
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"Siguiente lección: virtualización, contenedores y diagnóstico de servicios (clase-04-virtualizacion-diagnostico)."}
      </p>
    </section>
  );
}
