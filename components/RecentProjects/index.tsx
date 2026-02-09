"use client";
import Image from "next/image";
import { useI18nStore } from "@/store/i18nStore";

const RecentProjects = () => {
  const { t } = useI18nStore();

  const projects = [
    {
      title: t("projects.category1"),
      image: "/images/legacy/project-1.jpg",
    },
    {
      title: t("projects.category2"),
      image: "/images/legacy/project-2.jpg",
    },
    {
      title: t("projects.category3"),
      image: "/images/legacy/project-3.jpg",
    },
  ];

  return (
    <div className="project_section py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("projects.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
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
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t("projects.seeMore")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
