"use client";

import { motion } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";
import FAQSection from "@/components/FAQSection";

const AboutPage = () => {
  const { t, language } = useI18nStore();

  const isZh = language === "zh";

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08),rgba(2,6,23,0.2))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-amber-600">
              {isZh ? "工业实力" : "Industrial Strength"}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              {isZh ? "关于我们" : "About Us"}
            </h1>
            <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg">
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
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-[inset_0_1px_0_rgba(148,163,184,0.12)]">
              <h2 className="mb-6 text-3xl font-bold text-white">
                {isZh ? "公司介绍" : "Company Introduction"}
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-slate-300">

                {isZh
                  ? "金 Hall Machinery 是一家专业从事机筒螺杆制造的企业，拥有15年以上的行业经验。我们致力于为客户提供高品质的锥形双螺杆、平行双螺杆和单螺杆产品。"
                  : "Golden Hall Machinery is a professional enterprise specializing in barrel and screw manufacturing, with over 15 years of industry experience. We are committed to providing customers with high-quality conical twin screws, parallel twin screws, and single screw products."}
              </p>
              <p className="mb-4 text-lg leading-relaxed text-slate-300">

                {isZh
                  ? "公司通过了ISO9001-2000质量管理体系认证，拥有先进的生产设备和专业的技术团队。我们提供上门测绘、设计、改造、定制及修复等全方位服务。"
                  : "Our company has passed ISO9001-2000 quality management system certification, with advanced production equipment and a professional technical team. We provide comprehensive services including on-site surveying, design, modification, customization, and repair."}
              </p>
              <p className="text-lg leading-relaxed text-slate-300">

                {isZh
                  ? "产品远销海内外，赢得了500多家客户的信赖与支持。"
                  : "Our products are exported worldwide, winning the trust and support of over 500 customers."}
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-[1px] shadow-[0_0_40px_rgba(2,6,23,0.7)]">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/about/factory.jpg"
                    alt="Factory"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
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
