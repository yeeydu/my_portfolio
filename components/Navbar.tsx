"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-scroll/modules";

interface Navitems {
  label: string;
  page: string;
}

//const NavItems: Array<Navitems> = [
const NavItems: Navitems[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavabar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-4 md:block">
              <div className="md:py-5 md:block ">
            <Link to="home">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 hover:text-teal-600 cursor-pointer">
                  Yeeyson Duarte
                </h2>
            </Link>
              </div>
            <div className="md:hidden">
              <button
                onClick={() => {
                  setNavabar(!navbar);
                }}
              >
                {navbar ? (
                  <IoMdClose
                    size={30}
                    className="dark:text-neutral-100 text-neutral-900"
                  />
                ) : (
                  <IoMdMenu
                    size={30}
                    className="dark:text-neutral-100  hover:text-teal-600 text-neutral-900"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
            ${navbar ? "block" : "hidden"} 
            `}
          >
            <div className="md:flex md:space-x-6 space-y-8 md:space-y-0">
              {NavItems.map((item, id) => {
                return (
                  <Link
                    key={id}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavabar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={16} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={16} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
