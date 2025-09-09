import { benefits } from "@/lib/data";

const BenefitsSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-pink-100 px-6 py-12">
      <div className="mx-auto text-center">
        <h2 className="font-custom-font mb-6 text-3xl font-semibold text-red-600">
          Benefits of Our Services
        </h2>
        <p className="mb-12 text-lg text-gray-700">
          By partnering with NXD, your organisation will experience several benefits, including:
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-lg sm:w-72 lg:w-80"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
