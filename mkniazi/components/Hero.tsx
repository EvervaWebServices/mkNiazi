import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero: React.FC<{}> = () =>{
    return <div className="flex min-h-screen bg-[#ECECEC] flex-col items-stretch p-3">
        <div className="flex justify--stretch pt-8 sm:self-center"> 
            <Image className="pr-8 " width={230} height={80} src="/logo.svg" alt="Logo" />

            <h4 className="text-[10px] tracking-tight leading-3 font-light sm:text-[12px] ">DESIGNER PORTFOLIO /2020 -2023</h4>

            <h4 className="text-[10px] tracking-tight leading-3 font-light pl-6 sm:text-[12px]">AVAILABLE FOR FREELANCE PROJECTS</h4>
        </div>
        <Image className="mt-[14%] self-center " width={380} height={330} src="/ellipse-3.png" alt="circle design" />

        <div className=" pl-3 sm:self-center mt-[5%]">
            <h3 className="text-[24px] leading-7 sm:text-[30px] leading-9">
                Brand Identity, <br /> Packaging & Web
            </h3>

            <p className="text-[16px] text-[#3A3A3A] w-[70%] mt-2 leading-5 sm:text-[18px] w-[60%] ">
                Helping brands to stand out in the digital era. Together we will set the new status quo.
            </p>
        </div>

        <div className="flex mt-4 ml-3 w-[92%] sm: self-center ">
            <Button className="rounded-full w-[120px] h-[33px] text-[10px] ">Let’s talk</Button>
            <div className="w-[100%] flex justify-end">
            <p className="text-[10px] right-1 mt-3 ">@2023</p>
            </div>
          
        </div>
    </div>;
}

export default Hero;