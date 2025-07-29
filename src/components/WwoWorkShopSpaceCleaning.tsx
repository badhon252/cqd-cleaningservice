import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoWorkShopSpaceCleaning = () => {
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
                  src="/services/workshopSpaceCleaning2.jpg"
                  alt="Professional Workshop Space Cleaning Services"
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
                  CQD Cleaning Services specializes in workshop space cleaning,
                  providing thorough removal of dust, debris, and grease to
                  maintain a safe and efficient working environment.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Our team uses industrial-grade, non-abrasive cleaning methods
                  tailored for machinery, workbenches, floors, and ventilation
                  systems to minimize downtime and maximize productivity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Heavy-duty floor and surface cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Machinery exterior degreasing and dust removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Safe ventilation and duct sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Workbench and tool area cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waste and debris removal
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
                  Our technicians are experienced in cleaning industrial
                  workshop spaces, understanding the unique challenges of
                  grease, dust, and debris in these environments.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services is dedicated to delivering reliable,
                  safe, and efficient cleaning that keeps your workshop
                  operational and compliant with health and safety standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Expertise in industrial cleaning protocols
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of eco-friendly, non-toxic cleaning agents
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible scheduling to minimize downtime
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing and detailed service reports
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by manufacturing and craft industries
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
                  src="/services/workshopSpaceCleaning3.jpg"
                  alt="Workshop Space Cleaning Experts at Work"
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

export default WwoWorkShopSpaceCleaning;
