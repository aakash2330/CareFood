import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Body from "./components/Body"
import { redirect } from "next/navigation"



async function page() {
  const {isAuthenticated} = getKindeServerSession()
  const isLoggedIn = await isAuthenticated()

  // if(!isLoggedIn){
  //   redirect('/api/auth/login')
  // }
  return (
    <div className="flex flex-col items-center">
        <Body />
    </div>
  )
}

export default page
