"use client";

import { Hand, Activity, Droplets, Wind, CircleDot, Heart, Repeat, Layers, Bone } from "lucide-react";

const tickerItems = [
  { label: "terapie manuală", icon: Hand, color: "#00D4DD" },
  { label: "kinetoterapie", icon: Activity, color: "#48D89A" },
  { label: "drenaj limfatic", icon: Droplets, color: "#5BA8FF" },
  { label: "drenaj bronșic", icon: Wind, color: "#A78BFA" },
  { label: "terapie ATM", icon: CircleDot, color: "#FB923C" },
  { label: "terapie viscerală", icon: Heart, color: "#F87171" },
  { label: "gimnastică schroth", icon: Repeat, color: "#FACC15" },
  { label: "taping", icon: Layers, color: "#2DD4BF" },
  { label: "osteopatie", icon: Bone, color: "#C4B5FD" },
];

export function ServiceTicker() {
  return (
    <div className="relative overflow-hidden py-5 bg-gradient-to-r from-[#1a2230] via-[#1e2a3a] to-[#1a2230]">
      {/* Single horizontal scrolling row */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {tickerItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <item.icon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: item.color }} />
            <span className="text-base font-semibold text-white tracking-wide">
              {item.label}
            </span>
            <span className="ml-8 text-white/30">•</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {tickerItems.map((item, index) => (
          <div key={`dup-${index}`} className="flex items-center mx-8">
            <item.icon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: item.color }} />
            <span className="text-base font-semibold text-white tracking-wide">
              {item.label}
            </span>
            <span className="ml-8 text-white/30">•</span>
          </div>
        ))}
        {/* Third set for extra seamless coverage */}
        {tickerItems.map((item, index) => (
          <div key={`dup2-${index}`} className="flex items-center mx-8">
            <item.icon className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: item.color }} />
            <span className="text-base font-semibold text-white tracking-wide">
              {item.label}
            </span>
            <span className="ml-8 text-white/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
