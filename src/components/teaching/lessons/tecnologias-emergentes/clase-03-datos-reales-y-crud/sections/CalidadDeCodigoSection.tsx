import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function CalidadDeCodigoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Calidad del código: que otros (y el propio autor) puedan mantenerlo</h2>
      <p className="my-4">
        Un proyecto que funciona no está terminado si nadie puede entenderlo. En la vida profesional se lee mucho más código
        del que se escribe, y el propio se lee meses después sin recordar nada. Estas prácticas hacen que ese
        día sea llevadero.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una estructura de carpetas que escala</h3>
      <p className="my-4">
        Dos enfoques comunes: agrupar por tipo de archivo (todos los componentes juntos, todas las páginas juntas) o agrupar
        por funcionalidad (todo lo de «materias» en una carpeta). El segundo suele funcionar mejor cuando el proyecto crece,
        porque al tocar un módulo todo está cerca.
      </p>
      <CodeFiddle
        language="bash"
        title="Agrupado por funcionalidad"
        code={`src/
├── api/                      # fetch centralizado
├── components/               # piezas reutilizables en todo el sitio (Layout, Confirmar…)
├── context/                  # contextos globales (sesión, tema)
├── hooks/                    # hooks que usan varios módulos
├── features/
│   ├── materias/
│   │   ├── ListadoMaterias.jsx
│   │   ├── CrearMateria.jsx
│   │   ├── EditarMateria.jsx
│   │   ├── FormularioMateria.jsx
│   │   └── materias.api.js
│   └── docentes/
│       └── ...
├── utils/                    # funciones sueltas (formatearPrecio…)
├── App.jsx
└── main.jsx`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Hábitos que se notan</h3>
      <CompareTable
        headers={["Hábito", "Ejemplo malo", "Ejemplo bueno"]}
        rows={[
          ["Nombres que dicen lo que son", "const d = datos; const x = d.filter(...)", "const materiasActivas = materias.filter(...)"],
          ["Un componente por archivo", "Cuatro componentes en un solo archivo de 600 líneas", "Cada uno en su archivo, con su propio nombre"],
          ["Funciones cortas con un solo propósito", "Un componente que valida, pide datos, formatea y dibuja", "Validación en utils, peticiones en api, el componente solo coordina"],
          ["Sin números ni textos «mágicos»", "if (estado === 3)", "const ESTADO_ACTIVO = 3; if (estado === ESTADO_ACTIVO)"],
          ["Sin código duplicado", "El mismo fetch copiado en seis pantallas", "Una función en api/cliente.js usada en todas"],
          ["Comentarios que explican el porqué", "// suma uno  (sobre i++)", "// La API cuenta desde 1, la tabla desde 0"],
          ["Código que no se usa, eliminado", "Bloques enteros comentados «por si acaso»", "Se borran; Git recuerda todo"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Herramientas de apoyo</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Prettier</strong> da formato uniforme al guardar. Se configuró en la clase 1.</li>
        <li><strong>ESLint</strong> revisa el código mientras se escribe y señala errores probables (variables sin usar, dependencias de useEffect incompletas). La plantilla de Vite ya lo trae configurado: se ejecuta con <code>npm run lint</code> y sus advertencias no se ignoran.</li>
        <li><strong>Git</strong> guarda el historial. Conviene hacer commits pequeños con mensajes que digan qué cambió y por qué.</li>
        <li><strong>README</strong>: un archivo que explique qué hace el proyecto, cómo instalarlo y cómo ejecutarlo. Quien lo reciba (incluido su autor seis meses después) lo agradecerá.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Validar props: PropTypes, TypeScript y el estado actual de React</h3>
      <p className="my-4">
        En muchos tutoriales y proyectos antiguos cada componente declara qué props espera mediante la librería{" "}
        <code>prop-types</code>. Es importante saber que <strong>en las versiones actuales de React las verificaciones de
        PropTypes fueron eliminadas y se ignoran en silencio</strong>. El código sigue funcionando, pero ya no avisa de
        nada. El equipo de React recomienda TypeScript u otra herramienta de tipos. Es un ejemplo claro de cómo una
        práctica popular puede quedar obsoleta.
      </p>
      <CodeFiddle
        language="jsx"
        title="Antes: con PropTypes"
        code={`import PropTypes from "prop-types";

function Etiqueta({ texto, color }) {
  return <span style={{ color }}>{texto}</span>;
}

Etiqueta.propTypes = {
  texto: PropTypes.string.isRequired,
  color: PropTypes.string,
};
Etiqueta.defaultProps = { color: "gray" };   // defaultProps en componentes de función también fue eliminado`}
      />
      <CodeFiddle
        language="jsx"
        title="Ahora: en JavaScript con valores por defecto de parámetro y JSDoc"
        code={`/**
 * @param {{ texto: string, color?: string }} props
 */
export default function Etiqueta({ texto, color = "gray" }) {
  return <span style={{ color }}>{texto}</span>;
}
// Con JSDoc, VS Code avisa si se pasa un tipo incorrecto, sin instalar nada.`}
      />
      <CodeFiddle
        language="tsx"
        title="Y con TypeScript (plantilla react-ts)"
        code={`interface EtiquetaProps {
  texto: string;
  color?: string;
}

export default function Etiqueta({ texto, color = "gray" }: EtiquetaProps) {
  return <span style={{ color }}>{texto}</span>;
}`}
      />
      <Callout title="Qué hacer en la práctica" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>En un proyecto con una versión antigua de React que ya usa PropTypes, se conserva: funciona.</li>
          <li>Si el proyecto usa una versión actual de React, PropTypes no valida y no debe contarse con él. Existe un codemod para migrar a TypeScript (<code>npx codemod@latest react/prop-types-typescript</code>).</li>
          <li>En proyectos nuevos, lo recomendable es TypeScript. Es el paso natural después de este módulo.</li>
          <li>En JavaScript puro, se usan valores por defecto de parámetro y JSDoc.</li>
        </ul>
      </Callout>
    </section>
  );
}
