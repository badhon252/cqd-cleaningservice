import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoGymCleaning from "@/components/WwoGymCleaning";
import React from "react";

export const metadata = {
  title: "Expert Gym Cleaning Services by CQD Professionals",
  description:
    "CQD provides top-quality gym cleaning solutions using eco-friendly products and thorough techniques to maintain a hygienic, safe, and welcoming fitness environment.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Gym Cleaning"
        description="Maintain a hygienic and safe workout environment with our expert gym cleaning services designed for fitness centers of all sizes."
        backgroundImage="/services/gymCleaning1.jpg"
        imageAlt="Gym Cleaning Services"
      />

      <WwoGymCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
