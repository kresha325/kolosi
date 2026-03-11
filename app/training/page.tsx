import type { Metadata } from "next";
import TrainingPage from "@/components/pages/TrainingPage";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Explore KOLOSI-Infinit training programs and schedule for Beginner, Junior, and Professional wrestlers.",
};

export default function Training() {
  return <TrainingPage />;
}
