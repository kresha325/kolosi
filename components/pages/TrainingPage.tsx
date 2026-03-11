"use client";

import { useLanguage } from "@/components/LanguageProvider";

const content = {
  sq: {
    title: "Programet e Trajnimit",
    programs: [
      "Beginner - bazat e mundjes, koordinim dhe përgatitje fizike",
      "Junior - teknikë e avancuar, shpejtësi dhe forcë funksionale",
      "Professional - planifikim gare, analizë taktike dhe performancë elitare",
    ],
    scheduleTitle: "Orari i Trajnimeve",
    days: "E Hënë - E Premte",
    morning: "08:00 - 10:00",
    evening: "18:00 - 20:00",
    weekend: "E Shtunë",
    weekendTime: "10:00 - 12:00",
    media: "Vend për foto nga trajnimet",
  },
  en: {
    title: "Training Programs",
    programs: [
      "Beginner - fundamentals of wrestling, coordination, and physical base",
      "Junior - advanced technique, speed, and functional strength",
      "Professional - competition planning, tactical analysis, and elite performance",
    ],
    scheduleTitle: "Training Schedule",
    days: "Monday - Friday",
    morning: "08:00 - 10:00",
    evening: "18:00 - 20:00",
    weekend: "Saturday",
    weekendTime: "10:00 - 12:00",
    media: "Placeholder for training photos",
  },
};

export default function TrainingPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell page-stack">
      <h1>{t.title}</h1>

      <article className="content-card">
        <ul className="program-list">
          {t.programs.map((program) => (
            <li key={program}>{program}</li>
          ))}
        </ul>
      </article>

      <article className="content-card">
        <h2>{t.scheduleTitle}</h2>
        <table className="schedule-grid" aria-label={t.scheduleTitle}>
          <tbody>
            <tr>
              <th scope="row" className="cell head">
                {t.days}
              </th>
              <td className="cell">{t.morning}</td>
              <td className="cell">{t.evening}</td>
            </tr>
            <tr>
              <th scope="row" className="cell head">
                {t.weekend}
              </th>
              <td className="cell">{t.weekendTime}</td>
              <td className="cell">-</td>
            </tr>
          </tbody>
        </table>
      </article>

      <article className="content-card">
        <div className="media-placeholder">{t.media}</div>
      </article>
    </section>
  );
}
