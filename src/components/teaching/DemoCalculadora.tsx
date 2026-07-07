"use client";

import { useCallback, useState } from "react";

export type DemoCalculadoraProps = {
  ariaLive?: "polite" | "assertive" | "off";
  displayLabels?: { plus: string; minus: string; times: string; divide: string };
  errorMessages?: [string, string];
  hint?: string;
};

type CalcResult = { ok: true; valor: number } | { ok: false; mensaje: string };

const DEFAULT_LABELS = { plus: "+", minus: "−", times: "×", divide: "÷" };
const DEFAULT_ERRORS: [string, string] = ["División por cero", "Error"];

type ButtonDef = { key: string; label: string; kind: "clear" | "digit" | "decimal" | "operator" | "equals"; value?: string };

function calcular(a: string, operador: string, b: string, errors: [string, string]): CalcResult {
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return { ok: false, mensaje: errors[1] };
  }
  if (operador === "/" && y === 0) {
    return { ok: false, mensaje: errors[0] };
  }
  let resultado: number;
  switch (operador) {
    case "+":
      resultado = x + y;
      break;
    case "-":
      resultado = x - y;
      break;
    case "*":
      resultado = x * y;
      break;
    case "/":
      resultado = x / y;
      break;
    default:
      return { ok: false, mensaje: errors[1] };
  }
  return { ok: true, valor: resultado };
}

function isErrorDisplay(value: string, errors: [string, string]) {
  return errors.includes(value as string);
}

export function DemoCalculadora({
  ariaLive = "polite",
  displayLabels = DEFAULT_LABELS,
  errorMessages = DEFAULT_ERRORS,
  hint,
}: DemoCalculadoraProps) {
  const [operandoActual, setOperandoActual] = useState("0");
  const [operandoAnterior, setOperandoAnterior] = useState("");
  const [operadorPendiente, setOperadorPendiente] = useState<string | null>(null);
  const [esperandoNuevoOperando, setEsperandoNuevoOperando] = useState(false);
  const [justEquals, setJustEquals] = useState(false);

  const labels: Record<string, string> = {
    "+": displayLabels.plus,
    "-": displayLabels.minus,
    "*": displayLabels.times,
    "/": displayLabels.divide,
  };

  const mostrarError = useCallback(
    (mensaje: string) => {
      setOperandoActual(mensaje);
      setOperadorPendiente(null);
      setOperandoAnterior("");
      setEsperandoNuevoOperando(true);
      setJustEquals(false);
    },
    []
  );

  const limpiar = useCallback(() => {
    setOperandoActual("0");
    setOperandoAnterior("");
    setOperadorPendiente(null);
    setEsperandoNuevoOperando(false);
    setJustEquals(false);
  }, []);

  const manejarDigito = useCallback(
    (digito: string) => {
      setJustEquals(false);
      if (esperandoNuevoOperando) {
        setOperandoActual(digito);
        setEsperandoNuevoOperando(false);
      } else {
        setOperandoActual((prev) => (prev === "0" ? digito : prev + digito));
      }
    },
    [esperandoNuevoOperando]
  );

  const manejarPunto = useCallback(() => {
    setJustEquals(false);
    if (esperandoNuevoOperando) {
      setOperandoActual("0.");
      setEsperandoNuevoOperando(false);
    } else {
      setOperandoActual((prev) => (prev.includes(".") ? prev : prev + "."));
    }
  }, [esperandoNuevoOperando]);

  const manejarOperador = useCallback(
    (nuevoOperador: string) => {
      setJustEquals(false);
      let actual = operandoActual;
      if (operadorPendiente !== null && !esperandoNuevoOperando) {
        const res = calcular(operandoAnterior, operadorPendiente, operandoActual, errorMessages);
        if (!res.ok) {
          mostrarError(res.mensaje);
          return;
        }
        actual = String(res.valor);
        setOperandoActual(actual);
      }
      setOperandoAnterior(actual);
      setOperadorPendiente(nuevoOperador);
      setEsperandoNuevoOperando(true);
    },
    [operandoActual, operandoAnterior, operadorPendiente, esperandoNuevoOperando, errorMessages, mostrarError]
  );

  const manejarIgual = useCallback(() => {
    if (operadorPendiente === null) return;
    const res = calcular(operandoAnterior, operadorPendiente, operandoActual, errorMessages);
    if (!res.ok) {
      mostrarError(res.mensaje);
      return;
    }
    setOperandoActual(String(res.valor));
    setOperadorPendiente(null);
    setOperandoAnterior("");
    setEsperandoNuevoOperando(true);
    setJustEquals(true);
  }, [operandoAnterior, operadorPendiente, operandoActual, errorMessages, mostrarError]);

  function handleButton(btn: ButtonDef) {
    switch (btn.kind) {
      case "clear":
        limpiar();
        break;
      case "digit":
        manejarDigito(btn.value!);
        break;
      case "decimal":
        manejarPunto();
        break;
      case "operator":
        manejarOperador(btn.value!);
        break;
      case "equals":
        manejarIgual();
        break;
    }
  }

  const displayIsError = isErrorDisplay(operandoActual, errorMessages);
  const displayClass = displayIsError
    ? "text-red-600"
    : justEquals
      ? "text-[var(--color-secondary)]"
      : "text-[var(--color-primary)]";

  const gridButtons: ButtonDef[] = [
    { key: "C", label: "C", kind: "clear" },
    { key: "/", label: labels["/"], kind: "operator", value: "/" },
    { key: "*", label: labels["*"], kind: "operator", value: "*" },
    { key: "-", label: labels["-"], kind: "operator", value: "-" },
    { key: "7", label: "7", kind: "digit", value: "7" },
    { key: "8", label: "8", kind: "digit", value: "8" },
    { key: "9", label: "9", kind: "digit", value: "9" },
    { key: "+", label: labels["+"], kind: "operator", value: "+" },
    { key: "4", label: "4", kind: "digit", value: "4" },
    { key: "5", label: "5", kind: "digit", value: "5" },
    { key: "6", label: "6", kind: "digit", value: "6" },
    { key: "minus2", label: labels["-"], kind: "operator", value: "-" },
    { key: "1", label: "1", kind: "digit", value: "1" },
    { key: "2", label: "2", kind: "digit", value: "2" },
    { key: "3", label: "3", kind: "digit", value: "3" },
    { key: "0", label: "0", kind: "digit", value: "0" },
    { key: ".", label: ".", kind: "decimal" },
    { key: "=", label: "=", kind: "equals" },
  ];

  return (
    <div className="my-8 rounded-[24px] bg-[var(--color-neutral-light)] p-6 shadow-clay">
      <output
        aria-live={ariaLive}
        className={`mb-4 block min-h-[3rem] rounded-2xl bg-white px-4 py-3 text-right font-mono text-2xl ${displayClass}`}
      >
        {operandoActual}
      </output>
      <div className="grid grid-cols-4 gap-2" role="group" aria-label="Teclado calculadora">
        {gridButtons.map((btn) => (
          <button
            key={btn.key}
            type="button"
            className={`min-h-11 min-w-11 rounded-xl border border-[var(--color-neutral-mid)]/30 bg-white text-lg font-semibold shadow-sm transition hover:border-[var(--color-secondary)] ${
              btn.kind === "clear"
                ? "text-[var(--color-accent)] hover:border-[var(--color-accent)]"
                : btn.kind === "operator" || btn.kind === "equals"
                  ? "hover:bg-[var(--color-neutral-light)]"
                  : ""
            } ${btn.key === "0" ? "col-span-2" : ""}`}
            onClick={() => handleButton(btn)}
          >
            {btn.label}
          </button>
        ))}
      </div>
      {hint && <p className="mt-4 text-sm text-[var(--color-neutral-mid)]">{hint}</p>}
    </div>
  );
}
