import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL_CREATE = `CREATE DATABASE academia_rutas;
USE academia_rutas;`;

const SQL_DROP = `-- Solo lab / con backup previo
DROP DATABASE academia_rutas_pruebas;`;

export function CreateDropDatabaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"CREATE DATABASE y DROP DATABASE"}
      </h2>
      <p className="my-4">
        {
          "CREATE DATABASE crea el contenedor lógico. Luego USE (MySQL/MariaDB) antes de crear tablas."
        }
      </p>
      <CodeFiddle language="sql" title="CREATE DATABASE academia_rutas" code={SQL_CREATE} />
      <Callout title="DROP DATABASE: irreversible sin backup" variant="callout-danger">
        {
          "DROP DATABASE elimina esquema y datos. Verifica host y SELECT DATABASE(); haz dump/snapshot antes. Nunca uses un script de reset de lab en un servidor compartido sin confirmar el nombre."
        }
      </Callout>
      <CodeFiddle language="sql" title="DROP DATABASE (solo lab / backup)" code={SQL_DROP} />
    </section>
  );
}
