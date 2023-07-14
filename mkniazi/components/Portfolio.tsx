import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Portfolio: React.FC<{}> = () => {
  return (
    <div className="w-[100%] ">
      <AspectRatio className="z-0" ratio={16 / 9}>
        <img src="/work-card-2.png" alt="Photo by Drew Beamer" className=" object-cover " width="100%" />
      </AspectRatio>

      <div className="w-[100] h-[160px] bg-[#3A3A3A] mt-[25.5%] opacity-50 z-20">
        <h3>01-10</h3>
        <h3> Crazy</h3>
        
      </div>
    </div>
  );
};

export default Portfolio;
