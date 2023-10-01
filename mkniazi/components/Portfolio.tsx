"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Image from "next/image";
import projects from "@/content/projects";
import Link from "next/link";

const Portfolio: React.FC<{}> = () => {
  const clickItem = (item: number) => {
    window.location.href = "/work/" + item;
  };
  return (
    <div className="w-[100%] text-white">
      {/* for mobile view */}
      {/* <div className="w-[100%] text-white lg:hidden">
        <img src="/work-card-2.png" alt="Photo by Drew Beamer" className=" object-cover " width="100%" />

        <div className="w-[100] h-[160px] bg-[#3A3A3A] opacity-50 z-20 mb-10 -mt-[43%] xs:-mt-[30%] sm:-mt-[25%]">
          <div className="flex w-[100%] p-3">
            <h3 className="">01-10</h3>
            <img className="ml-[79%] h-4 mt-3" src="/arrow-2.png" alt="circle design" />
          </div>

          <h2 className="ml-3 text-xl"> Crazy</h2>

          <div className="flex ml-3 mt-3 z-50 text-white ">
            <h1 className="w-[24%]">TYPE </h1>
            <h1 className="w-[50%]">DESCRIPTION </h1>
            <h1 className="w-[24%]">YEAR </h1>
          </div>
          <div className="flex ml-3 mt-1 z-50 text-white text-xs sm:text-[13px]">
            <h1 className="w-[24%]">Identity Web Design </h1>
            <h1 className="w-[50%]">White-label fintech solution in dubai </h1>
            <h1 className="w-[24%]">2023 </h1>
          </div>
        </div>
      </div> */}

      {/* for desktop view */}
      <div className=" lg:flex bg-black flex-row">
        {/* <div className="pt-4 w-[50%] ">
        <img src="/portfolio/hero3.png" alt="Photo by Drew Beamer" className=" " width="100%"/>
        </div>

        <div className="pt-4 w-[50%] ">
        <img src="/work-card-2.png" alt="Photo by Drew Beamer" className="  " width="99.93%" />
        </div>

        <img src="/arrLeft.png" alt="Photo by Drew Beamer" className="absolute mt-[30%] left-[2%]" width="50px" />
        <img src="/arrRight.png" alt="Photo by Drew Beamer" className="absolute mt-[30%] right-[2%]" width="50px" />
      */}

        <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          onClickItem={(item) => {
            clickItem(item);
          }}
        >
          {projects.map((h) => (
            <div className="flex relative" key={h.key}>
              {/* <Link href="/work/1"> */}
              <Image alt="aaa" width={1200} height={600} src={h.url} />
              <div className=" absolute w-[100%]">
                <div className="w-[100%]">
                  <h1 className=" mt-2 text-xl md:mt-[6rem] lg:text-5xl ">{h.name}</h1>

                  {/* <div className="flex text-xs mt-8">
                    <div className=" ">
                      <h1 className="w-100 px-6 py-4">TYPE</h1>
                      <h1 className="w-120 px-6">{h.type}</h1>
                    </div>
                    <div className=" ">
                      <h1 className="w-120 px-6 py-4">DESCRIPTION</h1>
                      <h1 className="w-120 px-6">{h.description}</h1>
                    </div>
                    <div className=" ">
                      <h1 className="w-100 px-6 py-4">YEAR</h1>
                      <h1 className="w-100 px-6">{h.year}</h1>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
