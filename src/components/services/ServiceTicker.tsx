"use client";

import { Hand, Activity, Droplets, Wind, CircleDot, Heart, Repeat, Layers, Bone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ServiceTicker() {
  const { t } = useLanguage();
  
  const tickerItems = [
    { label: t.ticker.manualTherapy, icon: Hand, color: "#00D4DD" },
    { label: t.ticker.kinetotherapy, icon: Activity, color: "#48D89A" },
    { label: t.ticker.lymphaticDrainage, icon: Droplets, color: "#5BA8FF" },
    { label: t.ticker.bronchialDrainage, icon: Wind, color: "#A78BFA" },
    { label: t.ticker.atmTherapy, icon: CircleDot, color: "#FB923C" },
    { label: t.ticker.visceralTherapy, icon: Heart, color: "#F87171" },
    { label: t.ticker.schrothGymnastics, icon: Repeat, color: "#FACC15" },
    { label: t.ticker.taping, icon: Layers, color: "#2DD4BF" },
    { label: t.ticker.osteopathy, icon: Bone, color: "#C4B5FD" },
  ];

  return (
    <div className="relative overflow-hidden py-5 bg-[#0f1419]">
      {/* Single horizontal scrolling row */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {tickerItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <item.icon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: item.color }} />
            <span className="text-base font-semibold text-white tracking-wide">
              {item.label}
            </span>
            <span className="px-6 text-white/30">•</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {tickerItems.map((item, index) => (
          <div key={`dup-${index}`} className="flex items-center">
            <item.icon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: item.color }} />
            <span className="text-base font-semibold text-white tracking-wide">
              {item.label}
            </span>
            <span className="px-6 text-white/30">•</span>
          </div>
        ))}
        {/* Third set for extra seamless coverage */}
        {tickerItems.map((item, index) => (
          <div key={`dup2-${index}`} className="flex items-center">
            <item.icon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: item.color }} />
            <span className="text-base font-semibold text-white tracking-wide">
              {item.label}
            </span>
            <span className="px-6 text-white/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
