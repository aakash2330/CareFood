"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";

function NavLinks() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const userLocation = useSelector((store: any) => store.location.userLocation);
  // const truncateStr = (str: string) => {
  //   return str.length > 35 ? str.slice(0, 35) + "..." : str;
  // };
  return (
    <div className="sm:flex hidden  sm:gap-x-5 md:gap-x-10 lg:gap-x-20 text-[#343434] mt-1 font-medium text-lg">
      <Link href={"/faq"} className="hover:bg-black/10 py-1  px-3 rounded-xl">
        FAQs
      </Link>
      <div className=" py-1  px-3 rounded-xl flex group">
       
        <Sheet >
          <SheetTrigger className=" custom-underline relative group-hover:text-[#38DB4A] underline underline-offset-4   font-bold text-lg ">Other</SheetTrigger>
          <SheetContent side={"left"}>
          <Sidebar />
          </SheetContent>
        </Sheet>
        {userLocation ? (
          <span className="block cursor-pointer text-[#686b78] mt-[5px] ml-2 text-sm  group-hover:text-black/50">
            {(userLocation?.address)}
          </span>
        ) : (
          <></>
        )}
        <ChevronDown className="cursor-pointer mt-[3px] ml-[1px] text-[#38DB4A]" />
      </div>
      <Link
        href={"/cart"}
        className="hover:bg-black/10 py-1  px-3 rounded-xl flex"
      >
        <ShoppingCart />
        <div> - {cartItems.length}</div>
      </Link>
    </div>
  );
}

export default NavLinks;
