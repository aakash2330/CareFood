import Link from "next/link"


function Logo() {
  return (
    <Link href={"/"} className="flex gap-x-1 -mt-2">
      <div className="w-8 h-9 bg-[#38DB4A] px-2 rounded-xl text-2xl py-[3px] mt-[6px] text-[#E4EBE3] font-semibold">C</div>
      <div className="mt-3 font-semibold text-xl text-[#70EA5C]">AREFOOD</div>
    </Link>
  )
}

export default Logo
