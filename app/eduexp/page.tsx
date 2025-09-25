"use client";

import ProfileCard from "../../components/ProfileCard";
import Bar from "../../components/Bar";

export default function EduExp() {
  return (
    <main className="w-screen h-screen flex bg-gray-900 text-white overflow-hidden">
      <Bar />

      <div className="w-1/3 flex items-center justify-center bg-[#1D1C1D]">
        <ProfileCard />
      </div>

      <div className="w-2/3 p-12 overflow-y-auto">
        <h1 className="text-3xl font-bold text-orange-400 mb-6">
          Education & Experience
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-white">2022 - Present</h2>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>UI/UX Designer (Freelance)</li>
              <li>Fullstack Web Developer (Freelance)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2022 - 2025</h2>
            <p className="text-gray-400 mt-2">
              Bachelor Degree in Technology Digital and Innovation <br />
              <span className="text-sm text-gray-500">Southeast Asia University</span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2016 - 2021</h2>
            <p className="text-gray-400 mt-2">
              High School <br />
              <span className="text-sm text-gray-500">Taweethapisek School</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
