"use client";

import Image from "next/image";
import { useI18nStore } from "@/store/i18nStore";

const StrengthPage = () => {
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
      value: "30+ Years",
    },
    {
      label: { zh: "生产基地", en: "Manufacturing Base" },
      value: "15 亩 / 10,000㎡",
    },
    {
      label: { zh: "年产规模", en: "Annual Output" },
      value: "数千套 / Thousands",
    },
  ];

  const sections = [
    {
      title: {
        zh: "历史与积淀：30载匠心传承",
        en: "History & Legacy: 30 Years of Craftsmanship",
      },
      desc: {
        zh: "1992年创立于“中国螺杆之都”舟山，伟达机械拥有15亩（10,000平方米）自持生产基地。凭借30余年的制造底蕴，我们已从行业先锋成长为机筒螺杆领域的资深专家。深厚的技术积淀，为高性能挤出设备提供了必不可少的稳定性和技术韧性。",
        en: "Founded in 1992 in Zhoushan, China’s \"Screw Capital,\" Weida Machinery operates from a self-owned 15-mu (10,000 sqm) manufacturing base. With over 30 years of heritage, we have evolved from a local pioneer into a leading specialist in screw barrel engineering. Our deep-rooted expertise ensures the technical resilience and long-term stability required for high-performance extrusion machinery.",
      },
      highlights: {
        zh: ["30+ 年制造底蕴", "15 亩自持生产基地", "高性能挤出稳定性"],
        en: [
          "30+ years heritage",
          "15-mu self-owned base",
          "Stability for high-performance extrusion",
        ],
      },
      image: "/images/products/20130604142748169.jpg",
      alt: {
        zh: "公司厂区全景",
        en: "Factory panorama",
      },
    },
    {
      title: {
        zh: "规模与产能",
        en: "Scale & Capacity",
      },
      desc: {
        zh: "伟达机械以稳健的产能与可靠的交付记录见证实力。我们保持着每年数千套精密组件的稳定产出节奏，确保品质始终如一。作为众多行业领先企业的长期合作伙伴，我们为全球市场提供了稳固的供应链保障。我们致力于为您提供最值得信赖的生产基石。",
        en: "Weida Machinery is defined by consistent production and a proven track record of reliable delivery. With an annual output of thousands of precision sets, we maintain a stable manufacturing rhythm that ensures quality never fluctuates. As a long-term partner for diverse industry leaders, we provide the supply chain security required for global markets, offering a dependable foundation for your continuous production.",
      },
      highlights: {
        zh: ["年产数千套", "稳定交付记录", "全球供应链保障"],
        en: [
          "Thousands of sets annually",
          "Reliable delivery record",
          "Global supply chain security",
        ],
      },
      image: "/images/products/20130604145110461.jpg",
      alt: {
        zh: "车间生产场景",
        en: "Workshop production",
      },
    },
    {
      title: {
        zh: "团队与经验",
        en: "Team & Expertise",
      },
      desc: {
        zh: "资深工程师团队拥有30年行业经验，尤其精于PS及PE发泡挤出领域。我们擅长定制化生产——只需提供图纸，即可交付精准的工程方案。通过优化材质与结构，我们为您解决加工难题，实现投资回报最大化。",
        en: "Our veteran engineers offer 30 years of specialized know-how, particularly in PS and PE foam extruders. We excel in bespoke manufacturing—provide your drawings, and we deliver precision-engineered solutions. We optimize screw geometry and metallurgy to solve complex processing challenges, ensuring high performance and a maximized ROI for our global partners.",
      },
      highlights: {
        zh: ["30 年工程经验", "PS/PE 发泡专长", "按图定制解决方案"],
        en: [
          "30 years engineering experience",
          "PS/PE foam expertise",
          "Custom solutions from drawings",
        ],
      },
      image: "/images/products/20130604142922486.jpg",
      alt: {
        zh: "工程师检测现场",
        en: "Engineer inspection",
      },
    },
    {
      title: {
        zh: "设备与工艺",
        en: "Technology & Precision",
      },
      desc: {
        zh: "伟达的卓越品质源于严苛的公差控制与卓越的加工工艺。我们通过先进的数控设备确保每个部件的精准对齐，从而最大化塑化效率与熔体均化效果。结合优质耐磨合金材质，我们保障了机器持久的使用寿命与稳定的产能输出。在伟达，精密是我们的底线标准，确保每一件产品在高速生产中表现出色。",
        en: "Engineering excellence at Weida is defined by precise tolerance control and superior processing. Our advanced CNC facilities ensure the exact alignment of every rotor, maximizing plasticizing efficiency and melt homogeneity. By integrating premium wear-resistant alloys, we guarantee exceptional longevity and consistent output. At Weida, precision is our baseline, ensuring every component delivers peak performance in high-speed production.",
      },
      highlights: {
        zh: ["严苛公差控制", "数控设备对齐", "耐磨合金保障"],
        en: [
          "Strict tolerance control",
          "CNC alignment precision",
          "Wear-resistant alloys",
        ],
      },
      image: "/images/products/20130604144408162.jpg",
      alt: {
        zh: "精密加工设备",
        en: "Precision machining",
      },
    },
  ];


  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#1f2937,_#0f172a_65%,_#020617_100%)] py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08),rgba(2,6,23,0.2))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-amber-400">
              {language === "zh" ? "工业实力" : "Industrial Strength"}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {t("strength")}
            </h1>
            <p className="mx-auto max-w-3xl text-base text-slate-300 md:text-lg">
              {language === "zh"
                ? "以实力铸就信赖，以工艺成就卓越"
                : "Powering trust with precision and proven capability"}
            </p>
          </div>
        </div>
      </section>


      <section className="py-14 lg:py-18">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_40px_rgba(2,6,23,0.6)] backdrop-blur lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[inset_0_1px_0_rgba(148,163,184,0.15)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {getText(item.label)}
                </p>
                <p className="mt-3 text-2xl font-bold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


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
                <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-[1px] shadow-[0_0_40px_rgba(2,6,23,0.7)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-800">
                    <Image
                      src={section.image}
                      alt={getText(section.alt)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-[inset_0_1px_0_rgba(148,163,184,0.12)]">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                      {index + 1}
                    </span>
                    {language === "zh" ? "核心优势" : "Key Strength"}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                    {getText(section.title)}
                  </h2>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    {getText(section.desc)}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {section.highlights[language].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200"
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


    </main>
  );
};

export default StrengthPage;
