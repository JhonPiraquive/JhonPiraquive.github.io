import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function LeerPlantillaAdminSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cómo leer una plantilla de panel administrativo</h2>
      <p className="my-4">
        En la vida real casi nunca empiezas un panel administrativo desde cero. Descargas una plantilla (un proyecto base
        con menú lateral, barra superior, páginas de ejemplo y estilos ya resueltos) y agregas tus módulos. La habilidad
        importante es <strong>leer un proyecto que no escribiste</strong>: encontrar dónde está cada cosa y dónde tocar.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un mapa típico de carpetas</h3>
      <p className="my-4">
        Los nombres cambian entre plantillas, pero casi todas siguen este esquema. El proyecto de la asignatura usa uno muy
        parecido:
      </p>
      <CodeFiddle
        language="bash"
        title="Estructura habitual de una plantilla administrativa"
        code={`src/
├── menu-items/        # qué opciones aparecen en el menú lateral
│   ├── index.js
│   └── students.js
├── routes/            # qué URL muestra qué página
│   ├── index.js
│   └── StudentsRoutes.js
├── pages/             # las pantallas de cada módulo
│   └── students/
│       ├── index.js           # listado
│       ├── create.js          # crear
│       ├── edit.js            # editar
│       └── components/        # piezas propias: formulario, acciones
├── layout/            # el marco: menú lateral, barra superior, contenedor
│   └── MainLayout/
├── components/        # piezas reutilizables: MainCard, Loadable…
└── themes/            # colores, tipografía, sombras`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Agregar un módulo nuevo: siempre los mismos tres pasos</h3>
      <MermaidDiagram
        title="Tres archivos para que exista un módulo"
        description="Flujo: crear el elemento del menú, crear la ruta, crear la página; el menú lleva a la ruta y la ruta muestra la página."
        chart={`flowchart LR
  A["1. Menú<br/>menu-items/teachers.js<br/>url: /teachers"] --> B["2. Ruta<br/>routes/TeachersRoutes.js<br/>path: teachers"]
  B --> C["3. Página<br/>pages/teachers/index.js<br/>el listado"]`}
      />
      <CodeFiddle
        language="javascript"
        title="1. menu-items/teachers.js"
        code={`const teachers = {
  id: "teachers",
  title: "Teachers",
  type: "group",
  children: [
    {
      id: "teachers",
      title: "Teachers",        // el texto que se ve en el menú
      type: "item",
      url: "/teachers",         // a dónde lleva al hacer clic
      breadcrumbs: false,
    },
  ],
};

export default teachers;`}
      />
      <CodeFiddle
        language="javascript"
        title="2. routes/TeachersRoutes.js"
        code={`import MainLayout from "layout/MainLayout";

const TeachersRoutes = {
  path: "/",
  element: <MainLayout />,       // el marco con menú y barra superior
  children: [
    { path: "teachers", element: <h1>Vista de profesores</h1> },  // luego reemplazas por tu página
  ],
};

export default TeachersRoutes;`}
      />
      <p className="my-4">
        Con eso ya navegas a <code>/teachers</code> y ves el marco de la plantilla alrededor de tu contenido. Después creas
        la carpeta <code>pages/teachers</code>, escribes allí el listado, y lo pones en <code>element</code>.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué cambia entre la plantilla y lo que aprendimos hoy</h3>
      <p className="my-4">
        Las plantillas se publican y quedan congeladas en una época. Es normal que usen versiones anteriores de las
        librerías. Esto no las hace malas, pero debes saber traducir:
      </p>
      <CompareTable
        headers={["En la plantilla puedes ver…", "En las versiones actuales…"]}
        rows={[
          ["import { Link } from 'react-router-dom'", "import { Link } from 'react-router' (react-router-dom desapareció en la versión 8)"],
          ["<Grid item xs={12} md={6}>", "<Grid size={{ xs: 12, md: 6 }}> (el Grid anterior se eliminó en MUI 9)"],
          ["Proyecto iniciado con npm start (Create React App)", "Proyecto iniciado con npm run dev (Vite)"],
          ["Componente de clase o PropTypes para validar", "Componentes de función; en React 19 PropTypes ya no valida (usa TypeScript o parámetros por defecto)"],
          ["Rutas como objeto con un componente Loadable", "Misma idea: carga perezosa con React.lazy y Suspense"],
          ["Iconos de @ant-design/icons", "Pueden convivir con @mui/icons-material; son solo iconos"],
        ]}
      />
      <Callout title="Cómo trabajar con código que no es tuyo" variant="callout-tip">
        <ol className="mb-0 list-decimal space-y-1 pl-5">
          <li>Ejecútalo primero y recórrelo como usuario: entiende qué hace antes de leer cómo.</li>
          <li>Busca por texto (Ctrl + Shift + F en VS Code) una palabra que veas en pantalla, como «Students». Te lleva al archivo exacto.</li>
          <li>Copia un módulo que ya funciona y modifícalo. Es más seguro que crear uno desde cero.</li>
          <li>Haz un cambio pequeño por vez y comprueba el navegador después de cada uno.</li>
          <li>Cuando algo no coincida con la documentación, revisa las versiones en package.json.</li>
        </ol>
      </Callout>
    </section>
  );
}
