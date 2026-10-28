import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function TecnologiasWebSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Tecnologías emergentes en la web</h2>
      <p className="my-4">
        El navegador también tiene sus propias tecnologías emergentes. Son capacidades que permiten a una página hacer
        cosas que antes solo hacían las aplicaciones instaladas. La tabla las clasifica por madurez; esa columna es la que
        más cambia con el tiempo.
      </p>
      <CompareTable
        headers={["Tecnología", "Qué es", "Madurez", "Cuándo tiene sentido"]}
        rows={[
          ["PWA (aplicación web progresiva)", "Un sitio que se instala como aplicación y funciona sin conexión.", "Madura", "Cuando el sitio debe instalarse y usarse sin red."],
          ["WebAssembly", "Código de otros lenguajes (Rust, C++) que corre en el navegador casi a velocidad nativa.", "Madura", "Tareas pesadas: edición de imagen o video, juegos, cálculo científico."],
          ["WebGPU", "Acceso a la tarjeta gráfica desde el navegador para gráficos y cálculo.", "Reciente, con soporte creciente", "Gráficos 3D avanzados y modelos de IA que corren en el propio equipo."],
          ["IA dentro del navegador", "Modelos pequeños que se ejecutan en el dispositivo del usuario, sin enviar datos a un servidor.", "Emergente", "Cuando importa la privacidad o se necesita funcionar sin conexión."],
          ["WebXR", "Realidad aumentada y virtual en el navegador.", "Emergente; el soporte varía por dispositivo", "Experiencias inmersivas, verificando antes la compatibilidad."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Comprobar el soporte antes de usar</h3>
      <p className="my-4">
        Con las tecnologías web emergentes la pregunta «¿funciona en el navegador de los usuarios?» es parte de la
        evaluación. El sitio web.dev publica la iniciativa <em>Baseline</em>, que indica cuándo una función ya está
        disponible en todos los navegadores principales. En el código, la práctica recomendada es detectar la función
        antes de usarla.
      </p>
      <CodeFiddle
        language="javascript"
        title="Detectar si el navegador soporta una tecnología"
        code={`const soporte = {
  serviceWorker: "serviceWorker" in navigator, // base de las PWA
  webAssembly: typeof WebAssembly === "object",
  webGPU: "gpu" in navigator,
  webXR: "xr" in navigator,
};

console.table(soporte);

if (!soporte.webGPU) {
  console.log("Se usa la alternativa: dibujar con WebGL o procesar en el servidor.");
}`}
      />
      <Callout title="Mejora progresiva" variant="callout-info">
        <p className="mb-0">
          Una tecnología emergente se puede usar en la web sin dejar por fuera a nadie: si el navegador la soporta, se
          ofrece la experiencia mejorada; si no, la página sigue funcionando con lo básico. Esta idea se llama mejora
          progresiva y es una forma prudente de adoptar lo nuevo.
        </p>
      </Callout>
    </section>
  );
}
