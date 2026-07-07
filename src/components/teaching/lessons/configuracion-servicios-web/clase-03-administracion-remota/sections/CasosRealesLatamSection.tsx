export function CasosRealesLatamSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Casos reales en LATAM"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Caso 1: Dev remoto en Cali administra VPS en DigitalOcean"}
      </h3>
      <p className="my-4">
        {
          "Carlos, desarrollador freelance, mantiene la API de un cliente retail en un Droplet en Nueva York. Desde su PC en Cali:"
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Genera clave Ed25519 y registra la pública en el Droplet al crearlo."}</li>
        <li>{"Conecta con ssh deploy@157.245.80.42 para ver logs de PM2."}</li>
        <li>{"Usa FileZilla en SFTP para subir builds del frontend a /var/www/app."}</li>
        <li>{"Firewall ufw: solo 22, 80, 443; fail2ban activo."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Incidente evitado:"}</strong>
        {
          " rechazó habilitar FTP en puerto 21 que el cliente «usaba antes en hosting compartido»; documentó que SFTP usa el mismo 22 ya abierto."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Caso 2: Agencia en Bogotá con cPanel en hosting compartido"}
      </h3>
      <p className="my-4">
        {"Agencia de 8 personas, sitios WordPress de clientes locales. Perfil mixto:"}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Diseñadores:"}</strong>
          {" cPanel → File Manager, instalador WordPress, correo @cliente.com.co."}
        </li>
        <li>
          <strong>{"Dev senior:"}</strong>
          {" SFTP con clave dedicada por sitio, sin compartir contraseña de cPanel."}
        </li>
        <li>
          <strong>{"Política:"}</strong>
          {
            " MFA en cPanel, acceso panel solo desde IP de oficina tras incidente de login desde Rusia en log."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Decisión clave:"}</strong>
        {
          " nuevos proyectos con tráfico medio migran a VPS con SSH; cPanel solo donde el cliente paga hosting compartido económico."
        }
      </p>
    </section>
  );
}
