import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoSoftPlayCleaning from "@/components/WwoSoftPlayCleaning";
import React from "react";

export const metadata = {
  title: "Expert Soft Play Cleaning Services by CQD Professionals",
  description:
    "CQD provides specialized soft play cleaning solutions using child-safe, eco-friendly products and thorough techniques to ensure a hygienic, safe, and fun environment for children.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Soft Play Cleaning"
        description="Keep your soft play areas safe and spotless with our expert cleaning services using child-friendly, eco-safe products tailored for play centers of all sizes."
        backgroundImage="/services/softPlayCleaing1.jpg"
        imageAlt="Soft Play Cleaning Services"
      />

      <WwoSoftPlayCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
