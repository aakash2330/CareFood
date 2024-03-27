import Image from "next/image";
import pizza from "../../../../public/pizza.png";
import heart from "../../../../public/heart.jpeg";
import { ArrowRight } from "lucide-react";

function LandingText() {
  return (
    <div className="lg:min-w-[400px]">
    <div className="bg-[#70EA5C38] w-[99px] h-[98px] rounded-full absolute left-8 sm:left-[6%] md:left-[7%] lg:left-[10%] xl:left-[5%] top-32 sm:top-[26%] md:top-[27%] lg:top-[28%] xl:top-[33%]"></div>
    <div className="flex flex-col">
      <div className="text-[#5F5F5F]  font-semibold text-4xl lg:text-5xl max-w-[300px]  sm:max-w-[400px] md:max-w-[300px] lg:max-w-[500px] xl:min-w-[600px] leading-normal ">
        <div>
          ORDER WITH PURPOSE{" "}
          <Image src={pizza} alt="pizza" className="ml-44 sm:ml-[400px] md:ml-[180px] lg:ml-60 xl:ml-[540px] -mt-14 lg:-mt-12 xl:-mt-14 w-12 lg:w-14 h-12 lg:h-14" />
        </div>
      </div>
      <div className="text-[#5F5F5F]  font-semibold text-4xl lg:text-5xl max-w-[300px] sm:max-w-[400px] md:max-w-[300px] xl:min-w-[500px] leading-normal mt-10">
        DONATE WITH HEART{" "}
        <Image
          src={heart}
          alt="heart"
          className="w-9  lg:w-11 h-9 lg:h-11 ml-32 sm:ml-96 md:ml-32 lg:ml-[100%]  -mt-12"
        />
      </div>
      <div className="font-semibold pr-20 text-base text-[#5F5F5F] max-w-[550px] sm:max-w-[350px] lg:max-w-[550px] xl:min-w-[600px] mt-4">
        Order food for yourself while making a difference by donating to those
        in need—all in one platform.
      </div>
      <div className="flex gap-x-5  mt-9">
        <button className="text-[#5F5F5F] font-semibold text-base lg:text-xl bg-[#7afd64] lg:bg-transparent  hover:bg-[#7afd64] hover:text-white rounded-xl px-2 py-1">Order Now!</button>
        <button className=" bg-[#70EA5C]  hover:bg-[#7afd64] px-4 py-2 text-[#F6F6F6] font-semibold text-xl flex gap-x-1 rounded-xl">Try it out <ArrowRight className="w-6 h-5 mt-1"/></button>
      </div>
    </div>
    </div>
  );
}

export default LandingText;
