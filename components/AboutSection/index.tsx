"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";

const AboutSection = () => {
  const { t, language } = useI18nStore();

  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-cyan-50/20 py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-15 items-center">
          {/* 左侧文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              About Factory
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              {t('companyFullName')}是一家专业从事机筒螺杆制造的企业,拥有15年以上的行业经验。
              我们致力于为客户提供高品质的锥形双螺杆、平行双螺杆和单螺杆产品。
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              公司通过了ISO9001-2000质量管理体系认证,拥有先进的生产设备和专业的技术团队。
              我们提供上门测绘、设计、改造、定制及修复等全方位服务,赢得了500多家客户的信赖。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
            >
              {language === 'zh' ? '了解更多' : 'Read More'}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* 右侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/about/about-light-01.png"
                  alt="About Factory"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* 装饰元素 */}
              <div className="absolute -right-4 -bottom-4 h-full w-full rounded-2xl border-4 border-cyan-400/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
