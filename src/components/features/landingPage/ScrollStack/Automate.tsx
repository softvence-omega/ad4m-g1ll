"use client";
import image3 from "@/../public/landingPage/img3.png";
import ScrollButton from "@/components/reusable/ScrollButton";
import Wrapper from "@/components/reusable/Wrapper";
import Image from "next/image";
import React from "react";

const Automate: React.FC = () => {
  return (
    <div className="h-full w-full shadow-xl">
      <div className="bg-text-secondary h-full w-full rounded-t-4xl">
        <Wrapper>
          <div className="flex w-full flex-col justify-between gap-20 py-20 xl:flex-row xl:items-center">
            <div className="relative hidden h-[60dvh] w-full md:block xl:w-1/2">
              <Image src={image3} alt="We Automate" fill className="rounded-xl object-cover" />
            </div>
            <div className="text-white xl:w-1/2">
              <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">We Automate</h2>
              <p className="mb-8 xl:text-xl">
                Strategic automation is essential for organisations seeking to enhance operational
                efficiency, optimise resources, and scale effectively. At NXDI, we focus on
                assessing automation readiness, identifying high-impact opportunities, and
                developing tailored solutions that deliver measurable business value.A key area of
                our expertise is Software Robotics (SR), which enables organisations to automate
                repetitive tasks, enhance accuracy, and improve workforce productivity. By
                implementing intelligent automation strategies, we empower businesses to reallocate
                valuable resources towards innovation, customer experience, and long-term strategic
                growth.Beyond implementation, we provide ongoing support and performance monitoring
                to ensure the sustainability and continuous optimisation of automation initiatives.
                We prioritise seamless integration with existing workflows, minimising disruption
                while maximising efficiency gains. With our expertise, organisations can enhance
                agility, reduce operational costs, and maintain a competitive advantage in an
                increasingly dynamic business environment.
              </p>
              <ScrollButton title="Read More" />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Automate;
