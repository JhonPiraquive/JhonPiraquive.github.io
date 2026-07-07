import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function PerifericosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Periféricos de entrada y salida"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un periférico es un dispositivo externo o interno que amplía las capacidades del computador sin ser parte del núcleo (CPU, placa base, RAM). Se clasifican en entrada (captan datos), salida (muestran o reproducen) o entrada/salida (E/S mixta)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "La productividad depende tanto del procesador como del teclado, mouse y pantalla. En un call center de Medellín, un micrófono con cancelación de ruido reduce reclamos; en un aula, webcams HD mejoran clases híbridas. Elegir periféricos adecuados evita cuellos de botella y lesiones por ergonomía deficiente."
        }
      </p>

      <CompareTable
        title="Periféricos comunes"
        headers={["Dispositivo", "Tipo", "Interfaz típica", "Notas"]}
        rows={[
          ["Teclado", "Entrada", "USB, Bluetooth, RF 2,4 GHz", "Membrana vs mecánico; layout LATAM (ñ)"],
          ["Mouse", "Entrada", "USB, Bluetooth", "Óptico/láser; DPI ajustable para diseño"],
          ["Micrófono", "Entrada", "USB, Jack 3,5 mm, XLR", "Podcast, videollamadas, dictado"],
          ["Cámara web", "Entrada", "USB UVC", "720p mínimo oficina; 1080p+ para streaming"],
          ["Monitor", "Salida", "HDMI, DisplayPort, USB-C", "Ver sección Monitor"],
          ["Altavoces", "Salida", "Jack, USB, Bluetooth", "Oficina abierta: volumen moderado"],
          ["Auriculares", "E/S", "Jack, USB, BT", "Diadema con mic para soporte remoto"],
        ]}
      />

      <h4 className="mt-6 mb-2 text-lg font-semibold">{"Teclado"}</h4>
      <p className="my-4">
        {
          "Convierte pulsaciones en códigos de tecla (HID). Los mecánicos usan switches individuales (mayor durabilidad y feedback); los de membrana son más silenciosos y baratos. En Colombia verifica distribución español latinoamericano con tecla ñ."
        }
      </p>

      <h4 className="mt-6 mb-2 text-lg font-semibold">{"Mouse"}</h4>
      <p className="my-4">
        {
          "Sensor óptico o láser traduce movimiento en coordenadas. Para CAD o edición de imagen conviene mayor DPI y botones programables. En kioscos públicos, mouse óptico cerrado reduce vandalismo."
        }
      </p>

      <h4 className="mt-6 mb-2 text-lg font-semibold">{"Micrófono y cámara"}</h4>
      <p className="my-4">
        {
          "El micrófono captura presión sonora; las cámaras UVC entregan video comprimido o raw según driver. Teams/Zoom consumen ambos: un micrófono de laptop en sala ruidosa genera eco — mejor diadema USB o mic de mesa con patrón cardioide."
        }
      </p>

      <h4 className="mt-6 mb-2 text-lg font-semibold">{"Altavoces y auriculares"}</h4>
      <p className="my-4">
        {
          "Altavoces activos (amplificador integrado) simplifican escritorio; auriculares cerrados aíslan en open space. Cuidado con volumen prolongado (salud auditiva) y con Bluetooth en entornos con muchas interferencias 2,4 GHz."
        }
      </p>

      <Callout title="Plug and play vs driver">
        {
          "La mayoría de periféricos USB modernos son clase HID o UVC y funcionan sin instalar driver. Interfaces de audio profesional o tablets gráficas pueden requerir software del fabricante."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Comprar 30 teclados «gaming» RGB para secretaría:"}</strong>
          {" costo y distracción → teclado ergonómico estándar."}
        </li>
        <li>
          <strong>{"Usar webcam integrada de 480p en clases grabadas:"}</strong>
          {" imagen ilegible → cámara 1080p y luz frontal."}
        </li>
        <li>
          <strong>{"Micrófono omnidireccional en sala de ventas:"}</strong>
          {" captura todo el ruido → cardioide o diadema."}
        </li>
        <li>
          <strong>{"Hub USB barato para mouse + teclado + disco + cámara:"}</strong>
          {" desconexiones aleatorias → hub alimentado o puertos directos a placa."}
        </li>
        <li>
          <strong>{"Olvidar desinfectar periféricos compartidos en laboratorio:"}</strong>
          {" higiene deficiente → protocolo de limpieza entre turnos."}
        </li>
      </ul>
    </section>
  );
}
