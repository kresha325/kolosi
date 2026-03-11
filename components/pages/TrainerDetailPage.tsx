"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Trainer } from "@/components/pages/trainersData";

export default function TrainerDetailPage({ trainer }: { trainer: Trainer }) {
  const { language } = useLanguage();
  const label =
    language === "sq"
      ? {
          back: "← Kthehu te Trajnerët",
          profile: "Profili i Trajnerit",
          fullName: "Emri dhe Mbiemri",
          birthDate: "Ditëlindja",
          gender: "Gjinia",
          city: "Qyteti",
          country: "Shteti",
          role: "Roli",
          specialty: "Specializimi",
          experience: "Eksperienca",
          certifications: "Certifikime",
          focus: "Fokus i Punës",
          media: "Vend për foto/video të trajnerit",
        }
      : {
          back: "← Back to Trainers",
          profile: "Trainer Profile",
          fullName: "Full Name",
          birthDate: "Date of Birth",
          gender: "Gender",
          city: "City",
          country: "Country",
          role: "Role",
          specialty: "Specialty",
          experience: "Experience",
          certifications: "Certifications",
          focus: "Focus Areas",
          media: "Trainer media placeholder",
        };

  const certifications = language === "sq" ? trainer.certificationsSq : trainer.certificationsEn;
  const focus = language === "sq" ? trainer.focusSq : trainer.focusEn;

  return (
    <section className="site-shell page-stack">
      <Link href="/trainers" className="back-link">
        {label.back}
      </Link>

      <article className="content-card wrestler-detail-card">
        <p className="eyebrow">{label.profile}</p>

        <section className="wrestler-profile-header">
          <div className="wrestler-photo-wrap">
            <Image
              src={trainer.profileImage}
              alt={trainer.name}
              width={260}
              height={320}
              sizes="(max-width: 700px) 92vw, (max-width: 1020px) 40vw, 30vw"
              className="wrestler-photo"
            />
          </div>

          <div className="wrestler-personal-card">
            <h1>{trainer.name}</h1>
            <ul className="profile-list compact">
              <li>
                <strong>{label.fullName}:</strong> {trainer.name}
              </li>
              <li>
                <strong>{label.birthDate}:</strong> {trainer.birthDate}
              </li>
              <li>
                <strong>{label.gender}:</strong> {language === "sq" ? trainer.genderSq : trainer.genderEn}
              </li>
              <li>
                <strong>{label.city}:</strong> {trainer.city}
              </li>
              <li>
                <strong>{label.country}:</strong> {trainer.country}
              </li>
            </ul>
          </div>

          <div className="wrestler-core-card">
            <div className="stat-card">
              <span>{label.role}</span>
              <strong>{language === "sq" ? trainer.roleSq : trainer.roleEn}</strong>
            </div>
            <div className="stat-card">
              <span>{label.specialty}</span>
              <strong>{language === "sq" ? trainer.specialtySq : trainer.specialtyEn}</strong>
            </div>
            <div className="stat-card">
              <span>{label.experience}</span>
              <strong>
                {trainer.experienceYears} {language === "sq" ? "vite" : "years"}
              </strong>
            </div>
          </div>
        </section>

        <p>{language === "sq" ? trainer.bioSq : trainer.bioEn}</p>

        <section>
          <h2>{label.certifications}</h2>
          <ul className="profile-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{label.focus}</h2>
          <ul className="profile-list">
            {focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="media-placeholder">{label.media}</div>
      </article>
    </section>
  );
}
