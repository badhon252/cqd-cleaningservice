import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoCinemaCleaning from "@/components/WwoCinemaCleaning";
import React from "react";

export const metadata = {
  title: "Expert Cinema Cleaning Services by CQD Professionals",
  description:
    "CQD provides specialized cinema cleaning services using eco-friendly products and detailed procedures to ensure spotless auditoriums, lobbies, and concession areas for a premium movie-going experience.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Cinema Cleaning"
        description="Deliver a spotless and comfortable cinema environment with our specialized cleaning services designed for auditoriums, lobbies, and common areas."
        backgroundImage="/services/cinemaCleaning1.jpg"
        imageAlt="Cinema Cleaning Services"
      />

      <WwoCinemaCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
