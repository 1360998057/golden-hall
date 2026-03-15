"use client";

import Image from "next/image";
import { useI18nStore } from "@/store/i18nStore";
import { motion } from "framer-motion";

const AboutPage = () => {
  const { language, t } = useI18nStore();

  const getText = (text: { zh: string; en: string }) =>
    text[language] || text.zh || text.en;

  const stats = [
    {
      label: { zh: "创立年份", en: "Founded" },
      value: "1992",
    },
    {
      label: { zh: "制造底蕴", en: "Heritage" },
      value: "30+年",
      valueEn: "30+ Years",
    },
    {
      label: { zh: "服务客户", en: "Clients Served" },
      value: "500+",
    },
    {
      label: { zh: "产品类型", en: "Product Types" },
      value: "100+",
    },
  ];

  const sections = [
    {
      title: {
        zh: "专业制造能力",
        en: "Professional Manufacturing Capability"
      },
      desc: {
        zh: "拥有先进的数控加工设备和检测仪器，能够加工各种规格的机筒螺杆，确保产品精度和质量。",
        en: "Equipped with advanced CNC machining equipment and testing instruments, capable of processing barrels and screws of various specifications to ensure product precision and quality."
      },
      image: "/images/strength/manufacturing.jpg",
      alt: {
        zh: "制造设备",
        en: "Manufacturing Equipment"
      },
      highlights: {
        zh: ["数控加工", "精密检测", "质量管控"],
        en: ["CNC Machining", "Precision Testing", "Quality Control"]
      }
    },
    {
      title: {
        zh: "技术优势",
        en: "Technical Advantage"
      },
      desc: {
        zh: "30年专业经验积累，掌握核心制造工艺，为客户提供最优解决方案和技术支持。",
        en: "30 years of professional experience, mastering core manufacturing processes, providing optimal solutions and technical support to customers."
      },
      image: "/images/strength/technology.jpg",
      alt: {
        zh: "技术团队",
        en: "Technical Team"
      },
      highlights: {
        zh: ["专业团队", "工艺创新", "技术支持"],
        en: ["Professional Team", "Process Innovation", "Technical Support"]
      }
    },
    {
      title: {
        zh: "质量保证",
        en: "Quality Assurance"
      },
      desc: {
        zh: "通过ISO9001质量体系认证，建立完善的质量管理体系，从原材料到成品全程质量控制。",
        en: "ISO9001 quality system certified, establishing a comprehensive quality management system with full-process quality control from raw materials to finished products."
      },
      image: "/images/strength/quality.jpg",
      alt: {
        zh: "质量检测",
        en: "Quality Inspection"
      },
      highlights: {
        zh: ["ISO9001认证", "质量体系", "全程控制"],
        en: ["ISO9001 Certified", "Quality System", "Full Control"]
      }
    }
  ];

  return (
    <main className="bg-slate-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.05),rgba(6,182,212,0.08))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(229,231,235,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(229,231,235,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {t("about")}
            </h1>
            <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
              {language === "zh"
                ? "以实力铸就信赖，以工艺成就卓越"
                : "Powering trust with precision and proven capability"}
            </p>

            <div className="mx-auto max-w-5xl mt-8">
              <p className="text-base text-gray-600 leading-relaxed md:text-lg">
                {t("about.detailedDescription")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 lg:py-18 bg-gray-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                  {getText(item.label)}
                </p>
                <p className="mt-3 text-2xl font-bold text-gray-900">
                  {typeof item.value === 'string' ? item.value : getText(item.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-18">
        <div className="mx-auto max-w-c-1390 space-y-16 px-4 md:px-8">
          {sections.map((section, index) => (
            <div
              key={section.title.en}
              className={`flex flex-col gap-10 lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-[1px] shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
                    <Image
                      src={section.image}
                      alt={getText(section.alt)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-600 text-blue-600">
                      {index + 1}
                    </span>
                    {language === "zh" ? "核心优势" : "Key Strength"}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
                    {getText(section.title)}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {getText(section.desc)}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {section.highlights[language].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {language === "zh" ? "公司介绍" : "Company Introduction"}
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                {language === "zh"
                  ? "舟山市伟达机械有限公司是一家专业从事机筒螺杆制造的企业，拥有30年以上的行业经验。我们致力于为客户提供高品质的锥形双螺杆、平行双螺杆和单螺杆产品。"
                  : "Zhoushan Weida Machinery Co., Ltd. is a professional enterprise specializing in barrel and screw manufacturing, with over 30 years of industry experience. We are committed to providing customers with high-quality conical twin screws, parallel twin screws, and single screw products."}
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                {language === "zh"
                  ? "公司通过了ISO9001-2000质量管理体系认证，拥有先进的生产设备和专业的技术团队。我们提供上门测绘、设计、改造、定制及修复等全方位服务。"
                  : "Our company has passed ISO9001-2000 quality management system certification, with advanced production equipment and a professional technical team. We provide comprehensive services including on-site surveying, design, modification, customization, and repair."}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {language === "zh"
                  ? "产品远销海内外，赢得了500多家客户的信赖与支持。"
                  : "Our products are exported worldwide, winning trust and support of over 500 customers."}
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-[1px] shadow-lg">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/about/factory.jpg"
                    alt="Factory"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Strength Section - 四大特色服务 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === "zh" ? "核心优势" : "Key Strength"}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === "zh" 
                ? "我们为您提供全方位的专业服务"
                : "We provide you with comprehensive professional services"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl hover:border-blue-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("feature1Title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("feature1Desc")}
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl hover:border-blue-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("feature2Title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("feature2Desc")}
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl hover:border-blue-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("feature3Title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("feature3Desc")}
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl hover:border-blue-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("feature4Title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("feature4Desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
