import { CodeBlock } from "@/components/teaching/CodeBlock";

export function EjemploTecnicoReglaDeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (regla de diseño)"}</h2>
      <p className="my-4">{"Regla: el servidor debe calcular y validar todo lo que afecte dinero, permisos o identidad. El cliente solo “solicita”; el servidor “decide”. Además, los eventos críticos deben quedar registrados con un identificador de usuario confiable y contexto de seguridad."}</p>
      <CodeBlock className="language-http">{`# Cliente intenta enviar descuento manipulable (ejemplo conceptual)
POST /api/checkout HTTP/1.1
Host: tienda.ejemplo
Content-Type: application/json

{&quot;cart_id&quot;:&quot;c_9&quot;,&quot;discount&quot;:90}

HTTP/1.1 400 Bad Request
Content-Type: application/json

{&quot;error&quot;:&quot;No fue posible procesar la solicitud.&quot;}`}</CodeBlock>
    </section>
  );
}
