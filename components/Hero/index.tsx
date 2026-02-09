"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";
import { useState, useEffect } from "react";

// 轮播图数据
const carouselSlides = [
  {
    id: 1,
    title: "专业机筒螺杆制造企业",
    titleEn: "Professional Barrel & Screw Manufacturer",
    subtitle: "15年行业经验 · 500+合作客户 · ISO9001认证",
    subtitleEn: "15 Years Experience · 500+ Clients · ISO9001 Certified",
    image: "/images/hero/hero-light.svg",
    bgGradient: "from-cyan-50 via-blue-50 to-white",
  },
  {
    id: 2,
    title: "锥形双螺杆专业制造",
    titleEn: "Conical Twin Screw Manufacturing",
    subtitle: "高精度加工 · 定制化服务 · 快速交付",
    subtitleEn: "High Precision · Custom Service · Fast Delivery",
    image: "/images/about/about-light-01.png",
    bgGradient: "from-blue-50 via-cyan-50 to-white",
  },
  {
    id: 3,
    title: "全方位技术支持服务",
    titleEn: "Comprehensive Technical Support",
    subtitle: "上门测绘 · 维修改造 · 技术咨询",
    subtitleEn: "On-site Survey · Repair & Modification · Technical Consulting",
    image: "/images/about/about-light-02.svg",
    bgGradient: "from-white via-cyan-50 to-blue-50",
  },
];

const Hero = () => {
  const { t, language } = useI18nStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 自动轮播
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = carouselSlides[currentSlide];

  return (
    <>
      <section 
        className="relative overflow-hidden bg-white pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 渐变背景 */}
        <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-all duration-1000`} />

        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-15"
            >
              {/* 左侧内容 */}
              <div className="w-full lg:w-1/2">
                {/* 公司标识 */}
                <div className="mb-6 inline-flex items-center gap-3 rounded-lg border-l-4 border-cyan-500 bg-white px-4 py-2 shadow-lg">
                  <Image
                    src="/images/logo/logo.png"
                    alt={t('companyName')}
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                    {t('companyName')}
                  </span>
                </div>

                <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl xl:text-5xl">
                  {language === "zh" ? slide.title : slide.titleEn}
                </h1>

                <p className="mb-8 text-lg text-gray-600">
                  {language === "zh" ? slide.subtitle : slide.subtitleEn}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#about"
                    className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
                  >
                    <span>了解更多</span>
                    <svg 
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-cyan-500 bg-white px-8 py-4 font-semibold text-cyan-600 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                  >
                    联系我们
                  </Link>
                </div>

                {/* 数据展示 */}
                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">15+</div>
                    <div className="mt-1 text-sm text-gray-600">年行业经验</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">500+</div>
                    <div className="mt-1 text-sm text-gray-600">合作客户</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">98%</div>
                    <div className="mt-1 text-sm text-gray-600">客户满意度</div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image
                        className="object-cover"
                        src={slide.image}
                        alt={language === "zh" ? slide.title : slide.titleEn}
                        fill
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* ISO 认证标识 */}
                  <div className="absolute bottom-6 left-6 rounded-lg bg-white px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">ISO 9001</div>
                        <div className="text-xs text-gray-600">质量认证</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 轮播控制按钮 */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between md:left-8 md:right-8">
            <button
              onClick={prevSlide}
              className="group h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
              aria-label="上一张"
            >
              <svg className="h-6 w-6 mx-auto text-gray-700 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="group h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
              aria-label="下一张"
            >
              <svg className="h-6 w-6 mx-auto text-gray-700 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* 指示器 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-500" 
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`切换到第 ${index + 1} 张`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
