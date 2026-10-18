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

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: SFTP sobre SSH; MFA en paneles; claves por cliente; documentar accesos."}</li>
        <li>{"Mal uso: FTP puerto 21; cPanel compartido; passwords en cron; ignorar logins geo-anómalos."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"FTP en puerto 21 «por costumbre»:"}</strong>
          {" Cliente retail en Cali exigió FTP; credenciales viajaron en claro y fueron brute-forced. Corrección: SFTP sobre SSH 22 con clave, documentar rechazo de FTP."}
        </li>
        <li>
          <strong>{"cPanel compartido entre clientes:"}</strong>
          {" Agencia en Bogotá usó un login cPanel para 12 sitios; error borró BD de cliente equivocado. Corrección: cuenta cPanel por cliente o SFTP con chroot."}
        </li>
        <li>
          <strong>{"SSH con password en scripts cron:"}</strong>
          {" Deploy automatizado guardó password en crontab legible. Corrección: clave Ed25519 con passphrase en agent y usuario deploy sin shell interactivo."}
        </li>
        <li>
          <strong>{"Sin MFA tras login desde Rusia:"}</strong>
          {" Agencia detectó acceso extranjero pero no forzó MFA hasta semanas después. Corrección: MFA obligatorio y alertas geo-anómalas inmediatas."}
        </li>
      </ul>
    </section>
  );
}
