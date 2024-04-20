/* eslint-disable @next/next/no-img-element */

function RestaurantCards({ restaurant, searchInput }: any) {
  return (
    <div
      className={`flex bg-[#FCFCFC] gap-x-4 px-4 py-10 cursor-pointer lg:gap-x-10  w-[580px]    items-center shadow-xl rounded-xl my-4 mx-auto  transition ease-in-out delay-75 hover:scale-105 duration-200 ${
        searchInput == "" ? "xl:max-w-[90%]" : "xl:w-12/12"
      }`}
    >
      <div>
  
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            restaurant?.info.cloudinaryImageId
          }
          className="h-20 w-20 rounded-full xl:mr-2"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-1 xl:w-8/12">
        <div className="text-[#515151] font-medium truncate text-xl">
          {restaurant?.info?.name}
        </div>
        <div className="text-[#AEB0AF] tracking-wide truncate text-sm max-w-[300px]">
          {restaurant?.info?.cuisines.join(", ")}
        </div>
        <div className="flex gap-x-2 text-[#AEB0AF] text-sm">
          <div>{restaurant?.info?.areaName} |</div>
          <div>{restaurant?.info?.sla?.lastMileTravelString}</div>
        </div>
        <div className="flex gap-x-1 text-[#5F5F5F] text-sm pt-1 font-semibold">
          <div className="flex">
            {" "}
            <div className="-mt-[1px] mx-1"> ⭐</div>{" "}
            {restaurant?.info?.avgRatingString} -{" "}
          </div>
          <div>{restaurant?.info?.sla?.deliveryTime}mins - </div>
          <div>{restaurant?.info?.costForTwo}</div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCards;
