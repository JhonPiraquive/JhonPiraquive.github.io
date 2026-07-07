import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function MonitorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Monitor: resolución y píxeles"}</h2>

      <figure className="my-6">
        <img
          src="/teaching/configuracion-sistemas-operativos/monitor.jpg"
          alt="Monitor de computador con panel LCD"
          className="mx-auto max-w-md rounded-[var(--clay-radius)]"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El monitor es un periférico de salida que convierte la señal de video de la GPU en imagen visible. El panel (IPS, VA, TN, OLED) determina ángulos de visión, contraste y tiempo de respuesta."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Pasas horas mirando la pantalla: resolución insuficiente obliga a hacer zoom en hojas de cálculo; refresco bajo cansa en videojuegos o edición. En diseño gráfico, la cobertura de color (sRGB, Adobe RGB) afecta la fidelidad de impresiones para clientes."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona: resolución y píxeles"}</h3>
      <p className="my-4">
        {
          "La resolución es el número de píxeles (puntos luminosos) en horizontal × vertical. Cada píxel tiene subpíxeles RGB que la GPU colorea según el framebuffer."
        }
      </p>

      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Nombre"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Píxeles"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Uso típico"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"HD (720p)"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"1280 × 720"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Legacy, señalización"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Full HD (1080p)"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"1920 × 1080"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Oficina, aulas"}</td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"QHD (1440p)"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"2560 × 1440"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Desarrollo, diseño"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"4K UHD"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"3840 × 2160"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Edición video, finanzas"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="my-4">
        {
          "La densidad de píxeles (PPI) depende del tamaño físico: un 24″ 1080p se ve más «granulado» que un 24″ 1440p. A igual resolución, pantalla más grande = menor nitidez percibida."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: consultar resolución en Windows"}</h3>
      <CodeFiddle
        language="powershell"
        title="Resolución actual"
        code={`Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.Screen]::PrimaryScreen.Bounds
# Width x Height en píxeles`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ergonomía básica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Distancia ojo-pantalla: 50–70 cm en escritorio."}</li>
        <li>{"Borde superior del monitor a la altura de los ojos o ligeramente por debajo."}</li>
        <li>{"Regla 20-20-20: cada 20 min, mirar 20 segundos a 6 m (≈20 pies)."}</li>
        <li>{"Evitar reflejos de ventana; usar base regulable o brazo VESA."}</li>
      </ul>

      <Callout title="Caso real: contabilidad Bogotá">
        {
          "Sustituyeron monitores 19″ 1280×1024 por 24″ 1920×1080: menos scroll en Excel y menos quejas de vista cansada. El costo por puesto se amortizó en menos errores de captura."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"4K en 15″ sin escalar DPI en Windows:"}</strong>
          {" texto microscópico → ajustar escala 150–200 %."}
        </li>
        <li>
          <strong>{"Cable HDMI 1.4 forzando 4K 60 Hz:"}</strong>
          {" parpadeo o 30 Hz → DisplayPort 1.4 o HDMI 2.0."}
        </li>
        <li>
          <strong>{"Dos monitores con resoluciones muy distintas:"}</strong>
          {" salto visual al mover ventanas → priorizar mismo tamaño/resolución."}
        </li>
        <li>
          <strong>{"Brillo al máximo todo el día:"}</strong>
          {" fatiga visual → 120–200 cd/m² según ambiente."}
        </li>
      </ul>
    </section>
  );
}
