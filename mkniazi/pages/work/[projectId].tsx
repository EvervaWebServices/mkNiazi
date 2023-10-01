import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import 'tailwindcss/tailwind.css'
import '../../app/globals.css'
import projects from "@/content/projects";
import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter()
  const projectId = Number(router.query.projectId)

  let proj = projects[projectId]
  if (proj === undefined){
    proj = projects[0]
  }  
  console.log(proj)
  return (
   <>
   <Header />
   {/* <h1>This is the project name {proj.name}</h1> */}
   <div className="">
    

   </div>

   </>
  );
}
