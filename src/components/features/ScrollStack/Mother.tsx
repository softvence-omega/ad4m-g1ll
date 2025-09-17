"use client";
import { useRef } from "react";
import Card from "./Card";
import { projects } from "./data";

const ScrollStack = () => {
  const container = useRef(null);

  return (
    <main ref={container} className="bg-[#F6F6F6] pt-10">
      {projects.map((project, i) => {
        return <Card key={`p_${i}`} i={i} {...project} />;
      })}
    </main>
  );
};

export default ScrollStack;
