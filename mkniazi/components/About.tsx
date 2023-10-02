"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Portfolio from "./Portfolio";
import Info from "./Info";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";

const About: React.FC<{}> = () => {
  const descriptions = [
    ` I am a design enthusiast working to help companies stand out through user-centric visual strategies. I've worked
  with more than 20 companies as a freelancer on brand identity, package design, and web design, aka improving
  their brand representation/narrative`,
    `  I am a design enthusiast working to help companies stand out through user-centric visual strategies. I've
worked with more than 20 companies as a freelancer on brand identity, package design, and web design, ak`,
  ];

  return (
    <div className="flex items-center min-h-screen bg-white flex-col pt-10 ">
      <div className="flex bg-white flex-col  ml-[5%]">
        <div className="flex items-center  bg-white flex-col lg:flex-row 2xl:justify-between w-[90%]">
          {/* for desktop display */}
          <div className="text-[16px] mt-0 text-[#3A3A3A] w-[33%] font-[500] hidden  lg:block 2xl:text-xl">
            ABOUT ME
          </div>

          {/* <Avatar className="w-[300px] h-[300px] z-0 absolute hidden lg:block ">
            <AvatarImage src="/ellipse-3.png" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar> */}

          {/* for mobile */}

          <Avatar className="w-[220px] h-[220px] z-2 mt-[46px] lg: ml-[16px] lg:hidden">
            <AvatarImage src="/niazi.png" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>

          <Avatar className="w-[310px] h-[310px] z-0 absolute lg:hidden">
            <AvatarImage src="/ellipse-3.png" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>

          <h3 className="mt-[12%] px-5 text-[16px] text-[#3A3A3A] lg:hidden font-semibold ">{descriptions[0]}</h3>
          <h3 className="pb-[10%] pt-[10%] px-5 text-[16px] text-[#3A3A3A] w-[60%] font-semibold hidden  lg:block 2xl:text-xl">
            {descriptions[0]}
          </h3>
          <Avatar className="w-[230px] h-[230px] z-2 mt-[22px] lg: ml-[50px] hidden lg:block ">
            <AvatarImage src="/niazi.png" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
        </div>
        <div className="hidden lg:flex justify-between flex-row ">
          <div className="w-[30%] text-[#3A3A3A] ">
            <h3 className="font-[700] text-sm pb-3 2xl:text-base">Identity Design</h3>
            <p className="text-xs font-[500] 2xl:text-base w-[80%]">{descriptions[1]}</p>
          </div>
          <div className="w-[30%] text-[#3A3A3A] mx-[1%] mb-[7%]">
            <h3 className="font-[700] text-sm pb-3 2xl:text-base">Pakaging Design</h3>
            <p className="text-xs font-[500] 2xl:text-base w-[80%]">{descriptions[1]}</p>
          </div>
          <div className="w-[30%] text-[#3A3A3A] mx-[1%] mb-[7%]">
            <h3 className="font-[700] text-sm pb-3 2xl:text-base">Web Design</h3>
            <p className="text-xs font-[500] 2xl:text-base w-[80%]">{descriptions[1]}</p>
          </div>
          <div className="w-[16%] text-[#3A3A3A] ml-[1%]  ">
            <Button className="hidden rounded-full w-[150px] h-[36px] text-[10px] lg:block mt-[30%]  bg-[#FFFFFF] text-black hover:text-white border ml-7 2xl:mt-[20%]">
              SCROLL FOR MORE ▼
            </Button>
          </div>
        </div>
      </div>

      <hr className="w-[92%] mt-[4%] border-[1px] lg:hidden " style={{ color: "black" }} />

      <Accordion type="single" collapsible className="w-[92%] lg:hidden">
        <AccordionItem className="border-b-2" value="item-1">
          <AccordionTrigger>Identity Design</AccordionTrigger>
          <AccordionContent>{descriptions[1]}</AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-2" value="item-2">
          <AccordionTrigger>Pakaging Design</AccordionTrigger>
          <AccordionContent>{descriptions[1]}</AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-3">
          <AccordionTrigger className=" ">Web Design</AccordionTrigger>
          <AccordionContent>{descriptions[1]}</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Portfolio />

      <Info />

      <hr className="w-[92%] mt-[3%] border-[1px] " style={{ color: "black" }} />

      <Experience />

      <Testimonials />

      {/* <Button className="rounded-full w-[120px] h-[33px] text-[10px] mb-6 lg:hidden">Let’s talk</Button> */}

      <Footer />
    </div>
  );
};

export default About;
