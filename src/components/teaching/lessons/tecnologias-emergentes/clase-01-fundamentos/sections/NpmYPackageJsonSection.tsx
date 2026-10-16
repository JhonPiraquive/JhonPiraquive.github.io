import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function NpmYPackageJsonSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Instalar y gestionar librerías con npm</h2>
      <p className="my-4">
        npm tiene dos caras: es un programa de la terminal y es un enorme catálogo en internet (npmjs.com) con más de
        dos millones de paquetes. Cuando escribes un comando, npm busca el paquete en el catálogo, lo descarga y lo
        deja listo en tu proyecto.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El archivo package.json</h3>
      <p className="my-4">
        Cada proyecto de JavaScript tiene un archivo llamado <code>package.json</code>. Es la «ficha técnica» del
        proyecto: dice cómo se llama, qué comandos tiene y de qué librerías depende. Si lo pierdes, pierdes el mapa del
        proyecto. Así se ve el de un proyecto creado con Vite y React:
      </p>
      <CodeFiddle
        language="json"
        title="package.json (resumido)"
        code={`{
  "name": "mi-primer-proyecto",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.3.0",
    "react-dom": "^19.3.0"
  },
  "devDependencies": {
    "vite": "^8.0.0"
  }
}`}
      />
      <CompareTable
        headers={["Parte", "Para qué sirve"]}
        rows={[
          ["scripts", "Atajos para comandos. Se ejecutan con npm run nombre. Por ejemplo, npm run dev inicia el servidor de desarrollo."],
          ["dependencies", "Librerías que tu aplicación necesita para funcionar en producción (React, Material UI)."],
          ["devDependencies", "Herramientas que solo usas mientras desarrollas (Vite, ESLint). No viajan al usuario final."],
          ["type: module", "Indica que usas import/export modernos en lugar del antiguo require."],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los comandos que vas a usar siempre</h3>
      <CodeFiddle
        language="bash"
        title="Comandos esenciales de npm"
        code={`# Instalar todo lo que pide el package.json (lo primero que haces al descargar un proyecto)
npm install

# Agregar una librería de producción
npm install @mui/material @emotion/react @emotion/styled

# Agregar una herramienta de desarrollo
npm install -D eslint

# Quitar una librería
npm uninstall nombre-del-paquete

# Ejecutar un script del package.json
npm run dev

# Ver qué paquetes tienen versión más nueva
npm outdated

# Buscar vulnerabilidades conocidas
npm audit`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Carpetas y archivos que aparecen solos</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>node_modules</strong>: aquí npm descarga todas las librerías. Puede pesar cientos de megabytes y se
          puede volver a generar con <code>npm install</code>. Nunca se entrega ni se sube a Git.
        </li>
        <li>
          <strong>package-lock.json</strong>: guarda la versión exacta de cada paquete que se instaló. Garantiza que tu
          compañero instale exactamente lo mismo que tú. Este sí se guarda y se comparte.
        </li>
      </ul>
      <Callout title="Entregar un proyecto como .zip" variant="callout-warning">
        <p className="mb-0">
          Cuando comprimas un proyecto para entregarlo, deja fuera la carpeta <code>node_modules</code>. Quien reciba el
          .zip ejecuta <code>npm install</code> y la vuelve a crear. Incluirla vuelve el archivo enorme y no aporta nada.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué significan los números de versión</h3>
      <p className="my-4">
        Las versiones tienen tres números: <code>MAYOR.MENOR.PARCHE</code>, por ejemplo <code>9.5.0</code>. Es lo que se
        llama versionado semántico:
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Parche</strong> (el último número): corrige errores sin cambiar cómo se usa.</li>
        <li><strong>Menor</strong> (el del medio): agrega funciones nuevas sin romper lo anterior.</li>
        <li><strong>Mayor</strong> (el primero): puede romper cosas. Hay que leer la guía de migración antes de subir.</li>
      </ul>
      <p className="my-4">
        El símbolo <code>^</code> delante (por ejemplo <code>^19.3.0</code>) significa «acepta actualizaciones menores y de
        parche, pero no cambies de versión mayor». Es la razón por la que dos proyectos instalados en fechas distintas
        pueden tener versiones diferentes, y por la que existe el archivo de bloqueo.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Proyectos antiguos y proyectos nuevos</h3>
      <p className="my-4">
        Vas a encontrar proyectos que se inician con <code>npm start</code> y otros con <code>npm run dev</code>. Los
        primeros suelen haberse creado con Create React App, una herramienta que el equipo de React dio por obsoleta en
        2025. Los segundos usan Vite. Para ti, lo importante es leer la sección <code>scripts</code> de package.json:
        ahí está escrito qué comando inicia cada proyecto.
      </p>

      <CodeChallenge
        title="Completa los comandos"
        template={`# Descargaste un proyecto y quieres instalar sus librerías:
npm {{a}}

# Ahora quieres iniciarlo en modo desarrollo (script llamado dev):
npm {{b}} dev`}
        blanks={[
          { id: "a", answer: "install", placeholder: "comando" },
          { id: "b", answer: "run", placeholder: "comando" },
        ]}
      />
    </section>
  );
}
