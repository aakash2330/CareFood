import Image from "next/image"
import coffee from "../../../../public/coffiandmilk-removebg-preview 1.png"
import coffeeBg from "../../../../public/Polygon 1.png"

function LandingImage() {
  return (
    <div className="flex    items-center flex-wrap mt-10 sm:mt-16 md:-mt-16  lg:-mt-5  -ml-8 sm:-ml-10    lg:ml-20 xl:ml-[400px]" >
        <Image src={coffeeBg} alt="coffeeg" className="z-0 relative left-16   lg:left-32 xl:left-36  lg:h-[340px] w-[200px] lg:w-[400px] xl:min-w-[250px] "/>
      <Image src={coffee} className="lg:h-[400px] lg:w-[500px]  w-[400px] h-[300px] z-10 absolute"  alt="coffee"/>
    </div>
  )
}

export default LandingImage
