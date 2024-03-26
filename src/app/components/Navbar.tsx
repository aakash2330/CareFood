import Authenticate from "./Authenticate"
import Logo from "./Logo"
import NavLinks from "./NavLinks"


function Navbar() {
  return (
    <div className="max-w-screen px-2 md:px-4 lg:px-10 py-7 shadow-md h-24 flex justify-between items-center">
      <Logo />
      <NavLinks />
      <Authenticate />
    </div>
  )
}

export default Navbar
