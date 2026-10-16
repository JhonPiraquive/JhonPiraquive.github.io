import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ContextoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Contexto: datos compartidos sin cadenas de props</h2>
      <p className="my-4">
        Pasar datos por props funciona muy bien entre un padre y sus hijos. Pero imagina que el nombre del usuario
        conectado lo necesita un botón que está seis niveles más abajo. Tendrías que pasar la prop por cinco componentes que
        no la usan, solo para que llegue. A eso se le llama <em>prop drilling</em> (taladrar props) y es molesto de mantener.
      </p>
      <p className="my-4">
        El <strong>contexto</strong> resuelve esto: un componente alto en el árbol publica un valor, y cualquier componente
        de abajo, sin importar la profundidad, puede leerlo directamente.
      </p>
      <MermaidDiagram
        title="Sin contexto y con contexto"
        description="Dos diagramas: a la izquierda las props pasan por todos los niveles; a la derecha el contexto llega directo al componente que lo necesita."
        chart={`flowchart TD
  subgraph SIN["Con props en cadena"]
    A1["App"] --> B1["Layout"] --> C1["Barra"] --> D1["Menú de usuario"]
  end
  subgraph CON["Con contexto"]
    A2["App publica el usuario"] -.->|"directo"| D2["Menú de usuario"]
    A2 --> B2["Layout"] --> C2["Barra"] --> D2
  end`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los tres pasos</h3>
      <CodeFiddle
        language="jsx"
        title="src/context/SesionContext.jsx"
        code={`import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const SesionContext = createContext(null);

// 2. Un componente que publica el valor para todos sus hijos
export function SesionProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (nombre) => setUsuario({ nombre });
  const cerrarSesion = () => setUsuario(null);

  return (
    <SesionContext value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </SesionContext>
  );
}

// 3. Un hook propio para leerlo de forma cómoda
export function useSesion() {
  const contexto = useContext(SesionContext);
  if (contexto === null) {
    throw new Error("useSesion debe usarse dentro de un SesionProvider");
  }
  return contexto;
}`}
      />
      <CodeFiddle
        language="jsx"
        title="Publicar y consumir"
        code={`// main.jsx: envuelves la aplicación
<SesionProvider>
  <App />
</SesionProvider>

// En cualquier componente, a cualquier profundidad:
import { useSesion } from "../context/SesionContext.jsx";

export default function MenuUsuario() {
  const { usuario, cerrarSesion } = useSesion();
  return usuario ? (
    <button onClick={cerrarSesion}>Salir ({usuario.nombre})</button>
  ) : (
    <span>Invitado</span>
  );
}`}
      />
      <Callout title="Provider en React 19" variant="callout-info">
        <p className="mb-0">
          Desde React 19 puedes renderizar el contexto directamente (<code>{"<SesionContext value={...}>"}</code>). En
          proyectos anteriores o en plantillas verás <code>{"<SesionContext.Provider value={...}>"}</code>. Funcionan igual;
          el segundo es la forma antigua.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cuándo sí y cuándo no</h3>
      <CompareTable
        headers={["Buena idea", "Mala idea"]}
        rows={[
          ["Datos que muchos componentes leen y cambian poco: usuario conectado, tema, idioma", "Guardar en contexto todo el estado de la aplicación"],
          ["Evitar pasar la misma prop por más de tres niveles", "Datos que cambian muchas veces por segundo: cada cambio redibuja a todos los que lo leen"],
          ["Compartir un servicio (por ejemplo, el cliente de la API)", "Reemplazar las props entre un padre y su hijo directo"],
        ]}
      />
      <Callout title="Y si mi aplicación crece mucho" variant="callout-tip">
        <p className="mb-0">
          Para estado global más grande existen librerías como Zustand o Redux Toolkit. No las necesitas para este módulo.
          Un sitio administrativo mediano se resuelve con estado local, contexto para lo compartido y datos que vienen de
          la API.
        </p>
      </Callout>
    </section>
  );
}
