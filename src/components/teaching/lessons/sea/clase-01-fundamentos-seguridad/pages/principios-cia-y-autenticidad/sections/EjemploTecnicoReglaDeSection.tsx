import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoReglaDeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (regla de diseño)"}</h2>
      <p className="my-4">{"Regla: el servidor debe calcular y validar todo lo que afecte dinero, permisos o identidad. El cliente solo “solicita”; el servidor “decide”. Además, los eventos críticos deben quedar registrados con un identificador de usuario confiable y contexto de seguridad."}</p>
      <CodeFiddle language="http" code={`# Cliente intenta enviar descuento manipulable (ejemplo conceptual)
POST /api/checkout HTTP/1.1
Host: tienda.ejemplo
Content-Type: application/json

{"cart_id":"c_9","discount":90}

HTTP/1.1 400 Bad Request
Content-Type: application/json

{"error":"No fue posible procesar la solicitud."}`} />
    </section>
  );
}
