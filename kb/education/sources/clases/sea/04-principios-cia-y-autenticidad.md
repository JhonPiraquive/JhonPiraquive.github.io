# Principios de seguridad: CIA + Autenticidad

## Objetivos de aprendizaje

- Definir confidencialidad, integridad, disponibilidad y autenticidad con ejemplos.
- Clasificar 8 incidentes simples según qué principio se rompió.
- Identificar 3 trade‑offs reales entre disponibilidad y seguridad.
- Explicar por qué autenticidad no es lo mismo que confidencialidad.
- Redactar una regla de diseño usando CIA+A para un endpoint de login.

## Prerrequisitos

Entender usuario/contraseña, sesión y errores comunes de aplicaciones.

## Qué es CIA + Autenticidad

CIA resume tres objetivos de seguridad: Confidencialidad (solo ve quien debe), Integridad (no se altera sin permiso) y Disponibilidad (está accesible cuando se necesita). A esto se suma Autenticidad: poder confiar en “quién es quién” y en que un mensaje/acción realmente proviene de quien dice ser.

## Ejemplos rápidos por principio

### Confidencialidad

Se rompe si alguien accede a datos que no le pertenecen: listas de clientes, correos, números de documento, tokens o secretos.

### Integridad

Se rompe si un dato cambia sin autorización: saldo, rol de usuario, precio de producto, estado de una orden.

### Disponibilidad

Se rompe si el sistema no está disponible o es muy lento: caídas, saturación, errores masivos o dependencia crítica caída.

### Autenticidad

Se rompe si no puedes confiar en el origen: suplantación de identidad, sesión robada, tokens falsificados, requests manipuladas o MITM que “parece” tu servidor.

## Ejemplo real (historia)

Historia: “El descuento infinito”. Una tienda online envía al cliente el precio final y el porcentaje de descuento en el request de compra. Un usuario descubre que puede modificar el descuento en el navegador y compra por $0. Aquí la disponibilidad está bien (la app funciona), pero la integridad está rota (la orden fue alterada) y la autenticidad es dudosa (el sistema confió en datos del cliente).

## Ejemplo técnico (regla de diseño)

Regla: el servidor debe calcular y validar todo lo que afecte dinero, permisos o identidad. El cliente solo “solicita”; el servidor “decide”. Además, los eventos críticos deben quedar registrados con un identificador de usuario confiable y contexto de seguridad.

```http
# Cliente intenta enviar descuento manipulable (ejemplo conceptual)
POST /api/checkout HTTP/1.1
Host: tienda.ejemplo
Content-Type: application/json

{"cart_id":"c_9","discount":90}

HTTP/1.1 400 Bad Request
Content-Type: application/json

{"error":"No fue posible procesar la solicitud."}
```

## Diagrama (Mermaid)

### CIA+A aplicado a una compra

```mermaid
flowchart TD
  U[Usuario] -->|Login| Auth[Autenticacion_(A)]
  Auth -->|Token_sesion| Req[Request_compra]
  Req -->|Autorizacion| Perm[Autorizacion_(A)]
  Perm -->|Validacion_calculo| Val[Validacion_(I)]
  Val -->|Procesar| Core[Logica_negocio]
  Core -->|Guardar| DB[(BD)]
  Core -->|Logging| Log[Logs_(A_I)]
  Core -->|Rate_limit| RL[Limites_(D)]
  DB -->|Respuesta| Res[Respuesta]
```

## Reto interactivo (sin código)

Clasifica estos 8 eventos (escribe la letra y el principio): A) fuga de correos B) cambio de rol a admin C) caída del servidor D) sesión robada E) precio alterado F) endpoint lento G) token falsificado H) lectura de historial de otro usuario.

## Mini-quiz (5 preguntas)

1. V/F: Integridad significa que los datos no cambian nunca.
2. V/F: Autenticidad se relaciona con poder verificar el origen/identidad.
3. Un ataque que altera precios afecta principalmente:
4. Si alguien ve datos de otro usuario, afecta:
5. Escribe una regla (1 frase) para proteger integridad en operaciones de pago.

- A) Disponibilidad
- B) Integridad
- C) Confidencialidad

- A) Confidencialidad
- B) Integridad
- C) Disponibilidad

Respuestas: (1) F, (2) V, (3) B, (4) A, (5) Respuesta esperada: el servidor valida/calcula y no confía en valores críticos del cliente.
