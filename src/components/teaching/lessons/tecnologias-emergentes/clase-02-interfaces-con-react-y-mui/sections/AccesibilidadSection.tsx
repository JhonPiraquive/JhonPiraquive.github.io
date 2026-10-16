import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function AccesibilidadSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Accesibilidad: una interfaz que todas las personas puedan usar</h2>
      <p className="my-4">
        Accesibilidad significa que tu sitio pueda ser usado por personas con distintas capacidades: quien no ve la
        pantalla y usa un lector de voz, quien no puede usar el ratón y navega con el teclado, quien tiene baja visión o
        no distingue ciertos colores, o quien simplemente está en un lugar con mucho sol. No es un lujo ni un extra: mejora
        la experiencia de todos y en muchos lugares es un requisito legal.
      </p>
      <p className="my-4">
        La referencia internacional son las pautas WCAG, que piden cumplir un nivel llamado AA en la mayoría de los
        sitios. Las pautas parecen largas, pero en el día a día se resumen en unos hábitos.
      </p>
      <MermaidDiagram
        title="Hábitos de accesibilidad"
        description="Mapa mental con cinco hábitos: HTML con sentido, etiquetas, contraste y color, teclado y pruebas."
        chart={`mindmap
  root((Accesibilidad))
    HTML con sentido
      Títulos en orden
      Botones son button
      Enlaces son a
    Etiquetas
      label en cada campo
      alt en imágenes
      aria-label en iconos
    Contraste y color
      Contraste de 4.5 a 1
      No solo color
    Teclado
      Tab recorre todo
      Foco visible
    Pruebas
      Lighthouse
      Extensión axe`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Hábitos que puedes aplicar desde hoy</h3>
      <CompareTable
        headers={["Hábito", "Por qué", "Cómo"]}
        rows={[
          ["Usa la etiqueta correcta", "Un lector de pantalla anuncia «botón» o «enlace» según la etiqueta", "<button> para acciones, <a> o Link para ir a otra página. No uses un <div onClick> como botón"],
          ["Cada campo con su etiqueta", "Sin ella, la persona no sabe qué escribir", "En MUI, TextField con la propiedad label. Un placeholder no reemplaza a la etiqueta"],
          ["Imágenes con alt", "Describe la imagen a quien no la ve", "alt=\"Capuchino con espuma\"; si es decorativa, alt vacío"],
          ["Botones de solo icono con nombre", "Un icono no se lee en voz alta", "aria-label=\"Eliminar docente\""],
          ["Contraste suficiente", "Texto gris claro sobre blanco es ilegible para mucha gente", "Relación de 4.5 a 1 para texto normal; revísala en las herramientas de desarrollo"],
          ["No transmitir información solo con color", "Hay personas que no distinguen el rojo del verde", "Precio tachado además de gris; error con icono y texto, no solo borde rojo"],
          ["Todo usable con teclado", "No todas las personas usan ratón", "Recorre tu pantalla con Tab y Enter; el foco debe verse siempre"],
          ["Títulos en orden", "Se usan para saltar por la página", "Un h1 por página y luego h2, h3 sin saltarte niveles"],
        ]}
      />
      <CodeFiddle
        language="jsx"
        title="Antes y después"
        code={`// ❌ Se ve como botón, pero no lo es: el teclado y el lector de pantalla lo ignoran
<div onClick={eliminar} style={{ color: "red" }}>🗑</div>

// ✅ Un botón real, con nombre accesible
<IconButton aria-label={\`Eliminar a \${docente.nombres}\`} onClick={eliminar} color="error">
  <DeleteIcon />
</IconButton>`}
      />
      <Callout title="MUI ayuda, pero no lo hace todo" variant="callout-info">
        <p className="mb-0">
          Los componentes de MUI ya vienen con muchos detalles de accesibilidad resueltos (foco, roles, manejo de teclado
          en menús y diálogos). Lo que no pueden adivinar son tus textos: las etiquetas, las descripciones y el orden de la
          página. Eso sigue siendo tu responsabilidad.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo comprobar tu trabajo</h3>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>Deja el ratón a un lado y recorre toda la pantalla con la tecla Tab. ¿Llegas a todo? ¿Ves dónde estás?</li>
        <li>En Chrome o Edge abre las herramientas de desarrollo y ejecuta Lighthouse, pestaña Accesibilidad.</li>
        <li>Instala la extensión gratuita axe DevTools, que señala cada problema y explica cómo corregirlo.</li>
        <li>Aleja la página al 200 % con el zoom: no debe romperse ni ocultar contenido.</li>
      </ol>
    </section>
  );
}
