"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/lib/productsData";
import { useI18nStore } from "@/store/i18nStore";
import ImageLightbox from "@/components/Common/ImageLightbox";

interface ProductDetailClientProps {
  product: ProductItem;
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const { language } = useI18nStore();
  const [activeImage, setActiveImage] = useState(product.image);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const isZh = language === "zh";
  const specifications = Object.entries(product.specification[language]);
  const hasExpansion = product.models?.some((model) => model.expansion);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-c-1390 px-4 py-8 md:px-8 md:py-12">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/products" className="font-medium text-blue-600 hover:text-blue-800">
            {isZh ? "产品中心" : "Products"}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="line-clamp-1">{product.categoryName[language]}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              aria-label={isZh ? "放大产品图片" : "Enlarge product image"}
            >
              <Image
                key={activeImage}
                src={activeImage}
                alt={product.title[language]}
                fill
                priority
                className="object-contain p-5 transition duration-300 group-hover:scale-[1.02] md:p-8"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                {isZh ? "点击放大" : "Click to enlarge"}
              </span>
            </button>
            {product.gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
                {product.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 bg-white transition ${
                      activeImage === image
                        ? "border-blue-600 ring-2 ring-blue-100"
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                    aria-label={`${isZh ? "查看第" : "View photo"} ${index + 1}`}
                    aria-pressed={activeImage === image}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-contain p-1.5"
                      sizes="120px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {product.categoryName[language]}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              {product.title[language]}
            </h1>
            <div className="mt-6 flex gap-6 border-y border-slate-100 py-4 text-sm text-slate-600">
              <span>
                <strong className="mr-1 text-xl text-slate-900">{product.gallery.length}</strong>
                {isZh ? "张产品图" : "photos"}
              </span>
              {product.models && (
                <span>
                  <strong className="mr-1 text-xl text-slate-900">{product.models.length}</strong>
                  {isZh ? "组型号参数" : "model rows"}
                </span>
              )}
              <span>
                <strong className="mr-1 text-xl text-slate-900">{product.materials_and_processes.length}</strong>
                {isZh ? "项材料工艺" : "processes"}
              </span>
            </div>
            <h2 className="mt-7 text-xl font-bold">{isZh ? "规格参数" : "Specifications"}</h2>
            <dl className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200">
              {specifications.map(([key, value]) => (
                <div key={key} className="grid gap-1 px-4 py-3 sm:grid-cols-[0.9fr_1.1fr] sm:gap-4">
                  <dt className="text-sm text-slate-500">{key}</dt>
                  <dd className="text-sm font-semibold leading-6 text-slate-800">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/#contact"
              className="mt-7 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              {isZh ? "咨询定制需求" : "Discuss Your Requirements"}
            </Link>
          </div>
        </section>

        {product.models && product.models.length > 0 && (
          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Model Data</p>
                <h2 className="mt-2 text-2xl font-bold">{isZh ? "适配设备型号" : "Compatible Equipment Models"}</h2>
              </div>
              <span className="text-sm text-slate-500">{product.models.length} {isZh ? "组数据" : "rows"}</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead className="bg-slate-100 text-sm text-slate-600">
                  <tr>
                    <th className="px-5 py-4 font-semibold">{isZh ? "适配设备型号" : "Model"}</th>
                    <th className="px-5 py-4 font-semibold">{isZh ? "螺杆直径" : "Screw Diameter"}</th>
                    <th className="px-5 py-4 font-semibold">{isZh ? "长径比" : "L/D Ratio"}</th>
                    {hasExpansion && <th className="px-5 py-4 font-semibold">{isZh ? "发泡倍率" : "Expansion Ratio"}</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.models.map((model, index) => (
                    <tr key={`${model.model}-${model.diameter}-${index}`} className="text-sm hover:bg-blue-50/50">
                      <td className="px-5 py-4 font-semibold text-blue-700">{model.model}</td>
                      <td className="px-5 py-4 font-medium">{model.diameter}</td>
                      <td className="px-5 py-4">{model.ratio}</td>
                      {hasExpansion && <td className="px-5 py-4">{model.expansion || "—"}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className="mt-12">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Materials & Heat Treatment</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">{isZh ? "材料与工艺" : "Materials & Processes"}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {product.materials_and_processes.map((item, index) => (
              <article
                key={`${item.material.en}-${index}`}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
                  product.materials_and_processes.length % 2 === 1 && index === product.materials_and_processes.length - 1
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.material[language]}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.process[language]}</p>
                  </div>
                </div>
                <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                  {Object.entries(item.parameters[language]).map(([key, value]) => (
                    <div key={key} className="rounded-xl bg-slate-50 p-4">
                      <dt className="text-xs leading-5 text-slate-500">{key}</dt>
                      <dd className="mt-1 font-semibold text-slate-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>
      </div>
      <ImageLightbox
        images={product.gallery}
        activeIndex={isLightboxOpen ? Math.max(0, product.gallery.indexOf(activeImage)) : null}
        onChange={(index) => setActiveImage(product.gallery[index])}
        onClose={() => setIsLightboxOpen(false)}
        title={product.title[language]}
      />
    </main>
  );
};

export default ProductDetailClient;
