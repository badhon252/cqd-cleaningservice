import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoWorkShopSpaceCleaning from "@/components/WwoWorkShopSpaceCleaning";
import React from "react";

export const metadata = {
  title: "Expert Workshop Space Cleaning Services by CQD Professionals",
  description:
    "CQD offers specialized workshop space cleaning using eco-friendly products and thorough techniques to maintain a safe, clean, and efficient working environment.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Workshop Space Cleaning"
        description="Maintain a safe and spotless workshop environment with our expert cleaning services tailored to industrial and craft spaces of all sizes."
        backgroundImage="/services/workshopSpaceCleaning1.jpg"
        imageAlt="Workshop Space Cleaning Services"
      />

      <WwoWorkShopSpaceCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
