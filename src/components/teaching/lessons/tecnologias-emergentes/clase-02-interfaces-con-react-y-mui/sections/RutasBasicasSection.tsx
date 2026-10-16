import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RutasBasicasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Rutas: varias pantallas en una sola página</h2>
      <p className="my-4">
        Un sitio administrativo tiene muchas pantallas: inicio, estudiantes, docentes, materias. Con HTML clásico, cada
        pantalla es un archivo distinto y cada clic recarga toda la página. Una aplicación de React funciona distinto: carga{" "}
        <strong>una sola página HTML</strong> y, cuando cambia la dirección, JavaScript cambia qué componente se muestra.
        Esto se llama aplicación de una sola página (SPA) y se siente más rápida porque no se recarga todo.
      </p>
      <MermaidDiagram
        title="Sitio tradicional frente a SPA"
        description="Dos secuencias: en el sitio tradicional cada clic pide una página nueva al servidor; en la SPA el navegador cambia el componente sin recargar."
        chart={`sequenceDiagram
  participant U as Usuario
  participant N as Navegador
  participant S as Servidor
  Note over U,S: Sitio tradicional
  U->>N: Clic en Docentes
  N->>S: Pide docentes.html
  S-->>N: Devuelve toda la página
  Note over U,S: SPA con React Router
  U->>N: Clic en Docentes
  N->>N: React Router cambia el componente
  N-->>U: Se muestra Docentes sin recargar`}
      />
      <p className="my-4">
        Quien se encarga de relacionar cada dirección (URL) con cada componente es <strong>React Router</strong>, la librería
        de rutas más usada con React.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 1: instalar</h3>
      <CodeFiddle language="bash" title="Terminal" code={`npm install react-router`} />
      <Callout title="react-router y react-router-dom: no te confundas" variant="callout-warning">
        <p className="mb-0">
          Durante años se instalaba <code>react-router-dom</code> y de ahí se importaba todo. A partir de la versión 7 el
          paquete principal es <code>react-router</code>, y la versión 8 eliminó <code>react-router-dom</code>. Si sigues
          un tutorial o una plantilla antigua verás <code>from &quot;react-router-dom&quot;</code>; el contenido de lo que
          importas (Link, Routes, useNavigate…) es el mismo, solo cambia el origen. Con la versión actual escribe{" "}
          <code>from &quot;react-router&quot;</code>.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 2: activar el enrutador</h3>
      <CodeFiddle
        language="jsx"
        title="src/main.jsx"
        code={`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);`}
      />
      <p className="my-4">
        <code>BrowserRouter</code> escucha la barra de direcciones y le avisa a React Router cuando cambia. Se pone una sola
        vez, rodeando toda la aplicación.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 3: declarar las rutas</h3>
      <CodeFiddle
        language="jsx"
        title="src/App.jsx"
        code={`import { Routes, Route, Link } from "react-router";
import Inicio from "./pages/Inicio.jsx";
import Cursos from "./pages/Cursos.jsx";
import NoEncontrada from "./pages/NoEncontrada.jsx";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cursos">Cursos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="*" element={<NoEncontrada />} />   {/* cualquier otra dirección */}
      </Routes>
    </>
  );
}`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Routes</strong> mira la dirección actual y muestra solo la <strong>primera ruta que coincide</strong>.</li>
        <li><strong>Route</strong> une un <code>path</code> (la dirección) con un <code>element</code> (el componente a mostrar).</li>
        <li><strong>path=&quot;*&quot;</strong> coincide con todo lo que no coincidió antes; sirve para el error 404.</li>
        <li><strong>Link</strong> reemplaza a la etiqueta <code>&lt;a&gt;</code> para navegar sin recargar la página. Si usas <code>&lt;a href&gt;</code> para rutas internas, la página se recarga entera y se pierde el estado.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">NavLink: un enlace que sabe si está activo</h3>
      <CodeFiddle
        language="jsx"
        title="Resaltar la sección actual"
        code={`import { NavLink } from "react-router";

<NavLink
  to="/cursos"
  className={({ isActive }) => (isActive ? "menu__enlace menu__enlace--activo" : "menu__enlace")}
>
  Cursos
</NavLink>`}
      />
      <CompareTable
        headers={["Componente", "Para qué"]}
        rows={[
          ["BrowserRouter", "Activa el enrutador (una vez, arriba de todo)"],
          ["Routes y Route", "Declaran qué componente se muestra en cada dirección"],
          ["Link", "Navega a otra ruta sin recargar"],
          ["NavLink", "Igual que Link, y además informa si es la ruta actual"],
          ["Navigate", "Redirige automáticamente a otra ruta"],
        ]}
      />
    </section>
  );
}
