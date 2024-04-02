"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import pfpDev from "../../../../public/Snapchat-90320358.jpg"
export function Cards() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-[#F6F6F6]  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Front End Developer",
    name: "Devansh Jain",
    image : pfpDev,
    title: "20BCE10663",
  },
  {
    quote:
      "Front End Developer",
    name: "Devansh Jain",
    image : pfpDev,
    title: "20BCE10663",
  }, {
    quote:
      "Front End Developer",
    name: "Devansh Jain",
    image : pfpDev,
    title: "20BCE10663",
  }, {
    quote:
      "Front End Developer",
    name: "Devansh Jain",
    image : pfpDev,
    title: "20BCE10663",
  },
];
