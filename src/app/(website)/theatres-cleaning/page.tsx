import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoMovieTheatreCleaning from "@/components/WwoTheatreCleaning";
import React from "react";

export const metadata = {
  title: "Expert Movie Theatre Cleaning Services by CQD Professionals",
  description:
    "CQD provides specialized movie theatre cleaning services using eco-friendly products and detailed techniques to ensure a clean, safe, and enjoyable environment for moviegoers and staff.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Theatres Cleaning"
        description="Ensure a clean, comfortable, and hygienic movie experience with our expert cleaning services tailored for cinemas and movie theatres."
        backgroundImage="/services/theatre1.jpg"
        imageAlt="Movie Theatre Cleaning Services"
      />

      <WwoMovieTheatreCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
