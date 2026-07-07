import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: plataforma de cursos online"}
      </h2>
      <p className="my-4 font-semibold">
        {"Diseña la arquitectura de API para una plataforma de cursos online"}
      </p>
      <p className="my-4">
        {
          "Requisitos: app web (React), app móvil, panel admin, catálogo de cursos, inscripciones, pagos."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Diagrama de capas REST para el servicio de cursos (gateway → controller → service → repo)."
          }
        </li>
        <li>{"¿Necesitas BFF separado para mobile? Justifica en 3 bullets."}</li>
        <li>{"Esquema GraphQL mínimo: Curso, Query.curso(id), Mutation.inscribir."}</li>
        <li>{"Indica qué comunicación interna pondrías en gRPC (si alguna) y por qué."}</li>
        <li>
          {
            "Plan Strangler: endpoint legacy /api/cursos en monolito PHP; cómo migrar sin downtime."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: capas claras, patrón justificado (no over-engineering), SDL válido, plan de migración incremental."
        }
      </p>
      <CodeFiddle
        language="graphql"
        title="Esquema GraphQL de referencia"
        code={`type Curso {
  id: ID!
  titulo: String!
  precio: Float!
  instructor: String!
}

type Query {
  curso(id: ID!): Curso
}

type Mutation {
  inscribir(cursoId: ID!, usuarioId: ID!): Inscripcion!
}

type Inscripcion {
  id: ID!
  curso: Curso!
  fecha: String!
}`}
      />
      <PracticeExercise
        prompt="Completa el reto: justifica si usarías BFF mobile y qué endpoint migrarías primero con Strangler Fig."
        hints={[
          "BFF si payloads mobile difieren",
          "Strangler: proxy enruta tráfico nuevo",
          "gRPC interno para pagos si baja latencia",
        ]}
        expectedKeywords={["BFF", "Strangler", "gateway", "capas"]}
        successMessage="Excelente. Has diseñado arquitectura de API con patrones justificados."
        rows={6}
      />
    </section>
  );
}
