import { useState } from "react";
import { Clock, Bookmark, Star } from "lucide-react";

export function ScheduleScreen() {
  const [lang] = useState<"MN" | "EN">("MN");
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const events = [
    {
      id: 1,
      type: "wrestling",
      icon: "🤼",
      titleMn: "Бөхийн 256 тойрог",
      titleEn: "Wrestling Round 256",
      time: "10:00 - 12:00",
      location: lang === "MN" ? "Төв талбай" : "Central Arena",
      status: "live",
      color: "from-[#C1272D] to-red-600",
    },
    {
      id: 2,
      type: "horse",
      icon: "🏇",
      titleMn: "Морины уралдаан - 6 нас",
      titleEn: "Horse Racing - 6 Years",
      time: "14:00 - 16:00",
      location: lang === "MN" ? "Морины зам" : "Race Track",
      status: "upcoming",
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 3,
      type: "archery",
      icon: "🏹",
      titleMn: "Сурын харвааны эрэгтэй",
      titleEn: "Men's Archery",
      time: "16:30 - 18:00",
      location: lang === "MN" ? "Харваа талбай" : "Archery Field",
      status: "upcoming",
      color: "from-green-600 to-green-700",
    },
    {
      id: 4,
      type: "wrestling",
      icon: "🤼",
      titleMn: "Бөхийн 128 тойрог",
      titleEn: "Wrestling Round 128",
      time: "18:30 - 20:00",
      location: lang === "MN" ? "Төв талбай" : "Central Arena",
      status: "upcoming",
      color: "from-[#C1272D] to-red-600",
    },
    {
      id: 5,
      type: "opening",
      icon: "🎊",
      titleMn: "Хаалтын ёслол",
      titleEn: "Closing Ceremony",
      time: "20:30 - 22:00",
      location: lang === "MN" ? "Төв талбай" : "Central Arena",
      status: "upcoming",
      color: "from-purple-600 to-purple-700",
    },
  ];

  const toggleBookmark = (id: number) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0C2D6B] to-[#1A4B8F] text-white p-6 pb-8">
        <h1 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
          {lang === "MN" ? "📅 Хөтөлбөр" : "📅 Schedule"}
        </h1>
        <p className="text-white/80 mb-4">
          {lang === "MN" ? "5-р сарын 1, 2026" : "May 1, 2026"}
        </p>

        {/* Live Event Badge */}
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-white/80">
              {lang === "MN" ? "ОДОО БОЛЖ БУЙГ ҮЗЭЖ БАЙНА" : "LIVE NOW"}
            </span>
          </div>
          <p style={{ fontWeight: 600 }}>
            {lang === "MN" ? "🤼 Бөхийн 256 тойрог" : "🤼 Wrestling Round 256"}
          </p>
          <p className="text-sm text-white/80 mt-1">10:00 - 12:00</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto">
          {[
            { label: lang === "MN" ? "Бүгд" : "All", icon: "📋" },
            { label: lang === "MN" ? "Бөх" : "Wrestling", icon: "🤼" },
            { label: lang === "MN" ? "Морин" : "Horse", icon: "🏇" },
            { label: lang === "MN" ? "Харвааны" : "Archery", icon: "🏹" },
          ].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                idx === 0
                  ? "bg-[#0C2D6B] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events timeline */}
      <div className="p-4 space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={`bg-white rounded-2xl shadow-md overflow-hidden ${
              event.status === "live" ? "ring-2 ring-red-500" : ""
            }`}
          >
            <div className={`bg-gradient-to-r ${event.color} p-4 text-white`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    {event.icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600 }} className="text-lg">
                      {lang === "MN" ? event.titleMn : event.titleEn}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm text-white/90">{event.time}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(event.id)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  {bookmarked.includes(event.id) ? (
                    <Bookmark className="w-6 h-6 fill-current" />
                  ) : (
                    <Bookmark className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{event.location}</span>
                </div>
                {event.status === "live" && (
                  <span className="flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                    {lang === "MN" ? "Шууд" : "Live"}
                  </span>
                )}
                {event.status === "upcoming" && (
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {lang === "MN" ? "Удахгүй" : "Upcoming"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
