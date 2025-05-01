"use client";
import LandingNavbar from "@/components/landing-navbar";
import Hero from "@/components/hero";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // delay ensures page is rendered
      }
    }
  }, [pathname]);
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
