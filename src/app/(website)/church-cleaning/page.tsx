import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoChurchCleaning from "@/components/WwoChurchCleaning";
import React from "react";

export const metadata = {
  title: "Trusted Church Cleaning Services by CQD Experts",
  description:
    "CQD provides respectful and thorough church cleaning using safe, eco-friendly products to maintain a pristine, welcoming, and sacred environment for your congregation.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Church Cleaning"
        description="Maintain a clean, respectful, and welcoming worship space with our expert church cleaning services designed for sanctuaries, halls, and common areas."
        backgroundImage="/services/churchCleaning1.jpg"
        imageAlt="Church Cleaning Services"
      />

      <WwoChurchCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
