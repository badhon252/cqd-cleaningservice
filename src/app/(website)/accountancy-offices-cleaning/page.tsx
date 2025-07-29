import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoAccountancyOfficeCleaning from "@/components/WwoAccountancyOfficeCleaning";
import React from "react";

export const metadata = {
  title: "Expert Accountancy Office Cleaning Services by CQD Professionals",
  description:
    "CQD offers premium cleaning services for accountancy offices, ensuring a spotless, professional environment that enhances productivity and impresses clients.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Accountancy Office Cleaning"
        description="Maintain a pristine, organized environment in your accountancy office with our specialized cleaning services designed for accuracy and professionalism."
        backgroundImage="/services/accountancyOfficesCleaning1.jpg"
        imageAlt="Accountancy Office Cleaning Services"
      />

      <WwoAccountancyOfficeCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
