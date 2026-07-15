import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ConfigurarDominioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Configurar dominio: NS y registros DNS"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Nameservers (NS): delegan la zona DNS a un proveedor autoritativo."}</li>
        <li>{"Registros A/AAAA: nombre → IP."}</li>
        <li>{"CNAME: alias a otro nombre."}</li>
        <li>{"MX / TXT: correo y verificaciones (SPF, DKIM)."}</li>
        <li>{"SOA: metadatos de la zona (serial, TTL mínimo)."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental de la configuración de dominio"
        chart={`mindmap
  root((Configurar dominio))
    Delegación
      Nameservers
      Proveedor autoritativo
    Web
      A
      AAAA
      CNAME
    Correo
      MX
      TXT
        SPF
        DKIM
    Zona
      SOA
      Serial
      TTL`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Configurar un dominio es delegar la zona DNS a uno o más nameservers (NS) y publicar registros que definen IP, correo, alias y metadatos. Es el puente entre el dominio comprado en el registrador y los servicios reales (web, email, APIs)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin NS y registros correctos, el dominio no resuelve, el correo rebota y los certificados TLS fallan. Es la primera tarea tras registrar un dominio y antes de ir a producción."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"En el registrador, cambias los NS al proveedor DNS (Cloudflare, Route53, panel del hosting)."}</li>
        <li>{"Esperas propagación (TTL y caché global, típicamente minutos a 48 h)."}</li>
        <li>{"En el panel DNS autoritativo creas registros."}</li>
        <li>{"Verificas con dig y pruebas de navegador/correo."}</li>
      </ol>
      <p className="my-4">
        {
          "En la página anterior repasaste cada tipo de registro (A, AAAA, CNAME, MX, TXT, NS, SOA, PTR, SRV, CAA y más). Aquí verás cómo delegar la zona y publicar esos registros en un panel DNS real."
        }
      </p>
      <CodeFiddle
        language="dns"
        title="Nameservers en Cloudflare"
        code={`ejemplo.co.  NS  ada.ns.cloudflare.com.
ejemplo.co.  NS  bob.ns.cloudflare.com.`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estrategias de delegación"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Estrategia"}</th>
            <th className="py-2 text-left font-semibold">{"Descripción"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"NS en hosting compartido"}</td>
            <td className="py-2">{"Simple para sitio único; menos flexible"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"NS en Cloudflare / Route53"}</td>
            <td className="py-2">{"CDN, DDoS, API DNS, múltiples servicios"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"DNS en registrador"}</td>
            <td className="py-2">{"Válido para dominios parking; limitado para producción"}</td>
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
            <td className="py-2 pr-4">{"Control granular por servicio"}</td>
            <td className="py-2">{"Errores de tipeo afectan producción"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Cambiar IP sin cambiar dominio"}</td>
            <td className="py-2">{"Propagación no instantánea"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"TXT para seguridad de correo y verificación"}</td>
            <td className="py-2">{"Curva de aprendizaje MX/SPF/DKIM"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Zona mínima de producción"}</h3>
      <CodeFiddle
        language="dns"
        title="Zona mínima de producción"
        code={`; Apex y web
ejemplo.co.       3600  IN  A      190.25.80.42
www.ejemplo.co.   3600  IN  CNAME  ejemplo.co.

; Correo Google Workspace
ejemplo.co.       3600  IN  MX  1  aspmx.l.google.com.
ejemplo.co.       3600  IN  TXT     "v=spf1 include:_spf.google.com ~all"

; API en subdominio
api.ejemplo.co.   300   IN  A      190.25.80.50`}
      />
      <CodeFiddle
        language="dns"
        title="Zona BIND con SOA"
        code={`$ORIGIN ejemplo.co.
@       3600  IN  SOA   ns1.cloudflare.com. admin.ejemplo.co. (
                        2025062301 ; serial
                        7200       ; refresh
                        3600       ; retry
                        1209600    ; expire
                        3600 )     ; minimum TTL
@       3600  IN  NS    ns1.cloudflare.com.
@       3600  IN  NS    ns2.cloudflare.com.
@       3600  IN  A     190.25.80.42
www     3600  IN  CNAME @
api     300   IN  A     190.25.80.50
@       3600  IN  MX    10 aspmx.l.google.com.
@       3600  IN  TXT   "v=spf1 include:_spf.google.com ~all"`}
      />
      <CodeFiddle
        language="bash"
        title="Verificación con dig"
        code={`dig ejemplo.co A +short
dig ejemplo.co AAAA +short
dig ejemplo.co MX +short
dig www.ejemplo.co CNAME +short
dig ejemplo.co NS +short
dig ejemplo.co SOA +short`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: TTL bajo (300 s) antes de migración; un solo proveedor autoritativo para MX; documentar zona en repo o wiki."}</li>
        <li>
          {
            "Mal uso: MX duplicados en dos hosts distintos; CNAME en apex cuando no está soportado; olvidar actualizar A al cambiar de hosting."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Dominio sin renovación automática:"}</strong>
          {" Una ferretería en Pereira dejó vencer el .com.co durante vacaciones. El sitio y el correo @dominio quedaron offline 5 días; un competidor registró variante similar. Corrección: auto-renovación en NIC/registrar y alertas 60 días antes."}
        </li>
        <li>
          <strong>{"MX duplicados tras migrar correo:"}</strong>
          {" Consultora en Medellín añadió MX de Google pero no eliminó los del hosting viejo. Cotizaciones a ventas@ se perdían aleatoriamente durante dos semanas. Corrección: un solo par de MX activo; verificar con dig MX."}
        </li>
        <li>
          <strong>{"CNAME en apex sin ALIAS:"}</strong>
          {" Startup en Bogotá apuntó el dominio raíz con CNAME al CDN; resolución intermitente según el resolver. Corrección: registro A/ALIAS en apex y CNAME solo en subdominios."}
        </li>
        <li>
          <strong>{"TTL alto el día del corte:"}</strong>
          {" Migración de hosting un viernes con TTL 86400 s: usuarios en Cali vieron IP antigua hasta el lunes. Corrección: bajar TTL a 300 s 48 h antes del cambio de registro A."}
        </li>
      </ul>

      <Callout title="IP dinámica vs fija para cámaras IP">
        {
          "Una PyME instala 8 cámaras con app que exige IP fija del NVR. Con DHCP dinámico, el port forwarding deja de funcionar tras reinicio. Contratan IP fija con el ISP, reservan 192.168.1.100 en el router y actualizan el registro A de cctv.empresa.co a la nueva IP pública."
        }
      </Callout>
      <div className="my-8">
        <PracticeExercise
          prompt="Escribe el registro CNAME para que blog.ejemplo.co apunte a sites.github.io. y un TXT de verificación google-site-verification=abc123."
          hints={["CNAME termina en punto", "TXT entre comillas", "Host blog en la zona ejemplo.co"]}
          expectedKeywords={["CNAME", "TXT", "blog.ejemplo.co"]}
          successMessage="Correcto. CNAME blog.ejemplo.co. IN CNAME sites.github.io. y TXT con el valor de verificación."
        />
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores frecuentes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Culpar al servidor sin revisar caché del navegador: recarga forzada o ventana privada antes de escalar."}</li>
        <li>{"Extensiones que bloquean scripts o ads rompen sitios: probar sin extensiones."}</li>
        <li>{"Confundir IP privada con pública: 192.168.x.x no es alcanzable desde Internet."}</li>
        <li>{"Ignorar propagación DNS: tras cambiar A o NS, esperar según TTL; verificar con dig."}</li>
        <li>{"MX duplicados o contradictorios: correo repartido entre dos proveedores sin migración planificada."}</li>
        <li>{"CNAME mal aplicado: CNAME en apex donde el proveedor no ofrece ALIAS/ANAME."}</li>
        <li>{"No renovar dominio: sitio y correo caen; riesgo de cybersquatting."}</li>
        <li>{"Subdominio staging público sin protección: datos de prueba indexados o atacables."}</li>
      </ul>
    </section>
  );
}
