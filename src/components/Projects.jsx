import { motion } from "motion/react";
import {
  Smartphone,
  WifiOff,
  Globe,
  CheckCircle2,
  ExternalLink,
  Headphones,
  Users,
  Search,
  BookOpen,
  BrainCircuit,
  Sparkles,
  MessageSquare,
  GraduationCap,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";

function BongoLab({ t }) {
  const project = t.projects.bongoLab;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative rounded-2xl bg-white dark:bg-royal-800/50 border border-silver-200 dark:border-royal-700/50 overflow-hidden transition-colors duration-500">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content */}
          <div className="p-8 sm:p-10 lg:p-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-royal-100 dark:bg-royal-700/40 text-royal-600 dark:text-royal-200 mb-4 transition-colors duration-500">
              {project.tag}
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-royal-700 dark:text-white mb-4 transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-silver-600 dark:text-silver-300 text-lg leading-relaxed mb-6 transition-colors duration-500">
              {project.description}
            </p>

            <ul className="space-y-3 mb-8">
              {project.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-silver-700 dark:text-silver-300 transition-colors duration-500"
                >
                  <CheckCircle2
                    size={18}
                    className="text-marmalade-500 mt-0.5 shrink-0"
                  />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: WifiOff, label: "Offline-first" },
                { icon: Smartphone, label: "Low-end Android" },
                { icon: Globe, label: "PWA" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-silver-100 dark:bg-royal-700/40 text-silver-700 dark:text-silver-300 transition-colors duration-500"
                >
                  <Icon size={14} />
                  {label}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-white bg-gradient-to-r from-royal-500 to-royal-600 hover:from-royal-400 hover:to-royal-500 shadow-lg shadow-royal-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              {project.cta}
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Phone Mockup with Video */}
          <div className="flex items-center justify-center p-8 sm:p-10 lg:p-12 bg-silver-100 dark:bg-royal-800 transition-colors duration-500">
            <div className="phone-mockup w-full max-w-[280px]">
              <div className="phone-screen bg-black aspect-[9/16] relative">
                <video
                  src="/STEM-RH-BG-VIDEO.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Innovation Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-6 rounded-2xl bg-gradient-to-br from-royal-50 to-marmalade-50 dark:from-royal-800/80 dark:to-royal-800/40 border border-royal-200/60 dark:border-royal-700/50 p-8 sm:p-10 transition-colors duration-500"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-500 to-marmalade-500 flex items-center justify-center">
            <BrainCircuit size={24} className="text-white" />
          </div>
          <h4 className="font-display font-bold text-xl sm:text-2xl text-royal-700 dark:text-white transition-colors duration-500">
            {project.ai.title}
          </h4>
        </div>

        <p className="text-silver-600 dark:text-silver-300 leading-relaxed mb-8 max-w-2xl transition-colors duration-500">
          {project.ai.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.ai.features.map((feat, i) => {
            const icons = [MessageSquare, Sparkles, GraduationCap, Globe];
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/80 dark:bg-royal-800/60 border border-silver-200 dark:border-royal-700/30 transition-colors duration-500"
              >
                <Icon
                  size={20}
                  className="text-marmalade-500 mt-0.5 shrink-0"
                />
                <span className="text-sm text-silver-700 dark:text-silver-300 transition-colors duration-500">
                  {feat}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Ntina({ t }) {
  const project = t.projects.ntina;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative rounded-2xl bg-white dark:bg-royal-800/50 border border-silver-200 dark:border-royal-700/50 overflow-hidden transition-colors duration-500">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Phone Mockup */}
          <div className="flex items-center justify-center p-8 sm:p-10 lg:p-12 bg-marmalade-50 dark:bg-royal-800 order-2 lg:order-1 transition-colors duration-500">
            <div className="phone-mockup w-full max-w-[280px]">
              <div className="phone-screen bg-royal-900 aspect-[9/16] flex flex-col p-5">
                <div className="text-marmalade-400 font-display font-bold text-lg mb-3">
                  Ntina
                </div>
                <div className="w-full h-px bg-marmalade-800/50 mb-4" />

                <div className="flex items-center gap-2 bg-royal-800 rounded-lg px-3 py-2 mb-4">
                  <Search size={14} className="text-marmalade-400" />
                  <span className="text-silver-500 text-xs">
                    Search STEM topics...
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  {[
                    { title: "Thermodynamics", lang: "Swahili", duration: "3:24" },
                    { title: "Photosynthesis", lang: "Lingala", duration: "4:15" },
                    { title: "Newton's Laws", lang: "Swahili", duration: "5:02" },
                  ].map((entry) => (
                    <div
                      key={entry.title}
                      className="bg-royal-800/80 rounded-lg p-3 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-marmalade-500/20 flex items-center justify-center shrink-0">
                        <Headphones size={14} className="text-marmalade-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-medium truncate">
                          {entry.title}
                        </div>
                        <div className="text-silver-500 text-[10px]">
                          {entry.lang} · {entry.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-1 mt-3">
                  <div className="w-8 h-1 rounded bg-marmalade-500" />
                  <div className="w-2 h-1 rounded bg-royal-700" />
                  <div className="w-2 h-1 rounded bg-royal-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 lg:p-12 order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-marmalade-100 dark:bg-marmalade-900/30 text-marmalade-700 dark:text-marmalade-300 mb-4 transition-colors duration-500">
              {project.tag}
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-royal-700 dark:text-white mb-4 transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-silver-600 dark:text-silver-300 text-lg leading-relaxed mb-6 transition-colors duration-500">
              {project.description}
            </p>

            <div className="space-y-4 mb-8">
              {project.mechanism.map((step, i) => {
                const icons = [Headphones, Users, Search, BookOpen];
                const Icon = icons[i];
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-marmalade-100 dark:bg-marmalade-900/30 flex items-center justify-center shrink-0 transition-colors duration-500">
                      <Icon
                        size={20}
                        className="text-marmalade-600 dark:text-marmalade-400"
                      />
                    </div>
                    <p className="text-sm text-silver-700 dark:text-silver-300 pt-2 transition-colors duration-500">
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-white bg-gradient-to-r from-marmalade-500 to-marmalade-600 hover:from-marmalade-400 hover:to-marmalade-500 shadow-lg shadow-marmalade-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              {project.cta}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section
      id="projects"
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
            {t.projects.sectionTitle}
          </h2>
          <p className="text-silver-600 dark:text-silver-300 text-lg max-w-xl mx-auto transition-colors duration-500">
            {t.projects.sectionSubtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          <BongoLab t={t} />
          <Ntina t={t} />
        </div>
      </div>
    </section>
  );
}
