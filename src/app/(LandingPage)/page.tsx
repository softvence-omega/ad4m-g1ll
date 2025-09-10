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
    <div>
      <section id="home">
        <Banner />
      </section>

      <BannerBottom />

      <section id="services">
        <WhatToDo />
      </section>

      <ScrollStack />

      <section id="about">
        <AboutSection />
      </section>

      <section id="benefits">
        <BenefitsSection />
      </section>

      <section id="faq">
        <FaqSection />
      </section>

      <section id="whyus">
        <WhyChooseUs />
      </section>
    </div>
  );
}
