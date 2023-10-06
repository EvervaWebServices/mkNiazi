import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import "tailwindcss/tailwind.css";
import "../../app/globals.css";
import projects from "@/content/projects";
import { useRouter } from "next/router";
import Image from "next/image";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";

const visby = localFont({
  src: [
    {
      path: "../../public/visby/VisbyCF-DemiBold.otf",
      weight: "600",
    },
    {
      path: "../../public/visby/VisbyCF-Medium.otf",
      weight: "400",
    },
  ],
  variable: "--font-visby",
});

export default function Projects() {
  const router = useRouter();
  const projectId = Number(router.query.projectId);

  let proj = projects[projectId];
  if (proj === undefined) {
    proj = projects[0];
  }

 

  return (
    <div className={visby.className }>
      <Header />
      {/* <h1>This is the project name {proj.name}</h1> */}
      <div className="flex justify-center">
        <Image alt="aaa" className="w-[85vw] mt-[4vh] " width={1200} height={600} src={proj.url} />
      </div>
      <div className="flex justify-center mt-[5vh] lg: ">
        <div className="w-[85vw]">
          <p className="text-xs">01-10</p>
          <h2 className="text-xl">{proj.name}</h2>

          <div className="lg:flex">
            <div className="">
              <div className="flex justify-between text-sm mt-[2vh] md:justify-start">
                <div className="">
                  <h3 className="mb-[2vh]">TYPE</h3>
                  <h3 className="w-[20vw] lg:w-[15vw] ">Identity Web Design</h3>
                </div>
                <div>
                  <h3 className="mb-[2vh]">DESCRIPTION</h3>
                  <h3 className="w-[25vw] lg:w-[15vw]">White Label Fintech Solution</h3>
                </div>
                <div>
                  <h3 className="mb-[2vh]">YEAR</h3>
                  <h3>2023</h3>
                </div>
              </div>
              <div className="flex justify-between text-sm mt-[5vh] md:justify-start">
                <div>
                  <h3 className="mb-[2vh] mr-[20vw] lg:mr-0">SCOPE OF WORK</h3>
                  <h3 className="w-[20vw] lg:w-[15vw]">Brand Identity Web Design</h3>
                </div>
                <div>
                  <h3 className="mb-[2vh]">LOCATION</h3>
                  <h3>Dubai, UAE</h3>
                </div>
              </div>
            </div>
            <div className="mt-[5vh] text-base ml-[0vw] lg:mt-3 lg:ml-[10vw] lg:w-[30vw] lg:text-xl font-medium	">
              <p className="text-justify ">
                Encore Pay is a white-label fintech platform provider. With a vision to democratize finance for the
                better, They offer an end-to-end fintech platform to our clients that would help them bring their
                financial products to the market as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image alt="aaa" className="w-[100vw] mt-[4vh] " width={1200} height={600} src={proj.url2} />
      </div>
      <div className="flex justify-center">
        <Image alt="aaa" className="w-[70vw] mt-[10vh] mb-[10vh] " width={1200} height={600} src={proj.url4} />
      </div>
      <div className="flex justify-center">
        <Image alt="aaa" className="w-[100vw] " width={1200} height={600} src={proj.url3} />
      </div>
      <div className="flex justify-center">
        <div className="w-[85vw] mt-[5vh] mb-[5vh] flex justify-between lg:mt-[10vh] lg:mb-[10vh]">
          <h2 className="text-xs w-[40%] text-justify lg:text-lg lg:w-[15vw] lg:mt-[5vh]">
            Non-commercial project. All content used belongs to their respective owner.
          </h2>

          <div className="text-xs lg:text-base lg:flex lg:mr-[5vw]">
            <div>
              <h2 className="mb-[2vh]">CREDITS</h2>
              <h2>Branding</h2>
              <h2>Art Direction</h2>
              <h2>Web Design</h2>
            </div>

            <h2 className="text-xs mt-[4vh] lg:text-base lg:mt-[6vh] lg:ml-[5vw]">Muhammad K Niazi</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[85vw] " />
      </div>

      <div>
        <div className="flex justify-center">
          <h1 className="text-xl mt-[3vh] mb-[3vh] lg:text-4xl lg:mt-[10vh] lg:mb-[10vh]">Other Works</h1>
        </div>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}
