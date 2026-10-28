import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ActualizarSinMutarSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Actualizar listas y objetos sin mutarlos</h2>
      <p className="my-4">
        React decide si debe volver a dibujar comparando el valor nuevo del estado con el anterior. Con números y textos
        es sencillo. Con arreglos y objetos compara <strong>la referencia</strong>, es decir, si es exactamente el mismo
        objeto en memoria. Si se modifica el arreglo que ya existe, la referencia no cambia y React no se entera.
      </p>
      <CodeFiddle
        language="jsx"
        title="El error de mutar"
        code={`const [cursos, setCursos] = useState(["Álgebra", "Física"]);

const agregarMal = () => {
  cursos.push("Química");  // modifica el arreglo existente
  setCursos(cursos);       // mismo arreglo: React cree que nada cambió y no redibuja
};`}
      />
      <p className="my-4">
        La regla es: <strong>nunca se modifica el estado directamente; se crea una copia nueva con el cambio aplicado</strong>{" "}
        y se entrega al setter. Con spread, map y filter, vistos en la parte 1 de la guía, alcanza para todo.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Las cuatro operaciones</h3>
      <CompareTable
        headers={["Necesidad", "No usar (muta)", "Usar (copia)"]}
        rows={[
          ["Agregar al final", "push", "[...lista, nuevo]"],
          ["Quitar uno", "splice, delete", "lista.filter((x) => x.id !== id)"],
          ["Cambiar uno de la lista", "lista[i].campo = valor", "lista.map((x) => (x.id === id ? { ...x, campo: valor } : x))"],
          ["Cambiar un campo de un objeto", "objeto.campo = valor", "{ ...objeto, campo: valor }"],
        ]}
      />
      <CodeFiddle
        language="jsx"
        title="Lista de cursos con agregar, quitar y marcar"
        code={`import { useState } from "react";

export default function ListaCursos() {
  const [cursos, setCursos] = useState([
    { id: 1, nombre: "Álgebra", activo: true },
    { id: 2, nombre: "Física", activo: false },
  ]);

  const agregar = () => {
    const nuevo = { id: Date.now(), nombre: "Nuevo curso", activo: true };
    setCursos((anterior) => [...anterior, nuevo]);
  };

  const quitar = (id) => {
    setCursos((anterior) => anterior.filter((curso) => curso.id !== id));
  };

  const alternarActivo = (id) => {
    setCursos((anterior) =>
      anterior.map((curso) => (curso.id === id ? { ...curso, activo: !curso.activo } : curso)),
    );
  };

  return (
    <>
      <button onClick={agregar}>Agregar curso</button>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            {curso.nombre} {curso.activo ? "(activo)" : "(inactivo)"}
            <button onClick={() => alternarActivo(curso.id)}>Cambiar estado</button>
            <button onClick={() => quitar(curso.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}`}
      />
      <Callout title="Por qué React exige esto" variant="callout-info">
        <p className="mb-0">
          Comparar referencias es rapidísimo; revisar el contenido de una lista de miles de elementos no lo sería. A cambio,
          exige la disciplina de crear copias. Además, trabajar con copias hace que los cambios sean predecibles y fáciles
          de depurar.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Elevar el estado: cuando dos componentes necesitan lo mismo</h3>
      <p className="my-4">
        Un formulario agrega cursos y una tabla los muestra. Los dos necesitan la misma lista. La solución
        es guardar el estado en el <strong>padre más cercano que los contiene</strong> y pasarles a los hijos lo que
        necesitan: los datos y, para poder modificarlos, funciones por props.
      </p>
      <MermaidDiagram
        title="Elevar el estado al componente padre"
        description="El componente padre PaginaCursos guarda la lista y pasa los datos a TablaCursos y la función agregar a FormularioCurso."
        chart={`flowchart TD
  P["PaginaCursos<br/>guarda: cursos"] -->|"cursos"| T["TablaCursos<br/>solo muestra"]
  P -->|"alGuardar: función agregar"| F["FormularioCurso<br/>captura datos"]
  F -.->|"llama alGuardar(datos)"| P`}
      />
      <CodeFiddle
        language="jsx"
        title="src/pages/PaginaCursos.jsx"
        code={`import { useState } from "react";
import FormularioCurso from "../components/FormularioCurso.jsx";
import TablaCursos from "../components/TablaCursos.jsx";

export default function PaginaCursos() {
  const [cursos, setCursos] = useState([]);

  const agregar = (datos) => {
    setCursos((anterior) => [...anterior, { id: Date.now(), ...datos }]);
  };

  const eliminar = (id) => {
    setCursos((anterior) => anterior.filter((c) => c.id !== id));
  };

  return (
    <>
      <FormularioCurso alGuardar={agregar} />
      <TablaCursos cursos={cursos} alEliminar={eliminar} />
    </>
  );
}`}
      />
      <p className="my-4">
        Los datos bajan por props; los eventos suben llamando a las funciones que el padre entregó. Este patrón (datos
        hacia abajo, eventos hacia arriba) es la base de casi toda aplicación en React.
      </p>
      <Callout title="Una regla para decidir dónde vive el estado" variant="callout-tip">
        <p className="mb-0">
          El estado se guarda primero en el componente que lo usa. Solo cuando otro componente lo necesita, se sube al
          padre común. No conviene subirlo «por si acaso»: más estado arriba significa más componentes que se redibujan.
        </p>
      </Callout>
    </section>
  );
}
