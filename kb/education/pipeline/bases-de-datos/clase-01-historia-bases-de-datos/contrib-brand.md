## Brand

- **title (ES refinado):** Historia de las bases de datos: de los archivos planos a la convergencia
- **brand_tone:** academico-universitario (Sabio 25% + Creador 60% en clave docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **prev:** index
- **next:** null

### Copy de títulos de sección

Lista alineada a la línea de tiempo y a cierre pedagógico (práctica / quiz / reto):

| # | Título sugerido (ES) |
|---|----------------------|
| 0 | Por qué la historia importa hoy |
| 1 | Archivos planos: el problema raíz |
| 2 | Navegación por punteros: jerárquico y red |
| 3 | Codd 1970: el modelo relacional |
| 4 | De la teoría al producto: System R, INGRES y Oracle |
| 5 | El imperio relacional y el puente ER |
| 6 | NoSQL web-scale: escala y flexibilidad |
| 7 | Hoy: NewSQL, cloud y convergencia |
| — | Práctica guiada |
| — | Miniquiz |
| — | Reto integrador: AndinaMarket |

*Opcionales de marco (si el layout los expone como H2/H3 de navegación):* Comparar modelos · Errores comunes · Casos reales · Cierre.

### Callouts sugeridos

Tono: directo, universitario, anclado a criterio profesional (no alarma vacía ni hype).

1. **El museo vive en la PYME**  
   Si el equipo discute «cuál Excel es el bueno», el problema no es la hoja: es la ausencia de un sistema de registro único con integridad y concurrencia.

2. **Independencia de datos, en una frase**  
   Si agregar un índice o cambiar de disco obliga a reescribir la aplicación, no hay independencia física. Si cada usuario necesita otra copia de las tablas «para su vista», no hay independencia lógica.

3. **Moda no es arquitectura**  
   «Escala como Google» no es un argumento si la carga cabe en un motor relacional bien modelado. Elige garantías según el problema, no según la década de moda.

4. **Malas prácticas transversales**  
   Excel como BD de producción · NoSQL por moda en datos financieros · dos fuentes de verdad sin ownership · acoplar la app al layout físico · copiar un stack web-scale el día 1 con un equipo diminuto.

5. **Pregunta de cierre (opcional en hero o footer de sección)**  
   ¿Cuál es la fuente de verdad de este dominio, qué integridad exige y qué patrón de acceso domina?
