import { useEffect } from "react";
import { useNavigate } from "react-router";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C2D6B] via-[#1A4B8F] to-[#C1272D] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Mongolian Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#D4A650] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-[#D4A650] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rotate-45"></div>
      </div>

      {/* Soyombo-inspired Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-32 h-32 bg-gradient-to-br from-[#D4A650] to-[#F4C860] rounded-full flex items-center justify-center shadow-2xl">
          <div className="text-6xl">🏇</div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#C1272D] rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
      </div>

      {/* Brand Name */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-5xl mb-3 text-white tracking-wide" style={{ fontWeight: 700 }}>
          NaadamX
        </h1>
        <div className="w-24 h-1 bg-[#D4A650] mx-auto mb-4"></div>
        <p className="text-white/90 text-lg px-8 leading-relaxed">
          Үндэсний их баярт зориулсан<br />
          ухаалаг дижитал туслах
        </p>
      </div>

      {/* Smart Entry Badge */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3 flex items-center gap-3">
        <svg className="w-6 h-6 text-[#D4A650]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
        <span className="text-white/90">QR Smart Entry</span>
      </div>

      {/* Loading Animation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#D4A650] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-[#C1272D] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
