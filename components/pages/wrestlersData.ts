import type { StaticImageData } from "next/image";
import heroImage from "@/public/images/hero.jpg";

export type Wrestler = {
  slug: string;
  name: string;
  profileImage: StaticImageData;
  birthDate: string;
  genderSq: string;
  genderEn: string;
  city: string;
  country: string;
  age: number;
  weightClass: string;
  categorySq: string;
  categoryEn: string;
  styleSq: string;
  styleEn: string;
  coach: string;
  experienceYears: number;
  record: {
    wins: number;
    losses: number;
    technicalPoints: number;
  };
  achievementsSq: string;
  achievementsEn: string;
  medalsSq: string[];
  medalsEn: string[];
  recentResultsSq: string[];
  recentResultsEn: string[];
  goalsSq: string[];
  goalsEn: string[];
  bioSq: string;
  bioEn: string;
};

export const wrestlers: Wrestler[] = [
  {
    slug: "sadik-ferati",
    name: "Sadik Ferati",
    profileImage: heroImage,
    birthDate: "1999-04-12",
    genderSq: "Mashkull",
    genderEn: "Male",
    city: "Prizren",
    country: "Kosovo",
    age: 24,
    weightClass: "74 kg",
    categorySq: "Senior",
    categoryEn: "Senior",
    styleSq: "Freestyle",
    styleEn: "Freestyle",
    coach: "KOLOSI-Infinit Coaching Staff",
    experienceYears: 9,
    record: {
      wins: 38,
      losses: 9,
      technicalPoints: 276,
    },
    achievementsSq: "Kampionati Kombëtar",
    achievementsEn: "National Championship",
    medalsSq: ["Ari - Kampionati Kombëtar", "Argjend - Turneu Ballkanik"],
    medalsEn: ["Gold - National Championship", "Silver - Balkan Tournament"],
    recentResultsSq: [
      "Fitore 8-2 ndaj kundërshtarit në finalen e ligës",
      "Fitore teknike në çerekfinale",
      "3 fitore radhazi në kampin përgatitor",
    ],
    recentResultsEn: [
      "8-2 win in league final",
      "Technical win in quarterfinal",
      "3 consecutive wins in preparation camp",
    ],
    goalsSq: ["Kualifikimi Evropian", "Përmirësim i sulmit nga neutral"],
    goalsEn: ["European qualification", "Improve neutral attack efficiency"],
    bioSq:
      "Sportist i nivelit senior me fokus në teknikë të avancuar, forcë funksionale dhe performancë në gara.",
    bioEn:
      "Senior-level athlete focused on advanced technique, functional strength, and competition performance.",
  },
  {
    slug: "arber-shala",
    name: "Arber Shala",
    profileImage: heroImage,
    birthDate: "2005-09-03",
    genderSq: "Mashkull",
    genderEn: "Male",
    city: "Prizren",
    country: "Kosovo",
    age: 19,
    weightClass: "65 kg",
    categorySq: "Junior",
    categoryEn: "Junior",
    styleSq: "Freestyle",
    styleEn: "Freestyle",
    coach: "KOLOSI-Infinit Coaching Staff",
    experienceYears: 5,
    record: {
      wins: 24,
      losses: 7,
      technicalPoints: 184,
    },
    achievementsSq: "Medalist Rajonal",
    achievementsEn: "Regional Medalist",
    medalsSq: ["Bronz - Kampionati Junior", "Argjend - Kupa Rajonale"],
    medalsEn: ["Bronze - Junior Championship", "Silver - Regional Cup"],
    recentResultsSq: [
      "Fitore 6-4 në ndeshjen vendimtare",
      "Finale e Kupës Rajonale",
      "2 fitore me superioritet teknik",
    ],
    recentResultsEn: [
      "6-4 win in decisive match",
      "Regional Cup finalist",
      "2 technical superiority wins",
    ],
    goalsSq: ["Titull në kategorinë Junior", "Rritje e qëndrueshmërisë fizike"],
    goalsEn: ["Junior category title", "Increase physical endurance"],
    bioSq:
      "Mundës junior me progres të shpejtë, disiplinë të lartë dhe potencial për nivel ndërkombëtar.",
    bioEn:
      "Junior wrestler with rapid progress, strong discipline, and potential for international level events.",
  },
  {
    slug: "lindon-krasniqi",
    name: "Lindon Krasniqi",
    profileImage: heroImage,
    birthDate: "2008-11-21",
    genderSq: "Mashkull",
    genderEn: "Male",
    city: "Prizren",
    country: "Kosovo",
    age: 16,
    weightClass: "55 kg",
    categorySq: "Kadet",
    categoryEn: "Cadet",
    styleSq: "Greco-Roman",
    styleEn: "Greco-Roman",
    coach: "KOLOSI-Infinit Coaching Staff",
    experienceYears: 3,
    record: {
      wins: 17,
      losses: 5,
      technicalPoints: 131,
    },
    achievementsSq: "Talenti i Vitit",
    achievementsEn: "Talent of the Year",
    medalsSq: ["Ari - Turneu i të Rinjve", "Bronz - Kampionati Kadet"],
    medalsEn: ["Gold - Youth Tournament", "Bronze - Cadet Championship"],
    recentResultsSq: [
      "4 fitore radhazi në turne lokal",
      "Fitore me tuzh në gjysmëfinale",
      "Medalje në debutimin kombëtar",
    ],
    recentResultsEn: [
      "4 straight wins in local tournament",
      "Pinfall win in semifinal",
      "Medal in national debut",
    ],
    goalsSq: ["Stabilitet në kategorinë Kadet", "Përmirësim i mbrojtjes në parter"],
    goalsEn: ["Stability in Cadet category", "Improve par terre defense"],
    bioSq:
      "Mundës i ri në zhvillim me bazë të fortë teknike dhe rezultate premtuese në turne lokalë.",
    bioEn:
      "Developing young wrestler with a strong technical base and promising results in local tournaments.",
  },
];
