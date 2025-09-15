"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Automate from "./Automate";
import Improve from "./Improve";
import Mine from "./Mine";

interface ScrollProgress {
  mine: number;
  improve: number;
  automate: number;
  overall: number;
}

// best
const ScrollStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mineRef = useRef<HTMLDivElement>(null);
  const improveRef = useRef<HTMLDivElement>(null);
  const automateRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    mine: 0,
    improve: 0,
    automate: 0,
    overall: 0,
  });

  const [uniformHeight, setUniformHeight] = useState(0);

  useEffect(() => {
    const measureHeights = () => {
      if (mineRef.current && improveRef.current && automateRef.current) {
        const mineHeight = mineRef.current.scrollHeight;
        const improveHeight = improveRef.current.scrollHeight;
        const automateHeight = automateRef.current.scrollHeight;

        const maxHeight = Math.max(mineHeight, improveHeight, automateHeight, 600);
        setUniformHeight(maxHeight);
      }
    };

    // Delay measurement to ensure components are rendered
    const timer = setTimeout(measureHeights, 100);

    const handleResize = () => {
      measureHeights();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || uniformHeight === 0) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Simple progress calculation: when container top reaches top of viewport
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)));

      // Sequential phases for stacking effect
      let mineProgress = 0;
      let improveProgress = 0;
      let automateProgress = 0;

      if (progress <= 0.33) {
        // Phase 1: Mine slides up
        mineProgress = progress / 0.33;
      } else if (progress <= 0.66) {
        // Phase 2: Mine is fixed, Improve slides up
        mineProgress = 1;
        improveProgress = (progress - 0.33) / 0.33;
      } else {
        // Phase 3: Mine and Improve are fixed, Automate slides up
        mineProgress = 1;
        improveProgress = 1;
        automateProgress = (progress - 0.66) / 0.34;
      }

      setScrollProgress({
        mine: mineProgress,
        improve: improveProgress,
        automate: automateProgress,
        overall: progress,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [uniformHeight]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: `${uniformHeight * 1}px`,
        minHeight: "400vh",
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Mine Component */}
        <div
          ref={mineRef}
          className="absolute inset-0 w-full"
          style={{
            transform: `translateY(${(1 - scrollProgress.mine) * 100}%)`,
            zIndex: 1,
            height: `${uniformHeight}px`,
          }}
        >
          <Mine />
        </div>

        {/* Improve Component */}
        <div
          ref={improveRef}
          className="absolute inset-0 w-full"
          style={{
            transform: `translateY(${(1 - scrollProgress.improve) * 100}%)`,
            zIndex: 2,
            height: `${uniformHeight}px`,
          }}
        >
          <Improve />
        </div>

        {/* Automate Component */}
        <div
          ref={automateRef}
          className="absolute inset-0 w-full"
          style={{
            transform: `translateY(${(1 - scrollProgress.automate) * 100}%)`,
            zIndex: 3,
            height: `${uniformHeight}px`,
          }}
        >
          <Automate />
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
