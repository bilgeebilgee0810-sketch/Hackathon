import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  time: string;
}

export function AIChatScreen() {
  const [lang] = useState<"MN" | "EN">("MN");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: lang === "MN"
        ? "Сайн байна уу! Би NaadamX-ийн AI туслах. Наадмын талаар асуух зүйл байвал асуугаарай! 🏇"
        : "Hello! I'm NaadamX AI Assistant. Ask me anything about Naadam Festival! 🏇",
      sender: "ai",
      time: "10:00",
    },
  ]);

  const suggestedPrompts = [
    {
      textMn: "Ариун цэврийн өрөө хаана байна?",
      textEn: "Where are the toilets?",
      icon: "🚻",
    },
    {
      textMn: "Бөх хэдэн цагт эхэлнэ?",
      textEn: "What time does wrestling start?",
      icon: "🤼",
    },
    {
      textMn: "What is Naadam?",
      textEn: "What is Naadam?",
      icon: "🎊",
    },
    {
      textMn: "Морины уралдаан хаана үзэх вэ?",
      textEn: "Where to watch horse racing?",
      icon: "🏇",
    },
  ];

  const aiResponses: Record<string, string> = {
    toilet: lang === "MN"
      ? "Ариун цэврийн өрөө 2 байршилд байна: WC-1 (баруун талд, 50м зайд) болон WC-2 (зүүн талд, 80м зайд). Газрын зурагнаас дэлгэрэнгүй үзнэ үү! 🗺️"
      : "There are 2 toilet locations: WC-1 (west side, 50m away) and WC-2 (east side, 80m away). Check the map for details! 🗺️",
    wrestling: lang === "MN"
      ? "Бөхийн 256 тойрог яг одоо болж байна (10:00-12:00). Дараагийн 128 тойрог 18:30-д эхэлнэ. Төв талбайд болно! 🤼"
      : "Wrestling round 256 is happening now (10:00-12:00). Next round 128 starts at 18:30. Located at Central Arena! 🤼",
    naadam: lang === "MN"
      ? "Наадам бол Монголын үндэсний их баяр! Бөх, морины уралдаан, сурын харваа гурвыг нэгтгэсэн. Жил бүрийн 7-р сарын 11-13-нд тэмдэглэдэг. 🇲🇳"
      : "Naadam is Mongolia's National Festival! It features three traditional sports: wrestling, horse racing, and archery. Celebrated July 11-13 every year. 🇲🇳",
    horse: lang === "MN"
      ? "Морины уралдаан 14:00-д эхэлнэ. Морины замд болно - талбайн зүүн талд байрлана. 6 насны морины ангилалаас эхэлнэ! 🏇"
      : "Horse racing starts at 14:00. It takes place at the Race Track - located on the east side. Starting with 6-year-old category! 🏇",
  };

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: "user",
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      let aiResponse = lang === "MN"
        ? "Би таны асуулт ойлгосон. Та асуултаа илүү тодорхой асуувал би илүү сайн хариулж чадна! 😊"
        : "I understand your question. Please ask more specifically so I can help better! 😊";

      const lowerText = messageText.toLowerCase();
      if (lowerText.includes("toilet") || lowerText.includes("ариун") || lowerText.includes("цэвэр")) {
        aiResponse = aiResponses.toilet;
      } else if (lowerText.includes("wrestling") || lowerText.includes("бөх")) {
        aiResponse = aiResponses.wrestling;
      } else if (lowerText.includes("naadam") || lowerText.includes("наадам")) {
        aiResponse = aiResponses.naadam;
      } else if (lowerText.includes("horse") || lowerText.includes("морь")) {
        aiResponse = aiResponses.horse;
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai",
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 shadow-lg flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl" style={{ fontWeight: 700 }}>
              {lang === "MN" ? "🤖 AI Туслах" : "🤖 AI Assistant"}
            </h1>
            <p className="text-white/80 text-sm">
              {lang === "MN" ? "Онлайн • Бэлэн байна" : "Online • Ready to help"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.sender === "user"
                  ? "bg-gradient-to-br from-[#0C2D6B] to-[#1A4B8F] text-white"
                  : "bg-white shadow-md text-gray-800"
              }`}
            >
              {message.sender === "ai" && (
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-xs text-purple-600" style={{ fontWeight: 600 }}>
                    NaadamX AI
                  </span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p
                className={`text-xs mt-2 ${
                  message.sender === "user" ? "text-white/70" : "text-gray-500"
                }`}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Prompts */}
      <div className="px-4 pb-4 flex-shrink-0">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(lang === "MN" ? prompt.textMn : prompt.textEn)}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <span>{prompt.icon}</span>
              <span>{lang === "MN" ? prompt.textMn : prompt.textEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4 flex-shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={lang === "MN" ? "Асуултаа бичнэ үү..." : "Type your question..."}
            className="flex-1 bg-gray-100 rounded-full px-5 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={() => handleSend()}
            className="bg-gradient-to-br from-purple-600 to-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
