import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ModeloClienteServidorRemotoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Modelo cliente-servidor en administración remota"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Paradigma donde un cliente inicia solicitudes y un servidor escucha en un puerto y responde. En administración remota, tu laptop es casi siempre el cliente; el VPS o hosting es el servidor."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Toda sesión SSH, transferencia SFTP o login en cPanel sigue este modelo. Entenderlo evita confusiones frecuentes: «¿por qué debo abrir el puerto 22 en el firewall del servidor y no en mi PC?» — porque el servidor escucha; el cliente conecta hacia afuera."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {"El servidor ejecuta un daemon (sshd, vsftpd, panel web en Apache/Nginx)."}
        </li>
        <li>{"El daemon escucha en un puerto (22 SSH, 21 FTP, 443 HTTPS para cPanel)."}</li>
        <li>
          {"El cliente (PuTTY, FileZilla, navegador) resuelve DNS/IP y abre conexión TCP."}
        </li>
        <li>
          {
            "Tras autenticación (clave, contraseña, MFA), el cliente envía comandos o peticiones; el servidor ejecuta y devuelve resultado."
          }
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <CodeFiddle
        language="text"
        title="Cliente-servidor remoto"
        code={`[Cliente: PuTTY / FileZilla / Navegador]
        │  TCP + protocolo (SSH / SFTP / HTTPS)
        ▼
[Servidor: VPS / hosting]
        ├── sshd (puerto 22)
        ├── vsftpd (puerto 21) — evitar en producción sin cifrar
        └── Apache/Nginx + cPanel (puerto 443)`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Dev en Cali con IP dinámica de ISP → cliente SSH. VPS en DigitalOcean (IP fija 157.245.x.x) → servidor. Comando: ssh -i ~/.ssh/id_ed25519 deploy@157.245.x.x. El cliente inicia; sshd acepta si la clave pública está en ~/.ssh/authorized_keys."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {
            " identificar siempre cliente vs servidor al diagnosticar «connection refused» (servicio no escucha o firewall bloquea en el servidor)."
          }
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " abrir puertos en el router de casa pensando que eso «habilita SSH al servidor» — es al revés: el servidor debe permitir entrada en el puerto correspondiente."
          }
        </li>
      </ul>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant Dev as Cliente (laptop Cali)
  participant VPS as Servidor (cloud)
  Dev->>VPS: TCP 22 — handshake SSH
  Dev->>VPS: Autenticación (clave pública)
  VPS-->>Dev: Sesión shell o subsistema SFTP
  Dev->>VPS: put index.html / chmod / systemctl reload nginx
  VPS-->>Dev: OK + salida comando`}
      />
    </section>
  );
}
