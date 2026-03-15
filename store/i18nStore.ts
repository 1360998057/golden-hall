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
    strength: "Strength",
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
    

    
    // About Factory 区域
    "about.factoryTitle": "About Weida",
    "about.factoryDescription": "Since 1992, Weida Machinery specializes in custom extruder and injection screws, notably PS/PE foam. We deliver precision-engineered, cost-effective solutions to clients across Asia, Africa, and the Middle East.",
    "about.readMore": "Learn More",
    
    // About Us 详细介绍
    "about.detailedDescription": "Zhoushan Weida Machinery, founded in 1992 in Zhoushan China's 'Screw Capital' , specializes in high-performance extruder and injection screws, particularly for PS and PE foam extruders. With 30+ years of expertise, our veteran technical team manages full in-house production to ensure superior durability and wear resistance. We deliver precision-engineered, cost-effective bespoke solutions to partners across Asia, Africa, and the Middle East, tailored strictly to your technical drawings and production needs.",
    
    // Projects 区域
    "projects.title": "Product Categories",
    "projects.autoEngineering": "Barrel Screws Manufacturing",
    "projects.category1": "Injection Machine Screws",
    "projects.category2": "Extruder Screws",
    "projects.category3": "Parallel Twin Screws",
    "projects.seeMore": "View All Products",
    

    
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
    
    // FAQs
    faqsTitle: "FAQs",
    faqsSubtitle: "Frequently Asked Questions",
    
    // 联系我们
    contactTitle: "Contact Us",
    contactSubtitle: "We look forward to cooperating with you, our professional team is always ready to provide you with quality service",
    messageTitle: "Online Message",
    contactInfo: "Contact Information",
    formTitle: "Subject",
    formTitlePlaceholder: "Enter subject",
    formName: "Name",
    formNamePlaceholder: "Your Name",

    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formTel: "Phone",
    formTelPlaceholder: "Please enter contact phone",
    formContent: "Message",
    formContentPlaceholder: "Please describe your requirements or questions in detail...",
    formSubmit: "Submit Message",
    formSubmitSuccess: "Submitted successfully! We will reply to you as soon as possible.",
    submitting: "Submitting...",
    characters: "characters",
    privacyNotice: "We promise to protect your privacy, your information will only be used for business communication",
    quickResponseCommitment: "Quick Response Commitment",
    quickResponseDesc: "We promise to reply to your inquiry within 24 hours during working hours",
    address: "Address",
    linkman: "Contact Person",
    tel: "Phone",
    fax: "Fax",
    email: "Email",
    
    // 页脚
    followUs: "Follow Us",
    allRightsReserved: "All Rights Reserved",
    
    // 其他
    currentPosition: "Current Position",
    more: "More",
    loading: "Loading...",
    noData: "No Data",
    clickToCopy: "Click to copy",
    copied: "copied to clipboard",
  },
  zh: {
    // 导航菜单
    home: "首页",
    about: "关于我们",
    products: "产品中心",
    strength: "公司实力",
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
    

    
    // About Factory 区域
    "about.factoryTitle": "关于伟达",
    "about.factoryDescription": "自1992年以来，伟达机械专注于定制挤出机和注塑螺杆，特别是PS/PE泡沫。我们为亚洲、非洲和中东的客户提供精密工程、高性价比的解决方案。",
    "about.readMore": "了解更多",
    
    // About Us 详细介绍
    "about.detailedDescription": "舟山市伟达机械有限公司，1992年创立于中国'螺杆之都'舟山，专注于高性能挤出机和注塑机螺杆，特别是在PS和PE发泡挤出机领域。凭借30多年的专业经验，我们的资深技术团队管理全面自主生产，确保卓越的耐用性和耐磨性。我们为亚洲、非洲和中东的合作伙伴提供精密工程、高性价比的定制解决方案，严格按照您的技术图纸和生产需求量身定制。",
    
    // Projects 区域
    "projects.title": "产品分类",
    "projects.autoEngineering": "机筒螺杆制造",
    "projects.category1": "注塑机螺杆/机筒",
    "projects.category2": "挤出机螺杆/机筒",
    "projects.category3": "平行双机筒/螺杆",
    "projects.seeMore": "查看全部产品",
    

    
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
    
    // FAQs
    faqsTitle: "常见问题",
    faqsSubtitle: "常见问题解答",
    
    // 联系我们
    contactTitle: "联系我们",
    contactSubtitle: "我们期待与您的合作，专业的团队随时为您提供优质服务",
    messageTitle: "在线留言",
    contactInfo: "联系方式",
    formTitle: "主题",
    formTitlePlaceholder: "输入主题",
    formName: "姓名",
    formNamePlaceholder: "请输入您的姓名",

    formEmail: "邮箱",
    formEmailPlaceholder: "your@email.com",
    formTel: "电话",
    formTelPlaceholder: "请输入联系电话",
    formContent: "留言内容",
    formContentPlaceholder: "请详细描述您的需求或问题...",
    formSubmit: "提交留言",
    formSubmitSuccess: "提交成功！我们会尽快回复您。",
    submitting: "提交中...",
    characters: "字符",
    privacyNotice: "我们承诺保护您的隐私，您的信息将仅用于业务沟通",
    quickResponseCommitment: "快速响应承诺",
    quickResponseDesc: "我们承诺在工作时间24小时内回复您的咨询",
    address: "企业地址",
    linkman: "联系人",
    tel: "联系电话",
    fax: "企业传真",
    email: "电子信箱",
    
    // 页脚
    followUs: "关注我们",
    allRightsReserved: "版权所有",
    
    // 其他
    currentPosition: "当前位置",
    more: "更多",
    loading: "加载中...",
    noData: "暂无数据",
    clickToCopy: "点击复制",
    copied: "已复制到剪贴板",
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
