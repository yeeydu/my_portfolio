"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

export default function HomeSection() {
  return (
    <>
      <section id="home">
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <div className="md:w-3/12 md:mt-4  ">
            <Image
              src="/developer.png"
              alt={""}
              width={200}
              height={200}
              priority
              className=" rounded shadow-2xl hover:rounded-full hover:shadow-teal-600 hover:-translate-y-1 md:hover:translate-x-6 hover:scale-106 duration-500  "
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="font-bold text-4xl mt-6 md:text-5xl">
              Hi, I am 'Name'
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I am a web{" "}
              <span className="text-teal-600 font-semibold ">developer</span>{" "}
               Experienced in languages like Javascript, python, C and HTML, CSS 
            </p>
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </div>
        <div>
          <Link
            className=" flex flex-row justify-center"
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={30} className="animate-bounce" />
          </Link>
        </div>
      </section>
    </>
  );
}
