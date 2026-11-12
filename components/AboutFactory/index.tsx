"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18nStore } from "@/store/i18nStore";

const AboutFactory = () => {
  const { t, language } = useI18nStore();
  const isZh = language === "zh";

  return (
    <section id="about" className="bg-white py-16 text-slate-900 lg:py-20">
      <div className="mx-auto grid max-w-c-1390 gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
          <Image
            src="/images/factory/workshop-1.webp"
            alt={isZh ? "伟达机械生产车间" : "Weida Machinery production workshop"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
            <p className="text-3xl font-bold text-blue-700">1992</p>
            <p className="text-sm text-slate-600">{isZh ? "始于中国螺杆之都" : "Founded in China's Screw Capital"}</p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">About Weida</p>
          <h2 className="text-3xl font-bold md:text-4xl">{t("about.factoryTitle")}</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">{t("about.factoryDescription")}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-200 py-5">
            <div>
              <p className="text-2xl font-bold text-slate-900">{isZh ? "30+ 年" : "30+ Years"}</p>
              <p className="mt-1 text-sm text-slate-500">{isZh ? "专业制造经验" : "Manufacturing Experience"}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{isZh ? "8 大系列" : "8 Series"}</p>
              <p className="mt-1 text-sm text-slate-500">{isZh ? "螺杆机筒产品" : "Screw & Barrel Products"}</p>
            </div>
          </div>
          <Link
            href="/about"
            className="mt-7 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {t("about.readMore")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutFactory;
