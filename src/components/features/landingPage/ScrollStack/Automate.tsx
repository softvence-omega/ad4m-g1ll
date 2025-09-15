"use client";
import image3 from "@/../public/landingPage/img3.png";
import Wrapper from "@/components/resuable/Wrapper";
import Image from "next/image";
import React from "react";

const Automate: React.FC = () => {
  return (
    <div className="h-full w-full shadow-xl">
      <div className="bg-text-secondary h-full w-full rounded-t-4xl">
        <Wrapper>
          <div className="flex w-full flex-col justify-between gap-20 py-20 xl:flex-row xl:items-center">
            <div className="text-white xl:w-1/2">
              <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">We Automate</h2>
              <p className="mb-8 xl:text-xl">
                Strategic automation is essential for organizations seeking to enhance...
              </p>
              <a href="#" className="font-semibold underline">
                Read More
              </a>
            </div>
            <div className="relative hidden h-[60dvh] w-full md:block xl:w-1/2">
              <Image src={image3} alt="We Automate" fill className="rounded-xl object-cover" />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Automate;
