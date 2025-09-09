import AboutSection from "@/components/features/landingPage/About/About";
import BenefitsSection from "@/components/features/landingPage/Benefits/BenefitSeciton";
import FaqSection from "@/components/features/landingPage/FAQSection";

import WhyChooseUs from "@/components/features/landingPage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <AboutSection />
      <BenefitsSection />
      <FaqSection />
      <WhyChooseUs />
    </div>
  );
}
