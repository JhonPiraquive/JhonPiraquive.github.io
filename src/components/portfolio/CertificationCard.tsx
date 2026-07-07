"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { ClayCard } from "@/components/clay/ClayCard";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { ViewerLoading } from "@/components/portfolio/ViewerLoading";
import type { PortfolioContent } from "@/lib/portfolio";

const CertificationImageLightbox = dynamic(
  () =>
    import("@/components/portfolio/CertificationImageLightbox").then(
      (m) => m.CertificationImageLightbox
    ),
  { ssr: false, loading: ViewerLoading }
);

const CertificationPdfViewer = dynamic(
  () =>
    import("@/components/portfolio/CertificationPdfViewer").then(
      (m) => m.CertificationPdfViewer
    ),
  { ssr: false, loading: ViewerLoading }
);

type Certification = PortfolioContent["certifications"][number];

type CertificationCardProps = {
  cert: Certification;
};

export function CertificationCard({ cert }: CertificationCardProps) {
  const [showImage, setShowImage] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const openViewer = () => {
    if (cert.type === "image") setShowImage(true);
    else setShowPdf(true);
  };

  return (
    <>
      <ClayCard className="flex h-full cursor-pointer flex-col" onClick={openViewer}>
        <div className="flex-1">
          <h3 className="font-semibold">{cert.title}</h3>
          <p className="mt-2 text-sm text-[var(--color-neutral-dark)]/70">{cert.desc}</p>
        </div>
        <div className="cert-preview mt-4 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-white/60">
          {cert.type === "image" ? (
            <Image
              src={cert.src}
              alt={cert.title}
              width={280}
              height={140}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              fetchPriority="low"
              className="pointer-events-none h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-[var(--color-primary)]">
              <BsFileEarmarkPdf className="text-4xl text-[var(--color-accent)]" />
              <span className="text-sm font-medium">{cert.previewLabel ?? "Documento PDF"}</span>
            </div>
          )}
        </div>
        <p className="mt-3 text-xs font-medium text-[var(--color-secondary)]">Clic para ver →</p>
      </ClayCard>

      {cert.type === "image" && showImage && (
        <CertificationImageLightbox
          open
          src={cert.src}
          alt={cert.title}
          onClose={() => setShowImage(false)}
        />
      )}

      {cert.type === "pdf" && showPdf && (
        <CertificationPdfViewer
          open
          src={cert.src}
          title={cert.title}
          onClose={() => setShowPdf(false)}
        />
      )}
    </>
  );
}
