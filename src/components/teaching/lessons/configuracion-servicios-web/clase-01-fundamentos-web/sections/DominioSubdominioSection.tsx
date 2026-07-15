import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function DominioSubdominioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Dominio: SLD, TLD y registro"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Dominio: nombre registrado bajo un TLD; identidad en el espacio DNS."}</li>
        <li>{"SLD: nombre que registras (ejemplo en ejemplo.co)."}</li>
        <li>{"TLD: categoría o país (.co, .com, .mx)."}</li>
        <li>{"FQDN: nombre completo resoluble (api.tienda.ejemplo.co)."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental de dominios y subdominios"
        chart={`mindmap
  root((Dominio))
    Identidad DNS
      Nombre registrado
      Renovación
    Jerarquía
      TLD
        País o categoría
      SLD
        Nombre elegido
      Subdominio
        Servicio separado
    FQDN
      Nombre completo resoluble
      api.tienda.ejemplo.co`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un dominio es un nombre registrado bajo un TLD (Top-Level Domain) que identifica de forma única a una organización o persona en el espacio de nombres DNS. Es la parte que el registrador gestiona y renueva anualmente."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Marca, credibilidad y control: empresa.co transmite más confianza que empresa.wordpress.com. Permite correo corporativo (@empresa.co), subdominios (api.empresa.co) y certificados TLS propios."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El usuario elige nombre disponible en un registrador (NIC Colombia para .co, Namecheap, GoDaddy, Cloudflare Registrar)."}</li>
        <li>{"Paga y registra el dominio por 1–10 años."}</li>
        <li>{"Configura nameservers (delegación DNS) hacia el proveedor que hospedará los registros."}</li>
        <li>{"Publica registros A, MX, TXT, etc."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <p className="my-4">{"De derecha a izquierda en la jerarquía DNS:"}</p>
      <CodeFiddle
        language="text"
        title="Jerarquía de api.tienda.ejemplo.co"
        code={`api.tienda.ejemplo.co.
│   │     │      └── TLD (Top-Level Domain): .co
│   │     └───────── SLD (dominio registrado): ejemplo
│   └─────────────── subdominio: tienda
└─────────────────── subdominio: api`}
      />
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Parte"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Ejemplo"}</th>
            <th className="py-2 text-left font-semibold">{"Rol"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"TLD"}</td>
            <td className="py-2 pr-4">{".co, .com, .org, .mx"}</td>
            <td className="py-2">{"Categoría o país"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"SLD"}</td>
            <td className="py-2 pr-4">{"ejemplo"}</td>
            <td className="py-2">{"Nombre que registras"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"FQDN"}</td>
            <td className="py-2 pr-4">{"api.tienda.ejemplo.co"}</td>
            <td className="py-2">{"Nombre completo resoluble"}</td>
          </tr>
        </tbody>
      </table>
      <MermaidDiagram
        chart={`flowchart TB
  ROOT[". (raíz)"]
  TLD[".co (TLD)"]
  SLD["ejemplo.co (SLD registrado)"]
  WWW["www.ejemplo.co"]
  API["api.ejemplo.co"]
  MAIL["mail.ejemplo.co"]
  ROOT --> TLD
  TLD --> SLD
  SLD --> WWW
  SLD --> API
  SLD --> MAIL`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes (TLD)"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Categoría"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Ejemplos"}</th>
            <th className="py-2 text-left font-semibold">{"Cuándo elegir"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Genéricos (gTLD)"}</td>
            <td className="py-2 pr-4">{".com, .org, .net, .io"}</td>
            <td className="py-2">{"Marca global, startups tech"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Geográficos (ccTLD)"}</td>
            <td className="py-2 pr-4">{".co (Colombia), .mx, .ar"}</td>
            <td className="py-2">{"Presencia local, SEO regional"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Patrocinados / restringidos"}</td>
            <td className="py-2 pr-4">{".edu, .gov"}</td>
            <td className="py-2">{"Instituciones acreditadas"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Personalizados (brand)"}</td>
            <td className="py-2 pr-4">{".google, .microsoft"}</td>
            <td className="py-2">{"Grandes empresas con TLD propio"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas de dominio propio"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Ventaja"}</th>
            <th className="py-2 text-left font-semibold">{"Desventaja"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Marca y correo profesional"}</td>
            <td className="py-2">{"Costo anual de renovación"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Control total de DNS y subdominios"}</td>
            <td className="py-2">{"Responsabilidad de renovar (riesgo de perder dominio)"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"TLS y APIs bajo tu nombre"}</td>
            <td className="py-2">{"Curva de aprendizaje DNS/hosting"}</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        {
          "Startup bogotana registra empresatech.co en NIC Colombia, apunta nameservers a Cloudflare y publica A → IP del hosting y MX → Google Workspace."
        }
      </p>
      <Callout title="Caso real: fintech en Bogotá">
        {
          "Una fintech registra pagosrapidos.co en NIC Colombia, delega NS a Cloudflare, publica A al VPS en AWS, MX a Google Workspace y TXT SPF. Tras 2 h el sitio resuelve globalmente; el equipo confirma TLS con DevTools → Red."
        }
      </Callout>
      <Callout title="Documentar la jerarquía del dominio">
        {
          "Al definir la presencia web de una empresa, documenta el FQDN completo (ej. www.innovatech.co), la finalidad de cada subdominio (web, correo, portal) y la estructura jerárquica: subdominio → SLD → TLD. Esta documentación es la base para configurar DNS y certificados TLS."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: renovación automática; WHOIS privacy; registrar variantes críticas de marca."}</li>
        <li>
          {
            "Mal uso: comprar dominio y no configurar NS; usar .com cuando el mercado es 100 % Colombia y .co refuerza confianza local."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"WHOIS con email personal del fundador:"}</strong>
          {" Dueño de restaurante en Cartagena usó Gmail en WHOIS; recibió spear-phishing «renueva tu dominio» y casi transfirió el .co. Corrección: privacy WHOIS y contacto técnico corporativo."}
        </li>
        <li>
          <strong>{"No registrar typos de marca:"}</strong>
          {" Competidor registró innovatech-co.com y redirigió tráfico de clientes confundidos. Corrección: variantes críticas y monitoreo de dominios similares."}
        </li>
        <li>
          <strong>{"Comprar dominio y olvidar NS:"}</strong>
          {" Empresa pagó .com.co pero nunca apuntó NS al hosting; sitio en blanco 3 meses post-lanzamiento. Corrección: checklist post-compra: NS, A, MX, verificación dig."}
        </li>
      </ul>


      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--color-primary)]">
        {"Subdominio: separar servicios"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un subdominio es un prefijo bajo un dominio registrado que forma un FQDN independiente en DNS (api.ejemplo.co, mail.ejemplo.co). Se crea con un registro (típicamente A, AAAA o CNAME) en la zona del dominio padre."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Separa servicios sin comprar dominios nuevos: API, blog, staging, correo, CDN. Permite certificados TLS por subdominio y políticas de firewall distintas."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "El administrador añade en la zona ejemplo.co un registro para el host api → IP o alias. Los resolvers consultan api.ejemplo.co como cualquier otro nombre."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <CodeFiddle
        language="text"
        title="Anatomía de subdominio"
        code={`[subdominio].[SLD].[TLD]
     api  . ejemplo . co

Puede haber varios niveles: v2.api.ejemplo.co`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes (usos habituales)"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Subdominio"}</th>
            <th className="py-2 text-left font-semibold">{"Uso típico"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"www"}</td>
            <td className="py-2">{"Sitio web principal (a menudo CNAME al apex o CDN)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"api"}</td>
            <td className="py-2">{"Backend REST/GraphQL"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"mail"}</td>
            <td className="py-2">{"Webmail o puntero MX auxiliar"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"blog"}</td>
            <td className="py-2">{"CMS separado (WordPress, Ghost)"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"staging / dev"}</td>
            <td className="py-2">{"Entorno de pruebas"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Ventaja"}</th>
            <th className="py-2 text-left font-semibold">{"Desventaja"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Aislamiento de servicios y equipos"}</td>
            <td className="py-2">{"Más registros DNS que mantener"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Sin costo de dominio adicional"}</td>
            <td className="py-2">{"Certificados wildcard vs individuales"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Facilita blue/green y entornos"}</td>
            <td className="py-2">{"Subdominio mal configurado expone staging públicamente"}</td>
          </tr>
        </tbody>
      </table>
      <CodeFiddle
        language="dns"
        title="Registros A y CNAME de subdominios"
        code={`api.ejemplo.co.    300  IN  A      190.25.80.50
staging.ejemplo.co. 300  IN  CNAME  servidor-dev.hosting.com.`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: staging con autenticación o IP restringida; documentar qué subdominio apunta a qué servicio."}</li>
        <li>
          {
            "Mal uso: dejar staging.ejemplo.co indexable en Google con datos reales; CNAME en apex cuando el proveedor exige registro A/ALIAS."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Staging indexable con datos reales:"}</strong>
          {" E-commerce en Lima dejó staging.tienda.pe abierto; Google indexó precios de prueba y clientes compraron SKUs inexistentes. Corrección: noindex, auth básica o IP allowlist."}
        </li>
        <li>
          <strong>{"Wildcard *.dev sin control:"}</strong>
          {" Equipo creó *.dev.empresa.co apuntando a servidor de prueba expuesto; scanner encontró panel admin default. Corrección: subdominios explícitos, no wildcard en entornos no productivos."}
        </li>
        <li>
          <strong>{"Certificado solo en www:"}</strong>
          {" Usuarios que escribían tienda.com.co (apex) veían HTTP sin redirect. Corrección: cert SAN con apex+www y redirect 301 unificado."}
        </li>
      </ul>

      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué una startup en Colombia podría elegir .co en lugar de .com? Menciona al menos dos razones."
          hints={["Confianza local", "Disponibilidad de nombre", "SEO regional", "NIC Colombia"]}
          expectedKeywords={["confianza", "local", "disponibilidad"]}
          successMessage="Bien. El ccTLD .co refuerza presencia local, puede mejorar disponibilidad de nombre y SEO regional."
        />
      </div>
    </section>
  );
}
