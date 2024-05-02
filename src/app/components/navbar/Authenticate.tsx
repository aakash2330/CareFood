"use client";

import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import DropDownAccountMenu from "./AccountDropDown";
function Authenticate() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  return (
    <div className="flex  gap-x-2 md:gap-x-6 ">
      {!isAuthenticated ? (
        <>
          <LoginLink className="text-[#343434] mt-1 font-medium text-lg ">
            Login
          </LoginLink>
          <LoginLink className="rounded-xl text-[#F6F6F6] font-semibold hover:bg-[#7afd64] bg-[#38DB4A] px-4 py-2">
            Sign Up
          </LoginLink>
        </>
      ) : (
        <>
          {
            // tailwind css loading spinner
            isLoading && (
              <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white/50 mx-auto my-2"></div>
            )
          }
          {user?.picture && (
            <Image
              src={user?.picture}
              alt="Profile picture"
              width={40}
              height={40}
              className="rounded-full  my-2"
            />
          )}
          {user && !user.picture && (
            <div className="h-7 w-7 rounded-full mx-auto my-2 bg-zinc-800 text-xs flex justify-center items-center">
              {user?.given_name?.[0]}
            </div>
          )}
          <div className="text-[#343434] mt-4  font-medium text-lg ">
            <DropDownAccountMenu
              name={user?.given_name ?? "User"}
            ></DropDownAccountMenu>
          </div>
          {isAuthenticated && (
            <LogoutLink
              className={` px-5 text-center h-10 pt-2   mt-2 hover:bg-[#70EA5C] rounded-3xl w-[90%] transition inline-block`}
            >
              Log out
            </LogoutLink>
          )}
        </>
      )}
    </div>
  );
}

export default Authenticate;
