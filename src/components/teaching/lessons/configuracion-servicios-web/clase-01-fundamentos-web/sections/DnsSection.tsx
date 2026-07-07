import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";
import { Callout } from "@/components/teaching/Callout";

export function DnsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DNS: resolución de nombres"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"DNS: traduce nombres de dominio a IP y otros datos (correo, verificación)."}</li>
        <li>{"Jerarquía: Raíz (.) → TLD (.co) → dominio registrado → subdominio."}</li>
        <li>{"13 servidores raíz: delegan a TLD; no resuelven el A final."}</li>
        <li>{"Resolver recursivo: hace el trabajo de búsqueda por el cliente (ISP, 1.1.1.1, 8.8.8.8)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El DNS es el sistema distribuido que traduce nombres de dominio legibles (www.ejemplo.co) a direcciones IP (190.25.80.42) y otros datos (correo, verificación, delegación). Es la «guía telefónica» de Internet."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Los humanos memorizan dominios; las redes enrutan por IP. Sin DNS, cada cambio de servidor obligaría a actualizar IPs en todos los clientes. DNS permite mover servicios entre hosts manteniendo el mismo nombre."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — flujo paso a paso"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {"Usuario escribe https://www.tienda.ejemplo.co/productos en el navegador."}
        </li>
        <li>
          {
            "Navegador consulta su caché DNS local; si no hay entrada, pregunta al resolver del SO (o DoH/DoT según configuración)."
          }
        </li>
        <li>
          {
            "Resolver recursivo (p. ej. del ISP o 1.1.1.1) busca la respuesta: consulta servidor raíz (.) → delegación a TLD (.co) → nameservers de ejemplo.co → registro A (o AAAA) de www.tienda.ejemplo.co."
          }
        </li>
        <li>{"Respuesta A: www.tienda.ejemplo.co → 190.25.80.42."}</li>
        <li>{"Navegador abre TCP/TLS a esa IP y envía GET /productos."}</li>
      </ol>
      <p className="my-4">
        {
          "Los 13 servidores raíz DNS (letras A–M, operados por distintas organizaciones) son el punto de entrada de la jerarquía DNS global. No resuelven dominios completos; delegan a TLD. Ejemplos: a.root-servers.net, b.root-servers.net, … m.root-servers.net. En la práctica, anycast replica estos servidores en cientos de ubicaciones."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <p className="my-4">
        {
          "Jerarquía: Raíz (.) → TLD (.co, .com) → Dominio registrado (ejemplo.co) → Subdominio (www, api, mail). Cada zona autoritativa publica registros en archivos o paneles DNS."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Rol"}</th>
            <th className="py-2 text-left font-semibold">{"Descripción"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Resolver recursivo"}</td>
            <td className="py-2">{"Hace el trabajo de búsqueda por el cliente (ISP, Cloudflare 1.1.1.1, Google 8.8.8.8)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Servidor autoritativo"}</td>
            <td className="py-2">{"Tiene la «verdad» de una zona (ejemplo.co)"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"Caché DNS"}</td>
            <td className="py-2">{"Almacena respuestas con TTL para reducir latencia"}</td>
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
            <td className="py-2 pr-4">{"Nombres estables aunque cambie la IP"}</td>
            <td className="py-2">{"Propagación y caché pueden tardar (minutos a 48 h)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Delegación por subdominio y servicio"}</td>
            <td className="py-2">{"Configuración incorrecta tumba sitio y correo"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Estándar universal"}</td>
            <td className="py-2">{"Vector de ataque (DNS spoofing, hijacking) si no hay DNSSEC"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Visual — flujo DNS"}</h3>
      <StepReveal
        title="Resolución DNS paso a paso"
        steps={[
          {
            title: "1. URL en el navegador",
            content: "El usuario escribe https://www.tienda.ejemplo.co/productos.",
          },
          {
            title: "2. Caché local",
            content:
              "El navegador y el SO consultan caché DNS; si no hay entrada, envían consulta al resolver.",
          },
          {
            title: "3. Resolver recursivo",
            content: "El resolver (ISP o 1.1.1.1) inicia la búsqueda en la jerarquía global.",
          },
          {
            title: "4. Delegaciones",
            content: "Raíz → TLD (.co) → nameservers de ejemplo.co.",
          },
          {
            title: "5. Respuesta A/AAAA",
            content: "El NS autoritativo devuelve la IP (ej. 190.25.80.42).",
          },
          {
            title: "6. Conexión HTTP",
            content: "El navegador abre TCP/TLS a esa IP y envía GET /productos.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`sequenceDiagram
  participant U as Usuario
  participant B as Navegador
  participant R as Resolver (ISP/1.1.1.1)
  participant Root as Raíz DNS (.)
  participant TLD as TLD (.co)
  participant NS as NS autoritativo (ejemplo.co)
  participant S as Servidor web

  U->>B: https://www.ejemplo.co
  B->>R: ¿IP de www.ejemplo.co?
  R->>Root: Consulta www.ejemplo.co
  Root-->>R: Delega a .co
  R->>TLD: Consulta ejemplo.co
  TLD-->>R: NS ns1.cloudflare.com
  R->>NS: Consulta www.ejemplo.co A
  NS-->>R: 190.25.80.42
  R-->>B: A = 190.25.80.42
  B->>S: TCP 443 + TLS + GET /
  S-->>B: HTTP 200 HTML`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto — consultas con dig"}</h3>
      <CodeFiddle
        language="bash"
        title="Consultas DNS con dig"
        code={`dig www.ejemplo.co A +short
# 190.25.80.42

dig ejemplo.co NS +short
# ns1.proveedor-dns.net.
# ns2.proveedor-dns.net.`}
      />
      <Callout title="Zona DNS corporativa completa">
        {
          "Una configuración típica incluye A para www y mail, CNAME para alias (portal → www), MX con prioridad hacia mail.empresa.co y TXT para SPF. Documenta cada registro en una tabla con tipo, nombre, valor y propósito."
        }
      </Callout>
      <CodeFiddle
        language="dns"
        title="Registros A, CNAME, MX y TXT — ejemplo PyME"
        code={`www.innovatech.co.     IN  A      190.25.80.20
mail.innovatech.co.    IN  A      190.25.80.30
portal.innovatech.co.  IN  CNAME  www.innovatech.co.
innovatech.co.         IN  MX     10 mail.innovatech.co.
innovatech.co.         IN  TXT    "v=spf1 mx ~all"`}
      />
      <p className="my-4">{"Petición HTTP tras resolución DNS:"}</p>
      <CodeFiddle
        language="http"
        title="Petición HTTP tras resolución DNS"
        code={`GET /productos HTTP/1.1
Host: www.ejemplo.co
User-Agent: Mozilla/5.0
Accept: text/html`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Buen uso: entender TTL antes de migrar; verificar con dig/nslookup desde varias redes; delegar nameservers al proveedor correcto tras comprar dominio."
          }
        </li>
        <li>
          {
            "Mal uso: editar registro A y esperar cambio instantáneo global; duplicar registros MX en dos proveedores; olvidar que el navegador también cachea DNS."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Resolver local cacheado tras incidente:"}</strong>
          {" Tras cambiar A por ataque, soporte en Bogotá seguía viendo sitio comprometido por caché del ISP. Corrección: dig @8.8.8.8 y whatsmydns.net antes de cerrar ticket."}
        </li>
        <li>
          <strong>{"Split-horizon no documentado:"}</strong>
          {" Intranet en Medellín resolvía portal.empresa.local distinto que Internet; dev remoto no reproducía bug. Corrección: documentar vistas interna/externa y hosts de prueba."}
        </li>
        <li>
          <strong>{"Delegación NS parcial:"}</strong>
          {" Solo 2 de 4 NS actualizados al migrar; resolutores aleatorios fallaban. Corrección: cambiar todos los NS en registrar y verificar propagación completa."}
        </li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Ordena los pasos del flujo DNS: (a) consulta TLD .co, (b) navegador abre TCP a la IP, (c) resolver pregunta a raíz, (d) usuario escribe URL, (e) respuesta A devuelta, (f) consulta NS de empresa.co."
        hints={["Empieza por el usuario", "Termina con TCP", "Raíz antes que TLD"]}
        expectedKeywords={["d", "c", "a", "f", "e", "b"]}
        successMessage="Correcto: d → c → a → f → e → b. Delegación jerárquica antes de la conexión TCP."
      />
    </section>
  );
}
