import LandingImage from "./LandingImage"
import LandingText from "./LandingText"


function Landing() {
  return (
    <div className=" mt-4 ml-32 mr-56 lg:mt-0  pt-[10%] flex md:flex-row  flex-col justify-between max-w-screen-xl">
      <LandingText />
      <LandingImage />
    </div>
  )
}

export default Landing
