import { Heart, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/stem-resources-hub",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/stemresourceshub",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/stemresourceshub",
    },
  ];

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

          {/* Contact section */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-white font-semibold text-sm tracking-wide">
              {t.footer.followMovement}
            </p>

            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-royal-600/50 hover:bg-marmalade-500 text-silver-300 hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <a
              href={`mailto:${t.footer.contact}`}
              className="inline-flex items-center gap-2 text-silver-300 hover:text-marmalade-400 text-sm transition-colors duration-200"
            >
              <Mail size={14} />
              {t.footer.contact}
            </a>
          </div>

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
