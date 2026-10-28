import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function CrearYEditarSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Crear y editar con un mismo formulario</h2>
      <p className="my-4">
        Crear y editar se parecen mucho: ambos muestran los mismos campos. La diferencia es de dónde vienen los valores
        iniciales (vacíos o los del registro) y qué petición se hace al guardar (POST o PUT). Por eso se escribe{" "}
        <strong>un solo formulario</strong> y dos pantallas pequeñas que lo usan.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El formulario reutilizable</h3>
      <CodeFiddle
        language="jsx"
        title="src/components/FormularioMateria.jsx"
        code={`import { useState } from "react";
import { Link as RouterLink } from "react-router";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const VACIO = { codigo: "", nombre: "", creditos: "" };

export default function FormularioMateria({ valoresIniciales = VACIO, alEnviar, guardando, errorGeneral }) {
  const [datos, setDatos] = useState(valoresIniciales);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos((anterior) => ({ ...anterior, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Los campos de un formulario son texto: se convierten los créditos a número antes de enviar
    alEnviar({ ...datos, creditos: Number(datos.creditos) });
  };

  return (
    <Stack component="form" spacing={2} onSubmit={manejarEnvio} sx={{ maxWidth: 480 }} noValidate>
      {errorGeneral && <Alert severity="error">{errorGeneral}</Alert>}

      <TextField label="Código" name="codigo" value={datos.codigo} onChange={manejarCambio} required />
      <TextField label="Nombre" name="nombre" value={datos.nombre} onChange={manejarCambio} required />
      <TextField
        label="Créditos"
        name="creditos"
        type="number"
        value={datos.creditos}
        onChange={manejarCambio}
        required
      />

      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button component={RouterLink} to="/materias" disabled={guardando}>Cancelar</Button>
        <Button type="submit" variant="contained" disabled={guardando}>
          {guardando ? "Guardando…" : "Guardar"}
        </Button>
      </Stack>
    </Stack>
  );
}`}
      />
      <Callout title="Por qué deshabilitar el botón mientras guarda" variant="callout-tip">
        <p className="mb-0">
          Sin esa protección, un doble clic envía dos POST y se crean dos registros. Es un error muy frecuente y casi siempre
          se arregla con una sola propiedad: <code>disabled={"{guardando}"}</code>.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Crear: POST y volver al listado</h3>
      <CodeFiddle
        language="jsx"
        title="src/pages/materias/CrearMateria.jsx"
        code={`import { useState } from "react";
import { useNavigate } from "react-router";
import Typography from "@mui/material/Typography";
import { api } from "../../api/cliente.js";
import FormularioMateria from "../../components/FormularioMateria.jsx";

export default function CrearMateria() {
  const navigate = useNavigate();
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  const guardar = async (datos) => {
    setGuardando(true);
    setError("");
    try {
      await api.crear("materias", datos);
      navigate("/materias", { state: { mensaje: "Materia creada correctamente" } });
    } catch (e) {
      console.error(e);
      setError(
        e.estado === 409
          ? "Ya existe una materia con ese código."
          : "No se pudo guardar la materia. Intente de nuevo.",
      );
      setGuardando(false);   // solo se reactiva si falló; si salió bien, se cambia de pantalla
    }
  };

  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom>Nueva materia</Typography>
      <FormularioMateria alEnviar={guardar} guardando={guardando} errorGeneral={error} />
    </>
  );
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Editar: cargar el registro y enviar PUT</h3>
      <p className="my-4">
        Aquí se combinan tres piezas ya vistas: <code>useParams</code> para saber cuál registro, un efecto para pedirlo
        a la API, y el formulario con los valores iniciales. Lo único nuevo es esperar a que los datos lleguen antes de
        dibujar el formulario.
      </p>
      <CodeFiddle
        language="jsx"
        title="src/pages/materias/EditarMateria.jsx"
        code={`import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { api } from "../../api/cliente.js";
import FormularioMateria from "../../components/FormularioMateria.jsx";

export default function EditarMateria() {
  const { materiaId } = useParams();
  const navigate = useNavigate();

  const [materia, setMateria] = useState(null);
  const [estado, setEstado] = useState("cargando");   // "cargando" | "no-existe" | "error" | "listo"
  const [guardando, setGuardando] = useState(false);
  const [errorGuardar, setErrorGuardar] = useState("");

  useEffect(() => {
    const controlador = new AbortController();

    async function cargar() {
      setEstado("cargando");
      try {
        setMateria(await api.obtener("materias", materiaId, controlador.signal));
        setEstado("listo");
      } catch (e) {
        if (e.name === "AbortError") return;
        setEstado(e.estado === 404 ? "no-existe" : "error");
      }
    }

    cargar();
    return () => controlador.abort();
  }, [materiaId]);

  const guardar = async (datos) => {
    setGuardando(true);
    setErrorGuardar("");
    try {
      await api.actualizar("materias", materiaId, datos);
      navigate("/materias", { state: { mensaje: "Cambios guardados" } });
    } catch (e) {
      console.error(e);
      setErrorGuardar("No se pudieron guardar los cambios. Intente de nuevo.");
      setGuardando(false);
    }
  };

  if (estado === "cargando") return <LinearProgress aria-label="Cargando materia" />;
  if (estado === "no-existe") return <Alert severity="warning">Esta materia no existe o ya fue eliminada.</Alert>;
  if (estado === "error") return <Alert severity="error">No se pudo cargar la materia.</Alert>;

  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom>Editar materia</Typography>
      <FormularioMateria
        valoresIniciales={materia}
        alEnviar={guardar}
        guardando={guardando}
        errorGeneral={errorGuardar}
      />
    </>
  );
}`}
      />
      <Callout title="Por qué no se dibuja el formulario hasta tener los datos" variant="callout-info">
        <p className="mb-0">
          El estado inicial de <code>useState(valoresIniciales)</code> solo se lee la primera vez que el componente aparece.
          Si el formulario se dibujara antes de que llegue la materia, se quedaría para siempre con los valores vacíos. Por
          eso la pantalla devuelve un indicador de carga hasta que el estado sea «listo».
        </p>
      </Callout>

      <CompareTable
        title="Diferencias entre las dos pantallas"
        headers={["", "Crear", "Editar"]}
        rows={[
          ["Valores iniciales", "Vacíos", "Los del registro que trae la API"],
          ["Petición para cargar", "Ninguna", "GET /materias/:id"],
          ["Petición para guardar", "POST /materias", "PUT /materias/:id"],
          ["Qué puede salir mal además", "Datos repetidos (409)", "El registro ya no existe (404)"],
          ["Cómo se identifica el registro", "No hace falta", "useParams lee el id de la URL"],
        ]}
      />
    </section>
  );
}
