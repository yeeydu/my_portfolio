import { Inter } from "next/font/google";
import Navbar from "@component/components/Navbar";
import HomeSection from "@component/components/HomeSection";
import About from "@component/components/AboutSection";
import ProjectSection from "@component/components/ProjectSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HomeSection />
      <About/>
      <ProjectSection/>
    </main>
  );
}
 