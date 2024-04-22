"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

function NavLinks() {

  const cartItems = useSelector((state: any) => state.cart.items);
  console.log(cartItems)
  return (
    <div className="sm:flex hidden  sm:gap-x-5 md:gap-x-10 lg:gap-x-20 text-[#343434] mt-1 font-medium text-lg">
      <Link href={"/"} className="hover:bg-black/10 py-1  px-3 rounded-xl">
        Home
      </Link>
      <Link href={"/"} className="hover:bg-black/10 py-1  px-3 rounded-xl">
        About Us
      </Link>
      <Link href={"/cart"} className="hover:bg-black/10 py-1  px-3 rounded-xl flex">
        <ShoppingCart />
      <div> - {cartItems.length}</div>  
      </Link>
    </div>
  );
}

export default NavLinks;
