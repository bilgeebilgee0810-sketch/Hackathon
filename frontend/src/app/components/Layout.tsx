import { Outlet, useNavigate, useLocation } from "react-router";
import { Home, Map, AlertTriangle, Settings } from "lucide-react";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: Home, label: "Нүүр", labelEn: "Home" },
    { path: "/map", icon: Map, label: "Газрын зураг", labelEn: "Map" },
    { path: "/sos", icon: AlertTriangle, label: "SOS", labelEn: "SOS" },
    { path: "/settings", icon: Settings, label: "Тохиргоо", labelEn: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-md mx-auto grid grid-cols-4 h-20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  isActive ? "text-[#0C2D6B]" : "text-gray-500"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "fill-current" : ""}`} />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
