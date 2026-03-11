import type { Metadata } from "next";
import TrainersPage from "@/components/pages/TrainersPage";

export const metadata: Metadata = {
  title: "Trainers",
  description:
    "Meet the coaching staff of KOLOSI-Infinit Wrestling Club in Prizren, Kosovo.",
};

export default function Trainers() {
  return <TrainersPage />;
}
