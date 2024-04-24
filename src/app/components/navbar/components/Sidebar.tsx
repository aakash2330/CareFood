"use client";

import { getLocation } from "@/lib/locationSlice";
import { LocateIcon, MapPin } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Sidebar() {
  const [Locations, setLocations] = useState<any>([]);
  const [SearchText, setSearchText] = useState<any>("");

  const dispatch = useDispatch();

  useEffect(() => {
  
}, [dispatch]);

  const handleSearchLocation = async (e: {
    target: { value: SetStateAction<string> };
  }) => {
    try {
      setSearchText(e.target.value);
      if (SearchText.length >= 1) {
        const response = await fetch(
          process.env.BASE_URL +
            "api/proxy/swiggy/dapi/misc/place-autocomplete?input=" +
            SearchText
        );
        if (!response.ok) {
          const err = response.status;
          throw err.toString();
        } else {
          const json = await response.json();
          setLocations(json?.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLocation = async (placeid: any) => {
    try {
        const response = await fetch(process.env.BASE_URL + "api/proxy/swiggy/dapi/misc/address-recommend?place_id=" + placeid)
        if (!response.ok) {
            const err = response.status.toString();
            throw new Error(err);
        }
        else {
            const { data } = await response.json();
            dispatch(getLocation({
                city: data[0]?.address_components[0]?.short_name,
                lat: data[0]?.geometry?.location?.lat,
                lng: data[0]?.geometry?.location?.lng,
                address: data[0]?.formatted_address
            }))
        }
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
}

  return (
    <>
      <div className="mt-10">
        <div className="relative">
          <input
            type="text"
            className="h-[50px] rounded-xl text-base bg-transparent px-5 overflow-hidden border w-full "
            placeholder="Search for area, street name.."
            onChange={(e) => handleSearchLocation(e)}
            value={SearchText}
          />
          {SearchText && (
            <button
              type="button"
              onClick={() => setSearchText("")}
              className="absolute e right-4 text-sm top-1/2 -translate-y-1/2 text-color-2 "
            >
              Cancel
            </button>
          )}
        </div>
        <ul className="dropdown absolute left-0 right-0">
          {SearchText &&
            Locations?.map((item : any) => (
              
          <li
                onClick={() => handleUserLocation(item?.place_id)}
                key={item?.place_id}
                className="cursor-pointer relative"
              >
                <div className="md:p-6 py-4 flex location">
                  <div className="text-lg text-color-6 w-8 text-left pt-1 pr-3">
                    <MapPin  className="w-5 h-5"/>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold  text-color-1">
                      {item?.structured_formatting?.main_text}
                    </h3>
                    <h4 className="text-[13px] text-color-5 leading-5 ">
                      {item?.structured_formatting?.secondary_text}
                    </h4>
                  </div>
                </div>
                <div className="w-[100px] "></div>
                <div className="border-b-2 border-dotted border-gray-300"></div>
              </li>
          

            ))}
        </ul>
      </div>

      
    </>
  );
}

export default Sidebar;
