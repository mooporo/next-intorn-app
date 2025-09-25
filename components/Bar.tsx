"use client";

import Link from "next/link";
import {
  FaHome,
  FaUserAlt,
  FaBookOpen,
  FaListAlt,
  FaBriefcase,
  FaCode,
  FaCommentDots,
} from "react-icons/fa";

const icons = [
  { href: "/", icon: <FaHome /> },
  { href: "/aboutme", icon: <FaUserAlt /> },
  { href: "/eduexp", icon: <FaBookOpen /> },
  { href: "/spec", icon: <FaListAlt /> },
  { href: "/projects", icon: <FaBriefcase /> },
  { href: "/skills", icon: <FaCode /> },
  { href: "/contactme", icon: <FaCommentDots /> },
];

export default function Bar() {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 flex flex-col gap-4 p-2">
      {icons.map((item, index) => (
        <Link key={index} href={item.href}>
          <div className="w-12 h-12 flex items-center justify-center bg-[#1D1C1D] text-white rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition cursor-pointer text-xl">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
