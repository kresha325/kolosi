"use client";

import { useLanguage } from "@/components/LanguageProvider";

const footerContent = {
  sq: {
    leftTitle: "Kontakt",
    address: 'Qendra Sportive "Sezair Surroi", Prizren 20000, Kosovë',
    middleTitle: "Vegëzat",
    middleLinks: [
      {
        label: "Federata e Mundjes së Kosovës",
        href: "https://www.facebook.com/wrestlingkosova",
      },
      {
        label: "UWW - Event Calendar",
        href: "https://uww.org/events",
      },
      {
        label: "European Championships",
        href: "https://uww.org/event/senior-european-championships",
      },
    ],
    rightTitle: "Social",
    facebook: "Facebook",
    instagram: "Instagram",
    youtube: "YouTube",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com",
    youtubeUrl: "https://youtube.com",
    phone: "Telefon",
    email: "Email",
  },
  en: {
    leftTitle: "Contact",
    address: 'Sports Center "Sezair Surroi", Prizren 20000, Kosovo',
    middleTitle: "Useful Links",
    middleLinks: [
      {
        label: "Kosovo Wrestling Federation",
        href: "https://www.facebook.com/wrestlingkosova",
      },
      {
        label: "UWW - Event Calendar",
        href: "https://uww.org/events",
      },
      {
        label: "European Championships",
        href: "https://uww.org/event/senior-european-championships",
      },
    ],
    rightTitle: "Social",
    facebook: "Facebook",
    instagram: "Instagram",
    youtube: "YouTube",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com",
    youtubeUrl: "https://youtube.com",
    phone: "Phone",
    email: "Email",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = footerContent[language];

  return (
    <footer className="site-footer">
      <div className="site-shell footer-simple-grid">
        <section className="footer-simple-col">
          <h3>{t.leftTitle}</h3>
          <p className="footer-simple-line">{t.address}</p>
          <p className="footer-simple-line">
            <strong>{t.phone}:</strong> <a href="tel:+38349158322">+383 49 158 322</a>
          </p>
          <p className="footer-simple-line">
            <strong>{t.email}:</strong> <a href="mailto:sadikferati@hotmail.com">sadikferati@hotmail.com</a>
          </p>
        </section>

        <section className="footer-simple-col">
          <h3>{t.middleTitle}</h3>
          <div className="footer-simple-links">
            {t.middleLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="footer-simple-col">
          <h3>{t.rightTitle}</h3>
          <div className="footer-simple-links">
            <a href={t.facebookUrl} target="_blank" rel="noopener noreferrer">{t.facebook}</a>
            <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer">{t.instagram}</a>
            <a href={t.youtubeUrl} target="_blank" rel="noopener noreferrer">{t.youtube}</a>
          </div>
        </section>
      </div>

      <div className="site-shell footer-bottom">
        <p>© 2026 KOLOSI-Infinit Wrestling Club. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  );
}
