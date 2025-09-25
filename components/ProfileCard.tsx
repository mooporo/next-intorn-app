"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiGoogle, SiX } from "react-icons/si";

export default function ProfileCard() {
  return (
    <div className="p-8 bg-gray-800 rounded-2xl flex flex-col items-center gap-6 shadow-xl max-w-md w-full">
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-white font-bold text-2xl">
          <span className="text-orange-400">I</span>ntorn
        </h2>
        <div className="w-72 h-72 overflow-hidden rounded-2xl mx-auto">
          <Image
            src="/Intorn.png"
            alt="Profile"
            width={288}
            height={288}
            className="object-cover"
          />
        </div>
        <p className="text-gray-400 text-base mt-2 text-center w-full">
          STU ID: 6552410027
        </p>
      </div>
      <p className="text-gray-400 text-base mt-2">Fullstack Web Developer</p>
      <div className="flex gap-6 mt-3 text-white text-2xl">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="X"><SiX /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="Google"><SiGoogle /></a>
      </div>
      <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition">
        HIRE ME!
      </button>
    </div>
  );
}
