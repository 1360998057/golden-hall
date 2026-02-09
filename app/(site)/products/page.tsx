"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  products } from "@/lib/productsData";
import { useI18nStore } from "@/store/i18nStore";



const ProductsPage = () => {
  const { t, language } = useI18nStore();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const pathname = usePathname();
  const controls = useAnimationControls();

  const getText = (text: { zh: string; en: string }) =>
    text[language] || text.zh || text.en;

  const isZh = language === "zh";


  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }
    return products.filter((item) => item.categoryId === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    controls.set("hidden");
    const id = requestAnimationFrame(() => {
      controls.start("show");
    });
    return () => cancelAnimationFrame(id);
  }, [controls, pathname, activeCategory]);


  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {isZh ? "产品中心" : "Products"}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              {isZh
                ? "提供高品质的机筒螺杆产品，满足您的各种需求"
                : "High-quality barrel and screw products to meet your various needs"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
     


      {/* Products Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="mb-6 text-sm text-gray-500 text-center">
            {t("productsCount")} {filteredProducts.length}
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
          >

            {filteredProducts.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
              >
                <Link
                  href={`/products/${item.id}`}
                  className="block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] bg-gray-100">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={getText(item.title)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />

                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {getText(item.categoryName)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {getText(item.title)}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {getText(item.description)}
                    </p>

                    <div className="mt-4 text-sm font-semibold text-blue-600">
                      {t("viewDetails")}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default ProductsPage;
