"use client";
import Image from "next/image";
import img1 from "../../../../../public/landingPage/img1.png";
import img2 from "../../../../../public/landingPage/img2.png";
import img3 from "../../../../../public/landingPage/img3.png";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
const ScrollStackSection = () => {
  return (
    <div className="">
      <ScrollStack useWindowScroll={true}>
        <ScrollStackItem>
          <div className="bg-text-secondary flex items-center justify-between rounded-lg px-8 py-24">
            <div className="max-w-2/3 text-white">
              <h2 className="mb-6 text-3xl font-bold">We Mine</h2>
              <p className="mb-8 text-lg">
                Process mining provides organizations with deep, data-driven insights into their
                operational workflows by systematically analyzing system data. Through a structured
                and meticulous evaluation of system events, NXDI enables businesses to identify
                inefficiencies, address compliance risks, and uncover opportunities for
                optimization.
              </p>
              <a href="#" className="font-semibold underline">
                Read More
              </a>
            </div>
            <div className="w-1/3">
              <Image src={img1} alt="We Mine" className="h-auto w-full rounded-lg object-cover" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div className="flex items-center justify-between rounded-lg bg-blue-600 px-8">
            <div className="max-w-2/3 text-white">
              <h2 className="mb-6 text-3xl font-bold">We Improve</h2>
              <p className="mb-8 text-lg">
                Enhancing operational efficiency requires a structured and strategic approach to
                process improvement. At NXXD, we work in close partnership with your organization to
                identify inefficiencies, address operational challenges, and continue to drive
                product and service excellence.
              </p>
              <a href="#" className="font-semibold underline">
                Read More
              </a>
            </div>
            <div className="w-1/3">
              <Image src={img2} alt="We Mine" className="h-auto w-full rounded-lg object-cover" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div className="flex items-center justify-between rounded-lg bg-red-600 px-8">
            <div className="max-w-2/3 text-white">
              <h2 className="mb-6 text-3xl font-bold">We Automate</h2>
              <p className="mb-8 text-lg">
                Strategic automation is essential for organizations seeking to enhance operational
                efficiency, optimize resources, and reduce costs. We focus on streamlining business
                processes, including high-impact resources, and embedding the latest technological
                advancements.
              </p>
              <a href="#" className="font-semibold underline">
                Read More
              </a>
            </div>
            <div className="w-1/3">
              <Image src={img3} alt="We Mine" className="h-auto w-full rounded-lg object-cover" />
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default ScrollStackSection;
