
import Image from "next/image"
import feature1 from "../../../../public/ok-removebg-preview 1.svg"
import feature2 from "../../../../public/food-item 1.svg"
import feature3 from "../../../../public/image 1.svg"

function Features() {
  return (
    <div className="bg-[#38DB4A]  h-[400px] w-full mt-44 flex  px-24 py-20 items-center justify-between">
      <div className="h-[290px] w-[215px] bg-[#FCFCFC] rounded-3xl flex flex-col py-5 px-2">
        <Image src={feature1} alt="" className="w-40 h-30 ml-2"/>
        <div className="bg-[#F2F2F2] h-1 mx-4 mt-5"></div>
        <div className="text-[#5F5F5F] font-bold text-sm mx-3 mt-4">Discover a diverse range of restaurants in your vicinity and place orders effortlessly.</div>
      </div>
      <div className="rounded-full bg-[#FCFCFC] text-center h-20 w-20 text-[#5F5F5F] pt-5 font-semibold text-4xl">1</div>
       <div className="h-[290px] w-[215px] bg-[#FCFCFC] rounded-3xl flex flex-col py-5 px-2">
        <Image src={feature2} alt="" className="w-40 h-30 ml-3"/>
        <div className="bg-[#F2F2F2] h-1 mx-4 mt-5"></div>
        <div className="text-[#5F5F5F] font-bold text-sm mx-3 mt-4">Rest assured knowing that every NGO listed is thoroughly vetted and trusted for your donations.</div>
      </div>
      <div className="rounded-full bg-[#FCFCFC] h-20 w-20 text-center text-[#5F5F5F]  pt-5 font-semibold text-4xl">2</div>
       <div className="h-[290px] w-[215px] bg-[#FCFCFC] rounded-3xl flex flex-col py-5 px-2">
        <Image src={feature3} alt="" className="w-40 h-24 ml-3 "/>
        <div className="bg-[#F2F2F2] h-1 mx-4 mt-6"></div>
        <div className="text-[#5F5F5F] font-bold text-sm ml-3 mr-2 mt-3">Contribute to meaningful causes by safely donating your excess food to the NGO of your choice.</div>
      </div>
    </div>
  )
}

export default Features
