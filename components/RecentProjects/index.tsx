"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/productsData";
import { useI18nStore } from "@/store/i18nStore";

const RecentProjects = () => {
  const { t, language } = useI18nStore();
  const isZh = language === "zh";

  return (
    <section className="bg-slate-50 py-16 text-slate-900 lg:py-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Product Range</p>
            <h2 className="text-3xl font-bold md:text-4xl">{t("projects.title")}</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
            {t("projects.seeMore")} →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-white p-4">
                <Image
                  src={product.image}
                  alt={product.title[language]}
                  fill
                  className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="border-t border-slate-100 p-5">
                <h3 className="min-h-12 text-base font-bold leading-6 text-slate-900 group-hover:text-blue-700">
                  {product.title[language]}
                </h3>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  {product.gallery.length} {isZh ? "张产品图" : product.gallery.length === 1 ? "photo" : "photos"}
                  {product.models ? ` · ${product.models.length} ${isZh ? "组型号" : "models"}` : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
