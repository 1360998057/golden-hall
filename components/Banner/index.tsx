"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";

const Banner = () => {
  const { t, language } = useI18nStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isZh = language === "zh";

  const slides = [
    {
      id: "brand",
      eyebrow: "Since 1992 · Zhoushan, China",
      title: isZh ? "伟达机械" : "WEIDA MACHINERY",
      subtitle: t("heroTitle"),
      description: t("about.factoryDescription"),
      video: "/video/f40679321fd675e51e942585fd8fe018.mp4",
    },
    {
      id: "manufacturing",
      eyebrow: isZh ? "自主生产 · 全程把控" : "Integrated Production",
      title: isZh ? "精密制造" : "PRECISION MANUFACTURING",
      subtitle: isZh ? "每一道工序，都为长期稳定而造" : "Built for consistent, long-term performance",
      description: isZh
        ? "从原材料选用、热处理到 CNC 精密加工与品质检测，以完善的自主生产体系控制每一道关键工序。"
        : "From material selection and heat treatment to CNC machining and final inspection, every critical production stage is carefully controlled in-house.",
      image: "/images/factory/workshop-2.webp",
    },
    {
      id: "custom",
      eyebrow: isZh ? "按图定制 · 专业响应" : "Custom Engineering",
      title: isZh ? "按需定制" : "BUILT FOR YOUR PROCESS",
      subtitle: isZh ? "让螺杆与您的设备和工艺精准匹配" : "Screw and barrel solutions matched to your equipment",
      description: isZh
        ? "依托三十余年制造经验，根据客户图纸、设备型号与生产工艺，提供设计、改造、定制及修复服务。"
        : "With more than three decades of experience, we provide design, modification, customization and repair services based on your drawings, equipment models and processes.",
      image: "/images/factory/workshop-5.webp",
    },
  ];

  const slide = slides[currentSlide];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.play().catch(() => undefined);
    }
  }, [currentSlide]);

  const goToPrevious = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
  };
  const goToNext = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="relative isolate h-[760px] overflow-hidden bg-slate-950 text-white sm:h-[700px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={isZh ? "伟达机械核心能力" : "Weida Machinery highlights"}
    >

        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0 -z-20"
        >
          {slide.video ? (
            <video
              ref={videoRef}
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={slide.image!}
              alt={slide.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
        </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

      <div className="mx-auto flex h-full max-w-c-1390 flex-col justify-between px-4 pb-8 pt-28 md:px-8 md:pt-32">
  
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="flex h-[450px] max-w-3xl flex-col sm:h-[430px]"
          >
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 md:text-sm">
              <span className="h-px w-10 bg-blue-400" />
              {slide.eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-white/90 md:text-2xl md:leading-9">
              {slide.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
              >
                {isZh ? "查看产品" : "Explore Products"}
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {t("banner.readMore")}
              </Link>
            </div>
          </motion.div>
  

        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-8 text-sm text-white/60">
            <div>
              <strong className="mr-2 text-xl font-bold text-white">30+</strong>
              {isZh ? "年制造经验" : "Years"}
            </div>
            <div>
              <strong className="mr-2 text-xl font-bold text-white">8</strong>
              {isZh ? "大产品系列" : "Product Series"}
            </div>
            <div className="hidden sm:block">
              <strong className="mr-2 text-xl font-bold text-white">5</strong>
              {isZh ? "项材料工艺" : "Processes"}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-sm font-semibold tabular-nums text-white/70">
              {String(currentSlide + 1).padStart(2, "0")}
              <span className="mx-1 text-white/30">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2" role="tablist" aria-label={isZh ? "轮播图" : "Carousel slides"}>
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className="group py-2"
                  aria-label={`${isZh ? "切换到第" : "Go to slide"} ${index + 1}`}
                  aria-selected={currentSlide === index}
                  role="tab"
                >
                  <span className={`block h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-12 bg-blue-400" : "w-6 bg-white/25 group-hover:bg-white/50"
                  }`} />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:border-blue-500 hover:bg-blue-600"
                aria-label={isZh ? "上一张" : "Previous slide"}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:border-blue-500 hover:bg-blue-600"
                aria-label={isZh ? "下一张" : "Next slide"}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
