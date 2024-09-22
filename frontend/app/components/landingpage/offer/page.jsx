import Image from "next/image";
import React from "react";
import { offer } from "@/app/assets/images";

const Offer = () => {
  return (
    <section className="bg-white py-16 w-full px-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-3xl font-bold mb-6">What we offer</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-[24px] pb-2">
                Comprehensive Waste Management Services
              </h3>
              <p className="text-gray-600 w-[90%]">
                Kyrus offers waste collection and transportation to processing
                and disposal, we manage the entire lifecycle of waste, ensuring
                efficient and responsible handling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold pb-2">
                Sustainable Waste Solutions
              </h3>
              <p className="text-gray-600 w-[90%]">
                Kyrus offers eco-friendly services including composting,
                waste-to-energy, and zero-waste initiatives, all designed to
                minimize environmental impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold pb-2">Recycling Programs</h3>
              <p className="text-gray-600 w-[90%]">
                Kyrus offers tailored recycling solutions for paper, plastic,
                glass, metals, and more, helping you reduce waste and support a
                circular economy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold pb-2">
                Residential Waste Services
              </h3>
              <p className="text-gray-600 w-[90%]">
                Kyrus offers a reliable and convenient waste collection and
                recycling services tailored to meet the needs of residential
                communities and individual households.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold pb-2">
                Waste Tracking and Reporting
              </h3>
              <p className="text-gray-600 w-[90%]">
                Detailed tracking and reporting of waste generation, recycling
                rates, and sustainability metrics to help you monitor and
                improve your environmental impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold pb-2">
                Flexible Payment Options
              </h3>
              <p className="text-gray-600 w-[90%]">
                We offer a variety of payment plans and options to accommodate
                different budgets and ensure that waste management services are
                accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src={offer}
            width={100}
            height={100}
            sizes="100vw"
            alt="Waste Management Services"
            className="rounded-lg shadow-lg"
            style={{ width: "567px", height: "737px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
