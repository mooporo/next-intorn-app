"use client";

import ProfileCard from "../../components/ProfileCard";
import Bar from "../../components/Bar";
import { FaCode, FaPalette, FaPenNib } from "react-icons/fa";

export default function SpecializationsPage() {
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
            <span className="text-orange-400">Specializations</span>
          </h1>

          <div className="flex flex-col gap-6 max-w-[500px]">
            <div className="relative border border-orange-400 p-4 rounded-lg bg-gray-900 shadow-md hover:shadow-orange-400 transition">
              <FaCode className="absolute top-4 right-4 text-orange-400 text-2xl" />
              <h2 className="text-lg font-semibold text-white mb-1">Front end-developer</h2>
              <p className="text-gray-400 text-sm">
                Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.
              </p>
            </div>

            <div className="relative border border-orange-400 p-4 rounded-lg bg-gray-900 shadow-md hover:shadow-orange-400 transition">
              <FaPalette className="absolute top-4 right-4 text-orange-400 text-2xl" />
              <h2 className="text-lg font-semibold text-white mb-1">UI/UX Designer</h2>
              <p className="text-gray-400 text-sm">
                UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.
              </p>
            </div>

            <div className="relative border border-orange-400 p-4 rounded-lg bg-gray-900 shadow-md hover:shadow-orange-400 transition">
              <FaPenNib className="absolute top-4 right-4 text-orange-400 text-2xl" />
              <h2 className="text-lg font-semibold text-white mb-1">Graphic designer</h2>
              <p className="text-gray-400 text-sm">
                As a graphic designer, I transform ideas into visually striking and impactful designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
