export type Trainer = {
  slug: string;
  name: string;
  profileImage: string;
  birthDate: string;
  genderSq: string;
  genderEn: string;
  city: string;
  country: string;
  roleSq: string;
  roleEn: string;
  specialtySq: string;
  specialtyEn: string;
  experienceYears: number;
  certificationsSq: string[];
  certificationsEn: string[];
  focusSq: string[];
  focusEn: string[];
  bioSq: string;
  bioEn: string;
};

export const trainers: Trainer[] = [
  {
    slug: "sadik-ferati",
    name: "Sadik Ferati",
    profileImage: "/images/hero.jpg",
    birthDate: "1988-02-15",
    genderSq: "Mashkull",
    genderEn: "Male",
    city: "Prizren",
    country: "Kosovo",
    roleSq: "Kryetrajner",
    roleEn: "Head Coach",
    specialtySq: "Teknikë Freestyle & Strategji Gare",
    specialtyEn: "Freestyle Technique & Match Strategy",
    experienceYears: 14,
    certificationsSq: ["Licencë Kombëtare e Trajnerit", "Kurs UWW Level 2"],
    certificationsEn: ["National Coaching License", "UWW Level 2 Course"],
    focusSq: ["Përgatitje taktike", "Analizë kundërshtari", "Plan gare"],
    focusEn: ["Tactical preparation", "Opponent analysis", "Match planning"],
    bioSq:
      "Trajner me përvojë afatgjatë në zhvillimin e sportistëve të nivelit junior dhe senior.",
    bioEn:
      "Long-experience coach focused on developing junior and senior level athletes.",
  },
  {
    slug: "arber-shala",
    name: "Arber Shala",
    profileImage: "/images/hero.jpg",
    birthDate: "1994-06-09",
    genderSq: "Mashkull",
    genderEn: "Male",
    city: "Prizren",
    country: "Kosovo",
    roleSq: "Trajner i Kondicionit",
    roleEn: "Strength & Conditioning Coach",
    specialtySq: "Forcë, Shpejtësi, Qëndrueshmëri",
    specialtyEn: "Strength, Speed, Endurance",
    experienceYears: 8,
    certificationsSq: ["S&C Certificate", "Kurs i Fiziologjisë Sportive"],
    certificationsEn: ["S&C Certificate", "Sports Physiology Course"],
    focusSq: ["Plan periodik i ngarkesës", "Rikuperim", "Parandalim dëmtimesh"],
    focusEn: ["Load periodization", "Recovery", "Injury prevention"],
    bioSq:
      "Trajner i përgatitjes fizike me fokus në rritjen e performancës dhe sigurinë e sportistit.",
    bioEn:
      "Conditioning coach focused on performance improvement and athlete safety.",
  },
  {
    slug: "lindon-krasniqi",
    name: "Lindon Krasniqi",
    profileImage: "/images/hero.jpg",
    birthDate: "1999-10-27",
    genderSq: "Mashkull",
    genderEn: "Male",
    city: "Prizren",
    country: "Kosovo",
    roleSq: "Trajner i Të Rinjve",
    roleEn: "Youth Coach",
    specialtySq: "Bazat Teknike dhe Zhvillimi i Talenteve",
    specialtyEn: "Technical Fundamentals and Talent Development",
    experienceYears: 6,
    certificationsSq: ["Youth Coaching Program", "Kurs Pedagogjik Sportiv"],
    certificationsEn: ["Youth Coaching Program", "Sports Pedagogy Course"],
    focusSq: ["Koordinim teknik", "Disiplinë sportive", "Formim afatgjatë"],
    focusEn: ["Technical coordination", "Sports discipline", "Long-term development"],
    bioSq:
      "I specializuar në moshat e reja dhe ndërtimin e bazës teknike për garuesit e ardhshëm.",
    bioEn:
      "Specialized in youth groups and building technical foundations for future competitors.",
  },
];
