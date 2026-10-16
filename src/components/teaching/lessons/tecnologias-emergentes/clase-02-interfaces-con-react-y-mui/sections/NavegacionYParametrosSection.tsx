import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function NavegacionYParametrosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Parámetros y navegación desde el código</h2>
      <p className="my-4">
        Los enlaces sirven cuando la persona hace clic en uno. Pero a veces tienes que navegar por una decisión del
        programa, por ejemplo volver al listado cuando termina de guardar un formulario. Y a veces una misma pantalla
        necesita saber de qué registro se trata. Para eso están estos hooks.
      </p>
      <CompareTable
        headers={["Hook", "Qué hace", "Ejemplo de uso"]}
        rows={[
          ["useNavigate", "Devuelve una función para cambiar de ruta desde el código", "Ir a /cursos después de guardar"],
          ["useParams", "Lee los segmentos dinámicos de la URL", "Obtener el id de /cursos/12/editar"],
          ["useSearchParams", "Lee y escribe lo que va después del ?", "Filtros: /cursos?area=sistemas"],
          ["useLocation", "Informa la ruta actual", "Saber desde qué pantalla llegó la persona"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">useParams: de qué registro hablamos</h3>
      <p className="my-4">
        Cuando declaras <code>path=&quot;:cursoId/editar&quot;</code>, React Router guarda lo que haya en ese segmento. Con{" "}
        <code>useParams</code> lo recuperas. Ten presente que siempre llega como <strong>texto</strong>.
      </p>
      <CodeFiddle
        language="jsx"
        title="src/pages/cursos/EditarCurso.jsx"
        code={`import { useParams } from "react-router";

export default function EditarCurso() {
  const { cursoId } = useParams();   // en /cursos/12/editar, cursoId vale "12"

  // En la clase 3 usarás este id para pedirle a la API los datos de este curso
  return <h2>Editando el curso {cursoId}</h2>;
}`}
      />
      <p className="my-4">
        Y para llegar a esa pantalla desde el listado, construyes el enlace con el id de cada fila:
      </p>
      <CodeFiddle
        language="jsx"
        title="Enlace a la pantalla de edición"
        code={`import { Link as RouterLink } from "react-router";
import Button from "@mui/material/Button";

<Button component={RouterLink} to={\`/cursos/\${curso.id}/editar\`}>
  Editar
</Button>`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">useNavigate: moverse desde el código</h3>
      <CodeFiddle
        language="jsx"
        title="Volver al listado al terminar de guardar"
        code={`import { useNavigate } from "react-router";

export default function CrearCurso() {
  const navigate = useNavigate();

  const guardar = (datos) => {
    // ...aquí guardarás el curso...
    navigate("/cursos");   // ir al listado
  };

  return (
    <>
      <FormularioCurso alGuardar={guardar} />
      <button onClick={() => navigate(-1)}>Volver</button>  {/* -1 es la pantalla anterior */}
    </>
  );
}`}
      />
      <Callout title="navigate frente a Link" variant="callout-tip">
        <p className="mb-0">
          Si la persona decide ir a otro lado con un clic, usa <code>Link</code> o <code>NavLink</code>: son enlaces
          reales, funcionan con clic derecho y con teclado. Usa <code>navigate</code> solo cuando el programa decide
          moverla (por ejemplo, después de guardar).
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Redirigir y proteger pantallas</h3>
      <p className="my-4">
        El componente <code>Navigate</code> redirige al dibujarse. Con él puedes crear una ruta protegida: si no hay
        sesión, envía al inicio de sesión.
      </p>
      <CodeFiddle
        language="jsx"
        title="Ruta protegida"
        code={`import { Navigate, Outlet } from "react-router";
import { useSesion } from "../context/SesionContext.jsx";

export default function RutaProtegida() {
  const { usuario } = useSesion();

  if (!usuario) {
    return <Navigate to="/login" replace />;   // replace: no deja la ruta bloqueada en el historial
  }
  return <Outlet />;
}

// Se usa como ruta de layout:
// <Route element={<RutaProtegida />}>
//   <Route path="cursos" element={<ListadoCursos />} />
// </Route>`}
      />
      <Callout title="Una advertencia de seguridad" variant="callout-danger">
        <p className="mb-0">
          Ocultar una pantalla en el navegador no protege los datos. Cualquiera puede abrir las herramientas de desarrollo
          y saltarse tu código. La protección de verdad la hace el servidor, comprobando en cada petición que la persona
          tiene permiso. Las rutas protegidas del frontend solo mejoran la experiencia.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un detalle al publicar el sitio</h3>
      <p className="my-4">
        Con <code>BrowserRouter</code>, las direcciones como <code>/cursos/12/editar</code> no existen como archivos en el
        servidor: solo existe <code>index.html</code>. Si alguien recarga la página en esa dirección, el servidor busca un
        archivo que no hay y devuelve error 404. Al publicar, el servidor debe configurarse para devolver siempre{" "}
        <code>index.html</code> (lo hacen servicios como Netlify o Vercel con una regla). Durante el desarrollo, Vite ya lo
        hace por ti. Lo retomamos en la clase 3.
      </p>

      <PracticeExercise
        title="Diseña las rutas"
        prompt="Un módulo de docentes necesita: listado, formulario para crear, formulario para editar un docente en particular y una página de error. Escribe las cuatro rutas (path) que declararías."
        hints={["Piensa en /docentes como base", "La de editar necesita un segmento dinámico con dos puntos", "Una ruta con asterisco atrapa lo demás"]}
        expectedKeywords={[":id", ":docenteid", "nuevo", "editar", "*"]}
        successMessage="Muy bien: tienes las cuatro rutas de un módulo completo."
      />
    </section>
  );
}
