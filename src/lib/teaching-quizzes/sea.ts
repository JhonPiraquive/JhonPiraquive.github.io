import type { QuizQuestion } from "@/components/teaching/Quiz";

export const SEA_QUIZZES: Record<string, QuizQuestion[]> = {
  "clase-01-fundamentos-seguridad": [
    { question: "¿Cuál es una señal típica de app sin seguridad por diseño?", options: ["Errores genéricos al usuario", "Credenciales en el repositorio", "Revisiones antes de producción"], correctIndex: 1, feedback: "Las credenciales en código son una señal clara." },
    { question: "La industrialización del ataque se caracteriza por:", options: ["Ataques manuales aislados", "Automatización y escala", "Redes desconectadas"], correctIndex: 1, feedback: "Los ataques modernos se automatizan a escala." },
    { question: "¿Por qué la seguridad es un proceso?", options: ["Porque hay un checklist único", "Porque amenazas y sistemas cambian continuamente", "Porque no requiere mantenimiento"], correctIndex: 1, feedback: "Nuevas amenazas exigen mejora continua." },
    { question: "¿Qué es phishing?", options: ["Cifrado de datos", "Suplantación para robar credenciales", "Escaneo de puertos"], correctIndex: 1, feedback: "Phishing engaña al usuario para obtener datos." },
    { question: "MFA reduce el riesgo de:", options: ["Robo de credenciales únicas", "Ataques físicos al servidor", "Cortes de energía"], correctIndex: 0, feedback: "MFA añade capa si roban la contraseña." },
    { question: "Canal seguro para compartir contraseñas:", options: ["Email sin cifrar", "Gestor de contraseñas", "Chat público"], correctIndex: 1, feedback: "Los gestores cifran y comparten de forma segura." },
    { question: "Disponibilidad = sistema accesible cuando se necesita", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "A garantiza acceso oportuno." },
    { question: "Autenticidad verifica:", options: ["Velocidad del servidor", "Origen real de datos/comunicación", "Tamaño de la base de datos"], correctIndex: 1, feedback: "Autenticidad confirma quién envió qué." },
    { question: "Filtrar contraseñas viola principalmente:", options: ["Disponibilidad", "Confidencialidad", "Integridad"], correctIndex: 1, feedback: "Datos secretos expuestos = confidencialidad." },
    { question: "Verificar remitente ayuda a detectar phishing", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Revisar dominio y encabezados es clave." },
    { question: "Reportar phishing internamente:", options: ["No es necesario", "Ayuda a proteger a otros", "Solo para IT senior"], correctIndex: 1, feedback: "Reportar activa defensas organizacionales." },
    { question: "Spear phishing es:", options: ["Ataque masivo genérico", "Ataque dirigido a víctima específica", "Malware en USB"], correctIndex: 1, feedback: "Spear = personalizado a un objetivo." },
  ],
  "clase-02-criptografia-comunicacion-segura": [
    { question: "Datos en Base64 son legibles si se decodifican", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Cualquiera puede decodificar Base64." },
    { question: "Usar Base64 para ocultar contraseñas es:", options: ["Seguro", "Inseguro", "Recomendado"], correctIndex: 1, feedback: "No proporciona confidencialidad real." },
    { question: "Cifrado requiere:", options: ["Solo codificación", "Clave secreta y algoritmo", "Solo Base64"], correctIndex: 1, feedback: "Cifrado necesita clave y algoritmo." },
    { question: "Guardar contraseñas en texto plano es aceptable", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Deben hashearse con salt." },
    { question: "Salt en contraseñas sirve para:", options: ["Acelerar login", "Evitar tablas rainbow", "Cifrar disco"], correctIndex: 1, feedback: "Salt hace único cada hash." },
    { question: "Cifrado simétrico usa:", options: ["Par de claves pública/privada", "Una misma clave", "Solo hash"], correctIndex: 1, feedback: "AES y similares usan clave compartida." },
    { question: "Un certificado inválido en el navegador puede indicar MITM", options: ["Verdadero", "Falso"], correctIndex: 0, feedback: "Alertas de certificado son señal de riesgo." },
    { question: "HTTPS protege datos en reposo en el servidor", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "HTTPS solo protege en tránsito." },
    { question: "HSTS ayuda a:", options: ["Forzar conexiones HTTPS", "Cifrar disco duro", "Hashear contraseñas"], correctIndex: 0, feedback: "HSTS obliga HTTPS en el navegador." },
    { question: "Escapar input es suficiente sin parametrizar", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Parametrizar es más robusto que solo escapar." },
    { question: "SQLi puede permitir:", options: ["Solo leer datos", "Leer, modificar o borrar datos", "Solo ralentizar la app"], correctIndex: 1, feedback: "SQLi puede tener impacto crítico en BD." },
    { question: "Principio de mínimo privilegio en BD:", options: ["Usuario DB con todos los permisos", "Cuenta con solo permisos necesarios", "Sin autenticación en BD"], correctIndex: 1, feedback: "Limitar permisos reduce daño potencial." },
  ],
  "clase-03-defensa-aplicaciones-riesgo": [
    { question: "Guardar JWT en localStorage siempre es seguro", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "localStorage es vulnerable a XSS." },
    { question: "Flag Secure en cookies:", options: ["Solo envía por HTTPS", "Cifra el contenido", "Expira en 1 hora"], correctIndex: 0, feedback: "Secure limita envío a conexiones HTTPS." },
    { question: "Refresh token sirve para:", options: ["Renovar access token", "Hashear contraseñas", "Cifrar disco"], correctIndex: 0, feedback: "Permite obtener nuevo access sin re-login." },
    { question: "Config sensible debe estar en:", options: ["Repositorio público", "Variables de entorno", "Comentarios HTML"], correctIndex: 1, feedback: "Secrets fuera del código fuente." },
    { question: "Manejo de excepciones seguro:", options: ["Mensaje genérico al usuario", "Dump completo al usuario", "Sin logging"], correctIndex: 0, feedback: "Usuario ve mensaje genérico; detalle en logs internos." },
    { question: "Validar input del usuario es:", options: ["Opcional", "Fundamental", "Solo en frontend"], correctIndex: 1, feedback: "Validar siempre, también en servidor." },
    { question: "Un SGSI requiere solo tecnología", options: ["Verdadero", "Falso"], correctIndex: 1, feedback: "Incluye políticas, procesos y personas." },
    { question: "La certificación ISO 27001 demuestra:", options: ["Cero vulnerabilidades", "Sistema de gestión implementado", "Inmunidad a ataques"], correctIndex: 1, feedback: "Certifica el sistema de gestión, no perfección." },
    { question: "PDCA en seguridad significa:", options: ["Planificar, Hacer, Verificar, Actuar", "Proteger, Detectar, Corregir, Archivar", "Publicar, Descargar, Copiar, Autenticar"], correctIndex: 0, feedback: "Ciclo de mejora continua Plan-Do-Check-Act." },
    { question: "Matriz de riesgos ayuda a:", options: ["Priorizar controles", "Eliminar todo riesgo", "Evitar documentación"], correctIndex: 0, feedback: "Prioriza según probabilidad e impacto." },
    { question: "Riesgo residual es:", options: ["Riesgo antes de controles", "Riesgo que queda tras controles", "Riesgo cero"], correctIndex: 1, feedback: "Siempre queda algo de riesgo residual." },
    { question: "Documentar riesgos sirve para:", options: ["Justificar decisiones", "Ocultar problemas", "Evitar auditorías"], correctIndex: 0, feedback: "Evidencia para stakeholders y auditoría." },
  ],
};

export const INCIDENT_STEPS = [
  { title: "Detección", content: "Se identifican accesos anómalos o comportamiento sospechoso en logs o alertas." },
  { title: "Contención", content: "Se aísla el sistema afectado para evitar propagación del incidente." },
  { title: "Análisis", content: "Se investiga alcance, vector de ataque y datos comprometidos." },
  { title: "Recuperación", content: "Se restauran servicios con controles adicionales y se comunica a stakeholders." },
];
