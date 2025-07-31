import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoHotelCleaning from "@/components/WwoHotelCleaning";
import React from "react";

export const metadata = {
  title: "Professional Hotel Cleaning Services by CQD Experts",
  description:
    "CQD offers comprehensive hotel cleaning solutions using eco-friendly products and meticulous methods to ensure spotless, sanitized, and welcoming environments for guests and staff.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Hotel Cleaning"
        description="Ensure a pristine and welcoming atmosphere for your guests with our expert hotel cleaning services tailored to meet the highest hospitality standards."
        backgroundImage="/services/hotelCleaning1.jpg"
        imageAlt="Hotel Cleaning Services"
      />

      <WwoHotelCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
