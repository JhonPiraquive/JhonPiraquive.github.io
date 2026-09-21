import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección une abstracción y herencia en polimorfismo: una misma llamada, distintos comportamientos en runtime."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir polimorfismo como invocación uniforme sobre contrato con comportamiento según el tipo real del objeto."
          }
        </li>
        <li>
          {
            "Implementar polimorfismo con interfaz (IPasarelaPago + Checkout) y con clase abstracta (Impuesto + derivadas)."
          }
        </li>
        <li>{"Construir colecciones polimórficas y procesarlas con un único bucle sin switch por tipo."}</li>
        <li>
          {
            "Extender el sistema con una nueva implementación (PasarelaEfectivo, ImpuestoFijo) sin modificar el código cliente existente."
          }
        </li>
        <li>
          {
            "Distinguir polimorfismo real (virtual/override, interfaz) de ocultamiento con new o ramas if por tipo."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección abstraccion-clases-abstractas-interfaces: interfaces, clases abstractas, inyección por constructor."
          }
        </li>
        <li>{"Lección herencia: virtual, override, preview polimórfico con Vehiculo/Carro."}</li>
        <li>{"Lección asociacion-agregacion-composicion: composición de pasarela dentro de Checkout."}</li>
      </ul>
      <Callout title="Misma llamada, distinto comportamiento">
        {
          "El tipo declarado de la variable puede ser contrato o base, pero la ejecución usa el tipo real del objeto. El cliente no necesita conocer las clases concretas."
        }
      </Callout>
    </section>
  );
}
