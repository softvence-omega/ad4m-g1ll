"use client";

import HomeButton from "@/components/reusable/HomeButton";
import { motion } from "framer-motion";

const vdo = "/landingPage/about.mp4";
export default function AboutSection() {
  return (
    <div className="flex flex-col justify-between px-4 py-20 xl:flex-row xl:gap-16 xl:px-0">
      <motion.div
        style={{
          backgroundImage: `url('/landingPage/aboutBox.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "start center ",
        }}
        className="w-full flex-col items-start justify-center xl:flex xl:w-fit xl:pl-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="py-6 xl:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="font-custom-font text-text-secondary text-4xl font-semibold text-nowrap xl:text-6xl xl:text-[144px]">
              We ARE
            </h1>
            <div className="mt-2 flex h-fit w-full flex-col items-center justify-center gap-4 xl:flex-row">
              <motion.div className="flex h-fit w-full items-center justify-center xl:h-32 xl:w-60">
                <video
                  autoPlay
                  loop
                  muted
                  src={vdo}
                  className="h-full w-full rounded-2xl object-cover"
                ></video>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h1 className="text-text-tertiary font-grotesk-font text-4xl leading-tight font-semibold xl:text-6xl xl:text-[144px]">
                  NXDI
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col flex-wrap justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="text-center xl:w-full xl:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="mb-8 text-4xl font-bold text-[#32529F] xl:text-[32px]">About NXDI</h2>
          </motion.div>

          <motion.div
            className="leading-relaxed text-[#323232]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-sm xl:text-base">
              NXDI Is A Melbourne-Based Consultancy Dedicated To Assist In Transforming
              Organisational Operations. Our Expertise Lies In Identifying Inefficiencies,
              Optimising Workflows, And Implementing Strategic Solutions To Enhance Overall
              Operational Excellence.
            </p>

            <p className="text-sm xl:text-base">
              At NXDI, We Take Pride In Offering Customised Solutions Tailored To Meet Your Unique
              Business Requirements And Client Growth. By Concentrating On Process Mining,
              Improvement, And Automation, We Ensure That Your Organisation Not Only Adapts To
              Change But Also Excels In An Ever-Evolving Competitive Market, Especially In Home
              Care.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <div
        style={{
          backgroundImage: `url('/landingPage/qstn.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 50%",

          transform: "scaleX(-1)",
        }}
        className="xl:w-120"
      >
        <div
          style={{
            transform: "scaleX(-1)",
          }}
          className="z-10 mt-20 justify-center md:flex xl:justify-end xl:pr-10"
        >
          <HomeButton title="Contact" />
        </div>
      </div>
    </div>
  );
}
