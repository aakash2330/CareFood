import LandingImage from "./LandingImage"
import LandingText from "./LandingText"


function Landing() {
  return (
    <div className="ml-10 mt-4 lg:mt-0  pt-[10%] flex md:flex-row  flex-col lg:mr-96 ">
      <LandingText />
      <LandingImage />
    </div>
  )
}

export default Landing
