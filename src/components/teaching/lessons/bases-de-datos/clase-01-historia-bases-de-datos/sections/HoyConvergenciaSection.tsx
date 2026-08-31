import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const MINDMAP_CHART = `mindmap
  root((Bases de datos))
    Pre-BD
      Archivos
      Batch
      Duplicidad
    Navegacional
      IMS árbol
      CODASYL grafo
    Relacional
      Codd 1970
      SQL
      ER Chen
    NoSQL
      Documentos
      KV
      Columnas
      Grafos
    Hoy
      NewSQL
      Cloud
      Vectores`;

export function HoyConvergenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Etapa 7 — Hoy: NewSQL, cloud y convergencia"}
      </h2>

      <p className="my-4">
        {
          "El presente no es una guerra SQL vs NoSQL, sino convergencia. NewSQL y SQL distribuido ofrecen SQL + ACID + escala. Las bases managed en la nube convierten la operación en servicio. HTAP acerca transacciones y analítica. Bases o extensiones vectoriales habilitan búsqueda semántica e IA. Motores multi-modelo reúnen documentos, relacional, grafo y clave-valor en un mismo producto."
        }
      </p>

      <p className="my-4">
        {
          "El cierre del relato: elige garantías y modelo según el problema, no según la moda de una década. Empezar simple —por ejemplo un PostgreSQL o MariaDB bien modelado— y crecer con evidencia. Una startup de e-learning puede tener usuarios y pagos en PostgreSQL cloud, sesiones en Redis y recomendaciones con pgvector sin inventar cinco motores el día 1."
        }
      </p>

      <p className="my-4">
        {
          "Si miras atrás, cada etapa resolvió un dolor: duplicidad, navegación rígida, independencia, producto comercial, estándar de industria, escala web… Hoy el criterio es el mismo que enseña la historia: fuente de verdad, integridad exigida y patrón de acceso — no el logo de moda."
        }
      </p>

      <MermaidDiagram
        title="Mapa mental — familias de bases de datos"
        description="Resumen conceptual de pre-BD, navegacional, relacional, NoSQL y convergencia actual"
        chart={MINDMAP_CHART}
      />
    </section>
  );
}
