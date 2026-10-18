import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase sube un nivel: cómo se diseña una API (REST y sus alternativas), qué hay detrás de ella (backend, bases de datos y caché) y cómo se protege (HTTPS, tokens y OAuth)."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir REST como estilo arquitectónico (no protocolo) de Roy Fielding (2000) y enumerar sus seis constraints."}</li>
        <li>{"Describir las capas internas de una API REST (gateway, controlador, servicio, repositorio)."}</li>
        <li>{"Definir backend (server-side) como la capa que ejecuta en el servidor, gestiona lógica de negocio, persistencia, autenticación e integraciones, y expone APIs al frontend."}</li>
        <li>{"Clasificar comandos SQL en DDL, DML, DCL y TCL y asignar cada operación a su familia."}</li>
        <li>{"Definir caché como almacenamiento temporal de alta velocidad que reutiliza resultados costosos de computar u obtener."}</li>
        <li>{"Definir HTTP como protocolo de aplicación stateless entre cliente y servidor, con puerto 80 y mensajes en texto plano sin cifrado."}</li>
        <li>{"Explicar la estructura de un JWT (header.payload.signature), sus claims principales (sub, iat, exp) y por qué el payload no está cifrado."}</li>
      </ul>
      <Callout title="Diseñar, guardar y proteger">
        {"Una API útil combina un buen contrato, datos bien almacenados y una seguridad que no depende de la confianza en el cliente."}
      </Callout>
    </section>
  );
}
