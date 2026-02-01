"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface VideoRowProps {
  videoSrc?: string;
  text: string;
  textPosition?: "center" | "bottom";
  height?: number;
  mobileHeight?: number;
  className?: string;
}

function VideoRow({ videoSrc, text, textPosition = "center", height = 200, mobileHeight, className }: VideoRowProps) {
  const actualMobileHeight = mobileHeight ?? height;
  const desktopHeight = Math.round(height * 0.7 * 0.8 * 1.3); // 30% increase for < 2K screens
  const largeDesktopHeight = Math.round(height * 0.8 * 1.3); // 30% increase for >= 2K screens
  
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      style={{ 
        // Use CSS custom properties for responsive height
      }}
    >
      <style jsx>{`
        div {
          height: ${actualMobileHeight}px;
        }
        @media (min-width: 768px) {
          div {
            height: ${desktopHeight}px;
          }
        }
        @media (min-width: 2560px) {
          div {
            height: ${largeDesktopHeight}px;
          }
        }
      `}</style>
      {/* Video background with placeholder gradient */}
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)]" />
      )}

      {/* Darker Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content */}
      <div className={cn(
        "relative z-10 flex items-center justify-center h-full px-4",
        textPosition === "bottom" && "items-end pb-8"
      )}>
        <span className="text-white font-medium text-lg md:text-xl tracking-wide">
          {text}
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section id="sus" className="relative z-0">
      {/* Row 1: Cinematic closeup - text at bottom */}
      <VideoRow
        text={t.hero.hello}
        textPosition="bottom"
        height={360}
        mobileHeight={200}
        videoSrc="/videos/Cinematic_extreme_closeup_1080p_202602011942.mp4"
      />

      {/* White separator */}
      <div className="h-[2px] bg-white" />

      {/* Row 2: Kinetotherapy massage */}
      <VideoRow
        text={t.hero.kinetotherapy}
        height={360}
        mobileHeight={200}
        videoSrc="/videos/Kinetotherapy_manual_massage_1080p_2026020119.mp4"
      />

      {/* White separator */}
      <div className="h-[2px] bg-white" />

      {/* Row 3: Yoga/Pilates */}
      <VideoRow
        text={t.hero.yogaPilates}
        height={360}
        mobileHeight={200}
        videoSrc="/videos/Yoga_pillates_video_1080p_202602011943.mp4"
      />
    </section>
  );
}
