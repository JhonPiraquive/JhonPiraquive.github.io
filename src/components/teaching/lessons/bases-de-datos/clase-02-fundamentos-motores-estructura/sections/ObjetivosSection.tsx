export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir qué es una BD (Base de Datos) y qué es un SGBD (Sistema Gestor de Bases de Datos), y explicar cómo colaboran con un ejemplo de PYME LATAM."
          }
        </li>
        <li>
          {
            "Contrastar bases relacionales (tablas + SQL — Structured Query Language) frente a NoSQL (Not Only SQL: documentos, clave-valor, columnas, grafos) según escenario (inventario vs catálogo flexible)."
          }
        </li>
        <li>
          {
            "Distinguir motor/servidor (MySQL, MariaDB, MongoDB), GUI (Graphical User Interface: phpMyAdmin, Workbench, DBeaver, Compass) y CLI (Command Line Interface: mysql/mariadb, mongosh)."
          }
        </li>
        <li>
          {
            "Nombrar y relacionar tabla, campo/columna, registro/fila y valor, con reglas de nombres (Nombre_Programa) y literales entre comillas simples."
          }
        </li>
        <li>
          {
            "Explicar por qué confundir la GUI con el motor lleva a diagnósticos erróneos."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Clase 1 — Historia de las Bases de Datos (clase-01-historia-bases-de-datos): por qué existen las BD y el modelo relacional."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong>{" "}
        {
          "clase-03 — Modelos de datos y diagramas ER (clase-03-modelos-datos-er): diseño conceptual → ER → tablas."
        }
      </p>
    </section>
  );
}
