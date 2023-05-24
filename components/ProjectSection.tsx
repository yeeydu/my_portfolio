import React, { useState } from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";
import projects from '../data/projects.json'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Link from "next/link";
/* 
// - use this if you don´t have an external file
const projects = [
  {
    name: "My Portfolio",
    description:
      "This is my recent project; my own portfolio created with Next.js, Tailwind in  Vercel platform",
    image: "/yeeyson-portfolio.png",
    github: "https://github.com/yeeydu/my_portfolio",
    link: "https://yeeysonduarte.vercel.app",
  },
];
*/
export default function ProjectSection() {
  const [setProjects] = useState(projects);

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl mb-10">
        Projects
        <hr className="w-28 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-10 items-center">
        {projects.map((item, id) => {
          return (
            <div key={id}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-1 ">
                  <div className="md:w-1/2 mt-8">
                    <Link href={item.link} target="_blank">
                      <Image
                        className="rounded-xl shadow-xl hover:opacity-70"
                        src={item.image}
                        alt={""}
                        width={400}
                        height={400}
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2 mt-12">
                    <h1 className="text-2xl font-bold mb-6">{item.name}</h1>
                    <p className="text-lg leading-7 mb-4 dark:text-neutral-500">
                      {item.description}
                    </p>
                    <div className="flex flex-row space-x-2 align-bottom">
                      <Link href={item.github} target="_blank">
                        <BsGithub
                          size={24}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={item.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={24}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
