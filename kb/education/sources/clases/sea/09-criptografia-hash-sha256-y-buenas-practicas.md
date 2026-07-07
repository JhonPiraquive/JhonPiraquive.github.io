# Cifrado vs “encriptación”, funciones criptográficas y SHA‑256

## Objetivos de aprendizaje

- Diferenciar cifrado, descifrado, hash y firma (conceptualmente).
- Explicar por qué “encriptación” se usa comúnmente, pero el concepto correcto es “cifrado”.
- Seleccionar técnica adecuada para 4 casos: contraseña, mensaje, integridad, autenticidad.
- Describir qué es SHA‑256 y para qué sirve (y para qué no).
- Reconocer 4 malas prácticas: claves en código, algoritmos caseros, hashes rápidos para contraseñas, reutilización de secretos.
- Explicar qué propiedad aporta una función hash: integridad/huella.

## Prerrequisitos

Saber que existe una “clave” y que hay datos sensibles.

## Términos clave (sin matemáticas)

Cifrado: transforma datos para que solo quien tiene la clave pueda leerlos. Hash: produce una huella fija que cambia si el mensaje cambia. SHA‑256 es una función hash popular: útil para integridad, no para “ocultar” información ni para almacenar contraseñas directamente sin técnicas adicionales.

## Cifrado vs codificación vs hash (recordatorio)

Si necesitas recuperar el contenido, piensas en cifrado. Si solo necesitas transporte, piensas en codificación. Si necesitas detectar cambios, piensas en hash.

## Ejemplo real (historia)

Historia: “El algoritmo casero”. Un equipo decide “inventar” un método para ‘encriptar’ datos: invierte texto y cambia letras. Funciona “en pruebas”, pero un atacante lo rompe de inmediato porque no hay base criptográfica. En seguridad, lo “creativo” suele ser frágil. Usa estándares y bibliotecas confiables.

## Ejemplo técnico (qué debe demostrar)

El ejemplo debe mostrar: (1) una huella SHA‑256 de un archivo o texto, (2) cómo un cambio mínimo produce un hash totalmente distinto, y (3) un caso de uso: verificar integridad de descarga o detectar alteración de un payload. No debe presentarse SHA‑256 como forma de “cifrar”.

```bash
# Calcular SHA-256 (ejemplo conceptual)
printf "hola\n" > mensaje.txt
sha256sum mensaje.txt

# Cambio mínimo → hash diferente
printf "hola!\n" > mensaje.txt
sha256sum mensaje.txt
```

```json
{
  "manifest": [
    { "file": "app.tar.gz", "sha256": "EXPECTED_SHA256_HEX_HERE" }
  ]
}
```

## Diagrama (Mermaid)

### Propiedades: confidencialidad vs integridad

```mermaid
flowchart TD
  cif[Cifrado] --> conf["Objetivo: confidencialidad"]
  hash[Hash_(SHA-256)] --> integ["Objetivo: integridad"]
  auth[Autenticidad] --> firmas["Objetivo: origen/identidad"]

  conf --> ej1["Ej: datos_en_reposo/en_transito"]
  integ --> ej2["Ej: verificar_descargas/payloads"]
  firmas --> ej3["Ej: firma_digital/claims_firmadas"]
```

## Reto interactivo (sin código)

Elige la técnica correcta para cada caso y justifica en 1 línea: A) guardar contraseñas B) proteger datos en tránsito C) verificar que un archivo no cambió D) asegurar que una petición viene de un usuario autenticado.

## Mini-quiz (5 preguntas)

1. V/F: SHA‑256 se usa para cifrar datos y luego descifrarlos.
2. V/F: Un hash cambia si el mensaje cambia.
3. Si necesitas recuperar el texto original, usas:
4. SHA‑256 es una:
5. En 1 frase, di para qué sirve SHA‑256 en un proceso de integridad.

- A) Hash
- B) Cifrado
- C) Base64

- A) Función hash
- B) Cookie
- C) Norma ISO

Respuestas: (1) F, (2) V, (3) B, (4) A, (5) Respuesta esperada: comparar huellas para detectar alteración (integridad), no confidencialidad.
