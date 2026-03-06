"use client";
import { useI18nStore } from "@/store/i18nStore";
import Image from "next/image";

const AboutFactory = () => {
  const { t } = useI18nStore();

  return (
    <div className="about_section py-16 lg:py-24 bg-[#030517] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              {t("about.factoryTitle")}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {t("about.factoryDescription")}
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-400 text-[#030517] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              {t("about.readMore")}
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg shadow-lg overflow-hidden relative">
              <Image
                src="/images/legacy/about.jpg"
                alt={t("about.factoryTitle")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFactory;
