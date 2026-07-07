import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ComparativaHttpHttpsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comparativa HTTP vs HTTPS"}
      </h2>
      <CompareTable
        headers={["Aspecto", "HTTP", "HTTPS"]}
        rows={[
          ["Puerto por defecto", "80", "443"],
          ["Cifrado", "No (texto plano)", "Sí (TLS)"],
          ["Certificado", "No requerido", "Certificado CA (Let's Encrypt, etc.)"],
          ["Indicador navegador", '"No seguro"', "Candado"],
          ["SEO (Google)", "Penalizado desde 2014", "Recomendado / esperado"],
          ["Uso en 2025", "Solo localhost / redes aisladas", "Obligatorio en producción y staging público"],
          ["Overhead", "Mínimo", "Mínimo moderno (~1 ms); riesgo HTTP no compensa"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Producción vs desarrollo local"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Entorno"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Recomendación"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Producción"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Siempre HTTPS; certificado de CA pública (Let's Encrypt gratuito)"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Staging accesible desde internet"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"HTTPS obligatorio; mismos riesgos que producción"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Desarrollo local (localhost)"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"HTTP aceptable; o certificados auto-firmados con mkcert"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Certificados auto-firmados en prod"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"No — advertencias al usuario; usar CA pública"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Callout title="Caso real: certificado vencido en Black Friday">
        {
          "Una tienda tiene TLS pero el certificado Let's Encrypt no se renovó. Navegadores muestran advertencia roja; Google baja ranking; conversión cae 40%. Monitoreo de caducidad y renovación automática son obligatorios."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mixed content"}</h3>
      <p className="my-4">
        {
          "Un sitio con candado (HTTPS) que carga recursos o APIs internas por HTTP tiene mixed content: el navegador bloquea o advierte; parte del tráfico sigue expuesto."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Nombra los tres beneficios de HTTPS (confidencialidad, integridad, autenticación) con un ejemplo de ataque que cada uno mitiga."
        hints={["Sniffing → confidencialidad", "MITM alteración → integridad", "Impostor → autenticación"]}
        expectedKeywords={["confidencialidad", "integridad", "autenticación", "MITM"]}
        successMessage="Correcto. Confidencialidad evita lectura; integridad detecta alteración; autenticación verifica identidad del servidor."
      />
    </section>
  );
}
