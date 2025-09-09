import AboutSection from "@/components/features/landingPage/About/About";
import Banner from "@/components/features/landingPage/Banner/Banner";
import BannerBottom from "@/components/features/landingPage/Banner/BannerBottom";
import BenefitsSection from "@/components/features/landingPage/Benefits/BenefitSeciton";

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerBottom />
    <div className="">
      <AboutSection />
      <BenefitsSection />
    </div>
    </div>
  );
}
