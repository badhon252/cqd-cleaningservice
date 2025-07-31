import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoNurseryCleaning from "@/components/WwoNurseryCleaning";
import React from "react";

export const metadata = {
  title: "Professional Nursery Cleaning Services by CQD Experts",
  description:
    "CQD provides specialized nursery cleaning using safe, eco-friendly products and thorough methods to create a hygienic, healthy environment for children and caregivers.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Nursery Cleaning"
        description="Ensure a safe, clean, and healthy nursery environment with our expert cleaning services tailored specifically for childcare facilities."
        backgroundImage="/services/nurseryCleaning2.jpg"
        imageAlt="Nursery Cleaning Services"
      />

      <WwoNurseryCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
