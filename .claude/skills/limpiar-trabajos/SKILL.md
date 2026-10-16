---
name: limpiar-trabajos
description: Limpia la carpeta trabajos/ borrando las entregas de los estudiantes, las descompresiones (_extraido) y las calificaciones (_calificaciones.md), y conserva solo trabajos/orientaciones/. Úsala cuando el usuario pida "limpiar trabajos", "borrar entregas" o "dejar trabajos en limpio".
argument-hint: [periodo, p. ej. 202602 (opcional; sin argumento limpia todos los periodos)]
disable-model-invocation: true
---

# Limpiar trabajos

Deja `trabajos/` listo para un nuevo corte: elimina todo lo que generó una calificación y conserva solo las orientaciones.

## Qué se elimina

Todo lo que cuelga de `trabajos/` **excepto `trabajos/orientaciones/`**, es decir:

- Carpetas de periodo con entregas de estudiantes (`trabajos/<periodo>/...`, p. ej. `trabajos/202602/`): zips, PDF, DOCX y cualquier otro archivo entregado.
- Descompresiones: carpetas `_extraido/` y cualquier carpeta `*_descomprimido/` o `*_media/` generada al extraer.
- Calificaciones: archivos `_calificaciones.md` y cualquier otro reporte generado por `calificar-trabajos`.
- Copias de trabajo temporales creadas para compilar o ejecutar código.

## Qué se conserva

- `trabajos/orientaciones/` completa (`.md`, `.docx`, etc.), sin tocar nada.
- La propia carpeta `trabajos/`.

Si se pasa un periodo (`$ARGUMENTS`, p. ej. `202602`), solo se limpia `trabajos/<periodo>/`; si no, todos los periodos.

## Flujo

1. **Ubicar la raíz.** Trabaja con la ruta absoluta de `trabajos/` en la raíz del repo. Verifica que existe y que `trabajos/orientaciones/` existe; si no existe `orientaciones/`, detente y avisa (no borres nada).
2. **Listar lo que se va a borrar (simulación).** Sin borrar aún:
   ```bash
   find trabajos -mindepth 1 -maxdepth 1 ! -name orientaciones
   ```
   Con periodo: `find trabajos/<periodo> -mindepth 1 -maxdepth 1`. Muestra al usuario cada elemento de primer nivel con su tamaño (`du -sh`) y cuántos archivos contiene. Muestra también, aparte, qué se conserva (`trabajos/orientaciones/`).
3. **Pedir confirmación explícita** (AskUserQuestion o pregunta directa) con el resumen del paso 2. Borrar es irreversible y estas carpetas no están versionadas en git (solo `orientaciones/` lo está), así que no hay forma de recuperarlas. Sin un "sí" claro no se borra nada.
4. **Borrar solo lo confirmado.** Elimina cada elemento listado de forma individual, nunca con comodines que puedan alcanzar `orientaciones/`:
   ```bash
   rm -rf -- "trabajos/<elemento>"
   ```
   - Nunca uses `rm -rf trabajos` ni `trabajos/*`.
   - No sigas enlaces simbólicos fuera de `trabajos/`; si encuentras uno, bórralo como enlace y avisa.
   - Si algún elemento no se puede borrar (permisos, archivo en uso), repórtalo y continúa con el resto.
5. **Verificar.** Vuelve a listar `trabajos/`: debe quedar únicamente `orientaciones/` (o `orientaciones/` más los periodos no incluidos si se pasó un periodo). Confirma con `git status --short trabajos` que no aparecen cambios en `trabajos/orientaciones/`.
6. **Reportar** en pocas líneas: qué se borró (conteo de carpetas/archivos y espacio liberado), qué se conservó y cualquier elemento que no se pudo borrar.

## Reglas de seguridad

- Si dentro de `trabajos/` aparece algo que no encaja con entregas, descompresiones o calificaciones (p. ej. un archivo suelto en la raíz de `trabajos/`), inclúyelo en el listado marcado como "revisar" y pregunta antes de borrarlo.
- No toques nada fuera de `trabajos/` (ni `docker/`, ni `.claude/`, ni el resto del repo).
- No ejecutes esta skill como paso intermedio de otra (p. ej. no la llames al terminar `calificar-trabajos`): solo cuando el usuario la pida.
