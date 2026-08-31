import { Callout } from "@/components/teaching/Callout";

export function CasoMotivadorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Caso motivador: tienda de barrio"}
      </h2>
      <p className="my-4">
        {
          "Una tienda de abarrotes en un barrio de Bogotá (o ciudad equivalente) lleva el inventario en un cuaderno y precios en una hoja de cálculo compartida por WhatsApp. Cuando hay dos vendedores, se duplican pedidos, se “pierden” unidades y nadie sabe el stock real al cierre. El dueño pide “un sistema sencillo” que registre productos, ventas y existencias."
        }
      </p>
      <p className="my-4">
        {
          "El módulo apunta a implementar una BD relacional de baja complejidad que cumpla esos requerimientos, instalar un SGBD adecuado al equipo disponible, y argumentar la solución al cliente en lenguaje técnico claro — alineado con objetivos y resultados oficiales."
        }
      </p>
      <Callout title="Conexión con el programa" variant="callout-info">
        {
          "Este caso no pide consultas todavía: pide ver el problema de negocio (datos inconsistentes) y el camino del módulo (modelo, sistema gestor, consultas, argumentación y trabajo en equipo)."
        }
      </Callout>
    </section>
  );
}
