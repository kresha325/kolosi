"use client";
/* eslint-disable @next/next/no-img-element */

import { useLanguage } from "@/components/LanguageProvider";

type MediaItem = {
  id: number;
  type: "image" | "video";
  src?: string;
  title: { sq: string; en: string };
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "",
    title: { sq: "Foto 1", en: "Photo 1" },
  },
  {
    id: 2,
    type: "image",
    src: "",
    title: { sq: "Foto 2", en: "Photo 2" },
  },
  {
    id: 3,
    type: "video",
    src: "",
    title: { sq: "Video 1", en: "Video 1" },
  },
  {
    id: 4,
    type: "image",
    src: "",
    title: { sq: "Foto 3", en: "Photo 3" },
  },
  {
    id: 5,
    type: "video",
    src: "",
    title: { sq: "Video 2", en: "Video 2" },
  },
  {
    id: 6,
    type: "image",
    src: "",
    title: { sq: "Foto 4", en: "Photo 4" },
  },
];

const content = {
  sq: {
    title: "Galeri",
    subtitle:
      "Shto imazhe nga /public/images, video nga /public/videos ose lidhje CDN direkte.",
    emptyImage: "Vend bosh për imazh",
    emptyVideo: "Vend bosh për video",
  },
  en: {
    title: "Gallery",
    subtitle:
      "Add images from /public/images, videos from /public/videos, or direct CDN links.",
    emptyImage: "Empty image slot",
    emptyVideo: "Empty video slot",
  },
};

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell page-stack">
      <h1>{t.title}</h1>
      <p className="lead-text">{t.subtitle}</p>

      <div className="gallery-grid">
        {mediaItems.map((item) => {
          const hasSource = Boolean(item.src && item.src.trim().length > 0);
          const title = item.title[language];

          return (
            <figure key={item.id} className="gallery-item">
              {hasSource && item.type === "image" ? (
                <img src={item.src} alt={title} loading="lazy" />
              ) : null}

              {hasSource && item.type === "video" ? (
                <video controls preload="metadata" aria-label={title}>
                  <source src={item.src} />
                </video>
              ) : null}

              {!hasSource ? (
                <div className="media-placeholder small">
                  {item.type === "image" ? t.emptyImage : t.emptyVideo}
                </div>
              ) : null}

              <figcaption>{title}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
