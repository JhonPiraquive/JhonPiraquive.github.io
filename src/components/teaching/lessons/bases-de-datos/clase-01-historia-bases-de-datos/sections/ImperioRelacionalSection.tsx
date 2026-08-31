import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const ER_CHART = `erDiagram
  CLIENTE ||--o{ PEDIDO : realiza
  PEDIDO ||--|{ DETALLE_PEDIDO : contiene
  PRODUCTO ||--o{ DETALLE_PEDIDO : aparece_en
  CLIENTE {
    int id PK
    string nombre
    string ciudad
  }
  PEDIDO {
    int id PK
    int cliente_id FK
    date fecha
    numeric total
  }
  PRODUCTO {
    int id PK
    string nombre
    numeric precio
  }
  DETALLE_PEDIDO {
    int pedido_id FK
    int producto_id FK
    int cantidad
  }`;

export function ImperioRelacionalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Etapa 5 — Imperio relacional (años 80 – 90)"}
      </h2>

      <p className="my-4">
        {
          "Consolidación: DB2, Oracle, SQL Server, PostgreSQL, MySQL; estandarización SQL (ANSI/ISO). El modelado conceptual con el diagrama entidad-relación (ER) de Peter Chen (1976) se vuelve lenguaje común entre analistas y técnicos. El SGBD relacional deja de ser experimento y pasa a ser el paisaje por defecto de la industria."
        }
      </p>

      <p className="my-4">
        {
          "Casi toda PYME formaliza datos en tablas SQL. El puente requisitos → tablas (ER) es el mismo que el módulo enseñará en la clase de diseño: el analista dibuja entidades y relaciones; se traduce a tablas, claves y FKs; el DDL crea el esquema. Un laboratorio clínico en Cali que modela paciente, examen y orden_examen sigue ese mismo arco."
        }
      </p>

      <p className="my-4">
        {
          "Esta etapa no “cierra” la historia: deja un estándar tan fuerte que, cuando Internet exige otra escala, la siguiente generación tendrá que responder frente a ese imperio — no borrándolo, sino abriendo opciones según el problema."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"El puente ER, en un diagrama"}</h3>
      <p className="my-4">
        {
          "El diagrama no es adorno académico: es el contrato entre quien entiende el negocio y quien implementa el esquema. Lo verás otra vez cuando diseñes modelos de baja complejidad."
        }
      </p>
      <MermaidDiagram
        title="Mini ER — cliente, pedido y producto"
        description="Relación muchos a muchos entre pedido y producto vía detalle"
        chart={ER_CHART}
      />
    </section>
  );
}
