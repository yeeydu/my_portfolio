import React from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";

import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    name: "My Portfolio",
    description:
      "This is my recent project; my own portfolio created with Next.js, Tailwind in  Vercel platform",
    image: "/yeeyson-portfolio.png",
    github: "https://github.com/yeeydu/my_portfolio",
    link: "https://yeeysonduarte-portfolio.vercel.app/",
  },
  {
    name: "André Cristina",
    description:
      "A gardener in Algarve with a list of services for the community with over 35 years of experience. CMS",
    image: "/andre.jpg",
    github: "https://github.com/yeeydu",
    link: "https://andrecristina.com/",
  },
  {
    name: "Email and SMS Manager",
    description:
      "At my internship I made an Email and SMS Management and sending of notifications app with React and C#/.Net API also SQL database. This the link to the React project code.",
    image: "/notification.png",
    github: "https://github.com/yeeydu/Notifications-React-Project",
    link: "",
  },
  {
    name: "My Course Final Project",
    description:
      "This was my web & mobile course final project, it was a team work. This was a PHP, Bootstrap, mySQL and Javascript made. Unfortunately the source code is private in github for owner protection.",
    image: "/diogopinto.jpg",
    github: "https://github.com/yeeydu/",
    link: "https://www.diogopinto.pt/",
  },
];

export default function ProjectSection() {
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
