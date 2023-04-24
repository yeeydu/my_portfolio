import React from "react";
import { SiLinktree } from "react-icons/si";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="dark:bg-stone-900">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="flex flex-col mx-20 p-4 text-center text-neutral-900 md:flex-row md:justify-between ">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100 text-sm">
          © 2023 Yeeyson Duarte
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://linktr.ee/yeeyson" rel="noreferrer" target="_blank">
            <SiLinktree
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={24}
            />
          </a>
          <a href="https://github.com/yeeydu" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yeeyson-duarte-6545041a7/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={24}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
