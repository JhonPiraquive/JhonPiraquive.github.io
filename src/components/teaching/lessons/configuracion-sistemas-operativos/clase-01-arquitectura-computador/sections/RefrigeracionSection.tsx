import { CompareTable } from "@/components/teaching/CompareTable";

export function RefrigeracionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Refrigeración: pasiva, aire y líquida"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La refrigeración disipa el calor que generan CPU, GPU, chipset y fuente de poder. Sin evacuar ese calor, los componentes reducen frecuencia (thermal throttling) o se apagan por protección térmica."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un equipo mal refrigerado es más lento, más ruidoso y más propenso a fallos prematuros. Al especificar hardware o montar en laboratorio, la refrigeración debe ir acorde al TDP del procesador y la carga de trabajo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "El calor pasa del die del CPU al disipador (conductividad térmica + pasta térmica). Un ventilador mueve aire caliente hacia fuera del chasis (convección forzada). En líquida, un bloque transfiere calor a refrigerante que circula hacia un radiador ventilado."
        }
      </p>

      <figure>
        <img
          src="/teaching/configuracion-sistemas-operativos/cooling-fan.jpg"
          alt="Ventilador y disipador de CPU en placa base"
          className="my-4 max-w-full rounded-lg"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes"}</h3>
      <CompareTable
        headers={["Tipo", "Ventaja", "Desventaja", "Cuándo usar"]}
        rows={[
          ["Pasiva (sin ventilador)", "Silencio absoluto", "Capacidad térmica limitada", "SoCs de bajo consumo, embedded"],
          ["Aire (cooler + ventilador)", "Económico, fácil mantenimiento", "Ruido y altura del disipador", "Mayoría de PCs oficina y gaming medio"],
          ["Líquida AIO", "Buen disipado en espacio reducido", "Costo, riesgo de fuga (bajo en AIO)", "CPUs >95 W, overclock moderado"],
          ["Custom loop", "Máximo control térmico", "Complejidad y mantenimiento", "Enthusiast, estaciones extremas"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "Un Intel Core i5 de 65 W en oficina suele bastar con cooler de stock y un ventilador de caja. Un AMD Ryzen 9 de 105 W en render 3D se beneficia de torre de doble ventilador o AIO de 240 mm."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Reutilizar pasta térmica seca de hace años: aumenta temperatura varios grados."}</li>
        <li>{"Instalar AIO con radiador en la parte inferior del chasis: burbujas en la bomba reducen vida útil."}</li>
        <li>{"Bloquear rejillas de entrada con el PC contra la pared: recircula aire caliente."}</li>
        <li>{"Añadir ventiladores sin criterio de flujo: presión positiva/negativa mal planificada no mejora temperaturas."}</li>
      </ul>
    </section>
  );
}
