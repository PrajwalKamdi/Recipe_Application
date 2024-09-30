import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
function Header() {
  const [menu, setMenu] = useState(false);
  const handle = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className=" fixed top-0 left-0 right-0  bg-white  shadow-md text-black p-3 md:py-5 md:text-[15px] md:px-16 ">
        <nav className="flex items-center justify-between">
          <div>
            <NavLink to="/" className={"text-orange-500 font-serif text-xl"}>
              Recipes
            </NavLink>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex justify-between gap-10 font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="service"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-black"
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-black"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <GiHamburgerMenu
          size={15}
            className={`lg:hidden ${menu ? "hidden" : "block"}`}
            onClick={handle}
          />
          <IoMdClose
            size={20}
            className={`lg:hidden ${menu ? "block" : "hidden"}`}
            onClick={handle}
          />
        </nav>

        <nav className={`lg:hidden ${menu ? "block" : "hidden"} text-center h-screen `}>
          <div>
            <ul className="flex flex-col mt-[120px]  gap-16">
              <li onClick={handle}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={handle}>
                <NavLink to="/">Recipe</NavLink>
              </li>
              <li onClick={handle}>
                <NavLink to="/service">Service</NavLink>{" "}
              </li>
              <li onClick={handle}>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
