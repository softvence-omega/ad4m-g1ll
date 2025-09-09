import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-[1920px] px-4 md:px-10">{children}</div>;
};

export default Wrapper;
