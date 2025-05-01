import LandingNavbar from "@/components/landing-navbar";
import Hero from "@/components/hero";

// Full homepage content components
import VitalIntro from "@/components/vital-intro";
import AboutVitalPhysio from "@/components/about-vital-physio";
import PhilosophyApproach from "@/components/philosophy-approach";
import ConditionsSummary from "@/components/conditions-summary";
import EquipmentShowcase from "@/components/equipment-showcase";
import JointRehabSummary from "@/components/joint-rehab-summary";
import PatientJourney from "@/components/patient-journey";
import WhyChooseVital from "@/components/why-choose-vital";

export default async function Home() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <VitalIntro />
      <AboutVitalPhysio />
      <PhilosophyApproach />
      <ConditionsSummary />
      <EquipmentShowcase />
      <JointRehabSummary />
      <PatientJourney />
      <WhyChooseVital />
    </>
  );
}
