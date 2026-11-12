"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18nStore } from "@/store/i18nStore";
import ImageLightbox from "@/components/Common/ImageLightbox";

const workshopImages = Array.from(
  { length: 6 },
  (_, index) => `/images/factory/workshop-${index + 2}.webp`,
);

const AboutPage = () => {
  const { language, t } = useI18nStore();
  const [activeWorkshop, setActiveWorkshop] = useState<number | null>(null);
  const isZh = language === "zh";

  useEffect(() => {
    const targetId = window.location.hash.substring(1);
    if (!targetId) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 96,
          behavior: "smooth",
        });
      }
    }, 200);
    return () => window.clearTimeout(timer);
  }, []);

  const stats = [
    { value: "1992", label: isZh ? "创立年份" : "Founded" },
    { value: isZh ? "30+ 年" : "30+ Years", label: isZh ? "螺杆制造经验" : "Manufacturing Experience" },
    { value: isZh ? "8 大系列" : "8 Series", label: isZh ? "核心产品体系" : "Core Product Range" },
    { value: isZh ? "5 项工艺" : "5 Processes", label: isZh ? "材料与热处理方案" : "Material & Heat Treatment" },
  ];

  const companyParagraphs = isZh
    ? [
        "舟山市伟达机械有限公司创立于 1992 年，坐落于享有“中国螺杆之都”美誉的浙江舟山，是一家专业从事挤出机、注塑机螺杆及机筒研发、制造与定制服务的生产企业。",
        "三十余年来，伟达机械专注于挤出机螺杆、注塑机螺杆、锥形双螺杆及平行双螺杆等核心产品，在 PS 发泡、PE 发泡等发泡挤出螺杆的设计与制造方面拥有丰富经验，可根据客户图纸及生产工艺需求提供定制化解决方案。",
        "依托完善的自主生产体系和经验丰富的技术团队，公司从原材料选用、热处理、精密加工到品质检测，严格把控每一道生产工序，确保产品具有优异的耐磨性、耐腐蚀性及长期稳定的使用性能。",
        "目前，伟达机械产品已远销亚洲、非洲、中东等多个国家和地区，并凭借稳定可靠的产品品质、具有竞争力的价格及完善的售后服务，赢得全球客户的长期信赖与合作。",
      ]
    : [
        "Founded in 1992, Zhoushan Weida Machinery Co., Ltd. is located in Zhoushan, Zhejiang Province, widely recognized as China's screw manufacturing capital. We specialize in the design, manufacturing and customization of screws and barrels for extrusion and injection molding applications.",
        "For more than three decades, Weida has specialized in extrusion screws, injection molding screws, conical twin screws and parallel twin screws. Our extensive PS and PE foam extrusion expertise enables us to deliver customized designs based on customers' drawings and processing requirements.",
        "Supported by an integrated manufacturing system and an experienced engineering team, every stage from raw material selection and heat treatment to precision machining and final inspection is carefully controlled for wear resistance, corrosion resistance and long-term reliability.",
        "Today, customers across Asia, Africa and the Middle East rely on Weida for dependable screw and barrel solutions backed by consistent quality, competitive value and responsive after-sales service.",
      ];

  const companyParagraphTitles = isZh
    ? ["扎根舟山，专注制造", "核心产品，按需定制", "自主生产，全程把控", "服务全球，长期合作"]
    : ["Rooted in Zhoushan", "Custom Engineering", "Integrated Production", "Global Partnership"];

  const companyHighlights = isZh
    ? [
        { value: "1992", label: "创立于中国螺杆之都" },
        { value: "PS · PE", label: "发泡挤出螺杆经验" },
        { value: "OEM", label: "按图纸与工艺定制" },
      ]
    : [
        { value: "1992", label: "Founded in China's Screw Capital" },
        { value: "PS · PE", label: "Foam Extrusion Expertise" },
        { value: "OEM", label: "Built to Drawings & Processes" },
      ];

  const strengths = [
    {
      title: isZh ? "精密制造能力" : "Precision Manufacturing",
      description: isZh
        ? "从原材料选用、热处理到 CNC 精密加工与圆磨，关键工序自主把控，覆盖多种规格和结构的螺杆机筒加工。"
        : "In-house control from material selection and heat treatment to CNC machining and cylindrical grinding, covering a wide range of screw and barrel designs.",
      image: "/images/factory/workshop-1.webp",
      tags: isZh ? ["数控加工", "精密圆磨", "自主生产"] : ["CNC Machining", "Precision Grinding", "In-house Production"],
    },
    {
      title: isZh ? "材料与工艺技术" : "Materials & Process Expertise",
      description: isZh
        ? "提供 38CrMoAlA 氮化、42CrMo 高频淬火与硬铬电镀、PTA 双金属堆焊、SKD61 真空淬火及 9Cr18Mov 精密圆磨等方案。"
        : "Processes include 38CrMoAlA nitriding, 42CrMo induction hardening and chrome plating, PTA bimetallic cladding, SKD61 vacuum hardening and 9Cr18Mov precision grinding.",
      image: "/images/factory/workshop-2.webp",
      tags: isZh ? ["氮化处理", "真空淬火", "双金属堆焊"] : ["Nitriding", "Vacuum Hardening", "PTA Cladding"],
    },
    {
      title: isZh ? "全程品质控制" : "End-to-end Quality Control",
      description: isZh
        ? "对氮化层深度与硬度、镀铬层厚度、成品硬度、直线度和表面粗糙度等关键指标进行控制，保障长期稳定使用。"
        : "Key indicators including nitriding depth and hardness, chrome thickness, finished hardness, straightness and surface roughness are controlled for reliable long-term operation.",
      image: "/images/factory/workshop-3.webp",
      tags: isZh ? ["硬度检测", "直线度控制", "粗糙度控制"] : ["Hardness Testing", "Straightness", "Surface Roughness"],
    },
  ];

  const services = [
    { title: t("feature1Title"), description: t("feature1Desc") },
    { title: t("feature2Title"), description: t("feature2Desc") },
    { title: t("feature3Title"), description: t("feature3Desc") },
    { title: t("feature4Title"), description: t("feature4Desc") },
  ];

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden py-20 md:py-24">
        <Image
          src="/images/factory/workshop-1.webp"
          alt={isZh ? "伟达机械生产车间" : "Weida Machinery workshop"}
          fill
          priority
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/55" />
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">About Weida</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{t("about")}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            {isZh ? "以实力铸就信赖，以工艺成就卓越" : "Engineering Precision. Earning Trust."}
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-c-1390 grid-cols-2 px-4 md:grid-cols-4 md:px-8">
          {stats.map((item) => (
            <div key={item.label} className="border-r border-slate-100 px-4 py-7 last:border-r-0 md:px-7">
              <p className="text-2xl font-bold text-blue-700 md:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="relative overflow-hidden bg-slate-950 p-7 text-white md:p-9">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">Company Profile</p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                    {isZh ? "公司介绍" : "Company Introduction"}
                  </h2>
                  <p className="mt-4 max-w-sm text-base leading-7 text-white/65">
                    {isZh ? "专注品质 · 匠心制造" : "Dedicated to Quality, Crafted with Precision."}
                  </p>
                  <div className="mt-8 border-t border-white/15 pt-6">
                    <p className="text-sm font-semibold leading-6 text-white/90">{t("companyFullName")}</p>
                    <div className="mt-6 space-y-5">
                      {companyHighlights.map((item) => (
                        <div key={item.value} className="flex items-center gap-4">
                          <span className="w-20 shrink-0 text-xl font-bold text-blue-300">{item.value}</span>
                          <span className="border-l border-white/15 pl-4 text-sm leading-6 text-white/65">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-x-7 gap-y-8 p-7 sm:grid-cols-2 md:p-9">
                {companyParagraphs.map((paragraph, index) => (
                  <article key={paragraph}>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-bold text-blue-600">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="font-bold text-slate-900">{companyParagraphTitles[index]}</h3>
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{paragraph}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="strength" className="scroll-mt-28 bg-white py-14 md:py-18">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Manufacturing Strength</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{isZh ? "制造与品质实力" : "Manufacturing & Quality"}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {strengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Factory Tour</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">{isZh ? "车间实景" : "Inside Our Factory"}</h2>
            </div>
            <p className="text-sm text-slate-500">{workshopImages.length} {isZh ? "张实拍 · 点击可放大" : "photos · Click to enlarge"}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workshopImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveWorkshop(index)}
                className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-xl bg-slate-200 text-left"
                aria-label={`${isZh ? "放大车间图片" : "Enlarge workshop photo"} ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${isZh ? "伟达机械车间实景" : "Weida factory workshop"} ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-slate-950/65 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute bottom-3 right-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-800 opacity-0 backdrop-blur transition group-hover:opacity-100">
                  {isZh ? "放大" : "Enlarge"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">{isZh ? "专业服务" : "Professional Services"}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-sm font-bold text-blue-600">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ImageLightbox
        images={workshopImages}
        activeIndex={activeWorkshop}
        onChange={setActiveWorkshop}
        onClose={() => setActiveWorkshop(null)}
        title={isZh ? "伟达机械车间实景" : "Weida factory workshop"}
      />
    </main>
  );
};

export default AboutPage;
