import ProfileCard from "../components/ProfileCard";
import Bar from "../components/Bar";

export default function Home() {
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
          <h3 className="text-orange-400 font-medium tracking-wide leading-loose">
            Let's Work Together!
          </h3>

          <h1 className="text-3xl font-bold mt-2 leading-loose tracking-tight">
            Hi From <span className="text-orange-400">Intorn Rungrodatsawakul</span>, <br />
            Interactive Designer & Fullstack Web Developer
          </h1>

          <p className="mt-6 text-gray-400 text-sm leading-loose tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora et neque a aliquid nisi voluptatem? Mollitia, officiis,
            architecto earum voluptates obcaecati corrupti voluptatem.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-6xl font-bold text-orange-400 tracking-tight leading-none">3+</h2>
              <p className="text-sm text-gray-400 tracking-wide leading-loose">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-6xl font-bold text-orange-400 tracking-tight leading-none">10+</h2>
              <p className="text-sm text-gray-400 tracking-wide leading-loose">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
