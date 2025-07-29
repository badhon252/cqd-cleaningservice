import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoTheatreCleaning from "@/components/WwoTheatreCleaning";
import React from "react";

export const metadata = {
  title: "Professional Theatre Cleaning Services by CQD Experts",
  description:
    "CQD offers specialized theatre cleaning solutions using eco-friendly products and meticulous methods to maintain a pristine, safe, and welcoming environment for audiences and performers alike.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Theatre Cleaning"
        description="Maintain a spotless and inviting theatre environment with our expert cleaning services designed specifically for theatres and auditoriums."
        backgroundImage="/services/theatreCleaning1.jpg"
        imageAlt="Theatre Cleaning Services"
      />

      <WwoTheatreCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
