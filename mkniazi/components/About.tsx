"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Portfolio from "./Portfolio";
import Info from "./Info";
import Experience from "./Experience";
import { Button } from "@/components/ui/button";

const About: React.FC<{}> = () => {
  return (
    <div className="flex items-center min-h-screen bg-white flex-col pt-10 ">
      <Avatar className="w-[190px] h-[190px] z-2 mt-[52px]">
        <AvatarImage src="/niazi.png" />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>

      <Avatar className="w-[300px] h-[300px] z-0 absolute">
        <AvatarImage src="/ellipse-3.png" />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>

      <h3 className="mt-[12%] px-5 text-[16px] text-[#3A3A3A]">
        I am a design enthusiast working to help companies stand out through user-centric visual strategies. I've worked
        with more than 20 companies as a freelancer on brand identity, package design, and web design, aka improving
        their brand representation/narrative
      </h3>
      <hr className="w-[92%] mt-[4%] border-[1px] " style={{ color: "black" }} />

      <Accordion type="single" collapsible className="w-[92%] ">
        <AccordionItem className="border-b-2" value="item-1">
          <AccordionTrigger>Identity Design</AccordionTrigger>
          <AccordionContent>
            I am a design enthusiast working to help companies stand out through user-centric visual strategies. I've
            worked with more than 20 companies as a freelancer on brand identity, package design, and web design, ak
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-2" value="item-2">
          <AccordionTrigger>Pakaging Design</AccordionTrigger>
          <AccordionContent>
            I am a design enthusiast working to help companies stand out through user-centric visual strategies. I've
            worked with more than 20 companies as a freelancer on brand identity, package design, and web design, ak
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-3">
          <AccordionTrigger className=" ">Web Design</AccordionTrigger>
          <AccordionContent>
            I am a design enthusiast working to help companies stand out through user-centric visual strategies. I've
            worked with more than 20 companies as a freelancer on brand identity, package design, and web design, ak
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Portfolio />

      <Info />

      {/* <hr className="w-[92%] mt-[4%] border-[1px] " style={{ color: "black" }} /> */}

      {/* <Experience /> */}

      {/* <hr className="w-[92%] mt-[4%] border-[1px] " style={{ color: "black" }} /> */}

      <Button className="rounded-full w-[40%] m-10  text-s text-white">Let’s talk</Button>
    </div>
  );
};

export default About;
