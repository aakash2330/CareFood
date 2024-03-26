import LandingImage from "./LandingImage"
import LandingText from "./LandingText"


function Landing() {
  return (
    <div className="ml-44 pt-[10%] flex sm:flex-row flex-col  gap-x-20">
      <LandingText />
      <LandingImage />
    </div>
  )
}

export default Landing
