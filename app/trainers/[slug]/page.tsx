import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrainerDetailPage from "@/components/pages/TrainerDetailPage";
import { trainers } from "@/components/pages/trainersData";

type TrainerRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return trainers.map((trainer) => ({ slug: trainer.slug }));
}

export async function generateMetadata({ params }: TrainerRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const trainer = trainers.find((item) => item.slug === slug);

  if (!trainer) {
    return {
      title: "Trainer Not Found",
    };
  }

  return {
    title: trainer.name,
    description: `Profile page for coach ${trainer.name} at KOLOSI-Infinit Wrestling Club.`,
  };
}

export default async function TrainerSinglePage({ params }: TrainerRouteProps) {
  const { slug } = await params;
  const trainer = trainers.find((item) => item.slug === slug);

  if (!trainer) {
    notFound();
  }

  return <TrainerDetailPage trainer={trainer} />;
}
