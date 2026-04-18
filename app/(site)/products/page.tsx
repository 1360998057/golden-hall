"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/productsData";
import { useI18nStore } from "@/store/i18nStore";
import ProductCategoryFilter from "@/components/ProductCategoryFilter";
import { motion } from "framer-motion";




const ProductsPageContent = () => {
  const { t, language } = useI18nStore();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  // 确保客户端渲染
  useEffect(() => {
    setIsClient(true);
    // 从URL参数中获取分类
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

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

  // 筛选产品：按分类和搜索词
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // 按分类筛选
    if (activeCategory !== "all") {
      filtered = filtered.filter((item) => item.categoryId === activeCategory);
    }
    
    // 按搜索词筛选
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter((item) => {
        const title = getText(item.title).toLowerCase();
        const description = getText(item.description).toLowerCase();
        const categoryName = getText(item.categoryName).toLowerCase();
        return title.includes(term) || description.includes(term) || categoryName.includes(term);
      });
    }
    
    return filtered;
  }, [activeCategory, searchTerm, language]);





  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Hero Section - 重新设计 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 py-24 lg:py-32">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.05),rgba(251,191,36,0.05))]" />
        </div>
        
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700 tracking-wide">
                {isZh ? "工业实力" : "Industrial Strength"}
              </span>
            </motion.div> */}
            
            <motion.h1 
              className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {isZh ? "产品中心" : "Products"}
            </motion.h1>
            
            <motion.p 
              className="mx-auto max-w-4xl text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {isZh
                ? "提供高品质的机筒螺杆产品，满足您的各种需求"
                : "High-quality barrel and screw products to meet your various needs"}
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* Filters and Search - 重新设计 */}
      <section className="py-12 bg-white/60 backdrop-blur-sm border-b border-slate-200/50 relative z-[60]">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="flex flex-col xl:flex-row gap-8 items-center justify-between">
            {/* 左侧筛选区域 */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full xl:w-auto relative z-[70]">
              {/* 分类筛选 */}
              <div className="w-full sm:w-auto relative z-[999]">
                <ProductCategoryFilter
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  layout="dropdown"
                />
              </div>
              
              {/* 产品统计 */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/50 rounded-full border border-slate-200/50">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-sm font-medium text-slate-600">
                  {filteredProducts.length} {isZh ? "个产品" : "products"}
                </span>
              </div>
            </div>
            
            {/* 搜索框 - 重新设计 */}
            <div className="relative w-full lg:w-96">
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={isZh ? "搜索产品型号、规格或关键词..." : "Search models, specs, or keywords..."}
                  className="w-full rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 pl-14 pr-12 py-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-400 transition-all duration-300 shadow-sm"
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchTerm && (
                  <motion.button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>




      {/* Products Grid - 重新设计 */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-transparent to-white/30 relative z-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          {/* 网格布局 */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">




            {filteredProducts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative z-0"
              >
                <Link href={`/products/${item.id}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* 产品图片区域 */}
                    <div className="relative aspect-[4/3] bg-white overflow-hidden">
                      {item.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image}
                            alt={getText(item.title)}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />

                        </div>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                          <div className="text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm text-slate-400">No Image</p>
                          </div>
                        </div>
                      )}
                      
                      {/* 分类标签 */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm shadow-md">
                          {getText(item.categoryName)}
                        </span>
                      </div>

                      {/* 悬停时的查看详情按钮 */}
                      <motion.div 
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <div className="bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold">
                          <span>{t("viewDetails")}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* 产品信息区域 */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                          {getText(item.title)}
                        </h3>
                        <p className="text-slate-600 leading-relaxed line-clamp-3 text-sm">
                          {getText(item.description)}
                        </p>
                      </div>

                      {/* 底部信息 */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{isZh ? "详情" : "Details"}</span>
                        </div>
                        
                        <motion.div
                          className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300"
                          whileHover={{ rotate: 45 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* 空状态 */}
            {filteredProducts.length === 0 && (
              <motion.div 
                className="col-span-full text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {isZh ? "未找到相关产品" : "No products found"}
                </h3>
                <p className="text-slate-600 mb-6">
                  {isZh ? "尝试调整搜索关键词或筛选条件" : "Try adjusting your search terms or filters"}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors duration-300"
                >
                  {isZh ? "重置筛选" : "Reset Filters"}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

    </main>
  );
};

const ProductsPage = () => {
  return (
    <Suspense fallback={
      <main className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </main>
    }>
      <ProductsPageContent />
    </Suspense>
  );
};

export default ProductsPage;
