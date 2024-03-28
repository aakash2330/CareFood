/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";


function Body() {
    const [searchInput, setSearchInput] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
  return (
    <div>
       <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="s" className="h-[500px] w-[1200px]"/>
    </div>
  )
}

export default Body
