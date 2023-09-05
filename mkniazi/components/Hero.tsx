import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero: React.FC<{}> = () => {
  return (
    <div className="flex min-h-screen bg-[#ECECEC] flex-col items-stretch p-3 min-w-[370px]">
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
      <div className=" items-center justify-center lg:flex 2xl:">
      <Image
        className="mt-[9%] h-[50%] lg:ml-[16%] "
        width={450}
        height={450}
        src="/ellipse-3.png"
        alt="circle design"
      />
{/* settings */}
      <div className=" pl-3 sm:self-center mt-[4%] ml-5 lg:ml-[10%] 2xl:mt-[5%]">
        <h3 className="text-[24px] leading-7 sm:text-[30px] leading-9 lg:mt-16">
          Brand Identity, <br /> Packaging & Web
        </h3>

        <p className="text-[16px] text-[#3A3A3A] mt-2 leading-5 sm:text-[18px] w-[50%] lg:w-[50%]">
          Helping brands to stand out in the digital era. Together we will set the new status quo.
        </p>
        <Button className="hidden rounded-full w-[170px] h-[38px] text-[12px] lg:block mt-4 bg-[#ECECEC] text-black border hover:text-white">SCROLL FOR MORE ▼ </Button>
      </div>
      </div>

      <div className="flex mt-4 ml-3 w-[92%] sm: self-center ">
        <Button className="rounded-full  w-[120px] h-[33px] text-[10px] hover:text-white lg:hidden">Let’s talk</Button>
        <div className="w-[100%] flex justify-end">
          <p className="text-[10px] mt-3 lg:absolute bottom-10 right-[5%] ">@2023</p>
          <p className="text-[10px] mt-3 lg:absolute bottom-10 left-[5%] hidden lg:block">BEHANCE  &nbsp;&nbsp;    INSTAGRAM  &nbsp;&nbsp;    LINKEDIN </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
