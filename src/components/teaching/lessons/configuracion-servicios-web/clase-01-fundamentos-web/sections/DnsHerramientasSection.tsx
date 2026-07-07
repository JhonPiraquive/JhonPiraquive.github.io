import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function DnsHerramientasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herramientas DNS y zonas autoritativas"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Las herramientas de consulta DNS (`dig`, `nslookup`, `host`) permiten verificar qué responde un servidor de nombres sin depender del navegador. Una zona DNS primaria es el archivo o panel donde el administrador publica la «verdad» autoritativa de un dominio (registros A, MX, CNAME, TXT, NS)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Antes de culpar al hosting o al correo, debes confirmar que DNS resuelve correctamente. `dig` contra el resolver del sistema y contra el servidor autoritativo pueden dar respuestas distintas si hay caché o propagación pendiente. Documentar una zona primaria evita perder registros al migrar de proveedor."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Resolver recursivo vs servidor autoritativo"}</h3>
      <CompareTable
        headers={["Rol", "Quién lo usa", "Qué hace", "Ejemplo"]}
        rows={[
          [
            "Recursivo",
            "Cliente (PC, móvil)",
            "Busca la respuesta completa en la jerarquía DNS y cachea con TTL",
            "Resolver del ISP, 1.1.1.1, 8.8.8.8",
          ],
          [
            "Autoritativo",
            "Dueño de la zona",
            "Responde con los registros publicados en la zona primaria",
            "ns1.cloudflare.com para ejemplo.co",
          ],
        ]}
      />
      <p className="my-4">
        {
          "Cuando ejecutas `dig www.ejemplo.co` sin `@servidor`, consultas al resolver recursivo de tu sistema. Cuando ejecutas `dig @ns1.proveedor.com www.ejemplo.co A`, consultas directamente al autoritativo — útil para verificar cambios antes de que se propaguen."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Zona DNS primaria"}</h3>
      <p className="my-4">
        {
          "Una zona primaria (Primary zone) contiene todos los registros de un dominio o subdominio delegado. El administrador crea la zona en el panel DNS (Cloudflare, Route53, Technitium, BIND) y publica registros mínimos: NS, SOA, A/CNAME para web, MX + A para `mail`, TXT para SPF o verificación."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="Zona primaria mínima — empresa ficticia"
        code={`$ORIGIN innovatech.co.
@       3600  IN  SOA   ns.innovatech.co. admin.innovatech.co. (
                        2026070601 ; serial (YYYYMMDDnn)
                        7200       ; refresh
                        3600       ; retry
                        1209600    ; expire
                        3600 )     ; minimum TTL
@       3600  IN  NS    ns.innovatech.co.
ns      3600  IN  A     190.25.80.10
www     3600  IN  A     190.25.80.20
portal  3600  IN  CNAME www.innovatech.co.
mail    3600  IN  A     190.25.80.30
@       3600  IN  MX    10 mail.innovatech.co.
@       3600  IN  TXT   "v=spf1 mx ~all"`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto — dig y nslookup"}</h3>
      <CodeFiddle
        language="bash"
        title="Consultas con dig"
        code={`# Resolver del sistema (recursivo)
dig www.innovatech.co A +short
dig innovatech.co MX +short

# Servidor autoritativo directo
dig @ns.innovatech.co www.innovatech.co A

# Registro CNAME completo (sin +short)
dig portal.innovatech.co CNAME`}
      />
      <CodeFiddle
        language="bash"
        title="Consultas con nslookup (Windows/Linux)"
        code={`nslookup www.innovatech.co
nslookup -type=MX innovatech.co
nslookup -type=TXT innovatech.co`}
      />
      <Callout title="Diferencia práctica">
        {
          "`dig @127.0.0.1` consulta un DNS local en tu máquina; el navegador usa el resolver del sistema. Si `dig @servidor-local` responde bien pero el navegador falla con DNS_PROBE, el problema está en la resolución del cliente, no en la zona primaria."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Documentar registros DNS"}</h3>
      <p className="my-4">
        {
          "Toda configuración DNS debe documentarse en una tabla con: tipo, nombre (host), valor, TTL y propósito. Esto facilita auditorías, migraciones y diagnóstico cuando un servicio deja de responder."
        }
      </p>
      <CompareTable
        headers={["Tipo", "Nombre", "Valor", "Función"]}
        rows={[
          ["A", "www", "190.25.80.20", "IP del sitio web"],
          ["A", "mail", "190.25.80.30", "IP del servidor de correo"],
          ["CNAME", "portal", "www.innovatech.co.", "Alias al sitio principal"],
          ["MX", "@", "10 mail.innovatech.co.", "Entrega de correo entrante"],
          ["TXT", "@", "v=spf1 mx ~all", "Servidores autorizados para enviar correo"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Buen uso: comparar respuesta del recursivo y del autoritativo; incrementar serial SOA al cambiar zona; guardar tabla DNS en wiki o repo."
          }
        </li>
        <li>
          {
            "Mal uso: confiar solo en el panel sin verificar con `dig`; olvidar el punto final en CNAME (`www.ejemplo.co.`); mezclar registros de dos proveedores MX activos."
          }
        </li>
      </ul>

      <PracticeExercise
        prompt="¿Por qué `dig @ns1.proveedor.com` puede devolver una IP distinta a `dig www.ejemplo.co` sin @? Menciona caché y TTL."
        hints={["Uno es autoritativo, otro recursivo", "El recursivo cachea respuestas"]}
        expectedKeywords={["caché", "TTL", "recursivo", "autoritativo"]}
        successMessage="Correcto. El recursivo puede devolver una respuesta cacheada hasta que expire el TTL; el autoritativo muestra el valor actual de la zona."
      />
    </section>
  );
}
