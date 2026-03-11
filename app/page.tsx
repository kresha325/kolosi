import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
	title: "Home",
	description:
		"KOLOSI-Infinit Wrestling Club in Prizren, Kosovo. Join the club and train with a professional team.",
};

export default function Home() {
	return <HomePage />;
}