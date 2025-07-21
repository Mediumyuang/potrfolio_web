export default function Services() {
  return (
    <section className="bg-[#0a0a0a] bg-gradient-to-b from-[#181824]/40 to-transparent w-full px-2 sm:px-4 md:px-6" data-aos="zoom-in">
      <div className="max-w-7xl mx-auto py-12 sm:py-20 px-0">
        <div className="text-center mb-3 sm:mb-4 text-purple-400 font-semibold tracking-wide text-sm sm:text-base">How I can help</div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x px-2">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12 justify-items-center">
          {/* Карточка 1 */}
          <div className="group relative rounded-xl bg-[#18181b]/90 p-4 sm:p-6 transition-all duration-300 border border-purple-900/20 shadow-sm shadow-purple-800/10 hover:scale-105 hover:shadow-xl hover:shadow-[0_0_32px_0_rgba(139,92,246,0.4),0_0_32px_8px_rgba(139,92,246,0.45)] hover:ring-1 hover:ring-violet-600 cursor-pointer overflow-hidden w-full">
            <h3 className="text-xl text-gray-200 font-bold">Landing Page Creation</h3>
            <p className="text-sm text-gray-200 mt-2">I quickly create high-converting landing pages for your business.</p>
          </div>
          {/* Карточка 2 */}
          <div className="group relative rounded-xl bg-[#18181b]/90 p-4 sm:p-6 transition-all duration-300 border border-purple-900/20 shadow-sm shadow-purple-800/10 hover:scale-105 hover:shadow-xl hover:shadow-[0_0_32px_0_rgba(59,130,246,0.4),0_0_32px_8px_rgba(59,130,246,0.45)] hover:ring-1 hover:ring-blue-600 cursor-pointer overflow-hidden w-full">
            <h3 className="text-xl text-gray-200 font-bold">Multi-page Websites</h3>
            <p className="text-sm text-gray-200 mt-2">Full-featured websites with a blog, portfolio, or catalog.</p>
          </div>
          {/* Карточка 3 */}
          <div className="group relative rounded-xl bg-[#18181b]/90 p-4 sm:p-6 transition-all duration-300 border border-purple-900/20 shadow-sm shadow-purple-800/10 hover:scale-105 hover:shadow-xl hover:shadow-[0_0_32px_0_rgba(236,72,153,0.4),0_0_32px_8px_rgba(236,72,153,0.45)] hover:ring-1 hover:ring-pink-500 cursor-pointer overflow-hidden w-full">
            <h3 className="text-xl text-gray-200 font-bold">Website Redesign</h3>
            <p className="text-sm text-gray-200 mt-2">I will refresh your website to look modern and convert better.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 