import { CompareTable } from "@/components/teaching/CompareTable";

export function AdministracionRemotaSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"2.3"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Administración remota de equipos"}
      </h2>
      <p className="my-4">
        {
          "Además de SSH para servidores Linux, existen herramientas para administrar escritorios Windows y paneles de hosting sin terminal."
        }
      </p>
      <CompareTable
        headers={["Herramienta", "Protocolo / tipo", "Uso típico"]}
        rows={[
          ["SSH + SFTP", "Puerto 22, cifrado", "Servidores Linux, deploy, logs"],
          ["RDP", "Puerto 3389", "Escritorio remoto Windows Server"],
          ["VNC", "5900+", "Escritorio gráfico multiplataforma"],
          ["cPanel / Plesk", "Panel web HTTPS", "Hosting compartido: correo, BD, archivos"],
          ["TeamViewer / AnyDesk", "Propietario, relay", "Soporte a usuarios finales"],
        ]}
      />
      <p className="my-4">
        {
          "Buenas prácticas: cambiar puertos por defecto cuando sea posible, usar VPN o bastion host, autenticación de dos factores y registrar accesos en logs."
        }
      </p>
    </section>
  );
}
