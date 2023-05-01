import React from "react";
import Image from "next/image";

//Level 1-3 begginer to advanced
const skills = [
  { skill: "HTML", level: 3 },
  { skill: "CSS", level: 3 },
  { skill: "SQL", level: 2 },
  { skill: "MySQL", level: 2 },
  { skill: "ReactJS", level: 3 },
  { skill: "NextJS", level: 2 },
  { skill: "Laravel", level: 3 },
  { skill: "JSON", level: 3 },
  { skill: "Bootstrap", level: 2 },
  { skill: "Typescript", level: 2 },
  { skill: "Github", level: 2 },
  { skill: "Tailwind", level: 2 },
  { skill: "WordPress", level: 3 },
  { skill: "React Native", level: 2 },
  { skill: "REST", level: 2 },
  { skill: "MVC", level: 2 },
  { skill: ".Net", level: 1 },
  { skill: "C#", level: 1 },
  { skill: "PHP", level: 2 },
  { skill: "Javascript", level: 2 },
  { skill: "Azure", level: 1 },
  { skill: "Java", level: 1 },
  { skill: "Android Studio", level: 1 },
];

export default function About() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl mb-10">
          About me
          <hr className="w-28 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              I started as a self-taught web developer with a strong desire for
              development and innovative design while I was working with web content for
              WordPress sites and social networks. Video editing and many other
              things that came throughout the way.
            </p>
            <br />
            <p>
              Getting to know much more of technology was my daily bread. I took
              a web & Mobile course that boost my scatered knowledge to more
              concistent and pratical.
            </p>
            <br />
            <p>
              Looking forward for more and best oportunities with development and work experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              My skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start ">
              {skills.map((item, id) => {
                return (
                  <p
                    key={id}
                    className={`px-2 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-gray-300 ${
                      item.level === 3
                        ? " bg-emerald-400 "
                        : item.level === 2
                        ? "bg-teal-300"
                        : "bg-teal-100"
                    } `}
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <p className="text-xs mt-3 md:text-left text-center">
              <span className=" bg-emerald-400 rounded text-emerald-400">[ ]</span>
              {"  "} Advanced{"  "}
              <span className=" bg-teal-300 rounded text-teal-300">[ ]  </span>
              {"  "}Intermediate{"  "}
              <span className=" bg-teal-100 rounded text-teal-100">[ ]  </span>
              {"  "}Begginer/Training Only {"  "}
            </p>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-4 md:z-0 mt-4 animate-slideUpCubiBezier hover:translate-x-1 hover:drop-shadow-xl animation-delay-2 "
              src="/about-developer.png"
              width={300}
              height={100}
              alt="about me image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
