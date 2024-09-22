import React from "react";
import Image from "next/image";
import { hero1 } from "@/app/assets/images";

const About = () => {
  return (
    <div
      className="w-full px-8 py-16 md:p-16 flex flex-col justify-start items-center bg-[--bgGrey]"
      id="About Us"
    >
      <span className="uppercase text-3xl text-[--green] font-bold pb-8">
        we are kyrus
      </span>
      <p className="md:px-32 w-full leading-10 md:leading-[60px] text-lg font-medium text-left">
        Kyrus is a forward-thinking recycling company based in Edo state,
        Nigeria. Our mission is to revolutionize waste management by leveraging
        technology to connect waste generators with our dedicated aggregators.
        We believe that sustainability and environmental responsibility are
        essential for a cleaner, healthier future. <br /> <br />
        Kyrus should have its story told in various spaces, seamlessly spanning
        digital, print, social, and video. Adhering to these guidelines wil
        preserve equilibrium, yet these guidelines are m o r e than mere
        creative oversight. They are meant to define and elucidate, to unify and
        inspire, and to serve as a guide and platform for constructing the Kyrus
        story and making the brand tangible as we communicate the unique Kyrus
        experience and impact.
        <br />
        <br />
        This document is intended for those responsible for creating marketing
        communication materials for Kyrus, ensuring a consistent voice that
        enhances the user experience on the platform.
      </p>

      <div className="relative w-full px-3 py-16 md:p-32 flex flex-col gap-16 md:gap-64 justify-start items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="relative w-full md:w-[80%] ">
            <Image
              src={hero1}
              width={0}
              height={0}
              sizes="100vw"
              alt="our mission"
              className="rounded-lg shadow-xl"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="flex flex-col gap-3 justify-start items-start w-full md:w-[60%]">
            <span className="text-[--green] text-2xl font-bold">
              Our Mission
            </span>
            <p className="font-medium leading-10 text-lg">
              Kyrus Recycling Ventures is driven by the mission to reduce the
              environmental burden of waste in Nigeria by promoting recycling
              and behavioral change. The company aims to establish a
              comprehensive system where waste is minimized, with a particular
              focus on the effective management and recycling of organic matter
              and kitchen waste. In doing so, Kyrus is committed to meeting
              international standards for waste management and recycling.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-16">
          <div className="flex flex-col gap-3 justify-start items-start w-full md:w-[60%]">
            <span className="text-[--green] text-2xl font-bold">
              Our Vision
            </span>
            <p className="font-medium leading-10 text-lg">
              To be the leading waste recycling and material recovery Facility
              in Southern Nigeria, engineering behavioral change towards a more
              sustainable environment, moving people from the current method of
              consumption to a more sustainable mechanism that keeps our
              environment safe.
            </p>
          </div>

          <div className="relative w-full md:w-[80%]">
            <Image
              src={hero1}
              width={0}
              height={0}
              sizes="100vw"
              alt="our mission"
              className="rounded-lg shadow-xl"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
