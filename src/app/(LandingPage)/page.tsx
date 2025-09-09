import AboutSection from "@/components/features/landingPage/About/About";
import Banner from "@/components/features/landingPage/Banner/Banner";
import BenefitsSection from "@/components/features/landingPage/Benefits/BenefitSeciton";

export default function Home() {
  return (
    <div>
      <Banner />
    <div className="">
      <AboutSection />
      <BenefitsSection />
    </div>
    </div>
  );
}
