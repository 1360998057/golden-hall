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
    submenu: [
      {
        id: 31,
        title: "全部产品",
        titleEn: "All Products",
        path: "/products?category=all",
        newTab: false
      },
      {
        id: 32,
        title: "注塑机螺杆/机筒",
        titleEn: "Injection Molding Machine Screw/Barrel",
        path: "/products?category=2",
        newTab: false
      },
      {
        id: 33,
        title: "挤出机螺杆/机筒",
        titleEn: "Extruder Screw/Barrel",
        path: "/products?category=3",
        newTab: false
      },
      {
        id: 34,
        title: "平行双机筒/螺杆",
        titleEn: "Parallel Twin Screw/Barrel",
        path: "/products?category=4",
        newTab: false
      },
      {
        id: 35,
        title: "锥形双机筒/螺杆",
        titleEn: "Conical Twin Screw/Barrel",
        path: "/products?category=5",
        newTab: false
      },
      {
        id: 36,
        title: "橡胶机机筒/螺杆",
        titleEn: "Rubber Machine Screw/Barrel",
        path: "/products?category=8",
        newTab: false
      },
      {
        id: 37,
        title: "造粒机螺杆/机筒",
        titleEn: "Pelletizer Screw/Barrel",
        path: "/products?category=9",
        newTab: false
      },
      {
        id: 38,
        title: "不锈钢螺杆机筒",
        titleEn: "Stainless Steel Screw & Barrel",
        path: "/products?category=13",
        newTab: false
      }
    ]
  },
  {
    id: 4,
    title: "常见问题",
    titleEn: "FAQs",
    newTab: false,
    path: "/faqs",
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
