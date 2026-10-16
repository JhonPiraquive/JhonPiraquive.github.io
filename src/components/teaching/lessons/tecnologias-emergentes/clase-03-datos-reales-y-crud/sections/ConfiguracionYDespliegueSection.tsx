import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ConfiguracionYDespliegueSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Configuración, build y despliegue</h2>
      <p className="my-4">
        Hasta ahora todo corre en tu computador. Para que otras personas usen tu aplicación hay que prepararla y ponerla
        en un servidor. El primer paso es dejar de escribir direcciones fijas dentro del código.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Variables de entorno</h3>
      <p className="my-4">
        La dirección de la API en tu computador (<code>http://localhost:9000</code>) no es la misma que en producción. En
        lugar de cambiar el código cada vez, la sacas a un archivo de configuración. Vite lee archivos llamados{" "}
        <code>.env</code> y expone al código las variables que empiezan por <code>VITE_</code>.
      </p>
      <CodeFiddle
        language="bash"
        title=".env.development  y  .env.production"
        code={`# .env.development  (cuando ejecutas npm run dev)
VITE_API_URL=http://localhost:9000/api

# .env.production   (cuando ejecutas npm run build)
VITE_API_URL=https://api.mi-sitio.com/api`}
      />
      <CodeFiddle
        language="javascript"
        title="Leerla en el código"
        code={`const BASE_URL = import.meta.env.VITE_API_URL;

fetch(\`\${BASE_URL}/materias\`);`}
      />
      <Callout title="Todo lo que empieza con VITE_ es público" variant="callout-danger">
        <p className="mb-0">
          Las variables con prefijo <code>VITE_</code> se copian dentro del código que descarga el navegador. Cualquiera puede
          verlas. <strong>Nunca</strong> pongas ahí contraseñas, claves privadas ni tokens secretos. Esos datos solo existen
          en el servidor. Además, no subas a Git los archivos <code>.env</code> con información sensible: agrégalos a{" "}
          <code>.gitignore</code>.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un proxy para el desarrollo (y adiós a CORS en local)</h3>
      <p className="my-4">
        En desarrollo, Vite puede recibir las peticiones a <code>/api</code> y reenviarlas a tu API. Para el navegador todo
        proviene del mismo origen, así que no hay error de CORS y no necesitas configurar la API para permitirlo.
      </p>
      <CodeFiddle
        language="javascript"
        title="vite.config.js"
        code={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:9000",   // lo que empiece con /api va a la API local
    },
  },
});

// Desde React, ahora puedes llamar a fetch("/api/materias") sin escribir el puerto.
// El proxy solo existe en desarrollo: en producción debes tener el mismo arreglo (un servidor que
// reenvíe /api) o permitir el origen de tu sitio en la API.`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Construir para producción</h3>
      <CodeFiddle
        language="bash"
        title="Terminal"
        code={`npm run build      # genera la carpeta dist/ con archivos optimizados
npm run preview    # sirve dist/ en tu equipo para probar el resultado final`}
      />
      <p className="my-4">
        <code>npm run build</code> junta todo tu código y el de las librerías, elimina lo que no se usa, lo minimiza y lo
        divide en archivos. El resultado es la carpeta <code>dist/</code>: solo archivos estáticos (HTML, CSS, JavaScript e
        imágenes). Eso es lo que se publica. Siempre prueba con <code>npm run preview</code> antes de subir, porque a veces
        algo que funciona en desarrollo falla en la versión construida.
      </p>
      <MermaidDiagram
        title="Del código al sitio publicado"
        description="Flujo: el código fuente se construye con Vite, genera la carpeta dist, se sube a un hosting estático y el navegador la descarga."
        chart={`flowchart LR
  A["Código fuente<br/>src/"] -->|"npm run build"| B["dist/<br/>archivos estáticos"]
  B -->|"se sube a"| C["Hosting estático"]
  C -->|"lo descarga"| D["Navegador del usuario"]
  D -->|"fetch"| E["API en su servidor"]`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Dónde publicar</h3>
      <CompareTable
        headers={["Servicio", "Característica", "Nota para una SPA con React Router"]}
        rows={[
          ["Netlify", "Muy simple: arrastras la carpeta dist o conectas tu repositorio", "Necesita una regla para que todas las rutas devuelvan index.html"],
          ["Vercel", "Conectas tu repositorio y publica solo", "Detecta Vite; también conviene verificar las rutas"],
          ["Cloudflare Pages", "Rápido, con plan gratuito generoso", "Tiene modo SPA para las rutas"],
          ["GitHub Pages", "Gratis y sencillo para sitios estáticos", "Requiere configurar base en Vite y un truco para las rutas (404.html) o usar HashRouter"],
        ]}
      />
      <Callout title="Por qué las rutas fallan al recargar en producción" variant="callout-warning">
        <p className="mb-0">
          Con BrowserRouter, la dirección <code>/materias/7/editar</code> no existe como archivo: solo existe{" "}
          <code>index.html</code>. Si alguien recarga en esa dirección, el servidor busca un archivo que no existe y responde
          404. La solución es configurar el servicio para que, ante una ruta desconocida, devuelva <code>index.html</code> y
          deje que React Router decida qué mostrar. En Netlify, por ejemplo, se logra con un archivo{" "}
          <code>public/_redirects</code> que contenga <code>/* /index.html 200</code>.
        </p>
      </Callout>
      <CodeFiddle
        language="javascript"
        title="vite.config.js para publicar en GitHub Pages (en https://usuario.github.io/mi-repo/)"
        code={`export default defineConfig({
  plugins: [react()],
  base: "/mi-repo/",   // el nombre del repositorio, con barras al inicio y al final
});`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Lista de revisión antes de entregar o publicar</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><code>npm run build</code> termina sin errores y <code>npm run lint</code> no reporta problemas graves.</li>
        <li>La consola del navegador no muestra errores ni advertencias.</li>
        <li>Probaste el flujo completo: crear, editar, eliminar y listar, incluido el caso de que la API falle.</li>
        <li>Las pantallas se ven bien en celular, tableta y computador.</li>
        <li>No quedaron claves ni contraseñas en el código ni en archivos <code>.env</code> subidos.</li>
        <li>El proyecto incluye un README con las instrucciones para instalarlo y ejecutarlo.</li>
        <li>Si lo comprimes para entregar, la carpeta <code>node_modules</code> queda fuera.</li>
      </ul>
    </section>
  );
}
