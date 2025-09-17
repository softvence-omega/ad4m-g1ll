import Wrapper from "@/components/reusable/Wrapper";
import { benefits } from "@/lib/data";
import BenefitCard from "./BenefitCard";

const BenefitsSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/landingPage/benefits.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-25"
    >
      <Wrapper>
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold text-red-600 md:text-[36px]">
            Benefits of Our Services
          </h2>
          <p className="mb-12 text-lg text-[#454F5B]">
            By partnering with NXD, your organisation will experience several benefits, including:
          </p>
          <div className="mt-20 flex flex-wrap justify-center gap-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 md:mt-15">
            {benefits.slice(2, 5).map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BenefitsSection;
