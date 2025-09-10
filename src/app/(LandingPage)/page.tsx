import AboutSection from "@/components/features/landingPage/About/About";
import Banner from "@/components/features/landingPage/Banner/Banner";
import BannerBottom from "@/components/features/landingPage/Banner/BannerBottom";
import BenefitsSection from "@/components/features/landingPage/Benefits/BenefitSeciton";
import FaqSection from "@/components/features/landingPage/FAQSection";
import ScrollStack from "@/components/features/landingPage/ScrollStack/ScrollStack";
import WhatToDo from "@/components/features/landingPage/WhatToDo";

import WhyChooseUs from "@/components/features/landingPage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <BannerBottom />
       <WhatToDo/>
      <ScrollStack />
      <AboutSection />
      <BenefitsSection />
      <FaqSection />
      <WhyChooseUs />
    </div>
  );
}
