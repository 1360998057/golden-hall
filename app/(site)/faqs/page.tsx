"use client";

import { useState } from "react";
import { useI18nStore } from "@/store/i18nStore";
import { AnimatePresence, motion } from "framer-motion";

const FAQsPage = () => {
  const { language } = useI18nStore();
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const isZh = language === "zh";

  // 平滑滚动到分类
  const scrollToCategory = (categoryIndex: number) => {
    setActiveCategory(categoryIndex);
    const element = document.getElementById(`faq-category-${categoryIndex}`);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // FAQ数据 - 从FAQSection组件迁移过来的完整内容
  const faqCategories = [
    {
      title: "Product Selection & Customization",
      titleZh: "产品选型与定制",
      faqs: [
        {
          question: "How do I choose the right screw model for my application?",
          questionZh: "如何为我的应用选择合适的螺杆型号？",
          answer:
            "Selection depends on load capacity, precision, speed, and environment. We recommend providing your technical requirements to our engineering team for expert assistance.",
          answerZh:
            "选型取决于负载能力、精度要求、运行速度和工作环境。建议您将技术需求告知我们的工程团队，以获取专家建议。",
        },
        {
          question: "Can you manufacture screws according to my drawings?",
          questionZh: "可以根据我的图纸加工螺杆吗？",
          answer:
            "Yes. We specialize in custom solutions and can process shaft ends, special pitches, and specific lengths based on your 2D (PDF/DWG) or 3D (STEP/IGS) drawings.",
          answerZh:
            "可以。我们擅长定制化方案，可根据您的2D (PDF/DWG) 或3D (STEP/IGS) 图纸进行轴端、特殊螺距及特定长度的加工。",
        },
        {
          question: "Do you provide CAD models before I place an order?",
          questionZh: "下单前可以提供 CAD 模型吗？",
          answer:
            "Certainly. We can provide 3D models (STEP, IGS, or SolidWorks) for your design verification before production starts.",
          answerZh:
            "当然可以。我们可以在生产开始前提供 3D 模型（STEP、IGS 或 SolidWorks 格式）供您的设计团队进行验证。",
        },
        {
          question: "What materials and surface treatments do you offer?",
          questionZh: "你们提供哪些材料和表面处理？",
          answer:
            "Our primary material is 38CrMoAl (Nitriding Steel). Other alloy steels are available upon request. To enhance durability, we offer Nitriding Treatment and Hard Chrome Plating.",
          answerZh:
            "我们的主要材料是 38CrMoAl（氮化钢）。如需其他合金钢，可根据要求提供。为提高耐用性，我们还提供氮化处理和镀硬铬。",
        },
      ],
    },
    {
      title: "Payment & Orders",
      titleZh: "付款与订单",
      faqs: [
        {
          question: "What are your standard payment terms?",
          questionZh: "标准付款方式是怎样的？",
          answer:
            "Typically, we require a 30% T/T deposit in advance, with remaining 70% balance paid before shipment.",
          answerZh: "通常我们要求预付 30% T/T 定金，剩余 70% 尾款在发货前付清。",
        },
        {
          question: "Do you accept sample orders? How can I pay?",
          questionZh: "接受样品订单吗？如何支付？",
          answer:
            "Yes. For small sample orders, we accept PayPal, Credit Card, or Alibaba Trade Assurance for faster and more secure transactions.",
          answerZh:
            "接受。对于小额样品订单，我们支持 PayPal、信用卡或阿里巴巴贸易保障，以确保交易更快速、安全。",
        },
        {
          question: "Is there a Minimum Order Quantity (MOQ)?",
          questionZh: "有起订量（MOQ）要求吗？",
          answer:
            "For customized products, it varies based on complexity—please consult our sales team for details.",
          answerZh: "对于定制产品，起订量根据复杂程度而定，请咨询销售人员。",
        },
      ],
    },
    {
      title: "Shipping & Logistics",
      titleZh: "运输与物流",
      faqs: [
        {
          question: "Which Incoterms do you usually support?",
          questionZh: "支持哪些贸易术语？",
          answer:
            "We primarily work with FOB, CIF, and EXW (if you have your own forwarder in China).",
          answerZh: "我们主要采用 FOB、CIF 和 EXW（如果您在中国有自己的货运代理）。",
        },
        {
          question:
            "How do you protect products from rust and damage during transit?",
          questionZh: "如何防止产品在运输过程中生锈或损坏？",
          answer:
            "Each screw is coated with anti-rust oil, sealed in plastic bag, and secured in a fumigation-free plywood case with shock-absorbing materials.",
          answerZh:
            "每根螺杆都会涂抹防锈油，使用塑料袋密封，并固定在装有缓冲材料的免熏蒸木箱中。",
        },
        {
          question: "What is typical lead time?",
          questionZh: "常规交期是多久？",
          answer:
            "Lead times depend on complexity and quantity of order. We will provide a confirmed delivery date upon receiving your formal order.",
          answerZh:
            "交期取决于订单的复杂程度和数量。我们将在收到正式订单后提供确切的交货日期。",
        },
      ],
    },
    {
      title: "After-Sales & Technical Support",
      titleZh: "售后与技术支持",
      faqs: [
        {
          question: "What is your warranty policy?",
          questionZh: "保修政策是怎样的？",
          answer:
            "Warranty terms vary by product type and operating environment. Specific details are outlined in each formal contract. In case of any issues, our team will provide timely evaluation and professional resolutions.",
          answerZh:
            "保修条款根据产品类型和使用环境而有所不同。具体细节将在正式合同中注明。如遇任何问题，我司团队将及时跟进评估并提供专业解决方案。",
        },
        {
          question: "What if package arrives damaged?",
          questionZh: "如果收到的包裹损坏了怎么办？",
          answer:
            "Please inspect goods upon arrival. If damaged, provide photos/videos within 48 hours. We will assist in investigation and find a resolution based on shipping terms.",
          answerZh:
            "请在到货时立即验货。如发现损坏，请在 48 小时内提供照片/视频。我们将根据运输条款协助调查并寻求解决方案。",
        },
        {
          question: "Do you offer technical support for installation?",
          questionZh: "你们提供安装技术支持吗？",
          answer:
            "Yes. We offer remote technical guidance via video calls or email to assist your team with assembly and troubleshooting.",
          answerZh:
            "是的。我们通过视频通话或电子邮件提供远程技术指导，协助您的团队进行组装和故障排除。",
        },
        {
          question: "How often should I lubricate screws?",
          questionZh: "螺杆多久润滑一次？",
          answer:
            "The maintenance cycle depends on environment, machine type, and duty cycle. We recommend a schedule based on your actual conditions. Contact our technical team for specific advice on grease types and intervals.",
          answerZh:
            "维护周期取决于使用环境、机器类型和工作频率。建议根据您的实际工况制定保养表。有关油脂类型和润滑间隔的具体建议，请联系我们的技术团队。",
        },
      ],
    },
  ];

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Hero Section - 重新设计 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 py-24 lg:py-32">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(251,191,36,0.05),rgba(59,130,246,0.05))]" />
        </div>
        
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
          
            
            <motion.h1 
              className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {isZh ? "FAQs" : "FAQs"}
            </motion.h1>
            
            <motion.p 
              className="mx-auto max-w-4xl text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {isZh
                ? "为您解答关于我们产品和服务的常见问题"
                : "Answers to common questions about our products and services"}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories - 重新设计 */}
      <section className="py-20 lg:py-28 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          {/* 分类标签 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category, index) => (
              <motion.button
                key={category.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-white border-amber-500 shadow-lg shadow-amber-200"
                    : "bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 text-slate-700 hover:from-amber-100 hover:to-amber-200 hover:border-amber-300 hover:text-amber-700"
                }`}
              >
                {isZh ? category.titleZh : category.title}
              </motion.button>
            ))}
          </div>

          <div className="space-y-6">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                id={`faq-category-${categoryIndex}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* 分类标题 */}
                <div className="p-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                      {String(categoryIndex + 1)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {isZh ? category.titleZh : category.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {category.faqs.length} {isZh ? "个问题" : "questions"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 问题列表 */}
                <div className="p-8 pt-6">
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const key = `${categoryIndex}-${faqIndex}`;
                      const isOpen = activeIndex === key;

                      return (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: faqIndex * 0.1 }}
                          className={`group rounded-2xl border transition-all duration-400 ${
                            isOpen 
                              ? 'bg-gradient-to-r from-amber-50 to-amber-100/50 border-amber-300 shadow-md' 
                              : 'bg-slate-50/50 border-slate-200/50 hover:bg-slate-100/50 hover:border-slate-300'
                          }`}
                        >
                          <button
                            onClick={() => setActiveIndex(isOpen ? null : key)}
                            className="w-full p-5 text-left flex items-center justify-between gap-4"
                          >
                            <div className="flex items-start gap-3 flex-1">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                isOpen 
                                  ? 'bg-amber-500 text-white' 
                                  : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                              }`}>
                                {String(faqIndex + 1)}
                              </div>
                              <p className={`font-medium leading-relaxed transition-all duration-300 ${
                                isOpen ? 'text-amber-900' : 'text-slate-800 group-hover:text-slate-900'
                              }`}>
                                {isZh ? faq.questionZh : faq.question}
                              </p>
                            </div>
                            
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-200/50 group-hover:bg-amber-200/50 flex items-center justify-center transition-all duration-300"
                            >
                              <svg className="w-4 h-4 text-slate-600 group-hover:text-amber-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-5">
                                  <div className="border-t border-amber-200/50 pt-4">
                                    <div className="flex items-start gap-3">
                                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                      </div>
                                      <p className="text-slate-700 leading-relaxed text-sm">
                                        {isZh ? category.faqs[faqIndex].answer : faq.answer}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            </motion.div>
            ))}
          </div>

          {/* Contact CTA - 重新设计 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-amber-300/20 to-amber-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-10 text-center shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isZh ? "还有其他问题？" : "Still have questions?"}
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                {isZh
                  ? "如果您没有找到所需的答案，欢迎随时联系我们的专业团队。"
                  : "If you didn't find the answer you need, feel free to contact our professional team."}
              </p>
              
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isZh ? "联系我们" : "Contact Us"}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 装饰性底部 */}
      <section className="py-16 bg-gradient-to-b from-white/30 to-slate-100/50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 text-center">
          <div className="flex justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">{isZh ? "专业团队" : "Expert Team"}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">{isZh ? "快速响应" : "Quick Response"}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">{isZh ? "贴心服务" : "Quality Service"}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQsPage;