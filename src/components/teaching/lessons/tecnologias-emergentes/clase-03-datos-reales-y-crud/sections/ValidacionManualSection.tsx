import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ValidacionManualSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Validar lo que escribe el usuario</h2>
      <p className="my-4">
        Validar es comprobar que los datos cumplen las reglas antes de enviarlos: que el correo tenga forma de correo, que
        la edad sea un número razonable, que los campos obligatorios no estén vacíos. Hacerlo en el formulario le ahorra
        tiempo a la persona (se entera del error al instante, sin esperar a la API) y le ahorra trabajo al servidor.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una función que devuelve los errores</h3>
      <p className="my-4">
        El patrón más simple y claro: una función que recibe los datos y devuelve un objeto con un mensaje por cada campo que
        tenga problema. Si el objeto queda vacío, los datos son válidos.
      </p>
      <CodeFiddle
        language="javascript"
        title="src/utils/validarDocente.js"
        code={`const REGEX_CORREO = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

export function validarDocente(datos) {
  const errores = {};

  if (datos.nombres.trim().length < 2) {
    errores.nombres = "Escribe al menos 2 letras en el nombre.";
  }

  if (!REGEX_CORREO.test(datos.email)) {
    errores.email = "Escribe un correo válido, por ejemplo ana@correo.com.";
  }

  if (!/^\\d{7,10}$/.test(datos.identificacion)) {
    errores.identificacion = "La identificación debe tener entre 7 y 10 números.";
  }

  const telefono = datos.telefono.replace(/\\s/g, "");
  if (telefono !== "" && !/^3\\d{9}$/.test(telefono)) {
    errores.telefono = "El celular debe tener 10 números y empezar por 3.";
  }

  if (datos.fechaNacimiento === "") {
    errores.fechaNacimiento = "Selecciona la fecha de nacimiento.";
  } else if (new Date(datos.fechaNacimiento) > new Date()) {
    errores.fechaNacimiento = "La fecha no puede ser futura.";
  }

  return errores;
}`}
      />
      <Callout title="Sobre las expresiones regulares" variant="callout-info">
        <p className="mb-0">
          Las expresiones regulares (los patrones entre barras) describen la forma de un texto. No necesitas memorizarlas:
          busca la que necesitas, pruébala en un sitio como regex101.com y comprueba que acepta lo que debe y rechaza lo
          que no. Una validación de correo perfecta es imposible con una regex; basta con revisar que tenga la forma
          básica y dejar que el servidor confirme.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Usarla en el formulario</h3>
      <CodeFiddle
        language="jsx"
        title="Mostrar los errores con MUI"
        code={`import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validarDocente } from "../utils/validarDocente.js";

export default function FormularioDocente({ alEnviar }) {
  const [datos, setDatos] = useState({
    nombres: "", email: "", identificacion: "", telefono: "", fechaNacimiento: "",
  });
  const [errores, setErrores] = useState({});

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos((anterior) => ({ ...anterior, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const encontrados = validarDocente(datos);
    setErrores(encontrados);
    if (Object.keys(encontrados).length > 0) return;   // hay errores: no se envía
    alEnviar(datos);
  };

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <TextField
        label="Nombres"
        name="nombres"
        value={datos.nombres}
        onChange={manejarCambio}
        error={Boolean(errores.nombres)}
        helperText={errores.nombres ?? " "}
        fullWidth
        margin="dense"
      />
      <TextField
        label="Correo electrónico"
        name="email"
        value={datos.email}
        onChange={manejarCambio}
        error={Boolean(errores.email)}
        helperText={errores.email ?? " "}
        fullWidth
        margin="dense"
      />
      {/* ...resto de campos con el mismo patrón... */}
      <Button type="submit" variant="contained">Guardar</Button>
    </form>
  );
}`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><code>noValidate</code> en el formulario desactiva los mensajes por defecto del navegador para mostrar los tuyos, que son más claros y consistentes.</li>
        <li><code>helperText=&#123;errores.nombres ?? &quot; &quot;&#125;</code> deja un espacio en blanco cuando no hay error, para que el formulario no «salte» cuando aparece un mensaje.</li>
        <li>La validación ocurre al enviar. También puedes validar cada campo al salir de él con <code>onBlur</code>, lo que da respuesta más temprana sin molestar mientras la persona escribe.</li>
      </ul>

      <CompareTable
        title="Cuándo mostrar el error"
        headers={["Momento", "Ventaja", "Inconveniente"]}
        rows={[
          ["Mientras escribe (onChange)", "Respuesta inmediata", "Molesta: dice «correo inválido» a la segunda letra"],
          ["Al salir del campo (onBlur)", "Equilibrado: espera a que la persona termine", "Hay que registrar qué campos ya se tocaron"],
          ["Al enviar (onSubmit)", "Simple y predecible", "El error se ve tarde, sobre todo en formularios largos"],
        ]}
      />

      <PracticeExercise
        title="Escribe una regla"
        prompt="Describe con palabras (o con código) cómo validarías que la edad de un docente sea un número entero entre 18 y 90. ¿Qué mensaje le mostrarías si no lo cumple?"
        hints={["Recuerda que el valor llega como texto", "Convierte con Number y revisa Number.isInteger", "El mensaje debe decir qué hacer, no solo qué está mal"]}
        expectedKeywords={["number", "entero", "18", "90", "isinteger"]}
      />
    </section>
  );
}
