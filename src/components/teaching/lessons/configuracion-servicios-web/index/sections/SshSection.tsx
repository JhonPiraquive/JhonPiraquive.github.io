import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function SshSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"2.1"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Protocolo SSH (Secure Shell)"}
      </h2>
      <p className="my-4">
        {
          "SSH permite administrar un servidor de forma remota con canal cifrado. Sustituye a Telnet y FTP inseguros para comandos y transferencia SFTP."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"2.1.1 Instalar y configurar SSH"}</h3>
      <StepReveal
        title="Servidor SSH en Linux"
        steps={[
          {
            title: "Instalar OpenSSH",
            content: "sudo apt install openssh-server (Debian/Ubuntu) o equivalente.",
          },
          {
            title: "Habilitar y arrancar",
            content: "sudo systemctl enable --now sshd",
          },
          {
            title: "Firewall",
            content: "Abrir puerto 22/tcp (o cambiar a puerto no estándar).",
          },
          {
            title: "Autenticación por clave",
            content: "ssh-keygen -t ed25519; copiar clave pública a ~/.ssh/authorized_keys del servidor.",
          },
          {
            title: "Endurecer",
            content: "Desactivar login root por contraseña; usar claves y fail2ban.",
          },
        ]}
      />
      <CodeFiddle
        language="bash"
        title="Conexión SSH"
        code={`ssh usuario@190.25.80.42
ssh -i ~/.ssh/id_ed25519 usuario@servidor.ejemplo.com
ssh -p 2222 usuario@servidor.ejemplo.com`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"2.1.2 Acceder por SSH en Windows"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"OpenSSH Client (Windows 10+): incluido; usar PowerShell o CMD."}</li>
        <li>{"PuTTY: cliente gráfico clásico; guardar sesiones y claves."}</li>
        <li>{"Windows Terminal + WSL: experiencia similar a Linux."}</li>
      </ul>
      <CodeChallenge
        title="Completa el comando SSH"
        template={"ssh {{blank1}}@servidor.ejemplo.com"}
        blanks={[{ id: "blank1", answer: "usuario", placeholder: "nombre de usuario" }]}
      />
    </section>
  );
}
