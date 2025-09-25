import ProfileCard from "../../components/ProfileCard";
import Bar from "../../components/Bar";

export default function AboutMe() {
  return (
    <main className="w-screen h-screen flex bg-gray-900 relative overflow-hidden">
      {/* Bar ด้านขวา */}
      <Bar />

      {/* เนื้อหาหลัก */}
      <div className="flex w-full h-full">
        {/* Left Profile Card */}
        <div className="w-1/3 flex items-center justify-center bg-[#1A1A1A]">
          <ProfileCard />
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-12 text-white overflow-y-auto">
          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight leading-snug">
            About <span className="text-orange-400">Me</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-xl font-semibold text-gray-200 leading-relaxed">
            I find fulfillment in blending visual design with the power of coding to create meaningful experiences.
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-sm leading-loose tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora et neque a aliquid nisi voluptatem? Mollitia, officiis,
            architecto earum voluptates obcaecati corrupti voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iusto maxime tempora et neque a aliquid nisi voluptatem?
          </p>
        </div>
      </div>
    </main>
  );
}