"use client";
import { useI18nStore } from "@/store/i18nStore";
import { useState } from "react";

const Banner = () => {
  const { t } = useI18nStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
  image: "/images/banner-bg.png",
    },
    {
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
       image: "/images/banner-bg.png",
    },
    {
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
  image: "/images/banner-bg.png",
    },
    {
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
       image: "/images/banner-bg.png",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="banner_section relative bg-cover bg-center py-20 lg:py-32"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative">
          {/* Carousel Indicators */}
          <div className="flex justify-center mb-8 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel Content */}
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90">
              {slides[currentSlide].description}
            </p>
            <div className="flex justify-center">
              <a
                href="#about"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primaryho transition-colors"
              >
                {t("banner.readMore")}
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-r-lg transition-colors"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-l-lg transition-colors"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
