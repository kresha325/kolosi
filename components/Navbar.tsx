"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Image as ImageIcon, Medal, Menu, Moon, Sun, Users } from "lucide-react";
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
    themeLight: "Light",
    themeDark: "Dark",
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
    themeLight: "Light",
    themeDark: "Dark",
  },
};

type BottomIcon = "home" | "trainers" | "wrestlers" | "gallery" | "menu";

function MobileNavIcon({ icon }: { icon: BottomIcon }) {
  if (icon === "home") {
    return <Home aria-hidden="true" className="mobile-bottom-icon" strokeWidth={2.2} />;
  }

  if (icon === "trainers") {
    return <Users aria-hidden="true" className="mobile-bottom-icon" strokeWidth={2.2} />;
  }

  if (icon === "wrestlers") {
    return <Medal aria-hidden="true" className="mobile-bottom-icon" strokeWidth={2.2} />;
  }

  if (icon === "gallery") {
    return <ImageIcon aria-hidden="true" className="mobile-bottom-icon" strokeWidth={2.2} />;
  }

  return <Menu aria-hidden="true" className="mobile-bottom-icon" strokeWidth={2.2} />;
}

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, theme, toggleTheme } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = navLabels[language];

  const isBottomLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/wrestlers") {
      return pathname === "/wrestlers" || pathname.startsWith("/wrestler/");
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

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

  const mobileBottomLinks = [
    { href: "/", label: t.home, icon: "home" as const },
    { href: "/trainers", label: t.trainers, icon: "trainers" as const },
    { href: "/wrestlers", label: t.wrestlers, icon: "wrestlers" as const },
    { href: "/gallery", label: t.gallery, icon: "gallery" as const },
  ];

  return (
    <>
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
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Switch theme"
              title={theme === "dark" ? t.themeLight : t.themeDark}
            >
              {theme === "dark" ? (
                <Sun size={16} aria-hidden="true" />
              ) : (
                <Moon size={16} aria-hidden="true" />
              )}
            </button>

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

      <nav className="mobile-bottom-nav" aria-label="Mobile quick navigation">
        {mobileBottomLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mobile-bottom-link ${isBottomLinkActive(link.href) ? "is-active" : ""}`}
          >
            <MobileNavIcon icon={link.icon} />
            <span className="mobile-bottom-label">{link.label}</span>
          </Link>
        ))}

        <button
          type="button"
          className={`mobile-bottom-link mobile-bottom-menu-btn ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-burger-menu"
        >
          <MobileNavIcon icon="menu" />
          <span className="mobile-bottom-label">Menu</span>
        </button>
      </nav>
    </>
  );
}
