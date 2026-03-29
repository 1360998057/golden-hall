"use client";
import { useI18nStore } from "@/store/i18nStore";
import Image from "next/image";

const AboutFactory = () => {
  const { t } = useI18nStore();

  return (
    <div id="about" className="about_section py-16 lg:py-24 bg-slate-50 text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t("about.factoryTitle")}
            </h2>
            <p className="text-black/80 text-lg leading-relaxed mb-8">
              {t("about.factoryDescription")}
            </p>
            <a
              href="/about"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primaryho transition-colors"
            >
              {t("about.readMore")}
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg shadow-lg overflow-hidden relative h-auto">
              <Image
                src="/images/banner-bg.png"
                alt={t("about.factoryTitle")}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFactory;
