"use client";

import { useLanguage } from "@/components/LanguageProvider";

type Sponsor = {
  name: string;
  categorySq: string;
  categoryEn: string;
  noteSq: string;
  noteEn: string;
  url: string;
};

const sponsors: Sponsor[] = [
  {
    name: "Sponsor 1",
    categorySq: "Partner Kryesor",
    categoryEn: "Main Partner",
    noteSq: "Mbështetje për pajisje dhe aktivitete sportive.",
    noteEn: "Support for equipment and sports activities.",
    url: "https://example.com/sponsor-1",
  },
  {
    name: "Sponsor 2",
    categorySq: "Sponsor Teknik",
    categoryEn: "Technical Sponsor",
    noteSq: "Mbështetje për veshje dhe materiale trajnimi.",
    noteEn: "Support for apparel and training materials.",
    url: "https://example.com/sponsor-2",
  },
  {
    name: "Sponsor 3",
    categorySq: "Partner Lokal",
    categoryEn: "Local Partner",
    noteSq: "Mbështetje për evente dhe gara lokale.",
    noteEn: "Support for local events and competitions.",
    url: "https://example.com/sponsor-3",
  },
];

const content = {
  sq: {
    title: "Sponsorët",
    intro:
      "Falënderojmë sponsorët që mbështesin zhvillimin e KOLOSI-Infinit Wrestling Club.",
    logoPlaceholder: "Vend për logon e sponsorit",
    visit: "Vizito Sponsorin",
  },
  en: {
    title: "Sponsors",
    intro:
      "We thank the sponsors who support the growth of KOLOSI-Infinit Wrestling Club.",
    logoPlaceholder: "Sponsor logo placeholder",
    visit: "Visit Sponsor",
  },
};

export default function SponsorsPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell page-stack">
      <h1>{t.title}</h1>
      <p className="lead-text">{t.intro}</p>

      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <article key={sponsor.name} className="content-card sponsor-card">
            <h2>{sponsor.name}</h2>
            <p>
              <strong>{language === "sq" ? "Kategoria" : "Category"}:</strong>{" "}
              {language === "sq" ? sponsor.categorySq : sponsor.categoryEn}
            </p>
            <p>{language === "sq" ? sponsor.noteSq : sponsor.noteEn}</p>
            <div className="media-placeholder small">{t.logoPlaceholder}</div>
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              {t.visit}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
