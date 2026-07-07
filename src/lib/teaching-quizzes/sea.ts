import type { QuizQuestion } from "@/components/teaching/Quiz";

export const SEA_QUIZZES: Record<string, QuizQuestion[]> = {
  "historia-redes-y-seguridad": [
    { question: "La seguridad es un estado final sin vulnerabilidades", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "La seguridad es un proceso continuo, no un estado final." },
    { question: "Al aumentar usuarios y conexiones, aumenta la superficie de ataque", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Más conexiones = más vectores de ataque." },
    { question: "¿Cuál es una señal típica de app sin seguridad por diseño?", options: ["Errores genéricos al usuario", "Credenciales en el repositorio", "Revisiones antes de producción"], correctIndex: 1, feedback: "Las credenciales en código son una señal clara." },
    { question: "La industrialización del ataque se caracteriza por:", options: ["Ataques manuales aislados", "Automatización y escala", "Redes desconectadas"], correctIndex: 1, feedback: "Los ataques modernos se automatizan a escala." },
    { question: "¿Por qué la seguridad es un proceso?", options: ["Porque hay un checklist único", "Porque amenazas y sistemas cambian continuamente", "Porque no requiere mantenimiento"], correctIndex: 1, feedback: "Nuevas amenazas exigen mejora continua." },
  ],
  "hackers-canales-y-proteccion": [
    { question: "Todo hacker actúa con intención criminal", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Existen hackers éticos y investigadores." },
    { question: "El factor humano es un vector común de ataque", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Ingeniería social explota al usuario." },
    { question: "¿Qué es phishing?", options: ["Cifrado de datos", "Suplantación para robar credenciales", "Escaneo de puertos"], correctIndex: 1, feedback: "Phishing engaña al usuario para obtener datos." },
    { question: "MFA reduce el riesgo de:", options: ["Robo de credenciales únicas", "Ataques físicos al servidor", "Cortes de energía"], correctIndex: 0, feedback: "MFA añade capa si roban la contraseña." },
    { question: "Canal seguro para compartir contraseñas:", options: ["Email sin cifrar", "Gestor de contraseñas", "Chat público"], correctIndex: 1, feedback: "Los gestores cifran y comparten de forma segura." },
  ],
  "iso-y-normas-27001-27002": [
    { question: "ISO 27001 define requisitos para un SGSI", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "27001 es certificable; define el SGSI." },
    { question: "ISO 27002 es un catálogo de controles", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "27002 lista controles de seguridad." },
    { question: "Un SGSI requiere solo tecnología", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Incluye políticas, procesos y personas." },
    { question: "La certificación ISO 27001 demuestra:", options: ["Cero vulnerabilidades", "Sistema de gestión implementado", "Inmunidad a ataques"], correctIndex: 1, feedback: "Certifica el sistema de gestión, no perfección." },
    { question: "PDCA en seguridad significa:", options: ["Planificar, Hacer, Verificar, Actuar", "Proteger, Detectar, Corregir, Archivar", "Publicar, Descargar, Copiar, Autenticar"], correctIndex: 0, feedback: "Ciclo de mejora continua Plan-Do-Check-Act." },
  ],
  "principios-cia-y-autenticidad": [
    { question: "Confidencialidad = solo personas autorizadas acceden", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "C limita acceso a autorizados." },
    { question: "Integridad = datos no alterados sin autorización", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "I protege contra modificación no autorizada." },
    { question: "Disponibilidad = sistema accesible cuando se necesita", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "A garantiza acceso oportuno." },
    { question: "Autenticidad verifica:", options: ["Velocidad del servidor", "Origen real de datos/comunicación", "Tamaño de la base de datos"], correctIndex: 1, feedback: "Autenticidad confirma quién envió qué." },
    { question: "Filtrar contraseñas viola principalmente:", options: ["Disponibilidad", "Confidencialidad", "Integridad"], correctIndex: 1, feedback: "Datos secretos expuestos = confidencialidad." },
  ],
  "ingenieria-social-y-phishing": [
    { question: "La ingeniería social explota debilidades humanas", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Manipula personas, no solo sistemas." },
    { question: "Un email urgente pidiendo credenciales es señal de phishing", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Urgencia + credenciales = patrón típico." },
    { question: "Verificar remitente ayuda a detectar phishing", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Revisar dominio y encabezados es clave." },
    { question: "Reportar phishing internamente:", options: ["No es necesario", "Ayuda a proteger a otros", "Solo para IT senior"], correctIndex: 1, feedback: "Reportar activa defensas organizacionales." },
    { question: "Spear phishing es:", options: ["Ataque masivo genérico", "Ataque dirigido a víctima específica", "Malware en USB"], correctIndex: 1, feedback: "Spear = personalizado a un objetivo." },
  ],
  "https-y-mitm": [
    { question: "HTTPS cifra datos en tránsito", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "TLS protege comunicación cliente-servidor." },
    { question: "MITM intercepta comunicación entre dos partes", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "El atacante se sitúa en medio del canal." },
    { question: "Un certificado inválido en el navegador puede indicar MITM", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Alertas de certificado son señal de riesgo." },
    { question: "HTTPS protege datos en reposo en el servidor", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "HTTPS solo protege en tránsito." },
    { question: "HSTS ayuda a:", options: ["Forzar conexiones HTTPS", "Cifrar disco duro", "Hashear contraseñas"], correctIndex: 0, feedback: "HSTS obliga HTTPS en el navegador." },
  ],
  "ataques-web-sqli-y-mitigacion": [
    { question: "SQL Injection inserta código SQL malicioso", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "SQLi manipula consultas de base de datos." },
    { question: "Consultas parametrizadas mitigan SQLi", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Prepared statements separan datos de código." },
    { question: "Escapar input es suficiente sin parametrizar", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Parametrizar es más robusto que solo escapar." },
    { question: "SQLi puede permitir:", options: ["Solo leer datos", "Leer, modificar o borrar datos", "Solo ralentizar la app"], correctIndex: 1, feedback: "SQLi puede tener impacto crítico en BD." },
    { question: "Principio de mínimo privilegio en BD:", options: ["Usuario DB con todos los permisos", "Cuenta con solo permisos necesarios", "Sin autenticación en BD"], correctIndex: 1, feedback: "Limitar permisos reduce daño potencial." },
  ],
  "base64-y-diferencias-con-cifrado": [
    { question: "Base64 es cifrado seguro", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Base64 es codificación, no cifrado." },
    { question: "Base64 convierte binario a texto ASCII", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Es codificación para transporte de datos." },
    { question: "Datos en Base64 son legibles si se decodifican", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Cualquiera puede decodificar Base64." },
    { question: "Usar Base64 para ocultar contraseñas es:", options: ["Seguro", "Inseguro", "Recomendado"], correctIndex: 1, feedback: "No proporciona confidencialidad real." },
    { question: "Cifrado requiere:", options: ["Solo codificación", "Clave secreta y algoritmo", "Solo Base64"], correctIndex: 1, feedback: "Cifrado necesita clave y algoritmo." },
  ],
  "criptografia-hash-sha256-y-buenas-practicas": [
    { question: "Un hash es reversible con la función hash", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Los hashes son unidireccionales." },
    { question: "SHA-256 produce salida de longitud fija", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Siempre 256 bits de salida." },
    { question: "Guardar contraseñas en texto plano es aceptable", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Deben hashearse con salt." },
    { question: "Salt en contraseñas sirve para:", options: ["Acelerar login", "Evitar tablas rainbow", "Cifrar disco"], correctIndex: 1, feedback: "Salt hace único cada hash." },
    { question: "Cifrado simétrico usa:", options: ["Par de claves pública/privada", "Una misma clave", "Solo hash"], correctIndex: 1, feedback: "AES y similares usan clave compartida." },
  ],
  "proteccion-datos-cookies-y-jwt": [
    { question: "Cookie HttpOnly no es accesible desde JavaScript", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "HttpOnly mitiga robo vía XSS." },
    { question: "JWT contiene payload firmado", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "JWT = header.payload.signature." },
    { question: "Guardar JWT en localStorage siempre es seguro", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "localStorage es vulnerable a XSS." },
    { question: "Flag Secure en cookies:", options: ["Solo envía por HTTPS", "Cifra el contenido", "Expira en 1 hora"], correctIndex: 0, feedback: "Secure limita envío a conexiones HTTPS." },
    { question: "Refresh token sirve para:", options: ["Renovar access token", "Hashear contraseñas", "Cifrar disco"], correctIndex: 0, feedback: "Permite obtener nuevo access sin re-login." },
  ],
  "programacion-segura-excepciones-logs-y-config-json": [
    { question: "Mostrar stack trace al usuario es riesgo", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Filtra información interna al usuario." },
    { question: "Logs no deben contener contraseñas", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Datos sensibles en logs = fuga." },
    { question: "Config sensible debe estar en:", options: ["Repositorio público", "Variables de entorno", "Comentarios HTML"], correctIndex: 1, feedback: "Secrets fuera del código fuente." },
    { question: "Manejo de excepciones seguro:", options: ["Mensaje genérico al usuario", "Dump completo al usuario", "Sin logging"], correctIndex: 0, feedback: "Usuario ve mensaje genérico; detalle en logs internos." },
    { question: "Validar input del usuario es:", options: ["Opcional", "Fundamental", "Solo en frontend"], correctIndex: 1, feedback: "Validar siempre, también en servidor." },
  ],
  "matriz-de-riesgos": [
    { question: "Riesgo = probabilidad × impacto", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Fórmula clásica de evaluación." },
    { question: "Un riesgo alto siempre requiere mitigación inmediata", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Depende de apetito de riesgo y contexto." },
    { question: "Matriz de riesgos ayuda a:", options: ["Priorizar controles", "Eliminar todo riesgo", "Evitar documentación"], correctIndex: 0, feedback: "Prioriza según probabilidad e impacto." },
    { question: "Riesgo residual es:", options: ["Riesgo antes de controles", "Riesgo que queda tras controles", "Riesgo cero"], correctIndex: 1, feedback: "Siempre queda algo de riesgo residual." },
    { question: "Documentar riesgos sirve para:", options: ["Justificar decisiones", "Ocultar problemas", "Evitar auditorías"], correctIndex: 0, feedback: "Evidencia para stakeholders y auditoría." },
  ],
};

export const SEA_PRACTICE: Record<string, { prompt: string; hints: string[]; expectedKeywords: string[] }> = {
  "historia-redes-y-seguridad": {
    prompt: "¿Qué principio CIA se viola cuando se filtran datos de usuarios?",
    hints: ["Piensa en quién puede ver los datos", "Empieza con Confidencialidad"],
    expectedKeywords: ["confidencialidad"],
  },
  "ataques-web-sqli-y-mitigacion": {
    prompt: "¿Qué técnica mitiga SQL Injection separando datos de la consulta?",
    hints: ["Prepared statements", "Parametriz"],
    expectedKeywords: ["parametriz", "prepared"],
  },
  "proteccion-datos-cookies-y-jwt": {
    prompt: "¿Qué flag de cookie evita acceso desde JavaScript?",
    hints: ["Http...", "Protege contra XSS"],
    expectedKeywords: ["httponly"],
  },
};

export const DEFAULT_PRACTICE = {
  prompt: "Resume en una frase el concepto más importante de esta lección.",
  hints: ["Revisa los objetivos de aprendizaje", "Piensa en el ejemplo real"],
  expectedKeywords: ["seguridad"],
};

export const INCIDENT_STEPS = [
  { title: "Detección", content: "Se identifican accesos anómalos o comportamiento sospechoso en logs o alertas." },
  { title: "Contención", content: "Se aísla el sistema afectado para evitar propagación del incidente." },
  { title: "Análisis", content: "Se investiga alcance, vector de ataque y datos comprometidos." },
  { title: "Recuperación", content: "Se restauran servicios con controles adicionales y se comunica a stakeholders." },
];
