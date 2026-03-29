export interface I18nText {
  zh: string;
  en: string;
}

export interface ProductCategory {
  id: string;
  name: I18nText;
  icon?: string;
}

// 按螺杆种类分类的产品分类配置
export const productCategories: ProductCategory[] = [
  {
    id: "all",
    name: {
      zh: "全部产品",
      en: "All Products"
    },
    icon: "📦"
  },
  {
    id: "2",
    name: {
      zh: "注塑机螺杆/机筒",
      en: "Injection Molding Machine Screw/Barrel"
    },
    icon: "🔧"
  },
  {
    id: "3",
    name: {
      zh: "挤出机螺杆/机筒",
      en: "Extruder Screw/Barrel"
    },
    icon: "⚙️"
  },
  {
    id: "4",
    name: {
      zh: "平行双机筒/螺杆",
      en: "Parallel Twin Screw/Barrel"
    },
    icon: "🔄"
  },
  {
    id: "5",
    name: {
      zh: "锥形双机筒/螺杆",
      en: "Conical Twin Screw/Barrel"
    },
    icon: "🔺"
  },
  {
    id: "8",
    name: {
      zh: "橡胶机机筒/螺杆",
      en: "Rubber Machine Screw/Barrel"
    },
    icon: "🛞"
  },
  {
    id: "9",
    name: {
      zh: "造粒机螺杆/机筒",
      en: "Pelletizer Screw/Barrel"
    },
    icon: "🔩"
  },
  {
    id: "13",
    name: {
      zh: "不锈钢螺杆机筒",
      en: "Stainless Steel Screw & Barrel"
    },
    icon: "🛡️"
  }
];

// 获取分类名称的辅助函数
export const getCategoryName = (categoryId: string, language: 'zh' | 'en'): string => {
  const category = productCategories.find(cat => cat.id === categoryId);
  if (!category) return '';
  return category.name[language];
};

// 获取分类图标
export const getCategoryIcon = (categoryId: string): string => {
  const category = productCategories.find(cat => cat.id === categoryId);
  return category?.icon || '📦';
};