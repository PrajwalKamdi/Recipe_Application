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
      <header className=" fixed top-0 left-0 right-0 bg-black text-white p-3 md:py-5 md:text-[15px] md:px-16 ">
        <nav className="flex items-center justify-between">
          <div>
            <NavLink to="/" className={"text-orange-400 text-xl"}>
              Recipes
            </NavLink>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex justify-between gap-10 font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="service"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "text-white"
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : "text-white"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <GiHamburgerMenu
            className={`lg:hidden ${menu ? "hidden" : "block"}`}
            onClick={handle}
          />
          <IoMdClose
            size={20}
            className={`lg:hidden ${menu ? "block" : "hidden"}`}
            onClick={handle}
          />
        </nav>
      </header>
      <nav className="text-center inset-0">
        <div
          className={`lg:hidden ${menu ? "block" : "hidden"} py-10 h-screen `}
        >
          <ul className="flex flex-col mt-[130px] gap-16">
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
    </>
  );
}

export default Header;
