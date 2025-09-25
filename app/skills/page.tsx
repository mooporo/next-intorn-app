"use client";

import ProfileCard from "../../components/ProfileCard";
import Bar from "../../components/Bar";
import SkillCard from "../../components/SkillCard";
import { FaReact, FaFigma, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function SkillsPage() {
  return (
    <main className="w-screen h-screen flex bg-gray-900 text-white overflow-hidden relative">
      <Bar />

      <div className="flex w-full h-full">
        <div className="w-1/3 flex items-center justify-center bg-[#1D1C1D]">
          <ProfileCard />
        </div>

        <div className="w-2/3 p-12 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-8">
            <span className="text-white">My</span>{" "}
            <span className="text-orange-400">Skills</span>
          </h1>

          <div className="grid grid-cols-3 gap-8 max-w-[600px]">
            <SkillCard icon={<FaReact />} name="React" percentage={60} />
            <SkillCard icon={<FaFigma />} name="Figma" percentage={85} />
            <SkillCard
              icon={
                <div className="flex gap-1">
                  <FaHtml5 />
                  <FaCss3Alt />
                </div>
              }
              name="HTML/CSS"
              percentage={80}
            />
            <SkillCard icon={<SiNextdotjs />} name="Next.js" percentage={80} />
            <SkillCard icon={<FaJsSquare />} name="JavaScript" percentage={60} />
            <SkillCard icon={<FaGithub />} name="GitHub" percentage={90} />
          </div>
        </div>
      </div>
    </main>
  );
}
