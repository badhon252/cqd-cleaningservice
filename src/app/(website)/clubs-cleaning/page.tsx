import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoClubsCleaning from "@/components/WwoClubCleaning";
import React from "react";

export const metadata = {
  title: "Expert Clubs Cleaning Services by CQD Professionals",
  description:
    "CQD provides professional cleaning services for clubs, ensuring a hygienic and inviting environment with attention to high-traffic areas and detailed sanitation.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Clubs Cleaning"
        description="Maintain a spotless, welcoming club environment with our expert cleaning services tailored for nightlife venues, lounges, and entertainment spaces."
        backgroundImage="/services/clubCleaning1.jpg"
        imageAlt="Clubs Cleaning Services"
      />

      <WwoClubsCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
