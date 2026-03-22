"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18nStore } from "@/store/i18nStore";

const Footer = () => {
  const { t } = useI18nStore();
  return (
    <>
      <footer className="border-slate-300 border-t bg-slate-100 text-slate-800">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex justify-center">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top text-center max-w-lg"
              >
               

                <p className="mt-5 mb-10 text-slate-600">
                  {t("companyDescription")}
                </p>
              </motion.div>


            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="border-slate-300 flex flex-col flex-wrap items-center justify-center gap-5 border-t py-7 lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="/" className="hover:text-amber-600 text-slate-700">
                    {t("home")}
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-amber-600 text-slate-700">
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-amber-600 text-slate-700">
                    {t("products")}
                  </a>
                </li>
                <li>
                  <a href="/strength" className="hover:text-amber-600 text-slate-700">
                    {t("strength")}
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p className="text-slate-600">
                &copy; {new Date().getFullYear()} {t("companyName")}. {t("allRightsReserved")}
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            ></motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
