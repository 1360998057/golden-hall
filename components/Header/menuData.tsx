import { Menu } from "@/types/menu";

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
    titleEn: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: "产品中心",
    titleEn: "Products",
    newTab: false,
    path: "/products",
  },
  {
    id: 4,
    title: "公司实力",
    titleEn: "Strength",
    newTab: false,
    path: "/strength",
  },
  {
    id: 5,
    title: "联系我们",
    titleEn: "Contact",
    newTab: false,
    path: "/#contact",
  },
];

export default menuData;
