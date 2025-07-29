import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoDentalCleaning from "@/components/WwoDentalCleaning";
import React from "react";

export const metadata = {
  title: "Professional Dental Clinic Cleaning Services by CQD Experts",
  description:
    "CQD provides specialized dental clinic cleaning using hospital-grade, eco-friendly products to ensure a sterile, hygienic, and compliant environment for patients and staff.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Dental Clinic Cleaning"
        description="Maintain a sterile, safe, and hygienic dental environment with our expert cleaning services tailored for dental clinics and healthcare facilities."
        backgroundImage="/services/DentalCleaning1.jpg"
        imageAlt="Dental Clinic Cleaning Services"
      />

      <WwoDentalCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
