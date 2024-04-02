"use client";

import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg cursor-pointer px-8 py-6 md:w-[300px] md:h-[350px] flex-col bg-[#f2f7f2]"
            key={item.name}
          >
            <div className="flex flex-col  relative  top-0 justify-center  items-center ">
              <div className="absolute top-0 -mt-7 bg-[]  bg-gradient-to-b to-[#f2f7f2] from-[#38DB4A] z-0 h-32 w-[350px]"></div>
              <Image
                className="h-20 w-20 rounded-full object-cover z-10 mt-10 border-2 border-white "
                src={item.image}
                alt=""
              />
              <div
                className="text-slate-800 font-semibold text-lg mt-4 
            "
              >
                {item.name}{" "}
              </div>
              <div
                className="text-slate-800 font-medium text-base  
            "
              >
                {item.quote}{" "}
              </div>
              <div className="text-slate-800 font-medium text-sm mt-1">
                {item.title}
              </div>
              <div className="flex gap-x-4  mt-7"> 
                <div className="p-2 border   text-gray-700 gap-2 flex items-center rounded-full text-[1.15rem] focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition  border-black/10"><Linkedin className="h-5 w-5" /></div>
                <div className="p-2 border   text-gray-700 gap-2 flex items-center rounded-full text-[1.15rem] focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition  border-black/10"><Github className="h-5 w-5" /></div>       <div className="p-2 border   text-gray-700 gap-2 flex items-center rounded-full text-[1.15rem] focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition  border-black/10"><Instagram className="h-5 w-5" /></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
