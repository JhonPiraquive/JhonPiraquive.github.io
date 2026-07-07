import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: centro de turnos y caché de consultas"}
      </h2>
      <p className="my-4 font-semibold">{"«Centro de turnos y caché de consultas»"}</p>
      <p className="my-4">{"Implementa en consola o `<script>`:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "`const cache = new Map()` — función `obtenerUsuario(id)` que, si `cache.has(id)`, devuelva el valor cacheado; si no, simule fetch con `{ id, nombre: \"Usuario \" + id }`, guárdalo con `cache.set` y devuélvelo."
          }
        </li>
        <li>
          {
            "`const atendidos = new Set()` — al «atender» un ticket, registra su id; si ya está en `atendidos`, ignora duplicados."
          }
        </li>
        <li>
          {
            "`const colaTickets = []` — funciones `encolar(id)` (`push`) y `atenderSiguiente()` (`shift`) que devuelva el id atendido o `null` si la cola está vacía."
          }
        </li>
        <li>
          {
            "`const historialAcciones = []` — cada vez que atiendes un ticket, `push` el id; función `deshacerUltimaAtencion()` hace `pop` y devuelve el id revertido (pila LIFO de acciones)."
          }
        </li>
        <li>
          {
            "**Flujo de prueba:** encola 101, 102, 103 → atiende dos → comprueba orden FIFO (101, 102) → intenta registrar 101 otra vez en `atendidos` y verifica que `Set` evita duplicados → deshace una atención y muestra el id sacado de la pila."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: usa `Map`, `Set`, cola FIFO y pila LIFO con arrays; no mezcles `pop` en la cola de tickets; nombres de funciones que dejen claro el patrón."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Esqueleto de partida — completa las funciones"
        code={`// Esqueleto de partida — completa las funciones
const cache = new Map();
const atendidos = new Set();
const colaTickets = [];
const historialAcciones = [];

function obtenerUsuario(id) {
  // tu código: cache.has / cache.set
}

function encolar(id) {
  // push
}

function atenderSiguiente() {
  // shift, registrar en atendidos e historialAcciones
  // devuelve id o null
}

function deshacerUltimaAtencion() {
  // pop del historial
}

// Pruebas esperadas:
// encolar(101); encolar(102); encolar(103);
// atenderSiguiente() → 101; atenderSiguiente() → 102
// atendidos.has(101) === true; registrar duplicado ignorado
// deshacerUltimaAtencion() → 102`}
      />
      <PracticeExercise
        prompt="Implementa el reto «Centro de turnos y caché de consultas». Pega tu código o describe cómo obtenerUsuario usa Map, atenderSiguiente respeta FIFO y deshacerUltimaAtencion usa la pila LIFO."
        hints={[
          "obtenerUsuario: if (cache.has(id)) return cache.get(id); else crea objeto, cache.set, return",
          "atenderSiguiente: const id = colaTickets.shift(); if (id == null) return null; atendidos.add(id); historialAcciones.push(id); return id",
          "deshacerUltimaAtencion: return historialAcciones.pop()",
          "No uses pop en colaTickets — eso sería LIFO",
        ]}
        expectedKeywords={["Map", "Set", "shift", "pop", "push"]}
        successMessage="Excelente. Has integrado Map (caché), Set (sin duplicados), cola FIFO y pila LIFO en un flujo coherente."
        rows={8}
      />
    </section>
  );
}
