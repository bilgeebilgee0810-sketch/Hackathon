import { useState } from "react";
import { Phone, MapPin, Heart, Baby, AlertCircle } from "lucide-react";

export function SOSScreen() {
  const [lang] = useState<"MN" | "EN">("MN");
  const [emergencyActive, setEmergencyActive] = useState(false);

  const emergencyOptions = [
    {
      icon: Baby,
      titleMn: "Хүүхэд төөрсөн",
      titleEn: "Lost Child",
      descMn: "Хүүхдээ төөрөөсөн бол энд дарна уу",
      descEn: "Report a lost child",
      color: "from-orange-500 to-orange-600",
      phone: "103",
    },
    {
      icon: Heart,
      titleMn: "Эх барих",
      titleEn: "Medical Help",
      descMn: "Анхны тусламж, эмнэлгийн тусламж",
      descEn: "First aid, medical assistance",
      color: "from-red-500 to-red-600",
      phone: "103",
    },
    {
      icon: MapPin,
      titleMn: "Ойролцоох тусламж",
      titleEn: "Nearby Help",
      descMn: "Хамгийн ойр тусламжийн төв",
      descEn: "Nearest help center",
      color: "from-blue-500 to-blue-600",
      phone: "102",
    },
    {
      icon: Phone,
      titleMn: "Яаралтай холбоо",
      titleEn: "Emergency Contact",
      descMn: "Цагдаа, түймэр унтраагч",
      descEn: "Police, fire department",
      color: "from-purple-500 to-purple-600",
      phone: "102",
    },
  ];

  const helpCenters = [
    { name: lang === "MN" ? "Төв эх барих өрөө" : "Central First Aid", distance: "150m", status: "open" },
    { name: lang === "MN" ? "Зүүн хороолол аюулгүй байдал" : "East Security", distance: "200m", status: "open" },
    { name: lang === "MN" ? "Баруун эх барих өрөө" : "West First Aid", distance: "350m", status: "open" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <AlertCircle className="w-10 h-10" />
          <h1 className="text-3xl" style={{ fontWeight: 700 }}>
            {lang === "MN" ? "🚨 SOS" : "🚨 SOS"}
          </h1>
        </div>
        <p className="text-white/90">
          {lang === "MN" ? "Яаралтай тусламж авах" : "Get emergency assistance"}
        </p>
      </div>

      {/* Emergency Button */}
      <div className="p-6">
        <button
          onClick={() => setEmergencyActive(!emergencyActive)}
          className={`w-full rounded-3xl p-8 shadow-2xl transition-all transform ${
            emergencyActive
              ? "bg-red-600 scale-95"
              : "bg-gradient-to-br from-red-500 to-red-600 hover:scale-105"
          }`}
        >
          <div className="text-white text-center">
            <div className={`w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center ${
              emergencyActive ? "animate-pulse" : ""
            }`}>
              <AlertCircle className="w-20 h-20" />
            </div>
            <h2 className="text-2xl mb-2" style={{ fontWeight: 700 }}>
              {emergencyActive
                ? (lang === "MN" ? "Холбогдож байна..." : "Connecting...")
                : (lang === "MN" ? "ЯАРАЛТАЙ SOS" : "EMERGENCY SOS")
              }
            </h2>
            <p className="text-white/90">
              {emergencyActive
                ? (lang === "MN" ? "Таны байршил илгээгдсэн" : "Your location has been sent")
                : (lang === "MN" ? "Дарж, 3 секунд барина уу" : "Press and hold for 3 seconds")
              }
            </p>
          </div>
        </button>

        {emergencyActive && (
          <div className="mt-4 bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <p className="text-red-800 text-center">
              {lang === "MN"
                ? "Тусламж 2-3 минутын дотор очно"
                : "Help will arrive in 2-3 minutes"}
            </p>
          </div>
        )}
      </div>

      {/* Emergency Options */}
      <div className="px-6 space-y-3 mb-6">
        {emergencyOptions.map((option, idx) => {
          const Icon = option.icon;
          return (
            <button
              key={idx}
              className={`w-full bg-gradient-to-r ${option.color} text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="mb-1" style={{ fontWeight: 600 }}>
                    {lang === "MN" ? option.titleMn : option.titleEn}
                  </h3>
                  <p className="text-sm text-white/90">
                    {lang === "MN" ? option.descMn : option.descEn}
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <Phone className="w-5 h-5 mb-1" />
                  <p className="text-sm" style={{ fontWeight: 600 }}>{option.phone}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Nearby Help Centers */}
      <div className="px-6">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="mb-4 flex items-center gap-2 text-gray-800" style={{ fontWeight: 600 }}>
            <MapPin className="w-5 h-5 text-[#0C2D6B]" />
            {lang === "MN" ? "Ойролцоох тусламжийн төв" : "Nearby Help Centers"}
          </h3>
          <div className="space-y-3">
            {helpCenters.map((center, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }} className="text-gray-800">{center.name}</p>
                    <p className="text-sm text-gray-500">{center.distance}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {lang === "MN" ? "Нээлттэй" : "Open"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Offline mode notice */}
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800 mb-1" style={{ fontWeight: 600 }}>
                {lang === "MN" ? "Офлайн горимд" : "In Offline Mode"}
              </p>
              <p className="text-sm text-blue-700">
                {lang === "MN"
                  ? "Интернэт холболтгүй үед 102, 103 руу залгана уу"
                  : "Call 102 or 103 without internet connection"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
