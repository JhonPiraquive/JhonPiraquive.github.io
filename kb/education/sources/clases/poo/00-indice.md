# Programación Orientada a Objetos (POO)

## Cómo usar esta carpeta

- **Objetivo**: aprender POO con explicaciones claras + ejemplos reales + snippets en C# + diagramas Mermaid + retos rápidos.
- **Orden recomendado**: sigue los archivos en orden numérico (`01` → `10`).
- **Tiempo estimado**: 6–10 horas (depende de cuántos retos hagas).

## Prerrequisitos

- C# básico: variables, `if`, `foreach`, métodos, `List<T>`.
- Saber compilar/ejecutar consola o usar un editor online.

## Convenciones del curso

### Estilo de C# (consistente en todos los módulos)

- **Consola**: ejemplos pensados para `dotnet new console`.
- **Namespace**: se omite para mantener snippets cortos.
- **Nombres**: clases en `PascalCase`; métodos en `PascalCase`; variables en `camelCase`.
- **Salida**: cuando sea útil, se muestra lo esperado en comentarios o en una sección “Resultado esperado”.

### Cómo ejecutar los ejemplos

Opción A (local):

1. Crea un proyecto:
   - `dotnet new console -n PooCurso`
2. Copia el snippet en `Program.cs`.
3. Ejecuta:
   - `dotnet run`

Opción B (online):

- Usa un editor online tipo “.NET Fiddle” (pega el snippet y ejecuta).
- Si el reto dice “cambia una línea”, cambia solo esa parte y vuelve a ejecutar.

### Diagramas (Mermaid)

- Los bloques `mermaid` se renderizan en GitHub y en muchos visores de Markdown.
- Si tu visor no los renderiza, igual puedes leer el texto: es una representación del diagrama.

## Estructura del curso (mapa)

1. [Fundamentos](01-fundamentos.md)
2. [Encapsulamiento](02-encapsulamiento.md)
3. [Herencia](03-herencia.md)
4. [Asociación, Agregación y Composición](04-asociacion-agregacion-composicion.md)
5. [Abstracción, Clases abstractas e Interfaces](05-abstraccion-clases-abstractas-interfaces.md)
6. [Polimorfismo](06-polimorfismo.md)
7. [Override y Sobrecarga (Overload)](07-override-y-sobrecarga.md)
8. [Diagramas de clases](08-diagramas-de-clases.md)
9. [Principios SOLID](09-solid-principios.md)
10. [Modularidad, Cohesión y Acoplamiento](10-modularidad-cohesion-acoplamiento.md)

## Plantilla que se repite en todos los temas

Cada tema importante dentro de un módulo sigue este orden:

1. **Mapa mental**: 2–6 bullets con lo que debes recordar.
2. **Qué es**: definición clara.
3. **Para qué sirve**: beneficio y problema típico que resuelve.
4. **Señales de buen/mal uso**: cuándo aplica y cuándo no.
5. **Ejemplo vida real**: analogía corta.
6. **Ejemplo C#**: snippet mínimo + variante (mejora o anti-ejemplo).
7. **Diagrama/tabla**: Mermaid o tabla comparativa (según convenga).
8. **Reto interactivo**: 3–10 min con pasos + resultado esperado.
9. **Mini-quiz**: 3–5 preguntas + respuestas al final del archivo.

## Glosario rápido (para no perderse)

- **Objeto**: “cosa” con estado (datos) y comportamiento (acciones).
- **Clase**: molde/plantilla para crear objetos.
- **Instancia**: un objeto creado a partir de una clase.
- **Constructor**: método especial que prepara el objeto al crearlo.
