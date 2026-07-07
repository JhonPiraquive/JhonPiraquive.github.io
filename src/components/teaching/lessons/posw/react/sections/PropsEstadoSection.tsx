import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PropsEstadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Props y estado"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Props: datos de solo lectura del padre al hijo; nunca mutar props."}</li>
        <li>{"useState: estado local; actualizar con setter, no mutar directamente."}</li>
        <li>{"Objetos en estado: usar spread setForm(prev => ({ ...prev, ... }))."}</li>
        <li>{"Flujo unidireccional: padre posee el estado; hijo notifica con callbacks."}</li>
      </ul>
      <CompareTable
        headers={["Concepto", "Quién lo controla", "Mutable en hijo", "Ejemplo"]}
        rows={[
          ["Props", "Componente padre", "No (solo lectura)", "nombre, precio, onAgregar"],
          ["Estado (useState)", "El propio componente", "Sí, vía setter", "contador, formulario, cargando"],
          ["Callback prop", "Padre define función", "Hijo solo invoca", "onAgregar(nombre)"],
        ]}
      />
      <CodeFiddle
        language="javascript"
        title="useState: contador"
        code={`import { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(c => c + 1)}>+1</button>
    </div>
  );
}`}
      />
      <CodeFiddle
        language="javascript"
        title="useState: formulario con objeto"
        code={`function FormularioContacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <input name="nombre" value={form.nombre} onChange={handleChange} />
  );
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Mutar estado directamente (cuenta++) en lugar de setCuenta(c => c + 1)."}</li>
        <li>{"Usar índice como key en listas que cambian de orden."}</li>
        <li>{"Inicializar estado local desde props sin considerar sincronización."}</li>
      </ul>
      <PracticeExercise
        prompt="Compara el flujo de datos en React (props hacia abajo) con @Input/@Output en Angular. ¿Qué similitudes y diferencias encuentras?"
        hints={["Props ≈ Input", "Callback ≈ Output", "JSX vs templates"]}
        expectedKeywords={["props", "padre", "hijo", "callback"]}
        successMessage="Correcto. Ambos fluyen datos del padre al hijo; React usa callbacks en lugar de EventEmitter."
      />
    </section>
  );
}
