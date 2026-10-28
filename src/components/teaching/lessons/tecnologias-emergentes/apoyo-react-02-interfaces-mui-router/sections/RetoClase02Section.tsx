import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function RetoClase02Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Práctica guiada: un módulo de materias</h2>
      <p className="my-4">
        La práctica consiste en armar un sitio administrativo pequeño con todo lo visto en la clase: Material UI, React
        Router, estado y formularios. Todavía no hay servidor: los datos viven en el estado del navegador. En la parte 3 de la guía
        esa parte se reemplaza por una API real, por lo que conviene mantener la estructura limpia.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Requisitos</h3>
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
          { title: "Preparar el proyecto", content: "Se crea un proyecto nuevo con Vite y se instalan @mui/material, @emotion/react, @emotion/styled, @mui/icons-material, @fontsource/roboto y react-router. ThemeProvider y CssBaseline quedan en main.jsx." },
          { title: "Dibujar el marco", content: "Se crea LayoutAdmin con AppBar, Drawer y un Outlet. Las rutas se declaran con un Route de layout y se comprueba que el menú cambia la pantalla sin recargar." },
          { title: "Guardar las materias arriba", content: "Se identifica el componente que es padre común del listado y del formulario; ahí vive el estado con la lista de materias. Si ambos son pantallas distintas, conviene un contexto." },
          { title: "Hacer el listado", content: "Se crea la tabla con TableContainer, se recorren las materias con map (sin olvidar la key) y se agregan los dos IconButton con aria-label." },
          { title: "Hacer el formulario", content: "Un solo componente que recibe valores iniciales: vacíos para crear, los de la materia para editar. useParams indica si hay un id y, al guardar, navigate regresa al listado." },
          { title: "Cubrir los estados", content: "Se define qué muestra el listado cuando no hay materias y qué muestra el formulario cuando el id no existe. Se agregan el Dialog de confirmación y el Snackbar." },
          { title: "Revisar la accesibilidad", content: "Se recorre todo con la tecla Tab, se ejecuta Lighthouse y se corrige lo que reporte." },
        ]}
      />

      <Callout title="Cómo verificar el resultado" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Se puede crear, editar y eliminar una materia sin recargar la página.</li>
          <li>Una dirección inválida muestra la pantalla de «no encontrada» dentro del marco.</li>
          <li>Al recargar con F5 en <code>/materias/nueva</code>, la pantalla se mantiene (en desarrollo). Los datos, en cambio, se pierden porque aún viven en memoria; es normal y lo resuelve la parte 3 de la guía.</li>
          <li>Ningún campo obligatorio vacío permite guardar, y los mensajes dicen cómo corregir.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para ir más lejos</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Guardar la lista en el navegador con el hook <code>useAlmacenLocal</code> de esta clase y comprobar que sobrevive a recargar.</li>
        <li>Agregar un campo de búsqueda que filtre la tabla mientras se escribe.</li>
        <li>Agregar un botón para cambiar entre modo claro y oscuro.</li>
      </ul>
    </section>
  );
}
