import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";

const partners = [
  {
    name: "ARCHIV",
    logo: "/partners/full-logo-archv.png",
    darkInvert: false,
  },
  {
    name: "DDC RDC",
    logo: "/partners/DDC RDC-06.png",
    darkInvert: false,
  },
  {
    name: "Deep Learning Indaba",
    logo: "/partners/Deep-learning-Indaba.png",
    darkInvert: true,
  },
];

// 4 copies → animate -50% (= 2 sets) for a perfectly seamless loop
const loopPartners = [...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  const { t } = useLang();

  return (
    <section
      id="partners"
      className="py-20 sm:py-28 bg-white dark:bg-royal-900 afro-pattern transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-royal-700 dark:text-white mb-4 transition-colors duration-500">
            {t.partners.sectionTitle}
          </h2>
          <p className="text-silver-600 dark:text-silver-300 text-lg max-w-xl mx-auto transition-colors duration-500">
            {t.partners.sectionSubtitle}
          </p>
        </motion.div>

        {/* Marquee container — clips overflow, fades edges */}
        <div
          className="overflow-hidden relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="partners-track flex items-center">
            {loopPartners.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="group flex-shrink-0 mx-5 sm:mx-8"
              >
                <div className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl border border-silver-200 dark:border-royal-700/50 bg-silver-50 dark:bg-royal-800/30 hover:border-marmalade-300 dark:hover:border-marmalade-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`h-16 sm:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ${
                      partner.darkInvert ? "dark:brightness-0 dark:invert" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
