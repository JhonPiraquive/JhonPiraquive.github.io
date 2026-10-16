import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ListarDatosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Leer: mostrar los datos de la API</h2>
      <p className="my-4">
        Es el momento de juntar todo. El módulo de materias de la clase 2 guardaba los datos en el estado del navegador. Ahora
        la fuente de verdad es la API, y el estado de React es solo una copia temporal para dibujar. Los pasos de este CRUD
        son los mismos para cualquier módulo (estudiantes, docentes, productos): cambian los nombres, no la estructura.
      </p>
      <CodeFiddle
        language="bash"
        title="Archivos del módulo"
        code={`src/
├── api/
│   └── cliente.js                 # visto en la página anterior
├── components/
│   ├── FormularioMateria.jsx      # formulario compartido para crear y editar
│   └── ConfirmarEliminar.jsx      # el Dialog de la clase 2
└── pages/materias/
    ├── ListadoMaterias.jsx        # GET lista + eliminar
    ├── CrearMateria.jsx           # POST
    └── EditarMateria.jsx          # GET uno + PUT`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cargar al abrir la pantalla</h3>
      <p className="my-4">
        Cargar datos al aparecer un componente es un efecto: se sincroniza la pantalla con algo externo. Combinamos lo que
        sabes: useState para guardar los datos y el estado de la pantalla, useEffect para pedirlos y la API centralizada.
      </p>
      <CodeFiddle
        language="jsx"
        title="src/pages/materias/ListadoMaterias.jsx"
        code={`import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { api } from "../../api/cliente.js";
import TablaMaterias from "../../components/TablaMaterias.jsx";

export default function ListadoMaterias() {
  const [materias, setMaterias] = useState([]);
  const [estado, setEstado] = useState("cargando");   // "cargando" | "error" | "vacio" | "listo"
  const [intento, setIntento] = useState(0);          // sirve para reintentar

  useEffect(() => {
    const controlador = new AbortController();

    // useEffect no acepta una función async directa, así que la definimos adentro y la llamamos
    async function cargar() {
      setEstado("cargando");
      try {
        const datos = await api.listar("materias", controlador.signal);
        setMaterias(datos);
        setEstado(datos.length === 0 ? "vacio" : "listo");
      } catch (error) {
        if (error.name === "AbortError") return;   // el usuario salió de la pantalla: no es un error
        console.error(error);
        setEstado("error");
      }
    }

    cargar();
    return () => controlador.abort();   // limpieza: cancela si el componente desaparece
  }, [intento]);

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" component="h2">Materias</Typography>
        <Button variant="contained" component={RouterLink} to="/materias/nueva">
          Agregar materia
        </Button>
      </Stack>

      {estado === "cargando" && <LinearProgress aria-label="Cargando materias" />}

      {estado === "error" && (
        <Alert severity="error" action={<Button onClick={() => setIntento((n) => n + 1)}>Reintentar</Button>}>
          No pudimos cargar las materias. Verifica que la API esté encendida e inténtalo de nuevo.
        </Alert>
      )}

      {estado === "vacio" && <Typography>Aún no hay materias. Agrega la primera.</Typography>}

      {estado === "listo" && <TablaMaterias materias={materias} />}
    </Stack>
  );
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué está pasando línea por línea</h3>
      <MermaidDiagram
        title="De abrir la pantalla a ver la tabla"
        description="Flujo: se dibuja la pantalla en estado cargando, el efecto pide los datos, si llegan se pasa a listo o vacío, si fallan se pasa a error, y reintentar vuelve a pedir."
        chart={`flowchart TD
  A["Se dibuja la pantalla<br/>estado: cargando"] --> B["useEffect pide los datos"]
  B --> C{"¿Respondió bien?"}
  C -->|"Sí, con registros"| D["estado: listo<br/>se dibuja la tabla"]
  C -->|"Sí, lista vacía"| E["estado: vacío<br/>mensaje amable"]
  C -->|"No"| F["estado: error<br/>mensaje y botón Reintentar"]
  F -->|"clic en Reintentar"| B`}
      />
      <CompareTable
        headers={["Parte del código", "Para qué sirve"]}
        rows={[
          ["useState(\"cargando\")", "La pantalla arranca mostrando el indicador de carga, no una tabla vacía"],
          ["async function cargar() dentro del efecto", "useEffect debe devolver una función de limpieza o nada; una función async devuelve una promesa y daría un aviso"],
          ["AbortController y controlador.abort()", "Cancela la petición si la persona cambia de pantalla; evita actualizar un componente que ya no existe"],
          ["[intento] como dependencia", "Al subir el contador con Reintentar, el efecto se vuelve a ejecutar"],
          ["Cuatro estados en vez de varios booleanos", "No pueden contradecirse: la pantalla está en uno solo a la vez"],
        ]}
      />
      <Callout title="¿Por qué veo dos peticiones en la pestaña Red?" variant="callout-info">
        <p className="mb-0">
          En desarrollo, StrictMode monta el componente, lo desmonta y lo monta otra vez para comprobar que tu limpieza
          funciona. Por eso ves la primera petición cancelada y una segunda que sí completa. En producción es una sola. Si
          en tu código no cancelas con AbortController, verás dos peticiones completas; funciona igual, solo es más
          trabajo para el servidor.
        </p>
      </Callout>
      <Callout title="Id de la base de datos: id o _id" variant="callout-warning">
        <p className="mb-0">
          json-server usa <code>id</code>. MongoDB usa <code>_id</code> (la API del proyecto de la asignatura devuelve{" "}
          <code>row._id</code>). Revisa en la pestaña Red el nombre exacto del campo antes de usarlo en la key de la tabla, en
          los enlaces de editar y en las peticiones de eliminar. Un id mal escrito produce <code>undefined</code> en la URL y
          un error 404 o 500.
        </p>
      </Callout>
    </section>
  );
}
