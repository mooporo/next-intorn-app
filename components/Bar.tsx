"use client";

import Link from "next/link";
import { FaUser, FaBriefcase, FaList, FaCode, FaGear } from "react-icons/fa6";

export default function Bar() {
  const icons = [
    { icon: <FaUser />, href: "/" },
    { icon: <FaBriefcase />, href: "/aboutme" }, // ตัวที่สอง → About Me
    { icon: <FaList />, href: "#" },
    { icon: <FaCode />, href: "#" },
    { icon: <FaGear />, href: "#" },
  ];

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 flex flex-col gap-4 p-4">
      {icons.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-gray-400 hover:text-orange-400 text-2xl transition-colors duration-300"
          passHref
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
