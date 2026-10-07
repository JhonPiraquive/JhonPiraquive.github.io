import { Callout } from "@/components/teaching/Callout";

export function QueEsElCicloSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es el ciclo de vida</h2>
      <p className="my-4">
        El ciclo de vida del software es el conjunto de fases necesarias para construir el sistema y comprobar
        que cumple lo pedido. No es una sola reunión ni el día en que se entrega el programa.
      </p>
      <p className="my-4">
        La norma ISO/IEC/IEEE 12207:2017 lo describe como un marco común de procesos, con terminología estable,
        al que puede remitirse la industria. Incluye actividades de adquisición, suministro, desarrollo,
        operación, mantenimiento y retiro de sistemas y servicios. Esos procesos se hacen con los interesados y
        buscan la satisfacción del cliente.
      </p>
      <Callout title="Por qué te importa la norma" variant="callout-info">
        <p className="mb-0">
          No tienes que memorizar el número. Sí tienes que saber que «ciclo de vida» no es una opinión del
          profesor: es un marco compartido. Cuando un documento de conciliación cita un marco, está anclando el
          requisito a algo que el equipo y el cliente pueden revisar.
        </p>
      </Callout>
      <p className="my-4">
        Las fases concretas dependen de la metodología elegida. El ciclo ha pasado por cinco, seis o siete
        etapas según el autor. En la página siguiente usamos una secuencia reconocible para un sistema de
        información nuevo.
      </p>
    </section>
  );
}
