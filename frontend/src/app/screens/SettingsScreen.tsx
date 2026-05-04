import { useState } from "react";
import { Globe, Type, Zap, WifiOff, Info, ChevronRight } from "lucide-react";

export function SettingsScreen() {
  const [lang, setLang] = useState<"MN" | "EN">("MN");
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [elderMode, setElderMode] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const fontSizes = [
    { value: "normal", labelMn: "Хэвийн", labelEn: "Normal" },
    { value: "large", labelMn: "Том", labelEn: "Large" },
    { value: "xlarge", labelMn: "Маш том", labelEn: "Extra Large" },
  ];

  const settingsSections = [
    {
      icon: Globe,
      titleMn: "Хэл сонгох",
      titleEn: "Language",
      descMn: "Програмын хэлийг солих",
      descEn: "Change app language",
      component: (
        <div className="flex gap-2">
          <button
            onClick={() => setLang("MN")}
            className={`flex-1 py-3 rounded-xl transition-all ${
              lang === "MN"
                ? "bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] text-white shadow-lg"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            🇲🇳 Монгол
          </button>
          <button
            onClick={() => setLang("EN")}
            className={`flex-1 py-3 rounded-xl transition-all ${
              lang === "EN"
                ? "bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] text-white shadow-lg"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            🇬🇧 English
          </button>
        </div>
      ),
    },
    {
      icon: Type,
      titleMn: "Үсгийн хэмжээ",
      titleEn: "Font Size",
      descMn: "Унших хялбар болгох",
      descEn: "Make text easier to read",
      component: (
        <div className="space-y-2">
          {fontSizes.map((size) => (
            <button
              key={size.value}
              onClick={() => setFontSize(size.value as any)}
              className={`w-full py-3 px-4 rounded-xl text-left transition-all flex items-center justify-between ${
                fontSize === size.value
                  ? "bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <span>{lang === "MN" ? size.labelMn : size.labelEn}</span>
              {fontSize === size.value && (
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      ),
    },
    {
      icon: Zap,
      titleMn: "Ахмад настнуудад зориулсан горим",
      titleEn: "Elder Mode",
      descMn: "Том товч, тодорхой харагдах",
      descEn: "Larger buttons, clearer display",
      component: (
        <button
          onClick={() => setElderMode(!elderMode)}
          className={`w-full py-4 px-4 rounded-xl flex items-center justify-between transition-all ${
            elderMode
              ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <span style={{ fontWeight: 600 }}>
            {elderMode
              ? (lang === "MN" ? "Идэвхтэй" : "Active")
              : (lang === "MN" ? "Идэвхгүй" : "Inactive")}
          </span>
          <div
            className={`w-14 h-8 rounded-full transition-all ${
              elderMode ? "bg-white/30" : "bg-gray-300"
            } relative`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                elderMode ? "left-7" : "left-1"
              }`}
            ></div>
          </div>
        </button>
      ),
    },
    {
      icon: WifiOff,
      titleMn: "Офлайн горим",
      titleEn: "Offline Mode",
      descMn: "Интернэтгүй ажиллах",
      descEn: "Work without internet",
      component: (
        <button
          onClick={() => setOfflineMode(!offlineMode)}
          className={`w-full py-4 px-4 rounded-xl flex items-center justify-between transition-all ${
            offlineMode
              ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <span style={{ fontWeight: 600 }}>
            {offlineMode
              ? (lang === "MN" ? "Идэвхтэй" : "Active")
              : (lang === "MN" ? "Идэвхгүй" : "Inactive")}
          </span>
          <div
            className={`w-14 h-8 rounded-full transition-all ${
              offlineMode ? "bg-white/30" : "bg-gray-300"
            } relative`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                offlineMode ? "left-7" : "left-1"
              }`}
            ></div>
          </div>
        </button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0C2D6B] to-[#1A4B8F] text-white p-6 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </div>
          <div>
            <h1 className="text-3xl" style={{ fontWeight: 700 }}>
              {lang === "MN" ? "Тохиргоо" : "Settings"}
            </h1>
            <p className="text-white/80 text-sm">
              {lang === "MN" ? "Програмын тохиргоо" : "App preferences"}
            </p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="p-6 space-y-6 -mt-4">
        {settingsSections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-800" style={{ fontWeight: 600 }}>
                      {lang === "MN" ? section.titleMn : section.titleEn}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {lang === "MN" ? section.descMn : section.descEn}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">{section.component}</div>
            </div>
          );
        })}

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <button className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Info className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-gray-800" style={{ fontWeight: 600 }}>
                  {lang === "MN" ? "Програмын тухай" : "About"}
                </h3>
                <p className="text-sm text-gray-500">
                  {lang === "MN" ? "Хувилбар 1.0.0" : "Version 1.0.0"}
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* App Info Card */}
        <div className="bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4A650] to-[#F4C860] rounded-full flex items-center justify-center">
              <span className="text-3xl">🏇</span>
            </div>
            <div>
              <h3 className="text-xl" style={{ fontWeight: 700 }}>NaadamX</h3>
              <p className="text-white/80 text-sm">
                {lang === "MN" ? "Ухаалаг дижитал туслах" : "Smart Digital Assistant"}
              </p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <p className="text-sm text-white/90 leading-relaxed">
              {lang === "MN"
                ? "Монголын Үндэсний их баяр Наадмыг илүү хялбар, аюулгүй, мэдээллээр баяжуулах зорилготой дижитал шийдэл."
                : "A digital solution designed to make Mongolia's National Naadam Festival easier, safer, and more informative."}
            </p>
          </div>
        </div>

        {/* Accessibility Notice */}
        {elderMode && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-green-800 mb-1" style={{ fontWeight: 600 }}>
                  {lang === "MN" ? "Ахмад настны горим идэвхтэй" : "Elder Mode Active"}
                </p>
                <p className="text-sm text-green-700">
                  {lang === "MN"
                    ? "Товч, үсэг томорч, уншихад илүү хялбар болсон."
                    : "Buttons and text are now larger and easier to read."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
