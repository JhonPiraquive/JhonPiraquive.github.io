import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { StepReveal } from "@/components/teaching/StepReveal";

export function HostingSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"1.3"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Hosting en Internet"}</h2>
      <p className="my-4">
        {
          "El hosting (1.3.1) es el servicio que aloja los archivos y bases de datos de tu sitio web en un servidor conectado a Internet las 24 horas del día."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.3.2 Tipos de hosting"}</h3>
      <CompareTable
        headers={["Tipo", "Descripción", "Ideal para"]}
        rows={[
          ["Compartido", "Varios sitios en un mismo servidor", "Blogs, landing pages, proyectos pequeños"],
          ["VPS", "Servidor virtual dedicado con root", "Apps con tráfico medio, control de SO"],
          ["Dedicado", "Máquina física exclusiva", "Alto tráfico, requisitos de compliance"],
          ["Cloud (IaaS/PaaS)", "Recursos elásticos bajo demanda", "Escalado automático, startups"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.3.3 Configuración de un hosting"}</h3>
      <h4 className="mt-4 mb-2 font-semibold">{"a. Características técnicas para considerar"}</h4>
      <ul className="my-4 list-disc pl-6">
        <li>{"Espacio en disco y tipo (SSD vs HDD)."}</li>
        <li>{"Ancho de banda y límite de transferencia mensual."}</li>
        <li>{"Certificado SSL incluido o Let's Encrypt."}</li>
        <li>{"Backups automáticos y restauración."}</li>
        <li>{"Versiones de PHP, Node o bases de datos soportadas."}</li>
        <li>{"Panel de control (cPanel, Plesk) o solo SSH."}</li>
        <li>{"Ubicación del datacenter (latencia para tu audiencia)."}</li>
      </ul>
      <h4 className="mt-4 mb-2 font-semibold">{"b. Cómo alojar un sitio web en un hosting"}</h4>
      <StepReveal
        title="Despliegue básico en hosting"
        steps={[
          {
            title: "Contratar hosting y vincular dominio",
            content: "Apunta el registro A del dominio a la IP del hosting o cambia nameservers.",
          },
          {
            title: "Subir archivos",
            content: "FTP/SFTP, panel de archivos o deploy Git (GitHub Actions → servidor).",
          },
          {
            title: "Configurar base de datos",
            content: "Crear BD y usuario en el panel; actualizar credenciales en la app.",
          },
          {
            title: "Activar HTTPS",
            content: "Certificado gratuito Let's Encrypt o comercial desde el panel o con certbot.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"1.3.4 Cómo optimizar la conectividad desde el hosting"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"CDN (Cloudflare, AWS CloudFront) para assets estáticos cerca del usuario."}</li>
        <li>{"Compresión Gzip/Brotli y minificación de CSS/JS."}</li>
        <li>{"HTTP/2 o HTTP/3 para multiplexar requests."}</li>
        <li>{"Caché de servidor (Nginx, Varnish) y headers Cache-Control."}</li>
        <li>{"Elegir región del servidor cercana a tu audiencia principal."}</li>
      </ul>
      <Callout title="Hosting compartido vs VPS">
        {
          "Compartido es barato y simple; VPS exige administrar el SO y seguridad pero da control total. Para aprender administración, un VPS pequeño es excelente laboratorio."
        }
      </Callout>
    </section>
  );
}
