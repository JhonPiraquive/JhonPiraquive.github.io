# Ingeniería social y phishing: señales, prevención y respuesta

## Objetivos de aprendizaje

- Identificar 7 señales de phishing en correos/mensajes.
- Explicar por qué la urgencia y autoridad funcionan psicológicamente.
- Definir un protocolo de verificación en 4 pasos para solicitudes sensibles.
- Describir cómo responder si crees que caíste (pasos inmediatos).
- Diseñar un mensaje de advertencia dentro de una app sin culpar al usuario.

## Prerrequisitos

Saber qué es un enlace, un dominio y un código de verificación.

## Qué es phishing

Phishing es suplantación con objetivo: el atacante se hace pasar por alguien confiable para que tú entregues credenciales, instales algo o apruebes una acción. El truco no es técnico; es emocional y de contexto.

## Señales (checklist rápido)

- Urgencia (“último aviso”, “tu cuenta será cerrada”).
- Autoridad (“soporte”, “banco”, “jefe”).
- Enlace raro o acortado sin contexto.
- Errores leves de escritura o tono inusual.
- Solicitud de secretos (códigos, contraseñas, tokens).
- Incentivo demasiado bueno (premio, reembolso).
- Adjuntos inesperados.
- Presión para saltarte el proceso (“no digas nada”, “hazlo ya”).

## Ejemplo real (historia)

Historia: “El correo del ‘equipo de TI’”. Llega un correo: “Detectamos actividad sospechosa. Para evitar bloqueo, valida tu identidad aquí”. El enlace abre una página idéntica al login. Al ingresar, aparece “error temporal” y la víctima intenta de nuevo. El atacante ya tiene la contraseña y, si no hay segundo factor, entra en minutos.

## Ejemplo técnico (mensajería dentro de una app)

Las aplicaciones también deben ayudar: avisos claros cuando una acción es sensible (cambiar correo, contraseña, 2FA, método de pago). La microcopia debe ser específica, sin pánico y sin culpar: “Si no fuiste tú, actúa ahora”.

```json
{
  "template": "password_changed",
  "title": "Cambio de contraseña",
  "body": "Tu contraseña fue cambiada. Si no fuiste tú, protege tu cuenta ahora.",
  "primary_action": "Revisar actividad",
  "secondary_action": "Restablecer acceso",
  "channel": "email",
  "severity": "high"
}
```

## Diagrama (Mermaid)

### Ruta del phishing

```mermaid
flowchart TD
  msg[Mensaje_suplantado] --> clic[Clic_en_enlace]
  clic --> captura[Captura_de_credenciales]
  captura --> acceso[Acceso_con_credenciales_reales]
  acceso --> acciones[Acciones_sensibles_(cambiar_correo_2FA)]
  acciones --> persist[Persistencia]

  msg -->|"Corte: verificacion"| verif[Verificar_por_canal_oficial]
  captura -->|"Corte: 2FA"| twoFA[Segundo_factor]
  acceso -->|"Corte: alertas"| alertas[Alertas_y_bloqueo_por_riesgo]
```

## Reto interactivo (sin código)

Reescribe este mensaje para hacerlo seguro: “Necesitamos tu contraseña para validar tu cuenta”. Tu respuesta debe incluir: verificación por canal oficial y aclaración de que nadie pedirá contraseñas.

## Mini-quiz (5 preguntas)

1. V/F: Phishing siempre requiere malware.
2. V/F: Una señal de phishing es pedir códigos de verificación.
3. La mejor respuesta ante urgencia sospechosa es:
4. Una microcopia adecuada para acción sensible debe:
5. Escribe 2 señales de phishing en una frase.

- A) Responder rápido
- B) Verificar por canal alterno
- C) Compartir el código

- A) Culpar al usuario
- B) Ser clara y accionable
- C) Ser vaga para no asustar

Respuestas: (1) F, (2) V, (3) B, (4) B, (5) Respuesta esperada: menciona dos señales reales (urgencia, enlaces raros, solicitud de secretos, etc.).
