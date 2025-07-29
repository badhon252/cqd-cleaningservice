import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoEventSpaceCleaning from "@/components/WwoEventSpaceCleaning";
import React from "react";

export const metadata = {
  title: "Professional Event Space Cleaning Services by CQD Experts",
  description:
    "CQD ensures spotless event venues before and after your gatherings, using eco-friendly products and expert techniques to keep spaces clean, welcoming, and guest-ready.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Event Space Cleaning"
        description="Keep your venue spotless and guest-ready with our expert event space cleaning services—ideal for pre- and post-event sanitation."
        backgroundImage="/services/eventSpaceCleaning1.jpg"
        imageAlt="Event Space Cleaning Services"
      />

      <WwoEventSpaceCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
