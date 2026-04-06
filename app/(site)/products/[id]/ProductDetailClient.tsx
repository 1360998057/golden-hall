"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18nStore } from "@/store/i18nStore";
import { ProductItem } from "@/lib/productsData";

interface ProductDetailClientProps {
  product: ProductItem;
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const { t, language } = useI18nStore();

  const getText = (text: { zh: string; en: string } | string | undefined | null): string => {
    if (!text) return '';
    if (typeof text === 'string') return text;
    return text[language] || text.zh || text.en || '';
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && product.id) {
        window.sessionStorage.setItem("lastRoute", `/products/${product.id}`);
      }
    };
  }, [product.id]);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 mt-[80px]">
      <section className="py-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <Link
            href="/products"
            className="text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            {t("productsBack")}
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-[1px] shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={getText(product.title)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-slate-400">
                    No Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                {getText(product.categoryName)}
              </div>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                {getText(product.title)}
              </h1>

              {/* 规格参数 */}
              {product.specification && Object.keys(product.specification).length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-slate-900">
                    {language === 'zh' ? '规格参数' : 'Specifications'}
                  </h2>
                  <div className="mt-4 rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm">
                    <table className="w-full">
                      <tbody>
                        {(() => {
                          let specEntries: [string, string][] = [];
                          if (product.specification && typeof product.specification === 'object') {
                            if ('zh' in product.specification && typeof product.specification.zh === 'object') {
                              const langSpec = product.specification[language] || product.specification.zh || {};
                              specEntries = Object.entries(langSpec);
                            } else {
                              specEntries = Object.entries(product.specification as Record<string, string>);
                            }
                          }
                          return specEntries.map(([key, value]) => (
                            <tr key={key}>
                              <td className="px-4 py-3 font-semibold text-slate-700 sm:w-1/3">
                                {key}
                              </td>
                              <td className="px-4 py-3 text-slate-600">
                                {value}
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 材料与工艺 */}
              {product.materials_and_processes && product.materials_and_processes.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-slate-900">
                    {language === 'zh' ? '材料与工艺' : 'Materials and Processes'}
                  </h2>
                  <div className="mt-4 rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm">
                    <table className="w-full">
                      <tbody>
                        {product.materials_and_processes.map((item, index) => {
                          const materialText = getText(item.material);
                          const processText = getText(item.process);

                          if (!materialText && !processText) return null;

                          return (
                            <tr key={index}>
                              <td className="px-4 py-3 text-slate-600">
                                {processText}
                              </td>
                              <td className="px-4 py-3 font-semibold text-slate-700 sm:w-1/3">
                                {materialText}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailClient;
