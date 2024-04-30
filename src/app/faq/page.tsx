import Questions from "./components/Questions"


function Page() {
  return (
    <div className=" pt-28">
    <div className="bg-[#e0ffe4] h-[750px] w-[1200px] rounded-3xl mt-7 mb-10  mx-auto pt-24 gap-x-20  flex px-20">
        <div className="flex flex-col gap-y-5 max-w-[350px]" >
            <div className="text-sm font-semibold text-[#666]">ANSWERS TO </div>
            <div className="font-semibold text-4xl font-serif">Frequently Asked Questions</div>
            <div className="text-base font-medium text-[#666]">Got a question? We{"'"}re here to answer. If you don{"'"}t find your question here, drop us a message on your contact page. </div>
        </div>
        <Questions />
    </div>
    </div>
  )
}

export default Page
