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
    <div id="services" className="services_section py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("services.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Service Image */}
              <div
                className={`h-64 bg-gradient-to-br ${
                  index === 0
                    ? "from-blue-400 to-blue-600"
                    : index === 1
                    ? "from-orange-400 to-orange-600"
                    : "from-gray-400 to-gray-600"
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
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {service.title}
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">
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
