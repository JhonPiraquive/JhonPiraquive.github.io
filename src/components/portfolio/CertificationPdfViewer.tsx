"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ModalOverlay } from "@/components/ui/ModalOverlay";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

type CertificationPdfViewerProps = {
  open: boolean;
  src: string;
  title: string;
  onClose: () => void;
};

export function CertificationPdfViewer({
  open,
  src,
  title,
  onClose,
}: CertificationPdfViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [pageWidth, setPageWidth] = useState(900);

  useEffect(() => {
    const updateWidth = () => setPageWidth(Math.min(900, window.innerWidth - 80));
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (open) {
      setNumPages(0);
      setLoadError(false);
    }
  }, [open, src]);

  if (!open) return null;

  return (
    <ModalOverlay
      ariaLabel={title}
      onClose={onClose}
      panelClassName="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white"
    >
      <div className="flex items-center justify-between gap-4 border-b px-4 py-3">
        <span className="font-semibold text-[var(--color-primary)]">{title}</span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-[var(--color-secondary)] underline hover:text-[var(--color-accent)]"
        >
          Abrir en nueva pestaña
        </a>
      </div>

      <div className="flex-1 overflow-y-auto bg-neutral-100 p-4">
        {loadError ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <p className="text-[var(--color-neutral-dark)]/80">
              No se pudo cargar el PDF en el visor.
            </p>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--color-secondary)] underline"
            >
              Abrir documento en nueva pestaña
            </a>
          </div>
        ) : (
          <Document
            file={src}
            onLoadSuccess={({ numPages: pages }) => {
              setNumPages(pages);
              setLoadError(false);
            }}
            onLoadError={() => setLoadError(true)}
            loading={
              <p className="py-12 text-center text-[var(--color-neutral-dark)]/70">
                Cargando documento…
              </p>
            }
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={`page-${i + 1}`}
                pageNumber={i + 1}
                width={pageWidth}
                className="mx-auto mb-4 shadow-md"
              />
            ))}
          </Document>
        )}
      </div>
    </ModalOverlay>
  );
}
