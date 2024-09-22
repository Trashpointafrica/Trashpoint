import React from "react";
import { precious, triumph, akhigbe, wuraola } from "@/app/assets/images";
import Image from "next/image";

const Team = () => {
  return (
    <div className="w-full px-3 py-16 pt-2 md:p-16 flex flex-col gap-16 justify-center items-center bg-[--bgGrey]">
      <span className="text-[--green] font-bold text-4xl">Meet The Team</span>
      <p className="p-4 md:px-20 font-medium leading-10 md:leading-[50px] text-lg">
        At Kyrus we believe that great people drive great results. Our team is
        made up of passionate individuals who are dedicated to transforming the
        way waste is managed, recycled, and valued. Each member brings unique
        expertise and a shared commitment to sustainability, ensuring that we
        deliver innovative and effective solutions to our clients.
      </p>

      <div className="flex md:gap-8 flex-wrap justify-center items-center ">
        <div className="w-[300px] gap-16 flex flex-col justify-between items-center   shadow-xl shadow-gray-900 rounded-xl mb-8 md:mt-24 bg-white pt-6">
          <Image
            src={triumph}
            width={100}
            height={100}
            sizes="100vw"
            alt="Waste Management Services"
            className="rounded-lg "
            style={{ width: "250px", height: "auto" }}
          />
          <div className="w-full h-[100px] bg-black rounded-xl text-white">
            <div className="text-center mt-6 text-lg justify-center gap-1">
              <h5>Triumph Ekhosayator</h5>
              <span className="text-sm ">Research and Development</span>
            </div>
          </div>
        </div>
        <div className="w-[300px] md:gap-16  flex flex-col justify-between items-center   shadow-xl shadow-gray-900 rounded-xl mb-8 md:mb-24 bg-white pt-6">
          <Image
            src={akhigbe}
            width={100}
            height={100}
            sizes="100vw"
            alt="Waste Management Services"
            className="rounded-lg "
            style={{ width: "250px", height: "auto" }}
          />
          <div className="w-full h-[100px] bg-black rounded-xl   shadow-xl text-white ">
            <div className="text-center mt-6 text-lg justify-center gap-1">
              <h5>Akhigbe Eromosele </h5>
              <span className="text-sm ">Operations & Partner Manager</span>
            </div>
          </div>
        </div>
        <div className="w-[300px] md:gap-16 flex flex-col justify-between items-center   shadow-xl shadow-gray-900 rounded-xl mb-8 md:mt-24 bg-white pt-6">
          <Image
            src={wuraola}
            width={100}
            height={100}
            sizes="100vw"
            alt="Waste Management Services"
            className="rounded-lg "
            style={{ width: "250px", height: "auto" }}
          />
          <div className="w-full h-[100px] bg-black rounded-xl text-white">
            <div className="text-center mt-6 text-lg justify-center gap-1">
              <h5>Wuraola Kuforiji</h5>
              <span className="text-sm ">Finance</span>
            </div>
          </div>
        </div>
        <div className="w-[300px] md:gap-16 flex flex-col justify-between items-center   shadow-xl shadow-gray-900 rounded-xl mb-8 md:mb-24 bg-white pt-6">
          <Image
            src={precious}
            width={100}
            height={100}
            sizes="100vw"
            alt="Waste Management Services"
            className="rounded-lg "
            style={{ width: "250px", height: "auto" }}
          />
          <div className="w-full h-[100px] bg-black rounded-xl text-white">
            <div className="text-center mt-6 text-lg justify-center gap-1">
              <h5>Precious Aikhomu</h5>
              <span className="text-sm ">Tech Dev.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
