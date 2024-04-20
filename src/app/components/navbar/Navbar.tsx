
import Authenticate from "./Authenticate"
import Logo from "./Logo"
import NavLinks from "./NavLinks"



function Navbar() {
  return (
    <div className="w-screen bg-[#F6F6F6] fixed z-30 px-2 md:px-4 lg:px-16 py-7 shadow-md h-24 flex justify-between items-center">
      <Logo />
      <NavLinks />
      <Authenticate />
    </div>
  )
}

export default Navbar
