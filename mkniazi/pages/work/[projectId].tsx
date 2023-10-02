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

export default function Projects() {
  const router = useRouter();
  const projectId = Number(router.query.projectId);

  let proj = projects[projectId];
  if (proj === undefined) {
    proj = projects[0];
  }
  return (
    <>
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
                <h3 className="w-[20vw] lg:w-[15vw]">White Label Fintech Solution</h3>
              </div>
              <div>
                <h3 className="mb-[2vh]">YEAR</h3>
                <h3>2023</h3>
              </div>
            </div>
            <div className="flex  justify-around text-sm mt-[5vh] md:justify-start">
              <div>
                <h3 className="mb-[2vh]">SCOPE OF WORK</h3>
                <h3 className="w-[20vw] lg:w-[15vw]">Brand Identity Web Design</h3>
              </div>
              <div>
                <h3 className="mb-[2vh]">LOCATION</h3>
                <h3>Dubai, UAE</h3>
              </div>
            </div>
            </div>
            <div className="mt-[5vh] text-base ml-[0vw] lg:mt-3 lg:ml-[10vw] lg:text-xl font-medium	">
              <p className="text-justify ">
                Encore Pay is a white-label fintech platform provider. With a vision to "democratize finance for the
                better", They offer an end-to-end fintech platform to our clients that would help them bring their
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
      <div>text stuff</div>
      <div>
        <h1>Other Works</h1>
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}
