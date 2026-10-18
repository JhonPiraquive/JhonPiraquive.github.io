import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {"Cada ejercicio ofrece pistas y una validación que indica si la respuesta va por buen camino. Se recomienda intentarlos antes de volver al contenido."}
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Lista de pruebas"}</h3>
      <PracticeExercise
        prompt="¿Por qué el paso 2 (resolución en el PC) es necesario aunque el paso 1 (dig al autoritativo) ya devolvió la IP correcta?"
        hints={["¿Usa el navegador el mismo resolver?", "caché, hosts"]}
        expectedKeywords={["cliente", "resolver", "sistema", "navegador"]}
        successMessage="Correcto. El autoritativo puede estar bien mientras el PC usa otro resolver o no tiene hosts/DNS configurado."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Contenedores"}</h3>
      <PracticeExercise
        prompt="¿Por qué un contenedor arranca en segundos y una VM en minutos? Relacionar la respuesta con el kernel compartido frente al SO invitado completo."
        hints={["Piensa en qué capas arranca cada tecnología", "¿Cuántos kernels corren en el host?"]}
        expectedKeywords={["kernel", "SO invitado", "segundos", "virtualiza"]}
        successMessage="Correcto. El contenedor reutiliza el kernel del host; la VM debe arrancar un sistema operativo completo con su propio kernel."
      />
      <PracticeExercise
        prompt="Un equipo en Buenos Aires debe probar `ufw` y `systemd` en Ubuntu Server antes de tocar el VPS de producción. ¿Recomendarías VM o contenedor? Justifica en una frase."
        hints={["¿Necesitas un SO completo con su propio kernel?", "¿El laboratorio simula un servidor bare-metal?"]}
        expectedKeywords={["VM", "Ubuntu", "snapshot", "laboratorio"]}
        successMessage="Correcto. La VM reproduce mejor un servidor completo con firewall y systemd; los snapshots permiten volver atrás si algo sale mal."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Despliegue de un contenedor"}</h3>
      <PracticeExercise
        prompt="Tras `docker run -d --name web -p 8080:80 nginx:alpine`, ¿qué comando confirma que el contenedor escucha el puerto 80 internamente y qué columna de docker ps verifica el mapeo al host?"
        hints={["docker exec …", "Columna PORTS"]}
        expectedKeywords={["docker ps", "PORTS", "8080", "exec"]}
        successMessage="docker ps muestra PORTS 0.0.0.0:8080->80/tcp; docker exec web ss -tlnp | grep :80 confirma escucha interna."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Diagnóstico sistemático"}</h3>
      <PracticeExercise
        prompt="Síntoma: curl http://127.0.0.1 devuelve «Connection refused» pero ss muestra nginx en puerto 8080. ¿Cuál es la causa más probable y qué dos comandos confirmarían la hipótesis?"
        hints={["Compara puerto en ss con puerto en curl", "Revisa sites-available listen directive"]}
        expectedKeywords={["8080", "listen", "80", "nginx -t", "sites-available"]}
        successMessage="Probable desajuste de puerto: nginx escucha 8080 pero se prueba :80. Confirmar con grep listen en sites-available y curl http://127.0.0.1:8080."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Flujo integrado"}</h3>
      <PracticeExercise
        prompt="Un cliente abre www.empresa.co y ve el sitio, pero ventas@empresa.co rebota. ¿Qué capa conviene investigar primero y qué registro DNS revisarías?"
        hints={["El sitio web funciona", "Piensa en MX y mail"]}
        expectedKeywords={["MX", "correo", "mail", "DNS"]}
        successMessage="Correcto. La web usa registro A; el correo depende de MX y A de mail — conviene revisar esa capa DNS y correo, no el hosting web."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Informe técnico"}</h3>
      <PracticeExercise
        prompt="Redacta en una frase la «causa raíz» si nginx -t falla por directiva_invalida en la línea 42 de intranet.conf y el servicio está en failed."
        hints={["Relaciona nginx -t con systemctl failed", "Menciona la directiva o el archivo"]}
        expectedKeywords={["directiva", "configuración", "intranet.conf", "sintaxis", "failed"]}
        successMessage="Ejemplo: «Causa raíz: directiva inválida en /etc/nginx/sites-available/intranet.conf línea 42, impide arranque de nginx (failed).»"
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Paneles de administración"}</h3>
      <PracticeExercise
        prompt="¿En qué orden conviene configurar DNS, hosting y correo para una empresa nueva? Justificar brevemente."
        hints={["¿Qué necesita el MX?", "¿Qué necesita el sitio web?"]}
        expectedKeywords={["DNS", "MX", "hosting", "correo", "A"]}
        successMessage="Correcto. DNS primero (A para web, A+MX para correo), luego hosting con HTML, luego buzones y TXT SPF/DKIM."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Reconocimiento del entorno"}</h3>
      <PracticeExercise
        prompt="Ordena los comandos de reconocimiento: (a) ss -tlnp, (b) whoami, (c) uname -a, (d) systemctl status nginx. ¿Cuál va primero y por qué?"
        hints={["Empieza confirmando SO y usuario", "Los puertos van después de saber qué servicios deberían escuchar"]}
        expectedKeywords={["c", "b", "uname", "whoami"]}
        successMessage="Orden lógico: (c) uname → (b) whoami → (d) systemctl status nginx → (a) ss -tlnp. Primero contexto del sistema, luego servicios, luego red."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Resolución local"}</h3>
      <PracticeExercise
        prompt="dig @192.168.1.10 devuelve la IP correcta pero el navegador muestra DNS_PROBE. ¿Qué falta configurar?"
        hints={["¿Quién resuelve el navegador?", "hosts o DNS del SO"]}
        expectedKeywords={["hosts", "resolver", "sistema", "DNS"]}
        successMessage="Correcto. El PC no usa ese DNS como resolver del sistema; hay que configurar el DNS manual o /etc/hosts."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Solución de problemas"}</h3>
      <PracticeExercise
        prompt="Síntoma: `curl http://IP` funciona, pero `curl http://dominio` falla. Escribe tres comprobaciones en orden y la causa más probable."
        hints={["Empieza por la capa DNS", "Compara resolución con `dig`", "¿El registro A apunta a la IP correcta?"]}
        expectedKeywords={["dig", "DNS", "registro A", "propagación"]}
        successMessage="Correcto. La causa más probable es un registro DNS incorrecto o propagación pendiente, no TLS ni contenedores."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"SSH"}</h3>
      <CodeChallenge
        title="Práctica: completar comando SSH"
        template={"ssh {{blank1}} ~/.ssh/id_ed25519 deploy@203.0.113.10"}
        blanks={[
          {
            id: "blank1",
            answer: "-i",
            placeholder: "Flag para indicar archivo de clave privada",
          },
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Validación posterior a la corrección"}</h3>
      <PracticeExercise
        prompt="Tras corregir nginx, curl http://127.0.0.1/ devuelve 200 pero el navegador externo muestra timeout. Menciona dos comprobaciones adicionales (comando o capa) antes de dar por cerrada la incidencia."
        hints={["Piensa en firewall e iptables", "¿El puerto externo coincide con listen interno?"]}
        expectedKeywords={["ss", "firewall", "iptables", "puerto", "curl"]}
        successMessage="Revisar ss -tlnp vs puerto esperado externamente, reglas iptables/ufw, y curl desde el host cliente hacia IP:puerto mapeado."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Validación del servicio FTP"}</h3>
      <PracticeExercise
        prompt="systemctl muestra vsftpd active pero FileZilla falla en listado con «425 Can't open data connection». ¿Qué dos capas revisarías primero?"
        hints={["Pasivo", "Firewall"]}
        expectedKeywords={["pasivo", "pasv", "puerto", "firewall", "50000"]}
        successMessage="Revisar pasv_min/max_port en vsftpd.conf, modo pasivo en cliente y que firewall/Docker exponga el rango pasivo además del puerto 21."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Repaso de la clase"}</h3>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordenar el flujo SSH con clave pública: (a) cliente inicia TCP a puerto 22, (b) servidor verifica clave en authorized_keys, (c) usuario genera par con ssh-keygen, (d) shell remoto disponible, (e) copiar .pub al servidor. Escribe la secuencia correcta."
          hints={[
            "Primero generas las claves en el cliente",
            "La clave pública debe estar en el servidor antes de conectar",
          ]}
          expectedKeywords={["c", "e", "a", "b", "d"]}
          successMessage="Correcto. Secuencia: c → e → a → b → d."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Escribir el comando scp para subir index.html a /var/www/html/ en user@192.0.2.50 usando la clave ~/.ssh/deploy_key."
          hints={["scp usa la misma flag -i que ssh para la clave privada"]}
          expectedKeywords={[
            "scp",
            "-i",
            "deploy_key",
            "index.html",
            "192.0.2.50",
            "/var/www/html",
          ]}
          successMessage="Correcto. scp -i ~/.ssh/deploy_key index.html user@192.0.2.50:/var/www/html/"
        />
      </div>
      <div className="my-8">
      <PracticeExercise
        prompt="Escribir un `Dockerfile` mínimo que copie `index.html` a una imagen `nginx:alpine` y exponga el puerto 80. Indicar las instrucciones clave (`FROM`, `COPY`, `EXPOSE`)."
        hints={["La imagen base es nginx:alpine", "COPY index.html a /usr/share/nginx/html/", "EXPOSE 80"]}
        expectedKeywords={["FROM", "nginx", "COPY", "EXPOSE", "80"]}
        successMessage="Ejemplo válido: FROM nginx:alpine, COPY index.html /usr/share/nginx/html/, EXPOSE 80."
      />

      </div>
    </section>
  );
}
