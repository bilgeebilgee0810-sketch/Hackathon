import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function CulturalGuideScreen() {
  const [lang] = useState<"MN" | "EN">("MN");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const culturalItems = [
    {
      id: 1,
      icon: "🎊",
      titleMn: "Наадам гэж юу вэ?",
      titleEn: "What is Naadam?",
      descMn: "Наадам бол Монголын үндэсний их баяр юм. Жил бүрийн 7-р сарын 11-13-нд тэмдэглэдэг.",
      descEn: "Naadam is Mongolia's National Festival, celebrated annually from July 11-13.",
      detailMn: "Наадам нь Монгол Улсын үндэсний их баяр бөгөөд 'Эрийн гурван наадам' буюу бөх, морины уралдаан, сурын харвааг багтаасан соёлын өв юм. Энэхүү баяр нь Монголын соёл, уламжлал, баатарлаг түүхийг харуулдаг.",
      detailEn: "Naadam is Mongolia's most important celebration featuring the 'Three Games of Men': wrestling, horse racing, and archery. The festival showcases Mongolian culture, traditions, and heroic history.",
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 2,
      icon: "🤼",
      titleMn: "Бөх",
      titleEn: "Wrestling",
      descMn: "Монголын үндэсний бөх бол ямар ч жингийн ангилалгүй, урт хугацааны уламжлалтай спорт.",
      descEn: "Mongolian wrestling has no weight categories and a long traditional history.",
      detailMn: "Бөх бол Монголын хамгийн эртний спортын нэг. Бөхчүүд 'зодог', 'шуудаг' гэсэн уламжлалт хувцас өмсдөг. Бүжиглэн гарч ирэх нь бүргэдийн дуурайлал юм. 512 бөхчөөс тэмцээн эхэлж, хагас болгон шалгаруулна.",
      detailEn: "Wrestling is one of Mongolia's oldest sports. Wrestlers wear traditional 'zodog' and 'shuudag' outfits. Their dance-like entrance imitates the eagle. The competition starts with 512 wrestlers, eliminating half each round.",
      color: "from-[#C1272D] to-red-600",
    },
    {
      id: 3,
      icon: "🏇",
      titleMn: "Морины уралдаан",
      titleEn: "Horse Racing",
      descMn: "Монголын морины уралдаан нь насны ангиллаар, 15-30 км зайд явагддаг.",
      descEn: "Mongolian horse racing is categorized by age and runs 15-30 km.",
      detailMn: "Морины уралдаан нь Монголын соёлын чухал хэсэг. 2-7 насны морьд өөр өөр зайд уралддаг. Хүүхэд морьдчид ихэвчлэн 5-13 настай. Уралдааны дуу 'Гингоо' нь өвөрмөц уламжлал юм.",
      detailEn: "Horse racing is a crucial part of Mongolian culture. Horses aged 2-7 years race different distances. Child jockeys are typically 5-13 years old. The race song 'Gingoo' is a unique tradition.",
      color: "from-green-600 to-green-700",
    },
    {
      id: 4,
      icon: "🏹",
      titleMn: "Сурын харвааны",
      titleEn: "Archery",
      descMn: "Сурын харваа нь эртний цэргийн ур чадвараас үүдэлтэй уламжлалт спорт.",
      descEn: "Archery is a traditional sport derived from ancient military skills.",
      detailMn: "Монголын сурын харваа нь уламжлалт харваа ашиглан, 75м зайд байрласан 'сур' (зорилтот)-ыг өнгөрүүлэх замаар явагддаг. Эрэгтэй, эмэгтэй бүлэгт тусгаарлагдана. Уламжлалт хувцас өмсөх нь чухал.",
      detailEn: "Mongolian archery uses traditional bows to knock down leather targets called 'sur' from 75m away. Men and women compete separately. Wearing traditional attire is important.",
      color: "from-purple-600 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0C2D6B] to-[#1A4B8F] text-white p-6 pb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 border-8 border-white/10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-8 border-[#D4A650]/20 rounded-full -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-[#D4A650] to-[#F4C860] rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">📖</span>
          </div>
          <h1 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
            {lang === "MN" ? "Соёл урлагийн гарын авлага" : "Cultural Guide"}
          </h1>
          <p className="text-white/80">
            {lang === "MN"
              ? "Монголын Наадмын талаар суралцаарай"
              : "Learn about Mongolia's Naadam Festival"}
          </p>
        </div>
      </div>

      {/* Cultural Items */}
      <div className="p-6 space-y-4 -mt-4">
        {culturalItems.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`w-full bg-gradient-to-r ${item.color} text-white p-5 text-left`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>
                        {lang === "MN" ? item.titleMn : item.titleEn}
                      </h3>
                      <p className="text-sm text-white/90">
                        {lang === "MN" ? item.descMn : item.descEn}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 transition-transform flex-shrink-0 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {lang === "MN" ? item.detailMn : item.detailEn}
                  </p>
                  <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-lg">💡</span>
                      <span>
                        {lang === "MN"
                          ? "AI туслахаас илүү дэлгэрэнгүй мэдээлэл авна уу"
                          : "Ask AI Assistant for more detailed information"}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Facts */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-br from-[#D4A650] to-[#F4C860] rounded-2xl p-6 text-white shadow-xl">
          <h3 className="text-xl mb-4 flex items-center gap-2" style={{ fontWeight: 700 }}>
            <span>🇲🇳</span>
            {lang === "MN" ? "Хурдан баримтууд" : "Quick Facts"}
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span>📅</span>
              </div>
              <div>
                <p className="text-sm text-white/90">
                  {lang === "MN"
                    ? "Жил бүрийн 7-р сарын 11-13"
                    : "Annually July 11-13"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span>📍</span>
              </div>
              <div>
                <p className="text-sm text-white/90">
                  {lang === "MN"
                    ? "Улаанбаатар хот, Монгол Улс"
                    : "Ulaanbaatar, Mongolia"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span>🎭</span>
              </div>
              <div>
                <p className="text-sm text-white/90">
                  {lang === "MN"
                    ? "UNESCO-гийн биет бус соёлын өвд бүртгэгдсэн"
                    : "UNESCO Intangible Cultural Heritage"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
