import HeroPresentation from "@/components/presentation/HeroPresentation";
import ProfileSection from "@/components/presentation/ProfileSection";
import MissionSection from "@/components/presentation/MissionSection";
import CasquettesSection from "@/components/presentation/CasquettesSection";
import TransitionSection from "@/components/presentation/TransitionSection";
import EvolutionSection from "@/components/presentation/EvolutionSection";
import ContactSection from "@/components/shared/ContactSection";

export default function PresentationPage() {
  return (
    <>
      <HeroPresentation />
      <ProfileSection />
      <MissionSection />
      <CasquettesSection />
      <TransitionSection />
      <EvolutionSection />
      <ContactSection />
    </>
  );
}
