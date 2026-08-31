import { StepReveal } from "@/components/teaching/StepReveal";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const SQL_PROGRAMAS_DDL_DML = `CREATE TABLE Programas (
  id               INTEGER PRIMARY KEY,
  Nombre_Programa  VARCHAR(200) NOT NULL,
  cupos            INTEGER NOT NULL
);

INSERT INTO Programas (id, Nombre_Programa, cupos) VALUES
  (1, 'Técnica Profesional en Configuración de Servicios Web', 30);

SELECT id, Nombre_Programa FROM Programas WHERE cupos >= 25;`;

const SQL_LITERAL_CORRECTO = `-- Correcto: literal con comillas simples (tildes y espacios OK en el valor)
SELECT * FROM Programas
WHERE Nombre_Programa = 'Técnica Profesional en Configuración de Servicios Web';`;

const ER_PROGRAMAS = `erDiagram
  PROGRAMAS {
    int id PK
    varchar Nombre_Programa
    int cupos
  }`;

export function EstructuraTablasCamposSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tabla, campo, registro y valor"}
      </h2>

      <p className="my-4">{"En el modelo relacional que usarás en MySQL/MariaDB:"}</p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Elemento"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Definición operativa"}</th>
            <th className="py-2 text-left font-semibold">{"Ejemplo"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Tabla"}</td>
            <td className="py-2 pr-4">{"Contenedor de filas del mismo tipo de hecho"}</td>
            <td className="py-2">{"Programas"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Campo / columna"}</td>
            <td className="py-2 pr-4">{"Atributo tipado"}</td>
            <td className="py-2">{"Nombre_Programa"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Registro / fila"}</td>
            <td className="py-2 pr-4">{"Una instancia"}</td>
            <td className="py-2">{"Un programa ofertado"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"Valor"}</td>
            <td className="py-2 pr-4">{"Dato en la celda"}</td>
            <td className="py-2">{"'Técnica Profesional en Configuración de Servicios Web'"}</td>
          </tr>
        </tbody>
      </table>

      <StepReveal
        title="De la tabla al valor"
        steps={[
          {
            title: "Tabla",
            content: "Programas — contenedor de filas del mismo tipo de hecho.",
          },
          {
            title: "Campos",
            content: "id, Nombre_Programa, cupos — atributos tipados (sin espacios en el nombre).",
          },
          {
            title: "Registro",
            content: "Una fila: el programa ofertado en Cali con 30 cupos.",
          },
          {
            title: "Valor",
            content: "El texto largo con tildes va entre comillas simples en SQL.",
          },
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Reglas de escritura"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Nombres sin espacios → Nombre_Programa."}</li>
        <li>{"Literales de texto entre comillas simples '…'."}</li>
        <li>{"Los valores sí pueden llevar espacios, tildes y caracteres especiales."}</li>
        <li>{"No confundir identificador (campo) con contenido (valor)."}</li>
      </ol>

      <table className="my-4 w-full border-collapse text-sm">
        <caption className="mb-2 text-left text-[var(--color-neutral-dark)]/70">
          {"Tabla Programas con dos registros de ejemplo."}
        </caption>
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"id"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Nombre_Programa"}</th>
            <th className="py-2 text-left font-semibold">{"cupos"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"1"}</td>
            <td className="py-2 pr-4">{"Técnica Profesional en Configuración de Servicios Web"}</td>
            <td className="py-2">{"30"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"2"}</td>
            <td className="py-2 pr-4">{"Técnica Profesional en Configuración de Sistemas Operativos"}</td>
            <td className="py-2">{"25"}</td>
          </tr>
        </tbody>
      </table>

      <CodeFiddle language="sql" title="CREATE / INSERT / SELECT Programas" code={SQL_PROGRAMAS_DDL_DML} />
      <p className="my-4">{"Contraste de literales:"}</p>
      <CodeFiddle language="sql" title="Literal con comillas y Nombre_Programa" code={SQL_LITERAL_CORRECTO} />

      <MermaidDiagram
        title="Estructura relacional Programas"
        description="Diagrama ER de la tabla Programas con id, Nombre_Programa y cupos"
        chart={ER_PROGRAMAS}
      />
    </section>
  );
}
