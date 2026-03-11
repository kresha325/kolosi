import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WrestlerDetailPage from "@/components/pages/WrestlerDetailPage";
import { wrestlers } from "@/components/pages/wrestlersData";

type WrestlerRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return wrestlers.map((wrestler) => ({ slug: wrestler.slug }));
}

export async function generateMetadata({ params }: WrestlerRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const wrestler = wrestlers.find((item) => item.slug === slug);

  if (!wrestler) {
    return {
      title: "Wrestler Not Found",
    };
  }

  return {
    title: wrestler.name,
    description: `Profile page for ${wrestler.name} at KOLOSI-Infinit Wrestling Club.`,
  };
}

export default async function WrestlerSinglePage({ params }: WrestlerRouteProps) {
  const { slug } = await params;
  const wrestler = wrestlers.find((item) => item.slug === slug);

  if (!wrestler) {
    notFound();
  }

  return <WrestlerDetailPage wrestler={wrestler} />;
}
