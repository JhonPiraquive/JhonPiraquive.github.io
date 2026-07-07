# Instrucciones para frontend-developer: formatos-datos.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/formatos-datos.html`

---

1. Crear archivo HTML5 en `clases/programacion-orientada-sitios-web/formatos-datos.html`. `<html lang="es">`. Título: "Formatos de Datos: XML y JSON | POSW".
2. Usar la misma paleta y tipografía que `servicios-web.html`: variables CSS `--bg`, `--surface`, `--accent` (`#00d4ff`), `--accent2` (`#7b5ea7`), `--text`, `--muted`. Google Fonts Poppins + Raleway. Bootstrap 5 CDN + Bootstrap Icons CDN.
3. Header fijo idéntico al de `servicios-web.html`. Logo "POSW", subtítulo "Programación Orientada a Sitios Web". Nav: "XML", "JSON", "Comparativa", "Casos de Uso".
4. Sección hero con badge "Tema 2", `<h1>` "Formatos de Datos", subtítulo "XML y JSON: cómo estructurar, intercambiar y validar información entre sistemas." Botón "Explorar" scroll a `#xml`.
5. Crear `<section id="xml">` padding 80px 0. Contiene:
   - `<h2>` "XML — eXtensible Markup Language" con borde izquierdo `--accent`.
   - Párrafo: "XML es un lenguaje de marcado diseñado para almacenar y transportar datos de forma legible tanto por humanos como por máquinas. Fue creado por el W3C en 1996 y se convirtió en el estándar dominante para el intercambio de datos antes de la popularización de JSON."
   - Subsección "Características" como lista con íconos `bi-check-circle-fill` color `--accent`:
     - Autodescriptivo: las etiquetas describen el significado de los datos.
     - Estrictamente jerárquico: los datos se organizan en un árbol de elementos.
     - Validable mediante DTD o XML Schema (XSD).
     - Soporta namespaces para evitar conflictos de nombres.
     - Verboso: más bytes que JSON para la misma información.
     - Ampliamente soportado en sistemas empresariales (SOAP, WSDL, configuración de servidores).
   - Bloque de código XML con sintaxis resaltada (highlight.js CDN) titulado "Ejemplo: Datos de un pedido en XML":
     ```xml
     <?xml version="1.0" encoding="UTF-8"?>
     <pedido id="1042">
       <cliente>
         <nombre>Ana García</nombre>
         <email>ana@ejemplo.com</email>
       </cliente>
       <items>
         <item>
           <producto>Laptop Pro 15</producto>
           <cantidad>1</cantidad>
           <precio moneda="COP">4500000</precio>
         </item>
         <item>
           <producto>Mouse inalámbrico</producto>
           <cantidad>2</cantidad>
           <precio moneda="COP">85000</precio>
         </item>
       </items>
       <total moneda="COP">4670000</total>
     </pedido>
     ```
   - Tarjeta `--surface` con borde `--accent2` explicando la estructura: "Un documento XML tiene: declaración (`<?xml?>`), un elemento raíz único, elementos anidados y atributos dentro de las etiquetas de apertura."
6. Crear `<section id="json">` padding 80px 0 con fondo alterno `--surface`. Contiene:
   - `<h2>` "JSON — JavaScript Object Notation".
   - Párrafo: "JSON es un formato de intercambio de datos ligero basado en la sintaxis de objetos de JavaScript. Fue formalizado por Douglas Crockford a principios de los 2000. Hoy es el formato predeterminado de la mayoría de las APIs REST modernas."
   - Lista de características con íconos `bi-check-circle-fill` color `--accent2`:
     - Sintaxis compacta: menos bytes que XML para los mismos datos.
     - Tipos de datos nativos: string, number, boolean, null, array, object.
     - Directamente parseable en JavaScript (`JSON.parse()`).
     - No soporta comentarios en la especificación estándar.
     - No soporta atributos ni namespaces (a diferencia de XML).
     - Esquema de validación opcional mediante JSON Schema.
   - Bloque de código JSON con highlight.js del mismo pedido que el ejemplo XML:
     ```json
     {
       "pedido": {
         "id": 1042,
         "cliente": {
           "nombre": "Ana García",
           "email": "ana@ejemplo.com"
         },
         "items": [
           {
             "producto": "Laptop Pro 15",
             "cantidad": 1,
             "precio": { "valor": 4500000, "moneda": "COP" }
           },
           {
             "producto": "Mouse inalámbrico",
             "cantidad": 2,
             "precio": { "valor": 85000, "moneda": "COP" }
           }
         ],
         "total": { "valor": 4670000, "moneda": "COP" }
       }
     }
     ```
   - Contador animado de bytes debajo de los dos bloques: "XML: ~520 bytes | JSON: ~320 bytes — JSON es ~38% más compacto en este ejemplo." Usar fuente monospace, color `--accent`.
7. Crear `<section id="comparativa">` padding 80px 0. Contiene:
   - `<h2>` "Comparativa XML vs JSON".
   - Tabla HTML con columnas: Característica | XML | JSON. Datos:
     - Creado en | 1996 (W3C) | 2001 (Crockford)
     - Basado en | SGML | Sintaxis de objetos JS
     - Legibilidad | Media (verboso) | Alta (compacto)
     - Tipos de datos | Solo texto (todo es string) | String, Number, Boolean, Null, Array, Object
     - Atributos | Sí | No
     - Comentarios | Sí (`<!-- -->`) | No (especificación estándar)
     - Validación | DTD / XSD | JSON Schema
     - Uso principal | SOAP, configs, documentos | REST APIs, configuración moderna
     - Parsing en JS | `DOMParser` | `JSON.parse()` nativo
     - Soporte binario | No nativo | No nativo
   - Misma estética de tabla que en `servicios-web.html`. Scroll horizontal en móvil.
8. Crear `<section id="casos">` padding 80px 0. Contiene:
   - `<h2>` "Casos de Uso Reales".
   - Dos columnas (Bootstrap grid): columna izquierda para XML, columna derecha para JSON.
   - Columna XML, lista con ícono `bi-building`:
     - Servicios SOAP en bancos y sistemas legados
     - Archivos de configuración de Maven (`pom.xml`) y Spring
     - Documentos de Word/Excel (formato OOXML)
     - RSS y Atom feeds
     - WSDL (descripción de servicios web)
   - Columna JSON, lista con ícono `bi-lightning-charge`:
     - APIs REST (GitHub, Stripe, Twitter/X)
     - Archivos de configuración de Node.js (`package.json`)
     - Almacenamiento en bases de datos NoSQL (MongoDB)
     - Comunicación en tiempo real con WebSockets
     - Configuración de herramientas modernas (VS Code `settings.json`)
   - Nota de cierre: "Regla práctica: usa JSON por defecto en nuevas APIs REST. Usa XML si debes integrarte con sistemas legados SOAP, si necesitas atributos de metadatos, o si el estándar del dominio lo exige (ej. facturación electrónica DIAN en Colombia)."
9. Sección de recursos con enlaces a: `servicios-web.html` (Qué es un Servicio Web), `protocolos-seguridad.html` (Protocolos HTTP/HTTPS), `http-metodos-status.html` (Métodos HTTP), `tipos-servicios-web.html` (SOAP/REST/GraphQL).
10. Footer igual al de `servicios-web.html`.
11. Incluir highlight.js CDN (CSS y JS) para el resaltado de sintaxis en los bloques de código. Inicializar con `hljs.highlightAll()` al final del script.
12. Animación de entrada (fade-in + slide-up) para cada sección al hacer scroll, usando Intersection Observer.
13. Responsivo: en móvil, las dos columnas de casos de uso se apilan verticalmente.
