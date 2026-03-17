import StandUpHero from "@/components/standup/StandUpHero";
import StandUpIntro from "@/components/standup/StandUpIntro";
import SpectaclesSection from "@/components/standup/SpectaclesSection";
import CreationSection from "@/components/standup/CreationSection";
import PressSection from "@/components/standup/PressSection";
import AlchimieSection from "@/components/standup/AlchimieSection";
import ContactSection from "@/components/shared/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stand-Up – Sarah Linda",
  description:
    "Sarah Linda sur scène. Découvrez ses spectacles de stand-up : La Folie, L'Apaisement et bien plus.",
};

export default function StandUpPage() {
  return (
    <>
      <StandUpHero />
      <StandUpIntro />
      <SpectaclesSection />
      <CreationSection />
      <PressSection />
      <AlchimieSection />
      <ContactSection />
    </>
  );
}
