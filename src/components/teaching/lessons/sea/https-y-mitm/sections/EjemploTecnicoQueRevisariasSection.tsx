import { CodeBlock } from "@/components/teaching/CodeBlock";

export function EjemploTecnicoQueRevisariasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué revisarías)"}</h2>
      <p className="my-4">{"A nivel de app, revisas que todo el sitio cargue por HTTPS, que no haya recursos mixtos (HTTP dentro de HTTPS), que las cookies de sesión tengan bandera Secure, y que el servidor redirija HTTP→HTTPS. También revisas que el usuario reciba errores genéricos y no pistas internas."}</p>
      <CodeBlock className="language-http">{`GET / HTTP/1.1
Host: ejemplo.com

HTTP/1.1 301 Moved Permanently
Location: https://ejemplo.com/

GET / HTTP/1.1
Host: ejemplo.com

HTTP/1.1 200 OK
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Type: text/html; charset=utf-8`}</CodeBlock>
    </section>
  );
}
