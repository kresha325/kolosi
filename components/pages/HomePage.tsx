"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const content = {
  sq: {
    badge: "Klub i Mundjes Olimpike",
    title: "KOLOSI-Infinit Wrestling Club",
    slogan: "Disipline. Forcë. Karakter.",
    description:
      "KOLOSI-Infinit është klub sportiv profesional në Prizren i fokusuar në zhvillimin e sportistëve nga niveli fillestar deri te garuesit elitarë.",
    cta: "Bashkohu me Klubin",
    heroMedia: "Foto hero e KOLOSI-Infinit",
  },
  en: {
    badge: "Olympic Wrestling Club",
    title: "KOLOSI-Infinit Wrestling Club",
    slogan: "Discipline. Power. Character.",
    description:
      "KOLOSI-Infinit is a professional sports club in Prizren focused on athlete development from beginner level to elite competition.",
    cta: "Join the Club",
    heroMedia: "KOLOSI-Infinit hero image",
  },
};

export default function HomePage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell home-grid">
      <div className="hero-copy">
        <p className="eyebrow">{t.badge}</p>
        <h1>{t.title}</h1>
        <p className="hero-slogan">{t.slogan}</p>
        <p className="lead-text">{t.description}</p>
        <Link href="/contact" className="primary-btn">
          {t.cta}
        </Link>
      </div>

      <div className="hero-media">
        <Image
          src="/images/hero.jpg"
          alt={t.heroMedia}
          fill
          priority
          className="hero-photo"
        />
      </div>
    </section>
  );
}
