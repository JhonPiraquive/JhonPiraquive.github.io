import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RendimientoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Rendimiento: que la aplicación se sienta fluida</h2>
      <p className="my-4">
        Una aplicación es rápida cuando carga pronto y responde al instante a lo que hace el usuario. Hay un error clásico entre
        quienes aprenden: empezar a «optimizar» sin saber qué está lento. La regla de los profesionales es otra:{" "}
        <strong>primero mide, luego mejora</strong>. Casi siempre los problemas reales son pocos y fáciles de encontrar.
      </p>
      <MermaidDiagram
        title="Ciclo de mejora de rendimiento"
        description="Flujo cíclico: medir, encontrar el cuello de botella, aplicar un solo cambio y volver a medir."
        chart={`flowchart LR
  A["Medir<br/>Lighthouse, Profiler, Red"] --> B["Encontrar el cuello de botella"]
  B --> C["Aplicar UN cambio"]
  C --> D["Volver a medir"]
  D -->|"¿mejoró?"| A`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Dónde se pierde el tiempo y qué hacer</h3>
      <CompareTable
        headers={["Problema", "Cómo se nota", "Qué hacer"]}
        rows={[
          ["Se descarga demasiado código al inicio", "La primera carga es lenta, el archivo principal pesa mucho", "Carga perezosa con lazy y Suspense por pantalla (vista en la sección de rutas)"],
          ["Imágenes enormes", "La página tarda mucho y gasta datos móviles", "Usar tamaños adecuados, formatos modernos (WebP o AVIF) y loading=\"lazy\" en imágenes fuera de pantalla"],
          ["Listas muy largas", "Scroll con tirones, la tabla tarda en aparecer", "Paginación (idealmente en el servidor) o virtualización, que dibuja solo las filas visibles"],
          ["Búsqueda que pide datos con cada tecla", "Decenas de peticiones por segundo", "Debounce: esperar unos 300 ms sin teclear antes de buscar"],
          ["Componentes que se redibujan sin necesidad", "La interfaz se siente pesada al escribir", "Mover el estado más cerca de donde se usa; en casos medidos, React.memo"],
          ["Cálculos pesados en cada dibujo", "Se congela un instante al escribir o cambiar un filtro", "Calcularlos menos veces con useMemo, solo si el Profiler lo confirma"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Herramientas para medir</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Lighthouse</strong> (en las herramientas de Chrome): da una nota de rendimiento, accesibilidad y buenas prácticas, con recomendaciones concretas.</li>
        <li><strong>Pestaña Red</strong>: muestra cuánto pesa y cuánto tarda cada archivo y cada petición.</li>
        <li><strong>React Developer Tools, pestaña Profiler</strong>: registra qué componentes se redibujaron y cuánto tardaron. Es la forma correcta de decidir si un componente necesita optimización.</li>
        <li><strong>La salida de <code>npm run build</code></strong>: Vite lista el tamaño de cada archivo generado. Si uno es enorme, hay algo para dividir.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Debounce: no buscar con cada tecla</h3>
      <CodeFiddle
        language="jsx"
        title="src/hooks/useDebounce.js"
        code={`import { useEffect, useState } from "react";

// Devuelve el valor solo después de que dejó de cambiar durante "espera" milisegundos
export default function useDebounce(valor, espera = 300) {
  const [valorEstable, setValorEstable] = useState(valor);

  useEffect(() => {
    const id = setTimeout(() => setValorEstable(valor), espera);
    return () => clearTimeout(id);   // si el valor cambia antes, se cancela el temporizador anterior
  }, [valor, espera]);

  return valorEstable;
}

// Uso: la API se consulta solo cuando la persona hace una pausa al escribir
// const [texto, setTexto] = useState("");
// const textoEstable = useDebounce(texto);
// useEffect(() => { buscar(textoEstable); }, [textoEstable]);`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">memo, useMemo y useCallback: con medida</h3>
      <p className="my-4">
        <code>React.memo</code> evita que un componente se redibuje si sus props no cambiaron. <code>useMemo</code> guarda
        el resultado de un cálculo y <code>useCallback</code> guarda una función entre dibujos. Son herramientas legítimas,
        pero usarlas en todas partes añade complejidad y a veces hasta empeora el rendimiento.
      </p>
      <Callout title="El compilador de React cambia el panorama" variant="callout-info">
        <p className="mb-0">
          El compilador de React ya es estable. Analiza el código al construirlo y aplica estas memorizaciones de forma
          automática donde son seguras. Está disponible como opción en las plantillas de Vite (<code>react-compiler</code>).
          La recomendación actual: escribir código claro, no memorizar a mano salvo que el Profiler muestre un problema
          real, y considerar activar el compilador en proyectos nuevos. Es otro ejemplo de una tecnología emergente que
          pasa a ser parte de la herramienta estándar.
        </p>
      </Callout>
    </section>
  );
}
