import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

const INSTALAR_VSFTPD = `# Debian/Ubuntu — instalar y habilitar vsftpd
sudo apt update
sudo apt install -y vsftpd

# Habilitar al arranque e iniciar ahora
sudo systemctl enable vsftpd
sudo systemctl start vsftpd

# Verificar estado del servicio
sudo systemctl status vsftpd`;

const USUARIO_FTP = `# Crear usuario dedicado para transferencia (sin shell interactivo)
sudo useradd -m -d /home/transferencia -s /usr/sbin/nologin transferencia
sudo passwd transferencia

# Directorio de trabajo con permisos correctos
sudo mkdir -p /home/transferencia/archivos
sudo chown transferencia:transferencia /home/transferencia/archivos
sudo chmod 750 /home/transferencia/archivos`;

const VSFTPD_CONF = `# Fragmento conceptual de /etc/vsftpd.conf
listen=YES
anonymous_enable=NO
local_enable=YES
write_enable=YES
chroot_local_user=YES
allow_writeable_chroot=YES
pasv_enable=YES
pasv_min_port=50000
pasv_max_port=50100
# local_root=/home/transferencia/archivos  # opcional: restringir raíz visible`;

export function ConfiguracionServidorFtpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Configuración del servidor FTP (vsftpd)"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "vsftpd (Very Secure FTP Daemon) es el servicio FTP más usado en servidores Linux. Escucha en el puerto 21 para comandos de control y, en modo pasivo, abre un rango de puertos altos para transferir archivos. La configuración define quién puede conectarse, dónde puede escribir y si el usuario queda confinado (chroot) a su directorio home."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Muchas PyMEs y proveedores de hosting legado aún entregan acceso FTP para subir sitios estáticos o intercambiar documentos con partners. Configurar vsftpd con usuario dedicado, anónimo deshabilitado y chroot reduce el riesgo de acceso no autorizado o navegación fuera del directorio permitido."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — instalación y servicio"}</h3>
      <StepReveal
        title="Pasos de configuración del servidor"
        steps={[
          {
            title: "Instalar paquete vsftpd",
            content: "apt install vsftpd. El unit systemd vsftpd.service gestiona el daemon.",
          },
          {
            title: "Habilitar e iniciar",
            content: "systemctl enable + start. status debe mostrar active (running).",
          },
          {
            title: "Crear usuario de transferencia",
            content:
              "Cuenta sin shell de login (/usr/sbin/nologin), home propio y contraseña asignada. No reutilizar root.",
          },
          {
            title: "Directorio de trabajo",
            content:
              "Subcarpeta dentro del home (ej. archivos/) con chown al usuario FTP y permisos 750 o 755 según política.",
          },
          {
            title: "Editar vsftpd.conf",
            content:
              "anonymous_enable=NO, chroot_local_user=YES, pasv_min/max_port para modo pasivo detrás de NAT/firewall.",
          },
          {
            title: "Reiniciar y verificar",
            content: "systemctl restart vsftpd; ss -tlnp | grep :21 confirma escucha en puerto 21.",
          },
        ]}
      />

      <CodeFiddle language="bash" title="Instalar y habilitar vsftpd" code={INSTALAR_VSFTPD} />
      <CodeFiddle language="bash" title="Usuario y directorio de transferencia" code={USUARIO_FTP} />
      <CodeFiddle language="bash" title="Parámetros clave de vsftpd.conf" code={VSFTPD_CONF} />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Parámetros de seguridad esenciales"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Directiva"}</th>
            <th className="border p-2 text-left">{"Valor recomendado"}</th>
            <th className="border p-2 text-left">{"Motivo"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"anonymous_enable"}</td>
            <td className="border p-2">{"NO"}</td>
            <td className="border p-2">{"Evita acceso anónimo sin autenticación"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"chroot_local_user"}</td>
            <td className="border p-2">{"YES"}</td>
            <td className="border p-2">{"Confinar al usuario a su home; no ver /etc ni otros homes"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"write_enable"}</td>
            <td className="border p-2">{"YES (si subida requerida)"}</td>
            <td className="border p-2">{"Permite STOR; desactivar en servidores solo lectura"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"pasv_min/max_port"}</td>
            <td className="border p-2">{"50000–50100 (ejemplo)"}</td>
            <td className="border p-2">{"Rango pasivo documentado para firewall y Docker -p"}</td>
          </tr>
        </tbody>
      </table>

      <Callout title="Documentar archivos modificados">
        {
          "En cualquier cambio de producción, registra: ruta del archivo (/etc/vsftpd.conf), líneas alteradas, fecha y resultado de systemctl status vsftpd tras el restart. Facilita auditoría y rollback."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Un integrador en Quito configura vsftpd para que el usuario transferencia solo vea /home/transferencia/archivos gracias a chroot_local_user=YES. Deshabilita anónimos, define pasv 50000–50100 y documenta en su ficha técnica la salida de systemctl status vsftpd (active) y la lista de directivas tocadas en vsftpd.conf."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" usuario dedicado, anónimo off, chroot, rango pasivo documentado, permisos mínimos en directorio."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" permitir ftp anónimo con write_enable; compartir cuenta root; omitir restart tras editar conf."}
        </li>
      </ul>
    </section>
  );
}
