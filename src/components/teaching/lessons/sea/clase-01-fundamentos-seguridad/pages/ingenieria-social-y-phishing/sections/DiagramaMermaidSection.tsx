import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ruta del phishing"}</h3>
      <MermaidDiagram chart={`flowchart TD
  msg[Mensaje_suplantado] --> clic[Clic_en_enlace]
  clic --> captura[Captura_de_credenciales]
  captura --> acceso[Acceso_con_credenciales_reales]
  acceso --> acciones[Acciones_sensibles_(cambiar_correo_2FA)]
  acciones --> persist[Persistencia]

  msg -->|"Corte: verificacion"| verif[Verificar_por_canal_oficial]
  captura -->|"Corte: 2FA"| twoFA[Segundo_factor]
  acceso -->|"Corte: alertas"| alertas[Alertas_y_bloqueo_por_riesgo]`} />
    </section>
  );
}
