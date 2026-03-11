import type { Metadata } from "next";
import WrestlersPage from "@/components/pages/WrestlersPage";

export const metadata: Metadata = {
  title: "Wrestlers",
  description:
    "Explore wrestler profiles of KOLOSI-Infinit Wrestling Club in Prizren, Kosovo.",
};

export default function Wrestlers() {
  return <WrestlersPage />;
}
