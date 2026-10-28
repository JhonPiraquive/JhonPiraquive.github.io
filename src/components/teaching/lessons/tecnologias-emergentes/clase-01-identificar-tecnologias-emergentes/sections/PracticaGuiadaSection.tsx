import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Práctica guiada: la ficha de los drones agrícolas</h2>
      <p className="my-4">
        La práctica aplica la ficha de identificación a una tecnología concreta: los drones que fumigan, siembran y
        vigilan cultivos. Es un caso cercano a la economía colombiana (café, flores, arroz, caña) y sirve como modelo para
        después analizar una tecnología elegida libremente.
      </p>
      <StepReveal
        title="Seis pasos para llenar la ficha"
        steps={[
          {
            title: "Describir sin tecnicismos",
            content:
              "Un dron agrícola es una aeronave pequeña, sin piloto a bordo, que lleva cámaras o tanques y recorre el cultivo siguiendo una ruta programada. Resuelve el problema de fumigar o revisar grandes extensiones con menos personas, menos producto y menos tiempo. Complementa la fumigación manual y con avioneta.",
          },
          {
            title: "Revisar los cinco atributos",
            content:
              "Novedad radical: parcial (cambia la forma de aplicar, no el producto). Crecimiento rápido: sí, crecen la venta de equipos y las empresas que prestan el servicio. Coherencia: sí, hay nombre, fabricantes, cursos y normas de aviación. Impacto: alto en agricultura. Incertidumbre: media, por la regulación del espacio aéreo y el costo de los equipos.",
          },
          {
            title: "Ubicarla en los modelos",
            content:
              "Curva S: zona de crecimiento. Ciclo de sobreexpectación: pendiente de la comprensión, porque ya se sabe dónde funciona y dónde no. Adoptantes: tempranos y comienzo de la mayoría temprana en cultivos grandes. Madurez: TRL 8 a 9 para fumigar, menor para tareas como la siembra.",
          },
          {
            title: "Buscar señales con fuente",
            content:
              "Buscar al menos tres: noticias de gremios agrícolas sobre su uso, normas de la autoridad de aviación civil sobre drones, cursos de pilotos certificados y empresas que ofrecen el servicio. Anotar la fuente y la fecha de cada una.",
          },
          {
            title: "Concluir",
            content:
              "Es una tecnología emergente en buena parte del campo colombiano: funciona, crece y todavía tiene incertidumbre en costos y regulación. Anillo sugerido para una finca mediana: probar, contratando el servicio antes de comprar un equipo.",
          },
          {
            title: "Repetir con otra tecnología",
            content:
              "Elegir una tecnología distinta (por ejemplo, pagos con biometría, impresión 3D de vivienda, vehículos eléctricos que devuelven energía a la red o tutores de IA) y llenar la ficha completa con fuentes reales.",
          },
        ]}
      />
      <Callout title="Cómo verificar la ficha" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Cada atributo tiene una evidencia, no solo un «sí».</li>
          <li>Las señales tienen fuente y fecha de consulta.</li>
          <li>La conclusión se puede defender ante alguien que opine lo contrario.</li>
        </ul>
      </Callout>
    </section>
  );
}
