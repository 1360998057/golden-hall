"use client";
import { useI18nStore } from "@/store/i18nStore";
import { useState, useEffect, useRef } from "react";

const Banner = () => {
  const { t } = useI18nStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    {
      id: 1,
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      video: "/video/f40679321fd675e51e942585fd8fe018.mp4",
      image: "/images/banner-bg.png",
    },
    {
      id: 2,
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      id: 3,
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      id: 4,
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      id: 5,
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      id: 6,
      title: t("banner.title"),
      subtitle: t("banner.subtitle"),
      description: t("banner.description"),
      image: "/images/banner-bg.png",
    },
    {
      id: 7,
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

  const slide = slides[currentSlide];

  // 当切换到视频幻灯片时播放视频
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // 视频自动播放可能被浏览器阻止，忽略错误
      });
    }
  }, [currentSlide]);

  return (
    <div
      className="banner_section relative bg-cover bg-center py-20 lg:py-32"
    >
      {/* 视频或图片背景 */}
      {slide.video ? (
        <video
          ref={videoRef}
          src={slide.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      )}
      
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
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg group"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg group"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
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
