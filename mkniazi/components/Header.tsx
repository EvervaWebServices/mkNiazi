import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export const Header: React.FC<{}> = () => {
  return (
    <header className="flex justify-between ml-[5%] pt-8 sm:self-center lg:self-start pl-3 w-[90%] 2xl:ml-24 ">
      <Link href="/">
        <Image className=" " width={230} height={80} src="/logo.svg" alt="Logo" />
      </Link>

      <h4 className="text-[10px] tracking-tight font-light sm:text-[12px] lg:w-30 leading-4 ml-[10%] 2xl:text-[14px]">
        DESIGNER <br /> PORTFOLIO /2020 -2023
      </h4>

      <h4 className="text-[10px] tracking-tight font-light pl-6 sm:text-[12px] lg:w-30 leading-4 ml-[10%] 2xl:">
        AVAILABLE FOR FREELANCE <br /> PROJECTS
      </h4>
      <Button className="rounded-full w-[120px] h-[38px] text-[10px] hidden lg:block ml-[10%] ">Let’s talk</Button>
    </header>
  );
};
