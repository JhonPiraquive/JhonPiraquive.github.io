import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { Link } from "@/i18n/navigation";

export function ValidarEnElServidorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">El servidor también valida: nunca confíes en el navegador</h2>
      <p className="my-4">
        Todo lo que corre en el navegador está en manos de quien lo usa. Cualquiera puede abrir las herramientas de
        desarrollo, desactivar tu validación, modificar el JavaScript o enviar peticiones con curl sin pasar por tu
        formulario. Por eso hay una regla de oro:
      </p>
      <Callout title="Regla de oro" variant="callout-danger">
        <p className="mb-0">
          La validación del frontend es para <strong>ayudar a la persona</strong>. La validación del servidor es para{" "}
          <strong>proteger el sistema</strong>. Necesitas las dos, y la segunda nunca es opcional.
        </p>
      </Callout>
      <CompareTable
        headers={["", "Validar en el cliente (React)", "Validar en el servidor (API)"]}
        rows={[
          ["Objetivo", "Mejor experiencia: errores al instante", "Seguridad y consistencia de los datos"],
          ["¿Se puede saltar?", "Sí, fácilmente", "No: es el último control antes de la base de datos"],
          ["Qué revisa", "Formato, campos obligatorios, rangos", "Todo lo anterior, más reglas de negocio (código repetido, permisos)"],
          ["Cómo avisa", "helperText en el campo", "Código 400, 409 o 422 con un cuerpo que explica el problema"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Mostrar en el formulario los errores que manda el servidor</h3>
      <p className="my-4">
        Hay reglas que solo el servidor puede comprobar, como «ese código ya existe». Una API bien hecha devuelve un código
        4xx y un cuerpo que indica qué campo falló. Tu formulario debe ser capaz de mostrar ese mensaje junto al campo
        correspondiente.
      </p>
      <CodeFiddle
        language="http"
        title="Respuesta de la API ante datos inválidos"
        code={`HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "errores": {
    "codigo": "Ya existe una materia con este código.",
    "creditos": "Debe estar entre 1 y 10."
  }
}`}
      />
      <CodeFiddle
        language="jsx"
        title="Recibirlos en la pantalla de crear"
        code={`const [erroresServidor, setErroresServidor] = useState({});

const guardar = async (datos) => {
  setGuardando(true);
  setErroresServidor({});
  try {
    await api.crear("materias", datos);
    navigate("/materias");
  } catch (e) {
    if (e.estado === 400 && e.detalle?.errores) {
      setErroresServidor(e.detalle.errores);   // se los pasas al formulario para pintarlos
    } else {
      setError("No pudimos guardar. Inténtalo de nuevo.");
    }
    setGuardando(false);
  }
};

// En el formulario:
// <TextField ... error={Boolean(erroresServidor.codigo)} helperText={erroresServidor.codigo ?? " "} />`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Seguridad en el frontend: lo esencial</h3>
      <CompareTable
        headers={["Tema", "Qué debes saber", "Qué hacer"]}
        rows={[
          [
            "Inyección de código (XSS)",
            "React escapa por defecto lo que muestras dentro de las llaves, así que un texto con <script> se ve como texto",
            "Evita dangerouslySetInnerHTML con contenido de usuarios. Si es imprescindible, límpialo antes con una librería de saneamiento",
          ],
          [
            "Variables de entorno",
            "Todo lo que empieza con VITE_ se incluye en el código que descarga el navegador: es público",
            "Nunca pongas claves secretas ni contraseñas en el frontend. Van en el servidor",
          ],
          [
            "Permisos",
            "Ocultar un botón o una ruta no impide que alguien llame a la API directamente",
            "Los permisos se comprueban en el servidor en cada petición",
          ],
          [
            "Credenciales y tokens",
            "Si guardas un token en localStorage, cualquier script que se cuele en tu página puede leerlo",
            "Prefiere cookies httpOnly emitidas por el servidor, y siempre usa HTTPS",
          ],
          [
            "CORS",
            "Regula qué páginas pueden leer respuestas, pero no autentica a nadie",
            "No lo uses como único control de acceso",
          ],
        ]}
      />
      <p className="my-4">
        Para profundizar en estas ideas tienes el módulo de seguridad de este sitio:{" "}
        <Link href="/teaching/sea/ataques-web-sqli-y-mitigacion">ataques web e inyección SQL</Link> y{" "}
        <Link href="/teaching/sea/https-y-mitm">HTTPS y ataques de intermediario</Link>.
      </p>
    </section>
  );
}
