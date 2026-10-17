import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MuiComponentesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Los componentes de MUI de uso más frecuente</h2>
      <p className="my-4">
        MUI tiene decenas de componentes. Para un sitio administrativo bastan unos pocos grupos. Con ellos se puede
        armar casi cualquier pantalla. La documentación completa está en mui.com; cada componente muestra ejemplos
        copiables.
      </p>
      <CompareTable
        headers={["Grupo", "Componentes", "Para qué"]}
        rows={[
          ["Organizar el espacio", "Container, Box, Stack, Grid, Paper, Card", "Acomodar y agrupar el contenido"],
          ["Texto", "Typography", "Títulos y párrafos con la tipografía del tema"],
          ["Acciones", "Button, IconButton, Fab", "Que el usuario haga algo"],
          ["Entrada de datos", "TextField, Select, Checkbox, RadioGroup, Switch", "Formularios"],
          ["Mostrar datos", "Table, List, Chip, Avatar", "Tablas, listas y etiquetas"],
          ["Navegación", "AppBar, Drawer, Tabs, Breadcrumbs, Menu", "Moverse por el sitio"],
          ["Respuesta al usuario", "Dialog, Snackbar, Alert, CircularProgress, Skeleton", "Confirmar, avisar y mostrar que algo carga"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Organizar con Stack y Grid</h3>
      <p className="my-4">
        <strong>Stack</strong> apila elementos con un espacio uniforme entre ellos (en columna por defecto, o en fila con{" "}
        <code>direction=&quot;row&quot;</code>). <strong>Grid</strong> reparte el ancho en 12 columnas. En la versión actual, cada
        celda indica su tamaño con la propiedad <code>size</code>, y puede cambiar según el ancho de pantalla.
      </p>
      <CodeFiddle
        language="jsx"
        title="Grid responsive con size"
        code={`import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

<Grid container spacing={2}>
  {/* En celular ocupa las 12 columnas; desde tableta (md), 6; desde pantalla grande (lg), 3 */}
  <Grid size={{ xs: 12, md: 6, lg: 3 }}>
    <Paper sx={{ p: 2 }}>Tarjeta 1</Paper>
  </Grid>
  <Grid size={{ xs: 12, md: 6, lg: 3 }}>
    <Paper sx={{ p: 2 }}>Tarjeta 2</Paper>
  </Grid>
</Grid>`}
      />
      <Callout title="Grid con item y xs en código antiguo" variant="callout-warning">
        <p className="mb-0">
          Los tutoriales y plantillas más antiguos escriben <code>{"<Grid item xs={12} md={6}>"}</code>. Es la versión
          anterior del Grid. En la versión actual de Material UI se eliminó: ya no existe la propiedad <code>item</code> y
          los tamaños van en <code>size</code>. Si un código copiado no se ve como se espera, esta es la primera revisión.
          Tampoco funciona <code>direction=&quot;column&quot;</code> en Grid: para columnas se usa Stack.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Campos de formulario</h3>
      <p className="my-4">
        <code>TextField</code> junta en uno la etiqueta, el campo y el mensaje de ayuda. Con <code>error</code> se
        pinta de rojo y con <code>helperText</code> se explica qué pasó. Con <code>select</code> se convierte en una
        lista desplegable.
      </p>
      <CodeFiddle
        language="jsx"
        title="Campos controlados con MUI"
        code={`import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function FormularioDocente() {
  const [datos, setDatos] = useState({ nombres: "", email: "", area: "" });
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) =>
    setDatos((anterior) => ({ ...anterior, [e.target.name]: e.target.value }));

  const emailInvalido = enviado && !datos.email.includes("@");

  return (
    <Stack component="form" spacing={2} sx={{ maxWidth: 420 }} onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
      <TextField
        label="Nombres"
        name="nombres"
        value={datos.nombres}
        onChange={manejarCambio}
        required
      />
      <TextField
        label="Correo electrónico"
        name="email"
        type="email"
        value={datos.email}
        onChange={manejarCambio}
        error={emailInvalido}
        helperText={emailInvalido ? "Escribir un correo válido, por ejemplo ana@correo.com" : " "}
      />
      <TextField select label="Área" name="area" value={datos.area} onChange={manejarCambio}>
        <MenuItem value="sistemas">Sistemas</MenuItem>
        <MenuItem value="matematicas">Matemáticas</MenuItem>
        <MenuItem value="humanidades">Humanidades</MenuItem>
      </TextField>
      <Button type="submit" variant="contained">Guardar</Button>
    </Stack>
  );
}`}
      />
      <p className="my-4">
        Cabe notar que <code>Stack</code> acepta <code>component=&quot;form&quot;</code>: los componentes de MUI pueden «disfrazarse»
        de otra etiqueta HTML con la propiedad <code>component</code>, sin perder sus estilos.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una tabla con acciones</h3>
      <CodeFiddle
        language="jsx"
        title="src/components/TablaCursos.jsx"
        code={`import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TablaCursos({ cursos, alEditar, alEliminar }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Lista de cursos">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Docente</TableCell>
            <TableCell align="right">Créditos</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cursos.map((curso) => (
            <TableRow key={curso.id} hover>
              <TableCell>{curso.nombre}</TableCell>
              <TableCell>{curso.docente}</TableCell>
              <TableCell align="right">{curso.creditos}</TableCell>
              <TableCell align="right">
                <IconButton aria-label={\`Editar \${curso.nombre}\`} onClick={() => alEditar(curso.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label={\`Eliminar \${curso.nombre}\`} onClick={() => alEliminar(curso.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`}
      />
      <Callout title="Los botones de solo icono necesitan nombre" variant="callout-info">
        <p className="mb-0">
          Un <code>IconButton</code> no muestra texto, así que una persona que usa lector de pantalla no sabría qué hace.
          Por eso lleva <code>aria-label</code> con una descripción clara. El tema se retoma en la página de accesibilidad.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Confirmar antes de borrar y avisar el resultado</h3>
      <CodeFiddle
        language="jsx"
        title="Dialog de confirmación y Snackbar"
        code={`import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function ConfirmarEliminar({ curso, alConfirmar, alCancelar }) {
  return (
    <Dialog open={Boolean(curso)} onClose={alCancelar}>
      <DialogTitle>¿Eliminar este curso?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Se eliminará «{curso?.nombre}». Esta acción no se puede deshacer.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={alCancelar}>Cancelar</Button>
        <Button color="error" variant="contained" onClick={alConfirmar}>Eliminar</Button>
      </DialogActions>
    </Dialog>
  );
}

// En la página, un mensaje de éxito que desaparece solo:
// <Snackbar open={mensaje !== ""} autoHideDuration={4000} onClose={() => setMensaje("")}>
//   <Alert severity="success" onClose={() => setMensaje("")}>{mensaje}</Alert>
// </Snackbar>`}
      />
    </section>
  );
}
