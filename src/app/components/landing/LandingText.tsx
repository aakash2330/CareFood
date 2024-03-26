import Image from "next/image";
import pizza from "../../../../public/pizza.png";
import heart from "../../../../public/heart.jpeg";
import { ArrowRight } from "lucide-react";

function LandingText() {
  return (
    <>
    <div className="bg-[#70EA5C38] w-[99px] h-[98px] rounded-full absolute top-56 left-52"></div>
    <div className="flex flex-col">
      <div className="text-[#5F5F5F]  font-semibold text-5xl max-w-[500px] leading-normal ">
        <div>
          ORDER WITH PURPOSE{" "}
          <Image src={pizza} alt="pizza" className="ml-60 -mt-16 w-14 h-14" />
        </div>
      </div>
      <div className="text-[#5F5F5F]  font-semibold text-5xl max-w-[500px] leading-normal mt-10">
        DONATE WITH HEART{" "}
        <Image
          src={heart}
          alt="heart"
          className="w-12 h-12 ml-[510px] -mt-16"
        />
      </div>
      <div className="font-semibold text-base text-[#5F5F5F] max-w-[550px] mt-4">
        Order food for yourself while making a difference by donating to those
        in need—all in one platform.
      </div>
      <div className="flex gap-x-5 mt-9">
        <button className="text-[#5F5F5F] font-semibold text-xl hover:bg-[#7afd64] hover:text-white rounded-xl px-2 py-1">Order Now!</button>
        <button className=" bg-[#70EA5C] hover:bg-[#7afd64] px-4 py-2 text-[#F6F6F6] font-semibold text-xl flex gap-x-1 rounded-xl">Try it out <ArrowRight className="w-6 h-5 mt-1"/></button>
      </div>
    </div>
    </>
  );
}

export default LandingText;
