import Logo from "../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
import { FaBell, FaUser } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useUser } from "../context/Usercontext";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [open, setOpen] = useState(false);

  const { user } = useUser();
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const Notify = [
    {
      body: "You have an uncompleted order",
    },
    {
      body: "You had 100 views last week",
    },
    {
      body: "John sent you a friend request",
    },
  ];

  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-400 text-white">
        <div className="flex items-center gap-2">
          {user && user.image && (
            <img src={user.image} alt="User" className="w-8 h-8 rounded-full" />
          )}
          {user ? user.firstName : "visitor"}
        </div>
        <div className="text-2xl font-bold">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex justify-content-between gap-4 cursor-pointer">
            <Dropdown />
            <Link to="/about">
              <li>About</li>
            </Link>

            <li className="hover:text-purple-400">Contact</li>
          </ul>
        </div>
        <div className="hidden space-x-4 lg:flex items-center">
          <button
            onMouseEnter={toggleNotification}
            onMouseLeave={toggleNotification}
            className="relative"
          >
            <FaBell className="text-4x" />
          </button>
          <button className="bg-black px-6 py-2 rounded-full hover:bg-red-500 hover:text-blue-500">
            Login
          </button>
        </div>

        <div className="flex lg:hidden">
          <button onClick={toggleMobileNav} className="z-[1000]">
            {showMobileNav ? (
              <IoMdClose className="text-2xl text-black" />
            ) : (
              <IoIosMenu className="text-2xl text-black" />
            )}
          </button>
        </div>
      </nav>

      {showNotification && (
        <article
          data-aos="fade-left"
          data-aos-duration="500"
          className="rounded-md bg-white px-4 py-2 divide-y-[1px] text-sm w-[400px] h-fit space-y-4 z-10 shadow-lg absolute right-10 top-16"
        >
          {Notify.map((n, index) => (
            <div key={index} className="w-full">
              {n.body}
            </div>
          ))}
        </article>
      )}
      {showMobileNav && (
        <aside className="w-[80%] absolute bg-white right-0 top-0 h-screen lg:hidden block z-40">
          <div className="py-6 ">
            <FaUser className="ml-4 text-4xl mb-4" />
            <ul className="divide-y-2">
              <li className="p-4">EVERYTHING</li>
              <ul
                className="p-4 hover: cursor-pointer transition-transform duration-500"
                onClick={() => setOpen(!open)}
              >
                HOME
                {open && (
                  <div className="pl-4 mt-2 space-y-2 font-semibold transition-transform duration-500">
                    <li>Home 1</li>
                    <li>Home 2</li>
                    <li>Home 3</li>
                  </div>
                )}
              </ul>
              <li className="p-4">MEN</li>
              <li className="p-4">ACCESSORIES</li>

              <span className="pl-4 mt-5">ABOUT</span>
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
