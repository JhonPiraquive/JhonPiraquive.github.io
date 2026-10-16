import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ProbarApisSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Probar una API antes de usarla en React</h2>
      <p className="my-4">
        Una regla que ahorra horas de frustración: <strong>antes de escribir código en React, comprueba que la API
        funciona</strong>. Si algo falla, así sabes si el problema es de la API o de tu interfaz. Hay varias formas de
        probarla.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Opción 1: el navegador</h3>
      <p className="my-4">
        Pega la dirección de un GET en la barra del navegador, por ejemplo <code>http://localhost:9000/api/students</code>.
        Verás el JSON. Sirve solo para GET, pero es la comprobación más rápida de que el servidor está encendido.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Opción 2: un cliente de API dentro de VS Code</h3>
      <p className="my-4">
        Extensiones como Thunder Client o Postman te dejan armar peticiones con cualquier método, cabeceras y cuerpo, y
        ver la respuesta con su código de estado. Es lo que usa la mayoría de los equipos para explorar una API.
      </p>
      <CompareTable
        headers={["Herramienta", "Característica"]}
        rows={[
          ["Thunder Client", "Extensión liviana dentro de VS Code; muy cómoda para empezar"],
          ["Postman", "Aplicación completa, con colecciones y trabajo en equipo"],
          ["Bruno", "Alternativa de código abierto que guarda las peticiones como archivos en tu proyecto"],
          ["curl", "Comando de la terminal, disponible en cualquier sistema"],
        ]}
      />
      <CodeFiddle
        language="bash"
        title="Las cuatro operaciones con curl"
        code={`# Leer la lista
curl http://localhost:9000/api/students

# Crear (POST con cuerpo JSON)
curl -X POST http://localhost:9000/api/students \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Ana","lastName":"Gómez"}'

# Actualizar (PUT)
curl -X PUT http://localhost:9000/api/students/ID_DEL_ESTUDIANTE \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Ana María","lastName":"Gómez"}'

# Eliminar
curl -X DELETE http://localhost:9000/api/students/ID_DEL_ESTUDIANTE`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Opción 3: la pestaña Red del navegador</h3>
      <p className="my-4">
        Cuando tu aplicación ya hace peticiones, abre F12, entra a <strong>Red</strong> (Network) y filtra por{" "}
        <strong>Fetch/XHR</strong>. Verás cada petición con su método, su código de estado, el cuerpo que enviaste y lo que
        respondió el servidor. Es la herramienta número uno para depurar:
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Si la petición ni aparece, tu código no la está enviando.</li>
        <li>Si aparece en rojo sin código, no hay conexión: ¿está encendida la API? ¿el puerto es el correcto?</li>
        <li>Si aparece con 4xx o 5xx, abre la respuesta: casi siempre explica qué pasó.</li>
        <li>En la pestaña Carga útil (Payload) compara lo que enviaste con lo que la API esperaba.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una API de práctica para trabajar por tu cuenta</h3>
      <p className="my-4">
        Si no tienes a mano la API de la asignatura, puedes crear una falsa en dos minutos con <code>json-server</code>.
        Convierte un archivo JSON en una API completa con todas las operaciones CRUD y guarda los cambios en el archivo.
      </p>
      <CodeFiddle
        language="json"
        title="db.json (en la raíz de una carpeta aparte)"
        code={`{
  "materias": [
    { "id": "1", "codigo": "SIS101", "nombre": "Programación web", "creditos": 3 },
    { "id": "2", "codigo": "MAT201", "nombre": "Cálculo diferencial", "creditos": 4 }
  ]
}`}
      />
      <CodeFiddle
        language="bash"
        title="Arrancarla (en una terminal aparte)"
        code={`npx json-server@0.17.4 --watch db.json --port 3001

# Ahora existen:
#   GET    http://localhost:3001/materias
#   GET    http://localhost:3001/materias/1
#   POST   http://localhost:3001/materias
#   PUT    http://localhost:3001/materias/1
#   DELETE http://localhost:3001/materias/1`}
      />
      <Callout title="Por qué fijamos la versión 0.17.4" variant="callout-info">
        <p className="mb-0">
          json-server tiene una versión 1 que sigue en beta, con diferencias en el comando y en el formato de los id. Para
          practicar sin sorpresas usamos la 0.17.4, que es la estable. Si alguna vez la 1.x sale de beta, revisa su
          documentación antes de cambiar.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El error de CORS: qué es y por qué aparece</h3>
      <p className="my-4">
        Es el error que más desconcierta al empezar. En la consola verás algo como «blocked by CORS policy». Ocurre porque el
        navegador protege a los usuarios: una página que viene de <code>localhost:5173</code> no puede leer respuestas de{" "}
        <code>localhost:9000</code> (otro origen) a menos que ese servidor lo permita explícitamente con una cabecera.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>El error se corrige <strong>en el servidor</strong>, no en React: la API debe enviar la cabecera <code>Access-Control-Allow-Origin</code> (en Express se hace con el paquete <code>cors</code>).</li>
        <li>Si la petición funciona en curl o en Postman pero falla en el navegador, casi seguro es CORS: esas herramientas no aplican esta regla.</li>
        <li>Una alternativa en desarrollo es que Vite reenvíe las peticiones con un proxy, de modo que el navegador crea que todo es del mismo origen (lo verás en la página de despliegue).</li>
      </ul>
    </section>
  );
}
