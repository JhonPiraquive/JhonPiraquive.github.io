import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function LayoutsYAnidadasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Layouts y rutas anidadas</h2>
      <p className="my-4">
        En un panel administrativo todas las pantallas comparten el mismo marco: menú lateral, barra superior y un área
        central que cambia. Repetir el menú en cada página sería un desastre. La solución son las{" "}
        <strong>rutas anidadas</strong>: una ruta padre dibuja el marco y deja un hueco, llamado <code>Outlet</code>, donde
        aparece la ruta hija que corresponda.
      </p>
      <MermaidDiagram
        title="El layout dibuja el marco y el Outlet es el hueco"
        description="Diagrama de un marco con barra superior y menú lateral, y en el centro el Outlet donde se muestran Inicio, Cursos o Nuevo curso."
        chart={`flowchart TD
  subgraph L["Layout (siempre visible)"]
    direction TB
    B["Barra superior"]
    subgraph M["Cuerpo"]
      direction LR
      S["Menú lateral"]
      O["Outlet: aquí cambia la pantalla"]
    end
  end
  O -.-> I["Inicio"]
  O -.-> C["Cursos"]
  O -.-> N["Nuevo curso"]`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Declarar las rutas con layout</h3>
      <CodeFiddle
        language="jsx"
        title="src/App.jsx"
        code={`import { Routes, Route } from "react-router";
import LayoutAdmin from "./layout/LayoutAdmin.jsx";
import Inicio from "./pages/Inicio.jsx";
import ListadoCursos from "./pages/cursos/ListadoCursos.jsx";
import CrearCurso from "./pages/cursos/CrearCurso.jsx";
import EditarCurso from "./pages/cursos/EditarCurso.jsx";
import NoEncontrada from "./pages/NoEncontrada.jsx";

export default function App() {
  return (
    <Routes>
      {/* Ruta sin path: solo aporta el marco, no agrega nada a la URL */}
      <Route element={<LayoutAdmin />}>
        <Route index element={<Inicio />} />                    {/* se ve en "/" */}

        <Route path="cursos">
          <Route index element={<ListadoCursos />} />            {/* /cursos */}
          <Route path="nuevo" element={<CrearCurso />} />        {/* /cursos/nuevo */}
          <Route path=":cursoId/editar" element={<EditarCurso />} />  {/* /cursos/12/editar */}
        </Route>

        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}`}
      />
      <CompareTable
        headers={["Pieza", "Qué significa"]}
        rows={[
          ["Route sin path y con element", "Ruta de layout: dibuja el marco para sus hijas sin cambiar la URL"],
          ["Route index", "La hija que se muestra cuando la URL es exactamente la del padre"],
          ["path=\"cursos\"", "Las rutas hijas heredan este segmento: /cursos, /cursos/nuevo…"],
          ["path=\":cursoId/editar\"", "Los dos puntos marcan un segmento dinámico; su valor se lee después con useParams"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El layout con MUI</h3>
      <CodeFiddle
        language="jsx"
        title="src/layout/LayoutAdmin.jsx"
        code={`import { NavLink, Outlet } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const ANCHO_MENU = 220;
const OPCIONES = [
  { texto: "Inicio", ruta: "/" },
  { texto: "Cursos", ruta: "/cursos" },
];

export default function LayoutAdmin() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="h1">Aula Admin</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{ width: ANCHO_MENU, "& .MuiDrawer-paper": { width: ANCHO_MENU, boxSizing: "border-box" } }}
      >
        <Toolbar />   {/* deja espacio para que la barra no tape el menú */}
        <List component="nav" aria-label="Menú principal">
          {OPCIONES.map(({ texto, ruta }) => (
            <ListItemButton key={ruta} component={NavLink} to={ruta} end={ruta === "/"}>
              <ListItemText primary={texto} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />   {/* aquí aparece la pantalla de la ruta actual */}
      </Box>
    </Box>
  );
}`}
      />
      <Callout title="Detalles que conviene entender" variant="callout-info">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li><code>component=&#123;NavLink&#125;</code> hace que el botón de MUI se comporte como enlace de React Router, con lo que se obtiene navegación sin recarga y la clase <code>active</code> automática.</li>
          <li><code>end</code> evita que el enlace «Inicio» se marque como activo en todas las rutas, porque «/» está al comienzo de todas.</li>
          <li>El menú lateral permanente es ideal para escritorio. En celulares conviene un Drawer temporal que se abre con un botón.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">La otra forma de declarar rutas: como objetos</h3>
      <p className="my-4">
        Las plantillas administrativas suelen declarar las rutas como un arreglo de objetos, en lugar de componentes{" "}
        <code>Route</code> anidados. Es exactamente la misma idea con otra sintaxis. Aparece en el proyecto de la
        asignatura (archivos como <code>routes/StudentsRoutes.js</code>), por lo que conviene reconocerla:
      </p>
      <CodeFiddle
        language="jsx"
        title="Rutas como objetos"
        code={`import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";   // en tutoriales antiguos se importaba de react-router-dom

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Inicio /> },
      {
        path: "cursos",
        children: [
          { index: true, element: <ListadoCursos /> },
          { path: "nuevo", element: <CrearCurso /> },
          { path: ":cursoId/editar", element: <EditarCurso /> },
        ],
      },
      { path: "*", element: <NoEncontrada /> },
    ],
  },
]);

// En main.jsx, en lugar de <BrowserRouter><App /></BrowserRouter>:
// <RouterProvider router={router} />`}
      />
      <CompareTable
        headers={["", "Con componentes", "Con objetos"]}
        rows={[
          ["Se activa con", "<BrowserRouter>", "createBrowserRouter + <RouterProvider>"],
          ["Cómo se ven las rutas", "<Routes><Route …/></Routes>", "Arreglo de { path, element, children }"],
          ["Ventaja", "Se lee casi como el HTML de la pantalla", "Permite rutas separadas por módulo, que se unen en un arreglo; admite cargadores de datos"],
          ["Dónde aparece", "Tutoriales y proyectos pequeños", "Plantillas administrativas y proyectos grandes"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cargar las pantallas solo cuando se necesitan</h3>
      <p className="my-4">
        Si un sitio tiene cincuenta pantallas, no hace falta descargar el código de todas al abrir la primera.{" "}
        <code>React.lazy</code> junto con <code>Suspense</code> descarga cada pantalla únicamente cuando alguien entra a ella.
        Es lo que hace el componente <code>Loadable</code> de la plantilla.
      </p>
      <CodeFiddle
        language="jsx"
        title="Carga perezosa de una pantalla"
        code={`import { lazy, Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ListadoCursos = lazy(() => import("./pages/cursos/ListadoCursos.jsx"));

// Dentro de las rutas:
<Route
  path="cursos"
  element={
    <Suspense fallback={<LinearProgress />}>   {/* se muestra mientras se descarga la pantalla */}
      <ListadoCursos />
    </Suspense>
  }
/>`}
      />
    </section>
  );
}
