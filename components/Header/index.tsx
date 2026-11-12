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
  const [activeHash, setActiveHash] = useState("");
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const pathUrl = usePathname();

  const { language, setLanguage, t } = useI18nStore();

  useEffect(() => {
    document.title = t('companyName');
  }, [language, t]);

  useEffect(() => {
    const updateActiveHash = () => setActiveHash(window.location.hash);
    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    window.addEventListener("popstate", updateActiveHash);
    return () => {
      window.removeEventListener("hashchange", updateActiveHash);
      window.removeEventListener("popstate", updateActiveHash);
    };
  }, [pathUrl]);

  const isMenuActive = (path?: string) => {
    if (!path) return false;
    const [pathname, hash] = path.split("#");
    if (hash) {
      return pathUrl === pathname && activeHash === `#${hash}`;
    }
    if (pathname === "/products") {
      return pathUrl.startsWith("/products");
    }
    if (pathUrl !== pathname) return false;
    if (pathname === "/about" && activeHash === "#strength") return false;
    if (pathname === "/" && activeHash === "#contact") return false;
    return true;
  };

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [pathname, targetId] = href.split("#");
    if (!targetId || pathUrl !== pathname) return;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    e.preventDefault();
    const elementPosition = targetElement.getBoundingClientRect().top;
    window.scrollTo({
      top: elementPosition + window.scrollY - 96,
      behavior: "smooth",
    });
    window.history.pushState(null, "", href);
    setActiveHash(`#${targetId}`);
  };

  useEffect(() => {
    handleStickyMenu();
    window.addEventListener("scroll", handleStickyMenu, { passive: true });
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 ${
        stickyMenu
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-lg from-slate-900 to-slate-800 p-1.5 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/logo.png"
                alt={t('companyName')}
                width={240}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ">
            {menuData.map((menuItem) => (
              <div key={menuItem.id} className="group relative">
                {menuItem.submenu ? (
                  <>
                    <Link
                      href={menuItem.path || "/products"}
                      className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        isMenuActive(menuItem.path)
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                      }`}
                    >
                      <span>{language === "zh" ? menuItem.title : menuItem.titleEn}</span>
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[1000]">
                      <div className="bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-100 py-2 min-w-[200px] overflow-hidden">
                        {menuItem.submenu.map((item) => (
                          <Link
                            key={item.id}
                            href={item.path || "#"}
                            className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all"
                          >
                            {language === "zh" ? item.title : item.titleEn}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={menuItem.path || "/"}
                    onClick={(e) => {
                      if (menuItem.path?.includes('#')) {
                        scrollToAnchor(e, menuItem.path);
                      }
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      isMenuActive(menuItem.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-100"
                    }`}
                  >
                    {language === "zh" ? menuItem.title : menuItem.titleEn}
                  </Link>
                )}
              </div>
            ))}
          </nav>




          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300 rounded-lg transition-all hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {language === "en" ? "中文" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              {language === "en" ? "中" : "EN"}
            </button>
            <button
              aria-label="Toggle menu"
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-left ${navigationOpen ? "rotate-45" : ""}`} />
                <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${navigationOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-left ${navigationOpen ? "-rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-300 lg:hidden ${
            navigationOpen ? "mt-4 max-h-[75vh] overflow-y-auto" : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="rounded-2xl border border-slate-100 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-md">
            <ul className="space-y-1">
              {menuData.map((menuItem) => (
                <li key={menuItem.id}>
                  {menuItem.submenu ? (
                    <div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={menuItem.path || "/products"}
                          className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium ${
                            isMenuActive(menuItem.path)
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                          onClick={() => setNavigationOpen(false)}
                        >
                          {language === "zh" ? menuItem.title : menuItem.titleEn}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600"
                          aria-label={language === "zh" ? "展开产品分类" : "Toggle product categories"}
                          aria-expanded={mobileProductsOpen}
                        >
                          <svg
                            className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {mobileProductsOpen && (
                        <div className="ml-3 mt-1 space-y-1 border-l border-slate-200 pl-3">
                          {menuItem.submenu.map((item) => (
                            <Link
                              key={item.id}
                              href={item.path || "/products"}
                              className="block rounded-lg px-3 py-2 text-sm leading-5 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                              onClick={() => setNavigationOpen(false)}
                            >
                              {language === "zh" ? item.title : item.titleEn}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={menuItem.path || "/"}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isMenuActive(menuItem.path)
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                      }`}
                      onClick={(e) => {
                        if (menuItem.path?.includes("#")) {
                          scrollToAnchor(e, menuItem.path);
                        }
                        setNavigationOpen(false);
                      }}
                    >
                      {language === "zh" ? menuItem.title : menuItem.titleEn}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
