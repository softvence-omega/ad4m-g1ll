"use client";

import Wrapper from '@/components/resuable/Wrapper';
import HomeButton from '@/components/reusable/HomeButton';

function BannerBottom() {
  return (
    <Wrapper>
        <div className='lg:flex lg:items-center md:flex md:items-center flex justify-center items-center h-52 bg-white space-x-4 pl-4'> {/* Adjust height and add padding left to place on left side */}
     <HomeButton title="Contact" />

     <HomeButton title="Subscribe" />
    </div>
    </Wrapper>
  );
}

export default BannerBottom;