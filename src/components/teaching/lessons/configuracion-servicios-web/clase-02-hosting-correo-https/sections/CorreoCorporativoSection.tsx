import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function CorreoCorporativoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Correo corporativo: MX, SPF, DKIM e IMAP/SMTP"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Correo corporativo usa direcciones @tudominio.com (no @gmail.com) gestionadas por un proveedor (Google Workspace, Microsoft 365, Zoho, cPanel del hosting). La entrega y autenticidad dependen de registros DNS y protocolos de acceso IMAP (entrada) y SMTP (salida)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Transmite profesionalismo (ventas@empresa.co), centraliza buzones al crecer el equipo y permite políticas de seguridad (2FA, retención, DLP). Sin MX/SPF/DKIM correctos, el correo llega a spam o se pierde al migrar proveedores — error frecuente en PYMEs LATAM."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4 font-medium">{"Flujo de correo entrante:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Remitente envía a contacto@miempresa.com."}</li>
        <li>{"DNS consulta registros MX del dominio → servidor de correo del proveedor."}</li>
        <li>{"Servidor receptor valida SPF (¿envía desde IP autorizada?) y DKIM (firma criptográfica del mensaje)."}</li>
        <li>{"Mensaje se deposita en buzón; usuario lo lee vía webmail o IMAP."}</li>
      </ol>
      <p className="my-4 font-medium">{"Flujo de correo saliente:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente (Outlook, Thunderbird) usa SMTP autenticado al proveedor."}</li>
        <li>{"Proveedor firma con DKIM y envía respetando SPF."}</li>
      </ol>

      <MermaidDiagram
        chart={`sequenceDiagram
  participant R as Remitente
  participant DNS as DNS MX
  participant M as Servidor correo Zoho/Google
  participant U as Usuario IMAP
  R->>DNS: ¿MX de miempresa.org.co?
  DNS-->>R: mx.zoho.com prioridad 10
  R->>M: SMTP entrega mensaje
  M->>M: Verifica SPF/DKIM del remitente
  U->>M: IMAP 993 lee bandeja`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición de registros DNS"}</h3>

      <h4 className="mt-4 mb-2 font-semibold">{"MX (Mail Exchange)"}</h4>
      <p className="my-4">
        {"Indica qué servidor recibe correo para el dominio. Prioridad numérica menor = preferido."}
      </p>
      <CodeFiddle
        language="dns"
        title="Registros MX (Zoho)"
        code={`; Zoho Mail — ejemplo ONG .org.co
miempresa.org.co.  3600  IN  MX  10  mx.zoho.com.
miempresa.org.co.  3600  IN  MX  20  mx2.zoho.com.`}
      />

      <h4 className="mt-4 mb-2 font-semibold">{"SPF (Sender Policy Framework)"}</h4>
      <p className="my-4">
        {"Registro TXT que lista servidores autorizados para enviar correo por tu dominio."}
      </p>
      <CodeFiddle
        language="dns"
        title="Registro SPF"
        code={`miempresa.org.co.  3600  IN  TXT  "v=spf1 include:zoho.com ~all"`}
      />
      <ul className="my-4 list-disc pl-6">
        <li>{"include: delega en otro dominio (Google, Zoho)."}</li>
        <li>{"~all softfail para no autorizados; -all hardfail (más estricto)."}</li>
      </ul>

      <h4 className="mt-4 mb-2 font-semibold">{"DKIM (DomainKeys Identified Mail)"}</h4>
      <p className="my-4">
        {
          "Registro TXT con clave pública; el proveedor firma cada mensaje saliente con la clave privada. Receptores verifican integridad y origen."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="Registro DKIM"
        code={`; Nombre típico: selector._domainkey.dominio
zmail._domainkey.miempresa.org.co.  3600  IN  TXT  "v=DKIM1; k=rsa; p=MIGfMA0GCSq..."`}
      />

      <h4 className="mt-4 mb-2 font-semibold">{"IMAP y SMTP (acceso del usuario)"}</h4>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Protocolo"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Rol"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Puertos típicos"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"IMAP"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Sincroniza bandeja, carpetas, leído/no leído"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"993 (SSL/TLS)"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"SMTP"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Envía correo saliente"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"587 (STARTTLS) o 465 (SSL)"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeFiddle
        language="text"
        title="Configuración cliente IMAP/SMTP"
        code={`IMAP entrante: imap.gmail.com:993 (SSL) — usuario: contacto@miempresa.com
SMTP saliente: smtp.gmail.com:587 (STARTTLS) — autenticación obligatoria
Contraseña: de aplicación si hay 2FA (no la personal)`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes de proveedor"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Proveedor"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Perfil"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Nota LATAM"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Google Workspace"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Integración Gmail, Drive"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Facturación USD; dominio .com.co común"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Microsoft 365"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Outlook, Teams"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Común en empresas con licencias M365"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Zoho Mail"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Económico para ONG/startup"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Plan gratuito limitado; popular en ONG"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"cPanel del hosting"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Incluido en compartido"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Menos features; SPF/DKIM manual"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <p className="my-4">
        {
          "Correo en proveedor dedicado (Google/Zoho) ofrece mejor entregabilidad y antispam, con DKIM/SPF guiados en panel. Correo solo en hosting compartido tiene límites de envío bajos y más riesgo de listas negras compartidas; al migrar el sitio es fácil olvidar los MX."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto: migración a Zoho"}</h3>
      <p className="my-4">{"ONG en Cali migra de correo del hosting a Zoho Mail:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Crear cuenta Zoho y verificar dominio (TXT)."}</li>
        <li>{"Antes de cambiar MX: exportar buzones antiguos."}</li>
        <li>{"Actualizar MX a Zoho; esperar propagación (TTL, hasta 48 h)."}</li>
        <li>{"Añadir SPF y DKIM desde panel Zoho."}</li>
        <li>{"Configurar IMAP/SMTP en celulares del equipo."}</li>
      </ol>
      <p className="my-4">{"Registros DNS completos de ejemplo:"}</p>
      <CodeFiddle
        language="dns"
        title="DNS completo migración Zoho"
        code={`; Verificación dominio
miempresa.org.co.     IN TXT "zoho-verification=zb12345678.zmverify.zoho.com"

; Correo entrante
miempresa.org.co.     IN MX 10 mx.zoho.com.
miempresa.org.co.     IN MX 20 mx2.zoho.com.

; Autenticación envío
miempresa.org.co.     IN TXT "v=spf1 include:zoho.com ~all"
zmail._domainkey.miempresa.org.co. IN TXT "v=DKIM1; k=rsa; p=MIIBIjAN..."`}
      />
      <CodeFiddle
        language="bash"
        title="Diagnóstico MX/SPF/DKIM"
        code={`dig MX miempresa.org.co +short
dig TXT miempresa.org.co +short | grep spf
dig TXT zmail._domainkey.miempresa.org.co +short`}
      />

      <StepReveal
        title="Configuración correo corporativo"
        steps={[
          {
            title: "1. Elegir proveedor",
            content: "Google Workspace, Zoho, M365 o cPanel según presupuesto y features.",
          },
          {
            title: "2. Verificar dominio",
            content: "Registro TXT de verificación en DNS antes de activar buzones.",
          },
          {
            title: "3. Configurar MX",
            content: "Un solo conjunto de MX activo. Eliminar MX del proveedor anterior.",
          },
          {
            title: "4. SPF y DKIM",
            content: "TXT SPF con include del proveedor; DKIM con selector del panel.",
          },
          {
            title: "5. Buzones e IMAP/SMTP",
            content: "Crear usuarios; configurar clientes con puertos 993/587 y contraseña de aplicación si hay 2FA.",
          },
        ]}
      />

      <Callout title="Caso real: ONG Bogotá — MX duplicados">
        {
          "fundacionejemplo.org.co configuró MX de Zoho pero dejó MX del hosting con prioridad 10. Mitad del correo a info@ nunca llegó dos semanas. Resolución: eliminar MX viejos, un solo par Zoho, SPF include:zoho.com, DKIM del panel."
        }
      </Callout>

      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Buen uso"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Mal uso"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Un solo conjunto de MX activo"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"MX duplicados de hosting viejo + Zoho → correo perdido"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"SPF + DKIM + DMARC (avanzado) alineados"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"SPF con demasiados include (>10 lookups)"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Contraseñas de aplicación con 2FA"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Usar contraseña personal en SMTP"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Probar envío a Gmail y revisar cabeceras Authentication-Results"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Cambiar MX sin avisar al equipo durante horario laboral"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout title="Registro A ≠ MX">
        {
          "El sitio web puede estar en una IP (registro A) y el correo en otro proveedor (MX distinto). Es correcto y habitual; hay que configurar cada registro por separado."
        }
      </Callout>
    </section>
  );
}
