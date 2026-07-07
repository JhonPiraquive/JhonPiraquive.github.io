"use client";

import { useCallback, useEffect, useState } from "react";
import { ModalOverlay } from "@/components/ui/ModalOverlay";

type CertificationImageLightboxProps = {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
};

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const STEP = 0.25;

export function CertificationImageLightbox({
  open,
  src,
  alt,
  onClose,
}: CertificationImageLightboxProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (open) setScale(1);
  }, [open, src]);

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(MAX_SCALE, Number((s + STEP).toFixed(2))));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => Math.max(MIN_SCALE, Number((s - STEP).toFixed(2))));
  }, []);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  }, [zoomIn, zoomOut]);

  if (!open) return null;

  return (
    <ModalOverlay
      ariaLabel={alt}
      onClose={onClose}
      panelClassName="flex max-h-[90vh] max-w-5xl flex-col items-center"
    >
      <div className="mb-3 flex gap-2">
        <button
          type="button"
          className="rounded-lg bg-white/15 px-3 py-1 text-white hover:bg-white/25 disabled:opacity-40"
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          aria-label="Alejar"
        >
          −
        </button>
        <button
          type="button"
          className="rounded-lg bg-white/15 px-3 py-1 text-white hover:bg-white/25 disabled:opacity-40"
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          aria-label="Acercar"
        >
          +
        </button>
      </div>
      <div
        className="max-h-[80vh] overflow-auto rounded-xl"
        onWheel={onWheel}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-h-[80vh] w-auto origin-center rounded-xl object-contain transition-transform duration-150"
          style={{ transform: `scale(${scale})` }}
          draggable={false}
        />
      </div>
    </ModalOverlay>
  );
}
