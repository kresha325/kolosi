"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Wrestler } from "@/components/pages/wrestlersData";

export default function WrestlerDetailPage({ wrestler }: { wrestler: Wrestler }) {
  const { language } = useLanguage();
  const label = language === "sq"
    ? {
        back: "← Kthehu te Mundësit",
        profile: "Profili i Mundësit",
        personal: "Të Dhënat Personale",
        birthDate: "Ditëlindja",
        gender: "Gjinia",
        city: "Qyteti",
        country: "Shteti",
        category: "Kategoria",
        weight: "Kategoria e Peshës",
        style: "Stili",
        age: "Mosha",
        coach: "Trajneri",
        exp: "Vite Eksperience",
        record: "Rekordi i Garave",
        wins: "Fitore",
        losses: "Humbje",
        points: "Pikë Teknike",
        medals: "Medalje dhe Tituj",
        recent: "Rezultatet e Fundit",
        goals: "Objektivat Sportive",
        media: "Vend për foto/video të mundësit",
      }
    : {
        back: "← Back to Wrestlers",
        profile: "Wrestler Profile",
        personal: "Personal Information",
        birthDate: "Date of Birth",
        gender: "Gender",
        city: "City",
        country: "Country",
        category: "Category",
        weight: "Weight Class",
        style: "Style",
        age: "Age",
        coach: "Coach",
        exp: "Years of Experience",
        record: "Competition Record",
        wins: "Wins",
        losses: "Losses",
        points: "Technical Points",
        medals: "Medals and Titles",
        recent: "Recent Results",
        goals: "Athletic Goals",
        media: "Wrestler media placeholder",
      };

  const medals = language === "sq" ? wrestler.medalsSq : wrestler.medalsEn;
  const recentResults = language === "sq" ? wrestler.recentResultsSq : wrestler.recentResultsEn;
  const goals = language === "sq" ? wrestler.goalsSq : wrestler.goalsEn;

  return (
    <section className="site-shell page-stack">
      <Link href="/wrestlers" className="back-link">
        {label.back}
      </Link>

      <article className="content-card wrestler-detail-card">
        <p className="eyebrow">{label.profile}</p>

        <section className="wrestler-profile-header">
          <div className="wrestler-photo-wrap">
            <Image
              src={wrestler.profileImage}
              alt={wrestler.name}
              width={260}
              height={320}
              className="wrestler-photo"
            />
          </div>

          <div className="wrestler-personal-card">
            <h1>{wrestler.name}</h1>
            <ul className="profile-list compact">
              <li>
                <strong>{label.birthDate}:</strong> {wrestler.birthDate}
              </li>
              <li>
                <strong>{label.gender}:</strong> {language === "sq" ? wrestler.genderSq : wrestler.genderEn}
              </li>
              <li>
                <strong>{label.city}:</strong> {wrestler.city}
              </li>
              <li>
                <strong>{label.country}:</strong> {wrestler.country}
              </li>
            </ul>
          </div>

          <div className="wrestler-core-card">
            <div className="stat-card">
              <span>{label.category}</span>
              <strong>{language === "sq" ? wrestler.categorySq : wrestler.categoryEn}</strong>
            </div>
            <div className="stat-card">
              <span>{label.weight}</span>
              <strong>{wrestler.weightClass}</strong>
            </div>
            <div className="stat-card">
              <span>{label.style}</span>
              <strong>{language === "sq" ? wrestler.styleSq : wrestler.styleEn}</strong>
            </div>
          </div>
        </section>

        <div className="wrestler-stats-grid">
          <div className="stat-card">
            <span>{label.category}</span>
            <strong>{language === "sq" ? wrestler.categorySq : wrestler.categoryEn}</strong>
          </div>
          <div className="stat-card">
            <span>{label.weight}</span>
            <strong>{wrestler.weightClass}</strong>
          </div>
          <div className="stat-card">
            <span>{label.style}</span>
            <strong>{language === "sq" ? wrestler.styleSq : wrestler.styleEn}</strong>
          </div>
          <div className="stat-card">
            <span>{label.age}</span>
            <strong>{wrestler.age}</strong>
          </div>
          <div className="stat-card">
            <span>{label.coach}</span>
            <strong>{wrestler.coach}</strong>
          </div>
          <div className="stat-card">
            <span>{label.exp}</span>
            <strong>{wrestler.experienceYears}</strong>
          </div>
        </div>

        <p>{language === "sq" ? wrestler.bioSq : wrestler.bioEn}</p>

        <section className="wrestler-record">
          <h2>{label.record}</h2>
          <div className="record-grid">
            <div className="record-cell">
              <span>{label.wins}</span>
              <strong>{wrestler.record.wins}</strong>
            </div>
            <div className="record-cell">
              <span>{label.losses}</span>
              <strong>{wrestler.record.losses}</strong>
            </div>
            <div className="record-cell">
              <span>{label.points}</span>
              <strong>{wrestler.record.technicalPoints}</strong>
            </div>
          </div>
        </section>

        <section>
          <h2>{label.medals}</h2>
          <ul className="profile-list">
            {medals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{label.recent}</h2>
          <ul className="profile-list">
            {recentResults.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{label.goals}</h2>
          <ul className="profile-list">
            {goals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="media-placeholder">{label.media}</div>
      </article>
    </section>
  );
}
