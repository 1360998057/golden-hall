"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/productsData";
import { useI18nStore } from "@/store/i18nStore";




const ProductsPage = () => {
  const { t, language } = useI18nStore();
  const [activeCategory, setActiveCategory] = useState<string>("all");


  const getText = (
    text?: { zh: string; en: string } | string | null,
  ): string => {
    if (!text) {
      return "";
    }
    if (typeof text === "string") {
      return text;
    }
    return text[language] || text.zh || text.en || "";
  };


  const isZh = language === "zh";



  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }
    return products.filter((item) => item.categoryId === activeCategory);
  }, [activeCategory]);





  return (
    <main className="bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#1f2937,_#0f172a_65%,_#020617_100%)] py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08),rgba(2,6,23,0.2))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-amber-400">
              {isZh ? "工业实力" : "Industrial Strength"}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {isZh ? "产品中心" : "Products"}
            </h1>
            <p className="mx-auto max-w-3xl text-base text-slate-300 md:text-lg">
              {isZh
                ? "提供高品质的机筒螺杆产品，满足您的各种需求"
                : "High-quality barrel and screw products to meet your various needs"}
            </p>
          </div>

        </div>
      </section>


      {/* Filters */}
     


      {/* Products Grid */}
      <section className="pb-16 mt-[20px]">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(148,163,184,0.12)]">
              {t("productsCount")}
              <span className="rounded-full border border-amber-400/60 bg-amber-400/10 px-3 py-1 text-sm font-bold text-amber-300">
                {filteredProducts.length}
              </span>
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">




            {filteredProducts.map((item) => (
              <div key={item.id}>


                <Link
                  href={`/products/${item.id}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[inset_0_1px_0_rgba(148,163,184,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60"
                >
                  <div className="relative aspect-[4/3] bg-slate-800">

                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={getText(item.title)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />


                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-500">
                        No Image
                      </div>

                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                      {getText(item.categoryName)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {getText(item.title)}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-3">
                      {getText(item.description)}
                    </p>

                    <div className="mt-4 text-sm font-semibold text-amber-300">
                      {t("viewDetails")}
                    </div>
                  </div>

                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default ProductsPage;
