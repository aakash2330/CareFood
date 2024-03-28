"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";

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
      "responsible for making the cute UI with his unmatching design skills and constructing the website using fullstack technologies.",
    name: "Harsh",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "responsible for joining Harsh in the process of making the website using fullstack technologies. Integrating payments and finishing off the whole website.",
    name: "Devansh",
    title: "Hamlet",
  },
  {
    quote: "responsible for moderating the idea. coming up with the idea, thinking on the implementation and helping throughout the project with her opinions",
    name: "Adhishta",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "responsible for moderating the website data  so that the donating is not done to some non-existent organization.",
    name: "Lakshmi",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "responsible for completing our group as we didn't have a 5th member",
    name: "Gunjan",
    title: "Moby-Dick",
  },
];
