import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function HerramientasBaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Las herramientas que vas a usar</h2>
      <p className="my-4">
        Antes de escribir una línea de React necesitas cuatro cosas instaladas. Ninguna es complicada, pero si alguna
        falta, nada de lo que sigue va a funcionar. Revísalas una por una.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">1. Un editor de código</h3>
      <p className="my-4">
        Usamos Visual Studio Code porque es gratuito, liviano y tiene extensiones para casi todo. Instala una
        extensión llamada <strong>Prettier - Code formatter</strong>: ordena tu código automáticamente cada vez que
        guardas, así tu proyecto siempre se ve limpio y parejo. Para activarla abre la configuración de usuario en
        formato JSON (Ctrl + Shift + P y escribe «Preferences: Open User Settings (JSON)») y agrega:
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
        Chrome, Edge o Firefox. Presiona F12 para abrir las herramientas de desarrollo. Ahí vas a mirar tres cosas
        todo el tiempo: la pestaña <strong>Consola</strong> (mensajes y errores), la pestaña <strong>Elementos</strong>{" "}
        (el HTML que ve el navegador) y la pestaña <strong>Red</strong> (las peticiones que hace tu página, clave en la
        clase 3).
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">3. Node.js y npm</h3>
      <p className="my-4">
        JavaScript nació para correr dentro del navegador. <strong>Node.js</strong> es un programa que permite correr
        JavaScript también fuera del navegador, directamente en tu computador. Las herramientas modernas (Vite, por
        ejemplo) están escritas en JavaScript, así que necesitan Node para funcionar. Junto con Node se instala{" "}
        <strong>npm</strong>, un gestor que descarga e instala paquetes de código que otras personas ya escribieron.
      </p>
      <p className="my-4">
        Instala la versión LTS (soporte a largo plazo) desde nodejs.org o con un administrador de versiones como nvm
        o fnm. Este módulo necesita Node 22.22 o superior. Para comprobar tu instalación abre una terminal:
      </p>
      <CodeFiddle
        language="bash"
        title="Comprobar la instalación"
        code={`node -v     # debe mostrar v22.22.0 o una versión mayor
npm -v      # debe mostrar un número de versión`}
      />
      <Callout title="Qué significa LTS" variant="callout-info">
        <p className="mb-0">
          LTS significa «Long Term Support». Es la versión que recibe correcciones durante años. Las versiones que no
          son LTS están pensadas para probar novedades y pueden quedar sin soporte en pocos meses. Para estudiar y para
          producción, elige LTS.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">4. La terminal</h3>
      <p className="my-4">
        La terminal es una ventana donde le das órdenes al computador escribiendo. Puede parecer antigua, pero es la
        forma más rápida de trabajar con proyectos. Con cinco comandos sobrevives:
      </p>
      <CompareTable
        headers={["Comando", "Qué hace", "Ejemplo"]}
        rows={[
          ["pwd", "Muestra en qué carpeta estás", "pwd"],
          ["ls", "Lista los archivos de esa carpeta (en Windows PowerShell también sirve)", "ls"],
          ["cd", "Entra a una carpeta", "cd proyectos"],
          ["cd ..", "Sube a la carpeta anterior", "cd .."],
          ["mkdir", "Crea una carpeta nueva", "mkdir mi-primer-proyecto"],
        ]}
      />
      <Callout title="Consejo" variant="callout-tip">
        <p className="mb-0">
          Dentro de Visual Studio Code puedes abrir una terminal ya ubicada en tu proyecto con Ctrl + ñ (o el menú
          Terminal, Nueva terminal). Así no tienes que navegar carpeta por carpeta.
        </p>
      </Callout>
    </section>
  );
}
