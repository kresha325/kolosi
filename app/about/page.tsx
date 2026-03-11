import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about KOLOSI-Infinit Wrestling Club history, mission, coaches, and training environment.",
};

export default function About() {
  return <AboutPage />;
}
