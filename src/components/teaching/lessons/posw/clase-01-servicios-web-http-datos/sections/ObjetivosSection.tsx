import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase explica cómo se comunican las aplicaciones web: el modelo cliente-servidor, qué es un servicio web y una API, cómo HTTP expresa la intención mediante métodos, códigos de estado y cabeceras, y cómo viajan los datos en XML y JSON."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir el modelo cliente-servidor y distinguir roles de cliente (solicita) y servidor (provee recursos)."}</li>
        <li>{"Definir servicio web como sistema máquina-a-máquina con interfaz estandarizada (típicamente HTTP) y distinguirlo de un sitio web estático orientado solo a humanos."}</li>
        <li>{"Diferenciar SOAP (protocolo XML + WSDL) de REST (estilo arquitectónico sobre HTTP) y ubicar su contexto histórico y de uso."}</li>
        <li>{"Definir API (Application Programming Interface) como contrato de comunicación entre aplicaciones que oculta la implementación interna."}</li>
        <li>{"Definir métodos HTTP (verbos) como indicadores de intención del cliente sobre un recurso, citando RFC 9110 y al menos cinco métodos comunes (GET, POST, PUT, PATCH, DELETE)."}</li>
        <li>{"Definir HTTP headers como pares clave-valor de metadatos que acompañan petición y respuesta, separados del cuerpo por una línea en blanco."}</li>
        <li>{"Definir XML y JSON como formatos de intercambio de datos y ubicarlos históricamente (W3C 1996 vs formalización JSON ~2001)."}</li>
      </ul>
      <Callout title="De la petición a la respuesta">
        {"Cada servicio web es una conversación: un cliente pide, un servidor responde y HTTP define cómo se expresa cada paso."}
      </Callout>
    </section>
  );
}
