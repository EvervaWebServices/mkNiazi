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
      <div className=" lg:flex bg-black flex-row">
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
              <Image alt="aaa" width={1200} height={600} src={h.url} />
              <div className=" absolute w-[100%]">
                <div className="w-[100%]">
                  <h1 className=" mt-2 text-xl md:mt-[6rem] lg:text-5xl ">{h.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
