import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase protege lo publicado con TLS, configura el correo con el dominio propio y presenta la nube y la transferencia segura de archivos."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Describir HTTP y HTTPS como HTTP sobre TLS, y explicar por qué HTTPS es obligatorio en producción."}</li>
        <li>{"Diferenciar SSL (obsoleto) de TLS, emitir y renovar certificados con Let's Encrypt y forzar la redirección de HTTP a HTTPS."}</li>
        <li>{"Configurar correo corporativo con registros MX, SPF y DKIM y un cliente IMAP y SMTP, sin romper la entrega al migrar."}</li>
        <li>{"Explicar los principios de la computación en la nube (NIST) y distinguir IaaS, PaaS y SaaS con criterio de elección."}</li>
        <li>{"Comparar FTP, FTPS y SFTP, y transferir archivos verificando su integridad."}</li>
      </ul>
      <Callout title="De sitio publicado a servicio seguro">
        {"Un dominio sin hosting es solo un nombre; un sitio sin TLS ni correo propio no está listo para producción."}
      </Callout>
    </section>
  );
}
