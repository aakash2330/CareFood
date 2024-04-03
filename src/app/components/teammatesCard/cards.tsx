"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import pfpDev from "../../../../public/Snapchat-90320358.jpg"
import pfpLaks from "../../../../public/pfpLaks.jpg"
import pfpAdhi from  "../../../../public/pfpAdhi.jpg"
import pfpHarsh from  "../../../../public/pfpHarsh.jpg"
import pfpGunjan from  "../../../../public/pfpGunjan.jpg"
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
    githubLink : "https://github.com/Devanshjain2110",
    instagramLink : "https://www.instagram.com/devanxsh.x/",
    linkedInLink : "https://www.linkedin.com/in/devanshja/"
  },
  {
    quote:
      "Front End Developer",
    name: "Lakshmi Mahadevan",
    image : pfpLaks,
    title: "20BCE10328",
    githubLink : "https://github.com/lakshmimahadevan22",
    instagramLink : "https://www.instagram.com/lakshmi.mahadevan?igsh=MTJ4dzBtdGp3emp6OA==",
    linkedInLink : "https://www.linkedin.com/in/lakshmimahadevan2024/"
 
  },
  {
    quote:
      "Back End Developer",
    name: "Gunjan Agrawal",
    image : pfpGunjan,
    title: "20BCE10307",
    githubLink : "https://github.com/gunjan1622  ",
    instagramLink : "https://www.instagram.com/adhishta_02/",
    linkedInLink : "https://www.linkedin.com/in/gunjanagrawal1622/"
 
  },

  {
    quote:
      "Front End Developer",
    name: "Adhishta Sharma",
    image : pfpAdhi,
    title: "20BCE10307",
    githubLink : "https://github.com/asharma-02 ",
    instagramLink : "https://www.instagram.com/adhishta_02/",
    linkedInLink : "https://www.linkedin.com/in/adhishta-sharma/"
 
  },
  {
    quote:
      "Back End Developer",
    name: "Harsh Jipkate",
    image : pfpHarsh,
    title: "20BCE10855",
    githubLink : "https://github.com/harshblip",
    instagramLink : "https://www.instagram.com/adhishta_02/",
    linkedInLink : "https://www.linkedin.com/in/harsh-jipkate?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
 
  },
 
];
