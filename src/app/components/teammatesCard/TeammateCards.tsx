import Image from "next/image"
import heart from "../../../../public/heart.jpeg"
import { Cards } from "./cards"

function TeammateCards() {
  return (
    <div className="mt-20 text-center">
      <div className="flex text-[#5F5F5F] text-6xl font-semibold justify-center gap-x-4"> Meet Our Team  <Image src={heart} alt="heart" className="h-12 w-12 mt-2"/> </div>
      <Cards />
    </div>
  )
}

export default TeammateCards
