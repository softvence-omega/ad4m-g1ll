"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import Automate from "./Automate";
import Improve from "./Improve";
import Mine from "./Mine";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollProgress {
  [key: string]: number;
  overall: number;
}

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
  const scrollDirection = useRef<"up" | "down">("up");
  const visibleComponents = useRef<number[]>([0]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const measureHeights = () => {
      if (typeof window === "undefined") return;

      console.log("[v0] Measuring heights");
      const heights = sectionRefs.map((ref) => ref.current?.scrollHeight || 0);
      const maxHeight = Math.max(...heights, window.innerHeight, 600);
      console.log("[v0] Heights calculated:", heights, "Max:", maxHeight);
      setUniformHeight(maxHeight);
    };

    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || uniformHeight === 0) {
      console.log("[v0] Skipping scroll setup - missing requirements");
      return;
    }

    console.log("[v0] Setting up ScrollTrigger");

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) {
        console.log("[v0] No container ref");
        return;
      }

      const rect = container.getBoundingClientRect();
      const stickyOffset = 40;
      const viewportHeight = window.innerHeight;
      const containerHeight = container.offsetHeight;
      const scrollableHeight = containerHeight - viewportHeight + stickyOffset;

      let scrollTop = Math.max(0, stickyOffset - rect.top);
      scrollTop = Math.min(scrollTop, scrollableHeight);

      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "up" : "down";
      scrollDirection.current = direction;
      lastScrollY.current = currentScrollY;

      const overallProgress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
      const newProgress: ScrollProgress = { overall: overallProgress };

      const totalSections = sectionRefs.length;
      const sectionProgress = overallProgress * totalSections;

      const newVisibleComponents: number[] = [];

      for (let i = 0; i < totalSections; i++) {
        if (sectionProgress > i) {
          newVisibleComponents.push(i);
        }
      }

      // Ensure at least first component is always visible
      if (newVisibleComponents.length === 0) {
        newVisibleComponents.push(0);
      }

      visibleComponents.current = newVisibleComponents;

      sectionKeys.forEach((key, i) => {
        if (!visibleComponents.current.includes(i)) {
          newProgress[key] = 0;
        } else {
          const componentStart = i / totalSections;
          const componentEnd = (i + 1) / totalSections;

          if (overallProgress <= componentStart) {
            newProgress[key] = 0;
          } else if (overallProgress >= componentEnd) {
            newProgress[key] = 1;
          } else {
            newProgress[key] = (overallProgress - componentStart) / (componentEnd - componentStart);
          }
        }
      });

      setScrollProgress(newProgress);
    };

    let scrollTrigger: ScrollTrigger | null = null;

    try {
      scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: handleScroll,
        onRefresh: handleScroll,
        scrub: 0.1,
      });

      handleScroll();
      console.log("[v0] ScrollTrigger created successfully");
    } catch (error) {
      console.error("[v0] Error creating ScrollTrigger:", error);
    }

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
        console.log("[v0] ScrollTrigger cleaned up");
      }
    };
  }, [uniformHeight]);

  useEffect(() => {
    console.log("[v0] Animating sections, visible:", visibleComponents.current);

    const sections = [
      { key: "mine", ref: sectionRefs[0] },
      { key: "improve", ref: sectionRefs[1] },
      { key: "automate", ref: sectionRefs[2] },
    ];

    sections.forEach((section, i) => {
      if (section.ref.current) {
        const isVisible = visibleComponents.current.includes(i);
        const progress = scrollProgress[section.key];

        try {
          if (!isVisible) {
            gsap.to(section.ref.current, {
              y: "100%",
              opacity: 1,
              duration: 5,
              ease: "power4.out",
              overwrite: true,
            });
          } else {
            const visibleIndex = visibleComponents.current.indexOf(i);
            const baseOffset =
              (1 - progress) * 100 * (visibleComponents.current.length - 1 - visibleIndex);

            gsap.to(section.ref.current, {
              y: `${Math.max(0, baseOffset)}%`,
              opacity: 1,
              duration: 5,
              ease: "power4.out",
              overwrite: true,
            });
          }
        } catch (error) {
          console.error("[v0] Error animating section:", section.key, error);
        }
      }
    });
  }, [scrollProgress]);

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
            : "0px",
      }}
    >
      <div className="sticky top-40 h-screen w-full overflow-hidden">
        {sections.map((section, i) => (
          <div
            key={section.key}
            ref={section.ref}
            className="absolute inset-0 w-full"
            style={{
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
