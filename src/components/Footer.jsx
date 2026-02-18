import { Heart } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-royal-700 dark:bg-royal-900 border-t border-royal-600/50 dark:border-royal-700/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <img
            src="/stem-rf-logo-whight.png"
            alt="STEM Resources Hub"
            className="h-10 w-auto"
          />

          <p className="text-silver-300 text-sm max-w-md">
            {t.footer.tagline}
          </p>

          <div className="w-48 h-px bg-gradient-to-r from-transparent via-marmalade-500/50 to-transparent" />

          <p className="text-silver-400 text-xs flex items-center gap-1.5">
            {t.footer.madeWith}{" "}
            <Heart size={14} className="text-marmalade-500 fill-marmalade-500" />{" "}
            {t.footer.forAfrica}
          </p>

          <p className="text-silver-500 text-xs">
            &copy; {new Date().getFullYear()} STEM Resources Hub.{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
