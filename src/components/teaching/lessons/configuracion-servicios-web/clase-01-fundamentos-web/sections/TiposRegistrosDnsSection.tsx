import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function TiposRegistrosDnsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tipos de registro DNS: A, AAAA, CNAME y más"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Cada registro DNS es una fila en la zona: nombre + tipo + valor + TTL."}</li>
        <li>{"A y AAAA: nombre → dirección IP (IPv4 / IPv6)."}</li>
        <li>{"CNAME: alias que apunta a otro nombre (no a IP directamente)."}</li>
        <li>{"MX y TXT: correo y verificaciones (SPF, DKIM, dominio verificado)."}</li>
        <li>{"NS y SOA: delegación y metadatos de la zona."}</li>
        <li>{"Otros: PTR (inverso), SRV (servicios), CAA (certificados), DNSSEC."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un registro DNS es una entrada en la zona de un dominio que asocia un nombre (host) con un tipo de dato y un valor. El resolver pregunta por tipo concreto: una consulta A devuelve IPv4; una MX devuelve servidores de correo; una TXT devuelve texto libre. Sin registros, el dominio existe en el registrador pero no «responde» en Internet."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Cada servicio que publicas — sitio web, API, correo, CDN, certificado TLS — depende de uno o más registros correctos. Confundir A con CNAME, duplicar MX o poner una IP privada en un A público son errores que tumban producción. Conocer los tipos te permite leer un panel DNS, interpretar dig y diseñar una zona coherente."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anatomía de un registro"}</h3>
      <CodeFiddle
        language="dns"
        title="Formato estándar (zona BIND / panel DNS)"
        code={`nombre    TTL    IN    TIPO    valor
www       3600   IN    A       190.25.80.42
@         3600   IN    MX      10 mail.ejemplo.co.
blog      3600   IN    CNAME   hosting.ejemplo.net.`}
      />
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Nombre (host):"}</strong>
          {" @ = apex (ejemplo.co); www = subdominio www.ejemplo.co."}
        </li>
        <li>
          <strong>{"TTL:"}</strong>
          {" segundos que los resolvers cachean la respuesta (300–86400 típico)."}
        </li>
        <li>
          <strong>{"IN:"}</strong>
          {" clase Internet (casi siempre)."}
        </li>
        <li>
          <strong>{"Tipo:"}</strong>
          {" A, AAAA, CNAME, MX, TXT, NS, SOA, etc."}
        </li>
        <li>
          <strong>{"Valor:"}</strong>
          {" IP, nombre destino, texto entre comillas, prioridad+host en MX."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Registros esenciales (producción web y correo)"}</h3>
      <CompareTable
        headers={["Tipo", "Qué almacena", "Ejemplo de valor", "Cuándo usarlo"]}
        rows={[
          [
            "A",
            "Nombre → IPv4 (32 bits)",
            "190.25.80.42",
            "Sitio web, API, servidor con IP fija en apex o subdominio",
          ],
          [
            "AAAA",
            "Nombre → IPv6 (128 bits)",
            "2001:db8::1",
            "Dual stack; obligatorio si solo publicas en IPv6",
          ],
          [
            "CNAME",
            "Alias → otro nombre DNS",
            "cdn.proveedor.com.",
            "www, blog, staging; apunta a hosting/CDN externo",
          ],
          [
            "MX",
            "Servidor de correo (prioridad + host)",
            "10 aspmx.l.google.com.",
            "Recibir email en @ejemplo.co (Google, Microsoft, propio)",
          ],
          [
            "TXT",
            "Texto libre (hasta ~255 chars por string)",
            '"v=spf1 include:_spf.google.com ~all"',
            "SPF, DKIM, verificación de dominio, políticas",
          ],
          [
            "NS",
            "Nameserver autoritativo de la zona",
            "ada.ns.cloudflare.com.",
            "Delegar la zona a Cloudflare, Route53, hosting",
          ],
          [
            "SOA",
            "Metadatos de zona (serial, timers)",
            "ns1.host. admin.ejemplo.co. (serial …)",
            "Uno por zona; lo gestiona el proveedor DNS",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"A — dirección IPv4"}</h3>
      <p className="my-4">
        {
          "El registro A responde «¿qué IPv4 tiene este nombre?». Es el más usado para publicar sitios. El apex (ejemplo.co sin www) suele llevar un A directo a la IP del servidor o balanceador."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="Registros A"
        code={`ejemplo.co.       3600  IN  A  190.25.80.42
www.ejemplo.co.   3600  IN  A  190.25.80.42
api.ejemplo.co.   300   IN  A  190.25.80.50`}
      />
      <Callout title="Regla importante">
        {
          "Un CNAME no puede coexistir con otros registros en el mismo nombre. Por eso el apex (ejemplo.co) casi nunca usa CNAME estándar: usa A o un registro ALIAS/ANAME del proveedor (Cloudflare CNAME flattening, Route53 ALIAS)."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"AAAA — dirección IPv6"}</h3>
      <p className="my-4">
        {
          "Equivalente a A para IPv6. Si publicas solo A y el cliente es IPv6-only, no podrá conectar. En dual stack conviene A + AAAA para el mismo host."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="Registros AAAA"
        code={`ejemplo.co.       3600  IN  AAAA  2001:db8:85a3::8a2e:370:7334
www.ejemplo.co.   3600  IN  AAAA  2001:db8:85a3::8a2e:370:7334`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"CNAME — alias canónico"}</h3>
      <p className="my-4">
        {
          "CNAME dice «este nombre es un alias de otro». El resolver sigue la cadena hasta obtener un A o AAAA final. Útil cuando el destino cambia de IP sin que tú actualices cada subdominio (el proveedor actualiza su A)."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="CNAME típicos"
        code={`www.ejemplo.co.    3600  IN  CNAME  ejemplo.co.
blog.ejemplo.co.   3600  IN  CNAME  sites.github.io.
cdn.ejemplo.co.    300   IN  CNAME  d123.cloudfront.net.`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"MX y TXT — correo y autenticación"}</h3>
      <p className="my-4">
        {
          "MX indica dónde entregar el correo entrante para el dominio. El número menor es mayor prioridad (10 antes que 20). TXT almacena SPF (quién puede enviar en tu nombre), DKIM (firma criptográfica) y códigos de verificación de Google, Microsoft, etc."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="MX y TXT para Google Workspace"
        code={`ejemplo.co.  3600  IN  MX   1   aspmx.l.google.com.
ejemplo.co.  3600  IN  MX   5   alt1.aspmx.l.google.com.
ejemplo.co.  3600  IN  TXT      "v=spf1 include:_spf.google.com ~all"
google._domainkey.ejemplo.co.  IN  TXT  "v=DKIM1; k=rsa; p=MIGfMA0G..."`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"NS y SOA — delegación y autoridad"}</h3>
      <p className="my-4">
        {
          "NS delega la zona a los nameservers que tienen la «verdad» de tus registros. SOA define el servidor primario, email del administrador, serial de la zona (incrementa en cada cambio) y timers de refresco. En paneles como Cloudflare rara vez editas SOA manualmente."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="NS y SOA"
        code={`ejemplo.co.  86400  IN  NS   ns1.cloudflare.com.
ejemplo.co.  86400  IN  NS   ns2.cloudflare.com.
ejemplo.co.  3600   IN  SOA  ns1.cloudflare.com. dns.cloudflare.com. (
                              2025070601 ; serial (YYYYMMDDnn)
                              10000      ; refresh
                              2400       ; retry
                              604800     ; expire
                              3600 )     ; minimum TTL`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Otros registros que debes conocer"}</h3>
      <CompareTable
        headers={["Tipo", "Qué hace", "Uso típico"]}
        rows={[
          ["PTR", "IP → nombre (DNS inverso)", "Correo saliente: IP del servidor con PTR coherente evita spam"],
          ["SRV", "Puerto y host de un servicio", "_sip._tcp.ejemplo.co → VoIP, LDAP, XMPP"],
          ["CAA", "Qué CA puede emitir certificados", '0 issue "letsencrypt.org" — restringe emisión TLS'],
          ["NAPTR", "Reglas de reescritura / ENUM", "Telefonía VoIP y algunos esquemas URI"],
          ["CNAME flattening / ALIAS", "CNAME en apex (no estándar RFC)", "Cloudflare, Route53, DNSimple para apex sin A fija"],
          ["DNSKEY / DS / RRSIG", "Firma criptográfica DNSSEC", "Integridad DNS; lo activa el proveedor"],
        ]}
      />
      <CodeFiddle
        language="dns"
        title="PTR, SRV y CAA — ejemplos"
        code={`; PTR (zona inversa — la gestiona el ISP o cloud)
42.80.25.190.in-addr.arpa.  IN  PTR  mail.ejemplo.co.

; SRV — cliente SIP en puerto 5060
_sip._tcp.ejemplo.co.  3600  IN  SRV  10 60 5060 sip.ejemplo.co.

; CAA — solo Let's Encrypt puede emitir
ejemplo.co.  3600  IN  CAA  0 issue "letsencrypt.org"`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo elegir el tipo correcto"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Necesidad"}</th>
            <th className="py-2 text-left font-semibold">{"Registro"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Publicar sitio en IP conocida"}</td>
            <td className="py-2">{"A (y AAAA si hay IPv6)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Apuntar www a hosting que cambia IP"}</td>
            <td className="py-2">{"CNAME hacia el hostname del proveedor"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Recibir correo @dominio"}</td>
            <td className="py-2">{"MX + TXT (SPF/DKIM)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Verificar dominio en Google/Microsoft"}</td>
            <td className="py-2">{"TXT con el código que te dan"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Mover DNS a Cloudflare"}</td>
            <td className="py-2">{"Cambiar NS en el registrador"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Evitar certificados no autorizados"}</td>
            <td className="py-2">{"CAA restringiendo la CA"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Consultar cada tipo con dig"}</h3>
      <CodeFiddle
        language="bash"
        title="dig por tipo de registro"
        code={`dig ejemplo.co A +short
dig ejemplo.co AAAA +short
dig www.ejemplo.co CNAME +short
dig ejemplo.co MX +short
dig ejemplo.co TXT +short
dig ejemplo.co NS +short
dig ejemplo.co SOA +short
dig ejemplo.co CAA +short
dig _sip._tcp.ejemplo.co SRV +short`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {
            " A/AAAA con IP pública en registros públicos; CNAME solo en subdominios; un conjunto MX coherente; TXT SPF que incluye todos los emisores legítimos; documentar la zona en una tabla."
          }
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " 192.168.x.x en registro A público; CNAME en apex sin soporte ALIAS; cadena CNAME circular (a → b → a); MX a host sin registro A; olvidar el punto final en valores FQDN (sites.github.io. vs sites.github.io)."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"TXT SPF truncado en panel:"}</strong>
          {" PYME en Quito pegó un SPF de 450 caracteres; el panel DNS cortó el registro y Gmail marcó todo como spam. Corrección: simplificar includes o usar subdominio dedicado para envío."}
        </li>
        <li>
          <strong>{"PTR ignorado en servidor de correo:"}</strong>
          {" VPS en Miami enviaba facturas; Hotmail rechazaba por reverse DNS inexistente. Corrección: solicitar PTR al proveedor alineado con HELO del servidor SMTP."}
        </li>
        <li>
          <strong>{"CAA ausente y certificado falso:"}</strong>
          {" Atacante obtuvo cert Let's Encrypt en dominio sin CAA; phishing con candado válido una semana. Corrección: registro CAA limitando emisores autorizados."}
        </li>
        <li>
          <strong>{"AAAA sin A dual-stack:"}</strong>
          {" Solo registro AAAA en zona; clientes IPv4-only en interior de Colombia no resolvían. Corrección: publicar A y AAAA hasta confirmar soporte IPv6 end-to-end."}
        </li>
      </ul>

      <div className="my-8">
        <PracticeExercise
          prompt="Una startup en Medellín publica su API en api.startup.co con IP 190.85.10.20, su blog en blog.startup.co vía GitHub Pages (CNAME a startup.github.io) y correo con Google. ¿Qué registros necesitas como mínimo? Escribe tipo, nombre y valor para A, CNAME y MX."
          hints={[
            "api necesita A con la IPv4",
            "blog es CNAME, no A",
            "MX apunta a los servidores de Google con prioridad",
          ]}
          expectedKeywords={["A", "api", "CNAME", "blog", "MX"]}
          successMessage="Correcto. A para api.startup.co, CNAME blog → startup.github.io., MX hacia aspmx.l.google.com. (o similar). En la siguiente página verás cómo publicarlos en el panel DNS."
        />
      </div>
    </section>
  );
}
