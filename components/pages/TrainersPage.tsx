"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { trainers } from "@/components/pages/trainersData";

const content = {
  sq: {
    title: "Trajnerët",
    intro:
      "Ekipi i trajnerëve të KOLOSI-Infinit Wrestling Club që udhëheq përgatitjen teknike, fizike dhe taktike.",
    photoPlaceholder: "Vend për foto të trajnerit",
    viewProfile: "Shiko Profilin",
  },
  en: {
    title: "Trainers",
    intro:
      "The coaching team of KOLOSI-Infinit Wrestling Club leading technical, physical, and tactical preparation.",
    photoPlaceholder: "Trainer photo placeholder",
    viewProfile: "View Profile",
  },
};

export default function TrainersPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell page-stack">
      <h1>{t.title}</h1>
      <p className="lead-text">{t.intro}</p>

      <div className="trainers-grid">
        {trainers.map((trainer) => (
          <article key={trainer.name} className="content-card trainer-card">
            <h2>{trainer.name}</h2>
            <p>
              <strong>{language === "sq" ? "Roli" : "Role"}:</strong>{" "}
              {language === "sq" ? trainer.roleSq : trainer.roleEn}
            </p>
            <p>
              <strong>{language === "sq" ? "Specializimi" : "Specialty"}:</strong>{" "}
              {language === "sq" ? trainer.specialtySq : trainer.specialtyEn}
            </p>
            <p>
              <strong>{language === "sq" ? "Eksperienca" : "Experience"}:</strong>{" "}
              {trainer.experienceYears} {language === "sq" ? "vite" : "years"}
            </p>
            <p>{language === "sq" ? trainer.bioSq : trainer.bioEn}</p>
            <div className="media-placeholder small">{t.photoPlaceholder}</div>
            <Link href={`/trainers/${trainer.slug}`} className="secondary-btn">
              {t.viewProfile}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
