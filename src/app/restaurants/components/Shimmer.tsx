

function Shimmer() {
  return (
    <div className="flex flex-col mt-4 items-center h-full">
     <div className="h-[300px] bg-slate-400/60 rounded-lg w-[1000px] text-transparent  animate-pulse"></div>
     <div className="flex flex-wrap justify-center items-center mx-52 gap-x-9 mt-4">
     {Array(12).fill("").map((e,index) => (
        <div key={index} className="w-[400px] h-36 rounded-xl
         my-3 bg-slate-300 animate-pulse"></div>
     ))}
    </div>
    </div>
  )
}

export default Shimmer
