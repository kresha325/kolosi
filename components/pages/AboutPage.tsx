"use client";

import { useLanguage } from "@/components/LanguageProvider";

const content = {
  sq: {
    title: "Rreth Klubit",
    historyTitle: "Historia",
    history:
      "KOLOSI-Infinit Wrestling Club u krijua për të ndërtuar një komunitet të fortë sportiv në Prizren dhe për të ofruar trajnim profesional në mundje për të rinj dhe të rritur.",
    missionTitle: "Misioni",
    mission:
      "Misioni ynë është të zhvillojmë sportistë me integritet, disiplinë dhe performancë të lartë për gara kombëtare dhe ndërkombëtare.",
    coachesTitle: "Trajnerët",
    coaches:
      "Ekipi ynë i trajnerëve përfshin profesionistë me përvojë në përgatitjen fizike, teknikë dhe strategji gare.",
    media: "Vend për foto të trajnerëve dhe ambientit",
  },
  en: {
    title: "About the Club",
    historyTitle: "History",
    history:
      "KOLOSI-Infinit Wrestling Club was founded to build a strong sports community in Prizren and provide professional wrestling training for youth and adults.",
    missionTitle: "Mission",
    mission:
      "Our mission is to develop athletes with integrity, discipline, and high-level performance for national and international competitions.",
    coachesTitle: "Coaches",
    coaches:
      "Our coaching team includes experienced professionals in physical conditioning, technical wrestling, and match strategy.",
    media: "Placeholder for coaches and facility photos",
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell page-stack">
      <h1>{t.title}</h1>

      <article className="content-card">
        <h2>{t.historyTitle}</h2>
        <p>{t.history}</p>
      </article>

      <article className="content-card">
        <h2>{t.missionTitle}</h2>
        <p>{t.mission}</p>
      </article>

      <article className="content-card">
        <h2>{t.coachesTitle}</h2>
        <p>{t.coaches}</p>
        <div className="media-placeholder">{t.media}</div>
      </article>
    </section>
  );
}
