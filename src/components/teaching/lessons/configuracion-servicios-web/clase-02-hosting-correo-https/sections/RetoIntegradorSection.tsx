import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: presencia digital de artesaniasdelcaribe.co"}
      </h2>
      <p className="my-4 font-semibold">
        {"«Lanza la presencia digital de artesaniasdelcaribe.co»"}
      </p>
      <p className="my-4">
        {
          "Contexto: cooperativa en Cartagena vende artesanías. Tienen dominio .co, presupuesto limitado y 3 personas que necesitan correo @artesaniasdelcaribe.co."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Entregables que debes proponer"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"Tipo de hosting"}</strong>
          {" justificado (tráfico bajo, catálogo WordPress, presupuesto PYME)."}
        </li>
        <li>
          <strong>{"Pasos de despliegue:"}</strong>
          {" DNS (A/NS), subida archivos, BD, HTTPS."}
        </li>
        <li>
          <strong>{"Proveedor de correo"}</strong>
          {" (Zoho/Google/hosting) con registros MX, SPF y DKIM de ejemplo."}
        </li>
        <li>
          <strong>{"Configuración IMAP/SMTP"}</strong>
          {" para la gerente en Outlook móvil."}
        </li>
        <li>
          <strong>{"Plan TLS:"}</strong>
          {" Let's Encrypt, redirect HTTP→HTTPS, cron renovación."}
        </li>
        <li>
          <strong>{"Un riesgo"}</strong>
          {" si mezclan MX viejos al migrar y cómo evitarlo."}
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: hosting coherente con escala, HTTPS completo, correo con autenticación DNS correcta, sin MX duplicados, al menos un comando certbot o paso de panel SSL."
        }
      </p>
      <div className="my-8">
        <PracticeExercise
          prompt="Para artesaniasdelcaribe.co, redacta en 5–8 líneas: tipo de hosting elegido, proveedor de correo, un registro MX de ejemplo y el comando certbot (o paso de panel) para HTTPS."
          hints={[
            "Compartido + WordPress",
            "Zoho o Google para 3 usuarios",
            "Un solo par MX",
            "certbot --nginx",
          ]}
          expectedKeywords={["compartido", "MX", "SPF", "certbot", "HTTPS"]}
          successMessage="Revisa tu propuesta: hosting acorde al tráfico, MX únicos, SPF/DKIM y plan TLS con renovación."
          rows={6}
        />
      </div>
    </section>
  );
}
