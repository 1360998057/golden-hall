"use client";
import { useI18nStore } from "@/store/i18nStore";

const TestimonialSection = () => {
  const { t } = useI18nStore();

  return (
    <div className="testimonial_section py-16 lg:py-24 bg-[#030517] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            {t("testimonial.title")}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-md border border-white/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-md">
                  <div className="text-white text-5xl">👤</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-yellow-400 mb-4">
                  {t("testimonial.clientName")}
                </h4>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t("testimonial.content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
