import { CompareTable } from "@/components/teaching/CompareTable";

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
    </section>
  );
}
