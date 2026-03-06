"use client";
import { useI18nStore } from "@/store/i18nStore";

const Services = () => {
  const { t } = useI18nStore();

  const services = [
    {
      title: t("services.localSpecials"),
      description: t("services.localSpecialsDesc"),
      image: "image_1",
      active: false,
    },
    {
      title: t("services.pistonPresser"),
      description: t("services.pistonPresserDesc"),
      image: "image_2",
      active: true,
    },
    {
      title: t("services.weldingIrons"),
      description: t("services.weldingIronsDesc"),
      image: "image_3",
      active: false,
    },
  ];

  return (
    <div id="services" className="services_section py-16 lg:py-24 bg-[#030517] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            {t("services.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-white/20"
            >
              {/* Service Image */}
              <div
                className={`h-64 bg-gradient-to-br ${
                  index === 0
                    ? "from-yellow-500 to-yellow-600"
                    : index === 1
                    ? "from-yellow-500 to-yellow-600"
                    : "from-yellow-400 to-yellow-500"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {index === 0 ? "⚙️" : index === 1 ? "🔧" : "⚡"}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-4">
                  <button
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                      service.active
                        ? "bg-yellow-400 text-[#030517]"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {service.title}
                  </button>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
