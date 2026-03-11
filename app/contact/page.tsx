import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KOLOSI-Infinit Wrestling Club in Prizren by WhatsApp, email, or contact form.",
};

export default function Contact() {
  return <ContactPage />;
}
