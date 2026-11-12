"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useI18nStore } from "@/store/i18nStore";

interface ImageLightboxProps {
  images: string[];
  activeIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
  title: string;
}

const ImageLightbox = ({
  images,
  activeIndex,
  onChange,
  onClose,
  title,
}: ImageLightboxProps) => {
  const { language } = useI18nStore();
  const isZh = language === "zh";

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onChange((activeIndex - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        onChange((activeIndex + 1) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length, onChange, onClose]);

  if (activeIndex === null || !images[activeIndex]) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
        aria-label={isZh ? "关闭大图" : "Close image"}
      >
        ×
      </button>
      <div className="absolute left-5 top-6 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
        {activeIndex + 1} / {images.length}
      </div>

      <div
        className="relative h-full max-h-[86vh] w-full max-w-7xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${title} ${activeIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onChange((activeIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 md:left-8"
            aria-label={isZh ? "上一张" : "Previous image"}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onChange((activeIndex + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 md:right-8"
            aria-label={isZh ? "下一张" : "Next image"}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default ImageLightbox;
