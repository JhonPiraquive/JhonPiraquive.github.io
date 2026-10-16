import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function RetoClase02Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Práctica guiada: un módulo de materias</h2>
      <p className="my-4">
        En esta práctica armas un sitio administrativo pequeño con todo lo de la clase: Material UI, React Router, estado y
        formularios. Todavía no hay servidor: los datos viven en el estado del navegador. En la clase 3 cambiarás esa parte
        por una API real, y por eso conviene que la estructura quede limpia.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué debes construir</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Un marco con barra superior y menú lateral, con las opciones «Inicio» y «Materias».</li>
        <li>Una pantalla de inicio con un título de bienvenida y una tarjeta que diga cuántas materias hay registradas.</li>
        <li>Un listado de materias en una tabla de MUI con las columnas código, nombre, créditos y acciones (editar y eliminar).</li>
        <li>Un botón «Agregar materia» que lleve a un formulario. El mismo formulario sirve para crear y para editar.</li>
        <li>Confirmación antes de eliminar y un mensaje de éxito después de guardar o eliminar.</li>
        <li>Una pantalla para direcciones que no existen.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ruta sugerida</h3>
      <StepReveal
        title="Siete pasos"
        steps={[
          { title: "Prepara el proyecto", content: "Crea un proyecto nuevo con Vite, instala @mui/material, @emotion/react, @emotion/styled, @mui/icons-material, @fontsource/roboto y react-router. Deja ThemeProvider y CssBaseline en main.jsx." },
          { title: "Dibuja el marco", content: "Crea LayoutAdmin con AppBar, Drawer y un Outlet. Declara las rutas con un Route de layout y prueba que el menú cambia la pantalla sin recargar." },
          { title: "Guarda las materias arriba", content: "Piensa qué componente es el padre común del listado y del formulario. Ahí vive el estado con la lista de materias. Si ambos son pantallas distintas, considera un contexto." },
          { title: "Haz el listado", content: "Crea la tabla con TableContainer. Recorre las materias con map y no olvides la key. Agrega los dos IconButton con aria-label." },
          { title: "Haz el formulario", content: "Un solo componente que recibe valores iniciales: vacíos para crear, los de la materia para editar. Usa useParams para saber si hay un id. Al guardar, usa navigate para volver al listado." },
          { title: "Cubre los estados", content: "Qué muestra el listado cuando no hay materias. Qué muestra el formulario cuando el id no existe. Agrega el Dialog de confirmación y el Snackbar." },
          { title: "Revisa la accesibilidad", content: "Recorre todo con la tecla Tab, ejecuta Lighthouse y corrige lo que reporte." },
        ]}
      />

      <Callout title="Cómo saber que quedó bien" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Puedes crear, editar y eliminar una materia sin recargar la página.</li>
          <li>Si escribes una dirección inválida, ves tu pantalla de «no encontrada» dentro del marco.</li>
          <li>Si recargas con F5 en <code>/materias/nueva</code>, la pantalla se mantiene (en desarrollo). Los datos, en cambio, se pierden porque aún viven en memoria; es normal y lo resuelve la clase 3.</li>
          <li>Ningún campo obligatorio vacío permite guardar, y los mensajes dicen cómo corregir.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para ir más lejos</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Guarda la lista en el navegador con el hook <code>useAlmacenLocal</code> de esta clase y comprueba que sobrevive a recargar.</li>
        <li>Agrega un campo de búsqueda que filtre la tabla mientras escribes.</li>
        <li>Agrega un botón para cambiar entre modo claro y oscuro.</li>
      </ul>
    </section>
  );
}
