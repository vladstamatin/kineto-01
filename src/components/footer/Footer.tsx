"use client";

import { FooterMap } from "./FooterMap";
import { FooterContent } from "./FooterContent";

export function Footer() {
  return (
    <footer id="contacte" className="w-full">
      {/* Desktop: 50/50 split | Mobile: Stack (map on top) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Left: Map */}
        <div className="h-[40vh] lg:h-auto">
          <FooterMap />
        </div>

        {/* Right: Content */}
        <div className="min-h-[300px]">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}
