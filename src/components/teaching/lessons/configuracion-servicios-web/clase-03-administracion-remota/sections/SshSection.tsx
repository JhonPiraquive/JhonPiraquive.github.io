import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function SshSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SSH: claves, hardening y SCP"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Protocolo de red para acceso remoto seguro a línea de comandos y túneles. Sustituye a Telnet (puerto 23, sin cifrar). La implementación libre más usada es OpenSSH (cliente y servidor)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Administración de VPS, despliegues, revisión de logs, reinicio de servicios y copias con scp/rsync sobre SSH. Es la herramienta diaria del desarrollador backend en LATAM que opera servidores en Miami o São Paulo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"TCP al puerto 22 (o puerto custom)."}</li>
        <li>{"Handshake SSH: intercambio de versiones y algoritmos."}</li>
        <li>
          {
            "Verificación de host: el servidor presenta huella (fingerprint); el cliente la compara con known_hosts."
          }
        </li>
        <li>{"Autenticación: clave pública (recomendado) o contraseña."}</li>
        <li>
          {
            "Canal de sesión: shell interactivo o comando remoto (ssh user@host 'systemctl status nginx')."
          }
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Componente"}</th>
            <th className="border p-2 text-left">{"Ubicación"}</th>
            <th className="border p-2 text-left">{"Rol"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"Clave privada"}</td>
            <td className="border p-2">{"Cliente (~/.ssh/id_ed25519)"}</td>
            <td className="border p-2">{"Nunca compartir"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Clave pública"}</td>
            <td className="border p-2">{"Servidor (~/.ssh/authorized_keys)"}</td>
            <td className="border p-2">{"Identifica al cliente autorizado"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"sshd"}</td>
            <td className="border p-2">{"Servidor"}</td>
            <td className="border p-2">{"Daemon que escucha"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"ssh / PuTTY"}</td>
            <td className="border p-2">{"Cliente"}</td>
            <td className="border p-2">{"Inicia conexión"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes de cliente"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"OpenSSH (Linux, macOS, Windows 10+ nativo)"}</li>
        <li>{"PuTTY (Windows clásico, .ppk convertible a OpenSSH)"}</li>
        <li>{"WSL (Ubuntu dentro de Windows, usa OpenSSH)"}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <p className="my-4">
        <strong>{"Ventajas:"}</strong>
        {
          " cifrado fuerte y ampliamente auditado; port forwarding y túneles; estándar en cloud y CI/CD."
        }
      </p>
      <p className="my-4">
        <strong>{"Desventajas:"}</strong>
        {
          " mal configurado expone brute force en puerto 22; gestión de claves en equipos rotativos requiere proceso; root login habilitado = riesgo crítico."
        }
      </p>
      <CodeFiddle
        language="bash"
        title="Generación y uso de claves Ed25519"
        code={`# Generar par de claves Ed25519
ssh-keygen -t ed25519 -C "dev@cali.agencia.com" -f ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519

# Copiar clave pública al servidor (primera vez)
ssh-copy-id -i ~/.ssh/id_ed25519.pub deploy@157.245.80.42

# Conexión con clave explícita
ssh -i ~/.ssh/id_ed25519 deploy@157.245.80.42`}
      />
      <CodeFiddle
        language="bash"
        title="Hardening básico en servidor"
        code={`# /etc/ssh/sshd_config — fragmentos recomendados
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
MaxAuthTries 3

sudo systemctl reload sshd`}
      />
      <CodeFiddle
        language="bash"
        title="Copia segura con SCP"
        code={`# Subir carpeta build al servidor
scp -i ~/.ssh/id_ed25519 -r ./dist/ deploy@157.245.80.42:/var/www/html/

# Descargar logs
scp deploy@157.245.80.42:/var/log/nginx/error.log ./error.log`}
      />
      <CodeFiddle
        language="bash"
        title="Verificación de puertos en servidor"
        code={`# Ver qué escucha el servidor
sudo ss -tlnp | grep -E ':21|:22|:443'

# Prueba de conectividad SSH (verbose)
ssh -v deploy@servidor.ejemplo.co`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {
            " claves Ed25519, usuario no-root con sudo, ufw allow 22/tcp solo desde IP de oficina o VPN, fail2ban."
          }
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " contraseña admin123, root login, puerto 22 abierto a 0.0.0.0/0 sin rate limiting, subir clave privada al servidor o a GitHub."
          }
        </li>
      </ul>
      <StepReveal
        title="De clave local a shell remoto"
        steps={[
          {
            title: "ssh-keygen",
            content:
              "Generas par Ed25519 en el cliente. La privada queda en ~/.ssh/id_ed25519 (chmod 600); la pública en id_ed25519.pub.",
          },
          {
            title: "Registrar clave pública",
            content:
              "Copias el contenido de .pub al servidor: panel cloud, ssh-copy-id o manualmente en ~/.ssh/authorized_keys del usuario deploy.",
          },
          {
            title: "ssh usuario@host",
            content:
              "El cliente inicia TCP al puerto 22. Handshake SSH, verificación de fingerprint, autenticación con clave privada.",
          },
          {
            title: "Shell remoto",
            content:
              "Sesión interactiva o comando único: revisar logs, reiniciar servicios, aplicar hardening.",
          },
          {
            title: "SFTP en FileZilla",
            content:
              "Misma clave y puerto 22: protocolo SFTP para subir builds sin segundo canal ni FTP plano.",
          },
        ]}
      />
      <CodeChallenge
        title="Práctica: completar comando SSH"
        template={"ssh {{blank1}} ~/.ssh/id_ed25519 deploy@203.0.113.10"}
        blanks={[
          {
            id: "blank1",
            answer: "-i",
            placeholder: "Flag para indicar archivo de clave privada",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"FTP sin cifrar en producción:"}</strong>
          {" credenciales y archivos visibles en la red; usar SFTP o FTPS."}
        </li>
        <li>
          <strong>{"Confundir SFTP con FTPS:"}</strong>
          {" SFTP = sobre SSH (puerto 22); FTPS = FTP con capa TLS."}
        </li>
        <li>
          <strong>{"SSH con contraseña débil y PermitRootLogin yes:"}</strong>
          {" objetivo #1 de bots de fuerza bruta."}
        </li>
        <li>
          <strong>{"Puerto 22 abierto a 0.0.0.0/0 sin fail2ban:"}</strong>
          {" miles de intentos diarios en VPS con IP pública."}
        </li>
        <li>
          <strong>{"FileZilla en modo FTP por defecto:"}</strong>
          {" verificar que el sitio guardado dice SFTP."}
        </li>
        <li>
          <strong>{"Exponer cPanel/RDP sin MFA ni filtro IP:"}</strong>
          {" paneles son objetivo de credential stuffing."}
        </li>
        <li>
          <strong>{"Subir clave privada SSH al servidor o a GitHub:"}</strong>
          {" solo la pública va en authorized_keys."}
        </li>
      </ul>
    </section>
  );
}
