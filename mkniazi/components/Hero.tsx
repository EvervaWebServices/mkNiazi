import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-[#ECECEC] flex-col p-3 min-w-[370px] items-center ">
      <div className="flex justify-between ml-[5%] pt-8 sm:self-center lg:self-start pl-3 w-[90%] 2xl:ml-24 ">
        <Image className=" " width={230} height={80} src="/logo.svg" alt="Logo" />

        <h4 className="text-[10px] tracking-tight font-light sm:text-[12px] lg:w-30 leading-4 ml-[10%] 2xl:">
          DESIGNER <br /> PORTFOLIO /2020 -2023
        </h4>

        <h4 className="text-[10px] tracking-tight font-light pl-6 sm:text-[12px] lg:w-30 leading-4 ml-[10%] 2xl:">
          AVAILABLE FOR FREELANCE <br /> PROJECTS
        </h4>
        <Button className="rounded-full w-[120px] h-[38px] text-[10px] hidden lg:block ml-[10%] ">Let’s talk</Button>
      </div>
      <div className="items-center lg:flex  ml-[20%] mr-[20%] pt-[12%] pb-[12%]">
      <Image
        className=" 2xl: mr-[35%]"
        width={450}
        height={450}
        src="/hero/hero7.png"
        alt="circle design"
      />
{/* settings */}
      <div className="  lg: 2xl: w-[22rem] ml-[5rem]  ">
        <h3 className="text-[24px] leading-7 sm:text-[30px] leading-9 ">
          Brand Identity, <br /> Packaging & Web
        </h3>

        <p className="text-[16px] text-[#3A3A3A] mt-2 leading-5 sm:text-[18px]">
          Helping brands to stand out in the digital era. Together we will set the new status quo.
        </p>
        <Button className="hidden rounded-full w-[170px] h-[38px] text-[12px] lg:block mt-4 bg-[#ECECEC] text-black border hover:text-white">SCROLL FOR MORE ▼ </Button>
      </div>
      </div>

      <div className="flex mt-4 ml-3 w-[92%] sm: self-center pb-5">
        <Button className="rounded-full  w-[120px] h-[33px] text-[10px] hover:text-white lg:hidden">Let’s talk</Button>
        <div className="w-[100%] flex justify-end ">
          <p className="text-[10px] mt-3 lg:absolute bottom-14 right-[5%] ">@2023</p>
          <p className="text-[10px] mt-3 lg:absolute bottom-14 left-[5%] hidden lg:block">BEHANCE  &nbsp;&nbsp;    INSTAGRAM  &nbsp;&nbsp;    LINKEDIN </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
