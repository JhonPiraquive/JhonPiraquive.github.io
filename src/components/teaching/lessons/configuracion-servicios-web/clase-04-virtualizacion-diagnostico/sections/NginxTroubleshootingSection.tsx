import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

const NGINX_STATUS = `sudo systemctl status nginx
# active (running) → servicio OK
# inactive (dead) → no arrancado; probar: sudo systemctl start nginx
# failed → revisar: sudo journalctl -u nginx -n 30 --no-pager`;

const NGINX_TEST = `sudo nginx -t
# nginx: configuration file /etc/nginx/nginx.conf test is successful
# Si falla: indica archivo y línea del error en sites-available

# Listar sitios configurados
ls -la /etc/nginx/sites-available/
ls -la /etc/nginx/sites-enabled/`;

const NGINX_LOGS = `# Logs del servicio (systemd)
sudo journalctl -u nginx -n 50 --no-pager

# Logs específicos del virtual host (rutas habituales)
sudo tail -n 30 /var/log/nginx/error.log
sudo tail -n 30 /var/log/nginx/access.log

# Buscar errores recientes
sudo grep -i error /var/log/nginx/error.log | tail -20`;

export function NginxTroubleshootingSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Diagnóstico de Nginx: servicio, configuración y logs"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El troubleshooting de Nginx combina tres fuentes: el estado del servicio (systemd), la validez de la configuración (nginx -t, sites-available/sites-enabled) y los registros de error y acceso. Juntos indican si el problema es de arranque, sintaxis, permisos, rutas de archivos o peticiones rechazadas."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Nginx es el servidor web más usado en VPS y entornos corporativos Linux. Un 502, 403, 404 o página en blanco casi siempre deja rastro en error.log o journalctl. Saber leer esos mensajes ahorra horas frente a reinstalar el paquete completo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Síntomas frecuentes → causa → acción"}</h3>
      <CompareTable
        headers={["Síntoma", "Causa probable", "Comandos clave", "Corrección típica"]}
        rows={[
          [
            "502 Bad Gateway / connection refused en curl local",
            "nginx detenido o failed",
            "systemctl status nginx; journalctl -u nginx",
            "Corregir config → nginx -t → systemctl restart nginx",
          ],
          [
            "nginx -t falla",
            "Directiva inválida o ; faltante en virtual host",
            "nginx -t (muestra archivo:línea)",
            "Editar sites-available; eliminar línea errónea; nginx -t; restart",
          ],
          [
            "403 Forbidden",
            "Permisos o index.html no legible por www-data",
            "ls -la /var/www/…; tail error.log",
            "chown www-data:www-data; chmod 644 index.html",
          ],
          [
            "404 Not Found",
            "index.html ausente o root incorrecto",
            "grep root sites-available; ls document root",
            "Restaurar index.html; alinear root con carpeta real",
          ],
          [
            "Sitio no responde en :80 pero ss muestra :8080",
            "listen en puerto distinto al esperado",
            "ss -tlnp; grep listen sites-available",
            "Cambiar listen 80; nginx -t; restart",
          ],
          [
            "curl por nombre interno falla; por 127.0.0.1 OK",
            "/etc/hosts incorrecto",
            "cat /etc/hosts",
            "Corregir mapeo 127.0.0.1 nombre-interno",
          ],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estado del servicio"}</h3>
      <CodeFiddle language="bash" title="systemctl status nginx" code={NGINX_STATUS} />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Validar configuración"}</h3>
      <CodeFiddle language="bash" title="nginx -t y sites-available" code={NGINX_TEST} />

      <CodeFiddle
        language="nginx"
        title="Fragmento virtual host (referencia)"
        code={`# /etc/nginx/sites-available/intranet.conf
server {
    listen 80;
    listen [::]:80;
    server_name intranet.empresa.local;
    root /var/www/intranet;
    index index.html;
    access_log /var/log/nginx/intranet.access.log;
    error_log  /var/log/nginx/intranet.error.log;
}`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Consultar logs"}</h3>
      <CodeFiddle language="bash" title="journalctl y /var/log/nginx/" code={NGINX_LOGS} />

      <Callout title="Permisos y propietario">
        {
          "Nginx suele ejecutarse como www-data. Si index.html pertenece a root y tiene chmod 600, verás 403 en access.log y «Permission denied» en error.log. La corrección es chown/chmod, no reinstalar Nginx."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Acciones correctivas habituales"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Reiniciar servicio: sudo systemctl restart nginx (tras nginx -t exitoso)."}</li>
        <li>{"Corregir virtual host en /etc/nginx/sites-available/ y enlace en sites-enabled/."}</li>
        <li>{"Ajustar permisos: sudo chown www-data:www-data archivo; sudo chmod 644 archivo."}</li>
        <li>{"Restaurar index.html desde copia de referencia si fue eliminado."}</li>
        <li>{"Corregir /etc/hosts si el sitio usa nombre interno corporativo."}</li>
        <li>{"Revisar firewall (iptables/ufw) si el puerto escucha pero curl externo hace timeout."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" nginx -t antes de restart; leer error.log completo; documentar línea corregida."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" systemctl restart en bucle sin leer journalctl; editar nginx.conf global cuando el error está en sites-available."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"nginx -t omitido:"}</strong>
          {" Typo en ssl_certificate tumba nginx entero; todos los sitios caídos. Corrección: nginx -t siempre antes de reload."}
        </li>
        <li>
          <strong>{"error.log ignorado por tamaño:"}</strong>
          {" grep no encontró error reciente en log de 2 GB sin rotate. Corrección: logrotate y tail con --since."}
        </li>
      </ul>

    </section>
  );
}
