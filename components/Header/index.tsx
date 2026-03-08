"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { useI18nStore } from "@/store/i18nStore";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // 添加语言切换函数
  const { language, setLanguage, t } = useI18nStore();

  // 更新页面标题以匹配当前语言
  useEffect(() => {
    document.title = t('companyName');
  }, [language, t]);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    handleStickyMenu();
    window.addEventListener("scroll", handleStickyMenu, { passive: true });
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-99999 w-full border-b border-slate-300/60 bg-slate-100/90 py-6 backdrop-blur transition-all duration-300 ease-in-out ${
        stickyMenu ? "py-5! shadow-solid-2" : ""
      }`}
    >
      <div className="max-w-c-1390 relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            {/* <Image
              src="/images/logo/logo-dark.svg"
              alt={t('companyName')}
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt={t('companyName')}
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            /> */}
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-slate-800 delay-0 duration-200 ease-in-out ${
                    !navigationOpen ? "w-full! delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-slate-800 delay-150 duration-200 ease-in-out ${
                    !navigationOpen ? "w-full! delay-400" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-slate-800 delay-200 duration-200 ease-in-out ${
                    !navigationOpen ? "w-full! delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute top-0 left-2.5 block h-full w-0.5 rounded-sm bg-slate-800 delay-300 duration-200 ease-in-out ${
                    !navigationOpen ? "h-0! delay-0" : "h-full"
                  }`}
                ></span>
                <span
                  className={`absolute top-2.5 left-0 block h-0.5 w-full rounded-sm bg-slate-800 delay-400 duration-200 ease-in-out ${
                    !navigationOpen ? "h-0! delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar shadow-solid-5 visible! mt-4 h-auto max-h-[400px] rounded-md bg-slate-50/95 p-7.5 xl:h-auto xl:bg-transparent xl:p-0 xl:shadow-none border border-slate-300/70"
          }`}
        >
          <nav className="text-slate-800">
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <span className="hover:text-primary flex cursor-pointer items-center">
                        {language === "zh" ? menuItem.title : menuItem.titleEn || menuItem.title}
                      </span>

                      <ul className="dropdown">
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>
                              {language === "zh" ? item.title : item.titleEn || item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {language === "zh" ? menuItem.title : menuItem.titleEn || menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="hover:text-primary text-sm font-medium"
              aria-label={`Switch to ${language === "en" ? "Chinese" : "English"}`}
            >
              {language === "en" ? "中" : "EN"}
            </button>
            
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;