import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function MapaMentalVistaRapidaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Mapa mental (vista rápida)"}
      </h2>
      <p className="my-4">
        {
          "La historia de redes es una carrera de saltos: primero conectamos sistemas para compartir, luego aparecen atacantes por curiosidad, el delito por dinero y, finalmente, la defensa por diseño y regulación."
        }
      </p>
      <MermaidDiagram
        title="De la conectividad a la defensa"
        description="Mapa mental: conectar, atacantes, delito y defensa"
        chart={`mindmap
  root((Historia de redes))
    Conectar
      Compartir recursos
      Protocolos abiertos
    Atacantes
      Curiosidad
      Exploración de fallas
    Delito
      Fraude y dinero
      Datos como activo
    Defensa
      Diseño seguro
      Regulación
`}
      />
    </section>
  );
}
