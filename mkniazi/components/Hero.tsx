"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Header } from "./Header";

const Hero: React.FC<{}> = () => {
  const heros = [
    "/hero/hero1.png",
    "/hero/hero2.png",
    "/hero/hero3.png",
    "/hero/hero4.png",
    "/hero/hero5.png",
    "/hero/hero6.png",
    "/hero/hero7.png",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      if (count > 6) {
        setCount(1);
      }
    }, 1000000);
  }, [count]);

  return (
    <div className="min-h-screen bg-[#ECECEC] flex-col p-3 min-w-[370px] items-center ">
      <Header />
      <div className="items-center  lg:flex justify-center lg:h-[88vh] pt-[12%] pb-[12%]">

        <Image className="mr-0 w-[70vw] lg:w-[26vw] xl:w-[16vw] 2xl:mr-[25vw]" width={450} height={450} src={heros[count] ? heros[count] : "/hero/hero1.png"} alt="circle design" />

        {/* settings */}
        <div className="  mt-[3vh] lg:mt-[0vh] lg:ml-[5rem] 2xl: w-[22rem]">
          <h3 className="text-[24px] leading-7 sm:text-[30px] sm:leading-9 ">
            Brand Identity, <br /> Packaging & Web
          </h3>

          <p className="text-[16px] text-[#3A3A3A] mt-2 leading-5 sm:text-[18px]">
            Helping brands to stand out in the digital era. Together we will set the new status quo.
          </p>
          <Button className="hidden rounded-full w-[170px] h-[38px] text-[12px] lg:block mt-4 bg-[#ECECEC] text-black border hover:text-white">
            SCROLL FOR MORE ▼{" "}
          </Button>
        </div>
      </div>

      <div className="flex mt-4 ml-3 w-[92%] sm: self-center pb-5">
        <Button className="rounded-full  w-[120px] h-[33px] text-[10px] hover:text-white lg:hidden">Let’s talk</Button>
        <div className="w-[100%] flex justify-end ">
          <p className="text-[10px] mt-3 lg:absolute bottom-14 right-[5%] ">@2023</p>
          <p className="text-[10px] mt-3 lg:absolute bottom-14 left-[5%] hidden lg:block">
            BEHANCE &nbsp;&nbsp; INSTAGRAM &nbsp;&nbsp; LINKEDIN{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
