"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/productsData";
import { useI18nStore } from "@/store/i18nStore";

const ProductDetailPage = () => {
  const { t, language } = useI18nStore();
  const params = useParams<{ id?: string | string[] }>();
  const productId = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const product = products.find((item) => item.id === productId);

  const getText = (text: { zh: string; en: string } | string | undefined | null): string => {
    if (!text) return '';
    if (typeof text === 'string') return text;
    return text[language] || text.zh || text.en || '';
  };



  if (!product) {
    return (
      <main className="bg-gray-50">
        <section className="bg-white py-10">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
            <Link
              href="/products"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              {t("productsBack")}
            </Link>
            <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-600">
              {t("noData")}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 mt-[80px]">
      <section className="bg-white py-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <Link
            href="/products"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            {t("productsBack")}
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={getText(product.title)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {getText(product.categoryName)}
              </div>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
                {getText(product.title)}
              </h1>

              {/* 规格参数 */}
              {product.specification && Object.keys(product.specification).length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-900">
                    {language === 'zh' ? '规格参数' : 'Specifications'}
                  </h2>
                  <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50">
                    <table className="w-full">
                      <tbody>
                        {(() => {
                          // 处理新格式: specification 是 {zh: {...}, en: {...}}
                          let specEntries: [string, string][] = [];
                          if (product.specification && typeof product.specification === 'object') {
                            if ('zh' in product.specification && typeof product.specification.zh === 'object') {
                              const langSpec = product.specification[language] || product.specification.zh || {};
                              specEntries = Object.entries(langSpec);
                            } else {
                              // 旧格式: 直接是 Record<string, string>
                              specEntries = Object.entries(product.specification as Record<string, string>);
                            }
                          }
                          return specEntries.map(([key, value]) => (
                            <tr key={key} className="border-t border-gray-200">
                              <td className="px-4 py-3 font-semibold text-gray-900 sm:w-1/3">
                                {key}
                              </td>
                              <td className="px-4 py-3 text-gray-700">
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

              {/* 材料与工艺 - 直接循环展示 */}
              {product.materials_and_processes && product.materials_and_processes.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-900">
                    {language === 'zh' ? '材料与工艺' : 'Materials and Processes'}
                  </h2>
                  <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50">
                    <table className="w-full">
                      <tbody>
                        {product.materials_and_processes.map((item, index) => {
                          const materialText = getText(item.material);
                          const processText = getText(item.process);

                          if (!materialText && !processText) return null;

                          return (
                            <tr key={index} className="border-t border-gray-200">
                              <td className="px-4 py-3 text-gray-700">
                                {processText}
                              </td>
                              <td className="px-4 py-3 font-semibold text-gray-900 sm:w-1/3">
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

export default ProductDetailPage;
