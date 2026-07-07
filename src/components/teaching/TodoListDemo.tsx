"use client";

import { useCallback, useEffect, useState } from "react";
import { ClayCard } from "@/components/clay";

type Filtro = "todas" | "pendientes" | "completadas";

type Tarea = {
  id: number;
  texto: string;
  completada: boolean;
};

export type TodoListDemoProps = {
  title?: string;
  storageKey?: string;
  showPersistenceToggle?: boolean;
  showSimulateReload?: boolean;
  emptyMessages?: {
    todas: string;
    pendientes: string;
    completadas: string;
  };
};

const DEFAULT_EMPTY = {
  todas: "No hay tareas. ¡Agrega la primera!",
  pendientes: "No hay pendientes.",
  completadas: "No hay tareas completadas aún.",
};

export function TodoListDemo({
  title = "Lista de tareas PBPEW",
  storageKey = "pbpew-tareas-demo",
  showPersistenceToggle = false,
  showSimulateReload = false,
  emptyMessages = DEFAULT_EMPTY,
}: TodoListDemoProps) {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [siguienteId, setSiguienteId] = useState(1);
  const [filtroActivo, setFiltroActivo] = useState<Filtro>("todas");
  const [input, setInput] = useState("");
  const [persistEnabled, setPersistEnabled] = useState(false);

  const guardar = useCallback(
    (lista: Tarea[], nextId: number) => {
      if (!persistEnabled || !storageKey) return;
      localStorage.setItem(
        storageKey,
        JSON.stringify({ tareas: lista, siguienteId: nextId })
      );
    },
    [persistEnabled, storageKey]
  );

  const cargar = useCallback(() => {
    if (!storageKey) return { tareas: [] as Tarea[], siguienteId: 1 };
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return { tareas: [], siguienteId: 1 };
      const datos = JSON.parse(raw) as { tareas?: Tarea[]; siguienteId?: number };
      if (!Array.isArray(datos.tareas)) return { tareas: [], siguienteId: 1 };
      const maxId = datos.tareas.reduce((max, t) => Math.max(max, t.id), 0);
      return {
        tareas: datos.tareas,
        siguienteId: datos.siguienteId ?? maxId + 1,
      };
    } catch {
      return { tareas: [], siguienteId: 1 };
    }
  }, [storageKey]);

  useEffect(() => {
    if (persistEnabled) {
      const { tareas: loaded, siguienteId: nextId } = cargar();
      setTareas(loaded);
      setSiguienteId(nextId);
    }
  }, [persistEnabled, cargar]);

  function tareasVisibles(lista: Tarea[]) {
    if (filtroActivo === "pendientes") return lista.filter((t) => !t.completada);
    if (filtroActivo === "completadas") return lista.filter((t) => t.completada);
    return lista;
  }

  function agregarTarea(e: React.FormEvent) {
    e.preventDefault();
    const limpio = input.trim();
    if (!limpio) return;
    const nueva: Tarea = { id: siguienteId, texto: limpio, completada: false };
    const actualizadas = [...tareas, nueva];
    const nextId = siguienteId + 1;
    setTareas(actualizadas);
    setSiguienteId(nextId);
    setInput("");
    guardar(actualizadas, nextId);
  }

  function eliminarPorId(id: number) {
    const actualizadas = tareas.filter((t) => t.id !== id);
    setTareas(actualizadas);
    guardar(actualizadas, siguienteId);
  }

  function toggleCompletada(id: number) {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(actualizadas);
    guardar(actualizadas, siguienteId);
  }

  function handleSimulateReload() {
    if (persistEnabled) {
      const { tareas: loaded, siguienteId: nextId } = cargar();
      setTareas(loaded);
      setSiguienteId(nextId);
    } else {
      setTareas([]);
      setSiguienteId(1);
      setInput("");
    }
  }

  const visibles = tareasVisibles(tareas);
  const pendientes = tareas.filter((t) => !t.completada).length;
  const completadas = tareas.filter((t) => t.completada).length;
  const emptyMsg = emptyMessages[filtroActivo];

  const filtros: { key: Filtro; label: string }[] = [
    { key: "todas", label: "Todas" },
    { key: "pendientes", label: "Pendientes" },
    { key: "completadas", label: "Completadas" },
  ];

  return (
    <ClayCard className="my-8 rounded-[22px] border-2 border-[var(--color-secondary)]/30 p-6">
      <h3 className="mb-4 text-lg font-semibold text-[var(--color-primary)]">{title}</h3>

      {(showPersistenceToggle || showSimulateReload) && (
        <div className="mb-4 flex flex-wrap gap-3 text-sm">
          {showPersistenceToggle && (
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={persistEnabled}
                onChange={(e) => setPersistEnabled(e.target.checked)}
              />
              {"Persistir en localStorage"}
            </label>
          )}
          {showSimulateReload && (
            <button
              type="button"
              className="clay-button bg-[var(--color-neutral-mid)] text-sm"
              onClick={handleSimulateReload}
            >
              {"Simular recarga"}
            </button>
          )}
        </div>
      )}

      <form onSubmit={agregarTarea} className="mb-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea"
          maxLength={120}
          className="flex-1 rounded-xl border border-[var(--color-neutral-mid)] bg-white px-3 py-2 text-sm"
        />
        <button type="submit" className="clay-button bg-[var(--color-secondary)]">
          {"Agregar"}
        </button>
      </form>

      <nav className="mb-3 flex gap-2" aria-label="Filtrar tareas">
        {filtros.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`rounded-xl px-3 py-1 text-sm transition ${
              filtroActivo === key
                ? "bg-[var(--color-accent)] font-semibold text-white"
                : "bg-[var(--color-neutral-light)] hover:bg-[var(--color-neutral-mid)]/30"
            }`}
            aria-pressed={filtroActivo === key}
            onClick={() => setFiltroActivo(key)}
          >
            {label}
          </button>
        ))}
      </nav>

      <p className="mb-3 text-sm text-[var(--color-neutral-dark)]/80">
        {pendientes}
        {" pendientes · "}
        {completadas}
        {" completadas"}
      </p>

      {visibles.length === 0 ? (
        <p className="py-4 text-center text-sm italic text-[var(--color-neutral-dark)]/70">
          {emptyMsg}
        </p>
      ) : (
        <ul className="space-y-2">
          {visibles.map((tarea) => (
            <li
              key={tarea.id}
              className={`flex items-center justify-between rounded-xl border border-[var(--color-neutral-mid)]/40 bg-white px-3 py-2 ${
                tarea.completada ? "opacity-60" : ""
              }`}
            >
              <button
                type="button"
                className={`flex-1 text-left text-sm ${
                  tarea.completada ? "line-through" : ""
                }`}
                onClick={() => toggleCompletada(tarea.id)}
              >
                {tarea.texto}
              </button>
              <button
                type="button"
                className="ml-2 rounded-lg px-2 text-lg leading-none text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                aria-label="Eliminar tarea"
                onClick={() => eliminarPorId(tarea.id)}
              >
                {"×"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </ClayCard>
  );
}
