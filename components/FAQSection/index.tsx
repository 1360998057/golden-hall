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
    title: "Products & Services",
    titleZh: "产品与服务",
    faqs: [
      {
        question: "What types of barrels and screws do you manufacture?",
        answer: "We manufacture conical twin screws, parallel twin screws, single screws, and various types of barrels suitable for plastic extrusion and injection molding machines."
      },
      {
        question: "What materials do you use for your products?",
        answer: "We use high-quality materials such as 38CrMoAlA, SKD61, W6Mo5Cr4V2, and other specialized alloys with various surface treatments including nitriding, quenching, and coating."
      },
      {
        question: "Do you provide customized solutions?",
        answer: "Yes, we offer customized design and manufacturing services based on customer requirements, including special specifications, materials, and surface treatments."
      }
    ]
  },
  {
    title: "Quality & Certification",
    titleZh: "质量与认证",
    faqs: [
      {
        question: "Are your products ISO certified?",
        answer: "Yes, we are ISO9001:2000 certified and follow strict quality control processes throughout manufacturing."
      },
      {
        question: "How do you ensure product quality?",
        answer: "We have comprehensive quality control systems, including material inspection, process monitoring, and final product testing with advanced equipment."
      },
      {
        question: "What is your quality guarantee?",
        answer: "We provide quality guarantees for all our products and offer after-sales support, including technical assistance and replacement if needed."
      }
    ]
  },
  {
    title: "Technical Support",
    titleZh: "技术支持",
    faqs: [
      {
        question: "Do you provide technical support?",
        answer: "Yes, we have a dedicated technical support team to assist with installation, operation, and maintenance guidance."
      },
      {
        question: "What is your typical delivery time?",
        answer: "Standard products usually take 15-30 days, while customized orders may take 30-60 days depending on specifications."
      },
      {
        question: "Do you offer on-site services?",
        answer: "Yes, we provide on-site surveying, installation guidance, and maintenance services for our customers."
      }
    ]
  }
];

const faqDataZh: FAQCategory[] = [
  {
    title: "Products & Services",
    titleZh: "产品与服务",
    faqs: [
      {
        question: "你们生产什么类型的机筒螺杆？",
        answer: "我们生产锥形双螺杆、平行双螺杆、单螺杆以及各种类型的机筒，适用于塑料挤出和注塑机。"
      },
      {
        question: "你们的产品使用什么材料？",
        answer: "我们使用38CrMoAlA、SKD61、W6Mo5Cr4V2等高质量材料，提供氮化、淬火、电镀等各种表面处理。"
      },
      {
        question: "你们提供定制服务吗？",
        answer: "是的，我们根据客户需求提供定制设计和制造服务，包括特殊规格、材料和表面处理。"
      }
    ]
  },
  {
    title: "Quality & Certification",
    titleZh: "质量与认证",
    faqs: [
      {
        question: "你们的产品有ISO认证吗？",
        answer: "是的，我们通过了ISO9001:2000认证，在整个制造过程中遵循严格的质量控制流程。"
      },
      {
        question: "你们如何确保产品质量？",
        answer: "我们有完善的质量控制系统，包括材料检验、过程监控和成品测试，配备先进的检测设备。"
      },
      {
        question: "你们的质保政策是什么？",
        answer: "我们为所有产品提供质量保证，并包括售后支持，如技术指导和必要时的更换服务。"
      }
    ]
  },
  {
    title: "Technical Support",
    titleZh: "技术支持",
    faqs: [
      {
        question: "你们提供技术支持吗？",
        answer: "是的，我们有专业的技术支持团队，协助客户进行安装、操作和维护指导。"
      },
      {
        question: "你们的交货期一般是多久？",
        answer: "标准产品通常需要15-30天，定制订单根据规格需要30-60天。"
      },
      {
        question: "你们提供上门服务吗？",
        answer: "是的，我们为客户提供上门测绘、安装指导和维护服务。"
      }
    ]
  }
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
    <section className="bg-slate-100 py-16 lg:py-24">
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
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {isZh ? "常见问题解答" : "Frequently Asked Questions"}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            {isZh
              ? "以下是我们客户最常咨询的问题及解答"
              : "Below are most common questions and answers from our customers"}
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
              className="rounded-2xl border border-slate-300 bg-slate-50 p-6 shadow-lg md:p-8"
            >
              <h3 className="mb-6 border-b border-slate-300 pb-4 text-xl font-bold text-slate-900 md:text-2xl">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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
                      className="overflow-hidden rounded-xl border border-slate-300 transition-all duration-300 hover:border-blue-400"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="flex w-full items-center justify-between bg-slate-100 p-4 text-left transition-colors hover:bg-slate-200 md:p-5"
                      >
                        <span className="pr-4 font-semibold text-gray-800">
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
                            <div className="border-t border-slate-300 bg-slate-50 p-4 md:p-5">
                              <p className="text-gray-600 leading-relaxed">
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