import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: plan de administración remota"}
      </h2>
      <p className="my-4 font-semibold">
        {"Diseña el plan de administración remota para una agencia en Medellín"}
      </p>
      <p className="my-4">
        {
          "Contexto: la agencia tiene (A) 12 sitios WordPress en hosting compartido con cPanel en Colombia, y (B) una API Node.js en un VPS DigitalOcean en NYC para un cliente e-commerce."
        }
      </p>
      <p className="my-4 font-semibold">{"Tareas:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Para cada entorno (A y B), indica: herramienta principal, protocolo, puerto y tipo de autenticación recomendada."
          }
        </li>
        <li>
          {
            "Justifica por qué no habilitarías FTP plano en el VPS aunque el hosting compartido aún lo ofrezca."
          }
        </li>
        <li>{"Propón reglas de firewall (ufw o equivalente) para el VPS (mínimo 3 puertos/reglas)."}</li>
        <li>
          {
            "El diseñador junior pide «la contraseña root del servidor» para subir fotos. Redacta la respuesta correcta y la alternativa segura."
          }
        </li>
        <li>
          {
            "El cliente pregunta si conviene migrar la API a Heroku (PaaS). Responde con un criterio IaaS vs PaaS aplicado a su caso."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: SFTP/SSH en VPS con claves y sin root; cPanel con MFA y SFTP para dev; FTP plano rechazado en producción; firewall documentado; distinción clara IaaS actual vs PaaS propuesto."
        }
      </p>
      <div className="my-8">
        <PracticeExercise
          prompt="Reto integrador: completa el plan de administración remota para la agencia de Medellín (entornos A y B, firewall VPS, respuesta al diseñador junior y criterio Heroku)."
          hints={[
            "Entorno A: cPanel HTTPS 443 + SFTP con clave para dev",
            "Entorno B: SSH/SFTP puerto 22, ufw allow 22/80/443, sin root",
            "Diseñador: cPanel File Manager, no root",
            "Heroku: evaluar si necesitan control de SO custom",
          ]}
          expectedKeywords={[
            "cPanel",
            "SFTP",
            "SSH",
            "clave",
            "ufw",
            "443",
            "MFA",
            "File Manager",
            "PaaS",
            "IaaS",
          ]}
          successMessage="Excelente. Plan con SFTP/SSH en VPS, cPanel+MFA en hosting, firewall documentado y criterio PaaS justificado."
          rows={8}
        />
      </div>
    </section>
  );
}
