import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoEventSpaceCleaning = () => {
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
                  src="/services/eventSpaceCleaning2.jpg"
                  alt="Professional Event Space Cleaning Services"
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
                  CQD Cleaning Services specializes in comprehensive event space cleaning before, during, and after your occasion. Whether it’s a corporate meeting, wedding, or public gathering, we ensure your venue looks spotless and inviting.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Our professional team uses eco-friendly cleaning solutions and advanced equipment to deliver outstanding results with minimal disruption, helping you leave a lasting impression on your guests.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Pre-event & post-event full cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Floor, carpet & surface sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trash removal & waste management
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom cleaning & restocking
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fast turnaround & flexible scheduling
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
                  Our team at CQD Cleaning Services understands the time-sensitive nature of event cleaning. We respond quickly and deliver reliable, detailed services that allow you to focus on your event — not the mess.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  With experience across conferences, private parties, exhibitions, and more — our event space cleaning ensures every surface shines and your venue remains pristine throughout.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by event planners & venue managers
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fast, efficient & discreet service
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible cleaning for day or night events
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  No hidden charges or delays
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Satisfaction guaranteed on every job
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
                  src="/services/eventSpaceCleaning3.jpg"
                  alt="Event Venue Cleaning Professionals"
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

export default WwoEventSpaceCleaning;
