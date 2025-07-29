import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoDentalCleaning = () => {
  return (
    <div>
      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/DentalCleaning2.jpg"
                  alt="Professional Dental Clinic Cleaning Services"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[100px] rounded-br-[100px]"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What We Offer
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services specializes in thorough dental clinic cleaning designed to maintain the highest standards of hygiene and infection control. Our trained team ensures your clinic remains sterile, safe, and welcoming for patients and staff.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From treatment rooms and waiting areas to sterilization zones and restrooms, we use hospital-grade, eco-friendly cleaning products to prevent contamination and promote a healthy environment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Pre- and post-treatment room sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Sterilization area and equipment cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waiting room & reception area hygiene
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of medical-grade, eco-friendly disinfectants
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waste disposal compliant with healthcare regulations
                </div>
              </div>

              <div className="mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Choose Us
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  At CQD Cleaning Services, we understand the critical importance of cleanliness and infection control in dental healthcare settings. Our team is fully trained to meet healthcare standards and deliver meticulous cleaning tailored to your clinic’s needs.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We offer flexible scheduling, competitive pricing, and a satisfaction guarantee — helping your clinic maintain a pristine, safe environment for your patients and staff.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by dental clinics and healthcare professionals
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fully trained & certified cleaning specialists
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Tailored cleaning schedules to fit your clinic hours
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing with no hidden fees
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee on all services
                </div>
              </div>

              <div className="mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/DentalCleaning3.jpg"
                  alt="Expert Dental Clinic Cleaning Professionals"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tr-[100px] rounded-bl-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WwoDentalCleaning;
