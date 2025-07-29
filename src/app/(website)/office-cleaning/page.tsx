import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwwOfficeCleaning from "@/components/WwwOfficeCleaning";
import React from "react";

export const metadata = {
  title: "Expert Office Cleaning Services by CQD Professionals",
  description:
    "CQD delivers top-tier office cleaning solutions using eco-friendly products and meticulous techniques to maintain a clean, healthy, and productive workplace.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Office Cleaning"
        description="Ensure a spotless, healthy office environment with our expert cleaning services tailored for businesses of all sizes."
        backgroundImage="/services/office-cleaning1.jpg"
        imageAlt="Office Cleaning Services"
      />

      <WwwOfficeCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
