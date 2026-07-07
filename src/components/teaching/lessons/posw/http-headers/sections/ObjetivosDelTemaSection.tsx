import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección profundiza en los metadatos del mensaje HTTP: qué llevan los headers, cómo se clasifican, por qué CORS afecta solo al navegador y qué headers de seguridad son imprescindibles en producción."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir HTTP headers como pares clave-valor de metadatos que acompañan petición y respuesta, separados del cuerpo por una línea en blanco."
          }
        </li>
        <li>
          {
            "Clasificar headers en Request, Response, General y Entity, con ejemplos reales (Host, Authorization, Content-Type, Cache-Control)."
          }
        </li>
        <li>
          {
            "Explicar el flujo CORS preflight (OPTIONS → headers Access-Control-* → petición real) y cuándo el navegador lo dispara."
          }
        </li>
        <li>
          {
            "Configurar headers de seguridad esenciales (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) y el ataque que cada uno mitiga."
          }
        </li>
        <li>
          {
            "Interpretar un mensaje HTTP completo identificando línea de inicio, headers y su relación con métodos y códigos de estado."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Lección http-metodos-status:"}</strong>
          {" métodos HTTP, códigos de estado y estructura básica de respuesta."}
        </li>
        <li>
          <strong>{"Lección protocolos-seguridad:"}</strong>
          {" HTTPS, TLS y amenazas en tránsito."}
        </li>
        <li>{"Familiaridad con peticiones desde navegador (SPA) y desde herramientas como curl o Postman."}</li>
      </ul>
      <Callout title="Body vs headers">
        {
          "El cuerpo transporta datos (JSON del producto); los headers transportan instrucciones sobre esos datos (formato, autenticación, caché, permisos CORS). Olvidar Content-Type en POST es una causa frecuente de 400 Bad Request."
        }
      </Callout>
    </section>
  );
}
