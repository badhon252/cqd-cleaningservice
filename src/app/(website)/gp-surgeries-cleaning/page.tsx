import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoGPSurgeriesCleaning from "@/components/WwoGPSurgeriesCleaning";
import React from "react";

export const metadata = {
  title: "Expert GP Surgeries Cleaning Services by CQD Professionals",
  description:
    "CQD provides specialized GP surgeries cleaning solutions using eco-friendly products and stringent hygiene protocols to ensure a safe, sterile, and welcoming healthcare environment.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional GP Surgeries Cleaning"
        description="Maintain a clean, sterile, and safe environment with our expert GP surgeries cleaning services designed to meet healthcare standards."
        backgroundImage="/services/gPSurgeries1.jpg"
        imageAlt="GP Surgeries Cleaning Services"
      />

      <WwoGPSurgeriesCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
