import Image from "next/image";
import logo from "../../../../../public/assets/Frame 2121457658.png";
import bannerBg from "../../../../../public/assets/Images/harness_hero.png";

function Banner() {
  return (
      <section className=" relative w-full bg-white h-[300px] sm:h-[400px] lg:h-[880px] md:h-[500px] overflow-hidden">
      <div className="flex flex-col md:flex-row h-full w-full relative z-10">
        {/* Left content */}
        <div className="p-6 md:p-12 flex flex-col justify-center z-10">
          <h1 className="lg:text-7xl sm:text-5xl md:text-5xl font-extrabold mb-6 leading-snug text-black">
            <span className="text-text-primary">Harness </span> the power of
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="h-[120px] w-[280px] sm:h-[150px] sm:w-[350px] bg-black rounded-xl flex items-center justify-center overflow-hidden">
              <Image src={logo} alt="Demo" width={120} height={40} />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-600 leading-snug">
              Intelligent
            </h1>
          </div>

          <h1 className="text-5xl md:text-5xl lg:text-7xl font-extrabold leading-snug text-black">
            processes and <span className="text-blue-600">Automation</span>
          </h1>
        </div>
      </div>

      {/* Right background image */}
      <div
        className="hidden md:block absolute top-0 right-0 h-full w-[50%] lg:w-[45%] xl:w-[40%]"
        style={{
          backgroundImage: `url(${bannerBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          transform: "scaleX(-1)", // flip horizontally
          zIndex: 0,
        }}
      ></div>
    </section>
  );
}

export default Banner;
