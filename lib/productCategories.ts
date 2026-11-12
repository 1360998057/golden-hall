import { products } from "@/lib/productsData";
import type { I18nText } from "@/lib/productsData";

export interface ProductCategory {
  id: string;
  name: I18nText;
}

export const productCategories: ProductCategory[] = [
  {
    id: "all",
    name: { zh: "全部产品", en: "All Products" },
  },
  ...products.map((product) => ({
    id: product.categoryId,
    name: product.categoryName,
  })),
];

export const getCategoryName = (
  categoryId: string,
  language: "zh" | "en",
): string => {
  const category = productCategories.find((item) => item.id === categoryId);
  return category?.name[language] || category?.name.zh || "";
};
