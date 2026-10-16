import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EventosYFormulariosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Eventos y formularios controlados</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Eventos: reaccionar a lo que hace el usuario</h3>
      <p className="my-4">
        Un evento es algo que ocurre en la página: un clic, una tecla, un cambio en un campo. En React los escuchas con
        atributos en camelCase (<code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>) a los que les pasas una{" "}
        <strong>función</strong>.
      </p>
      <CodeFiddle
        language="jsx"
        title="Pasar la función, no llamarla"
        code={`function manejarClic() {
  console.log("Clic");
}

// Correcto: le entregas la función para que React la llame cuando haya clic
<button onClick={manejarClic}>Guardar</button>

// Correcto cuando necesitas pasar un argumento: una flecha que llama a la función
<button onClick={() => eliminar(curso.id)}>Eliminar</button>

// Incorrecto: se ejecuta apenas se dibuja el botón, no al hacer clic
<button onClick={eliminar(curso.id)}>Eliminar</button>`}
      />
      <Callout title="El error más común con eventos" variant="callout-danger">
        <p className="mb-0">
          Escribir <code>onClick={"{funcion()}"}</code> con paréntesis ejecuta la función al dibujar. Con paréntesis la
          llamas; sin paréntesis se la entregas a React para que la llame después.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El objeto del evento</h3>
      <p className="my-4">
        Cada manejador recibe un objeto con información del evento. Los dos datos que más usarás son{" "}
        <code>e.target.value</code> (lo que hay escrito en el campo) y <code>e.preventDefault()</code> (evitar el
        comportamiento por defecto del navegador, como recargar la página al enviar un formulario).
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Formularios controlados</h3>
      <p className="my-4">
        En un campo controlado, React es quien manda sobre lo que se ve: el valor del campo viene del estado, y cada vez
        que el usuario escribe, el estado se actualiza. Así siempre sabes qué contiene el formulario.
      </p>
      <CodeFiddle
        language="jsx"
        title="Un campo controlado"
        code={`import { useState } from "react";

export default function CampoNombre() {
  const [nombre, setNombre] = useState("");

  return (
    <label>
      Nombre del curso
      <input
        value={nombre}                            // lo que se muestra viene del estado
        onChange={(e) => setNombre(e.target.value)}  // cada tecla actualiza el estado
      />
      <p>Escribiste: {nombre}</p>
    </label>
  );
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un formulario con varios campos</h3>
      <p className="my-4">
        Tener un <code>useState</code> por cada campo se vuelve largo. Una opción más limpia es un solo objeto de estado y
        un único manejador que usa el atributo <code>name</code> de cada campo para saber cuál actualizar.
      </p>
      <CodeFiddle
        language="jsx"
        title="src/components/FormularioCurso.jsx"
        code={`import { useState } from "react";

const VALORES_INICIALES = { nombre: "", docente: "", creditos: 3, virtual: false };

export default function FormularioCurso({ alGuardar }) {
  const [datos, setDatos] = useState(VALORES_INICIALES);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos((anterior) => ({
      ...anterior,                                   // copio lo que había
      [name]: type === "checkbox" ? checked : value,  // y cambio solo el campo que escribió el usuario
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();         // evita que la página se recargue
    alGuardar(datos);           // le entrego los datos al componente padre
    setDatos(VALORES_INICIALES); // limpio el formulario
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre
        <input name="nombre" value={datos.nombre} onChange={manejarCambio} required />
      </label>

      <label>
        Docente
        <input name="docente" value={datos.docente} onChange={manejarCambio} required />
      </label>

      <label>
        Créditos
        <select name="creditos" value={datos.creditos} onChange={manejarCambio}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </label>

      <label>
        <input type="checkbox" name="virtual" checked={datos.virtual} onChange={manejarCambio} />
        Es virtual
      </label>

      <button type="submit">Guardar</button>
    </form>
  );
}`}
      />
      <p className="my-4">
        Fíjate en dos detalles. Los checkboxes usan <code>checked</code> en lugar de <code>value</code>. Y los valores de
        los campos siempre llegan como texto: si necesitas un número, conviértelo con{" "}
        <code>Number(valor)</code> antes de enviarlo.
      </p>

      <CompareTable
        title="Controlado frente a no controlado"
        headers={["", "Controlado", "No controlado"]}
        rows={[
          ["Quién guarda el valor", "El estado de React", "El propio campo HTML"],
          ["Cómo lo lees", "Directamente del estado", "Con una referencia o al enviar el formulario"],
          ["Validar mientras escribe", "Fácil", "Más difícil"],
          ["Cuándo conviene", "Formularios con validación o campos que dependen unos de otros", "Formularios muy simples o con muchos campos (librerías como React Hook Form lo usan por rendimiento)"],
        ]}
      />
      <Callout title="Sobre las acciones de formulario de React 19" variant="callout-info">
        <p className="mb-0">
          React 19 trae una forma nueva de manejar formularios: pasar una función al atributo <code>action</code> y usar
          hooks como <code>useActionState</code>. Es muy útil, sobre todo cuando hay un servidor de por medio. Para
          aprender y para trabajar con una API externa, el patrón con <code>onSubmit</code> y estado controlado sigue
          siendo el más claro y el que verás en casi todos los proyectos; por eso empezamos por ahí.
        </p>
      </Callout>

      <PracticeExercise
        title="Encuentra el error"
        prompt="Un compañero escribió: <input value={nombre} />. El campo no deja escribir nada. ¿Qué le falta y por qué ocurre?"
        hints={["El campo está controlado por el estado", "Si el estado no cambia, el valor mostrado tampoco cambia", "Falta el manejador onChange que llame al setter"]}
        expectedKeywords={["onchange", "setnombre", "manejador", "estado"]}
      />
    </section>
  );
}
