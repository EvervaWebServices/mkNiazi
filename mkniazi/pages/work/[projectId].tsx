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
      <div>text stuff</div>
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
        <Portfolio/>
      </div>
      <Footer />
    </>
  );
}
