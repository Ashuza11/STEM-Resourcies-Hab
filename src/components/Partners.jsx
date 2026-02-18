import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";

const partners = [
  {
    name: "ARCHIV",
    logo: "/partners/full-logo-archv.png",
  },
  {
    name: "DDC RDC",
    logo: "/partners/DDC RDC-06.png",
  },
  {
    name: "Deep Learning Indaba",
    logo: "/partners/Deep-learning-Indaba.png",
  },
];

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

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl border border-silver-200 dark:border-royal-700/50 bg-silver-50 dark:bg-royal-800/30 hover:border-marmalade-300 dark:hover:border-marmalade-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 sm:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* <span className="text-sm font-medium text-silver-500 dark:text-silver-400 group-hover:text-marmalade-500 dark:group-hover:text-marmalade-400 transition-colors duration-300">
                  {partner.name}
                </span> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
