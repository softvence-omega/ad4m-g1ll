"use client";
import Image from "next/image";
import React from "react";
import image2 from "@/../public/landingPage/img2.png";
import Wrapper from "@/components/reusable/Wrapper";
import HomeButton from "@/components/reusable/HomeButton";

const Improve: React.FC = () => {
  return (
    <div className="h-full w-full shadow-xl">
      <div className="bg-text-primary h-full w-full rounded-t-4xl">
        <Wrapper>
          <div className="flex w-full flex-col justify-between gap-20 py-20 xl:flex-row">
            <div className="text-white xl:w-1/2">
              <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">We Improve</h2>
              <p className="mb-8 xl:text-xl">
                Enhancing operational efficiency requires a structured and strategic approach to
                process improvement. At NXDI, we work in close partnership with your organisation to
                identify inefficiencies, address operational challenges, and optimise workflows to
                drive productivity and service excellence. We undertake comprehensive end-to-end
                process evaluations, engaging key stakeholders and applying data-driven insights to
                develop tailored, high-impact solutions. By ensuring that processes are fully
                aligned with business objectives, we support organisations in implementing targeted
                improvements and automation strategies that streamline operations, reduce
                complexity, and enhance overall performance. Our consultative approach fosters
                collaboration across all levels of the organisation, ensuring stakeholder engagement
                and cultivating a culture of continuous improvement. This holistic methodology not
                only delivers immediate operational benefits but also establishes a resilient
                framework for sustained efficiency, adaptability, and long-term business success in
                an evolving marketplace.
              </p>
              <HomeButton title="Read More" />
            </div>
            <div className="relative hidden h-[65dvh] w-full md:block xl:w-1/2">
              <Image src={image2} alt="We Improve" fill className="rounded-xl object-cover" />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Improve;
