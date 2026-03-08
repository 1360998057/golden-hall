"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";
import { useState, useEffect } from "react";

const carouselSlides = [
  {
    id: 1,
    title: "专业机筒螺杆制造企业",
    titleEn: "Professional Barrel & Screw Manufacturer",
    subtitle: "15年行业经验 · 500+合作客户 · ISO9001认证",
    subtitleEn: "15 Years Experience · 500+ Clients · ISO9001 Certified",
    image: "/images/hero/hero-light.svg",
    bgGradient: "from-blue-50 via-cyan-50 to-white",
  },
  {
    id: 2,
    title: "高品质塑料机械配件",
    titleEn: "High-Quality Plastic Machinery Parts",
    subtitle: "锥形螺杆 · 平行螺杆 · 单螺杆 · 机筒",
    subtitleEn: "Conical Screws · Parallel Screws · Single Screws · Barrels",
    image: "/images/hero/hero-2-light.svg",
    bgGradient: "from-cyan-50 via-blue-50 to-white",
  },
  {
    id: 3,
    title: "定制化解决方案",
    titleEn: "Customized Solutions",
    subtitle: "上门测绘 · 专业设计 · 精密制造",
    subtitleEn: "On-site Surveying · Professional Design · Precision Manufacturing",
    image: "/images/hero/hero-3-light.svg",
    bgGradient: "from-blue-50 via-indigo-50 to-white",
  },
];

const factoryBgImage = "/images/Gemini_Generated_Image_zb4qymzb4qymzb4q.png";

const Hero = () => {
  const { language } = useI18nStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = carouselSlides[currentSlide];

  return (
    <>
      <section 
        className="relative overflow-hidden bg-white pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 工厂背景图片 */}
        <div className="absolute inset-0">
          <Image
            src={factoryBgImage}
            alt="Factory"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* 遮罩层 - 使文字更清晰 */}
        <div className="absolute inset-0 bg-white/70" />

        {/* 装饰性网格图案 */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(229,231,235,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(229,231,235,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧内容 */}
            <div className="order-2 lg:order-1">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                {/* Badge */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                    {language === "zh" ? "专业制造" : "Professional Manufacturing"}
                  </span>
                </div>

                {/* 主标题 */}
                <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-800 lg:text-4xl xl:text-5xl">
                  {language === "zh" ? slide.title : slide.titleEn}
                </h1>

                {/* 副标题 */}
                <p className="mb-8 text-lg text-gray-700">
                  {language === "zh" ? slide.subtitle : slide.subtitleEn}
                </p>

                {/* CTA按钮组 */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="#about"
                    className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:from-blue-700 hover:to-cyan-700"
                  >
                    <span>{language === "zh" ? "了解更多" : "Learn More"}</span>
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    {language === "zh" ? "联系我们" : "Contact Us"}
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* 右侧图像 */}
            <div className="order-1 lg:order-2 relative">
              <motion.div
                key={`slide-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* 主图像 */}
                <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
                  <Image
                    src={slide.image}
                    alt={language === "zh" ? slide.title : slide.titleEn}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* 装饰元素 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 h-16 w-16 rounded-full border-2 border-blue-200 border-t-blue-600"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 h-12 w-12 rounded-full border-2 border-cyan-200 border-b-cyan-600"
                />
              </motion.div>
            </div>
          </div>

          {/* 轮播指示器 */}
          <div className="flex justify-center mt-12 gap-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 底部装饰波浪 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 text-gray-50"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 96L48 112C96 128 192 160 288 160C384 160 480 128 576 117.3C672 107 768 117 864 128C960 139 1056 149 1152 149.3C1248 149 1344 139 1392 133.3L1440 128V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;