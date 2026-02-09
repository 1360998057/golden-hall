"use client";

import { motion } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";
import FAQSection from "@/components/FAQSection";

const AboutPage = () => {
  const { t, language } = useI18nStore();

  const isZh = language === "zh";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {isZh ? "关于我们" : "About Us"}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              {isZh
                ? "专业从事机筒螺杆制造，拥有15年以上行业经验"
                : "Specializing in barrel and screw manufacturing with 15+ years of industry experience"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {isZh ? "公司介绍" : "Company Introduction"}
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                {isZh
                  ? "金 Hall Machinery 是一家专业从事机筒螺杆制造的企业，拥有15年以上的行业经验。我们致力于为客户提供高品质的锥形双螺杆、平行双螺杆和单螺杆产品。"
                  : "Golden Hall Machinery is a professional enterprise specializing in barrel and screw manufacturing, with over 15 years of industry experience. We are committed to providing customers with high-quality conical twin screws, parallel twin screws, and single screw products."}
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                {isZh
                  ? "公司通过了ISO9001-2000质量管理体系认证，拥有先进的生产设备和专业的技术团队。我们提供上门测绘、设计、改造、定制及修复等全方位服务。"
                  : "Our company has passed ISO9001-2000 quality management system certification, with advanced production equipment and a professional technical team. We provide comprehensive services including on-site surveying, design, modification, customization, and repair."}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {isZh
                  ? "产品远销海内外，赢得了500多家客户的信赖与支持。"
                  : "Our products are exported worldwide, winning the trust and support of over 500 customers."}
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/about/factory.jpg"
                  alt="Factory"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection />
    </main>
  );
};

export default AboutPage;
