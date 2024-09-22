"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { eclipse, girl, guy, joy, man } from "@/app/assets/images";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      name: "Emily S.",
      quote:
        "Their customer service and waste collection process are seamless. They made the whole process effortless and even offer suggestions on reducing waste.",
      image: eclipse,
    },
    {
      name: "Mia k.",
      quote:
        "Their customer service and waste collection process are seamless. They made the whole process effortless and even offer suggestions on reducing waste.",
      image: joy,
    },
    {
      name: "James R.",
      quote:
        "Their customer service and waste collection process are seamless. They made the whole process effortless and even offer suggestions on reducing waste.",
      image: girl,
    },
    {
      name: "Sophia L.",
      quote:
        "Their customer service and waste collection process are seamless. They made the whole process effortless and even offer suggestions on reducing waste.",
      image: guy,
    },
    {
      name: "Kaite F.",
      quote:
        "Their customer service and waste collection process are seamless. They made the whole process effortless and even offer suggestions on reducing waste.",
      image: man,
    },
  ];

  return (
    <>
      <div className="w-full px-3 py-8 lg:px-16 lg:py-32 flex flex-col justify-center items-center overflow-hidden">
        <span className=" text-2xl md:text-4xl p-6 text-center font-bold">
          What our clients are saying
        </span>

        <div className="flex justify-center items-center gap-6 overflow-hidden">
          <div className=" relative w-full flex items-center justify-center gap-6 overflow-hidden antialiased">
            <InfiniteMovingCards
              items={reviews}
              direction="left"
              speed="slow"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
