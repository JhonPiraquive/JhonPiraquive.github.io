import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PublicacionSitioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Publicar un sitio web corporativo"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Publicar un sitio web es colocar archivos HTML (y recursos estáticos) en el directorio raíz del servidor web, configurar el virtual host con el nombre de dominio (`server_name`) y verificar que el DNS apunta a la IP correcta. Es el paso que convierte un dominio resoluble en una página visible."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Una PyME en Cali necesita presencia web con nombre de empresa, misión, servicios y contacto. Sin publicación correcta, el dominio resuelve pero el servidor devuelve 403 (carpeta vacía) o el sitio de otro cliente (server_name incorrecto)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <StepReveal
        title="Flujo de publicación"
        steps={[
          {
            title: "1. Crear contenido HTML",
            content:
              "index.html con nombre de empresa, descripción, misión o servicios y datos de contacto (correo, teléfono, dirección).",
          },
          {
            title: "2. Subir al directorio root",
            content:
              "Colocar archivos en la carpeta que el servidor web usará como document root (ej. /var/www/www.empresa.co/).",
          },
          {
            title: "3. Configurar virtual host",
            content:
              "Definir server_name con el FQDN (www.empresa.co) y root apuntando a la carpeta con index.html.",
          },
          {
            title: "4. Verificar DNS",
            content: "Registro A de www debe apuntar a la IP del hosting.",
          },
          {
            title: "5. Probar acceso",
            content: "curl -I o navegador; esperar HTTP 200, no 403 ni DNS_PROBE.",
          },
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura HTML mínima"}</h3>
      <CodeFiddle
        language="html"
        title="index.html — empresa ficticia"
        filename="index.html"
        code={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>InnovaTech Cali — Soluciones digitales</title>
</head>
<body>
  <header>
    <h1>InnovaTech Cali</h1>
    <p>Consultoría y desarrollo web para PyMEs del Valle del Cauca.</p>
  </header>
  <main>
    <section>
      <h2>Misión</h2>
      <p>Democratizar la presencia digital de pequeñas empresas con sitios accesibles y seguros.</p>
    </section>
    <section>
      <h2>Servicios</h2>
      <ul>
        <li>Diseño y hosting de sitios corporativos</li>
        <li>Correo profesional @innovatech.co</li>
        <li>Soporte técnico y mantenimiento</li>
      </ul>
    </section>
    <section>
      <h2>Contacto</h2>
      <p>Correo: <a href="mailto:ventas@innovatech.co">ventas@innovatech.co</a></p>
      <p>Teléfono: +57 602 555 0100 — Cali, Colombia</p>
    </section>
  </main>
</body>
</html>`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Configuración Nginx (server_name y root)"}</h3>
      <CodeFiddle
        language="nginx"
        title="Virtual host Nginx"
        filename="innovatech.co.conf"
        code={`server {
    listen 80;
    server_name www.innovatech.co innovatech.co;

    root /var/www/www.innovatech.co;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}`}
      />
      <Callout title="Error 403 Forbidden">
        {
          "Un 403 suele indicar que `root` apunta a una carpeta vacía o sin `index.html`, o que los permisos impiden leer el archivo. Verifica que la ruta del panel coincida exactamente con donde subiste el HTML."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Verificación con curl y navegador"}</h3>
      <CodeFiddle
        language="bash"
        title="Comprobar sitio publicado"
        code={`# Cabeceras HTTP (esperar 200 OK)
curl -sI https://www.innovatech.co/ | head -5

# Contenido (debe incluir el título de la empresa)
curl -s https://www.innovatech.co/ | grep -i "<h1>"

# Si el servicio escucha en puerto no estándar (ej. 8080)
curl -sI "http://www.innovatech.co:8080/" | head -1`}
      />
      <p className="my-4">
        {
          "En producción el puerto 443 (HTTPS) o 80 (HTTP) suele ser implícito en la URL. En entornos de desarrollo o cuando varios servicios comparten un host, el puerto puede ser explícito (`:8080`). Siempre documenta la URL completa de acceso."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: root apunta a carpeta con index.html; server_name coincide con el FQDN del certificado TLS."}</li>
        <li>{"Mal uso: root en /var/www/ vacío; probar solo por IP sin verificar el virtual host por nombre."}</li>
      </ul>

      <PracticeExercise
        prompt="El sitio responde 403 Forbidden pero DNS resuelve bien. ¿Qué dos cosas revisarías primero en el servidor web?"
        hints={["Piensa en la carpeta root", "¿Existe index.html?"]}
        expectedKeywords={["root", "index.html", "403", "permisos"]}
        successMessage="Correcto. Revisa que root apunte a la carpeta correcta con index.html y que los permisos permitan lectura."
      />
    </section>
  );
}
