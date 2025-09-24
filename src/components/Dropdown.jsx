import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const Dropdown = () => {
  const [showdropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showdropdown);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="relative"
      onMouseEnter={toggleDropdown} //onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={toggleDropdown} //onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="flex items-center gap-1">
        <li>Home</li>
        {showdropdown ? <BiChevronRight /> : <BiChevronDown />}
      </div>
      {showdropdown && (
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="absolute z-[2000] w-[100px] bg-white text-black p-3 font-semibold space-y-2 top-6 right-6 rounded-sm"
        >
          <li>Home 1</li>
          <li>Home 2</li>
          <li>Home 3</li>
        </div>
      )}
    </section>
  );
};

export default Dropdown;
