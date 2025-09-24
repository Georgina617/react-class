import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ discountInfo, body, imageUrl }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="2000"
      className="relative flex items-end justify-center  bg-cover bg-center h-[400px] w-[400px]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 bg-black opacity-25"></div>
      <div className="w-[80%] m-auto mb-4 space-y-3 z-10 ">
        <h1 className="text-white text-2xl font-bold">{discountInfo}</h1>
        <p className="text-white text-md">{body}</p>
        <button className="bg-white px-8 py-4 hover:bg-black hover:text-white transition-all ease-in-out duration-1000">
          Shop Now
        </button>
      </div>
    </article>
  );
};

export default Card;
