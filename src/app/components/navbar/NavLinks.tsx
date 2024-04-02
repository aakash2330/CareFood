import Link from "next/link"


function NavLinks() {
  return (
    <div className="sm:flex hidden  sm:gap-x-5 md:gap-x-10 lg:gap-x-20 text-[#343434] mt-1 font-medium text-lg">
      <Link href={"/"} className="hover:bg-black/10 py-1  px-3 rounded-xl">Home</Link>
      <Link href={"/"} className="hover:bg-black/10 py-1  px-3 rounded-xl">About Us</Link>
      <Link href={"/"} className="hover:bg-black/10 py-1  px-3 rounded-xl">Services</Link>
    </div>
  )
}

export default NavLinks
