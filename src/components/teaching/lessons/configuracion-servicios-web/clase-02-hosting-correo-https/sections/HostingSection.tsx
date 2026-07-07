import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function HostingSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Hosting: alojamiento web"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Hosting (alojamiento web) es un servicio que provee espacio en un servidor conectado a Internet 24/7 para almacenar y servir los archivos, bases de datos y configuraciones de un sitio web. El proveedor mantiene hardware, red, energía y —según el plan— panel de control, backups y certificados."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin hosting, los archivos de tu proyecto solo existen en tu laptop: nadie en Internet puede acceder a ellos de forma estable. El hosting es el paso operativo que convierte un dominio (resuelto por DNS en la clase anterior) en un sitio accesible mundialmente. Para equipos en LATAM, elegir región de datacenter (Bogotá, São Paulo, Miami) impacta latencia percibida y costo en pesos o dólares."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">{"El flujo típico de publicación sigue cinco pasos encadenados:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Contratas un plan y recibes IP o nameservers del proveedor."}</li>
        <li>
          {
            "Configuras DNS: registro A (o AAAA) del dominio apunta a la IP del hosting, o delegas NS al proveedor."
          }
        </li>
        <li>{"Subes archivos (FTP/SFTP, panel, Git deploy) y creas la base de datos si aplica."}</li>
        <li>{"El servidor web (Nginx, Apache, LiteSpeed) escucha en puertos 80/443 y responde peticiones HTTP/HTTPS."}</li>
        <li>{"Activas TLS y optimizas (CDN, compresión, caché) según tráfico."}</li>
      </ol>

      <StepReveal
        title="Despliegue en hosting"
        steps={[
          {
            title: "1. Contratar plan",
            content:
              "Recibes IP pública o nameservers del proveedor. Elige región cercana a tu audiencia (Bogotá, Miami, São Paulo).",
          },
          {
            title: "2. Configurar DNS",
            content: "Registro A/AAAA apunta al hosting, o delegas NS al proveedor para que él gestione la zona.",
          },
          {
            title: "3. Subir archivos",
            content: "SFTP, panel o Git deploy. Nunca FTP plano en redes públicas.",
          },
          {
            title: "4. Base de datos",
            content: "Crear MySQL/PostgreSQL en cPanel o por CLI si el stack lo requiere (WordPress, Laravel, etc.).",
          },
          {
            title: "5. Activar HTTPS",
            content: "Let's Encrypt desde panel o certbot en VPS. Forzar redirect HTTP→HTTPS.",
          },
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <p className="my-4">
        {"Un despliegue típico combina varios componentes que el proveedor —o tú en un VPS— administra:"}
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Componente"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Función"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Servidor web"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Sirve HTML, estáticos, proxy a apps"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Runtime"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"PHP, Node.js, Python según stack"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Base de datos"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"MySQL, PostgreSQL, MongoDB"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Panel"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"cPanel, Plesk, o solo SSH"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Almacenamiento"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"SSD/NVMe, cuota de disco"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Red"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Ancho de banda, IP pública, firewall"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4">
        {
          "Cada pieza cumple un rol distinto: el servidor web atiende peticiones; el runtime ejecuta código dinámico; la base de datos persiste datos; el panel simplifica tareas repetitivas para quien no administra por terminal."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas (visión general)"}</h3>
      <p className="my-4">
        {
          "Contratar hosting evita mantener hardware propio y ofrece disponibilidad 24/7 con paneles que simplifican SSL y correo. El costo es recurrente y existe dependencia del proveedor; los planes baratos comparten recursos y pueden ralentizar en picos. Escalar es posible (VPS/nube), pero una migración mal hecha puede romper DNS, correo o certificados."
        }
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Ventaja"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Desventaja"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Disponibilidad 24/7 sin mantener hardware propio"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Costo recurrente y dependencia del proveedor"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Paneles que simplifican SSL y correo"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Planes baratos pueden compartir recursos y ralentizar picos"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Escalado posible (VPS/nube)"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Migrar mal puede romper DNS, correo o certificados"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Tienda en Medellín contrata hosting en proveedor colombiano con datacenter en Bogotá. Apunta tienda.co (registro A) a 190.x.x.x, sube WordPress por SFTP, crea MySQL en cPanel y activa Let's Encrypt desde el panel. Usuarios en Antioquia cargan la página en ~40 ms frente a ~180 ms si el servidor estuviera en Europa."
        }
      </p>
      <CodeFiddle
        language="bash"
        title="Subida por SFTP"
        code={`sftp usuario@190.48.xxx.xxx
# put -r ./dist/* /var/www/tienda.com.co/public_html/`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
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
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Backups automáticos probados con restauración"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Sin backups; confiar solo en el disco del hosting"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"SSD, SSL activo, región cercana a la audiencia"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Elegir solo por precio más bajo ignorando latencia"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Credenciales SFTP/SSH fuertes, no FTP plano"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Subir archivos por FTP sin cifrar en redes públicas"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Monitorear espacio en disco y límites de BD"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Llenar disco con logs sin rotación"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Plan compartido para Black Friday:"}</strong>
          {" Tienda en Cali colapsó con 500 visitas concurrentes en hosting $3/mes. Corrección: dimensionar plan o VPS antes de campañas; prueba de carga en staging."}
        </li>
        <li>
          <strong>{"Sin backup antes de actualizar WordPress:"}</strong>
          {" Plugin rompió sitio en producción; backup del hosting era semanal y perdieron 4 días de pedidos. Corrección: backup on-demand + staging para updates."}
        </li>
        <li>
          <strong>{"Credenciales cPanel en email sin cifrar:"}</strong>
          {" Ex empleado accedió con password compartido por WhatsApp. Corrección: usuarios individuales, MFA, rotación al offboarding."}
        </li>
      </ul>

      <Callout title="Publicación en panel de hosting">
        {
          "En un panel Nginx UI, cPanel o similar creas index.html con empresa ficticia (nombre, misión, contacto), configuras el root del sitio y verificas con curl o navegador. Un 403 suele indicar root vacío; DNS_PROBE indica que el cliente no resuelve el nombre — revisa /etc/hosts o el DNS del sistema."
        }
      </Callout>

      <h3 className="mt-8 mb-2 text-xl font-semibold">{"Tipos de hosting"}</h3>
      <p className="my-4">
        {
          "Clasificación según cuántos recursos compartes, nivel de control del sistema operativo y modelo de facturación/escala. No existe un tipo «mejor» en abstracto: la elección depende del tráfico, presupuesto y habilidades del equipo."
        }
      </p>
      <p className="my-4">
        {
          "Elegir mal el tipo genera sobrecosto (VPS para un blog estático) o incidentes (compartido para e-commerce con picos de Black Friday). La decisión combina presupuesto, tráfico esperado, compliance y capacidad de administración del equipo."
        }
      </p>

      <MermaidDiagram
        chart={`flowchart TD
  START[¿Nuevo proyecto web?] --> Q1{¿Tráfico bajo y sin root?}
  Q1 -->|Sí| SHARED[Hosting compartido]
  Q1 -->|No| Q2{¿Necesitas root o stack custom?}
  Q2 -->|Sí, tráfico medio| VPS[VPS]
  Q2 -->|Alto tráfico / compliance| DED[Dedicado]
  Q2 -->|Picos impredecibles / auto-scale| CLOUD[Nube IaaS/PaaS]`}
      />

      <h4 className="mt-6 mb-2 font-semibold">{"Hosting compartido"}</h4>
      <p className="my-4">
        {
          "Varios sitios coexisten en la misma máquina física. Es muy económico (USD 3–15/mes en LATAM), incluye panel listo (correo, SSL, BD en clics) e ideal para WordPress, landing y portafolios. La contrapartida: CPU/RAM/disco compartidos, sin acceso root, versiones de PHP/Node fijas y un vecino con tráfico alto puede afectar el rendimiento."
        }
      </p>
      <p className="my-4 font-medium">{"Ideal para: blogs, ONG, sitios informativos, MVPs con poco tráfico."}</p>

      <h4 className="mt-6 mb-2 font-semibold">{"VPS (Virtual Private Server)"}</h4>
      <p className="my-4">
        {
          "Recursos garantizados (vCPU, RAM), acceso root, libertad para instalar Nginx, Node o Docker. Requiere administrar SO, parches, firewall y backups; más caro que compartido (USD 10–50/mes). Escalado vertical manual al cambiar de plan."
        }
      </p>
      <p className="my-4 font-medium">{"Ideal para: APIs pequeñas, tiendas con tráfico medio, equipos que ya dominan SSH."}</p>

      <h4 className="mt-6 mb-2 font-semibold">{"Servidor dedicado"}</h4>
      <p className="my-4">
        {
          "Hardware físico exclusivo: máximo rendimiento y control, cumplimiento estricto de residencia de datos. Costo alto (cientos USD/mes), aprovisionamiento más lento y escalar implica comprar otra máquina."
        }
      </p>
      <p className="my-4 font-medium">
        {"Ideal para: alto tráfico, bases de datos pesadas, requisitos legales de datos en servidor propio."}
      </p>

      <h4 className="mt-6 mb-2 font-semibold">{"Nube (IaaS / PaaS)"}</h4>
      <p className="my-4">
        {
          "IaaS (AWS EC2, GCP Compute, Azure VM): VMs elásticas y snapshots; facturación por uso puede sorprender sin alertas. PaaS (Heroku, Railway, Vercel): deploy Git con menos operaciones; menos control del SO. Auto-scaling, balanceadores y CDN integrados; curva de aprendizaje y posible vendor lock-in. Regiones globales (p. ej. sa-east-1 São Paulo)."
        }
      </p>
      <p className="my-4 font-medium">
        {"Ideal para: startups con picos, SaaS, equipos que priorizan velocidad de deploy sobre costo fijo."}
      </p>

      <CompareTable
        headers={["Tipo", "Costo relativo", "Control", "Escala", "Ideal para"]}
        rows={[
          ["Compartido", "Muy bajo", "Panel, sin root", "Limitada", "Blog, ONG, MVP"],
          ["VPS", "Medio", "Root completo", "Vertical manual", "API, tienda mediana"],
          ["Dedicado", "Alto", "Hardware exclusivo", "Nueva máquina", "Alto tráfico, compliance"],
          ["Nube IaaS/PaaS", "Variable", "IaaS alto / PaaS medio", "Auto-scale", "Picos, SaaS, deploy rápido"],
        ]}
      />

      <p className="my-4">
        {
          "ONG en Bogotá con sitio informativo y 500 visitas/día → compartido + Cloudflare CDN gratis. Startup fintech en CDMX con API Node y picos → VPS o IaaS en región cercana con auto-scaling del balanceador."
        }
      </p>

      <Callout title="Caso real: tienda Medellín + Cloudflare">
        {
          "E-commerce de ropa usa hosting compartido en datacenter Bogotá. Campaña en Instagram satura ancho de banda con imágenes pesadas. Activan Cloudflare (plan free): CDN, compresión Brotli, SSL full strict. Latencia percibida baja 60% sin migrar a VPS aún."
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
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Compartido para sitio estático; VPS cuando necesitas cron custom"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"VPS para un blog que nadie administra"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Revisar SLA y ubicación del datacenter"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Dedicado para proyecto escolar sin tráfico"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Alertas de facturación en nube"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"PaaS caro para sitio PHP legacy no soportado"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"VPS sin admin para blog estático:"}</strong>
          {" ONG en Quito pagó VPS $25/mes; nadie aplicaba parches y el sitio fue defaced. Corrección: hosting compartido gestionado o PaaS estático."}
        </li>
        <li>
          <strong>{"Compartido para API con WebSockets:"}</strong>
          {" Fintech en Medellín saturó CPU del vecino; hosting suspendió la cuenta. Corrección: VPS o nube con recursos dedicados."}
        </li>
        <li>
          <strong>{"Datacenter en Europa para audiencia Colombia:"}</strong>
          {" Latencia 250 ms en checkout móvil; abandono de carrito subió. Corrección: región Miami/Bogotá/São Paulo según tráfico."}
        </li>
      </ul>

      <h3 className="mt-8 mb-2 text-xl font-semibold">{"Optimización en hosting"}</h3>
      <p className="my-4">
        {"Más allá del tipo de plan, estas prácticas mejoran rendimiento sin cambiar de categoría de hosting:"}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"CDN (Cloudflare): cachea estáticos en nodos cercanos (Miami para Centroamérica)."}</li>
        <li>{"Compresión Gzip/Brotli en Nginx/Apache."}</li>
        <li>{"HTTP/2 y HTTP/3: multiplexación y menor latencia."}</li>
        <li>{"Caché de servidor y cabeceras Cache-Control."}</li>
        <li>{"Región: datacenter Bogotá/Miami para audiencia Colombia frente a Europa."}</li>
      </ul>
    </section>
  );
}
