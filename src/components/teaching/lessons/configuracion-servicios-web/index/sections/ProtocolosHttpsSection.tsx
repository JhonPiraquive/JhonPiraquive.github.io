import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ProtocolosHttpsSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"1.4.1"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Instalación del protocolo HTTPS en un sitio web"}
      </h2>
      <p className="my-4">
        {
          "HTTPS cifra el tráfico entre navegador y servidor mediante TLS. Requiere un certificado digital firmado por una Autoridad Certificadora (CA) de confianza. Sin HTTPS, contraseñas y cookies viajan en texto claro."
        }
      </p>
      <StepReveal
        title="Configuración y solicitud de firma del certificado"
        steps={[
          {
            title: "Generar clave y CSR (si es comercial)",
            content: "openssl req para certificados pagos; Let's Encrypt usa validación automática.",
          },
          {
            title: "Validar dominio",
            content: "HTTP-01 (archivo en /.well-known), DNS-01 (registro TXT) o email del administrador.",
          },
          {
            title: "Instalar certificado",
            content: "Panel del hosting, Nginx/Apache o certbot integrado.",
          },
          {
            title: "Forzar redirección HTTP → HTTPS",
            content: "Regla en servidor web para que todo el tráfico use TLS.",
          },
          {
            title: "Renovar antes de expirar",
            content: "Let's Encrypt: 90 días. Automatizar con cron: certbot renew.",
          },
        ]}
      />
      <CodeFiddle
        language="bash"
        title="Certbot con Nginx (Let's Encrypt)"
        code={`sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ejemplo.com -d www.ejemplo.com
sudo certbot renew --dry-run`}
      />
      <Callout title="Renovación olvidada">
        {
          "Un certificado vencido muestra «No seguro» y puede bloquear APIs que exigen HTTPS. Configura renovación automática y monitoriza la fecha de expiración."
        }
      </Callout>
    </section>
  );
}
