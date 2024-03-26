import Image from "next/image"
import coffee from "../../../../public/coffiandmilk-removebg-preview 1.png"
import coffeeBg from "../../../../public/Polygon 1.png"

function LandingImage() {
  return (
    <div className="flex justify-between items-center flex-wrap  -mt-5 ml-20">
        <Image src={coffeeBg} alt="coffeeg" className="z-0 relative left-28 h-[340px] w-[300px]"/>
      <Image src={coffee} className="h-[400px] w-[550px] z-10 absolute"  alt="coffee"/>
    </div>
  )
}

export default LandingImage
