"use client";
import { Bike, Star } from "lucide-react";
import { Key, useEffect, useState } from "react";
import menuHouse from "../../../../public/menuHouse.svg";
import veg from "../../../../public/veg.png";
import nonveg from "../../../../public/non-veg.png";
import star from "../../../../public/star.png";
import delBike from "../../../../public/delBike.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/cartSlice";
import MenuShimmer from "./components/MenuShimmer";
import toast from "react-hot-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
interface PageProps {
  id: string;
}

const Page = ({ params }: { params: PageProps }) => {
  const { user } = useKindeBrowserClient();
  const [restaurantMenu, setRestaurantMenu] = useState<any>({});
  const [menu, setMenu] = useState({});
  const [category, setCategory] = useState({});
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      process.env.BASE_URL +
        "api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
        params.id,
    );

    if (!data.ok)
      throw new Error("Something went wrong with fetching restaurants");
    const json = await data.json();

    setRestaurantMenu(json.data?.cards[2]?.card?.card?.info);
    // console.log(json.data?.cards[2]?.card?.card?.info);
    setMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards,
    );

    const cat =
      await json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c: { card: { card: { [x: string]: string } } }) =>
          c?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      );
    setCategory(cat);
  }
  function handleAddToCart(item: any) {
    const isItemInCart = cartItems.some(
      (cartItem: { id: any }) => cartItem?.id === item?.card?.info?.id,
    );

    if (isItemInCart) {
      toast.error("Already added to the Cart");
    }
    dispatch(addToCart(item));
    toast.success("Successfully Added to Cart!");
  }

  return menu != undefined && Object.keys(menu).length === 0 ? (
    <MenuShimmer />
  ) : (
    <>
      <Breadcrumb className="text-black pt-28 mb-3 mx-72">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/restaurants">Restaurants</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{restaurantMenu.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex  justify-center  flex-col mx-72  ">
        <div className="flex justify-between ">
          <div className="flex flex-col mt-11 min-w-[500px] text-[#515151]">
            <div className=" text-4xl font-bold tracking-wider ">
              {restaurantMenu.name}
            </div>
            <div className="font-semibold mt-4 tracking-wide text-lg text-[#515151]">
              {`${restaurantMenu.locality}, ${restaurantMenu.areaName},`}{" "}
              {restaurantMenu.city}
            </div>
            <div className="flex font-semibold  text-lg   text-[#515151]">
              <div>{restaurantMenu.costForTwoMessage}</div>
              <div className="mx-2 -mt-1 font-bold">.</div>

              {restaurantMenu?.sla?.slaString}
            </div>
            <div className="text-lg font-semibold      flex gap-x-1">
              <Image src={star} alt="Star" className="h-5 w-5 mt-[3px] " />
              <div>{restaurantMenu.avgRatingString}</div>
              <div className="mx-1 -mt-1 font-bold">.</div>{" "}
              <Image
                src={delBike}
                alt="Star"
                className="h-5 w-5 mt-[4px] mr-1"
              />
              <div>{restaurantMenu?.sla?.lastMileTravelString}</div>
            </div>

            <div className="text-xs mt-16 tracking-wide font-semibold">
              *₹{restaurantMenu?.feeDetails?.totalFee / 100} Delivery Fee will
              be applied
            </div>
          </div>
          <Image
            src={menuHouse}
            className="h-[380px] -ml-6  -mt-8 w-[480px] "
            alt=""
          />
        </div>
        <div className="bg-[#5F5F5F47] h-[2px] w-[940px] -mt-4  mb-8  mx-auto"></div>
        <Accordion type="single" collapsible className="w-full ">
          {category &&
            Object.values(category).map((cat: any, index) => (
              <AccordionItem key={index} value={`${index}`} className="">
                <AccordionTrigger className="text-2xl hover:no-underline">
                  {cat.card.card.title} ({cat.card.card.itemCards.length})
                </AccordionTrigger>
                <AccordionContent className="flex flex-col mt-4 ">
                  {cat.card.card.itemCards.map(
                    (item: any, index: Key | null | undefined) => (
                      <div
                        key={index}
                        className="bg-[#FCFCFC] min-w-full    relative h-[220px] pt-11 pl-6  rounded-xl my-2 shadow-lg"
                      >
                        {item?.card?.info?.isVeg === 1 ? (
                          <Image
                            src={veg}
                            alt="Veg Sign"
                            className="absolute left-5 top-4 h-6 w-6 "
                          />
                        ) : (
                          <Image
                            src={nonveg}
                            alt="Non Veg Sign"
                            className="absolute left-5 top-4 h-6 w-6 "
                          />
                        )}
                        <div className="flex justify-between pr-2 ">
                          <div className="flex flex-col overflow-x-hidden  max-w-[60%] text-[#5F5F5F]">
                            <div className="truncate  text-2xl font-semibold">
                              {item?.card?.info?.name}
                            </div>
                            <div className="flex mt-2">
                              <div className="font-semibold text-xl">
                                {" "}
                                ₹
                                {item.card.info.price
                                  ? item.card.info.price / 100
                                  : item.card.info.defaultPrice / 100}{" "}
                                &nbsp;
                              </div>

                              <div className="flex text-xl">
                                {item?.card?.info?.ratings?.aggregatedRating
                                  ?.rating ? (
                                  <div className="flex gap-x-1  font-semibold">
                                    |{" "}
                                    <Image
                                      src={star}
                                      alt="Star"
                                      className="h-5 w-5 mt-[3px]"
                                    />
                                    <div className=" ">
                                      {
                                        item?.card?.info?.ratings
                                          ?.aggregatedRating?.rating
                                      }
                                    </div>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                            <div className="line-clamp-2 mt-4">
                              {item.card.info.description}
                            </div>
                          </div>
                          <div className="flex flex-col relative">
                            <Image
                              src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                                item.card.info.imageId
                              }
                              className="mr-10 h-36 w-[156px]  rounded-xl -mt-4"
                              height={144}
                              width={150}
                              alt="image"
                            />
                            <div
                              className="w-28 h-11 absolute -bottom-5 cursor-pointer left-5 flex justify-center items-center bg-[#FCFCFC] rounded-lg hover:bg-gray-300   text-[#1ba672] text-lg font-extrabold   border"
                              onClick={() => {
                                user
                                  ? handleAddToCart(item)
                                  : (window.location.href = "/api/auth/login");
                              }}
                            >
                              ADD
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </>
  );
};

export default Page;
