import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: plataforma de cursos online"}
      </h2>
      <p className="my-4 font-semibold">{"Diseña el backend de una plataforma de cursos online"}</p>
      <p className="my-4">
        {
          "Un frontend React y una app móvil consumirán la misma API para listar cursos, inscribir estudiantes y ver progreso."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Enumera al menos 4 responsabilidades del backend en este dominio y qué capa las implementa."}</li>
        <li>
          {"Elige un stack (lenguaje + framework) y justifica con al menos 3 criterios del árbol de decisión."}
        </li>
        <li>
          {
            "Define 4 endpoints con método HTTP, URI versionada y código de estado esperado (listar cursos, detalle, inscribir, ver progreso)."
          }
        </li>
        <li>
          {
            "Escribe un handler Express o pseudocódigo para POST /api/v1/inscripciones con validación de cupos."
          }
        </li>
        <li>{"Indica qué integraciones externas necesitarías (email, pasarela de pago, etc.)."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: separación de capas clara, validación en servidor, códigos HTTP semánticos, stack justificado por contexto del equipo/proyecto."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="POST inscripciones con validación de cupos"
        code={`router.post("/inscripciones", async (req, res) => {
  const { cursoId, usuarioId } = req.body;
  const cupos = await InscripcionService.cuposDisponibles(cursoId);
  if (cupos <= 0) {
    return res.status(409).json({ error: "SIN_CUPOS", mensaje: "Curso lleno" });
  }
  const inscripcion = await InscripcionService.crear({ cursoId, usuarioId });
  res.status(201).json(inscripcion);
});`}
      />
      <PracticeExercise
        prompt="Implementa el reto de cursos online: lista 4 responsabilidades, elige stack justificado y define POST /api/v1/inscripciones con validación de cupos."
        hints={[
          "Auth + persistencia + lógica de cupos + email",
          "NestJS si equipo TypeScript",
          "409 Conflict si sin cupos",
          "201 Created al inscribir",
        ]}
        expectedKeywords={["POST", "v1", "cupos", "201", "servicio"]}
        successMessage="Excelente. Has diseñado un backend con capas, validación en servidor y stack justificado."
        rows={6}
      />
    </section>
  );
}
