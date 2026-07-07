import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function UsuariosGruposSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Usuarios, root y grupos"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El SO asocia cada proceso a un usuario. Los grupos agrupan usuarios para aplicar permisos comunes. En Linux, root (UID 0) tiene control total; en Windows, el equivalente es la cuenta Administrador o miembros del grupo Administrators."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona en Linux"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"/etc/passwd — usuarios; /etc/group — grupos."}</li>
        <li>{"useradd crea cuenta; passwd asigna contraseña."}</li>
        <li>{"usermod -aG grupo usuario añade a un grupo secundario."}</li>
      </ul>
      <CodeFiddle
        language="bash"
        title="Gestión básica de usuarios"
        code={`# Crear usuario con home
sudo useradd -m -s /bin/bash ana

# Establecer contraseña
sudo passwd ana

# Añadir al grupo sudo (Debian/Ubuntu)
sudo usermod -aG sudo ana

# Ver grupos del usuario actual
groups

# Cambiar a root
su -
# o comando puntual
sudo whoami`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Separar cuentas de servicio, desarrolladores y administradores limita el daño de credenciales robadas. En un servidor compartido de una agencia, cada cliente no debe escribir en el home del otro."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Compartir una sola cuenta admin entre todo el equipo de soporte (sin trazabilidad)."}</li>
        <li>{"Dejar usuario root con login SSH directo habilitado."}</li>
        <li>{"Contraseñas iguales para todos los usuarios del laboratorio."}</li>
        <li>{"Crear usuarios sin -m y olvidar el directorio home."}</li>
        <li>{"Añadir usuarios al grupo docker o sudo sin necesidad real."}</li>
      </ul>
    </section>
  );
}
