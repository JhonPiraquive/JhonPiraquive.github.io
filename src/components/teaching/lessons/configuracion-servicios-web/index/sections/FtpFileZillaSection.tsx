import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function FtpFileZillaSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"2.2"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Software para transferencia de archivos — FTP y FileZilla"}
      </h2>
      <p className="my-4">
        {
          "FTP (File Transfer Protocol) transfiere archivos entre cliente y servidor. FTP plano no cifra credenciales; en producción usa SFTP (sobre SSH) o FTPS."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"2.2.1 Instalación de FileZilla en Windows 10"}</h3>
      <StepReveal
        title="FileZilla Client"
        steps={[
          {
            title: "Descargar",
            content: "https://filezilla-project.org — elegir FileZilla Client (no el servidor salvo que lo necesites).",
          },
          {
            title: "Instalar",
            content: "Ejecutar instalador; rechazar software adicional opcional si no lo deseas.",
          },
          {
            title: "Nueva conexión",
            content: "Archivo → Gestor de sitios → Nuevo sitio.",
          },
          {
            title: "Protocolo SFTP",
            content: "Host: IP o dominio; Puerto: 22; Usuario y contraseña o clave SSH.",
          },
          {
            title: "Transferir",
            content: "Arrastra archivos entre panel local (izquierda) y remoto (derecha).",
          },
        ]}
      />
      <Callout title="Seguridad">
        {
          "Nunca uses FTP sin cifrar en Internet público. SFTP usa el mismo puerto 22 que SSH y cifra usuario, contraseña y archivos."
        }
      </Callout>
    </section>
  );
}
