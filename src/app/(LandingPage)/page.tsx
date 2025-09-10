import AboutSection from "@/components/features/landingPage/About/About";
import Banner from "@/components/features/landingPage/Banner/Banner";
import BannerBottom from "@/components/features/landingPage/Banner/BannerBottom";
import BenefitsSection from "@/components/features/landingPage/Benefits/BenefitSeciton";
import WhatToDo from "@/components/features/landingPage/WhatToDo";

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerBottom />
      <WhatToDo/>
    <div className="">
      <AboutSection />
      <BenefitsSection />
    </div>
    </div>
  );
}
