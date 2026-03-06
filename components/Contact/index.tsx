"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useI18nStore } from "@/store/i18nStore";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { t } = useI18nStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    qq: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 显示成功提示
    toast.success(t("formSubmitSuccess") || "提交成功！我们会尽快回复您。");
    
    // 重置表单
    setFormData({
      name: "",
      email: "",
      phone: "",
      title: "",
      qq: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^1[3-9]\d{9}$/;
    return re.test(phone.replace(/\s/g, ""));
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#030517',
            color: '#fff',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#fbbf24',
              secondary: '#030517',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#030517',
            },
          },
        }}
      />
      
      <section id="contact" className="relative overflow-hidden bg-[#030517] px-4 py-20 md:px-8 2xl:px-0">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-yellow-400/5 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-yellow-400/3 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-c-1390 relative z-10">
          {/* 标题部分 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-yellow-400 md:text-5xl lg:text-6xl">
              {t("contactTitle")}
            </h2>
            <p className="mb-6 text-lg text-white/80 md:text-xl max-w-3xl mx-auto">
              {t("contactSubtitle") || "我们期待与您的合作，专业的团队随时为您提供优质服务"}
            </p>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 联系信息卡片 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t("contactInfo")}
                </h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white mb-1">{t("address")}</p>
                      <p className="text-white/80 leading-relaxed">浙江省舟山市定海区金塘镇西堠工业区金山路2号</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white mb-1">{t("tel")}</p>
                      <div className="space-y-1">
                        <p className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer">13906804052 <span className="text-sm text-white/60">(微信同号)</span></p>
                        <p className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer">13905808540 <span className="text-sm text-white/60">(徐先生)</span></p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white mb-1">{t("fax")}</p>
                      <p className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer">0580-8592328</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white mb-1">{t("email")}</p>
                      <p className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer">weidalg@163.com</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* 快速响应提示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white mb-1">快速响应承诺</h4>
                    <p className="text-white/80 text-sm">我们承诺在工作时间24小时内回复您的咨询</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 联系表单 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  {t("messageTitle")}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        {t("formName")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder={t("formNamePlaceholder") || "请输入您的姓名"}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        {t("formTitle")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder={t("formTitlePlaceholder") || "咨询主题"}
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        {t("formEmail")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder={t("formEmailPlaceholder") || "your@email.com"}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        {t("formTel")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder={t("formTelPlaceholder") || "请输入联系电话"}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      {t("formQQ")}
                    </label>
                    <input
                      type="text"
                      name="qq"
                      placeholder={t("formQQPlaceholder") || "选填：您的QQ号码"}
                      value={formData.qq}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      {t("formContent")} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder={t("formContentPlaceholder") || "请详细描述您的需求或问题..."}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                      required
                    />
                    <p className="text-white/60 text-sm mt-2">
                      {formData.message.length}/500 {t("characters")}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#030517] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {t("submitting") || "提交中..."}
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          {t("formSubmit")}
                        </>
                      )}
                    </button>
                  </motion.div>

                  <p className="text-white/60 text-sm text-center">
                    {t("privacyNotice") || "我们承诺保护您的隐私，您的信息将仅用于业务沟通"}
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
