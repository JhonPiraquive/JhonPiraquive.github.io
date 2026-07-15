import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function HerramientasAdminRemotaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herramientas de administración remota"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Conjunto de métodos y aplicaciones para operar un servidor o hosting sin acceso físico al datacenter: terminal (SSH), transferencia de archivos (SFTP), escritorio remoto (RDP/VNC) y paneles web (cPanel, Plesk, paneles cloud)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En LATAM, la mayoría de equipos no están junto al servidor: hosting en Miami, equipo en Ciudad de México o Lima. La administración remota es el único canal operativo 24/7 para deploys, soporte y respuesta a incidentes."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo usar cada herramienta"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Herramienta"}</th>
            <th className="border p-2 text-left">{"Protocolo / canal"}</th>
            <th className="border p-2 text-left">{"Para qué"}</th>
            <th className="border p-2 text-left">{"Cómo se usa (resumen)"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">
              <strong>{"PuTTY"}</strong>
            </td>
            <td className="border p-2">{"SSH (22)"}</td>
            <td className="border p-2">{"Terminal en Windows sin WSL"}</td>
            <td className="border p-2">{"Host, puerto, clave .ppk o contraseña → sesión shell"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"OpenSSH / terminal"}</strong>
            </td>
            <td className="border p-2">{"SSH"}</td>
            <td className="border p-2">{"Terminal en Linux/macOS/WSL"}</td>
            <td className="border p-2">{"ssh user@host"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"FileZilla"}</strong>
            </td>
            <td className="border p-2">{"SFTP (22), evitar FTP plano"}</td>
            <td className="border p-2">{"Subir/bajar archivos, permisos"}</td>
            <td className="border p-2">{"Site Manager → SFTP → host, usuario, clave"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"WinSCP"}</strong>
            </td>
            <td className="border p-2">{"SFTP/SCP"}</td>
            <td className="border p-2">{"Similar a FileZilla en Windows"}</td>
            <td className="border p-2">{"Sesión guardada con clave SSH"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"cPanel"}</strong>
            </td>
            <td className="border p-2">{"HTTPS (443)"}</td>
            <td className="border p-2">{"Hosting compartido: correo, DNS, archivos, BD"}</td>
            <td className="border p-2">{"Navegador → login → File Manager / phpMyAdmin"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"Plesk"}</strong>
            </td>
            <td className="border p-2">{"HTTPS (443)"}</td>
            <td className="border p-2">{"Alternativa a cPanel en VPS"}</td>
            <td className="border p-2">{"Panel web multi-sitio"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"RDP"}</strong>
            </td>
            <td className="border p-2">{"3389"}</td>
            <td className="border p-2">{"Escritorio Windows Server"}</td>
            <td className="border p-2">{"Cliente Escritorio remoto → IP + credenciales"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"VNC"}</strong>
            </td>
            <td className="border p-2">{"5900+"}</td>
            <td className="border p-2">{"Escritorio Linux/GUI remoto"}</td>
            <td className="border p-2">{"Viewer + contraseña VNC (menos seguro que SSH)"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo típico agencia LATAM"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"Sitio en hosting compartido:"}</strong>
          {" cPanel para archivos y correo; sin SSH root."}
        </li>
        <li>
          <strong>{"API en VPS DigitalOcean:"}</strong>
          {" SSH (PuTTY/OpenSSH) para logs y docker compose; FileZilla SFTP para assets."}
        </li>
        <li>
          <strong>{"Windows Server en Azure:"}</strong>
          {" RDP para GUI; PowerShell remoto en entornos enterprise."}
        </li>
      </ol>
      <MermaidDiagram
        title="Flujo típico de administración remota en una agencia LATAM"
        chart={`flowchart LR
  A[Equipo de la agencia] --> B{Tipo de entorno}
  B -->|Hosting compartido| C[cPanel]
  C --> D[Archivos, correo y DNS]
  B -->|VPS Linux| E[SSH]
  E --> F[Logs y Docker Compose]
  E --> G[SFTP para assets]
  B -->|Windows Server| H[RDP]
  H --> I[Administración con GUI]
  H --> J[PowerShell remoto]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas de paneles vs SSH"}</h3>
      <p className="my-4">
        <strong>{"Paneles (cPanel):"}</strong>
        {
          " curva baja para no-devs; MFA y backups integrados a veces; limitado en hosting compartido."
        }
      </p>
      <p className="my-4">
        <strong>{"SSH + SFTP:"}</strong>
        {" control total y scriptable; ideal para VPS y automatización; requiere conocimiento Linux."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Agencia en Medellín con clientes en hosting colombiano: diseñadores usan cPanel File Manager; desarrollador usa SFTP al mismo servidor para deploy de Node. VPS de staging: solo SSH + FileZilla SFTP, cPanel no instalado."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" MFA en panel, restringir cPanel por IP, VPN antes de RDP, SFTP con claves."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " cPanel en https://IP:2083 expuesto sin restricción; RDP abierto a Internet sin VPN; reutilizar contraseña de correo en SSH."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Solo GUI, cero documentación CLI:"}</strong>
          {" Incidente nocturno sin cPanel disponible; nadie supo reiniciar nginx por SSH. Corrección: runbook con systemctl y rutas de log."}
        </li>
        <li>
          <strong>{"Terminal compartido en Zoom sin ocultar:"}</strong>
          {" Password tipeado visible en reunión con cliente. Corrección: copiar-pegar desde vault, sesiones sin compartir pantalla de credenciales."}
        </li>
      </ul>

      <StepReveal
        title="Caso agencia: cPanel vs SSH/SFTP"
        steps={[
          {
            title: "Diseñador — WordPress",
            content:
              "cPanel File Manager o instalador WordPress: sube imágenes sin shell. MFA activo; acceso solo desde IP de oficina.",
          },
          {
            title: "Desarrollador — mismo hosting",
            content:
              "SFTP con clave dedicada por sitio; nunca comparte contraseña de cPanel. Deploy de temas o plugins vía Git + SFTP.",
          },
          {
            title: "VPS staging — API Node",
            content:
              "Solo SSH + FileZilla SFTP. Firewall ufw: 22, 80, 443. fail2ban activo. FTP puerto 21 rechazado.",
          },
          {
            title: "Incidente evitado",
            content:
              "Cliente pidió FTP «como antes»; se documentó que SFTP usa el mismo 22 ya abierto, sin credenciales en texto claro.",
          },
        ]}
      />
    </section>
  );
}
