import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ClienteServidorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cliente, servidor y API</h2>
      <p className="my-4">
        Hasta ahora los datos vivían dentro del navegador y desaparecían al recargar. Una aplicación real guarda la
        información en un lugar permanente y compartido: una base de datos en un servidor. La interfaz no puede hablar
        directamente con la base de datos (sería inseguro); habla con una pieza intermedia que sí puede: la API.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">La analogía del restaurante</h3>
      <CompareTable
        headers={["En el restaurante", "En la aplicación", "Quién es"]}
        rows={[
          ["El comensal, que pide la comida", "Cliente", "La aplicación de React en el navegador"],
          ["El mesero que lleva y trae", "HTTP", "El protocolo con el que se envían peticiones y respuestas"],
          ["La cocina que prepara", "Servidor / API", "Un programa (por ejemplo, Node con Express) que atiende las peticiones"],
          ["La despensa", "Base de datos", "Donde se guardan los datos de forma permanente (MongoDB, MySQL…)"],
          ["El menú", "Documentación de la API", "Lista de lo que se puede pedir y cómo pedirlo"],
        ]}
      />
      <MermaidDiagram
        title="El camino de un dato desde la pantalla hasta la base de datos"
        description="Secuencia: el navegador envía una petición HTTP a la API, la API consulta la base de datos y responde con JSON."
        chart={`sequenceDiagram
  participant R as React en el navegador
  participant A as API (servidor)
  participant B as Base de datos
  R->>A: Petición HTTP: GET /api/materias
  A->>B: Consulta las materias
  B-->>A: Devuelve los registros
  A-->>R: Respuesta HTTP 200 con JSON
  R->>R: Guarda en el estado y dibuja la tabla`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué es una API</h3>
      <p className="my-4">
        API significa Application Programming Interface (interfaz de programación de aplicaciones). Es un conjunto de reglas
        que define <strong>qué se le puede pedir a un programa y cómo</strong>. Una API web es un servidor que expone
        direcciones (URL); cada una hace una cosa: dar la lista de materias, crear una, borrar otra. Casi siempre
        intercambia datos en formato JSON, visto en la clase 1.
      </p>
      <Callout title="Qué significa REST" variant="callout-info">
        <p className="mb-0">
          Muchas APIs siguen el estilo REST: cada cosa (materia, docente, estudiante) es un «recurso» con su propia
          dirección, y la acción la indica el método HTTP, no el nombre de la dirección. Así, <code>GET /materias</code>{" "}
          lista y <code>DELETE /materias/7</code> elimina. Es una convención, no una ley, pero facilita entender cualquier API.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Las partes de una URL</h3>
      <CodeFiddle
        language="bash"
        title="Anatomía de una dirección"
        code={`http://localhost:9000/api/students/64f1a2?activo=true
\\___/   \\_______/\\__/ \\__________________/ \\_________/
  |         |     |          |                 |
protocolo  host  puerto     ruta          parámetros de consulta
                           (recurso + id)  (filtros, después del ?)`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Protocolo</strong>: http o https. En internet real siempre https (cifrado).</li>
        <li><strong>Host</strong>: el equipo donde está el servidor. <code>localhost</code> es el propio computador.</li>
        <li><strong>Puerto</strong>: la «puerta» del programa. La página de Vite usa 5173; la API del proyecto usa 9000.</li>
        <li><strong>Ruta</strong>: qué recurso se quiere y, opcionalmente, cuál (el id).</li>
        <li><strong>Parámetros de consulta</strong>: filtros o ajustes adicionales, después del signo de interrogación.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los dos programas que deben estar corriendo</h3>
      <p className="my-4">
        Al trabajar con una API local se necesitan dos terminales abiertas al tiempo. Si una se cierra, la aplicación deja de
        funcionar y aparecen errores de conexión en la consola.
      </p>
      <MermaidDiagram
        title="Dos servidores locales, dos puertos"
        description="Dos terminales: una corre la API en el puerto 9000 y otra corre Vite en el puerto 5173; el navegador abre la segunda y esta le pide datos a la primera."
        chart={`flowchart LR
  T1["Terminal 1<br/>API en :9000"] --- DB[("Base de datos")]
  T2["Terminal 2<br/>Vite en :5173"] --> NAV["Navegador<br/>abre localhost:5173"]
  NAV -->|"fetch a localhost:9000"| T1`}
      />
    </section>
  );
}
