import Image from "next/image";

const Portfolio: React.FC<{}> = () => {
  return (
    <div className="w-[100%] text-white">
      {/* for mobile view */}
      <div className="w-[100%] text-white lg:hidden">
        <img src="/work-card-2.png" alt="Photo by Drew Beamer" className=" object-cover " width="100%" />

        <div className="w-[100] h-[160px] bg-[#3A3A3A] opacity-50 z-20 mb-10 -mt-[43%] xs:-mt-[30%] sm:-mt-[25%]">
          <div className="flex w-[100%] p-3">
            <h3 className="">01-10</h3>
            <img className="ml-[79%] h-4 mt-3" src="/arrow-2.png" alt="circle design" />
          </div>

          <h2 className="ml-3 text-xl"> Crazy</h2>

          <div className="flex ml-3 mt-3 z-50 text-white ">
            <h1 className="w-[24%]">TYPE </h1>
            <h1 className="w-[50%]">DESCRIPTION </h1>
            <h1 className="w-[24%]">YEAR </h1>
          </div>
          <div className="flex ml-3 mt-1 z-50 text-white text-xs sm:text-[13px]">
            <h1 className="w-[24%]">Identity Web Design </h1>
            <h1 className="w-[50%]">White-label fintech solution in dubai </h1>
            <h1 className="w-[24%]">2023 </h1>
          </div>
        </div>
      </div>

{/* for desktop view */}
      <div className="hidden lg:flex bg-black flex-row">
        <div className="pt-4 w-[50%] ">
        <img src="/work-card-details.png" alt="Photo by Drew Beamer" className=" " width="100%" />
        </div>

        <div className="pt-4 w-[50%] ">
        <img src="/work-card-2.png" alt="Photo by Drew Beamer" className="  " width="99.93%" />
        </div>

        <img src="/arrLeft.png" alt="Photo by Drew Beamer" className="absolute mt-[30%] left-[2%]" width="50px" />
        <img src="/arrRight.png" alt="Photo by Drew Beamer" className="absolute mt-[30%] right-[2%]" width="50px" />
     

      </div>
    </div>
  );
};

export default Portfolio;
