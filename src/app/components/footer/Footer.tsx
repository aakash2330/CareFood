import { Instagram, Linkedin, Twitter, X } from "lucide-react"
import Link from "next/link"

function Footer() {
  return (
    <div className="bg-black h-[300px] w-full mt-20 px-52      py-10 flex  justify-between" >
      <Link href={"/"} className="flex gap-x-1 -mt-2">
      <div className="w-9 h-10 bg-[#38DB4A] px-1 rounded-xl text-4xl pt-[1px]  mt-[8px] text-[#E4EBE3] font-semibold">C</div>
      <div className="mt-3 font-semibold text-3xl text-[#70EA5C]">AREFOOD</div>
    </Link>
    <div className="flex flex-col gap-y-4 text-[#5F5F5F]">
        <div className="text-xl text-white font-semibold">Company</div>
        <div className="text-lg hover:text-white cursor-pointer">FAQ</div>
        <div className="text-lg hover:text-white cursor-pointer">About Us</div>
        <div className="text-lg hover:text-white cursor-pointer">Privacy Policy</div>
        <div className="text-lg hover:text-white cursor-pointer">Terms of Service</div>
    </div>
    <div className="flex flex-col gap-y-4 text-[#5F5F5F]">
        <div className="text-xl text-white font-semibold">Company</div>
        <div className="text-lg hover:text-white cursor-pointer">Find a Restaurant</div>
        <div className="text-lg hover:text-white cursor-pointer">Register a NGO</div>
      
    </div>
    <div className="flex flex-col gap-y-4 text-[#5F5F5F]">
    <div className="text-xl text-white font-semibold">Contact Us</div>
    <div className="flex gap-x-3">
        <div className="text-lg hover:text-white cursor-pointer"><Twitter /></div>
        <div className="text-lg hover:text-white cursor-pointer"><Instagram /></div>
        <div className="text-lg hover:text-white cursor-pointer"><Linkedin /></div>
    </div>
    </div>
    </div>
  )
}

export default Footer
