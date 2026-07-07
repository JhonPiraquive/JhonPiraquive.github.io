import { CompareTable } from "@/components/teaching/CompareTable";

export function ChasisCarcasasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Chasis y carcasas: tipos y criterios"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El chasis (o gabinete) es la estructura metálica o de plástico que aloja placa base, fuente de poder, discos, ventiladores y tarjetas de expansión. La carcasa define factor de forma, flujo de aire, espacio para GPU y facilidad de mantenimiento."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un chasis inadecuado limita la refrigeración, impide instalar discos o tarjetas largas y complica el cableado. En datacenter, el factor rackmount estandariza densidad y cableado; en oficina, un SFF ahorra espacio."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "El chasis fija la placa base con standoffs, guía el flujo de aire (entrada frontal/inferior, salida trasera/superior) y ofrece bahías para discos 2.5\"/3.5\" y ranuras PCIe accesibles desde la parte trasera."
        }
      </p>

      <figure>
        <img
          src="/teaching/configuracion-sistemas-operativos/computer-tower.jpg"
          alt="Torre de computador de escritorio tipo mid tower"
          className="my-4 max-w-full rounded-lg"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes"}</h3>
      <CompareTable
        headers={["Tipo", "Características", "Uso típico"]}
        rows={[
          ["Mini Tower", "Compacto, pocas bahías", "Oficina básica, quioscos"],
          ["Mid Tower", "Equilibrio espacio/expansión", "PC escritorio estándar, gaming moderado"],
          ["Full Tower", "Mucho espacio, varias GPUs/discos", "Workstation, servidor doméstico"],
          ["SFF (Small Form Factor)", "Placa mini-ITX, fuente externa a veces", "Escritorios reducidos, señalización"],
          ["Cube", "Formato cúbico, GPU horizontal a veces", "HTPC, builds compactas"],
          ["Slim / Ultra-slim", "Bajo perfil, PCIe limitado", "All-in-one base, puntos de venta"],
          ["Rackmount (1U–4U)", "Montaje en rack 19\"", "Datacenter, servidores"],
          ["Open-air / Test bench", "Sin paredes, máxima ventilación", "Pruebas, overclocking, laboratorio"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "Una PYME en Bogotá necesita 8 PCs de oficina: elige Mini Tower con fuente 80 Plus Bronze, filtro de polvo frontal y espacio para un SSD — sin GPU dedicada. Un estudio de edición de video elige Mid Tower con buen flujo de aire para CPU de 65 W+ y GPU de dos slots."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Comprar Full Tower para un PC de oficina sin expansión: desperdicio de espacio y costo."}</li>
        <li>{"Montar servidor rackmount en escritorio sin rack: ruido, inestabilidad y riesgo de caída."}</li>
        <li>{"Open-air en entorno polvoriento (taller, bodega): acumulación de polvo en componentes expuestos."}</li>
        <li>{"Ignorar longitud máxima de GPU al elegir Slim: la tarjeta no entra y hay que devolver hardware."}</li>
        <li>{"Cerrar el panel lateral sin organizar cables: obstruye flujo de aire y sube temperaturas."}</li>
      </ul>
    </section>
  );
}
