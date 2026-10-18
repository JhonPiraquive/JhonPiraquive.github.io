import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"HTTP (puerto 80, texto plano) sirve la aplicación; HTTPS envuelve la misma semántica con TLS en el puerto 443."}</li>
        <li>{"SSL está obsoleto: en producción se usa TLS actual con certificados de Let's Encrypt y renovación automática."}</li>
        <li>{"El correo corporativo requiere MX (entrada), SPF y DKIM (autenticación de envío) y IMAP o SMTP en los clientes."}</li>
        <li>{"La computación en la nube se entiende con los principios del NIST y los modelos IaaS, PaaS y SaaS, que se eligen según control, velocidad y carga operativa."}</li>
        <li>{"FTP plano no se usa en producción: SFTP (sobre SSH) o FTPS cifran el canal; la integridad se verifica con hashes."}</li>
        <li>{"Errores frecuentes: MX duplicados al migrar, certificado vencido, FTP plano, contenido mixto y confundir el registro A del sitio con el MX del correo."}</li>
      </ol>
      <p className="my-4">{"La clase 3 cierra el curso con administración remota con SSH, contenedores, máquinas virtuales y diagnóstico por capas."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico" className="clay-button">
          {"Continuar a la clase 3: administración, contenedores y diagnóstico"}
        </Link>
      </p>
    </section>
  );
}
