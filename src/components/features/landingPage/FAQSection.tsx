"use client";
import HomeButton from "@/components/reusable/HomeButton";
import Wrapper from "@/components/reusable/Wrapper";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

const faqData = [
  {
    question: "What is Lorem Ipsum?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    question: "Why do we use Lorem Ipsum?",
    answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.`,
  },
  {
    question: "Why do we use Lorem Ipsum?",
    answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.`,
  },
  {
    question: "Where can I get some?",
    answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
  {
    question: "What are the benefits of Lorem Ipsum?",
    answer: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.`,
  },
];

const FaqSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/landingPage/FAQ.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-20 md:py-32"
    >
      <Wrapper>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-4 text-left">
              <button className="bg-text-secondary rounded-lg px-6 py-1 font-semibold text-white transition-colors duration-200">
                Questions & Answers
              </button>
              <h3 className="mt-2 text-2xl font-bold md:text-[32px]">
                Have a Question? Find here !
              </h3>
              <p className="max-w-md text-lg font-semibold text-[#626262]">
                If you have any questions, you can always check our FAQ section below or get in
                touch with us.
              </p>
              <div className="mt-8 w-full md:w-fit">
                <HomeButton title="Subscribe" />
              </div>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full cursor-pointer justify-between border-b border-[#7C7C7C] px-6 py-4 text-left transition-colors duration-300 focus:outline-none">
                        <p className="text-xl">{item.question}</p>
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180 transform" : ""}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="rounded-lg px-6 py-4">
                        <p className="text-left">{item.answer}</p>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FaqSection;
