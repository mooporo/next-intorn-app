import ProfileCard from "../../components/ProfileCard";
import Bar from "../../components/Bar";

export default function AboutMe() {
  return (
    <main className="w-screen h-screen flex bg-gray-900 relative overflow-hidden">
      <Bar />

      <div className="flex w-full h-full">
        <div className="w-1/3 flex items-center justify-center bg-[#1A1A1A] p-6">
          <ProfileCard />
        </div>

        <div className="w-2/3 flex items-start overflow-y-auto">
          <div className="max-w-[600px] pl-16 pt-12 text-white">
            <h3 className="text-orange-400 font-medium tracking-wide leading-loose">
              About Me
            </h3>

            <h1 className="text-3xl font-bold mt-2 leading-loose tracking-tight">
              I find fulfillment in blending visual design with the power of coding <br />
              to create meaningful experiences.
            </h1>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
              tempora et neque a aliquid nisi voluptatem? Mollitia, officiis,
              architecto earum voluptates obcaecati voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Iusto maxime tempora et neque a aliquid nisi voluptatem?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
