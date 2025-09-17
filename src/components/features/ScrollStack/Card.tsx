"use client";
import HomeButton from "@/components/reusable/HomeButton";
import Wrapper from "@/components/reusable/Wrapper";
import { motion, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string | StaticImageData;
  color: string;
}
const Card: React.FC<CardProps> = ({ i, title, description, src, color }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  return (
    <div
      ref={container}
      className={`sticky top-50 flex h-screen w-full items-center justify-center`}
    >
      <motion.div
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex h-full w-full origin-top flex-col rounded-t-4xl"
      >
        <Wrapper>
          <div
            className={`flex w-full flex-col justify-between gap-20 py-20 ${i == 1 ? "xl:flex-row-reverse" : "xl:flex-row"}`}
          >
            <div className="relative hidden h-[65dvh] w-full md:block xl:w-1/2">
              <motion.div style={{ opacity: scrollYProgress }}>
                <Image src={src} alt={title} fill className="rounded-xl object-cover" />
              </motion.div>
            </div>
            <div className="text-white xl:w-1/2">
              <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">{title}</h2>
              <p className="mb-8 xl:text-xl">{description}</p>

              <HomeButton title="Read More" />
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </div>
  );
};

export default Card;
