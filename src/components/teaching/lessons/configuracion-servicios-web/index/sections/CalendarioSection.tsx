import { CompareTable } from "@/components/teaching/CompareTable";

export function CalendarioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Calendario del curso (4 × 2 h)"}
      </h2>
      <CompareTable
        headers={["Clase", "Tema", "Duración", "Slug"]}
        rows={[
          ["1", "Fundamentos web: navegadores, IP, dominios, DNS", "2 h", "clase-01-fundamentos-web"],
          ["2", "Hosting, correo corporativo y HTTPS/TLS", "2 h", "clase-02-hosting-correo-https"],
          ["3", "Nube, SSH, SFTP y administración remota", "2 h", "clase-03-administracion-remota"],
          ["4", "Docker, VMs, diagnóstico y reto integrador", "2 h", "clase-04-virtualizacion-diagnostico"],
        ]}
      />
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Cada lección incluye bloques sugeridos de 15–30 minutos para facilitar la planificación en aula."
        }
      </p>
    </section>
  );
}
