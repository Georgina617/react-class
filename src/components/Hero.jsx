import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  const winter = false;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative h-screen items-center flex bg-blue-600 bg-[url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')] bg-fixed bg-cover bg-center">
      <div className="absolute inset-0 top-0 right-0 left-0 bg-gradient-to-r from-blue-900 via-blue-700 to to-blue-500 opacity-25"></div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="space-y-4 pl-10 z-10"
      >
        {winter ? (
          <h1 className="text-5xl text-white font-bold">
            Raining Offers For <br /> Cold winter!
          </h1>
        ) : (
          <h1 className="text-5xl text-white font-bold">
            Raining Offers For <br /> Hot summer!
          </h1>
        )}
        <h2 className="text-3xl text-[#ffff]">25% Off On All Products</h2>
        <div className="space-x-8 flex">
          <button className="border-[1px] border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all ease-in-out duration-1000 hidden lg:flex">
            Find More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
