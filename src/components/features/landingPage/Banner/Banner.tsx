import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import bannerBg from "../../../../../public/assets/Images/harness_hero.png";

function Banner() {
  const vdo = "/landingPage/about.mp4";

  return (
    <section className="border-b border-gray-300 relative w-full bg-white h-[300px] sm:h-[400px] md:h-[500px] lg:h-[880px] overflow-hidden">
      <div className="flex flex-col md:flex-row h-full w-full relative z-10 font-custom-font">
        {/* Left content */}
        <div
          className="
            p-6 md:p-12 
            flex flex-col justify-center 
            z-10 font-custom-font
            items-center md:items-start
          "
        >
          <h1 className="lg:text-[160px] sm:text-5xl md:text-7xl font-extrabold mb-1 leading-tight text-black text-center md:text-left">
            <span className="text-text-primary">Harness </span> the power of
          </h1>

          <div className="flex flex-col sm:flex-row items-center md:items-center gap-1 mb-1">
            <div className="h-[120px] w-[280px] sm:h-[150px] sm:w-[350px] bg-black rounded-xl flex items-center justify-center overflow-hidden">
              <video
                autoPlay
                loop
                muted
                src={vdo}
                className="h-full w-full rounded-2xl object-cover"
              ></video>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[160px] font-extrabold text-[#C40E44] leading-tight text-center md:text-left ml-4">
              Intelligent
            </h1>
          </div>

          <h1 className="text-5xl md:text-5xl lg:text-[160px] font-extrabold leading-tight text-black text-center md:text-left">
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

      {/* Floating Social Icons */}
      <div className="hidden md:flex flex-col items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 z-20 space-y-4 rounded-full bg-gray-100 p-2 shadow-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#485390] text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out">
            <FaFacebookF size={20} />
          </a>
         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#485390] text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out">
            <FaInstagram size={20} />
          </a>
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#485390] text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out">
            <FaLinkedinIn size={20} />
            </a>
       </div>
    </section>
  );
}

export default Banner;
