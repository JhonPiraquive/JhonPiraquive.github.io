import type { QuizQuestion } from "@/components/teaching/Quiz";

export const POSW_QUIZZES: Record<string, QuizQuestion[]> = {
  "servicios-web": [
    {
      question: "¿Qué define mejor a un servicio web?",
      options: [
        "Una página HTML para humanos",
        "Un sistema máquina-a-máquina con interfaz estandarizada en red",
        "Solo una base de datos en la nube",
        "Un framework de frontend",
      ],
      correctIndex: 1,
      feedback:
        "Un servicio web expone funcionalidad para que otras aplicaciones la consuman programáticamente, típicamente vía HTTP.",
    },
    {
      question: "¿Cuál es un beneficio de la escalabilidad independiente en arquitectura de servicios?",
      options: [
        "Obliga a escalar todo el monolito junto",
        "Solo el componente con más carga puede escalarse sin tocar el resto",
        "Elimina la necesidad de bases de datos",
        "Impide usar múltiples lenguajes",
      ],
      correctIndex: 1,
      feedback:
        "Modularidad permite escalar el servicio de pagos, catálogo u otro módulo según demanda real.",
    },
    {
      question: "En SOLID, el principio de Responsabilidad Única (S) implica que…",
      options: [
        "Un endpoint debe hacer todo para reducir archivos",
        "Cada módulo tiene una sola razón para cambiar",
        "Solo puede haber una clase en el proyecto",
        "No se permiten interfaces",
      ],
      correctIndex: 1,
      feedback:
        "/usuarios no debería mezclar pagos ni envío de emails; cada responsabilidad va en su módulo.",
    },
    {
      question: "La analogía del ATM ilustra principalmente…",
      options: [
        "Que los servicios web solo funcionan con tarjetas de crédito",
        "Interoperabilidad mediante interfaz estandarizada independiente del emisor",
        "Que HTTP no es necesario",
        "Que los servicios web no usan redes",
      ],
      correctIndex: 1,
      feedback:
        "Cualquier tarjeta compatible usa la misma interfaz del cajero, igual que clientes heterogéneos usan la misma API.",
    },
    {
      question: "¿Qué problema resuelve centralizar lógica en el servicio frente a duplicarla en clientes?",
      options: [
        "Más inconsistencias entre plataformas",
        "Reglas de negocio coherentes y un solo lugar para corregir bugs",
        "Imposibilita la interoperabilidad",
        "Obliga a un solo lenguaje de programación",
      ],
      correctIndex: 1,
      feedback:
        "Compartir datos y lógica en el servidor evita que web, móvil y batch implementen reglas distintas.",
    },
  ],
  "formatos-datos": [
    {
      question: "¿Qué elemento es obligatorio en un documento XML bien formado?",
      options: [
        "Múltiples elementos raíz",
        "Un único elemento raíz",
        "Comentarios en cada línea",
        "Namespace obligatorio siempre",
      ],
      correctIndex: 1,
      feedback:
        "XML exige exactamente un elemento raíz que contiene el resto de la jerarquía.",
    },
    {
      question: "¿Cuál afirmación sobre JSON es correcta según la especificación estándar?",
      options: [
        "Admite comentarios con //",
        "Soporta tipos nativos como number y boolean",
        "Usa atributos en etiquetas",
        "Reemplazó a HTTP",
      ],
      correctIndex: 1,
      feedback:
        "JSON distingue números y booleanos; no admite comentarios ni atributos al estilo XML.",
    },
    {
      question: "Para una API REST nueva en 2025, la regla práctica recomienda…",
      options: [
        "XML siempre",
        "JSON por defecto",
        "Solo CSV",
        "Sin cuerpo en las respuestas",
      ],
      correctIndex: 1,
      feedback:
        "JSON es compacto y nativo en ecosistemas web modernos; XML queda para legado o estándares que lo exijan.",
    },
    {
      question: '¿Cómo se representa en JSON la moneda que en XML iba como atributo moneda="COP"?',
      options: [
        "Como comentario <!-- COP -->",
        'Como campo dentro de un objeto, p. ej. "moneda": "COP"',
        "No se puede representar",
        "Solo con namespaces",
      ],
      correctIndex: 1,
      feedback: "JSON no tiene atributos; los metadatos son propiedades del objeto.",
    },
    {
      question: "¿Qué herramienta nativa del navegador parsea una cadena JSON?",
      options: ["DOMParser", "JSON.parse()", "XMLHttpRequest solo", "document.querySelector"],
      correctIndex: 1,
      feedback: "JSON.parse() convierte texto JSON a objetos JS; DOMParser es para XML/HTML.",
    },
  ],
  "http-headers": [
    {
      question: "¿Qué separa los headers HTTP del cuerpo del mensaje?",
      options: [
        "Un header Content-Separator",
        "Una línea en blanco",
        "El código de estado",
        "El método HTTP",
      ],
      correctIndex: 1,
      feedback: "Tras los headers hay una línea vacía; luego viene el body opcional.",
    },
    {
      question: "¿Qué header es obligatorio en HTTP/1.1 para indicar el servidor destino?",
      options: ["Origin", "Host", "Referer", "User-Agent"],
      correctIndex: 1,
      feedback: "Host identifica el dominio; es requerido en HTTP/1.1.",
    },
    {
      question: "¿Cuándo el navegador envía una petición preflight OPTIONS?",
      options: [
        "Siempre en GET",
        "En peticiones complejas (p. ej. PUT, DELETE, Authorization custom)",
        "Solo con HTTP/3",
        "Nunca si usas JSON",
      ],
      correctIndex: 1,
      feedback:
        "Peticiones simples (GET, POST básico) no requieren preflight; métodos y headers custom sí.",
    },
    {
      question: "¿Qué header de respuesta permite que un origen específico consuma la API desde el navegador?",
      options: [
        "Access-Control-Allow-Origin",
        "Content-Length",
        "WWW-Authenticate",
        "Retry-After",
      ],
      correctIndex: 0,
      feedback: "El servidor declara orígenes permitidos con Access-Control-Allow-Origin.",
    },
    {
      question: "¿Qué header mitiga ataques de clickjacking embebiendo tu sitio en un iframe?",
      options: ["Content-Type", "X-Frame-Options", "Accept-Encoding", "ETag"],
      correctIndex: 1,
      feedback: "X-Frame-Options DENY o SAMEORIGIN impide que otras páginas enmarquen tu app.",
    },
  ],
  apis: [
    {
      question: "¿Qué propiedad de una API oculta cómo funciona internamente el servidor?",
      options: ["Interoperabilidad", "Abstracción", "Versionado", "Paginación"],
      correctIndex: 1,
      feedback:
        "La abstracción permite usar la API sin conocer la implementación interna (base de datos, lenguaje, etc.).",
    },
    {
      question: "¿Cuál es la convención correcta para listar productos en una API REST?",
      options: [
        "GET /obtenerProductos",
        "POST /api/v1/listar-productos",
        "GET /api/v1/productos",
        "GET /api/v1/productos/eliminar",
      ],
      correctIndex: 2,
      feedback: "URIs con sustantivos en plural, método GET para lectura, versionado en la ruta.",
    },
    {
      question: "¿Qué tipo de API usa típicamente OpenWeatherMap o Stripe?",
      options: [
        "API privada interna",
        "API pública con API key",
        "API de partner exclusiva",
        "Solo SOAP",
      ],
      correctIndex: 1,
      feedback:
        "APIs públicas son accesibles a desarrolladores externos, generalmente con registro y API key.",
    },
    {
      question: "¿Qué herramienta CLI es estándar para probar endpoints desde terminal o scripts?",
      options: ["Swagger UI", "Thunder Client", "curl", "Hoppscotch"],
      correctIndex: 2,
      feedback:
        "curl es CLI multiplataforma ideal para pruebas rápidas y CI/CD; las demás son principalmente GUI.",
    },
    {
      question:
        'Un endpoint devuelve HTTP 200 con { "error": true, "mensaje": "No encontrado" }. ¿Qué anti-patrón es?',
      options: [
        "No versionar la API",
        "Usar siempre 200 aunque haya errores",
        "Exponer contraseñas hasheadas",
        "Omitir paginación",
      ],
      correctIndex: 1,
      feedback:
        "El código de estado debe reflejar el resultado real (404 para no encontrado, 422 para validación, etc.).",
    },
  ],
  "http-metodos-status": [
    {
      question: "¿Qué método HTTP es adecuado para obtener datos sin modificar el servidor?",
      options: ["POST", "GET", "DELETE", "PATCH"],
      correctIndex: 1,
      feedback: "GET es Safe e Idempotente; solo solicita representación del recurso.",
    },
    {
      question: "¿Cuál es la diferencia principal entre PUT y PATCH?",
      options: [
        "PUT es solo para eliminar",
        "PUT reemplaza el recurso completo; PATCH aplica cambios parciales",
        "PATCH siempre es Safe",
        "PUT no puede crear recursos",
      ],
      correctIndex: 1,
      feedback: "PUT sustituye toda la representación; PATCH actualiza solo los campos enviados.",
    },
    {
      question: "Un cliente no envió token Bearer. ¿Qué código debe devolver el servidor?",
      options: ["403 Forbidden", "404 Not Found", "401 Unauthorized", "500 Internal Server Error"],
      correctIndex: 2,
      feedback: "401 indica que falta autenticación; 403 es cuando ya está autenticado pero sin permiso.",
    },
    {
      question: "¿Qué código indica que un recurso fue creado exitosamente con POST?",
      options: ["200 OK", "204 No Content", "201 Created", "301 Moved Permanently"],
      correctIndex: 2,
      feedback: "201 Created es la respuesta estándar de POST exitoso; suele incluir header Location.",
    },
    {
      question: "¿Por qué POST generalmente no es idempotente?",
      options: [
        "Porque siempre devuelve 404",
        "Porque cada petición idéntica puede crear un nuevo recurso o efecto distinto",
        "Porque no permite JSON",
        "Porque solo funciona con HTTPS",
      ],
      correctIndex: 1,
      feedback: "Repetir POST puede duplicar recursos; PUT/DELETE repetidos tienen el mismo efecto final.",
    },
  ],
  "protocolos-seguridad": [
    {
      question: "¿Qué significa que HTTP es stateless?",
      options: [
        "El servidor guarda sesión automáticamente entre peticiones",
        "Cada petición es independiente; el protocolo no retiene estado del cliente",
        "No permite cookies",
        "Solo funciona con HTTPS",
      ],
      correctIndex: 1,
      feedback:
        "HTTP no recuerda peticiones anteriores por sí solo; el estado se añade en capa de aplicación.",
    },
    {
      question: "¿Cuál es el puerto por defecto de HTTPS?",
      options: ["80", "443", "8080", "22"],
      correctIndex: 1,
      feedback: "HTTP usa 80; HTTPS usa 443 con TLS debajo.",
    },
    {
      question: "¿Qué versión(es) de TLS son aceptables en 2025?",
      options: [
        "SSL 2.0 y SSL 3.0",
        "TLS 1.0 y TLS 1.1",
        "TLS 1.2 y TLS 1.3",
        "Solo SSL 3.0",
      ],
      correctIndex: 2,
      feedback: "SSL y TLS 1.0/1.1 están obsoletos; usa TLS 1.2 o 1.3.",
    },
    {
      question: "¿Qué garantiza el certificado digital en HTTPS?",
      options: [
        "Que el código JavaScript no tenga bugs",
        "Autenticación del servidor y base para el canal cifrado con la CA",
        "Que no haga falta autenticación de usuarios",
        "Que HTTP sea más rápido que UDP",
      ],
      correctIndex: 1,
      feedback:
        "El certificado permite verificar identidad del servidor y negociar TLS; no reemplaza login de usuarios.",
    },
    {
      question: "En una red Wi-Fi pública, el mayor riesgo de usar HTTP es…",
      options: [
        "Que el servidor no encuentre la ruta",
        "Que terceros puedan leer el tráfico en texto plano",
        "Que JSON deje de funcionar",
        "Que el puerto 443 se bloquee",
      ],
      correctIndex: 1,
      feedback:
        "Sin TLS, credenciales y tokens viajan legibles para cualquier interceptor en la red.",
    },
  ],
  "tipos-servicios-web": [
    {
      question: "¿Qué distingue a SOAP de REST?",
      options: [
        "SOAP es un estilo; REST es un protocolo XML",
        "SOAP es protocolo con mensajes XML y WSDL; REST es estilo arquitectónico sobre HTTP",
        "Ambos usan solo JSON",
        "REST requiere WS-Security",
      ],
      correctIndex: 1,
      feedback:
        "SOAP define formato estricto XML; REST aprovecha HTTP semántico sin ser un protocolo único.",
    },
    {
      question: "¿Qué problema de REST resuelve GraphQL con una query anidada?",
      options: [
        "Cifrado TLS",
        "Under-fetching (múltiples requests para datos relacionados)",
        "Integración con SAP",
        "Streaming binario",
      ],
      correctIndex: 1,
      feedback:
        "GraphQL permite obtener entidades relacionadas en una sola petición con la forma exacta requerida.",
    },
    {
      question: "¿Por qué gRPC suele ser más eficiente que REST+JSON en microservicios internos?",
      options: [
        "Usa XML más pequeño",
        "HTTP/2 y serialización protobuf binaria más compacta",
        "No necesita contrato",
        "Funciona solo en navegadores",
      ],
      correctIndex: 1,
      feedback:
        "Protobuf reduce tamaño y HTTP/2 permite multiplexación; ideal servidor-a-servidor.",
    },
    {
      question: "¿Qué código de estado inicia una conexión WebSocket?",
      options: [
        "200 OK",
        "404 Not Found",
        "101 Switching Protocols",
        "201 Created",
      ],
      correctIndex: 2,
      feedback:
        "Tras el handshake HTTP con Upgrade: websocket, el servidor responde 101 y la conexión persiste.",
    },
    {
      question: "¿Cuándo elegirías SOAP sobre REST?",
      options: [
        "API pública para app móvil nueva",
        "Chat en tiempo real",
        "Integración con sistema bancario legacy que exige XML y WS-Security",
        "Microservicios internos en Go",
      ],
      correctIndex: 2,
      feedback:
        "SOAP persiste donde el contrato WSDL y seguridad a nivel mensaje son requisito del ecosistema legacy.",
    },
  ],
  frontend: [
    {
      question: "¿Dónde se ejecuta principalmente el código frontend?",
      options: [
        "En el servidor de base de datos",
        "En el dispositivo del usuario (navegador)",
        "En el API Gateway",
        "En el CDN solamente",
      ],
      correctIndex: 1,
      feedback:
        "El frontend (client-side) corre en el navegador del usuario; el backend corre en el servidor.",
    },
    {
      question: "¿Cuál es una responsabilidad típica del frontend moderno?",
      options: [
        "Persistir datos en PostgreSQL",
        "Consumir APIs del backend",
        "Configurar firewalls",
        "Firmar certificados SSL",
      ],
      correctIndex: 1,
      feedback:
        "El frontend renderiza UI y consume APIs; la persistencia y seguridad de infra son backend/DevOps.",
    },
    {
      question: "¿Qué framework usa JSX y Virtual DOM como enfoque central?",
      options: ["Angular", "React", "Django", "Express"],
      correctIndex: 1,
      feedback:
        "React es una librería de UI basada en componentes y JSX; Angular usa plantillas TypeScript.",
    },
    {
      question: "¿Qué meta-framework de React ayuda con SSR y SEO?",
      options: ["Redux", "Next.js", "Vite", "Webpack"],
      correctIndex: 1,
      feedback:
        "Next.js añade server-side rendering y routing a React; Vue usa Nuxt, Svelte usa SvelteKit.",
    },
    {
      question: "¿Por qué Svelte suele tener buen rendimiento en apps pequeñas/medianas?",
      options: [
        "Porque no usa JavaScript",
        "Porque compila a JS puro en build time sin Virtual DOM runtime",
        "Porque solo funciona en servidor",
        "Porque reemplaza HTTP por WebSockets",
      ],
      correctIndex: 1,
      feedback:
        "Svelte mueve trabajo al compilador; menos overhead en runtime que Virtual DOM tradicional.",
    },
  ],
  backend: [
    {
      question: "¿Dónde se ejecuta principalmente el código backend?",
      options: [
        "En el navegador del usuario",
        "En el servidor",
        "En la CDN",
        "En la base de datos",
      ],
      correctIndex: 1,
      feedback:
        "El backend (server-side) corre en el servidor; el frontend corre en el dispositivo del usuario.",
    },
    {
      question: "¿Cuál es una responsabilidad típica del backend?",
      options: [
        "Renderizar componentes React",
        "Gestionar rutas del cliente (SPA routing)",
        "Persistir datos y aplicar lógica de negocio",
        "Optimizar CSS y assets estáticos",
      ],
      correctIndex: 2,
      feedback:
        "Persistencia, auth y reglas de negocio son responsabilidades del backend; renderizar UI es frontend.",
    },
    {
      question: "Un equipo solo conoce JavaScript y necesita una API REST rápida. ¿Qué opción es más sensata?",
      options: [
        "Reescribir todo en Rust desde cero",
        "Node.js + Express o NestJS",
        "Spring Boot sin experiencia Java",
        "PHP Laravel para un modelo ML",
      ],
      correctIndex: 1,
      feedback:
        "La experiencia del equipo suele pesar más que la velocidad teórica de otro lenguaje.",
    },
    {
      question: "En la arquitectura en capas, ¿qué hace típicamente un controlador?",
      options: [
        "Ejecuta consultas SQL directamente sin servicios",
        "Recibe el request HTTP y delega al servicio",
        "Renderiza HTML en el navegador",
        "Cachea assets estáticos en CDN",
      ],
      correctIndex: 1,
      feedback:
        "El controlador orquesta la petición HTTP; la lógica de negocio vive en la capa de servicio.",
    },
    {
      question: "¿Por qué el backend debe validar datos aunque el frontend ya los validó?",
      options: [
        "Porque el frontend no puede enviar JSON",
        "Porque el cliente es manipulable y el servidor es la fuente de verdad",
        "Porque HTTP no soporta POST",
        "Porque las bases de datos no aceptan datos inválidos automáticamente",
      ],
      correctIndex: 1,
      feedback:
        "Cualquier usuario puede enviar requests directos al API; la validación en servidor es obligatoria.",
    },
  ],
  tokens: [
    {
      question: "¿Qué partes componen un JWT separadas por puntos?",
      options: [
        "username.password.token",
        "header.payload.signature",
        "request.response.cookie",
        "alg.key.exp",
      ],
      correctIndex: 1,
      feedback: "Un JWT es header.payload.signature, cada parte codificada en Base64URL.",
    },
    {
      question: "¿Por qué no debes guardar contraseñas en el payload de un JWT?",
      options: [
        "Porque el JWT no soporta JSON",
        "Porque el payload solo está codificado, no cifrado, y es legible por cualquiera",
        "Porque expira en 5 segundos",
        "Porque requiere OAuth obligatoriamente",
      ],
      correctIndex: 1,
      feedback: "Base64URL no es cifrado; decodificar el payload es trivial sin la secret key.",
    },
    {
      question: "¿Qué mecanismo identifica una aplicación (no un usuario) en cada request?",
      options: [
        "JWT con claim sub",
        "Sesión por cookie",
        "API Key",
        "OAuth Authorization Code",
      ],
      correctIndex: 2,
      feedback: "La API Key identifica la app cliente; para usuarios se combina con otros mecanismos.",
    },
    {
      question: "En OAuth 2.0, ¿qué rol emite el access_token?",
      options: [
        "Resource Owner",
        "Client",
        "Authorization Server",
        "Resource Server",
      ],
      correctIndex: 2,
      feedback:
        "El Authorization Server (ej. Google) autentica al usuario y emite tokens tras validar el authorization code.",
    },
    {
      question: "¿Cuál permite revocación inmediata de acceso al borrar el registro en servidor?",
      options: [
        "JWT stateless",
        "API Key sin rotación",
        "Sesión por cookie con session store",
        "JWT con exp de 30 días",
      ],
      correctIndex: 2,
      feedback: "Las sesiones son stateful; borrar la sesión en el servidor invalida el acceso de inmediato.",
    },
  ],
  cache: [
    {
      question: "¿Qué mide el Cache Hit Rate?",
      options: [
        "Cuánto pesa el caché en disco",
        "El porcentaje de requests servidas desde caché sin ir a la fuente original",
        "La velocidad de Redis en MB/s",
        "Cuántas claves tiene Memcached",
      ],
      correctIndex: 1,
      feedback: "Hit Rate = (Hits / Total Requests) × 100. Objetivo típico: > 90%.",
    },
    {
      question: "¿Qué header HTTP indica que un recurso no debe almacenarse en ningún caché?",
      options: [
        "Cache-Control: max-age=3600",
        "Cache-Control: public",
        "Cache-Control: no-store",
        'ETag: "abc123"',
      ],
      correctIndex: 2,
      feedback: "no-store prohíbe almacenar la respuesta; obligatorio para tokens y datos sensibles.",
    },
    {
      question: "En el patrón cache-aside, ¿qué ocurre en un Cache MISS?",
      options: [
        "Se devuelve error 404 al cliente",
        "Se consulta la fuente original, se guarda en caché y se devuelve el dato",
        "Se espera a que expire el TTL",
        "Se borra toda la base de datos",
      ],
      correctIndex: 1,
      feedback:
        "En MISS se obtiene el dato de BD (o API externa), se escribe en Redis con TTL y luego se responde.",
    },
    {
      question: "¿Qué tecnología es el estándar de facto para caché en servidor en producción?",
      options: ["SQLite", "Redis", "FTP", "localStorage del navegador"],
      correctIndex: 1,
      feedback:
        "Redis es un almacén en memoria extremadamente rápido (< 1 ms) con estructuras de datos ricas.",
    },
    {
      question: "Assets estáticos con hash en el nombre (app.a3f9b2.js) deberían usar:",
      options: [
        "Cache-Control: no-store",
        "Cache-Control: max-age=31536000, public, immutable",
        "Sin headers de caché",
        "Cache-Control: private solo para CDN",
      ],
      correctIndex: 1,
      feedback:
        "El hash en el nombre cambia cuando cambia el contenido; immutable permite caché larga sin riesgo de versión vieja.",
    },
  ],
  typescript: [
    {
      question: "¿Qué relación tiene TypeScript con JavaScript?",
      options: [
        "Es un lenguaje incompatible que reemplaza JavaScript",
        "Es un superset: todo JS válido es TS válido",
        "Solo funciona en el navegador",
        "No necesita compilación",
      ],
      correctIndex: 1,
      feedback: "TypeScript extiende JavaScript con tipos; se compila a JS con tsc.",
    },
    {
      question: '¿Cuándo se detecta calcularTotal("4500", 3) si la firma exige number?',
      options: [
        "Solo en producción",
        "En compilación o en el editor, antes de ejecutar",
        "Nunca, TypeScript valida en runtime",
        "Solo si usas any",
      ],
      correctIndex: 1,
      feedback: "El compilador rechaza argumentos incompatibles en tiempo de desarrollo.",
    },
    {
      question: "¿Cuál es más seguro que any para datos de origen desconocido?",
      options: ["never", "unknown con narrowing", "void", "object sin más comprobación"],
      correctIndex: 1,
      feedback: "unknown obliga a verificar el tipo antes de usar el valor.",
    },
    {
      question: "Regla práctica: ¿cuándo preferir type sobre interface?",
      options: [
        "Siempre para clases",
        "Para uniones e intersecciones complejas",
        "Solo en archivos .js",
        "Nunca, interface reemplaza a type",
      ],
      correctIndex: 1,
      feedback: "interface para forma de objetos; type para uniones como Producto | Error.",
    },
    {
      question: '¿Qué hace "strict": true en tsconfig.json?',
      options: [
        "Desactiva todos los tipos",
        "Activa verificaciones estrictas (null checks, no implicit any, etc.)",
        "Compila a ES5 obligatoriamente",
        "Impide usar genéricos",
      ],
      correctIndex: 1,
      feedback: "strict agrupa opciones que evitan errores silenciosos de tipado.",
    },
  ],
  angular: [
    {
      question: "¿De qué tres partes se compone típicamente un componente Angular?",
      options: [
        "Solo JavaScript y CSS",
        "Clase TypeScript, plantilla HTML y estilos opcionales",
        "SQL, HTML y PHP",
        "Solo template sin lógica",
      ],
      correctIndex: 1,
      feedback: "El componente encapsula lógica (clase), vista (template) y estilos.",
    },
    {
      question: "¿Qué hook usarías para cargar datos de una API al iniciar el componente?",
      options: [
        "ngOnDestroy",
        "ngOnInit",
        "ngAfterViewChecked",
        "constructor únicamente, sin hooks",
      ],
      correctIndex: 1,
      feedback:
        "ngOnInit corre una vez tras el primer ngOnChanges; ideal para llamadas HTTP iniciales.",
    },
    {
      question: "¿Qué directiva muestra u oculta elementos en el DOM?",
      options: ["ngClass", "*ngIf", "ngModel", "currency"],
      correctIndex: 1,
      feedback: "*ngIf es directiva estructural; agrega o quita nodos del DOM.",
    },
    {
      question: "¿Qué sintaxis es two-way binding?",
      options: [
        "{{ nombre }}",
        '[src]="url"',
        '[(ngModel)]="busqueda"',
        '(click)="guardar()"',
      ],
      correctIndex: 2,
      feedback: "[(ngModel)] sincroniza modelo y vista en ambas direcciones.",
    },
    {
      question: "¿Para qué sirve @Injectable({ providedIn: 'root' })?",
      options: [
        "Declara un pipe",
        "Registra un servicio singleton disponible en toda la app",
        "Define una directiva estructural",
        "Compila TypeScript a JavaScript",
      ],
      correctIndex: 1,
      feedback: "providedIn: 'root' crea una instancia única del servicio a nivel aplicación.",
    },
  ],
  "rest-principios": [
    {
      question: "¿Qué es REST según Roy Fielding?",
      options: [
        "Un protocolo de red alternativo a HTTP",
        "Un estilo arquitectónico con seis constraints",
        "Un formato de datos como JSON",
        "Una librería de JavaScript",
      ],
      correctIndex: 1,
      feedback:
        "REST es un estilo arquitectónico definido en la tesis de Fielding (2000), no un protocolo.",
    },
    {
      question: "¿Cuál constraint exige que cada request sea autosuficiente sin sesión en el servidor?",
      options: ["Client-Server", "Cacheable", "Stateless", "Code on Demand"],
      correctIndex: 2,
      feedback: "Stateless significa que el servidor no almacena contexto de sesión entre peticiones.",
    },
    {
      question: "¿Qué sub-constraint de Uniform Interface incluye _links en las respuestas JSON?",
      options: [
        "Identificación de recursos",
        "Manipulación mediante representaciones",
        "HATEOAS",
        "Mensajes autodescriptivos",
      ],
      correctIndex: 2,
      feedback:
        "HATEOAS (Hypermedia As The Engine Of Application State) guía al cliente con links a acciones posibles.",
    },
    {
      question: "En el modelo de Richardson, ¿en qué nivel está la mayoría de APIs REST del mundo real?",
      options: [
        "Nivel 0 — un URI y POST para todo",
        "Nivel 1 — solo múltiples URIs",
        "Nivel 2 — verbos HTTP y códigos de estado",
        "Nivel 3 — HATEOAS completo",
      ],
      correctIndex: 2,
      feedback: "La mayoría usa recursos y verbos HTTP correctamente pero omite HATEOAS (nivel 3).",
    },
    {
      question: "¿Cuál es el único constraint REST opcional?",
      options: ["Stateless", "Layered System", "Uniform Interface", "Code on Demand"],
      correctIndex: 3,
      feedback:
        "Code on Demand permite enviar código ejecutable al cliente; es el único constraint opcional.",
    },
  ],
  "herramientas-desarrollo": [
    {
      question: '¿Qué significa la "M" en XAMPP?',
      options: [
        "MongoDB",
        "MariaDB (MySQL)",
        "Memcached",
        "Microsoft SQL Server",
      ],
      correctIndex: 1,
      feedback: "XAMPP incluye MariaDB como motor relacional local.",
    },
    {
      question: "¿Dónde debe ir index.php para que Apache lo sirva por defecto?",
      options: [
        "/opt/lampp/mysql/data/",
        "/opt/lampp/htdocs/ (document root)",
        "/etc/httpd/ssl/",
        "Carpeta home del usuario",
      ],
      correctIndex: 1,
      feedback: "htdocs es el document root de Apache en XAMPP.",
    },
    {
      question: "¿Qué es una imagen Docker?",
      options: [
        "Un contenedor en ejecución",
        "Una plantilla de solo lectura para crear contenedores",
        "Una máquina virtual con su propio kernel",
        "Un archivo .php dinámico",
      ],
      correctIndex: 1,
      feedback: "La imagen es la plantilla; el contenedor es la instancia en ejecución.",
    },
    {
      question: "¿Qué hace -p 3000:80 en docker run?",
      options: [
        "Limita la RAM a 3000 MB",
        "Mapea puerto 80 del contenedor al 3000 del host",
        "Expone solo HTTPS",
        "Elimina el contenedor al cabo de 3000 s",
      ],
      correctIndex: 1,
      feedback: "Formato host:contenedor; accedes vía localhost:3000.",
    },
    {
      question: "¿Cuándo es más adecuado Docker que XAMPP?",
      options: [
        "Proyecto PHP académico de una sola persona sin DevOps",
        "Equipo que necesita entorno idéntico en dev, CI y producción",
        "Instalación rápida sin aprender terminal",
        "Solo editar WordPress local sin contenedores",
      ],
      correctIndex: 1,
      feedback:
        "Docker prioriza reproducibilidad y portabilidad; XAMPP prioriza simplicidad inicial en PHP.",
    },
  ],
  "modelo-cliente-servidor": [
    {
      question: "¿Qué rol cumple el cliente en el modelo cliente-servidor?",
      options: [
        "Almacena todos los datos de la aplicación",
        "Solicita servicios o recursos al servidor",
        "Solo ejecuta bases de datos",
        "Reemplaza al protocolo HTTP",
      ],
      correctIndex: 1,
      feedback: "El cliente inicia peticiones; el servidor procesa y responde.",
    },
    {
      question: "¿Qué ocurre primero al escribir https://ejemplo.com en el navegador?",
      options: [
        "El servidor ejecuta SQL",
        "Resolución DNS del dominio a IP",
        "Renderizado del HTML",
        "COMMIT de transacción",
      ],
      correctIndex: 1,
      feedback: "Sin IP (vía DNS) no se establece la conexión TCP al servidor.",
    },
    {
      question: "Ventaja principal de la arquitectura 3 capas frente a 2 capas con acceso directo a BD:",
      options: [
        "El cliente tiene credenciales de la base de datos",
        "La capa de datos no queda expuesta directamente al cliente",
        "Elimina la necesidad de un servidor",
        "Solo permite aplicaciones de escritorio",
      ],
      correctIndex: 1,
      feedback: "La API intermedia protege la BD y centraliza la lógica de negocio.",
    },
    {
      question: "¿Cuál es un ejemplo de modelo peer-to-peer (P2P)?",
      options: [
        "Navegador → Apache → MySQL",
        "BitTorrent sin servidor central de archivos",
        "React → REST API → PostgreSQL",
        "AWS Lambda invocada por API Gateway",
      ],
      correctIndex: 1,
      feedback:
        "En P2P los nodos intercambian recursos entre sí sin un servidor central de contenido.",
    },
    {
      question: "En serverless (ej. AWS Lambda), ¿qué gestiona principalmente el proveedor cloud?",
      options: [
        "El código fuente en el repositorio Git del desarrollador",
        "La infraestructura de ejecución y escalado de funciones",
        "El diseño de la interfaz React",
        "La resolución DNS del dominio del usuario final",
      ],
      correctIndex: 1,
      feedback:
        "El desarrollador sube funciones; la nube ejecuta y escala sin administrar servidores dedicados.",
    },
  ],
  "bases-de-datos": [
    {
      question: "¿A qué familia SQL pertenece CREATE TABLE?",
      options: ["DML", "DDL", "DCL", "TCL"],
      correctIndex: 1,
      feedback: "DDL define y modifica la estructura del esquema.",
    },
    {
      question: "¿Qué garantiza la Atomicidad (A de ACID)?",
      options: [
        "Que las consultas usen índices",
        "Que todas las operaciones de la transacción ocurren o ninguna",
        "Que los datos estén cifrados",
        "Que solo haya una tabla",
      ],
      correctIndex: 1,
      feedback: "O se confirma todo con COMMIT o se revierte con ROLLBACK.",
    },
    {
      question: "¿Qué establece una Foreign Key?",
      options: [
        "Que la columna sea única en toda la BD",
        "Relación e integridad referencial con la PK de otra tabla",
        "Que la tabla no pueda borrarse",
        "Permiso de lectura al usuario",
      ],
      correctIndex: 1,
      feedback: "La FK apunta a una PK válida en la tabla relacionada.",
    },
    {
      question: "¿Cuándo suele preferirse NoSQL sobre SQL relacional?",
      options: [
        "Facturación con transacciones estrictas",
        "Esquema muy variable y escala horizontal masiva",
        "Reportes con muchos JOINs normalizados",
        "Siempre; SQL está obsoleto",
      ],
      correctIndex: 1,
      feedback: "NoSQL brilla en flexibilidad y escala; SQL en relaciones y ACID.",
    },
    {
      question: "¿Qué tipo de base es más adecuada para AVG(precio) sobre millones de filas analíticas?",
      options: [
        "Row-based OLTP (PostgreSQL transaccional)",
        "Columnar OLAP (BigQuery, ClickHouse)",
        "Solo archivos JSON en disco",
        "Base de grafos Neo4j",
      ],
      correctIndex: 1,
      feedback:
        "Las columnares leen solo las columnas necesarias; ideales para agregaciones masivas.",
    },
  ],
  "principios-solid": [
    {
      question: "¿Qué establece el principio de Responsabilidad Única (SRP)?",
      options: [
        "Una clase por archivo",
        "Una clase, una razón para cambiar",
        "Una función por endpoint",
        "Un solo desarrollador por módulo",
      ],
      correctIndex: 1,
      feedback: "SRP mide cohesión por motivo de cambio, no por cantidad de archivos.",
    },
    {
      question: "¿Cuál es la forma correcta de añadir un nuevo método de pago según OCP?",
      options: [
        "Agregar otro else if en ProcesadorPago",
        "Crear una clase que implemente MetodoPago",
        "Duplicar ProcesadorPago completo",
        "Cambiar la firma de procesar() en producción",
      ],
      correctIndex: 1,
      feedback: "OCP extiende con nuevas implementaciones sin modificar el procesador existente.",
    },
    {
      question: "¿Qué viola LSP en el ejemplo del pato de goma?",
      options: [
        "El pato real no grazna",
        "La subclase lanza error en volar() heredado",
        "No hay interface",
        "Usar TypeScript en lugar de Java",
      ],
      correctIndex: 1,
      feedback: "Un subtipo no puede romper el contrato que el cliente espera del padre.",
    },
    {
      question: "¿Qué problema resuelve ISP?",
      options: [
        "Interfaces demasiado grandes que obligan métodos inútiles",
        "Falta de herencia múltiple",
        "Lentitud de la base de datos",
        "Versionado de APIs REST",
      ],
      correctIndex: 0,
      feedback: "ISP divide interfaces para que cada cliente dependa solo de lo que usa.",
    },
    {
      question: "¿Cómo se aplica DIP en ProductoService?",
      options: [
        "new MySQLProductoRepository() dentro del servicio",
        "Depender de IProductoRepository inyectada por constructor",
        "Importar SQL directo en el controlador",
        "Eliminar todas las interfaces",
      ],
      correctIndex: 1,
      feedback: "Alto nivel depende de abstracción; la concreción se elige al componer la app.",
    },
  ],
  "naming-conventions": [
    {
      question: "¿Qué convención usa JavaScript para nombres de funciones?",
      options: ["snake_case", "camelCase", "kebab-case", "PascalCase"],
      correctIndex: 1,
      feedback: "Funciones y variables en JS/TS usan camelCase: calcularTotal.",
    },
    {
      question: "¿Cómo debe llamarse un componente React?",
      options: ["tarjeta-producto", "tarjeta_producto", "TarjetaProducto", "TARJETA_PRODUCTO"],
      correctIndex: 2,
      feedback: "Componentes React usan PascalCase por convención y por el JSX.",
    },
    {
      question: "¿Qué convención es estándar para columnas SQL?",
      options: ["camelCase", "PascalCase", "snake_case", "kebab-case"],
      correctIndex: 2,
      feedback: "precio_unitario es la convención más extendida en SQL.",
    },
    {
      question: "¿Cuál es el estilo correcto para una URL de API?",
      options: [
        "/api/ObtenerUsuarios",
        "/api/obtener_usuarios",
        "/api/obtener-usuarios",
        "/api/OBTENER_USUARIOS",
      ],
      correctIndex: 2,
      feedback: "URLs usan kebab-case minúsculas; sustantivos plurales en REST.",
    },
    {
      question: "¿Cómo nombrar una constante global de máximo de reintentos?",
      options: ["maxReintentos", "Max_Reintentos", "MAX_REINTENTOS", "max-reintentos"],
      correctIndex: 2,
      feedback: "Constantes inmutables globales usan UPPER_SNAKE_CASE.",
    },
  ],
  react: [
    {
      question: "¿React es un framework o una librería?",
      options: [
        "Framework completo con routing y HTTP integrados",
        "Librería enfocada en construir interfaces con componentes",
        "Lenguaje de programación independiente",
        "Base de datos para el frontend",
      ],
      correctIndex: 1,
      feedback: "React cubre la capa de UI; routing y estado global suelen añadirse aparte.",
    },
    {
      question: "¿Qué atributo JSX reemplaza a class de HTML?",
      options: ["class", "className", "cssClass", "styleName"],
      correctIndex: 1,
      feedback: "En JSX se usa className porque class es palabra reservada en JavaScript.",
    },
    {
      question: "¿Las props en un componente hijo pueden modificarse dentro del hijo?",
      options: [
        "Sí, con useState inicializado desde props",
        "No, son de solo lectura; el padre es quien las actualiza",
        "Solo en componentes de clase",
        "Sí, mutando el objeto props directamente",
      ],
      correctIndex: 1,
      feedback: "Las props fluyen del padre; mutar props rompe el modelo unidireccional.",
    },
    {
      question: "¿Cuándo se re-ejecuta un useEffect(() => {...}, [id])?",
      options: [
        "En cada render del árbol completo de la app",
        "Solo al montar, nunca más",
        "Al montar y cuando id cambia",
        "Solo al desmontar",
      ],
      correctIndex: 2,
      feedback: "El array de dependencias controla cuándo el efecto se vuelve a ejecutar.",
    },
    {
      question: "¿Por qué es importante la prop key en productos.map()?",
      options: [
        "Para estilos CSS automáticos",
        "Para que React identifique elementos en listas dinámicas",
        "Para encriptar datos",
        "Es opcional y no afecta el comportamiento",
      ],
      correctIndex: 1,
      feedback: "key estable (ID) ayuda a la reconciliación correcta del Virtual DOM.",
    },
  ],
  "ia-en-desarrollo-web": [
    {
      question: "¿Qué es una alucinación de IA en desarrollo?",
      options: [
        "Error de sintaxis TypeScript",
        "Código plausible con APIs o librerías que no existen",
        "Timeout de red",
        "Fallo de ESLint",
      ],
      correctIndex: 1,
      feedback:
        "La IA puede inventar paquetes y métodos; siempre verificar en docs y registros oficiales.",
    },
    {
      question: "¿Cuál es el primer paso después de recibir código generado?",
      options: [
        "Merge inmediato a main",
        "Leerlo y entenderlo línea por línea",
        "Publicar en npm",
        "Eliminar tests existentes",
      ],
      correctIndex: 1,
      feedback: "Si no puedes explicarlo, no debes integrarlo.",
    },
    {
      question: "¿Qué NO debe incluirse en un prompt a IA pública?",
      options: [
        "Framework usado",
        "Convenciones de naming",
        "API keys y datos reales de usuarios",
        "Restricción sin any",
      ],
      correctIndex: 2,
      feedback: "Secrets y PII violan compliance y seguridad.",
    },
    {
      question: "¿Para qué sirve CLAUDE.md en un proyecto?",
      options: [
        "Reemplazar Git",
        "Dar contexto, stack y reglas al agente de IA",
        "Compilar TypeScript",
        "Almacenar node_modules",
      ],
      correctIndex: 1,
      feedback:
        "Documenta convenciones y límites para que el agente actúe alineado al equipo.",
    },
    {
      question: "¿Qué hace un prompt efectivo frente a uno vago?",
      options: [
        "Es más corto",
        "Incluye contexto, restricciones y criterios de calidad",
        "Solo dice hazlo en React",
        "Evita mencionar el lenguaje",
      ],
      correctIndex: 1,
      feedback: "Contexto específico reduce código genérico e inútil.",
    },
  ],
  "arquitectura-api": [
    {
      question: "¿Qué capa contiene la lógica de negocio en una API REST típica?",
      options: [
        "API Gateway",
        "Controlador",
        "Servicio",
        "Middleware de logging",
      ],
      correctIndex: 2,
      feedback: "El servicio concentra reglas de negocio; el controlador solo adapta HTTP.",
    },
    {
      question: "¿Qué documento define el contrato en SOAP?",
      options: ["OpenAPI", "WSDL", "package.json", "README.md"],
      correctIndex: 1,
      feedback: "WSDL describe operaciones, tipos XSD y endpoint en XML.",
    },
    {
      question: "¿Qué problema resuelve DataLoader en GraphQL?",
      options: [
        "Autenticación JWT",
        "Consultas N+1 por resolvers",
        "Versionado de REST",
        "Compresión gzip",
      ],
      correctIndex: 1,
      feedback: "Agrupa y deduplica cargas de datos relacionados en batch.",
    },
    {
      question: "¿Qué transporte y formato usa gRPC por defecto?",
      options: [
        "HTTP/1.1 + JSON",
        "HTTP/2 + Protobuf binario",
        "WebSockets + XML",
        "FTP + CSV",
      ],
      correctIndex: 1,
      feedback: "gRPC usa HTTP/2 y serialización Protobuf para bajo overhead.",
    },
    {
      question: "¿Qué patrón migra un monolito gradualmente a microservicios?",
      options: ["Singleton", "Strangler Fig", "Factory Method", "Observer"],
      correctIndex: 1,
      feedback:
        "Strangler enruta tráfico nuevo al microservicio mientras el legacy sigue activo.",
    },
  ],
};
