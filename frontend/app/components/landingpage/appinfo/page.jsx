"use client";
import { useRef } from "react";
import { phone1 } from "@/app/assets/images";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AppInfo = () => {
  //const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full py-16 md:px-16 bg-[--bgGrey] flex items-center justify-center overflow-hidden">
      {/* Instructions Carousel UI Component */}
      <Carousel
        className="w-full gap-6 flex flex-col-reverse lg:flex-row items-center justify-center "
        // plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <div className="flex py-16 w-[400px] flex-col justify-center items-start">
          <span className="text-sm text-black uppercase">How to use app</span>
          <span className="text-2xl text-[--green] font-bold uppercase">

            Step One
          </span>
          <p className=" mt-3">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum
          </p>

          {/* Carousel Navigation Buttons */}
          <div className="w-[40%]  flex justify-start items-center gap-3 mt-3">
            <CarouselPrevious className="shadow-none border-none" />
            <CarouselNext className="shadow-none border-none" />
          </div>
        </div>

        <CarouselContent className="w-full md:w-[600px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <Card className="w-full flex justify-center items-center bg-transparent border-none shadow-none">
                <CardContent className="relative flex w-full items-center justify-center ">
                  <Image
                    src={phone1}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Waste Management Services"
                    className="rounded-lg"
                    style={{ width: "100%", height: "auto" }}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AppInfo;
