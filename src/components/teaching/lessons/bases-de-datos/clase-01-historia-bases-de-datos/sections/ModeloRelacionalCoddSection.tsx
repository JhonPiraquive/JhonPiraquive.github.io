import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_JOIN_CALI = `-- Relacional: se declara el QUÉ (join + filtro).
-- En IMS/CODASYL el programador escribiría pasos GET/FIND sobre punteros.
SELECT p.*
FROM pedido p
JOIN cliente c ON c.id = p.cliente_id
WHERE c.ciudad = 'Cali';`;

export function ModeloRelacionalCoddSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Etapa 3 — Modelo relacional: Codd 1970"}
      </h2>

      <p className="my-4">
        {
          "Edgar F. “Ted” Codd publica A Relational Model of Data for Large Shared Data Banks. Propone representar datos como relaciones —tablas de filas y columnas— con base matemática, relacionando tablas por valores (claves), no por punteros ocultos."
        }
      </p>

      <p className="my-4">
        {
          "El aporte central es la independencia de datos: las aplicaciones no deben depender del orden físico ni de rutas de almacenamiento. Se pregunta qué se quiere; el sistema elige cómo acceder. Independencia física (cambiar índices o discos sin reescribir apps) e independencia lógica (vistas y esquemas sin romper clientes) son las dos caras de esa idea."
        }
      </p>

      <p className="my-4">
        {
          "Importante para el relato: Codd no inventó SQL. Inventó el modelo. SQL nacería después en el ecosistema System R (SEQUEL). Sin este cambio conceptual no existirían el lenguaje ni el ecosistema de tablas que usarás en el resto del módulo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"El salto declarativo, en una consulta"}</h3>
      <p className="my-4">
        {
          "Tabla cliente(id, nombre, ciudad) y pedido(id, cliente_id, fecha). Para “pedidos de Cali” se hace un join por cliente_id y un filtro por ciudad — sin recorrer un árbol de punteros predefinido."
        }
      </p>
      <CodeFiddle language="sql" title="Join pedidos de Cali" code={SQL_JOIN_CALI} />

      <Callout variant="callout-info" title="Independencia de datos, en una frase">
        {
          "Si agregar un índice o cambiar de disco te obliga a reescribir la aplicación, no tienes independencia física. Si cada usuario necesita otra copia de las tablas para “su vista”, no tienes independencia lógica."
        }
      </Callout>
    </section>
  );
}
