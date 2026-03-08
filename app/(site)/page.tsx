import { Metadata } from "next";
import Banner from "@/components/Banner";
import AboutFactory from "@/components/AboutFactory";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";

export async function generateMetadata(): Promise<Metadata> {
  // 从i18nStore获取当前语言的元数据
  const { getMetadata } = require('@/store/i18nStore').useI18nStore.getState();
  const metadata = getMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutFactory />
      <RecentProjects />
      <Contact />
    </main>
  );
}