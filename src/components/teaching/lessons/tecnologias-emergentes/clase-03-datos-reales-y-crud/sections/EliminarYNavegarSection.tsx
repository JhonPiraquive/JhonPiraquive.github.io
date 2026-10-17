import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EliminarYNavegarSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Eliminar con seguridad y cerrar el ciclo</h2>
      <p className="my-4">
        Eliminar es la operación más delicada: no hay vuelta atrás. Un CRUD bien hecho nunca borra con un solo clic. El
        flujo es: el usuario pide eliminar, la interfaz pide confirmación, se envía el DELETE, y solo si la API responde
        bien se actualiza la pantalla y se avisa el resultado.
      </p>
      <MermaidDiagram
        title="Flujo para eliminar un registro"
        description="Secuencia: el usuario hace clic en eliminar, aparece el diálogo, confirma, se envía DELETE a la API, y si responde bien se quita la fila y se muestra un mensaje."
        chart={`sequenceDiagram
  participant U as Usuario
  participant P as Pantalla
  participant A as API
  U->>P: Clic en el icono de eliminar
  P->>U: Dialog: Seguro que desea eliminar?
  U->>P: Confirma
  P->>A: DELETE /materias/7
  A-->>P: 200 o 204
  P->>P: Quita la fila del estado
  P->>U: Snackbar: Materia eliminada`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El listado completo con eliminar y avisos</h3>
      <p className="my-4">
        Esta es la versión final del listado. Agrega tres estados nuevos al que ya se conoce: la materia que se quiere eliminar,
        si se está eliminando y el mensaje para el usuario. La tabla (<code>TablaMaterias</code>) es la{" "}
        <code>TablaCursos</code> de la clase 2 con las columnas de materias; recibe <code>alEliminar</code> y llama a esa
        función con la materia completa. <code>ConfirmarEliminar</code> es el diálogo de la clase 2; solo cambia que ahora recibe{" "}
        <code>materia</code> (en lugar de <code>curso</code>) y <code>eliminando</code>, que sirve para deshabilitar sus botones
        mientras la petición está en curso.
      </p>
      <CodeFiddle
        language="jsx"
        title="src/pages/materias/ListadoMaterias.jsx (versión final)"
        code={`import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { api } from "../../api/cliente.js";
import ConfirmarEliminar from "../../components/ConfirmarEliminar.jsx";
import TablaMaterias from "../../components/TablaMaterias.jsx";

export default function ListadoMaterias() {
  const ubicacion = useLocation();

  const [materias, setMaterias] = useState([]);
  const [estado, setEstado] = useState("cargando");
  const [intento, setIntento] = useState(0);

  const [aEliminar, setAEliminar] = useState(null);   // la materia pendiente de confirmar, o null
  const [eliminando, setEliminando] = useState(false);
  const [mensaje, setMensaje] = useState(ubicacion.state?.mensaje ?? "");  // viene de crear o editar

  useEffect(() => {
    const controlador = new AbortController();
    async function cargar() {
      setEstado("cargando");
      try {
        const datos = await api.listar("materias", controlador.signal);
        setMaterias(datos);
        setEstado(datos.length === 0 ? "vacio" : "listo");
      } catch (error) {
        if (error.name === "AbortError") return;
        console.error(error);
        setEstado("error");
      }
    }
    cargar();
    return () => controlador.abort();
  }, [intento]);

  const confirmarEliminacion = async () => {
    setEliminando(true);
    try {
      await api.eliminar("materias", aEliminar.id);
      const restantes = materias.filter((m) => m.id !== aEliminar.id);   // copia sin la eliminada
      setMaterias(restantes);
      if (restantes.length === 0) setEstado("vacio");
      setMensaje(\`Se eliminó «\${aEliminar.nombre}»\`);
      setAEliminar(null);
    } catch (error) {
      console.error(error);
      setMensaje("No se pudo eliminar la materia. Intente de nuevo.");
    } finally {
      setEliminando(false);
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" component="h2">Materias</Typography>
        <Button variant="contained" component={RouterLink} to="/materias/nueva">Agregar materia</Button>
      </Stack>

      {estado === "cargando" && <LinearProgress aria-label="Cargando materias" />}
      {estado === "error" && (
        <Alert severity="error" action={<Button onClick={() => setIntento((n) => n + 1)}>Reintentar</Button>}>
          No se pudieron cargar las materias.
        </Alert>
      )}
      {estado === "vacio" && <Typography>Aún no hay materias. Agregue la primera.</Typography>}
      {estado === "listo" && <TablaMaterias materias={materias} alEliminar={setAEliminar} />}

      <ConfirmarEliminar
        materia={aEliminar}
        eliminando={eliminando}
        alConfirmar={confirmarEliminacion}
        alCancelar={() => setAEliminar(null)}
      />

      <Snackbar open={mensaje !== ""} autoHideDuration={4000} onClose={() => setMensaje("")}>
        <Alert severity="success" onClose={() => setMensaje("")}>{mensaje}</Alert>
      </Snackbar>
    </Stack>
  );
}`}
      />
      <Callout title="Detalles que marcan la diferencia" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>El estado local solo se actualiza <strong>después</strong> de que la API confirma. Si la petición falla, la fila sigue ahí y la persona ve el aviso.</li>
          <li>Se usa <code>filter</code> para crear un arreglo nuevo, no <code>splice</code>: no se muta el estado.</li>
          <li>Con <code>finally</code> se apaga el indicador «eliminando» tanto si salió bien como si falló.</li>
          <li>El mensaje de éxito de crear y editar llega por <code>useLocation().state</code>, que viaja con <code>navigate</code>. Si la persona recarga la página, el mensaje puede volver a aparecer.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Tres formas de refrescar la lista tras un cambio</h3>
      <CompareTable
        headers={["Estrategia", "Cómo funciona", "Ventaja", "Inconveniente"]}
        rows={[
          ["Actualizar el estado local", "El cambio se aplica a mano en el arreglo (filter, map, spread)", "Inmediato y sin otra petición", "Si el servidor cambia algo extra, no se refleja"],
          ["Volver a pedir la lista", "Después del DELETE o el POST, se repite el GET", "Siempre refleja lo que dice el servidor", "Una petición más; la pantalla parpadea"],
          ["Actualización optimista", "La pantalla cambia de inmediato y se deshace si la API falla", "La interfaz se siente instantánea", "Más complejo; mejor con una librería como TanStack Query"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El mapa completo del CRUD</h3>
      <CompareTable
        headers={["Operación", "Pantalla / ruta", "Petición HTTP", "Código de React clave"]}
        rows={[
          ["Leer lista", "/materias", "GET /materias", "useEffect + estado de la pantalla"],
          ["Crear", "/materias/nueva", "POST /materias", "Formulario + navigate al terminar"],
          ["Leer una", "/materias/:id/editar", "GET /materias/:id", "useParams + useEffect"],
          ["Actualizar", "/materias/:id/editar", "PUT /materias/:id", "Formulario con valores iniciales"],
          ["Eliminar", "Dialog en /materias", "DELETE /materias/:id", "Confirmación + filter del estado"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cuando algo no funciona: lista de verificación</h3>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>¿Está encendida la API y se usa el puerto correcto? Se prueba en el navegador o con curl.</li>
        <li>En la pestaña Red: ¿la petición aparece? ¿Con qué método y código de estado?</li>
        <li>Si es 4xx o 5xx, se lee el cuerpo de la respuesta: casi siempre explica qué faltó.</li>
        <li>Si dice CORS, el arreglo está en el servidor, no en React.</li>
        <li>Se compara el nombre exacto del id (<code>id</code> o <code>_id</code>) y de cada campo del cuerpo con lo que espera la API.</li>
        <li>Los números de un formulario llegan como texto y se convierten con <code>Number</code>.</li>
        <li>¿El efecto se ejecuta sin parar? Casi seguro actualiza un estado que también está en sus dependencias.</li>
        <li>¿Falta <code>Content-Type: application/json</code> en un POST o PUT?</li>
      </ol>

    </section>
  );
}
