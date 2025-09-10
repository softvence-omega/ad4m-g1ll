import Image from "next/image";
import imgA from "../../../../public/landingPage/img1.png";
import imgB from "../../../../public/landingPage/img2.png";
import imgC from "../../../../public/landingPage/img3.png";

function WhatToDo() {
  const cards = [
    {
      img: imgA,
      title: "We Mine",
      desc: "Process mining provides organisations with deep insights into workflows and inefficiencies.",
    },
    {
      img: imgB,
      title: "We Improve",
      desc: "Enhancing operational efficiency requires a structured and data-driven approach.",
    },
    {
      img: imgC,
      title: "We Automate",
      desc: "Strategic automation is essential for organisations seeking scalability and consistency.",
    },
  ];

  return (
    <section className="py-16 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
          What We Do
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-700 mb-12 leading-relaxed">
          We acknowledge that as organisations expand their operations, the processes 
          that drive these operations can become increasingly complex especially when it comes to leads generation for the
          Home Care clients. At NXDI, we adopt the MIA (Mine, Improve & Automate) methodology to harness 
          the power of intelligent processes and system automation, ensuring that businesses can effectively 
          achieve the Home Care leads and increase their client footprint.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col border-2 border-white rounded-xl bg-white overflow-hidden h-80 hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="w-full h-48">
                <Image
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatToDo;