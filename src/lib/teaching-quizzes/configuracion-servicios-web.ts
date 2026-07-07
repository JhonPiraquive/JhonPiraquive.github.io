import type { QuizQuestion } from "@/components/teaching/Quiz";

export const CONFIGURACION_SERVICIOS_WEB_QUIZZES: Record<string, QuizQuestion[]> = {
  "clase-01-fundamentos-web": [
    {
      question: "¿Cuántos bits tiene una dirección IPv4 y cómo se agrupan en notación decimal?",
      options: [
        "64 bits en 2 grupos",
        "32 bits en 4 octetos de 8 bits",
        "128 bits en 8 hexadecimales",
        "16 bits en 2 octetos",
      ],
      correctIndex: 1,
      feedback: "IPv4 = 4 × 8 = 32 bits; cada octeto va de 0 a 255 en decimal.",
    },
    {
      question: "¿Por qué existe IPv6 además de IPv4?",
      options: [
        "Porque IPv4 no soporta DNS",
        "Por el agotamiento del espacio de direcciones IPv4 y la necesidad de más direcciones",
        "Porque IPv6 elimina la necesidad de routers",
        "Solo para redes Wi‑Fi",
      ],
      correctIndex: 1,
      feedback: "IPv6 ofrece 128 bits de dirección; convive con IPv4 en dual stack.",
    },
    {
      question: "En el flujo DNS, ¿qué devuelve un servidor raíz ante una consulta por www.ejemplo.co?",
      options: [
        "Directamente la IP del servidor web",
        "Delegación hacia los servidores del TLD (.co)",
        "El certificado TLS del dominio",
        "El contenido HTML de la página",
      ],
      correctIndex: 1,
      feedback: "Los 13 servidores raíz delegan; no resuelven el A final.",
    },
    {
      question: "¿Qué registro DNS asocia un nombre de host con una dirección IPv4?",
      options: ["MX", "CNAME", "A", "TXT"],
      correctIndex: 2,
      feedback: "Registro A → IPv4; AAAA → IPv6; CNAME es alias a otro nombre.",
    },
    {
      question:
        "Un técnico configura 192.168.1.100 en el registro A público de servidor.empresa.co. ¿Qué problema hay?",
      options: [
        "Ninguno; es la IP correcta si ping responde",
        "Es una IP privada RFC 1918; no es enrutable desde Internet",
        "Falta el registro MX",
        "Debe ser registro AAAA obligatoriamente",
      ],
      correctIndex: 1,
      feedback:
        "Las IP 192.168.x.x son de red local; desde Internet se necesita la IP pública del servidor o balanceador.",
    },
    {
      question: "¿Cuál es la diferencia entre un resolver recursivo y un servidor DNS autoritativo?",
      options: [
        "El recursivo almacena HTML; el autoritativo almacena IP",
        "El recursivo busca la respuesta completa por el cliente; el autoritativo tiene la verdad de la zona",
        "Son sinónimos en Cloudflare",
        "Solo el autoritativo puede consultar registros MX",
      ],
      correctIndex: 1,
      feedback:
        "El recursivo (ISP, 1.1.1.1) delega en la jerarquía; el autoritativo responde con los registros publicados en la zona primaria.",
    },
  ],
  "clase-02-hosting-correo-https": [
    {
      question: "¿Qué registro DNS dirige el correo entrante a un servidor?",
      options: ["A", "CNAME", "MX", "NS"],
      correctIndex: 2,
      feedback:
        "MX (Mail Exchange) indica qué servidor recibe correo para el dominio; prioridad menor = preferido.",
    },
    {
      question: "¿Qué tipo de hosting comparte CPU, RAM y disco con otros sitios en el mismo servidor?",
      options: ["Dedicado", "VPS", "Compartido", "Bare metal exclusivo"],
      correctIndex: 2,
      feedback: "En hosting compartido varios sitios coexisten en una misma máquina; es económico pero con recursos compartidos.",
    },
    {
      question: "¿Cuál es la relación correcta entre HTTP y HTTPS?",
      options: [
        "HTTPS es un protocolo distinto que reemplaza los métodos GET y POST",
        "HTTPS es HTTP con la misma semántica, cifrado por TLS en el puerto 443",
        "HTTP es más seguro porque no usa certificados",
        "Solo HTTPS puede servir archivos HTML",
      ],
      correctIndex: 1,
      feedback: "HTTPS envuelve HTTP con TLS; métodos y cabeceras son los mismos, el canal de red va cifrado.",
    },
    {
      question:
        "¿Qué registro TXT ayuda a que receptores confíen en que tu servidor está autorizado para enviar correo por tu dominio?",
      options: ["AAAA", "SPF (v=spf1 ...)", "CNAME", "PTR"],
      correctIndex: 1,
      feedback: "SPF lista servidores autorizados para enviar; sin él, Gmail/Outlook pueden marcar como spam o spoofing.",
    },
    {
      question: "¿Qué buzón corporativo suele atender consultas comerciales y cotizaciones?",
      options: ["gerencia@", "ventas@", "soporte@", "root@"],
      correctIndex: 1,
      feedback: "ventas@ centraliza consultas comerciales; soporte@ atiende incidencias técnicas post-venta.",
    },
  ],
  "clase-03-administracion-remota": [
    {
      question:
        "¿Qué pasaría si usas FTP plano (puerto 21) desde una red Wi‑Fi pública para subir código de producción?",
      options: [
        "Los archivos se comprimen automáticamente y viajan más rápido",
        "Usuario y contraseña pueden ser interceptados porque el canal no está cifrado",
        "El servidor bloquea la conexión por defecto",
        "FTP siempre usa el mismo cifrado que HTTPS",
      ],
      correctIndex: 1,
      feedback:
        "FTP legado envía credenciales en texto claro. En redes no confiables debes usar SFTP o FTPS.",
    },
    {
      question: "En FTP modo pasivo, ¿quién inicia la conexión de datos?",
      options: [
        "El servidor desde el puerto 20 hacia el cliente",
        "El cliente hacia un puerto alto indicado por el servidor",
        "Ninguno; es una sola conexión en puerto 21",
        "El router del ISP automáticamente",
      ],
      correctIndex: 1,
      feedback:
        "En pasivo el servidor anuncia un puerto alto con PASV y el cliente conecta hacia él; funciona mejor detrás de NAT.",
    },
    {
      question: "¿Cuál es la diferencia principal entre IaaS y PaaS?",
      options: [
        "IaaS solo sirve para correo electrónico",
        "En IaaS gestionas el sistema operativo y la infra virtual; en PaaS despliegas la app sobre plataforma gestionada",
        "PaaS no permite bases de datos",
        "IaaS es siempre gratis",
      ],
      correctIndex: 1,
      feedback:
        "IaaS = VMs y redes bajo tu administración; PaaS = runtime y escalado de plataforma los lleva el proveedor (Heroku, App Engine).",
    },
    {
      question:
        "¿Por qué se recomienda autenticación por clave pública en SSH en lugar de solo contraseña?",
      options: [
        "Las claves públicas son más cortas y fáciles de memorizar",
        "Resiste mejor ataques automatizados de fuerza bruta y evita reutilizar contraseñas débiles",
        "SSH sin clave no cifra la sesión",
        "Las contraseñas no están permitidas en ningún servidor Linux",
      ],
      correctIndex: 1,
      feedback:
        "La clave privada no viaja en cada intento; combinar con PasswordAuthentication no reduce superficie de ataque.",
    },
    {
      question: "¿Para qué sirve documentar IP, puerto y herramienta en una conexión SSH corporativa?",
      options: [
        "Para evitar usar contraseñas",
        "Para que cualquier técnico pueda reproducir el acceso y adjuntar evidencias verificables",
        "Porque SSH no funciona sin un archivo .ppk",
        "Solo es requisito en Windows, no en Linux",
      ],
      correctIndex: 1,
      feedback:
        "La ficha técnica (host, puerto, usuario, cliente, evidencia whoami) permite soporte rotativo y auditoría sin adivinar parámetros.",
    },
    {
      question: "Tras conectar por SSH, ¿qué comando confirma las direcciones IP del servidor?",
      options: ["whoami", "hostname -I", "systemctl status ssh", "nginx -t"],
      correctIndex: 1,
      feedback: "hostname -I lista las IPs asignadas al host; whoami es el usuario; systemctl status revisa el servicio SSH.",
    },
  ],
  "clase-04-virtualizacion-diagnostico": [
    {
      question: "¿Ventaja principal de un contenedor Docker frente a una VM?",
      options: [
        "Virtualiza un SO completo distinto al host",
        "Arranque rápido y menor consumo al compartir kernel",
        "No requiere imágenes",
        "Elimina la necesidad de red",
      ],
      correctIndex: 1,
      feedback: "Los contenedores comparten el kernel del host; las VMs virtualizan hardware y SO completo.",
    },
    {
      question: "El dominio no resuelve pero la IP responde ping. ¿Qué revisar primero?",
      options: ["Certificado TLS", "Registros DNS y propagación", "Docker logs", "Caché del navegador"],
      correctIndex: 1,
      feedback: "Si la IP funciona pero el nombre no, el problema suele estar en DNS.",
    },
    {
      question: "¿Para qué sirven los snapshots en una VM de pruebas?",
      options: [
        "Acelerar Internet",
        "Restaurar un estado conocido antes de experimentos",
        "Renovar certificados TLS",
        "Configurar registros MX",
      ],
      correctIndex: 1,
      feedback: "Un snapshot guarda el estado del disco para volver atrás si algo falla.",
    },
    {
      question: "¿Qué pasaría si la API en Compose arranca antes que PostgreSQL sin healthcheck?",
      options: [
        "Docker instala PostgreSQL automáticamente",
        "La API puede fallar al conectar y quedar en crash loop hasta reinicio manual",
        "Nginx renueva el certificado solo",
        "El kernel del host cambia a Windows",
      ],
      correctIndex: 1,
      feedback:
        "Sin `depends_on` + healthcheck, la app puede intentar conectar a una BD que aún no escucha. `depends_on: condition: service_healthy` mitiga esto.",
    },
    {
      question: "¿Por qué un sitio puede responder bien a dig @servidor-dns pero fallar en el navegador con DNS_PROBE?",
      options: [
        "Porque el certificado TLS expiró",
        "Porque el PC no usa ese DNS como resolver del sistema",
        "Porque falta registro MX",
        "Porque Nginx no tiene index.html",
      ],
      correctIndex: 1,
      feedback:
        "dig @servidor consulta ese DNS directamente; el navegador usa el resolver del SO o /etc/hosts.",
    },
    {
      question: "¿Cuál es el orden correcto antes de reiniciar Nginx tras editar un virtual host?",
      options: [
        "systemctl restart nginx y luego nginx -t",
        "sudo nginx -t y, si es successful, sudo systemctl restart nginx",
        "Solo curl al sitio; nginx -t no es necesario",
        "Eliminar sites-enabled y reconstruir Docker",
      ],
      correctIndex: 1,
      feedback: "nginx -t valida sintaxis sin aplicar cambios rotos; restart solo tras prueba exitosa.",
    },
    {
      question: "curl http://127.0.0.1 devuelve 403. ¿Qué revisar primero según la metodología sistemática?",
      options: [
        "Registros MX del dominio",
        "Permisos y propietario de index.html en el document root; error.log de Nginx",
        "Reinstalar Docker Desktop",
        "Cambiar nameservers públicos",
      ],
      correctIndex: 1,
      feedback: "403 en local apunta a permisos/archivos o root incorrecto, no a DNS externo.",
    },
  ],
};
