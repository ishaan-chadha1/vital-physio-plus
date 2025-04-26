// app/page.tsx or pages/index.tsx depending on your setup

import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";
import LandingNavbar from "@/components/landing-navbar";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default async function Home() {
  return (
    <>
      <LandingNavbar/>
      <Hero />
      <AboutUs />
      <Services/>
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
