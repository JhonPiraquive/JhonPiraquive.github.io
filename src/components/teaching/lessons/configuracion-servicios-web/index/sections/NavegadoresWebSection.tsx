import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function NavegadoresWebSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"1. Fundamentación y conceptos · 1.1"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Navegadores web"}</h2>
      <p className="my-4">
        {
          "El navegador es el cliente principal con el que los usuarios acceden a servicios web. Los más usados en escritorio y móvil son Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari, Opera y Brave. Cada uno implementa un motor de renderizado (Blink en Chrome/Edge, Gecko en Firefox, WebKit en Safari) que influye en velocidad, compatibilidad CSS/JS y consumo de recursos."
        }
      </p>
      <CompareTable
        headers={["Factor", "Efecto en rendimiento", "Cómo optimizar"]}
        rows={[
          ["Motor de renderizado", "Velocidad de pintado y JS", "Elegir navegador actualizado"],
          ["Extensiones", "Consumen RAM y CPU", "Desactivar las innecesarias"],
          ["Caché del navegador", "Acelera recargas", "Limpiar solo si hay errores de assets"],
          ["Conexión de red", "Latencia y ancho de banda", "Wi‑Fi estable, HTTP/2 o HTTP/3"],
          ["Hardware", "RAM y CPU limitan pestañas", "Cerrar pestañas inactivas"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Herramientas del navegador"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Cookies:"}</strong>
          {" almacenan sesión y preferencias; configúralas en Privacidad → Cookies (bloquear terceros, borrar al cerrar)."}
        </li>
        <li>
          <strong>{"Caché:"}</strong>
          {" guarda CSS, JS e imágenes; «Vaciar caché» solo cuando un sitio muestra versión antigua."}
        </li>
        <li>
          <strong>{"Seguridad:"}</strong>
          {" HTTPS obligatorio, advertencias de certificados, protección contra rastreo."}
        </li>
        <li>
          <strong>{"Privacidad:"}</strong>
          {" modo incógnito, bloqueo de rastreadores, permisos de cámara/micrófono/geolocalización."}
        </li>
        <li>
          <strong>{"DevTools (F12):"}</strong>
          {" inspeccionar red, consola, almacenamiento y rendimiento."}
        </li>
      </ul>
      <Callout title="Consejo práctico">
        {
          "Antes de culpar al servidor, abre DevTools → pestaña Red y verifica si la lentitud viene de muchos requests, archivos pesados o bloqueo por CORS."
        }
      </Callout>
      <PracticeExercise
        prompt="Nombra tres factores que pueden ralentizar un navegador y una acción concreta para mitigar cada uno."
        hints={["Extensiones", "Caché corrupta", "Conexión Wi‑Fi"]}
        expectedKeywords={["extensión", "caché", "red"]}
        successMessage="Correcto. Motor, extensiones, caché, red y hardware interactúan en el rendimiento percibido."
      />
    </section>
  );
}
