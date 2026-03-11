"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import logoImage from "@/public/images/logo.png";

const navLabels = {
  sq: {
    home: "Kreu",
    about: "Rreth Nesh",
    sponsors: "Sponsorët",
    trainers: "Trajnerët",
    wrestlers: "Mundësit",
    training: "Trajnime",
    gallery: "Galeri",
    contact: "Kontakt",
    toggle: "EN",
  },
  en: {
    home: "Home",
    about: "About",
    sponsors: "Sponsors",
    trainers: "Trainers",
    wrestlers: "Wrestlers",
    training: "Training",
    gallery: "Gallery",
    contact: "Contact",
    toggle: "SQ",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = navLabels[language];

  const links = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/trainers", label: t.trainers },
    { href: "/wrestlers", label: t.wrestlers },
    { href: "/gallery", label: t.gallery },
    { href: "/training", label: t.training },
    { href: "/sponsors", label: t.sponsors },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-shell nav-wrap">
        <Link href="/" className="brand-mark" aria-label="KOLOSI-Infinit home">
          <span className="brand-logo-wrap">
            <Image
              src={logoImage}
              alt="KOLOSI-Infinit logo"
              width={46}
              height={46}
              className="brand-logo"
              unoptimized
            />
          </span>
          <span className="brand-text">
            <span className="brand-k">KOLOSI-Infinit</span>
            <span className="brand-i">Wrestling Club</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            {t.toggle}
          </button>

          {isMenuOpen ? (
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Toggle menu"
              aria-expanded="true"
              aria-controls="main-burger-menu"
            >
              ☰
            </button>
          ) : (
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Toggle menu"
              aria-expanded="false"
              aria-controls="main-burger-menu"
            >
              ☰
            </button>
          )}

          {isMenuOpen ? (
            <div id="main-burger-menu" className="burger-panel">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`burger-link ${isActive ? "is-active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
