"use client";
import image1 from "@/../public/landingPage/img1.png";
import ScrollButton from "@/components/reusable/ScrollButton";
import Wrapper from "@/components/reusable/Wrapper";
import Image from "next/image";
import React from "react";

const Mine: React.FC = () => {
  return (
    <div className="h-full w-full shadow-xl">
      <div className="bg-text-tertiary h-full w-full rounded-t-4xl">
        <Wrapper>
          <div className="flex w-full flex-col justify-between gap-20 py-20 xl:flex-row xl:items-center">
            <div className="relative hidden h-[60dvh] w-full md:block xl:w-1/2">
              <Image src={image1} alt="We Mine" fill className="rounded-xl object-cover" />
            </div>
            <div className="text-white xl:w-1/2">
              <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">We Mine</h2>
              <p className="mb-8 xl:text-xl">
                Process mining provides organisations with deep, data-driven insights into their
                operational workflows by systematically analysing system data. Through a structured
                and meticulous evaluation of system events, NXDI enables businesses to identify
                inefficiencies, address compliance risks, and uncover opportunities for
                optimisation. We leverage advanced analytics and industry-leading methodologies to
                map and assess processes within real-world conditions, delivering a transparent,
                evidence-based view of operational performance. This comprehensive approach empowers
                organisations to streamline workflows, enhance efficiency, and establish a strong
                foundation for seamless process automation. By proactively identifying
                inefficiencies, businesses can make informed, strategic decisions that drive
                operational excellence and foster a culture of continuous improvement. Furthermore,
                our detailed, insight-rich reporting provides organisations with clear, actionable
                recommendations, ensuring sustainable growth, enhanced performance, and long-term
                business resilience.
              </p>

              <ScrollButton title="Read More" />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Mine;
