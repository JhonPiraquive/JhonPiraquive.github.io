import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"Clase 2 · 2 horas"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir hosting y describir cómo un servidor publica un sitio web 24/7 tras resolver DNS y desplegar archivos."
          }
        </li>
        <li>
          {
            "Comparar hosting compartido, VPS, dedicado y nube (IaaS/PaaS) y elegir según costo, control, escala y caso de uso."
          }
        </li>
        <li>
          {
            "Explicar HTTP como protocolo de aplicación (puerto 80, mensajes en texto plano) y su rol en el despliegue web."
          }
        </li>
        <li>
          {
            "Describir HTTPS como HTTP sobre TLS (puerto 443), su relación con HTTP y por qué es obligatorio en producción."
          }
        </li>
        <li>
          {
            "Diferenciar SSL (obsoleto) de TLS (1.2/1.3), instalar/renovar certificados (Let's Encrypt, certbot) y forzar redirección HTTP→HTTPS."
          }
        </li>
        <li>
          {
            "Configurar correo corporativo: registros MX, SPF, DKIM y cliente IMAP/SMTP sin romper la entrega al migrar."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Prerrequisitos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Haber completado Clase 1: Fundamentos web (clase-01-fundamentos-web): dominios, registros DNS (A, AAAA, NS, CNAME), resolución de nombres e IP pública."
          }
        </li>
        <li>
          {
            "Familiaridad básica con el modelo cliente-servidor y con el uso de un navegador y la barra de direcciones."
          }
        </li>
        <li>
          {
            "No se requiere experiencia previa administrando servidores; los ejemplos con SSH/certbot son de referencia para VPS."
          }
        </li>
      </ul>
      <p className="my-4">
        {
          "Esta lección conecta el dominio (clase anterior) con la presencia operativa en Internet: dónde viven los archivos del sitio, cómo se sirven por HTTP/HTTPS y cómo configurar correo profesional @tudominio. El hilo conductor es el despliegue seguro y confiable para equipos y PYMEs en LATAM."
        }
      </p>
      <Callout title="De dominio a sitio publicado">
        {
          "Un dominio sin hosting es solo un nombre; un hosting sin DNS correcto es un servidor invisible. Esta clase une ambas piezas y añade TLS y correo corporativo."
        }
      </Callout>
    </section>
  );
}
