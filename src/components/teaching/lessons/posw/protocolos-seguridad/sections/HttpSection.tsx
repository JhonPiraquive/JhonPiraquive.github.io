import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function HttpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"HTTP: HyperText Transfer Protocol"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Protocolo de capa de aplicación (Tim Berners-Lee, 1989)."}</li>
        <li>
          <strong>{"Stateless:"}</strong>
          {" cada petición es independiente."}
        </li>
        <li>
          {"Puerto "}
          <strong>{"80"}</strong>
          {", datos en "}
          <strong>{"texto plano"}</strong>
          {" (sin cifrado)."}
        </li>
        <li>{"Versiones: HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3 (QUIC)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        <strong>{"HTTP"}</strong>
        {
          " define el formato y la transmisión de mensajes entre clientes (navegadores, apps, scripts) y servidores. El servidor no retiene memoria del cliente entre peticiones; el estado de sesión se simula con cookies, tokens u otros mecanismos de aplicación."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: GET en texto plano (vulnerable)"}</h3>
      <CodeFiddle
        language="http"
        title="GET en texto plano (vulnerable)"
        code={`GET /api/usuarios/42 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

(sin cuerpo en GET)`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-patrón: login en HTTP"}</h3>
      <CodeFiddle
        language="http"
        title="Anti-patrón: login en HTTP"
        code={`POST /login HTTP/1.1
Host: app-insegura.com
Content-Type: application/json

{"email":"ana@ejemplo.com","password":"secreta123"}`}
      />
      <p className="my-4 italic text-[var(--color-neutral-mid)]">
        {"Cualquier nodo en la red puede leer el cuerpo en texto plano."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Riesgo en red compartida"}</h3>
      <p className="my-4">
        {
          "En Wi-Fi pública, un interceptor con herramientas como Wireshark puede leer contraseñas, tokens Bearer y datos personales del mensaje crudo."
        }
      </p>
      <Callout title="Caso real: cafetería y token robado">
        {
          "Un desarrollador prueba contra http://api.staging.empresa.com desde un café. Un atacante captura Authorization: Bearer ... de un GET. Accede a datos hasta que rotan claves. Decisión clave: forzar HTTPS en todos los entornos accesibles fuera de localhost."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Stateless y sesión de usuario"}</h3>
      <p className="my-4">
        {
          'HTTP no recuerda peticiones anteriores. La "sesión" se mantiene con cookies, JWT en headers o API keys — mecanismos de capa de aplicación, no del protocolo HTTP.'
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="¿Por qué HTTP se llama stateless y cómo se mantiene entonces una sesión de usuario en una web?"
        hints={["Cada petición es independiente", "Cookies, tokens o sesiones en aplicación"]}
        expectedKeywords={["stateless", "cookie", "token", "aplicación"]}
        successMessage="Correcto. HTTP no guarda estado entre peticiones; la aplicación simula sesión con cookies, JWT u otros mecanismos."
      />
    </section>
  );
}
