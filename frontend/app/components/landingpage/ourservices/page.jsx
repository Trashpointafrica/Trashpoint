import Image from "next/image";
import React from "react";
import { Rectangle_59, Rectangle_60 } from "@/app/assets/svg/index";

const OurServices = () => {
  const points = [
    "Our processes are designed to minimize environmental impact, including advanced recycling techniques and safe disposal methods.",
    "With regular pickup schedules and easy-to-use services, we make waste management simple and hassle-free for you.",
    "You earn cash backs on every item you recycle.",
    "Utilizing the latest technology for waste tracking and management ensures that our services are efficient and reliable.",
    "We focus on reclaiming valuable materials from waste, turning trash into resources that can be reused or repurposed.",
    "Our team of professionals brings years of experience and knowledge to manage your waste efficiently and effectively.",
  ];

  return (
    <>
      <div className="w-full relative overflow-hidden">
        {/* Left SVG */}
        <Image
          src={Rectangle_59}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "500px", height: "500px" }}
          className="absolute top-[-90px] left-[-180px]"
        />
        {/* Right SVG */}
        <Image
          src={Rectangle_60}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "500px", height: "500px" }}
          className="absolute top-[12%] right-[-180px]"
        />

        <div className="relative container 4xl min-w-min mx-auto text-center px-5 py-32 overflow-hidden">
          <span className="text-2xl font-bold">
            WHY USE <span className="text-[--green]">KYRUS</span>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 align-middle py-16">
            {points.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="h-3 w-3 p-2.5 bg-green-500 rounded-full mt-1 mr-2"></div>
                <p className="text-left">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"./hero.svg"}
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
          className="h-[776px] w-full"
        />
      </div>
    </>
  );
};

export default OurServices;
