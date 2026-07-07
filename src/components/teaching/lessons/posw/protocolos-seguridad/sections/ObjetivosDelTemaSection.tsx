import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre HTTP como protocolo de aplicación, HTTPS con TLS, la evolución SSL→TLS y el handshake que establece un canal cifrado."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir HTTP como protocolo de aplicación stateless entre cliente y servidor, con puerto 80 y mensajes en texto plano sin cifrado."
          }
        </li>
        <li>
          {
            "Explicar HTTPS como HTTP sobre TLS, enumerando confidencialidad, integridad y autenticación del servidor (certificado CA, puerto 443)."
          }
        </li>
        <li>
          {
            "Diferenciar SSL (obsoleto) de TLS 1.2/1.3 (aceptables en 2025) y ubicar hitos en la línea de tiempo."
          }
        </li>
        <li>
          {
            "Describir los pasos principales del handshake TLS 1.3 (ClientHello, ServerHello, Certificate, Finished, canal cifrado)."
          }
        </li>
        <li>
          {
            "Comparar HTTP vs HTTPS en puerto, cifrado, certificado, SEO y recomendación de uso en producción vs desarrollo local."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección servicios-web: cliente-servidor, peticiones HTTP básicas."}</li>
        <li>{"Lección formatos-datos: JSON en respuestas HTTP."}</li>
        <li>{"Conocimiento básico de URLs (http://, https://) y navegador web."}</li>
      </ul>
      <Callout title="Producción siempre HTTPS">
        {
          "Enviar credenciales o tokens Bearer por HTTP en producción expone datos en cualquier red intermedia. TLS protege el transporte; la autenticación de usuarios sigue siendo responsabilidad de la capa de aplicación."
        }
      </Callout>
    </section>
  );
}
