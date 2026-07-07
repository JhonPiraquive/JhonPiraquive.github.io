export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>

      <p className="my-4 font-semibold">{"Resumen"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Hosting publica el sitio 24/7; conecta DNS (clase 1) con archivos en servidor y puertos 80/443."
          }
        </li>
        <li>
          {
            "Tipos: compartido (económico), VPS (control), dedicado (alto tráfico), nube (escala elástica). Elegir según tráfico, presupuesto y habilidades."
          }
        </li>
        <li>
          {
            "HTTP (puerto 80, texto plano) sirve la aplicación web; HTTPS envuelve la misma semántica con TLS en puerto 443."
          }
        </li>
        <li>
          {
            "SSL está obsoleto; en producción usar TLS 1.2+ con Let's Encrypt y renovación automatizada."
          }
        </li>
        <li>
          {
            "Correo corporativo requiere MX (entrada), SPF y DKIM (autenticación de envío), más IMAP/SMTP en clientes."
          }
        </li>
        <li>
          {
            "Errores frecuentes: MX duplicados al migrar, certificado vencido, FTP plano, mixed content, confundir registro A del sitio con MX del correo."
          }
        </li>
        <li>
          {
            "Siguiente clase: clase-03-administracion-remota — SSH, SFTP y paneles de nube."
          }
        </li>
      </ul>
    </section>
  );
}
