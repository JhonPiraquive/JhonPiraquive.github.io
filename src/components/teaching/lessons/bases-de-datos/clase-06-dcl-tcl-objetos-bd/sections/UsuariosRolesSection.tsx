import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `-- Ejemplo didáctico (puede requerir privilegios de admin)
CREATE USER 'app_rutas'@'localhost' IDENTIFIED BY 'clave_segura_lab';
CREATE USER 'reporte_rutas'@'localhost' IDENTIFIED BY 'otra_clave_lab';`;

export function UsuariosRolesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Usuarios por propósito"}
      </h2>
      <p className="my-4">
        {
          "En MySQL/MariaDB la cuenta suele ser 'usuario'@'host'. Separa admin de esquema, app de lectura/escritura y reportería solo-lectura. En hosting compartido el panel a menudo ya limita a una BD."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="Crear usuarios de propósito (lab)"
        filename="crear-usuarios.sql"
        code={SQL}
      />
      <p className="my-4">
        {
          "No guardes la clave en el repo del frontend. Prefiere hosts acotados (localhost / red privada) frente a 'user'@'%' abierto a Internet."
        }
      </p>
    </section>
  );
}
