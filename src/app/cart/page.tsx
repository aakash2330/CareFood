'use client'
import { useSelector } from "react-redux"


function Page() {
    const cartItems = useSelector((state: any) => state.cart.items);
    console.log(cartItems)
  return (
    <div className="flex justify-center items-center pt-40">
        <div className="text-black">cart</div>

        <div className="flex gap-x-4">
            <div>{cartItems[0]?.card?.info?.name}</div>
        </div>
    </div>
  )
}

export default Page
