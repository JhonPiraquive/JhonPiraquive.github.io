import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CrearProyectoViteSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Crear el primer proyecto con Vite</h2>
      <p className="my-4">
        React no se puede abrir con doble clic como un archivo HTML. El código usa JSX y módulos que el navegador no
        entiende tal cual, así que alguien tiene que traducirlo. Ese alguien es Vite: una herramienta que prepara el
        proyecto, muestra los cambios en el navegador apenas se guarda y, al final, empaqueta todo para producción.
      </p>
      <p className="my-4">
        Vite es un buen ejemplo de tecnología emergente que maduró: nació como alternativa a herramientas más pesadas,
        ganó comunidad y hoy es la opción recomendada por la documentación de React para empezar. Sus componentes internos
        cambian con frecuencia, pero los comandos que usa el desarrollador se mantienen.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso a paso</h3>
      <CodeFiddle
        language="bash"
        title="Crear y arrancar el proyecto"
        code={`# 1. Crear el proyecto. El nombre es el de la carpeta que se genera.
npm create vite@latest cafe-del-parque -- --template react

# 2. Entrar a la carpeta
cd cafe-del-parque

# 3. Instalar las librerías que pide el package.json
npm install

# 4. Arrancar el servidor de desarrollo
npm run dev`}
      />
      <p className="my-4">
        La terminal muestra una dirección parecida a <code>http://localhost:5173/</code>, que se abre en el navegador. Si
        aparece una página con el logo de Vite y React y un botón con un contador, todo salió bien. Mientras la terminal
        siga abierta, el proyecto está corriendo; se detiene con Ctrl + C.
      </p>
      <CompareTable
        title="Plantillas de React que ofrece Vite"
        headers={["Plantilla", "Lenguaje", "¿Cuándo usarla?"]}
        rows={[
          ["react", "JavaScript", "La que se usa en este módulo, para concentrarse en React"],
          ["react-ts", "TypeScript", "Lo habitual en equipos profesionales; el siguiente paso natural"],
          ["react-compiler y react-compiler-ts", "JavaScript o TypeScript", "Agregan el React Compiler, que optimiza renderizados automáticamente; no es necesario para aprender"],
        ]}
      />
      <Callout title="Si el comando hace preguntas" variant="callout-info">
        <p className="mb-0">
          Create-vite puede preguntar opciones adicionales (por ejemplo, si se quiere instalar y arrancar de una vez). Se
          elige React, JavaScript y se responde que sí a instalar con npm. Si falla con un mensaje sobre la versión de
          Node, hay que actualizar a la versión LTS más reciente.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué hay dentro de la carpeta</h3>
      <CodeFiddle
        language="bash"
        title="Estructura del proyecto"
        code={`cafe-del-parque/
├── index.html          # la única página HTML; tiene un <div id="root">
├── package.json        # ficha técnica: scripts y dependencias
├── vite.config.js      # configuración de Vite
├── public/             # archivos que se sirven tal cual (iconos, imágenes fijas)
└── src/
    ├── main.jsx        # punto de entrada: arranca React
    ├── App.jsx         # primer componente
    ├── index.css       # estilos globales
    └── assets/         # imágenes que se importan desde el código`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se conecta todo</h3>
      <MermaidDiagram
        title="De index.html a lo que aparece en pantalla"
        description="Flujo: el navegador abre index.html, que carga main.jsx, que monta el componente App dentro del div root."
        chart={`flowchart LR
  A["index.html<br/>div id=root"] --> B["main.jsx<br/>createRoot"]
  B --> C["App.jsx<br/>componente raíz"]
  C --> D["Otros componentes"]`}
      />
      <CodeFiddle
        language="jsx"
        title="src/main.jsx"
        code={`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);`}
      />
      <p className="my-4">
        El código se lee como una frase: «busca el elemento con id root, crea ahí la raíz de React y dibuja dentro el
        componente App». <code>StrictMode</code> no se ve en pantalla: es una ayuda que, en desarrollo, hace revisiones
        extra para detectar errores. Por eso a veces aparece un mensaje en consola ejecutado dos veces; es normal.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Limpiar la plantilla</h3>
      <p className="my-4">
        La plantilla trae un ejemplo con contador y logos. Para empezar de cero, se deja <code>App.jsx</code> así, se borra el
        contenido de <code>src/App.css</code> y se guarda:
      </p>
      <CodeFiddle
        language="jsx"
        title="src/App.jsx"
        code={`export default function App() {
  return (
    <main>
      <h1>Café del Parque</h1>
    </main>
  );
}`}
      />
      <p className="my-4">
        Al cambiar el texto y guardar el archivo, el navegador se actualiza solo, sin recargar. Esa función se llama
        recarga en caliente (HMR) y es una de las ventajas de trabajar con Vite.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los comandos de Vite</h3>
      <CompareTable
        headers={["Comando", "Qué hace"]}
        rows={[
          ["npm run dev", "Inicia el servidor de desarrollo con recarga en caliente"],
          ["npm run build", "Crea la versión optimizada para producción en la carpeta dist"],
          ["npm run preview", "Sirve la carpeta dist en el computador local para probar el resultado final"],
        ]}
      />
      <Callout title="Errores típicos al empezar" variant="callout-warning">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>«Missing script: dev» o «Cannot find module»: la terminal no está dentro de la carpeta del proyecto o falta ejecutar <code>npm install</code>.</li>
          <li>El puerto 5173 está ocupado: Vite elige el siguiente (5174) y lo avisa en la terminal; se usa esa dirección.</li>
          <li>Pantalla en blanco: se abre la consola del navegador (F12); casi siempre indica el archivo y la línea del error.</li>
        </ul>
      </Callout>
    </section>
  );
}
