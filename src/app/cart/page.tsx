"use client";
import { Button } from "@/components/ui/button";
import { changeDonationQuantity, clearCart, removeFromCart } from "@/lib/cartSlice";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Page() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const [subtotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0);
  const [donate, setDonate] = useState(0);


  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    setSubTotal(calculateSubTotal())
  }, [cartItems])
  useEffect(() => {
    setTotal(calculateTotal())

  }, [subtotal])

  const calculateSubTotal = () => {
    let sub = 0;
    cartItems.map((item: any) => {
      const donationQty: number = item.card.info.donationQuantity ? item.card.info.donationQuantity + 1 : 1
      item.card.info.defaultPrice ? sub += item.card.info.defaultPrice * donationQty : sub += item.card.info.price * donationQty
    })
    return sub / 100;
  }

  const calculateTotal = () => {
    let Totals = subtotal
    return Totals
  }
  const handleDecreamentFoodItem = (item: any) => {
    dispatch(removeFromCart(item));
  };
  console.log(cartItems);
  return (
    <div className="flex flex-col justify-center items-center pt-40 mb-40">
      <div className="text-black">Cart</div>
      {cartItems.map((cartItem: any, index: number) => (
        <div key={index} className="flex flex-col gap-x-4">
          <div className="flex w-[790] border shadow-lg my-4 pr-10 rounded-x l">
            <div className="m-4 flex p-4 w-[500px] text-slate-950 rounded-lg ">
              <Image
                className="rounded-lg w-[200]"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  cartItem.card.info.imageId
                }
                width={158}
                height={158}
                alt="logoRes"
              />
              <div className="flex flex-col ml-20">
                <h2 className="font-bold py-2 text-lg ">
                  {cartItem.card.info.name}
                </h2>
                <h2 className="font-bold py-2 text-lg  ">1 Piece</h2>
                <div className="bg-[#65d453] px-5 py-1 font-semibold w-fit rounded-full mt-2">
                  In Stock
                </div>
              </div>
            </div>
            <h4 className="py-1 text-black text-lg font-bold mt-20 ml-32 w-[30]">
              <div className="text-center">Donate</div>
              <div className="flex justify-center items-center gap-2">
                <Button className="bg-[#f6f6f6] hover:text-white text-black" onClick={() => {
                  dispatch(changeDonationQuantity({
                    donationQuantity: cartItem.card.info.donationQuantity != undefined ? cartItem.card.info.donationQuantity - 1 : 0, id: cartItem.card.info.id
                  }))
                }}>
                  -
                </Button>
                <div>{cartItem.card.info.donationQuantity ?? 0}</div>
                <Button className="bg-[#f6f6f6] hover:text-white text-black" onClick={() => {
                  dispatch(changeDonationQuantity({
                    donationQuantity: cartItem.card.info.donationQuantity != undefined ? cartItem.card.info.donationQuantity + 1 : 1, id: cartItem.card.info.id
                  }))
                }}>
                  +
                </Button>
              </div>
            </h4>
            <h4 className="py-1 text-black text-lg font-bold mt-20 ml-32 w-[30]">
              {" "}
              {cartItem.card.info.price ? (`₹ ${cartItem.card.info.price / 100}`) : (`₹ ${cartItem.card.info.defaultPrice / 100}`)}
            </h4>
            <button
              className="flex h-fit mt-20 ml-12 rounded-full text-black p-3 bg-[#65d453]  hover:bg-[#70ea5c]"
              onClick={() => {
                handleDecreamentFoodItem(cartItem.card.info.id);
              }}
            >
              {" "}
              <Trash className=" " />{" "}
            </button>
          </div>
        </div>
      ))}
      <div className="flex gap-x-8 mb-10">
        <div className="flex justify-between mt-7 font-semibold mr-2">
          <h1>Subtotal </h1>
          <h1> -  ₹{subtotal}</h1>
        </div>
        <button
          className=" py-2 px-3 mt-5 text-white rounded-2xl bg-[#65d453]  hover:bg-[#70ea5c]"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Page;
