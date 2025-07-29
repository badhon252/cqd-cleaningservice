import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoDentalCleaning from "@/components/WwoDentalCleaning";
import React from "react";

export const metadata = {
  title: "Expert Data Centre Cleaning Services by CQD Professionals",
  description:
    "CQD offers specialized data centre cleaning solutions using anti-static, eco-friendly methods to ensure a dust-free, secure, and equipment-safe environment.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Data Centre Cleaning"
        description="Protect your sensitive equipment with our expert data centre cleaning services, ensuring a dust-free, static-safe, and controlled environment."
        backgroundImage="/services/dataCenter1.jpg"
        imageAlt="Data Centre Cleaning Services"
      />

      <WwoDentalCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
