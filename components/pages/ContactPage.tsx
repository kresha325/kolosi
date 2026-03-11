"use client";

import { MessageSquare, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";

const content = {
  sq: {
    title: "Kontakt",
    clubLabel: "KOLOSI-Infinit Klubi i Mundjes",
    addressLabel: "Adresa",
    address: 'Qendra Sportive "Sezair Surroi"',
    cityLabel: "Qyteti",
    city: "Prizren",
    postalCodeLabel: "Kodi Postar",
    postalCode: "20000",
    countryLabel: "Shteti",
    country: "Kosovë",
    email: "Email",
    formTitle: "Na kontaktoni",
    name: "Emri dhe Mbiemri",
    emailField: "Email",
    message: "Mesazhi",
    submit: "Dërgo",
    mapTitle: "Lokacioni në Hartë",
    callNow: "Telefono Tani",
    whatsappNow: "WhatsApp",
    smsNow: "SMS",
    endpointMissing:
      "Vendos NEXT_PUBLIC_FORMSPREE_ENDPOINT në .env.local për të aktivizuar dërgimin me email.",
  },
  en: {
    title: "Contact",
    clubLabel: "KOLOSI-Infinit Wrestling Club",
    addressLabel: "Address",
    address: 'Sports Center "Sezair Surroi"',
    cityLabel: "City",
    city: "Prizren",
    postalCodeLabel: "Postal Code",
    postalCode: "20000",
    countryLabel: "Country",
    country: "Kosovo",
    email: "Email",
    formTitle: "Contact Form",
    name: "Full Name",
    emailField: "Email",
    message: "Message",
    submit: "Send",
    mapTitle: "Location on Map",
    callNow: "Call Now",
    whatsappNow: "WhatsApp",
    smsNow: "SMS",
    endpointMissing:
      "Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local to enable email delivery.",
  },
};

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const mapEmbedUrl =
  "https://www.google.com/maps?q=6P9W%2BFF6%2C%20Bazhdarhane%2C%20Prizren%2020000&output=embed";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="site-shell page-stack">
      <h1>{t.title}</h1>

      <div className="contact-layout">
        <article className="content-card">
          <h2>{t.clubLabel}</h2>
          <div className="contact-info-list">
            <p>
              <strong>{t.addressLabel}:</strong> {t.address}
            </p>
            <p>
              <strong>{t.cityLabel}:</strong> {t.city}
            </p>
            <p>
              <strong>{t.postalCodeLabel}:</strong> {t.postalCode}
            </p>
            <p>
              <strong>{t.countryLabel}:</strong> {t.country}
            </p>
          </div>

          <div className="contact-inline-actions">
            <a
              href="tel:+38349158322"
              className="inline-action-link"
              aria-label={t.callNow}
              title={t.callNow}
            >
              <Phone size={20} strokeWidth={2.2} />
              <span className="sr-only">{t.callNow}</span>
            </a>
            <a
              href="https://wa.me/38349158322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-action-link"
              aria-label={t.whatsappNow}
              title={t.whatsappNow}
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              <span className="sr-only">{t.whatsappNow}</span>
            </a>
            <a
              href="sms:+38349158322"
              className="inline-action-link"
              aria-label={t.smsNow}
              title={t.smsNow}
            >
              <MessageSquare size={20} strokeWidth={2.2} />
              <span className="sr-only">{t.smsNow}</span>
            </a>
          </div>
          <p>
            <strong>{t.email}:</strong>{" "}
            <a href="mailto:sadikferati@hotmail.com">sadikferati@hotmail.com</a>
          </p>
        </article>

        <article className="content-card">
          <h2>{t.formTitle}</h2>
          <form
            className="contact-form"
            action={formspreeEndpoint || "#"}
            method="post"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from KOLOSI-Infinit website"
            />
            <input type="hidden" name="_language" value={language} />
            <label>
              {t.name}
              <input type="text" name="name" required />
            </label>
            <label>
              {t.emailField}
              <input type="email" name="email" required />
            </label>
            <label>
              {t.message}
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="primary-btn">
              {t.submit}
            </button>
            {!formspreeEndpoint ? <small>{t.endpointMissing}</small> : null}
          </form>
        </article>
      </div>

      <article className="content-card">
        <h2>{t.mapTitle}</h2>
        <iframe
          src={mapEmbedUrl}
          title={t.mapTitle}
          className="map-embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </article>
    </section>
  );
}
