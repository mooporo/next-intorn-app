"use client";

import ProfileCard from "../../components/ProfileCard";
import Bar from "../../components/Bar";

export default function ContactMePage() {
  return (
    <main className="w-screen h-screen flex bg-gray-900 text-white overflow-hidden relative">
      <Bar />

      <div className="flex w-full h-full">
        <div className="w-1/3 flex items-center justify-center bg-[#1D1C1D]">
          <ProfileCard />
        </div>

        <div className="w-2/3 p-12 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-white">Contact</span>{" "}
            <span className="text-orange-400">Me</span>
          </h1>
          <p className="text-gray-400 mb-8">Let's get in touch!</p>

          <form className="space-y-6 max-w-[500px]">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-[#1D1C1D] text-white border border-gray-700 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                type="tel"
                className="w-full p-2 rounded bg-[#1D1C1D] text-white border border-gray-700 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-[#1D1C1D] text-white border border-gray-700 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Address</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-[#1D1C1D] text-white border border-gray-700 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Content</label>
              <textarea
                rows={4}
                className="w-full p-2 rounded bg-[#1D1C1D] text-white border border-gray-700 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" className="accent-orange-500" />
              <label htmlFor="newsletter" className="text-sm text-gray-400">
                I want to receive the newsletter
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
