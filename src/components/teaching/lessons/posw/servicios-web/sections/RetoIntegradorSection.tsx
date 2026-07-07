import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: biblioteca universitaria"}
      </h2>
      <p className="my-4 font-semibold">{"Diseña el servicio de una biblioteca universitaria"}</p>
      <p className="my-4">
        {
          "Una universidad necesita que la app web, la app móvil y un script de reportes consulten préstamos de libros sin duplicar reglas."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Identifica qué expone el servicio (consultar disponibilidad, registrar préstamo, devolver libro) y qué hace cada cliente (solo UI o script)."
          }
        </li>
        <li>{"Dibuja el diagrama cliente → servicio → base de datos (y si aplica otro servicio de notificaciones)."}</li>
        <li>
          {
            "Para cada operación, indica qué principio SOLID proteges si separas módulo de préstamos del de usuarios."
          }
        </li>
        <li>{"Escribe una petición HTTP de ejemplo para GET consultar libro por ISBN y el JSON de respuesta esperado."}</li>
        <li>{"Explica qué pasa si cada cliente calcula multas por retraso por su cuenta."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: distingue servicio vs sitio estático, justifica centralizar lógica, diagrama claro, ejemplo HTTP+JSON válido, al menos dos principios SOLID aplicados al diseño."
        }
      </p>
      <CodeFiddle
        language="http"
        title="Ejemplo GET por ISBN"
        code={`GET /api/libros/978-0123456789 HTTP/1.1
Host: biblioteca.universidad.edu
Accept: application/json`}
      />
      <CodeFiddle
        language="json"
        title="Respuesta esperada"
        code={`{
  "isbn": "978-0123456789",
  "titulo": "Introducción a Servicios Web",
  "disponible": true,
  "ejemplares": 3
}`}
      />
      <PracticeExercise
        prompt="Implementa el reto de la biblioteca: describe las operaciones del servicio, el diagrama cliente→servicio→DB y al menos dos principios SOLID que aplicaste al separar módulos."
        hints={[
          "Servicio expone consulta, préstamo y devolución",
          "Clientes solo UI o script",
          "SRP al separar usuarios de préstamos",
          "DIP si el servicio usa IRepositorioLibros",
        ]}
        expectedKeywords={["préstamo", "SRP", "HTTP", "cliente"]}
        successMessage="Excelente. Has integrado arquitectura cliente-servicio, centralización de lógica y criterios SOLID en el diseño."
        rows={6}
      />
    </section>
  );
}
