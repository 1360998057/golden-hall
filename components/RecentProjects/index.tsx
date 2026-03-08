"use client";
import Image from "next/image";
import { useI18nStore } from "@/store/i18nStore";

const RecentProjects = () => {
  const { t } = useI18nStore();

  const projects = [
    {
      title: t("projects.category1"),
      image: "/images/挤出机螺杆.png",
    },
    {
      title: t("projects.category2"),
      image: "/images/注塑机螺杆.png",
    },
    {
      title: t("projects.category3"),
      image: "/images/注塑机螺杆.png",
    },
  ];

  return (
    <div className="project_section py-16 lg:py-24 bg-slate-50 text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            {t("projects.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-2 duration-300 border border-white/20"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="products"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primaryho transition-colors"
          >
            {t("projects.seeMore")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
