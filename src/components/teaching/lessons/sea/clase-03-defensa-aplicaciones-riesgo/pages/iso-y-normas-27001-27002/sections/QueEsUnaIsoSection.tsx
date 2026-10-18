import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsUnaIsoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es una ISO"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una ISO es una norma publicada por la Organización Internacional de Normalización. Define «qué se espera» y «cómo demostrarlo» para lograr consistencia, calidad y confianza entre organizaciones. No es software ni firewall: es guía para organizar trabajo y evidencias."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En seguridad, ISO 27001 certifica que existe un Sistema de Gestión de Seguridad de la Información (SGSI). Clientes enterprise, licitaciones y partners suelen exigirlo. ISO 27002 ofrece el catálogo de controles concretos."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (ciclo PDCA)"}</h3>
      <p className="my-4">
        {
          "Planificar (alcance, riesgos, políticas) → Hacer (implementar controles) → Verificar (auditorías, métricas) → Actuar (mejoras). La certificación demuestra que el sistema existe y se mantiene, no que no hay vulnerabilidades."
        }
      </p>
      <MermaidDiagram
        title="Ciclo PDCA del SGSI"
        description="Flujo cíclico Planificar, Hacer, Verificar y Actuar"
        chart={`flowchart LR
  P[Planificar] --> D[Hacer]
  D --> C[Verificar]
  C --> A[Actuar]
  A --> P
`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"ISO solo en papel:"}</strong>
          {" Consultora generó políticas genéricas que nadie leyó; auditoría interna falló en incidente real. Corrección: controles operativos con dueños y evidencias vivas."}
        </li>
        <li>
          <strong>{"Certificar y olvidar:"}</strong>
          {" Empresa no actualizó análisis de riesgos tras migrar a la nube. Corrección: revisión anual mínima y tras cambios mayores."}
        </li>
        <li>
          <strong>{"Confundir certificación con inmunidad:"}</strong>
          {" Cliente asumió «ISO = cero brechas»; sufrieron ransomware por credenciales débiles. Corrección: ISO complementa, no reemplaza, controles técnicos."}
        </li>
        <li>
          <strong>{"Alcance demasiado estrecho:"}</strong>
          {" Certificaron solo oficina administrativa, no la app SaaS donde están los datos. Corrección: alcance que cubra activos críticos reales."}
        </li>
      </ul>
    </section>
  );
}
