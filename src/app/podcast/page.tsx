import PodcastHero from "@/components/podcast/PodcastHero";
import PodcastAbout from "@/components/podcast/PodcastAbout";
import EpisodesSection from "@/components/podcast/EpisodesSection";
import PodcastSocials from "@/components/podcast/PodcastSocials";
import PartenairesSection from "@/components/podcast/PartenairesSection";
import ContactSection from "@/components/shared/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast – Avec Sarah Linda",
  description:
    "Le podcast avec Sarah Linda : humour, sincérité et culot. Disponible sur YouTube, Spotify, Apple Podcasts et toutes les plateformes.",
};

export default function PodcastPage() {
  return (
    <>
      <PodcastHero />
      <PodcastAbout />
      <EpisodesSection />
      <PodcastSocials />
      <PartenairesSection />
      <ContactSection />
    </>
  );
}
