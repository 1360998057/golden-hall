export interface I18nText {
  zh: string;
  en: string;
}

export interface MaterialProcess {
  material: I18nText;
  process: I18nText;
  parameters: {
    zh: Record<string, string>;
    en: Record<string, string>;
  };
}

export interface ProductModel {
  model: string;
  diameter: string;
  ratio: string;
  expansion?: string;
}

export interface ProductItem {
  id: string;
  title: I18nText;
  categoryId: string;
  categoryName: I18nText;
  image: string;
  gallery: string[];
  date: string;
  description: I18nText;
  specification: {
    zh: Record<string, string>;
    en: Record<string, string>;
  };
  models?: ProductModel[];
  materials_and_processes: MaterialProcess[];
}

const gallery = (prefix: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `/images/products/catalog/${prefix}-${index + 1}.webp`,
  );

const coreProcesses: MaterialProcess[] = [
  {
    material: { zh: "38CrMoAlA", en: "38CrMoAlA" },
    process: { zh: "氮化处理", en: "Nitriding Treatment" },
    parameters: {
      zh: { "氮化层深度": "0.5–0.8 mm", "氮化层硬度": "HV ≥ 920" },
      en: { "Nitriding Depth": "0.5–0.8 mm", "Nitriding Hardness": "HV ≥ 920" },
    },
  },
  {
    material: { zh: "42CrMo", en: "42CrMo" },
    process: {
      zh: "高频淬火 + 硬铬电镀 / PTA 双金属合金堆焊 + 硬铬电镀",
      en: "Induction Hardening + Hard Chrome Plating / PTA Bimetallic Cladding + Hard Chrome Plating",
    },
    parameters: {
      zh: {
        "镀铬层硬度": "HV ≥ 800",
        "镀铬层厚度": "0.03–0.05 mm",
        "表面粗糙度": "Ra 0.2 μm",
      },
      en: {
        "Chrome Plating Hardness": "HV ≥ 800",
        "Chrome Layer Thickness": "0.03–0.05 mm",
        "Surface Roughness": "Ra 0.2 μm",
      },
    },
  },
  {
    material: { zh: "SKD61", en: "SKD61" },
    process: {
      zh: "调质处理 + 真空淬火整体硬化",
      en: "Quenched & Tempered + Vacuum Hardening",
    },
    parameters: {
      zh: {
        "硬度": "HRC 55–58",
        "直线度": "≤ 0.015 mm/m",
        "表面粗糙度": "Ra 0.4 μm",
      },
      en: {
        "Hardness": "HRC 55–58",
        "Straightness": "≤ 0.015 mm/m",
        "Surface Roughness": "Ra 0.4 μm",
      },
    },
  },
  {
    material: { zh: "9Cr18Mov", en: "9Cr18Mov" },
    process: {
      zh: "真空淬火 + CNC 圆磨",
      en: "Vacuum Hardening + CNC Cylindrical Grinding",
    },
    parameters: {
      zh: {
        "硬度": "HRC 50–55",
        "直线度": "≤ 0.015 mm/m",
        "表面粗糙度": "Ra 0.4 μm",
      },
      en: {
        "Hardness": "HRC 50–55",
        "Straightness": "≤ 0.015 mm/m",
        "Surface Roughness": "Ra 0.4 μm",
      },
    },
  },
  {
    material: { zh: "硬铬电镀", en: "Hard Chrome Plating" },
    process: { zh: "技术指标", en: "Technical Specifications" },
    parameters: {
      zh: { "镀铬层厚度": "0.05–0.10 mm", "镀铬层硬度": "HV ≥ 960" },
      en: { "Chrome Layer Thickness": "0.05–0.10 mm", "Chrome Layer Hardness": "HV ≥ 960" },
    },
  },
];

const twinProcesses = coreProcesses.slice(0, 4);
const emptyDescription = { zh: "", en: "" };

export const products: ProductItem[] = [
  {
    id: "epe-pearl-foam-sheet-extruder-screw",
    title: { zh: "EPE 珍珠棉发泡片材挤出机螺杆", en: "EPE Pearl Foam Sheet Extruder Screw" },
    categoryId: "epe-sheet",
    categoryName: { zh: "EPE 发泡片材螺杆", en: "EPE Foam Sheet Screw" },
    image: "/images/products/catalog/epe-sheet-1.webp",
    gallery: gallery("epe-sheet", 8),
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ90–Φ280 mm", "长径比": "55:1", "发泡倍率": "20–48", "适配型号": "EPE90–EPE280，共 10 款" },
      en: { "Screw Diameter": "Φ90–Φ280 mm", "L/D Ratio": "55:1", "Expansion Ratio": "20–48", "Compatible Models": "EPE90–EPE280, 10 models" },
    },
    models: [
      { model: "EPE90", diameter: "Φ90 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE105", diameter: "Φ105 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE120", diameter: "Φ120 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE135", diameter: "Φ135 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE150", diameter: "Φ150 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE180", diameter: "Φ180 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE200", diameter: "Φ200 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE220", diameter: "Φ220 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE250", diameter: "Φ250 mm", ratio: "55:1", expansion: "20–48" },
      { model: "EPE280", diameter: "Φ280 mm", ratio: "55:1", expansion: "20–48" },
    ],
    materials_and_processes: coreProcesses,
  },
  {
    id: "eps-foam-sheet-extruder-screw",
    title: { zh: "EPS 发泡片材挤出机螺杆", en: "EPS Foam Sheet Extruder Screw" },
    categoryId: "eps-sheet",
    categoryName: { zh: "EPS 发泡片材螺杆", en: "EPS Foam Sheet Screw" },
    image: "/images/products/catalog/eps-sheet-1.webp",
    gallery: gallery("eps-sheet", 5),
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ75/90–Φ180/200 mm", "长径比": "32:1", "发泡倍率": "10–20", "适配型号": "PS75/90–PS180/200，共 5 款" },
      en: { "Screw Diameter": "Φ75/90–Φ180/200 mm", "L/D Ratio": "32:1", "Expansion Ratio": "10–20", "Compatible Models": "PS75/90–PS180/200, 5 models" },
    },
    models: [
      { model: "PS75/90", diameter: "Φ75/90 mm", ratio: "32:1", expansion: "10–20" },
      { model: "PS105/120", diameter: "Φ105/120 mm", ratio: "32:1", expansion: "10–20" },
      { model: "PS110/130", diameter: "Φ110/130 mm", ratio: "32:1", expansion: "10–20" },
      { model: "PS135/150", diameter: "Φ135/150 mm", ratio: "32:1", expansion: "10–20" },
      { model: "PS180/200", diameter: "Φ180/200 mm", ratio: "32:1", expansion: "10–20" },
    ],
    materials_and_processes: coreProcesses,
  },
  {
    id: "epe-foam-net-extruder-screw",
    title: { zh: "EPE 发泡水果网套机挤出机螺杆", en: "EPE Foam Net Extruder Screw" },
    categoryId: "epe-net",
    categoryName: { zh: "EPE 水果网套螺杆", en: "EPE Foam Net Screw" },
    image: "/images/products/catalog/epe-net-1.webp",
    gallery: gallery("epe-net", 5),
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ60–Φ80 mm", "长径比": "55:1", "发泡倍率": "20–35", "适配型号": "EPE60–EPE80，共 4 款" },
      en: { "Screw Diameter": "Φ60–Φ80 mm", "L/D Ratio": "55:1", "Expansion Ratio": "20–35", "Compatible Models": "EPE60–EPE80, 4 models" },
    },
    models: [
      { model: "EPE60", diameter: "Φ60 mm", ratio: "55:1", expansion: "20–35" },
      { model: "EPE65", diameter: "Φ65 mm", ratio: "55:1", expansion: "20–35" },
      { model: "EPE75", diameter: "Φ75 mm", ratio: "55:1", expansion: "20–35" },
      { model: "EPE80", diameter: "Φ80 mm", ratio: "55:1", expansion: "20–35" },
    ],
    materials_and_processes: coreProcesses,
  },
  {
    id: "pe-blow-molding-screw",
    title: { zh: "PE 吹塑机螺杆", en: "PE Blow Molding Screw" },
    categoryId: "pe-blow",
    categoryName: { zh: "PE 吹塑机螺杆", en: "PE Blow Molding Screw" },
    image: "/images/products/catalog/pe-blow-1.webp",
    gallery: gallery("pe-blow", 12),
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ80–Φ125 mm", "长径比": "30:1–35:1", "适配设备": "500 L–10000 L+" },
      en: { "Screw Diameter": "Φ80–Φ125 mm", "L/D Ratio": "30:1–35:1", "Compatible Equipment": "500 L–10000 L+" },
    },
    models: [
      { model: "500L–2000L", diameter: "Φ80 mm", ratio: "30:1" },
      { model: "500L–2000L", diameter: "Φ90 mm", ratio: "30:1" },
      { model: "500L–2000L", diameter: "Φ90 mm", ratio: "32:1" },
      { model: "3000L–5000L", diameter: "Φ100 mm", ratio: "32:1" },
      { model: "3000L–5000L", diameter: "Φ110 mm", ratio: "32:1" },
      { model: "10000L+", diameter: "Φ125 mm", ratio: "35:1" },
    ],
    materials_and_processes: coreProcesses,
  },
  {
    id: "wire-cable-extrusion-screw",
    title: { zh: "电线电缆塑料挤出机螺杆", en: "Wire & Cable Extrusion Screw" },
    categoryId: "wire-cable",
    categoryName: { zh: "电线电缆挤出螺杆", en: "Wire & Cable Screw" },
    image: "/images/products/catalog/wire-cable-1.webp",
    gallery: gallery("wire-cable", 3),
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ60–Φ180 mm", "长径比": "28:1", "适配型号": "PVC60–PVC180，共 7 款" },
      en: { "Screw Diameter": "Φ60–Φ180 mm", "L/D Ratio": "28:1", "Compatible Models": "PVC60–PVC180, 7 models" },
    },
    models: [
      { model: "PVC60", diameter: "Φ60 mm", ratio: "28:1" },
      { model: "PVC65", diameter: "Φ65 mm", ratio: "28:1" },
      { model: "PVC80", diameter: "Φ80 mm", ratio: "28:1" },
      { model: "PVC90", diameter: "Φ90 mm", ratio: "28:1" },
      { model: "PVC120", diameter: "Φ120 mm", ratio: "28:1" },
      { model: "PVC150", diameter: "Φ150 mm", ratio: "28:1" },
      { model: "PVC180", diameter: "Φ180 mm", ratio: "28:1" },
    ],
    materials_and_processes: coreProcesses,
  },
  {
    id: "injection-molding-screws-barrels-accessories",
    title: { zh: "注塑机螺杆机筒及附件", en: "Injection Molding Screws, Barrels & Accessories" },
    categoryId: "injection",
    categoryName: { zh: "注塑机螺杆机筒及附件", en: "Injection Screws, Barrels & Accessories" },
    image: "/images/products/catalog/pe-blow-13.webp",
    gallery: ["/images/products/catalog/pe-blow-13.webp"],
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ20–Φ220 mm", "适用锁模力": "100–35,000 kN", "适用射胶量": "30–30,000 g" },
      en: { "Screw Diameter": "Φ20–Φ220 mm", "Applicable Clamping Force": "100–35,000 kN", "Injection Capacity": "30–30,000 g" },
    },
    materials_and_processes: coreProcesses,
  },
  {
    id: "conical-twin-screw-twin-bore-barrel",
    title: { zh: "锥形双螺杆与双孔料筒", en: "Conical Twin Screw & Twin-Bore Barrel" },
    categoryId: "conical-twin",
    categoryName: { zh: "锥形双螺杆与双孔料筒", en: "Conical Twin Screw & Barrel" },
    image: "/images/products/catalog/epe-sheet-9.webp",
    gallery: ["/images/products/catalog/epe-sheet-9.webp"],
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ45/90–Φ92/188 mm" },
      en: { "Screw Diameter": "Φ45/90–Φ92/188 mm" },
    },
    materials_and_processes: twinProcesses,
  },
  {
    id: "parallel-twin-screw-barrel",
    title: { zh: "平行（同、异向）双螺杆与机筒", en: "Parallel Twin Screw & Barrel (Co-rotating / Counter-rotating)" },
    categoryId: "parallel-twin",
    categoryName: { zh: "平行双螺杆与机筒", en: "Parallel Twin Screw & Barrel" },
    image: "/images/products/catalog/epe-sheet-10.webp",
    gallery: ["/images/products/catalog/epe-sheet-10.webp"],
    date: "",
    description: emptyDescription,
    specification: {
      zh: { "螺杆直径": "Φ45/2–Φ200/2 mm", "结构形式": "同向 / 异向" },
      en: { "Screw Diameter": "Φ45/2–Φ200/2 mm", "Configuration": "Co-rotating / Counter-rotating" },
    },
    materials_and_processes: twinProcesses,
  },
];
