import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

export function LogsNginxPermisosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Logs de Nginx, permisos y relación servicio ↔ archivos"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El servicio web Nginx no es independiente de los archivos del sitio: lee HTML y estáticos desde el document root configurado en el virtual host. Los logs de acceso y error registran cada petición HTTP y los fallos (403, 404, permisos). Entender esa relación es clave para diagnosticar sitios que «no cargan» aunque el daemon parezca activo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un 403 suele ser permiso denegado en index.html, no un fallo de DNS. Un 404 indica archivo ausente o root mal configurado. Los logs evitan adivinar: error.log muestra «Permission denied» o «No such file» con la ruta exacta."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Relación servicio web ↔ archivos"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Nginx (proceso master + workers, usuario www-data) escucha en puerto 80/443."}</li>
        <li>{"Virtual host define server_name y root (ej. /var/www/intranet)."}</li>
        <li>{"Petición GET / → Nginx busca index.html dentro de root."}</li>
        <li>{"Si no puede leer el archivo → 403 en access.log + detalle en error.log."}</li>
        <li>{"Si el archivo no existe → 404."}</li>
      </ol>

      <CodeFiddle
        language="bash"
        title="Permisos recomendados y verificación"
        code={`# Ver propietario y permisos del sitio
ls -la /var/www/intranet/
ls -la /var/www/intranet/index.html

# Corrección típica (archivo estático)
sudo chown www-data:www-data /var/www/intranet/index.html
sudo chmod 644 /var/www/intranet/index.html

# Directorio debe ser traversable (x) por www-data
sudo chmod 755 /var/www/intranet/`}
      />

      <CodeFiddle
        language="bash"
        title="Consultar logs Nginx"
        code={`# Últimas líneas de error (403, 404, permisos)
sudo tail -n 20 /var/log/nginx/error.log

# Peticiones recientes y códigos HTTP
sudo tail -n 20 /var/log/nginx/access.log

# Logs por sitio (si el virtual host los define)
sudo tail -n 20 /var/log/nginx/intranet.error.log
sudo tail -n 20 /var/log/nginx/intranet.access.log`}
      />

      <Callout title="403 vs 404">
        {
          "403: el archivo existe pero Nginx no puede leerlo (permisos/propietario). 404: la ruta no existe o root apunta a carpeta vacía. Revisa error.log antes de cambiar DNS o firewall."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" access_log y error_log por sitio; permisos 644 en archivos y 755 en directorios; propietario www-data."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" chmod 777 «para que funcione»; root como propietario de index.html; ignorar error.log tras 403."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Ignorar error.log tras deploy:"}</strong>
          {" 502 intermitente en API; nadie revisó error.log que mostraba permiso denegado a socket PHP-FPM. Corrección: tail -f error.log como paso post-deploy."}
        </li>
        <li>
          <strong>{"Log sin rotación:"}</strong>
          {" Disco lleno en VPS pequeño; MySQL y sitio cayeron juntos. Corrección: logrotate y alertas de disco >80%."}
        </li>
        <li>
          <strong>{"chmod 777 «para que funcione»:"}</strong>
          {" Uploads world-writable; intruso modificó index.php. Corrección: mínimo privilegio y SELinux/AppArmor si aplica."}
        </li>
      </ul>

    </section>
  );
}
