import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MapaMentalVistaRapidaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Mapa mental (vista rápida)"}
      </h2>
      <p className="my-4">
        {
          "Hacker es quien explora y resuelve; el delito depende de intención y permiso. Los canales del atacante son puertas: humanos (engaño), tecnología (fallos) y procesos (errores de operación). Protegerte es cerrar puertas y reducir impacto."
        }
      </p>
      <MermaidDiagram
        title="Hacker, canales y protección"
        description="Mapa mental de canales de ataque y protecciones"
        chart={`mindmap
  root((Hacker))
    Explora sistemas
    Intención y permiso
    Canales
      Humanos
        Ingeniería social
      Tecnología
        Fallos y exploits
      Procesos
        Errores operativos
      Protecciones
        Capacitación
        Controles técnicos
        Procesos verificables
`}
      />
    </section>
  );
}
