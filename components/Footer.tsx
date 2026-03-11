"use client";

import { useLanguage } from "@/components/LanguageProvider";

const footerText = {
  sq: {
    rights: "Të gjitha të drejtat e rezervuara.",
  },
  en: {
    rights: "All rights reserved.",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-shell footer-content">
        <p>
          © {year} KOLOSI-Infinit Wrestling Club. {footerText[language].rights}
        </p>
      </div>
    </footer>
  );
}
