"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  titleZh: string;
  faqs: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    title: "Product Selection & Customization",
    titleZh: "产品选型与定制",
    faqs: [
      {
        question: "How do I choose the right screw model for my application?",
        answer:
          "Selection depends on load capacity, precision, speed, and environment. We recommend providing your technical requirements to our engineering team for expert assistance.",
      },
      {
        question: "Can you manufacture screws according to my drawings?",
        answer:
          "Yes. We specialize in custom solutions and can process shaft ends, special pitches, and specific lengths based on your 2D (PDF/DWG) or 3D (STEP/IGS) drawings.",
      },
      {
        question: "Do you provide CAD models before I place an order?",
        answer:
          "Certainly. We can provide 3D models (STEP, IGS, or SolidWorks) for your design verification before production starts.",
      },
      {
        question: "What materials and surface treatments do you offer?",
        answer:
          "Our primary material is 38CrMoAl (Nitriding Steel). Other alloy steels are available upon request. To enhance durability, we offer Nitriding Treatment and Hard Chrome Plating.",
      },
    ],
  },
  {
    title: "Payment & Orders",
    titleZh: "付款与订单",
    faqs: [
      {
        question: "What are your standard payment terms?",
        answer:
          "Typically, we require a 30% T/T deposit in advance, with the remaining 70% balance paid before shipment.",
      },
      {
        question: "Do you accept sample orders? How can I pay?",
        answer:
          "Yes. For small sample orders, we accept PayPal, Credit Card, or Alibaba Trade Assurance for faster and more secure transactions.",
      },
      {
        question: "Is there a Minimum Order Quantity (MOQ)?",
        answer:
          "For customized products, it varies based on complexity—please consult our sales team for details.",
      },
    ],
  },
  {
    title: "Shipping & Logistics",
    titleZh: "运输与物流",
    faqs: [
      {
        question: "Which Incoterms do you usually support?",
        answer:
          "We primarily work with FOB, CIF, and EXW (if you have your own forwarder in China).",
      },
      {
        question:
          "How do you protect products from rust and damage during transit?",
        answer:
          "Each screw is coated with anti-rust oil, sealed in plastic bag, and secured in a fumigation-free plywood case with shock-absorbing materials.",
      },
      {
        question: "What is the typical lead time?",
        answer:
          "Lead times depend on the complexity and quantity of the order. We will provide a confirmed delivery date upon receiving your formal order.",
      },
    ],
  },
  {
    title: "After-Sales & Technical Support",
    titleZh: "售后与技术支持",
    faqs: [
      {
        question: "What is your warranty policy?",
        answer:
          "Warranty terms vary by product type and operating environment. Specific details are outlined in each formal contract. In case of any issues, our team will provide timely evaluation and professional resolutions.",
      },
      {
        question: "What if the package arrives damaged?",
        answer:
          "Please inspect the goods upon arrival. If damaged, provide photos/videos within 48 hours. We will assist in the investigation and find a resolution based on the shipping terms.",
      },
      {
        question: "Do you offer technical support for installation?",
        answer:
          "Yes. We offer remote technical guidance via video calls or email to assist your team with assembly and troubleshooting.",
      },
      {
        question: "How often should I lubricate the screws?",
        answer:
          "The maintenance cycle depends on the environment, machine type, and duty cycle. We recommend a schedule based on your actual conditions. Contact our technical team for specific advice on grease types and intervals.",
      },
    ],
  },
];

const faqDataZh: FAQCategory[] = [
  {
    title: "Product Selection & Customization",
    titleZh: "产品选型与定制",
    faqs: [
      {
        question: "如何为我的应用选择合适的螺杆型号？",
        answer:
          "选型取决于负载能力、精度要求、运行速度和工作环境。建议您将技术需求告知我们的工程团队，以获取专家建议。",
      },
      {
        question: "可以根据我的图纸加工螺杆吗？",
        answer:
          "可以。我们擅长定制化方案，可根据您的2D (PDF/DWG) 或3D (STEP/IGS) 图纸进行轴端、特殊螺距及特定长度的加工。",
      },
      {
        question: "下单前可以提供 CAD 模型吗？",
        answer:
          "当然可以。我们可以在生产开始前提供 3D 模型（STEP、IGS 或 SolidWorks 格式）供您的设计团队进行验证。",
      },
      {
        question: "你们提供哪些材料和表面处理？",
        answer:
          "我们的主要材料是 38CrMoAl（氮化钢）。如需其他合金钢，可根据要求提供。为提高耐用性，我们还提供氮化处理和镀硬铬。",
      },
    ],
  },
  {
    title: "Payment & Orders",
    titleZh: "付款与订单",
    faqs: [
      {
        question: "标准付款方式是怎样的？",
        answer: "通常我们要求预付 30% T/T 定金，剩余 70% 尾款在发货前付清。",
      },
      {
        question: "接受样品订单吗？如何支付？",
        answer:
          "接受。对于小额样品订单，我们支持 PayPal、信用卡或阿里巴巴贸易保障，以确保交易更快速、安全。",
      },
      {
        question: "有起订量（MOQ）要求吗？",
        answer: "对于定制产品，起订量根据复杂程度而定，请咨询销售人员。",
      },
    ],
  },
  {
    title: "Shipping & Logistics",
    titleZh: "运输与物流",
    faqs: [
      {
        question: "支持哪些贸易术语？",
        answer: "我们主要采用 FOB、CIF 和 EXW（如果您在中国有自己的货运代理）。",
      },
      {
        question: "如何防止产品在运输过程中生锈或损坏？",
        answer:
          "每根螺杆都会涂抹防锈油，使用塑料袋密封，并固定在装有缓冲材料的免熏蒸木箱中。",
      },
      {
        question: "常规交期是多久？",
        answer:
          "交期取决于订单的复杂程度和数量。我们将在收到正式订单后提供确切的交货日期。",
      },
    ],
  },
  {
    title: "After-Sales & Technical Support",
    titleZh: "售后与技术支持",
    faqs: [
      {
        question: "保修政策是怎样的？",
        answer:
          "保修条款根据产品类型和使用环境而有所不同。具体细节将在正式合同中注明。如遇任何问题，我司团队将及时跟进评估并提供专业解决方案。",
      },
      {
        question: "如果收到的包裹损坏了怎么办？",
        answer:
          "请在到货时立即验货。如发现损坏，请在 48 小时内提供照片/视频。我们将根据运输条款协助调查并寻求解决方案。",
      },
      {
        question: "你们提供安装技术支持吗？",
        answer:
          "是的。我们通过视频通话或电子邮件提供远程技术指导，协助您的团队进行组装和故障排除。",
      },
      {
        question: "螺杆多久润滑一次？",
        answer:
          "维护周期取决于使用环境、机器类型和工作频率。建议根据您的实际工况制定保养表。有关油脂类型和润滑间隔的具体建议，请联系我们的技术团队。",
      },
    ],
  },
];

const FAQSection = () => {
  const { language } = useI18nStore();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const isZh = language === "zh";
  const data = isZh ? faqDataZh : faqData;

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-amber-400">
            {isZh ? "技术支持" : "Technical Support"}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {isZh ? "常见问题解答" : "Frequently Asked Questions"}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            {isZh
              ? "以下是我们客户最常咨询的问题及解答"
              : "Below are the most common questions and answers from our customers"}
          </p>
        </motion.div>


        <div className="space-y-8">
          {data.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-[inset_0_1px_0_rgba(148,163,184,0.12)] md:p-8"

            >
              <h3 className="mb-6 border-b border-slate-800 pb-4 text-xl font-bold text-white md:text-2xl">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  {isZh ? category.titleZh : category.title}
                </span>
              </h3>


              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={key}
                      className="overflow-hidden rounded-xl border border-slate-800 transition-all duration-300 hover:border-amber-400/70"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="flex w-full items-center justify-between bg-slate-900/70 p-4 text-left transition-colors hover:bg-slate-900 md:p-5"
                      >
                        <span className="pr-4 font-semibold text-slate-100">
                          <span className="mr-2 text-amber-400">
                            Q{faqIndex + 1}:
                          </span>
                          {faq.question}
                        </span>
                        <span
                          className={`flex-shrink-0 transform text-amber-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >

                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="border-t border-slate-800 bg-slate-900/80 p-4 md:p-5">
                              <p className="text-slate-300 leading-relaxed">
                                <span className="mr-2 font-semibold text-amber-400">
                                  {isZh ? "答:" : "A:"}
                                </span>
                                {faq.answer}
                              </p>
                            </div>

                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
