import { create } from "zustand";

type Language = "en" | "zh";

interface I18nState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getMetadata: () => { title: string; description: string };
}

// 国际化资源
const resources = {
  en: {
    // 导航菜单
    home: "Home",
    about: "About Us",
    products: "Products",
    news: "News",
    contact: "Contact",
    language: "Language",
    
    // 公司信息
    companyName: "Weida Machinery",
    companyFullName: "Zhoushan Weida Machinery Co., Ltd",
    companyDescription: "Professional manufacturer of barrel screws - Specializing in conical twin screws, parallel twin screws, single screws and comprehensive solutions",
    
    // Hero 区域
    heroTitle: "Professional Barrel Screw Manufacturing Expert",
    heroSubtitle: "Dedicated to conical twin screws, parallel twin screws, single screws and comprehensive solutions",
    heroButton: "Learn More",
    heroButton2: "Contact Us",
    
    // Banner 区域
    "banner.title": "Weida",
    "banner.subtitle": "Machinery",
    "banner.description": "A professional manufacturer of barrel screws focusing on conical twin screws, parallel twin screws, single screw extruders, injection machines, and more. High-quality products with ISO9001-2000 certification.",
    "banner.readMore": "Learn More",
    
    // Services 区域
    "services.title": "Our Services",
    "services.localSpecials": "Custom Design",
    "services.localSpecialsDesc": "Providing on-site mapping, design, transformation, and customization services to meet specific customer requirements with professional technical support.",
    "services.pistonPresser": "Professional Manufacturing",
    "services.pistonPresserDesc": "Specializing in conical twin screws, parallel twin screws, single screws made from 38CrMoALA alloy steel with long service life and excellent wear resistance.",
    "services.weldingIrons": "Repair & Maintenance",
    "services.weldingIronsDesc": "Expert repair services for various worn barrel screws and machine components, ensuring optimal performance and extended equipment lifespan.",
    
    // About Factory 区域
    "about.factoryTitle": "About Weida Machinery",
    "about.factoryDescription": "Zhoushan Weida Machinery Co., Ltd is a leading domestic manufacturer specializing in barrel screws. We focus on conical twin screws, parallel twin screws, single screw extruders, injection machines, rubber melting machines, and chemical fiber machines. Our products are made from 38CrMoALA alloy steel through quenching, tempering, nitriding, and polishing processes, featuring long service life, strong wear resistance, and excellent anti-corrosion performance. We strictly manage according to ISO9001-2000 quality system certification and adhere to the principle of 'contract honoring and promise keeping'.",
    "about.readMore": "Learn More",
    
    // Projects 区域
    "projects.title": "Product Categories",
    "projects.autoEngineering": "Barrel Screws Manufacturing",
    "projects.category1": "Injection Machine Screws",
    "projects.category2": "Extruder Screws",
    "projects.category3": "Parallel Twin Screws",
    "projects.seeMore": "View All Products",
    
    // Testimonial 区域
    "testimonial.title": "Quality Assurance",
    "testimonial.clientName": "ISO9001-2000 Certified",
    "testimonial.content": "We strictly manage according to ISO9001-2000 quality system certification. With high-precision production equipment, advanced technology, and integrated production lines, we have achieved remarkable progress in quality and technology, becoming an enterprise with excellent quality and reputation. We always adhere to survival by quality and development by integrity.",
    
    // 关于我们 - 4个特色模块
    feature1Title: "Professional Manufacturing",
    feature1Desc: "A professional manufacturer of barrel screws, focusing on: conical twin screws, parallel twin screws, single screws and other precision products",
    feature2Title: "Quality Assurance",
    feature2Desc: "Strictly managed according to ISO9001-2000 quality system certification, with high-precision production equipment and advanced technology",
    feature3Title: "Integrity Service",
    feature3Desc: "Following the principle of 'contract honoring and promise keeping', always adhering to survival by quality and development by integrity",
    feature4Title: "Comprehensive Service",
    feature4Desc: "Providing on-site mapping, design, transformation, customization and other services, and repairing various worn barrel screws",
    
    // 产品中心
    productsTitle: "Product Center",
    productsSubtitle: "High-quality barrel screw products",
    productsPageTitle: "Products",
    productsPageSubtitle: "Product categories and featured specifications",
    productsFilterAll: "All",
    productsCount: "Products:",
    productsBack: "Back to Products",
    productsDetailTitle: "Product Details",
    productsDetailEmpty: "No detailed specification available.",
    viewDetails: "View Details",
    allProducts: "All Products",
    
    // 新闻中心
    newsTitle: "News Center",
    companyNews: "Company News",
    industryNews: "Industry News",
    readMore: "Read More",
    
    // 联系我们
    contactTitle: "Contact Us",
    messageTitle: "Leave a Message",
    contactInfo: "Contact Information",
    formTitle: "Title",
    formName: "Name",
    formQQ: "QQ",
    formEmail: "Email",
    formTel: "Phone",
    formContent: "Message",
    formSubmit: "Submit Message",
    address: "Address",
    linkman: "Contact Person",
    tel: "Phone",
    fax: "Fax",
    email: "Email",
    
    // 页脚
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All Rights Reserved",
    
    // 其他
    currentPosition: "Current Position",
    more: "More",
    loading: "Loading...",
    noData: "No Data",
  },
  zh: {
    // 导航菜单
    home: "首页",
    about: "关于我们",
    products: "产品中心",
    news: "新闻中心",
    contact: "联系我们",
    language: "语言",
    
    // 公司信息
    companyName: "伟达机械",
    companyFullName: "舟山市伟达机械有限公司",
    companyDescription: "专业机筒螺杆制造商 - 致力于锥形双螺杆、平行双螺杆、单螺杆及综合解决方案",
    
    // Hero 区域
    heroTitle: "专业机筒螺杆制造专家",
    heroSubtitle: "致力于锥形双螺杆、平行双螺杆、单螺杆及综合解决方案",
    heroButton: "了解更多",
    heroButton2: "联系我们",
    
    // Banner 区域
    "banner.title": "伟达",
    "banner.subtitle": "机械",
    "banner.description": "舟山市伟达机械有限公司系国内专业制造机筒螺杆的重点骨干企业，专业致力于锥形双螺杆、平行双螺杆、单螺杆挤出机、注塑机等主要部件的专业生产，通过ISO9001-2000质量体系认证。",
    "banner.readMore": "了解更多",
    
    // Services 区域
    "services.title": "服务项目",
    "services.localSpecials": "定制设计",
    "services.localSpecialsDesc": "公司可为客户提供上门测绘、设计、改造、定制等多项服务，根据客户需求提供专业技术支持和解决方案。",
    "services.pistonPresser": "专业制造",
    "services.pistonPresserDesc": "专业致力于锥形双螺杆、平行双螺杆、单螺杆等产品，材料采用38CrMoALA合金钢，具有使用寿命长、耐磨性强、防腐性能好等优点。",
    "services.weldingIrons": "维修服务",
    "services.weldingIronsDesc": "对各种磨损机筒螺杆进行专业修复，提供全面的售后服务体系，确保设备最佳性能和使用寿命。",
    
    // About Factory 区域
    "about.factoryTitle": "关于伟达",
    "about.factoryDescription": "舟山市伟达机械有限公司系国内专业制造机筒螺杆的重点骨干企业，公司主要致力于：锥形双螺杆、平行双螺杆、单螺杆挤出机、注塑机、橡胶熔胶机、化纤机、发泡挤出机等主要部件的专业生产。材料采用38CrMoALA合金钢，经调质、定性、氮化、抛光等工艺精制而成，具有使用寿命长、耐磨性强、防腐性能好等优点。公司严格按照ISO9001-2000质量体系认证进行管理，并始终坚持以质量求生存，以诚信谋发展。",
    "about.readMore": "了解更多",
    
    // Projects 区域
    "projects.title": "产品分类",
    "projects.autoEngineering": "机筒螺杆制造",
    "projects.category1": "注塑机螺杆/机筒",
    "projects.category2": "挤出机螺杆/机筒",
    "projects.category3": "平行双机筒/螺杆",
    "projects.seeMore": "查看全部产品",
    
    // Testimonial 区域
    "testimonial.title": "品质保证",
    "testimonial.clientName": "ISO9001-2000质量认证",
    "testimonial.content": "公司严格按照ISO9001-2000质量体系认证进行管理，目前已拥有一套完善的质量保证及售后服务体系，同时借助高精密的生产设备，运用先进的工艺和一体化的流水作业，使公司在质量、技术方面均取得突飞猛进的飞跃，成为一家质量及信誉过硬的企业。始终坚持以质量求生存，以诚信谋发展。",
    
    // 关于我们 - 4个特色模块
    feature1Title: "专业制造",
    feature1Desc: "本公司系国内专业制造机筒螺杆的重点骨干企业，公司主要致力于：锥形双螺杆、平行双螺杆、单螺杆等精密产品",
    feature2Title: "质量保证",
    feature2Desc: "公司严格按照ISO9001-2000质量体系认证进行管理，高精密的生产设备先进的工艺和一体系的流水作业",
    feature3Title: "诚信服务",
    feature3Desc: "公司遵从'重合同、守信用'的宗旨，始终坚持以质量求生存，以诚信谋发展",
    feature4Title: "全面服务",
    feature4Desc: "本公司可为客户提供上门测绘、设计、改造、定制等多项服务，并对各种磨损机筒螺杆进行修复",
    
    // 产品中心
    productsTitle: "产品中心",
    productsSubtitle: "优质机筒螺杆产品",
    productsPageTitle: "产品中心",
    productsPageSubtitle: "产品分类与规格展示",
    productsFilterAll: "全部",
    productsCount: "产品数量：",
    productsBack: "返回产品列表",
    productsDetailTitle: "产品详情",
    productsDetailEmpty: "暂无详细规格说明。",
    viewDetails: "查看详情",
    allProducts: "全部产品",
    
    // 新闻中心
    newsTitle: "新闻中心",
    companyNews: "公司新闻",
    industryNews: "行业新闻",
    readMore: "阅读更多",
    
    // 联系我们
    contactTitle: "联系我们",
    messageTitle: "在线留言",
    contactInfo: "联系方式",
    formTitle: "标题",
    formName: "姓名",
    formQQ: "QQ",
    formEmail: "邮箱",
    formTel: "电话",
    formContent: "留言内容",
    formSubmit: "提交留言",
    address: "企业地址",
    linkman: "联系人",
    tel: "联系电话",
    fax: "企业传真",
    email: "电子信箱",
    
    // 页脚
    quickLinks: "快速链接",
    followUs: "关注我们",
    allRightsReserved: "版权所有",
    
    // 其他
    currentPosition: "当前位置",
    more: "更多",
    loading: "加载中...",
    noData: "暂无数据",
  },
};

export const useI18nStore = create<I18nState>((set, get) => ({
  language: "en", // 默认英文
  setLanguage: (lang: Language) => set({ language: lang }),
  t: (key: string) => {
    const { language } = get();
    const translation = resources[language][key as keyof typeof resources.en];
    return translation || key; // 如果没有找到对应翻译，返回原key
  },
  getMetadata: () => {
    const { language } = get();
    return {
      title: resources[language].companyName,
      description: resources[language].companyDescription,
    };
  },
}));
