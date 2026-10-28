import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MetodosYEstadosHttpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Métodos HTTP y códigos de estado</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los métodos: el verbo de cada petición</h3>
      <p className="my-4">
        Toda petición HTTP lleva un método que indica qué acción se quiere realizar. Se relacionan de forma directa con las cuatro
        operaciones que hace cualquier sistema de gestión, conocidas como <strong>CRUD</strong>: Create (crear), Read
        (leer), Update (actualizar) y Delete (eliminar).
      </p>
      <CompareTable
        headers={["Operación CRUD", "Método HTTP", "Ruta típica", "¿Lleva cuerpo?", "Qué hace"]}
        rows={[
          ["Leer la lista", "GET", "/materias", "No", "Devuelve todas las materias"],
          ["Leer una", "GET", "/materias/7", "No", "Devuelve la materia con id 7"],
          ["Crear", "POST", "/materias", "Sí, JSON", "Crea una materia nueva con los datos enviados"],
          ["Actualizar completa", "PUT", "/materias/7", "Sí, JSON", "Reemplaza todos los datos de la materia 7"],
          ["Actualizar parcial", "PATCH", "/materias/7", "Sí, JSON", "Cambia solo los campos enviados"],
          ["Eliminar", "DELETE", "/materias/7", "No", "Borra la materia 7"],
        ]}
      />
      <Callout title="Dos palabras frecuentes en la documentación" variant="callout-info">
        <p className="mb-0">
          <strong>Seguro</strong> significa que la petición no cambia nada en el servidor (GET lo es).{" "}
          <strong>Idempotente</strong> significa que repetirla muchas veces deja el mismo resultado que hacerla una vez (GET,
          PUT y DELETE lo son; POST no: dos POST crean dos registros). Por eso conviene deshabilitar el botón Guardar mientras
          una petición POST está en curso.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se ve una petición y su respuesta</h3>
      <CodeFiddle
        language="http"
        title="Petición: crear una materia"
        code={`POST /api/materias HTTP/1.1
Host: localhost:9000
Content-Type: application/json

{
  "codigo": "SIS101",
  "nombre": "Programación web",
  "creditos": 3
}`}
      />
      <CodeFiddle
        language="http"
        title="Respuesta del servidor"
        code={`HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 15,
  "codigo": "SIS101",
  "nombre": "Programación web",
  "creditos": 3
}`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>La <strong>primera línea</strong> de la petición tiene el método, la ruta y la versión.</li>
        <li>Las <strong>cabeceras</strong> (headers) son datos sobre la petición. <code>Content-Type: application/json</code> avisa que el cuerpo es JSON; sin ella el servidor puede no entenderlo.</li>
        <li>El <strong>cuerpo</strong> (body) lleva los datos. Solo POST, PUT y PATCH lo usan.</li>
        <li>La <strong>respuesta</strong> trae un código de estado y casi siempre un cuerpo con el resultado.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Códigos de estado: cómo salió la petición</h3>
      <p className="my-4">
        El servidor siempre responde con un número de tres cifras. La primera cifra indica la familia, y con eso ya se sabe
        mucho.
      </p>
      <CompareTable
        headers={["Código", "Nombre", "Qué significa", "Qué hace la interfaz"]}
        rows={[
          ["200", "OK", "Todo salió bien", "Mostrar los datos"],
          ["201", "Created", "Se creó el recurso", "Avisar «Guardado» y volver al listado"],
          ["204", "No Content", "Salió bien y no hay nada que devolver (típico en DELETE)", "No intentar leer JSON de la respuesta"],
          ["400", "Bad Request", "La petición está mal formada o con datos inválidos", "Mostrar los errores en el formulario"],
          ["401", "Unauthorized", "No se ha iniciado sesión", "Enviar a la pantalla de login"],
          ["403", "Forbidden", "Hay sesión iniciada pero no hay permiso", "Avisar que no tiene acceso"],
          ["404", "Not Found", "Ese recurso no existe", "Mostrar «no encontrado»"],
          ["409", "Conflict", "Choca con algo existente, como un código repetido", "Pedir que se cambie el dato repetido"],
          ["500", "Internal Server Error", "El servidor falló", "Disculparse y ofrecer reintentar; no es culpa del usuario"],
        ]}
      />
      <Callout title="Cómo memorizarlo" variant="callout-tip">
        <p className="mb-0">
          2xx: salió bien. 3xx: redirección a otro lado. 4xx: el error está del lado del cliente (la petición). 5xx: el
          error está del lado del servidor.
        </p>
      </Callout>

    </section>
  );
}
