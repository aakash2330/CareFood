import { m } from "framer-motion";

function MenuShimmer() {
  return (
    <>
    <div className="pt-28 ">
      <div className="h-4 mb-3 mx-72 bg-gray-300 rounded-md animate-pulse w-80">
        {" "}
      </div>
      <div className="flex  justify-center  flex-col mx-72  ">
        <div className="flex justify-between ">
          <div className="flex flex-col mt-11 min-w-[500px] ">
            <div className="">
              <div className="h-14 w-[400px] bg-gray-300 animate-pulse rounded-xl"></div>
            </div>
            <div className=" mt-8 bg-gray-300 animate-pulse rounded-xl h-4 w-[320px] "></div>
           
            <div className="mt-4 bg-gray-300 animate-pulse rounded-xl h-4 w-[190px] "></div>
            <div className="mt-4 bg-gray-300 animate-pulse rounded-xl h-4 w-[150px] "></div>
       
            <div className=" mt-16 bg-gray-300 animate-pulse rounded-xl h-4 w-[270px]">
        </div>
    
     
          </div>
          <div
        className="h-[250px]   bg-gray-300 animate-pulse rounded-xl mt-12  w-[480px] "
      />
        </div>
      
      </div>
    </div>
    <div className="mt-20 mx-72">
        { Array(10).fill("").map((_, index) => (
            <div key={index} className="h-24 mb-7 mx-auto bg-gray-300 rounded-xl animate-pulse w-full"></div>
        ))}
    </div>
    </>
  );
}

export default MenuShimmer;
