import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjemplosRealesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Aplicaciones reales y protocolos subyacentes"}
      </h2>
      <CompareTable
        title="Aplicaciones cotidianas"
        headers={["Aplicación", "Cliente", "Servidor / servicio", "Protocolo"]}
        rows={[
          ["Búsqueda web", "Navegador", "Cluster de indexación", "HTTPS"],
          ["Correo", "Cliente mail / webmail", "SMTP/IMAP servers", "SMTP, IMAP, HTTPS"],
          ["Streaming", "App / navegador", "CDN + API de catálogo", "HTTPS, DASH/HLS"],
          ["Juegos online", "Cliente de juego", "Game server + matchmaking", "TCP/UDP, WebSockets"],
          ["API REST", "React / curl", "Node.js / Spring Boot", "HTTPS + JSON"],
        ]}
      />
      <PracticeExercise
        prompt="Al abrir una tienda online en el navegador, ¿cuántos tipos de cliente-servidor distintos intervienen además del HTML inicial? Nombra al menos tres recursos o servicios."
        hints={["Assets estáticos", "API de productos", "Pasarela de pago"]}
        expectedKeywords={["API", "CDN", "imágenes", "JavaScript"]}
        successMessage="Bien. Una página moderna combina HTML, assets, APIs y servicios externos en múltiples requests."
      />
    </section>
  );
}
