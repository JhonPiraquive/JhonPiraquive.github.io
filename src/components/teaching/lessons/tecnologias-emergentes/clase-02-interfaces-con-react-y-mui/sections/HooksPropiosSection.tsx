import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function HooksPropiosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Hooks propios: reutilizar lógica</h2>
      <p className="my-4">
        Los componentes reutilizan <em>pantalla</em>. Los hooks propios reutilizan <em>lógica</em>. Si dos componentes
        repiten la misma combinación de useState y useEffect, puedes sacarla a una función cuyo nombre empiece con{" "}
        <code>use</code>. Esa función es un hook propio.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ejemplo: guardar un valor en el navegador</h3>
      <p className="my-4">
        El navegador tiene un pequeño almacén llamado <code>localStorage</code> donde puedes guardar texto y recuperarlo
        aunque el usuario cierre la pestaña. Sin hook, tendrías que repetir el código de leer y guardar en cada componente.
        Con un hook propio queda en un solo lugar:
      </p>
      <CodeFiddle
        language="javascript"
        title="src/hooks/useAlmacenLocal.js"
        code={`import { useEffect, useState } from "react";

export default function useAlmacenLocal(clave, valorInicial) {
  // Función dentro de useState: solo se ejecuta la primera vez
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave);
      return guardado !== null ? JSON.parse(guardado) : valorInicial;
    } catch {
      return valorInicial;   // si el navegador lo bloquea o el JSON está dañado
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch {
      // sin espacio o sin permiso: la aplicación sigue funcionando, solo no se guarda
    }
  }, [clave, valor]);

  return [valor, setValor];   // misma forma que useState
}`}
      />
      <CodeFiddle
        language="jsx"
        title="Usarlo es igual que usar useState"
        code={`import useAlmacenLocal from "../hooks/useAlmacenLocal.js";

export default function PreferenciaTema() {
  const [oscuro, setOscuro] = useAlmacenLocal("tema-oscuro", false);

  return (
    <button onClick={() => setOscuro((v) => !v)}>
      {oscuro ? "Cambiar a claro" : "Cambiar a oscuro"}
    </button>
  );
}`}
      />
      <Callout title="Qué hay que notar" variant="callout-info">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Cada componente que llame al hook obtiene su propio estado; no se comparte entre ellos.</li>
          <li>El hook devuelve lo que sea conveniente: un arreglo, un objeto o un solo valor.</li>
          <li>El valor inicial de useState puede ser una función que se ejecuta una sola vez: útil cuando calcular el valor inicial es costoso.</li>
          <li>Se usa try/catch porque localStorage puede estar bloqueado o lleno; nunca debe romper la aplicación.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Otros hooks que conviene conocer</h3>
      <CompareTable
        headers={["Hook", "Para qué sirve", "Cuándo lo necesitas"]}
        rows={[
          ["useRef", "Guarda un valor que no provoca nuevos dibujos, o apunta a un elemento del DOM", "Poner el foco en un campo, medir un elemento"],
          ["useMemo", "Recuerda el resultado de un cálculo costoso", "Solo si mediste que el cálculo es lento (clase 3)"],
          ["useCallback", "Recuerda una función entre dibujos", "Solo para evitar redibujos medidos de hijos memorizados (clase 3)"],
          ["useContext", "Lee datos compartidos sin pasarlos por props", "Tema, usuario, idioma (siguiente sección)"],
          ["useReducer", "Estado complejo con muchas acciones, como un carrito", "Cuando varios setState se vuelven un enredo"],
        ]}
      />
      <Callout title="Una advertencia sobre la memorización" variant="callout-tip">
        <p className="mb-0">
          useMemo y useCallback se enseñan mucho, pero la mayoría de las veces no hacen falta. Mide antes de usarlos. Además,
          el React Compiler (versión 1.0 estable desde octubre de 2025) puede aplicar estas optimizaciones por ti sin que
          escribas nada, así que su importancia irá disminuyendo.
        </p>
      </Callout>
    </section>
  );
}
