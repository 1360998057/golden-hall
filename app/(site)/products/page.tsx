"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/productsData";
import { productCategories } from "@/lib/productCategories";
import { useI18nStore } from "@/store/i18nStore";
import ProductCategoryFilter from "@/components/ProductCategoryFilter";

const ProductsPageContent = () => {
  const { language } = useI18nStore();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const isZh = language === "zh";

  useEffect(() => {
    const category = searchParams.get("category");
    setActiveCategory(
      category && productCategories.some((item) => item.id === category)
        ? category
        : "all",
    );
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLocaleLowerCase();
    return products.filter((item) => {
      if (activeCategory !== "all" && item.categoryId !== activeCategory) {
        return false;
      }
      if (!term) return true;

      const searchable = [
        item.title[language],
        item.categoryName[language],
        ...Object.entries(item.specification[language]).flat(),
        ...(item.models?.flatMap((model) => [
          model.model,
          model.diameter,
          model.ratio,
        ]) || []),
      ]
        .join(" ")
        .toLocaleLowerCase();
      return searchable.includes(term);
    });
  }, [activeCategory, language, searchTerm]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32">
        <Image
          src="/images/factory/workshop-6.webp"
          alt={isZh ? "伟达机械生产设备" : "Weida Machinery production equipment"}
          fill
          priority
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/55" />
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Weida Machinery
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {isZh ? "产品中心" : "Products"}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            {isZh
              ? "8 大产品系列，完整展示适配型号、规格参数、材料工艺与产品实拍。"
              : "Eight product series with complete model tables, specifications, material processes and product galleries."}
          </p>
        </div>
      </section>

      <section className="sticky top-[80px] z-40 border-b border-slate-200 bg-white/95 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-c-1390 flex-col gap-4 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <ProductCategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <span className="whitespace-nowrap text-sm font-medium text-slate-500">
              {filteredProducts.length} {isZh ? "个产品" : filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>
          <label className="relative block w-full lg:max-w-md">
            <span className="sr-only">{isZh ? "搜索产品" : "Search products"}</span>
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={isZh ? "搜索产品、型号、直径或长径比" : "Search products, models, diameters or ratios"}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-10 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-slate-400 hover:text-slate-700"
                aria-label={isZh ? "清空搜索" : "Clear search"}
              >
                ×
              </button>
            )}
          </label>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-slate-200"
          >
            {filteredProducts.map((item, index) => {
              const specifications = Object.entries(item.specification[language]);
              return (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group grid gap-6 border-b border-slate-200 py-8 transition-colors hover:bg-white md:grid-cols-[260px_1fr] lg:grid-cols-[340px_1fr] lg:gap-10"
                >
                  <div className="relative h-60 overflow-hidden rounded-xl bg-white md:h-64">
                    <Image
                      src={item.image}
                      alt={item.title[language]}
                      fill
                      className="object-contain p-3 transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 340px"
                    />
                    <span className="absolute bottom-2 right-2 rounded-full bg-slate-900/70 px-2.5 py-1 text-xs font-medium text-white">
                      {item.gallery.length} {isZh ? "张图" : item.gallery.length === 1 ? "photo" : "photos"}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                          {String(index + 1).padStart(2, "0")} · {item.categoryName[language]}
                        </p>
                        <h2 className="mt-2 text-xl font-bold leading-7 text-slate-900 transition group-hover:text-blue-700 md:text-2xl">
                          {item.title[language]}
                        </h2>
                      </div>
                      <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-blue-600 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white sm:flex" aria-hidden="true">
                        →
                      </span>
                    </div>
                    <dl className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {specifications.map(([key, value]) => (
                        <div key={key} className="border-l-2 border-slate-200 pl-3 transition group-hover:border-blue-200">
                          <dt className="text-xs text-slate-500">{key}</dt>
                          <dd className="mt-1 text-sm font-semibold leading-6 text-slate-800">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="mr-1 text-xs font-medium text-slate-500">{isZh ? "材料工艺" : "Processes"}</span>
                      {item.materials_and_processes.map((process, processIndex) => (
                        <span key={`${process.material.en}-${processIndex}`} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {process.material[language]}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm font-semibold text-blue-600">
                      {isZh ? "查看型号与工艺" : "View models & processes"}
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
              <h2 className="text-xl font-bold">{isZh ? "未找到相关产品" : "No products found"}</h2>
              <p className="mt-2 text-slate-500">{isZh ? "请尝试其他关键词或产品分类。" : "Try another keyword or category."}</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {isZh ? "重置筛选" : "Reset filters"}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const ProductsPage = () => (
  <Suspense fallback={<main className="min-h-screen bg-slate-50" />}>
    <ProductsPageContent />
  </Suspense>
);

export default ProductsPage;
