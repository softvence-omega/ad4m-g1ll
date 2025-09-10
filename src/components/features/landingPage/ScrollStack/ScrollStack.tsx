"use client";
import Wrapper from "@/components/resuable/Wrapper";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ScrollStack: React.FC = () => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const cardCount = 3;

  const getCardTransform = (index: number) => {
    const isVisible = isIntersecting && activeCardIndex >= index;
    const scale = 1;
    let translateY = "100px";

    if (isVisible) {
      translateY = `${90 - index * 30}px`;
    }

    return {
      transform: `translateY(${translateY}) scale(${scale})`,
      opacity: isVisible ? (index === 0 ? 0.9 : 1) : 0,
      zIndex: 10 + index * 10,
      pointerEvents: isVisible ? "auto" : ("none" as "auto" | "none"),
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !scrollableSectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const parentRect = scrollableSectionRef.current.getBoundingClientRect();
          const viewportHeight = parentRect?.height ?? window.innerHeight;

          const sectionTop = sectionRect.top - parentRect.top;
          const sectionHeight = sectionRef.current.offsetHeight;
          const scrollableDistance = sectionHeight - viewportHeight;

          let progress = 0;
          if (sectionTop <= 0 && Math.abs(sectionTop) <= scrollableDistance) {
            progress = Math.abs(sectionTop) / scrollableDistance;
          } else if (sectionTop <= 0) {
            progress = 1;
          }

          let newActiveIndex = 0;
          const progressPerCard = 1 / cardCount;
          for (let i = 0; i < cardCount; i++) {
            if (progress >= progressPerCard * (i + 1)) {
              newActiveIndex = i + 1;
            }
          }

          setActiveCardIndex(Math.min(newActiveIndex, cardCount - 1));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    const scrollElement = scrollableSectionRef.current;
    scrollElement?.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollElement?.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [cardCount]);

  const cardImages = ["/landingPage/img1.png", "/landingPage/img2.png", "/landingPage/img3.png"];

  const cardTexts = [
    `Process mining provides organisations with deep, data-driven insights into
    their operational workflows by systematically analysing system data.
    Through a structured and meticulous evaluation of system events, NXDI
    enables businesses to identify inefficiencies, address compliance risks,
    and uncover opportunities for optimisation. We leverage advanced analytics
    and industry-leading methodologies to map and assess processes within
    real-world conditions, delivering a transparent, evidence-based view of
    operational performance. This comprehensive approach empowers
    organisations to streamline workflows, enhance efficiency, and establish a
    strong foundation for seamless process automation. By proactively
    identifying inefficiencies, businesses can make informed, strategic
    decisions that drive operational excellence and foster a culture of
    continuous improvement. Furthermore, our detailed, insight-rich reporting
    provides organisations with clear, actionable recommendations, ensuring
    sustainable growth, enhanced performance, and long-term business
    resilience.`,
    `Enhancing operational efficiency requires a structured and strategic
    approach to process improvement. At NXDI, we work in close partnership
    with your organisation to identify inefficiencies, address operational
    challenges, and optimise workflows to drive productivity and service
    excellence. We undertake comprehensive end-to-end process evaluations,
    engaging key stakeholders and applying data-driven insights to develop
    tailored, high-impact solutions. By ensuring that processes are fully
    aligned with business objectives, we support organisations in implementing
    targeted improvements and automation strategies that streamline
    operations, reduce complexity, and enhance overall performance. Our
    consultative approach fosters collaboration across all levels of the
    organisation, ensuring stakeholder engagement and cultivating a culture of
    continuous improvement. This holistic methodology not only delivers
    immediate operational benefits but also establishes a resilient framework
    for sustained efficiency, adaptability, and long-term business success in
    an evolving marketplace.`,
    `Strategic automation is essential for organisations seeking to enhance
    operational efficiency, optimise resources, and scale effectively. At
    NXDI, we focus on assessing automation readiness, identifying high-impact
    opportunities, and developing tailored solutions that deliver measurable
    business value. A key area of our expertise is Software Robotics (SR),
    which enables organisations to automate repetitive tasks, enhance
    accuracy, and improve workforce productivity. By implementing intelligent
    automation strategies, we empower businesses to reallocate valuable
    resources towards innovation, customer experience, and long-term strategic
    growth. Beyond implementation, we provide ongoing support and performance
    monitoring to ensure the sustainability and continuous optimisation of
    automation initiatives. We prioritise seamless integration with existing
    workflows, minimising disruption while maximising efficiency gains. With
    our expertise, organisations can enhance agility, reduce operational
    costs, and maintain a competitive advantage in an increasingly dynamic
    business environment.`,
  ];

  return (
    <section
      ref={scrollableSectionRef}
      className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-hidden relative max-h-[140dvh] w-full xl:max-h-[100dvh]"
    >
      <div ref={sectionRef} className="relative h-[155dvh] xl:h-[205dvh]">
        <div className="sticky top-0 flex w-full items-center justify-center overflow-hidden">
          <div className="mx-auto flex h-full w-full flex-col justify-center">
            <div className="relative mx-auto h-[150dvh] w-full xl:h-[100dvh]">
              {["We Mine", "We Improve", "We Automate"].map((title, index) => (
                <div
                  key={index}
                  className={`absolute z-50 overflow-hidden shadow-xl transition-all duration-300`}
                  style={{
                    top: 0,
                    left: "50%",
                    transform: `translateX(-50%) ${getCardTransform(index).transform}`,
                    width: "100%",
                    opacity: getCardTransform(index).opacity,
                    zIndex: getCardTransform(index).zIndex,
                    pointerEvents: getCardTransform(index).pointerEvents,
                  }}
                >
                  <div className={`w-full rounded-t-xl ${index === 0 ? "bg-text-tertiary" : index === 1 ? "bg-text-primary" : "bg-text-secondary"}`}>
                    <Wrapper>
                      <div className="flex w-full flex-col justify-between gap-20 py-20 xl:flex-row xl:items-center">
                        <div className="text-white xl:w-1/2">
                          <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">{title}</h2>
                          <p className="mb-8 xl:text-xl">
                            {cardTexts[index]}
                          </p>
                          <a href="#" className="font-semibold underline">
                            Read More
                          </a>
                        </div>
                        <div className="xl:w-1/2 relative h-[60dvh] w-full md:block hidden">
                          <Image
                            src={cardImages[index]}
                            alt={title}
                            fill
                            className="rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </Wrapper>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
