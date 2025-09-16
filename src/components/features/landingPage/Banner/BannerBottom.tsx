"use client";

import HomeButton from "@/components/reusable/HomeButton";
import Wrapper from "@/components/reusable/Wrapper";

function BannerBottom() {
  return (
    <Wrapper>
      <div className="flex h-52 items-center justify-center space-x-4 bg-white pl-4 md:flex md:items-center lg:flex lg:items-center">
        {/* Adjust height and add padding left to place on left side */}
        <HomeButton title="Contact" />
        <HomeButton title="Subscribe" />
      </div>
    </Wrapper>
  );
}

export default BannerBottom;
