"use client";

import React, { useEffect, useRef, useState } from "react";
import Automate from "./Automate";
import Improve from "./Improve";
import Mine from "./Mine";

interface ScrollProgress {
  [key: string]: number;
  overall: number;
}

// best for animation

const ScrollStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const sectionKeys = ["mine", "improve", "automate"];

  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    mine: 0,
    improve: 0,
    automate: 0,
    overall: 0,
  });

  const [uniformHeight, setUniformHeight] = useState(0);

  // Measure tallest section after mount
  useEffect(() => {
    const measureHeights = () => {
      if (typeof window === "undefined") return;
      const heights = sectionRefs.map((ref) => ref.current?.scrollHeight || 0);
      const maxHeight = Math.max(...heights, window.innerHeight, 600);
      setUniformHeight(maxHeight);
    };

    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, []);

  // Scroll progress
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stickyOffset = 40; // matches top-40

    const handleScroll = () => {
      if (!containerRef.current || uniformHeight === 0) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Adjust for sticky offset
      const progress = Math.max(
        0,
        Math.min(1, (-rect.top + stickyOffset) / (rect.height - windowHeight)),
      );

      const newProgress: ScrollProgress = { overall: progress };
      const phase = 1 / sectionRefs.length;

      sectionKeys.forEach((key, i) => {
        if (progress <= phase * i) newProgress[key] = 0;
        else if (progress >= phase * (i + 1)) newProgress[key] = 1;
        else newProgress[key] = (progress - phase * i) / phase;
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [uniformHeight]);

  const sections = [
    { key: "mine", ref: sectionRefs[0], component: <Mine /> },
    { key: "improve", ref: sectionRefs[1], component: <Improve /> },
    { key: "automate", ref: sectionRefs[2], component: <Automate /> },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#F6F6F6]"
      style={{
        height:
          uniformHeight && typeof window !== "undefined"
            ? `${uniformHeight * sections.length - window.innerHeight + 80}px`
            : "0px", // fallback for SSR
      }}
    >
      <div className="sticky top-40 h-screen w-full overflow-hidden">
        {sections.map((section, i) => (
          <div
            key={section.key}
            ref={section.ref}
            className="absolute inset-0 w-full"
            style={{
              transform: `translateY(${(1 - scrollProgress[section.key]) * 100 * i}%)`,
              transition: "transform .5s ease-out",
              zIndex: i + 1,
              height: `${uniformHeight}px`,
            }}
          >
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
