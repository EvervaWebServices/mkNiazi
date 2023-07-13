import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#ECECEC] flex-col p-3 pt-10">
      <div className="flex justify-items-stretch">
        <Image className="pr-8 pl-3" width={230} height={80} src="/logo.svg" alt="Logo" />

        <h4 className="text-[10px] tracking-tight leading-3 font-light  ">DESIGNER PORTFOLIO /2020 -2023</h4>

        <h4 className="text-[10px] tracking-tight leading-3 font-light pl-9">AVAILABLE FOR FREELANCE PROJECTS</h4>
      </div>
      <Image className="mt-[14%]" width={380} height={330} src="/ellipse-3.png" alt="circle design" />

      <div className=" pl-3">
        <h3 className="text-[24px] leading-7  ">
          Brand Identity, <br /> Packaging & Web
        </h3>

        <p className="text-[16px] text-[#3A3A3A] w-[70%] mt-2 leading-5  ">Helping brands to stand out in the digital era. Together we will set the new status quo.</p>
      </div>

      <div className="flex items-end w-[100%]">

        
        <p className="text-[10px]">@2023</p>
      </div>
    </main>
  );
}
