/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import { Search } from "lucide-react";
import Shimmer from "./Shimmer";

type filterDataProps =  {
  searchInput : string,
  restaurants : any,
}

function Body() {
    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
    const [restaurants, setRestaurants] = useState([]);
    const [searchChange, setSearchChange] = useState("")
    function filterData(searchInput: string, restaurants: any[]) {
  setSearchChange(searchInput)
      return restaurants?.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
      );
    }
    useEffect(() => {
        getRestaurants();
 
      }, []);
    
      async function getRestaurants() {
     
        const data = await fetch(
          " https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
       
      
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      }

  
return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-between flex-col items-center mx-44">
       <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="s" className="h-[500px] w-[1200px] object-cover "/>
       <div className="flex absolute top-80">
       <input
          type="text"
        
          className="border border-solid ml-6 border-gray-400 h-14  pl-4  w-96 rounded-xl rounded-r-none bg-white focus:outline-none"
          value={searchInput}
          placeholder="Search For Restaurants"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        
        <button
          className="px-3  py-3  rounded-xl rounded-l-none   text-white bg-transparent border border-teal-900"
          onClick={() => {
            
            setFilteredRestaurants(filterData(searchInput, restaurants));
          }}
        >
          <Search />
        </button>
       </div>
       <div className="flex justify-between mt-5 gap-x-6">
   
        <button
          className="  px-4 py-2 mb-2  mr-2    bg-white rounded-full lg:hover:bg-[#38DB4A] xl:hover:text-white xl:text-black  md:mb-0 sm:ml-[222] md:ml-[60] lg:ml-[390] xl:ml-[2] "
          onClick={() => {
            const filtered = restaurants.filter(
              (res : any) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top rated restaurants
        </button>
        <button
          className="hidden lg:block  px-4 py-2 mx-2 xl:ml-[480] xl:-mt-[55] bg-white rounded-full xl:hover:bg-[#38DB4A] xl:hover:text-white "
          onClick={() => {
            let sortedList = [...restaurants]
            sortedList.sort(
              (a : any, b : any) => a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
            );
            setFilteredRestaurants(sortedList);
          }}
        >
          Nearest Restaurants
        </button>
        <button
          className="hidden xl:block px-4 py-2 mx-2 xl:ml-[650] xl:-mt-[41] bg-white rounded-full xl:hover:bg-[#38DB4A] xl:hover:text-white"
          onClick={() => {
            let sortedList = [...restaurants]
            sortedList.sort(
              (a : any, b : any) => Number(a.info.costForTwo.substr(1,3)) - Number(b.info.costForTwo.substr(1,3))
            );
            setFilteredRestaurants(sortedList);
          }}
        >
          Cost : Low To High
        </button>
        <button
          className="hidden xl:block px-4 py-2 mx-2 xl:ml-[820] xl:-mt-[41] bg-white rounded-full xl:hover:bg-[#38DB4A] xl:hover:text-white"
          onClick={() => {
            let sortedList = [...restaurants]
            sortedList.sort(
              (a : any, b : any) => Number(b.info.costForTwo.substr(1,3)) - Number(a.info.costForTwo.substr(1,3))
            );
            setFilteredRestaurants(sortedList);
          }}
        >
          Cost : High to Low
        </button>
        
        <button
          className="hidden lg:block px-4 py-2 mx-2 xl:ml-[1000] xl:-mt-[41] bg-white rounded-full lg:hover:bg-[#38DB4A] lg:hover:text-white "
          onClick={() => {
            let sortedList = [...restaurants];
            sortedList.sort((a : any, b : any)  => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
            setFilteredRestaurants(sortedList);
          }}
        >
          Delivery Time
        </button>
      
       </div>
       <div className="bg-gray-300 mt-3 h-[1px] w-full"></div>
       <div className="flex flex-wrap xl:gap-x-10 lg:justify-center ">
      {
        filteredRestaurants?.map((restaurant, index) => {
            return (
                <>
              
                <RestaurantCards searchInput={searchChange} restaurant={restaurant} />
                </>
            )
        })
      }
      </div>
    </div>
  )
}

export default Body
