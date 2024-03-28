/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react";


function Body() {
    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
     
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9939369&lng=77.5980282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json)
        async function checkJsonData(jsonData : any) {
          let max = 0;
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
        // updated state variable restaurants with Swiggy API data
            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
            // if checkData is not undefined then return it
            if (checkData !== undefined && max <= checkData.length) {
              max = checkData;
            }
          }
          return max;
        }
    
        const resData = await checkJsonData(json);
      
        // setRestaurants(resData);
        // setFilteredRestaurants(resData);
        console.log(restaurants)
      }
  return (
    <div>
       <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="s" className="h-[500px] w-[1200px]"/>
       <div>{restaurants}</div>
    </div>
  )
}

export default Body
