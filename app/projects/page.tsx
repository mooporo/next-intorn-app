"use client";

import ProfileCard from "../../components/ProfileCard";
import Bar from "../../components/Bar";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="w-screen h-screen flex bg-gray-900 text-white overflow-hidden relative">
      <Bar />

      <div className="flex w-full h-full">
        <div className="w-1/3 flex items-center justify-center bg-[#1D1C1D]">
          <ProfileCard />
        </div>

        <div className="w-2/3 p-12 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-8">
            <span className="text-white">Featured</span>{" "}
            <span className="text-orange-400">Projects</span>
          </h1>

          <div className="border border-orange-400 rounded-xl p-6 bg-gray-900 shadow-md hover:shadow-orange-400 transition max-w-[600px]">
            <h2 className="text-xl font-semibold text-white mb-2">
              Manage Task App - Fullstack Web Development
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Here&apos;s my latest project built with{" "}
              <span className="text-orange-400">Next.js</span> and{" "}
              <span className="text-orange-400">Laravel</span>, using{" "}
              <span className="text-orange-400">TailwindCSS</span> on the front-end. Watch the video to see the responsive landing page in action!
            </p>

            <a
              href="#"
              className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition mb-4"
            >
              ▶ Watch Video
            </a>

            <div className="mt-4 rounded-lg overflow-hidden">
              <Image
                src="/projects.png"
                alt="Project Preview"
                width={560}
                height={315}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
