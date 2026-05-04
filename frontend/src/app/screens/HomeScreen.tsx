import { useNavigate } from "react-router";
import { Map, Calendar, AlertTriangle, MessageSquare, Book, Globe } from "lucide-react";
import { useState } from "react";

export function HomeScreen() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<"MN" | "EN">("MN");

  const features = [
    {
      icon: Map,
      titleMn: "🗺 Байршил",
      titleEn: "🗺 Location",
      descMn: "Цэргийн хүрээ, ариун цэвэр, хоолны газар",
      descEn: "Stadium, toilets, food courts",
      path: "/map",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calendar,
      titleMn: "📅 Хөтөлбөр",
      titleEn: "📅 Schedule",
      descMn: "Бөх, морины уралдаан, сурын харвааны хуваарь",
      descEn: "Wrestling, horse racing, archery schedule",
      path: "/schedule",
      color: "from-[#C1272D] to-red-600",
    },
    {
      icon: AlertTriangle,
      titleMn: "🚨 SOS",
      titleEn: "🚨 SOS",
      descMn: "Яаралтай тусламж, эмнэлгийн тусламж",
      descEn: "Emergency help, medical assistance",
      path: "/sos",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: MessageSquare,
      titleMn: "🤖 AI Туслах",
      titleEn: "🤖 AI Assistant",
      descMn: "Асуулт асууна уу, мэдээлэл авна уу",
      descEn: "Ask questions, get information",
      path: "/chat",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const quickLinks = [
    {
      icon: Book,
      titleMn: "Соёл урлаг",
      titleEn: "Cultural Guide",
      path: "/culture",
    },
    {
      icon: Globe,
      titleMn: "Хэл солих",
      titleEn: "Language",
      action: () => setLang(lang === "MN" ? "EN" : "MN"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header with Mongolian Pattern */}
      <div className="bg-gradient-to-r from-[#0C2D6B] to-[#1A4B8F] text-white p-6 pb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 border-8 border-white/10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-8 border-[#D4A650]/20 rounded-full -ml-16 -mb-16"></div>

        <div className="relative z-10 flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4A650] to-[#F4C860] rounded-full flex items-center justify-center">
                <span className="text-2xl">🏇</span>
              </div>
              <h1 className="text-3xl" style={{ fontWeight: 700 }}>NaadamX</h1>
            </div>
            <p className="text-white/80 text-sm">
              {lang === "MN" ? "Тавтай морилно уу!" : "Welcome!"}
            </p>
          </div>
          <button
            onClick={() => setLang(lang === "MN" ? "EN" : "MN")}
            className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30"
          >
            {lang} {lang === "MN" ? "⇄ EN" : "⇄ MN"}
          </button>
        </div>

        {/* Date Banner */}
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/70 mb-1">
                {lang === "MN" ? "Өнөөдөр" : "Today"}
              </p>
              <p className="text-lg">{lang === "MN" ? "5-р сарын 1" : "May 1, 2026"}</p>
            </div>
            <div className="bg-[#D4A650] px-4 py-2 rounded-lg">
              <p className="text-xs">
                {lang === "MN" ? "Хоёрдугаар өдөр" : "Day 2"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="p-6 -mt-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <button
                key={idx}
                onClick={() => feature.path && navigate(feature.path)}
                className={`bg-gradient-to-br ${feature.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95`}
              >
                <Icon className="w-8 h-8 mb-3" />
                <h3 className="mb-2 text-left" style={{ fontWeight: 600 }}>
                  {lang === "MN" ? feature.titleMn : feature.titleEn}
                </h3>
                <p className="text-xs text-white/90 text-left leading-relaxed">
                  {lang === "MN" ? feature.descMn : feature.descEn}
                </p>
              </button>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
          <h3 className="mb-3 text-gray-800" style={{ fontWeight: 600 }}>
            {lang === "MN" ? "Түргэн холбоос" : "Quick Links"}
          </h3>
          <div className="space-y-2">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <button
                  key={idx}
                  onClick={() => link.path ? navigate(link.path) : link.action?.()}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">
                    {lang === "MN" ? link.titleMn : link.titleEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Event Banner */}
        <div className="bg-gradient-to-r from-[#C1272D] to-red-600 text-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="flex-1">
              <p className="text-xs text-white/80 mb-1">
                {lang === "MN" ? "Одоо болж буй" : "Live Now"}
              </p>
              <p style={{ fontWeight: 600 }}>
                {lang === "MN" ? "Бөхийн 256 тойрог" : "Wrestling Round 256"}
              </p>
            </div>
            <button
              onClick={() => navigate("/schedule")}
              className="bg-white text-[#C1272D] px-4 py-2 rounded-lg text-sm"
              style={{ fontWeight: 600 }}
            >
              {lang === "MN" ? "Үзэх" : "View"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
