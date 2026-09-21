export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar en una frase por qué nacieron las BD (archivos planos → independencia de datos) y contrastar relacional vs NoSQL a alto nivel."
          }
        </li>
        <li>
          {
            "Definir qué es una BD (Base de Datos) y qué es un SGBD (Sistema Gestor de Bases de Datos), y explicar cómo colaboran con un ejemplo de PYME LATAM."
          }
        </li>
        <li>
          {
            "Distinguir motor/servidor (MySQL, MariaDB, MongoDB), GUI (phpMyAdmin, Workbench, DBeaver, Compass) y CLI (mysql/mariadb, mongosh)."
          }
        </li>
        <li>
          {
            "Nombrar y relacionar tabla, campo/columna, registro/fila y valor, con reglas de nombres y literales entre comillas simples."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Entregable de esta clase"}</p>
      <p className="my-4">
        {
          "Vocabulario operativo listo: sabes qué es una BD/SGBD, abres un motor por GUI o CLI, y describes una tabla con campos y registros. Eso alimenta el diseño ER de la Clase 2."
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong>{" "}
        {"Clase 2 — Diseño de datos y diagramas ER (clase-02-diseno-modelos-er)."}
      </p>
    </section>
  );
}
