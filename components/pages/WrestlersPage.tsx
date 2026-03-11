"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { wrestlers } from "@/components/pages/wrestlersData";

const content = {
  sq: {
    title: "Mundësit",
    intro:
      "Njihuni me mundësit e KOLOSI-Infinit Wrestling Club. Këtu mund të shtoni profilet, rezultatet dhe fotot e secilit sportist.",
    photoPlaceholder: "Vend për foto të mundësit",
    viewProfile: "Shiko Profilin",
  },
  en: {
    title: "Wrestlers",
    intro:
      "Meet the wrestlers of KOLOSI-Infinit Wrestling Club. Here you can add athlete profiles, results, and individual photos.",
    photoPlaceholder: "Wrestler photo placeholder",
    viewProfile: "View Profile",
  },
};

export default function WrestlersPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell page-stack">
      <h1>{t.title}</h1>
      <p className="lead-text">{t.intro}</p>

      <div className="wrestlers-grid">
        {wrestlers.map((wrestler) => (
          <article key={wrestler.name} className="content-card wrestler-card">
            <h2>{wrestler.name}</h2>
            <p>
              {language === "sq" ? "Kategoria" : "Category"}: {language === "sq" ? wrestler.categorySq : wrestler.categoryEn}
            </p>
            <p>
              {language === "sq" ? "Pesha" : "Weight Class"}: {wrestler.weightClass}
            </p>
            <p>
              {language === "sq" ? "Stili" : "Style"}: {language === "sq" ? wrestler.styleSq : wrestler.styleEn}
            </p>
            <p>
              {language === "sq" ? "Arritje" : "Achievements"}: {language === "sq" ? wrestler.achievementsSq : wrestler.achievementsEn}
            </p>
            <div className="media-placeholder small">{t.photoPlaceholder}</div>
            <Link href={`/wrestler/${wrestler.slug}`} className="secondary-btn">
              {t.viewProfile}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
