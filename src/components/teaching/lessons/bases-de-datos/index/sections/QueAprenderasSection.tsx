import { Callout } from "@/components/teaching/Callout";

export function QueAprenderasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Qué aprenderás en este módulo"}
      </h2>
      <p className="my-4">
        {
          "En este módulo implementarás bases de datos relacionales de baja complejidad a partir de requerimientos reales (por ejemplo, inventario de una tienda), instalarás un SGBD adecuado al hardware disponible, y practicarás argumentar soluciones en lenguaje técnico y trabajar en equipo — competencias del programa, no solo “saber escribir queries”."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es una base de datos"}</h3>
      <p className="my-4">
        {
          "Una base de datos (BD) es un conjunto organizado de datos relacionados que se almacenan de forma persistente para consultarlos, actualizarlos y compartirlos con consistencia. En este módulo se trabaja sobre el enfoque relacional de baja complejidad: tablas, relaciones y reglas que reflejan los requerimientos del cliente."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es un SGBD"}</h3>
      <p className="my-4">
        {
          "Un sistema gestor de bases de datos (SGBD) es el software que administra la BD: crea estructuras, valida datos, ejecuta consultas y controla acceso y almacenamiento. Ejemplos comunes en formación y PYME: MySQL, MariaDB, PostgreSQL, SQL Server. Instalar y configurar un SGBD según hardware y software es un resultado explícito del módulo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Por qué importa este módulo"}</h3>
      <p className="my-4">
        {
          "En Latinoamérica, muchas tiendas, talleres y laboratorios aún gestionan inventario o clientes en hojas de cálculo o cuadernos. Pasar a una BD relacional reduce errores, permite consultas confiables y prepara al estudiante para comunicar soluciones técnicas y trabajar en equipo."
        }
      </p>
      <Callout title="Errores frecuentes al empezar" variant="callout-warning">
        {
          "No reduzcas “base de datos” a una hoja de cálculo o a un archivo suelto: datos y sistema gestor no son lo mismo. No saltes a las consultas sin leer objetivos, resultados ni el hilo del módulo. Comunicación y trabajo en equipo también se evalúan. No hace falta ser programador avanzado para completar este hub ni la Clase 01."
        }
      </Callout>
    </section>
  );
}
