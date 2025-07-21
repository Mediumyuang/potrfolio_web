"use client";
import { useState } from "react";
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const TELEGRAM_BOT_TOKEN = "7692691946:AAGJVueB0vHoJhTXRwNUme7JUxqyPruJRRQ";
const TELEGRAM_CHAT_ID = "8009809902";

const SITE_TYPES = [
  { label: 'Landing Page', icon: '⚡' },
  { label: 'Multi-page Website', icon: '🗂️' },
  { label: 'Redesign', icon: '✏️' },
  { label: 'Other', icon: '❓' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    siteType: "Landing Page",
    description: "",
    budget: "",
    deadline: "",
    whatsapp: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Создаем красивое форматированное сообщение
    const message = `🚀 *Новый заказ с сайта*

👤 *Имя:* ${form.name}
📞 *Контакты:* ${form.contact}
🌐 *Тип сайта:* ${form.siteType}
📝 *Описание:* ${form.description}
💰 *Бюджет:* ${form.budget || 'Не указан'}
⏰ *Сроки:* ${form.deadline || 'Не указаны'}
${form.whatsapp ? `📱 *WhatsApp:* ${form.whatsapp}` : ''}

🕐 *Время заявки:* ${new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })}`;

    // Кодируем сообщение для URL
    const encodedMessage = encodeURIComponent(message);

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `chat_id=${TELEGRAM_CHAT_ID}&text=${encodedMessage}&parse_mode=Markdown`,
      });

      if (response.ok) {
        setForm({ name: "", contact: "", siteType: "Landing Page", description: "", budget: "", deadline: "", whatsapp: "" });
        setStatus("sent");
        setTimeout(() => setStatus("idle"), 2500);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <section
      id="contact-section"
      className="bg-black border-t border-purple-900/40 relative overflow-hidden overflow-x-hidden opacity-0 transition-opacity duration-900 px-2 sm:px-4 md:px-6"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[100px] sm:w-[600px] sm:h-[200px] bg-gradient-to-r from-purple-700/30 via-blue-700/20 to-transparent blur-2xl pointer-events-none" />
      <div className="relative z-10 max-w-xl mx-auto py-12 sm:py-20 px-0 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x px-2">Contact Me</h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-2">Leave a request and I will contact you as soon as possible</p>
        <form className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 mt-6 sm:mt-8 md:mt-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-md px-3 py-2 sm:px-4 sm:py-3 bg-[#18181b] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Your email or Telegram (@username)"
            className="rounded-md px-3 py-2 sm:px-4 sm:py-3 bg-[#18181b] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            value={form.contact}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center w-full">
            <label className="font-medium text-base sm:text-sm text-gray-400 mb-2">What kind of website do you need?</label>
            <div className="grid grid-cols-2 gap-3 sm:gap-3 w-full">
              {SITE_TYPES.map(({ label, icon }) => (
                <div key={label} className="relative group flex-1">
                  <div className={`absolute inset-0 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter pointer-events-none
                    ${form.siteType === label ? 'opacity-60 duration-1000 group-hover:opacity-100 group-hover:duration-200' : 'opacity-20 duration-500'}
                  `} />
                  <label
                    className={`relative cursor-pointer select-none transition-colors duration-300 px-4 sm:px-3 py-2 sm:py-2 flex items-center justify-center rounded-xl h-12 sm:h-9 text-base sm:text-sm font-medium gap-2 z-10
                      ${form.siteType === label
                        ? 'bg-gray-900 text-white font-bold shadow-lg'
                        : 'bg-[#18181b] text-white/80 font-normal hover:bg-gray-800'}
                    `}
                  >
                    <input
                      type="radio"
                      name="siteType"
                      value={label}
                      checked={form.siteType === label}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xl sm:text-xl">{icon}</span>
                    <span className="text-base sm:text-sm">{label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <textarea
            name="description"
            placeholder="Briefly describe the task. For example, a website for a coffee shop with an online menu and order form"
            rows={4}
            className="rounded-md px-3 py-2 sm:px-4 sm:py-3 bg-[#18181b] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm sm:text-base"
            value={form.description}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <select
              name="budget"
              className="rounded-md px-3 py-2 sm:px-4 sm:py-3 bg-[#18181b] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 text-sm sm:text-base"
              value={form.budget}
              onChange={handleChange}
            >
              <option value="">Budget (optional)</option>
              <option value="Up to 200€">Up to 200€</option>
              <option value="200-500€">200-500€</option>
              <option value="500-1000€">500-1000€</option>
              <option value="1000+€">1000+€</option>
            </select>
            <select
              name="deadline"
              className="rounded-md px-3 py-2 sm:px-4 sm:py-3 bg-[#18181b] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 text-sm sm:text-base"
              value={form.deadline}
              onChange={handleChange}
            >
              <option value="">Deadline (optional)</option>
              <option value="Urgent (1-3 days)">Urgent (1-3 days)</option>
              <option value="1 week">1 week</option>
              <option value="2+ weeks">2+ weeks</option>
            </select>
          </div>
          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp number (optional)"
            className="rounded-md px-3 py-2 sm:px-4 sm:py-3 bg-[#18181b] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            value={form.whatsapp || ""}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full button text-lg sm:text-lg mt-2"
            disabled={status === "sending" || status === "sent"}
          >
            {status === "idle" && "Send"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Sent ✅"}
            {status === "error" && "Error ❌"}
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-3 sm:mt-4">
          By clicking the button, you agree to data processing and will receive a quick response in Telegram or WhatsApp.
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto mt-6 sm:mt-8">
          <a
            href="https://t.me/yrolla"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full backdrop-blur-lg border border-blue-400/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-400/50 hover:bg-gradient-to-tr hover:from-blue-400/10 hover:to-black/40 group relative overflow-hidden flex items-center justify-center"
            title="Telegram"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <div className="relative z-10">
              <FaTelegramPlane className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://wa.me/385953705606"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden flex items-center justify-center"
            title="WhatsApp"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <div className="relative z-10">
              <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
            </div>
          </a>
          <a
            href="mailto:lazarevnikita260@gmail.com"
            className="p-3 sm:p-4 rounded-full backdrop-blur-lg border border-red-400/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-400/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-400/50 hover:bg-gradient-to-tr hover:from-red-400/10 hover:to-black/40 group relative overflow-hidden flex items-center justify-center"
            title="Email"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <div className="relative z-10">
              <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
      <style jsx global>{`
        .glass-gradient-radio {
          position: relative;
          z-index: 1;
        }
        .button {
          position: relative;
          padding: 10px 22px;
          border-radius: 6px;
          border: none;
          color: #fff;
          cursor: pointer;
          background-color: #7d2ae8;
          transition: all 0.2s ease;
        }
        .button:active {
          transform: scale(0.96);
        }
        .button:before,
        .button:after {
          position: absolute;
          content: "";
          width: 150%;
          left: 50%;
          height: 100%;
          transform: translateX(-50%);
          z-index: -1000;
          background-repeat: no-repeat;
        }
        .button:hover:before {
          top: -70%;
          background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%);
          background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
            10% 10%, 18% 18%;
          background-position: 50% 120%;
          animation: greentopBubbles 0.6s ease;
        }
        @keyframes greentopBubbles {
          0% {
            background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
              40% 90%, 55% 90%, 70% 90%;
          }
          50% {
            background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
              50% 50%, 65% 20%, 90% 30%;
          }
          100% {
            background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
              50% 40%, 65% 10%, 90% 20%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }
        .button:hover::after {
          bottom: -70%;
          background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%),
            radial-gradient(circle, #7d2ae8 20%, transparent 20%);
          background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
          background-position: 50% 0%;
          animation: greenbottomBubbles 0.6s ease;
        }
        @keyframes greenbottomBubbles {
          0% {
            background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
              70% -10%, 70% 0%;
          }
          50% {
            background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
              105% 0%;
          }
          100% {
            background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
              110% 10%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }
      `}</style>
    </section>
  );
} 