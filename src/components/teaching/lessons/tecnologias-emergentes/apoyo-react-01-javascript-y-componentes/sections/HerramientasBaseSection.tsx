import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function HerramientasBaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Las herramientas del desarrollador</h2>
      <p className="my-4">
        Antes de escribir una línea de React se necesitan cuatro elementos instalados. Ninguno es complicado, pero si
        alguno falta, el resto del módulo no funciona. Conviene revisarlos uno por uno.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">1. Un editor de código</h3>
      <p className="my-4">
        Visual Studio Code es la opción recomendada porque es gratuito, liviano y cuenta con extensiones para casi todo.
        Se instala además la extensión <strong>Prettier - Code formatter</strong>, que ordena el código
        automáticamente cada vez que se guarda y mantiene el proyecto limpio y parejo. Para activarla se abre la
        configuración de usuario en formato JSON (Ctrl + Shift + P y escribir «Preferences: Open User Settings (JSON)»)
        y se agrega lo siguiente:
      </p>
      <CodeFiddle
        language="json"
        title="settings.json de Visual Studio Code"
        code={`{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">2. Un navegador con herramientas de desarrollo</h3>
      <p className="my-4">
        Chrome, Edge o Firefox sirven. La tecla F12 abre las herramientas de desarrollo, donde se consultan tres
        pestañas de forma constante: <strong>Consola</strong> (mensajes y errores), <strong>Elementos</strong> (el HTML
        que ve el navegador) y <strong>Red</strong> (las peticiones que hace la página, clave en la parte 3 de la guía).
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">3. Node.js y npm</h3>
      <p className="my-4">
        JavaScript nació para ejecutarse dentro del navegador. <strong>Node.js</strong> es un programa que permite
        ejecutarlo también fuera de él, directamente en el computador. Las herramientas modernas, como Vite, están
        escritas en JavaScript, por lo que necesitan Node para funcionar. Junto con Node se instala{" "}
        <strong>npm</strong>, un gestor que descarga e instala paquetes de código que otras personas ya escribieron.
      </p>
      <p className="my-4">
        Se recomienda instalar la versión LTS (soporte a largo plazo) desde nodejs.org o mediante un administrador de
        versiones como nvm o fnm. Para comprobar la instalación se abre una terminal:
      </p>
      <CodeFiddle
        language="bash"
        title="Comprobar la instalación"
        code={`node -v     # debe mostrar un número de versión
npm -v      # debe mostrar un número de versión`}
      />
      <Callout title="Qué significa LTS" variant="callout-info">
        <p className="mb-0">
          LTS significa «Long Term Support». Es la versión que recibe correcciones durante años. Las versiones que no
          son LTS están pensadas para probar novedades y pueden quedar sin soporte en pocos meses. Tanto para estudiar
          como para producción conviene la LTS.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">4. La terminal</h3>
      <p className="my-4">
        La terminal es una ventana donde se dan órdenes al computador escribiéndolas. Puede parecer antigua, pero es la
        forma más rápida de trabajar con proyectos. Cinco comandos cubren lo necesario:
      </p>
      <CompareTable
        headers={["Comando", "Qué hace", "Ejemplo"]}
        rows={[
          ["pwd", "Muestra en qué carpeta se encuentra la terminal", "pwd"],
          ["ls", "Lista los archivos de esa carpeta (en Windows PowerShell también funciona)", "ls"],
          ["cd", "Entra a una carpeta", "cd proyectos"],
          ["cd ..", "Sube a la carpeta anterior", "cd .."],
          ["mkdir", "Crea una carpeta nueva", "mkdir mi-primer-proyecto"],
        ]}
      />
      <Callout title="Consejo" variant="callout-tip">
        <p className="mb-0">
          Visual Studio Code abre una terminal ya ubicada en el proyecto con Ctrl + ñ (o desde el menú Terminal, Nueva
          terminal). Así se evita navegar carpeta por carpeta.
        </p>
      </Callout>
    </section>
  );
}
