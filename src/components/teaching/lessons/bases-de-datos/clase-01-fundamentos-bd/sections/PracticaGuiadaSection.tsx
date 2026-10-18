import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <PracticeExercise
        prompt="Diferenciar en una frase cada uno: BD, SGBD y phpMyAdmin, con el ejemplo de la academia en Cali."
        hints={["BD = contenido organizado.", "SGBD = software o motor.", "phpMyAdmin = cliente gráfico."]}
        expectedKeywords={["BD", "SGBD", "phpMyAdmin", "motor", "datos"]}
        successMessage="BD: datos de la academia; SGBD: MariaDB o MySQL; phpMyAdmin: solo la ventana para administrarlos."
        rows={5}
      />
      <PracticeExercise
        prompt="Clasificar cada elemento como motor, GUI o CLI: MariaDB, DBeaver, mongosh, MongoDB, phpMyAdmin, mysql."
        hints={["Servidor = motor", "Gráfico = GUI", "Terminal = CLI"]}
        expectedKeywords={["motor", "GUI", "CLI", "MariaDB", "MongoDB"]}
        successMessage="Motores: MariaDB, MongoDB. GUI: DBeaver, phpMyAdmin. CLI: mongosh, mysql."
        rows={5}
      />
      <PracticeExercise
        prompt="¿Por qué un inventario se modela como relacional y un catálogo heterogéneo como documentos? Responder en 4–6 líneas."
        hints={["Estructura fija frente a atributos variables", "Integridad frente a flexibilidad"]}
        expectedKeywords={["relacional", "documentos", "inventario", "flexible", "esquema"]}
        successMessage="El inventario necesita integridad y consultas estructuradas; un catálogo variable evita columnas nulas sin fin al usar documentos."
        rows={5}
      />
      <PracticeExercise
        prompt="Escribir un INSERT válido de un programa cuyo Nombre_Programa tenga tildes y espacios, con comillas simples."
        hints={["Listar las columnas de forma explícita", "Valor entre comillas simples"]}
        expectedKeywords={["INSERT", "Nombre_Programa", "'"]}
        successMessage="INSERT INTO Programas (id, Nombre_Programa, cupos) VALUES (…, '…con tildes…', …);"
        rows={5}
      />
      <PracticeExercise
        prompt="Dibujar o describir la tabla Programas con 2 registros y etiquetar: tabla, campo, registro y valor."
        hints={["Fila = registro", "Columna = campo", "Celda = valor"]}
        expectedKeywords={["tabla", "campo", "registro", "valor"]}
        successMessage="Programas es la tabla; Nombre_Programa, un campo; cada fila, un registro; el texto de la celda, el valor."
        rows={5}
      />
      <PracticeExercise
        prompt="¿Qué gana la academia Rutas Digitales al pasar por el modelo conceptual, el lógico y el físico antes de escribir SQL? Responder en 4–6 líneas."
        hints={["Alineación con el negocio", "Menos retrabajo de DDL"]}
        expectedKeywords={["requisitos", "conceptual", "lógico", "físico", "retrabajo"]}
        successMessage="El plano compartido reduce tablas mal pensadas y sentencias DDL que luego hay que descartar."
        rows={5}
      />
      <PracticeExercise
        prompt="Describir un ER Programa–Estudiante–Inscripción con cardinalidades, usando 1:N o N:M según corresponda."
        hints={["Inscripción es el vínculo", "Un estudiante puede estar en muchos programas"]}
        expectedKeywords={["1:N", "N:M", "Inscripciones", "Programas", "Estudiantes"]}
        successMessage="La relación N:M se resuelve con Inscripciones como tabla puente y claves foráneas a ambas entidades."
        rows={5}
      />
      <PracticeExercise
        prompt="Elegir familia (relacional, documentos o grafo) para: facturas; caché de sesión; «quién estudió con quién». Una frase por escenario."
        hints={["Integridad → relacional", "Clave simple → clave-valor", "Caminos entre nodos → grafo"]}
        expectedKeywords={["relacional", "clave-valor", "grafo", "documentos"]}
        successMessage="Facturas: relacional. Sesión: clave-valor. Estudio compartido: grafo (o una capa de grafo)."
        rows={5}
      />
    </section>
  );
}
