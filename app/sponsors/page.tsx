import type { Metadata } from "next";
import SponsorsPage from "@/components/pages/SponsorsPage";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Official sponsors and partners of KOLOSI-Infinit Wrestling Club in Prizren, Kosovo.",
};

export default function Sponsors() {
  return <SponsorsPage />;
}
