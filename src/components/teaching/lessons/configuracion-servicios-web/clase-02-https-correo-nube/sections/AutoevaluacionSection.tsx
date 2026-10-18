export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar la relación entre HTTP, HTTPS y TLS."}</li>
        <li>{"Emitir y renovar un certificado con certbot y forzar la redirección a HTTPS."}</li>
        <li>{"Configurar MX, SPF y DKIM sin romper la entrega del correo."}</li>
        <li>{"Distinguir IaaS, PaaS y SaaS y elegir según el caso."}</li>
        <li>{"Comparar FTP, FTPS y SFTP y verificar la integridad de un archivo transferido."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://letsencrypt.org/es/docs/" target="_blank" rel="noreferrer">Let's Encrypt: documentación</a>{": emisión y renovación de certificados."}
        </li>
        <li>
          <a href="https://certbot.eff.org/" target="_blank" rel="noreferrer">Certbot</a>{": instalación según servidor y sistema."}
        </li>
        <li>
          <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf" target="_blank" rel="noreferrer">NIST SP 800-145</a>{": definición de computación en la nube."}
        </li>
      </ul>
    </section>
  );
}
