import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const TIMELINE_CHART = `timeline
  title Historia de las Bases de Datos
  section Pre-BD
    1950s-60s : Archivos planos y cintas
              : Batch, duplicidad e inconsistencia
  section Navegacional
    1960s-70s : IBM IMS jerárquico
              : CODASYL red
              : Acceso por punteros
  section Relacional
    1970 : Codd — modelo relacional
         : Independencia de datos
  section SQL comercial
    1970s : System R e INGRES
          : Nacimiento de SQL
          : Oracle comercial
  section Imperio SQL
    1980s-90s : DB2 Oracle SQL Server
              : PostgreSQL y MySQL
              : ER Chen y SQL estándar
  section NoSQL
    2000s : BigTable y Dynamo
          : MongoDB Cassandra
          : Familias NoSQL
  section Hoy
    2010s-hoy : NewSQL y cloud
              : HTAP y vectoriales
              : Convergencia`;

export function PorQueLaHistoriaImportaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Por qué la historia importa hoy"}
      </h2>
      <p className="my-4">
        {
          "Las bases de datos no nacieron completas. Cada generación resolvió un dolor concreto: duplicidad de archivos, navegación rígida por punteros, falta de un lenguaje común, escala web, operación en la nube e integración con IA. Esos mismos dolores reaparecen en una ferretería de Bogotá con tres Excel o en una startup que elige un motor “moderno” donde hacía falta integridad."
        }
      </p>
      <p className="my-4">
        {
          "Esta lección cuenta siete etapas como un relato de causa→efecto. La línea de tiempo es el mapa; el resto profundiza cada hito con prosa sencilla: qué pasó, por qué importó y cómo llevó a lo siguiente."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Línea de tiempo — siete etapas"}</h3>
      <MermaidDiagram
        title="Historia de las Bases de Datos"
        description="Cronología de siete etapas desde archivos planos hasta NewSQL, cloud y bases vectoriales"
        chart={TIMELINE_CHART}
      />

      <StepReveal
        title="Qué problema resolvió cada etapa"
        steps={[
          {
            title: "1. Archivos planos (50s–60s)",
            content:
              "Deja ver el problema raíz: cada aplicación con sus archivos → duplicidad, inconsistencia y dependencia del formato físico.",
          },
          {
            title: "2. Jerárquico / red (60s–70s)",
            content:
              "Relacionar datos en mainframe sin reescribir cintas enteras; acceso por rutas de punteros conocidas.",
          },
          {
            title: "3. Modelo relacional (Codd 1970)",
            content:
              "Independencia de datos: preguntar QUÉ se quiere, no CÓMO navegar. Relaciones por valores (claves).",
          },
          {
            title: "4. System R, INGRES, Oracle",
            content:
              "Demostrar que el modelo era implementable y comercializable. Nace SQL/SEQUEL y el mercado de SGBD.",
          },
          {
            title: "5. Imperio relacional (80s–90s)",
            content:
              "SQL como estándar de industria; ER de Chen como puente requisitos→tablas.",
          },
          {
            title: "6. NoSQL web-scale (2000s)",
            content:
              "Escala horizontal y esquemas flexibles para patrones que el SQL monolítico clásico sufría. Opciones según el problema, no reemplazo total.",
          },
          {
            title: "7. Hoy: convergencia",
            content:
              "NewSQL, cloud managed, HTAP, vectoriales y multi-modelo. Elegir garantías según el problema, no según la moda.",
          },
        ]}
      />
    </section>
  );
}
