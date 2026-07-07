import { CodeBlock } from "@/components/teaching/CodeBlock";

export function ManejoDeExcepcionesPorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Manejo de excepciones por capa (PHP)"}</h2>
      <p className="my-4">{"Una excepción no debería “reventar” al usuario con detalles internos. La app debe capturar errores, devolver mensajes seguros y mantener un identificador para rastreo. En capas: la capa de aplicación traduce errores a respuestas; la capa de dominio expresa reglas; la infraestructura captura fallos técnicos (BD/red)."}</p>
      <CodeBlock className="language-php">{``}</CodeBlock>
    </section>
  );
}
