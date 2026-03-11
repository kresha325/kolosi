"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Medal, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import heroImage from "@/public/images/logo.png";

const content = {
  sq: {
    badge: "Klub i Mundjes Olimpike",
    title: "KOLOSI-Infinit Wrestling Club",
    slogan: "Disipline. Forcë. Karakter.",
    description:
      "KOLOSI-Infinit është klub sportiv profesional në Prizren i fokusuar në zhvillimin e sportistëve nga niveli fillestar deri te garuesit elitarë.",
    cta: "Bashkohu me Klubin",
    heroMedia: "Foto hero e KOLOSI-Infinit",
    aboutTitle: "Rreth Nesh",
    aboutText:
      "KOLOSI-Infinit është ndërtuar mbi punën e disiplinuar, zhvillimin afatgjatë dhe kulturën e garës së ndershme. Nga fillestarët deri te niveli elitar, çdo sportist trajtohet me plan të qartë dhe mbështetje profesionale.",
    aboutAction: "Më Shumë Rreth Nesh",
    trainingTitle: "Programet e Trajnimit",
    trainingItems: [
      {
        title: "Fillestarë",
        text: "Bazat teknike, disiplinë sportive dhe zhvillim fizik i kontrolluar.",
      },
      {
        title: "Junior",
        text: "Rritje e intensitetit, taktikë gare dhe përgatitje për kampionate.",
      },
      {
        title: "Senior",
        text: "Performancë elitare, strategji individuale dhe optimizim i formës.",
      },
    ],
    trainingAction: "Shiko Orarin e Plotë",
    discoverTitle: "Eksploro Faqet Kryesore",
    discoverCards: [
      {
        title: "Trajnerët",
        text: "Ekipi profesional që udhëheq progresin teknik dhe fizik.",
        href: "/trainers",
        icon: "trainers",
      },
      {
        title: "Mundësit",
        text: "Profilet e sportistëve, kategoritë dhe rezultatet e fundit.",
        href: "/wrestlers",
        icon: "wrestlers",
      },
      {
        title: "Galeri",
        text: "Foto dhe video nga stërvitjet, garat dhe aktivitetet e klubit.",
        href: "/gallery",
        icon: "gallery",
      },
      {
        title: "Sponsorët",
        text: "Partnerët që mbështesin rrugëtimin e KOLOSI-Infinit.",
        href: "/sponsors",
        icon: "sponsors",
      },
    ],
    discoverAction: "Hap",
    ctaTitle: "Bëhu Pjesë e KOLOSI-Infinit",
    ctaText: "Na kontakto për regjistrim, orare dhe informata të detajuara.",
    ctaAction: "Na Kontakto",
  },
  en: {
    badge: "Olympic Wrestling Club",
    title: "KOLOSI-Infinit Wrestling Club",
    slogan: "Discipline. Power. Character.",
    description:
      "KOLOSI-Infinit is a professional sports club in Prizren focused on athlete development from beginner level to elite competition.",
    cta: "Join the Club",
    heroMedia: "KOLOSI-Infinit hero image",
    aboutTitle: "About Us",
    aboutText:
      "KOLOSI-Infinit is built on disciplined work, long-term athlete development, and a strong competition culture. From beginners to elite level, each athlete follows a clear plan with professional support.",
    aboutAction: "Learn More About Us",
    trainingTitle: "Training Programs",
    trainingItems: [
      {
        title: "Beginner",
        text: "Technical fundamentals, sports discipline, and controlled physical development.",
      },
      {
        title: "Junior",
        text: "Higher intensity, match tactics, and preparation for championships.",
      },
      {
        title: "Senior",
        text: "Elite performance, individual strategy, and peak-form optimization.",
      },
    ],
    trainingAction: "View Full Schedule",
    discoverTitle: "Explore Main Pages",
    discoverCards: [
      {
        title: "Trainers",
        text: "Professional staff leading technical and physical progress.",
        href: "/trainers",
        icon: "trainers",
      },
      {
        title: "Wrestlers",
        text: "Athlete profiles, categories, and recent performance highlights.",
        href: "/wrestlers",
        icon: "wrestlers",
      },
      {
        title: "Gallery",
        text: "Photos and videos from training sessions, matches, and club life.",
        href: "/gallery",
        icon: "gallery",
      },
      {
        title: "Sponsors",
        text: "Partners who support the KOLOSI-Infinit journey.",
        href: "/sponsors",
        icon: "sponsors",
      },
    ],
    discoverAction: "Open",
    ctaTitle: "Become Part of KOLOSI-Infinit",
    ctaText: "Contact us for registration, schedule details, and full information.",
    ctaAction: "Contact Us",
  },
};

export default function HomePage() {
  const { language } = useLanguage();
  const t = content[language];
  const iconMap = {
    trainers: Users,
    wrestlers: Medal,
    gallery: Camera,
    sponsors: ShieldCheck,
  } as const;

  return (
    <div className="site-shell home-single">
      <section className="home-grid home-hero-section">
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
            src={heroImage}
            alt={t.heroMedia}
            fill
            priority
            sizes="(max-width: 700px) 92vw, (max-width: 1020px) 92vw, 48vw"
            className="hero-photo"
          />
        </div>
      </section>

      <section id="home-about" className="content-card home-band">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
        <Link href="/about" className="secondary-btn home-page-link">
          {t.aboutAction}
        </Link>
      </section>

      <section id="home-training" className="home-band">
        <h2>{t.trainingTitle}</h2>
        <div className="home-training-grid">
          {t.trainingItems.map((item) => (
            <article key={item.title} className="content-card home-mini-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <Link href="/training" className="secondary-btn home-page-link">
          {t.trainingAction}
        </Link>
      </section>

      <section id="home-discover" className="home-band">
        <h2>{t.discoverTitle}</h2>
        <div className="home-discover-grid">
          {t.discoverCards.map((item) => (
            <article key={item.href} className="content-card home-mini-card">
              <div className="home-discover-head">
                {(() => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Users;
                  return (
                    <span className="home-discover-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={2.25} />
                    </span>
                  );
                })()}
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
              <Link href={item.href} className="secondary-btn home-page-link home-open-link">
                {t.discoverAction}
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="home-contact" className="content-card home-cta-strip">
        <div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
        </div>
        <Link href="/contact" className="primary-btn">
          {t.ctaAction}
        </Link>
      </section>
    </div>
  );
}
