import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function VerificarLoGeneradoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Verificar lo que genera la IA</h2>
      <p className="my-4">
        El código generado por IA suele verse correcto, compila y hasta funciona en el caso feliz. Los problemas aparecen
        en los detalles: un caso que no se maneja, una validación ausente, una librería que no existe. Revisarlo es parte
        del trabajo, no un paso opcional.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Lista de revisión</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Entenderlo:</strong> si no se puede explicar línea por línea, no se entrega.</li>
        <li><strong>Probarlo:</strong> ejecutar el caso normal, el caso vacío, el caso con error y los datos extremos.</li>
        <li><strong>Revisar las dependencias:</strong> comprobar en el registro de paquetes que cada librería sugerida existe, está mantenida y es la correcta.</li>
        <li><strong>Revisar la seguridad:</strong> validaciones, manejo de errores, claves fuera del código.</li>
        <li><strong>Revisar que siga las reglas del proyecto:</strong> estructura, nombres, estilo.</li>
      </ul>
      <Callout title="Paquetes inventados" variant="callout-danger">
        <p className="mb-0">
          Los modelos a veces recomiendan instalar paquetes que no existen, con nombres verosímiles. Personas
          malintencionadas registran esos nombres con código dañino, esperando que alguien siga la recomendación sin
          verificar. Antes de ejecutar <code>npm install</code> con un paquete sugerido por una IA, se busca en npmjs.com y
          se revisan sus descargas, su repositorio y su fecha de publicación.
        </p>
      </Callout>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un ejemplo: el error que no se ve</h3>
      <p className="my-4">
        La función siguiente, típica de una respuesta generada, funciona cuando la API responde bien. Los comentarios
        marcan lo que una revisión cuidadosa debería encontrar.
      </p>
      <CodeFiddle
        language="javascript"
        title="Código generado y su revisión"
        code={`// Versión generada
async function obtenerLibros() {
  const respuesta = await fetch("/api/libros");
  return respuesta.json();
  // Revisión 1: si la API responde 404 o 500, fetch no lanza error; se intenta leer un JSON de error.
  // Revisión 2: si falla la red, el error sube sin un mensaje útil para la interfaz.
}

// Versión revisada
async function obtenerLibrosRevisado() {
  const respuesta = await fetch("/api/libros");
  if (!respuesta.ok) {
    throw new Error(\`No se pudieron cargar los libros (código \${respuesta.status})\`);
  }
  return respuesta.json();
}`}
      />
      <Callout title="Aprender con IA sin dejar de aprender" variant="callout-info">
        <p className="mb-0">
          En un curso, el objetivo es desarrollar la capacidad propia. Usar IA para entender un error, pedir una explicación
          distinta o revisar un trabajo terminado ayuda a aprender. Pedirle que resuelva la actividad completa y entregarla
          sin comprenderla impide aprender y deja a la persona sin defensa cuando el código falle. La clase 3 retoma este
          punto.
        </p>
      </Callout>
    </section>
  );
}
