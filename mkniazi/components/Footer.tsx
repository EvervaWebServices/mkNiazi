import Image from "next/image";
import { Button } from "./ui/button";
const Footer: React.FC<{}> = () => {
  return (
    <div className=" bg-[#ECECEC] w-[100%] pt-10 pb-10">
      <div className="flex  self-center w-[98%]">
        <Image className=" w-[24px] h-[18px] ml-[4%]" width={20} height={20} src="/ig.png" alt="circle design" />
        <Image className=" ml-5   w-[24px] h-[18px]" width={30} height={30} src="/be.png" alt="circle design" />
        <Image className="ml-5  w-[24px] h-[18px]" width={30} height={30} src="/fb.png" alt="circle design" />

        <div className="  ml-[25%] lg:ml-[65%]">
          <Image className="mb-5 w-[170px]" width={150} height={100} src="/project.png" alt="circle design" />
          <Image className=" " width={230} height={100} src="/talk.png" alt="circle design" />
          <Button className="rounded-full w-[120px] h-[33px] text-[10px] mb-6 mt-4 uppercase">Let’s talk</Button>
        </div>
      </div>

      <Image
        className=" lg:w-32 ml-[3.8%] mt-[1%] mb-[2%]"
        width={100}
        height={100}
        src="/copyright.png"
        alt="circle design"
      />
    </div>
  );
};

export default Footer;
