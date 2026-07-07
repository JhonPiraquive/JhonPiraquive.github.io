import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function DominiosDnsSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"1.2.4 – 1.2.6"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Dominios, DNS y subdominios"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.2.4 ¿Qué es un dominio y cómo está conformado?"}</h3>
      <p className="my-4">
        {
          "Un dominio es un nombre legible que apunta a una IP mediante DNS. Se conforma por: subdominio (opcional) + segundo nivel (ejemplo) + TLD (.com, .co, .org, .edu)."
        }
      </p>
      <p className="my-4">
        <strong>{"Ejemplo:"}</strong>
        {" `api.tienda.ejemplo.com` → subdominio `api`, SLD `tienda.ejemplo`, TLD `.com` (según registrador puede variar la jerarquía)."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Resolución DNS al escribir una URL"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant B as Navegador
  participant D as DNS
  participant S as Servidor
  U->>B: Escribe ejemplo.com
  B->>D: Consulta A de ejemplo.com
  D-->>B: 190.25.80.42
  B->>S: GET / HTTPS :443
  S-->>B: Respuesta HTML`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"¿Cómo comprar un dominio en Internet?"}</h3>
      <StepReveal
        title="Pasos para registrar un dominio"
        steps={[
          {
            title: "Elegir nombre y TLD",
            content: "Verifica disponibilidad en registradores (Namecheap, GoDaddy, Cloudflare Registrar, NIC .co).",
          },
          {
            title: "Crear cuenta y pagar",
            content: "Registro anual o plurianual. Activa protección WHOIS si está disponible.",
          },
          {
            title: "Configurar nameservers",
            content: "Apunta a tu proveedor DNS (registrador, Cloudflare, Route 53) para gestionar registros.",
          },
          {
            title: "Crear registros DNS",
            content: "A/AAAA para web, MX para correo, TXT para verificación y SPF.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.2.5 ¿Cómo configurar un dominio?"}</h3>
      <p className="my-4">
        {
          "Tras la compra, accede al panel DNS del registrador o cambia los nameservers a un proveedor especializado (Cloudflare, Route 53). Crea los registros que cada servicio exige y guarda un export de la zona antes de cambios masivos."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Registros DNS habituales"}</h3>
      <CodeFiddle
        language="text"
        title="Ejemplo de zona DNS"
        code={`A     @           190.25.80.42
A     www         190.25.80.42
CNAME api         ejemplo.com
MX    @           10 mail.ejemplo.com
TXT   @           "v=spf1 include:_spf.google.com ~all"`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.2.6 ¿Qué es un subdominio y para qué sirve?"}</h3>
      <p className="my-4">
        {
          "Un subdominio es un prefijo del dominio (`blog.ejemplo.com`, `mail.ejemplo.com`). Sirve para separar servicios sin comprar otro dominio: blog, API, panel de admin, entorno de staging."
        }
      </p>
      <Callout title="Propagación DNS">
        {
          "Tras cambiar registros, la propagación puede tardar desde minutos hasta 48 horas según TTL y cachés de resolvers. No asumas cambio instantáneo."
        }
      </Callout>
    </section>
  );
}
