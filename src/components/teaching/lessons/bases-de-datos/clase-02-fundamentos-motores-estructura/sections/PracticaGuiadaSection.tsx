import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>

      <PracticeExercise
        prompt="En una frase cada uno, diferencia BD, SGBD y phpMyAdmin usando el ejemplo de la academia en Cali."
        hints={[
          "BD = contenido organizado.",
          "SGBD = software/motor.",
          "phpMyAdmin = cliente GUI.",
        ]}
        expectedKeywords={["BD", "SGBD", "phpMyAdmin", "motor", "datos"]}
        successMessage="BD: datos de la academia; SGBD: MariaDB/MySQL; phpMyAdmin: solo la ventana para administrarlos."
        rows={5}
      />

      <PracticeExercise
        prompt="Clasifica cada uno en motor / GUI / CLI: MariaDB, DBeaver, mongosh, MongoDB, phpMyAdmin, mysql."
        hints={["Servidor = motor", "Gráfico = GUI", "Terminal = CLI"]}
        expectedKeywords={["motor", "GUI", "CLI", "MariaDB", "MongoDB"]}
        successMessage="Motores: MariaDB, MongoDB. GUI: DBeaver, phpMyAdmin. CLI: mongosh, mysql."
        rows={5}
      />

      <PracticeExercise
        prompt="¿Por qué inventario → relacional y catálogo heterogéneo → documentos? Responde en 4–6 líneas."
        hints={["Estructura fija vs atributos variables", "SQL e integridad vs flexibilidad"]}
        expectedKeywords={["relacional", "documentos", "inventario", "flexible", "esquema"]}
        successMessage="Inventario necesita integridad y consultas estructuradas; catálogos variables evitan columnas nullable infinitas con documentos."
        rows={5}
      />

      <PracticeExercise
        prompt="Escribe un INSERT válido de un programa cuyo Nombre_Programa tenga tildes y espacios (usa comillas simples)."
        hints={["Lista columnas explícitamente", "Valor entre comillas simples"]}
        expectedKeywords={["INSERT", "Nombre_Programa", "'"]}
        successMessage="INSERT INTO Programas (id, Nombre_Programa, cupos) VALUES (…, '…con tildes…', …);"
        rows={5}
      />

      <PracticeExercise
        prompt="Dibuja (o describe) la tabla Programas con 2 registros y etiqueta: tabla, campo, registro, valor."
        hints={["Fila = registro", "Columna = campo", "Celda = valor"]}
        expectedKeywords={["tabla", "campo", "registro", "valor"]}
        successMessage="Programas es la tabla; Nombre_Programa un campo; cada fila un registro; el texto en la celda es el valor."
        rows={5}
      />
    </section>
  );
}
