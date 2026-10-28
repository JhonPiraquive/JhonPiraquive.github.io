import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MuiInstalacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Instalar Material UI</h2>
      <p className="my-4">
        Material UI (MUI) es una librería de componentes de React ya construidos y probados: botones, tablas, campos de
        texto, menús, diálogos. Siguen el sistema de diseño Material de Google, tienen buena accesibilidad y vienen con un
        sistema de temas. En lugar de dibujar y estilizar un botón desde cero, se importa el de MUI y se configura.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 1: instalar los paquetes</h3>
      <CodeFiddle
        language="bash"
        title="Dentro de la carpeta del proyecto"
        code={`# El núcleo: componentes + el motor de estilos que usa (Emotion)
npm install @mui/material @emotion/react @emotion/styled

# Iconos (opcional, pero muy usados)
npm install @mui/icons-material

# Tipografía Roboto, que es la que usa Material
npm install @fontsource/roboto`}
      />
      <CompareTable
        headers={["Paquete", "Qué aporta"]}
        rows={[
          ["@mui/material", "Los componentes: Button, TextField, Table…"],
          ["@emotion/react y @emotion/styled", "El motor que genera el CSS de los componentes. MUI lo necesita para funcionar"],
          ["@mui/icons-material", "Más de dos mil iconos como componentes (EditIcon, DeleteIcon…)"],
          ["@fontsource/roboto", "La fuente Roboto empaquetada con el proyecto, sin pedirla a internet"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 2: preparar el punto de entrada</h3>
      <CodeFiddle
        language="jsx"
        title="src/main.jsx"
        code={`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.jsx";

const theme = createTheme();   // el tema por defecto; después se personaliza

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>ThemeProvider</strong> reparte el tema (colores, tipografía, espacios) a todos los componentes de MUI.</li>
        <li><strong>CssBaseline</strong> normaliza los estilos del navegador: quita el margen del body y unifica tipografías. Se coloca una sola vez, dentro del ThemeProvider.</li>
        <li>Si el proyecto conserva el archivo <code>index.css</code> de la plantilla de Vite, se borra su contenido o se quita su import, porque choca con los estilos de MUI.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 3: el primer componente</h3>
      <CodeFiddle
        language="jsx"
        title="src/App.jsx"
        code={`import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";

export default function App() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Aula Admin
      </Typography>
      <Button variant="contained" startIcon={<SaveIcon />}>
        Guardar
      </Button>
    </>
  );
}`}
      />
      <Callout title="Dos formas de importar" variant="callout-tip">
        <p className="mb-0">
          Se puede escribir <code>import {"{ Button } from '@mui/material'"}</code> (más corto, el que aparece en la mayoría de
          tutoriales) o <code>import Button from '@mui/material/Button'</code> (una ruta por componente). Las dos funcionan
          en producción; la segunda suele arrancar más rápido en desarrollo cuando se importan muchos componentes.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Elegir una librería de componentes: aplicar los criterios</h3>
      <p className="my-4">
        No existe una librería de componentes «la mejor»; depende del proyecto. Elegir una es un ejercicio de los criterios de
        decisión de la clase 3 del módulo. MUI se usa en este módulo porque es madura, tiene excelente documentación, un
        mantenimiento constante, una comunidad enorme en sitios administrativos y se aprende rápido. Estas son otras
        opciones reales del mercado:
      </p>
      <CompareTable
        headers={["Opción", "Característica principal", "Buena para…"]}
        rows={[
          ["Material UI (MUI)", "Componentes completos, tema potente, muy madura", "Paneles administrativos y aplicaciones de negocio"],
          ["Ant Design", "Muchos componentes empresariales listos (tablas, formularios)", "Sistemas de gestión muy cargados de datos"],
          ["Mantine", "Moderna, buena experiencia de desarrollo, muchos hooks útiles", "Proyectos nuevos que buscan velocidad"],
          ["shadcn/ui con Tailwind", "El código de los componentes se copia al proyecto y queda bajo control del equipo", "Equipos que quieren control total del diseño"],
          ["Tailwind CSS solo", "Clases utilitarias, sin componentes hechos", "Diseños muy personalizados"],
        ]}
      />
    </section>
  );
}
