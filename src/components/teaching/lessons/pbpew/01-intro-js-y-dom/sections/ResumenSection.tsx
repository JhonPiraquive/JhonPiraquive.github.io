export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "JavaScript da comportamiento a la web y se ha extendido a servidor (Node.js), herramientas, móvil y videojuegos."
          }
        </li>
        <li>
          {
            "El DOM es el árbol de objetos en memoria que representa la página; JS lo manipula en tiempo de ejecución sin modificar el archivo HTML en disco."
          }
        </li>
        <li>{"DevTools → Consola permite depurar con console.log y probar acceso al DOM mediante document."}</li>
        <li>
          {
            "TypeScript añade tipos estáticos; debe transpilarse a JavaScript antes de ejecutarse en navegador o Node.js."
          }
        </li>
        <li>
          {
            "La lección siguiente (02-js-en-html) profundiza en cómo vincular scripts al HTML (inline vs externo)."
          }
        </li>
      </ul>
    </section>
  );
}
