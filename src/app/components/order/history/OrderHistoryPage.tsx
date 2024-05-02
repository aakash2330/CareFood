import { Button } from "@/components/ui/button";
import { TUserWithOrders } from "@/lib/db";
import { OrderItem } from "@prisma/client";
import Image from "next/image";

export default function OrderHistory({
  userWithOrderItems,
}: {
  userWithOrderItems: TUserWithOrders;
}) {
  return (
    <>
      <div className="text-black">Previously Ordered Items</div>
      {userWithOrderItems.OrderItems.map((item, index: number) => (
        <div key={index} className="flex flex-col gap-x-4">
          <div className="flex w-[790] border shadow-lg my-4 pr-10 rounded-x l">
            <div className="m-4 flex p-4 w-[500px] text-slate-950 rounded-lg ">
              <Image
                className="rounded-lg w-[200]"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  item.imageId
                }
                width={158}
                height={158}
                alt="logoRes"
              />
              <div className="flex flex-col ml-20">
                <h2 className="font-bold py-2 text-lg ">{item.name}</h2>
                <h2 className="font-bold py-2 text-lg  ">1 Piece</h2>
                <div className="bg-[#65d453] px-5 py-1 font-semibold w-fit rounded-full mt-2">
                  In Stock
                </div>
              </div>
            </div>

            <h4 className="py-1 text-black text-lg font-bold mt-20 ml-32 w-[30]">
              NGO - {item.ngoName}
            </h4>
            <h4 className="py-1 text-black text-lg font-bold mt-20 ml-32 w-[30]">
              {" "}
              {(() => {
                if (item.defaultPrice) {
                  return <div>{item.defaultPrice / 100}</div>;
                }
                if (item.price) {
                  return <div>{item.price / 100}</div>;
                } else {
                  return <div></div>;
                }
              })()}
            </h4>
          </div>
        </div>
      ))}
    </>
  );
}
