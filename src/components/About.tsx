import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-black w-full overflow-hidden overflow-x-hidden px-2 sm:px-4 md:px-6" data-aos="fade-left">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#1e0036]/60 via-transparent to-[#000c3f]/60 opacity-80 z-0" />
      {/* Neon blurred circle */}
      <div className="absolute -top-20 left-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-radial from-purple-900/30 via-fuchsia-800/20 to-transparent opacity-30 blur-2xl pointer-events-none" />
      <div className="max-w-4xl mx-auto py-12 sm:py-20 px-0 flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image src="/Avatar.png" alt="Avatar" width={100} height={100} className="rounded-2xl shadow-lg w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold text-center md:text-left px-2">Who am I and how can I help?</h2>
          <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4 text-center md:text-left">
            I create websites that help businesses earn more. I work with bloggers, companies, and local businesses to make their online presence strong and noticeable.
          </p>
        </div>
      </div>
    </section>
  );
} 