export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has aprendido a vincular JavaScript al HTML de forma segura y a usar la consola como primera herramienta de depuración. Estos conceptos son prerequisito para manipular el DOM, responder a eventos y depurar errores en el resto del track Programación básica para entornos web (PBPEW)."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Inline = rápido para prototipos; externo = estándar en proyectos reales."}</li>
        <li>{"Ubicación del <script> importa: defer, final del body o async según el caso."}</li>
        <li>{"console.log y Network son tus primeras herramientas de diagnóstico."}</li>
        <li>{"Una ruta mal escrita en src produce 404 silencioso: la página se ve, el comportamiento no."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección 03-variables-y-tipos — variables, tipos primitivos y operadores básicos."}
      </p>
    </section>
  );
}
