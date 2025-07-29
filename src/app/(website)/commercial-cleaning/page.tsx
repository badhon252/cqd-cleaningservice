import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoCommercialCleaning from "@/components/WwoCommercialCleaning";
import React from "react";

export const metadata = {
  title: "Reliable Commercial Cleaning Services by CQD Experts",
  description:
    "CQD offers comprehensive commercial cleaning solutions using eco-safe products and professional methods to keep your business environment spotless, healthy, and welcoming.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Commercial Cleaning"
        description="Keep your commercial space pristine and professional with our expert cleaning services designed for all types of businesses."
        backgroundImage="/services/commercialCleaning1.jpg"
        imageAlt="Commercial Cleaning Services"
      />

      <WwoCommercialCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
