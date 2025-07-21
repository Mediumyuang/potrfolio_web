"use client";
import Image from "next/image";

export default function Header() {
  const handleScroll = () => {
    const contact = document.getElementById("contact-section");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur bg-black/70 border-b border-white/10 transition-all"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <Image src="/logo2.png" alt="Logo" width={36} height={36} priority className="sm:w-[40px] sm:h-[40px]" />
        </div>
        <button
          onClick={handleScroll}
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition-all duration-200 shadow-md hover:brightness-110 mt-2 sm:mt-0"
        >
          Order a website
        </button>
      </div>
    </header>
  );
} 