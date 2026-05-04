import { useState } from "react";
import { Navigation, MapPin, Utensils, Wrench, Heart, Filter } from "lucide-react";

export function MapScreen() {
  const [lang] = useState<"MN" | "EN">("MN");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filters = [
    { id: "toilet", icon: "🚻", labelMn: "Ариун цэвэр", labelEn: "Toilets", color: "bg-blue-500" },
    { id: "food", icon: "🍽️", labelMn: "Хоолны газар", labelEn: "Food", color: "bg-orange-500" },
    { id: "gate", icon: "🚪", labelMn: "Үүд", labelEn: "Gates", color: "bg-green-500" },
    { id: "medical", icon: "⚕️", labelMn: "Эх барих", labelEn: "First Aid", color: "bg-red-500" },
  ];

  const locations = [
    { type: "toilet", x: 20, y: 30, name: "WC-1" },
    { type: "toilet", x: 70, y: 30, name: "WC-2" },
    { type: "food", x: 30, y: 60, name: lang === "MN" ? "Хоолны газар 1" : "Food Court 1" },
    { type: "food", x: 65, y: 65, name: lang === "MN" ? "Хоолны газар 2" : "Food Court 2" },
    { type: "gate", x: 50, y: 10, name: lang === "MN" ? "Үндсэн үүд" : "Main Gate" },
    { type: "medical", x: 45, y: 75, name: lang === "MN" ? "Эх барих өрөө" : "First Aid" },
  ];

  const nearbyPlaces = [
    { icon: "🚻", name: "WC-1", distance: "50m", direction: lang === "MN" ? "Баруун тийш" : "West" },
    { icon: "🍽️", name: lang === "MN" ? "Хоолны газар 1" : "Food Court 1", distance: "120m", direction: lang === "MN" ? "Урд тийш" : "South" },
    { icon: "⚕️", name: lang === "MN" ? "Эх барих өрөө" : "First Aid", distance: "200m", direction: lang === "MN" ? "Зүүн тийш" : "East" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0C2D6B] to-[#1A4B8F] text-white p-6">
        <h1 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
          {lang === "MN" ? "🗺 Байршил" : "🗺 Location"}
        </h1>
        <p className="text-white/80">
          {lang === "MN" ? "Наадмын талбайн газрын зураг" : "Festival grounds map"}
        </p>
      </div>

      {/* Filters */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(selectedFilter === filter.id ? null : filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap border-2 transition-all ${
                selectedFilter === filter.id
                  ? `${filter.color} text-white border-transparent`
                  : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              <span>{filter.icon}</span>
              <span className="text-sm">{lang === "MN" ? filter.labelMn : filter.labelEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
          <div className="relative aspect-[4/3] bg-gradient-to-br from-green-50 to-blue-50">
            {/* Stadium representation */}
            <div className="absolute inset-8 border-4 border-[#0C2D6B] rounded-3xl">
              <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-[#D4A650] to-[#F4C860] rounded-full flex items-center justify-center">
                    <span className="text-3xl">🏇</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {lang === "MN" ? "Наадмын талбай" : "Festival Arena"}
                  </p>
                </div>
              </div>
            </div>

            {/* Current location */}
            <div className="absolute" style={{ left: '45%', top: '40%' }}>
              <div className="relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                  {lang === "MN" ? "Та энд байна" : "You are here"}
                </div>
              </div>
            </div>

            {/* Location markers */}
            {locations.map((loc, idx) => {
              const filter = filters.find(f => f.id === loc.type);
              if (selectedFilter && selectedFilter !== loc.type) return null;

              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <div className={`w-10 h-10 ${filter?.color} rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform`}>
                    <span className="text-lg">{filter?.icon}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map legend */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2">
              {lang === "MN" ? "Тэмдэглэгээ:" : "Legend:"}
            </p>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <div key={filter.id} className="flex items-center gap-2">
                  <div className={`w-4 h-4 ${filter.color} rounded-full`}></div>
                  <span className="text-xs text-gray-700">{lang === "MN" ? filter.labelMn : filter.labelEn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nearby places */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="mb-4 flex items-center gap-2 text-gray-800" style={{ fontWeight: 600 }}>
            <Navigation className="w-5 h-5 text-[#0C2D6B]" />
            {lang === "MN" ? "Ойролцоох газрууд" : "Nearby"}
          </h3>
          <div className="space-y-3">
            {nearbyPlaces.map((place, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl">{place.icon}</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }} className="text-gray-800">{place.name}</p>
                    <p className="text-sm text-gray-500">{place.direction}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#0C2D6B]" style={{ fontWeight: 600 }}>{place.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
