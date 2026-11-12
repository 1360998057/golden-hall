import { Menu } from "@/types/menu";
import { productCategories } from "@/lib/productCategories";

const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    titleEn: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "关于我们",
    titleEn: "About Us",
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: "产品中心",
    titleEn: "Products",
    newTab: false,
    path: "/products",
    submenu: productCategories.map((category, index) => ({
      id: 30 + index,
      title: category.name.zh,
      titleEn: category.name.en,
      path: `/products?category=${category.id}`,
      newTab: false,
    })),
  },
  {
    id: 4,
    title: "公司实力",
    titleEn: "Strength",
    newTab: false,
    path: "/about#strength",
  },
  {
    id: 5,
    title: "常见问题",
    titleEn: "FAQs",
    newTab: false,
    path: "/faqs",
  },
  {
    id: 6,
    title: "联系我们",
    titleEn: "Contact",
    newTab: false,
    path: "/#contact",
  },
];

export default menuData;
