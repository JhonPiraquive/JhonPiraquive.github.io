import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function NubeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Computación en la nube y principios NIST"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La computación en la nube es la entrega bajo demanda de recursos de TI — servidores, almacenamiento, bases de datos, redes y software — a través de Internet. El usuario paga por consumo, obtiene provisión casi instantánea y no administra físicamente el hardware del datacenter."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Permite a startups, agencias y equipos de desarrollo en LATAM lanzar servicios sin comprar servidores en un datacenter local. Un desarrollador en Cali puede desplegar una API en DigitalOcean (Virginia o São Paulo) en minutos, pagando solo las horas de uso. Esto transforma inversión inicial en hardware (CapEx) en gasto operativo medido (OpEx)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "El proveedor cloud opera datacenters regionales. El cliente crea recursos vía panel web o API (CLI, Terraform). La red pública o privada (VPC) conecta instancias, balanceadores y almacenamiento. La facturación se basa en consumo medido: horas de VM, GB almacenados, requests HTTP, tráfico de salida."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Estructura / Composición — Principios NIST (esenciales)"}
      </h3>
      <p className="my-4">
        {"Los cinco principios esenciales de la definición NIST definen qué hace «cloud» en la práctica:"}
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Principio"}</th>
            <th className="border p-2 text-left">{"Significado en la práctica"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">
              <strong>{"Autoservicio bajo demanda"}</strong>
            </td>
            <td className="border p-2">{"Crear una VM o bucket S3 sin abrir ticket al proveedor"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"Acceso amplio por red"}</strong>
            </td>
            <td className="border p-2">{"Administrar desde laptop, oficina o café vía Internet"}</td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"Agrupación de recursos (pooling)"}</strong>
            </td>
            <td className="border p-2">
              {"Tu VM comparte físico con otros clientes; tú ves recursos lógicos aislados"}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"Elasticidad rápida"}</strong>
            </td>
            <td className="border p-2">
              {"Escalar de 1 a 10 instancias en pico de ventas y reducir después"}
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <strong>{"Servicio medido"}</strong>
            </td>
            <td className="border p-2">{"Dashboard de costos por hora, GB o request"}</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        {
          "Cada principio tiene implicación directa en administración remota: el autoservicio implica que tú abres puertos y configuras SSH; el acceso por red implica que esos puertos deben estar protegidos."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <p className="my-4">
        <strong>{"Ventajas:"}</strong>
        {
          " sin inversión inicial en hardware; escala global con regiones en Miami, São Paulo o Bogotá vía partners; alta disponibilidad y backups gestionados por el proveedor; actualizaciones de infraestructura sin downtime físico en tu oficina."
        }
      </p>
      <p className="my-4">
        <strong>{"Desventajas:"}</strong>
        {
          " costos pueden crecer sin control de presupuesto si no hay alertas; dependencia parcial del proveedor (vendor lock-in); latencia si el datacenter está lejos del usuario final colombiano; curva de aprendizaje en IAM, redes y seguridad cloud."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Una fintech en Medellín migra su API de un servidor en oficina a AWS EC2 en us-east-1. Durante el día escala de t3.small a t3.medium; los fines de semana reduce instancias y ahorra aproximadamente un 40 % en compute. La administración diaria — logs, deploys, reinicios — se hace por SSH desde las laptops del equipo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {
            " elegir región cercana a usuarios LATAM, etiquetar recursos para facturación, alertas de presupuesto, backups automatizados, SSH con claves y firewall restrictivo."
          }
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " dejar instancias 24/7 sin uso, credenciales root en repositorio Git, puertos de administración abiertos a 0.0.0.0/0."
          }
        </li>
      </ul>

      <h3 className="mt-8 mb-2 text-xl font-semibold">{"IaaS, PaaS y SaaS: criterio de elección"}</h3>
      <p className="my-4">
        {"Los modelos de servicio cloud definen qué capas gestiona el proveedor y qué gestiona el cliente:"}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"IaaS (Infrastructure as a Service):"}</strong>
          {" infraestructura virtualizada — VMs, redes, discos."}
        </li>
        <li>
          <strong>{"PaaS (Platform as a Service):"}</strong>
          {" plataforma para desplegar aplicaciones sin administrar SO ni runtime."}
        </li>
        <li>
          <strong>{"SaaS (Software as a Service):"}</strong>
          {" aplicación lista para usar vía navegador o cliente ligero."}
        </li>
      </ul>
      <p className="my-4">
        {
          "Elegir mal el modelo genera sobrecarga operativa o falta de control. Un equipo que solo necesita hospedar un sitio estático no debería administrar un IaaS completo si un PaaS (Vercel, Netlify) resuelve el caso en minutos con git push."
        }
      </p>
      <p className="my-4">
        {"Elige el modelo según control, velocidad de despliegue y carga operativa."}
      </p>
      <CompareTable
        headers={["Criterio", "IaaS", "PaaS", "SaaS"]}
        rows={[
          [
            "Ejemplos",
            "AWS EC2, DigitalOcean Droplet, Azure VM",
            "Heroku, Railway, Vercel, Render",
            "Google Workspace, Microsoft 365, Salesforce",
          ],
          [
            "Tú gestionas",
            "SO, runtime, app, datos (parcial)",
            "App y datos; runtime parcial",
            "Solo configuración y datos de usuario",
          ],
          [
            "Proveedor gestiona",
            "Hypervisor, red física, hardware",
            "SO, parches, escalado de plataforma",
            "Todo el stack de aplicación",
          ],
          ["Control", "Máximo", "Medio", "Mínimo"],
          [
            "Velocidad de despliegue",
            "Lenta (VM, firewall, SSH)",
            "Rápida (git push)",
            "Inmediata (registro y uso)",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo elegir cada uno"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"IaaS:"}</strong>
          {
            " necesitas control total — firewall custom, múltiples servicios en una VM, compliance estricto, VPN site-to-site."
          }
        </li>
        <li>
          <strong>{"PaaS:"}</strong>
          {
            " equipo pequeño que despliega API o frontend sin querer parchear Linux ni configurar Nginx manualmente."
          }
        </li>
        <li>
          <strong>{"SaaS:"}</strong>
          {" correo corporativo, CRM, herramientas de productividad; no quieres operar el software."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto (LATAM)"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Escenario"}</th>
            <th className="border p-2 text-left">{"Modelo recomendado"}</th>
            <th className="border p-2 text-left">{"Por qué"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">
              {"Agencia en Bogotá con WordPress en hosting compartido + cPanel"}
            </td>
            <td className="border p-2">{"SaaS / hosting gestionado"}</td>
            <td className="border p-2">{"Panel y stack ya administrados por el proveedor"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Startup Node.js que hace deploy desde GitHub"}</td>
            <td className="border p-2">{"PaaS (Railway, Render)"}</td>
            <td className="border p-2">{"Sin administrar servidor ni SSH diario"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Banco con política de hardening propio en RHEL"}</td>
            <td className="border p-2">{"IaaS (VM dedicada en cloud)"}</td>
            <td className="border p-2">{"Control de SO y auditoría"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" PaaS para MVP; IaaS cuando el contrato exige control de SO; SaaS para correo y colaboración."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " IaaS para un blog estático de 3 páginas; PaaS para cargas que requieren kernel custom; SaaS para datos ultra-sensibles sin evaluar residencia y cifrado."
          }
        </li>
      </ul>
      <p className="my-4">
        {"Sigue el árbol de decisión desde control del SO hasta software listo:"}
      </p>
      <MermaidDiagram
        chart={`flowchart TD
  START[Nuevo proyecto web] --> Q1{¿Necesitas control total del SO?}
  Q1 -->|Sí| IaaS[IaaS — EC2, Droplet]
  Q1 -->|No| Q2{¿Solo usar software listo?}
  Q2 -->|Sí| SaaS[SaaS — Workspace, M365]
  Q2 -->|No| PaaS[PaaS — Railway, Vercel, Heroku]`}
      />
    </section>
  );
}
