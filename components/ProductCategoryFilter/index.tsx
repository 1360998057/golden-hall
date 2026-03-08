"use client";

import { useState } from "react";
import { useI18nStore } from "@/store/i18nStore";
import { productCategories, getCategoryName } from "@/lib/productCategories";

interface ProductCategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  layout?: "dropdown" | "sidebar";
}

const ProductCategoryFilter = ({ 
  activeCategory, 
  onCategoryChange, 
  layout = "dropdown" 
}: ProductCategoryFilterProps) => {
  const { language } = useI18nStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const currentCategoryName = activeCategory === "all" 
    ? (language === "zh" ? "全部产品" : "All Products")
    : getCategoryName(activeCategory, language as 'zh' | 'en');

  // 下拉菜单布局
  if (layout === "dropdown") {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full md:w-80 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-4 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300"
        >
          <div className="flex items-center">
            <span className="text-slate-900 font-medium">
              {currentCategoryName}
            </span>
          </div>
          <svg 
            className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white/95 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-2xl overflow-hidden">
            <div className="max-h-96 overflow-y-auto">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 transition-all duration-300 ${
                    activeCategory === category.id ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700' : ''
                  }`}
                >
                  <span className="text-slate-800">
                    {category.name[language as 'zh' | 'en']}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 侧边栏布局
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 shadow-lg">
      <h3 className="text-lg font-bold text-slate-900 mb-4">
        {language === "zh" ? "产品分类" : "Product Categories"}
      </h3>
      <div className="space-y-2">
        {productCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
              activeCategory === category.id 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'hover:bg-blue-50 text-slate-800 border border-slate-300 hover:border-blue-300'
            }`}
          >
            <span className="font-medium">
              {category.name[language as 'zh' | 'en']}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryFilter;