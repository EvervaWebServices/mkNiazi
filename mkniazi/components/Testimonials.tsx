import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials: React.FC<{}> = () => {
  return (
    <div className="p-3 lg:flex flex-1 mb-[5%] 2xl: w-[95%]">
      <div className="uppercase font-[500] lg: mt-[4%] ml-4">Testimonials</div>
      <div className="mt-[5%] flex flex-row ml-[5%] lg:ml-[45%]">
        {" "}
        <Avatar className="w-[90px] h-[90px]  ml-3 ">
          <AvatarImage src="/testimonial.png" />
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <div className="ml-8 lg:ml-14">
          <h2 className="font-[500]">Zain Ahmed Khan</h2>
          <h2 className="font-[500]">Co-Founder / CEO</h2>
          <h2 className="font-[500]">Hashmaker Solutions</h2>
          <p className="text-xs font-[500] text-[#1A1A1A] lg:text-sm max-w-lg">
            I have followed Muhammad’s work for a while now but recently we hired him for branding/design. We have found
            Muhammad Khan extremely prompt, reliable and creative when it came to being our designer. <br />
            <br />
            We were not only thrilled with his craftsmanship, attentiveness and design sensibilities, but also by his
            creative input. He was able to help us identify many aspects of our product which we weren’t thinking about
            initially
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
