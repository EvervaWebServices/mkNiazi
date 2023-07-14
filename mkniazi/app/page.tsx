import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
