import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View photo and video gallery for KOLOSI-Infinit Wrestling Club. Supports static assets and CDN links.",
};

export default function Gallery() {
  return <GalleryPage />;
}
