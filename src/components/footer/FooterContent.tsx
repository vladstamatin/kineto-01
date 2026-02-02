"use client";

import { Instagram, Facebook, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/rebalance.md" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/rebalance.md" },
  { icon: Phone, label: "WhatsApp", href: "https://wa.me/37360123456" },
];

const quickLinks = [
  { label: "Live Yoga", href: "#" },
  { label: "Kinetoterapie", href: "#servicii-preturi" },
];

export function FooterContent() {
  return (
    <div className="bg-[var(--color-navy)] text-white h-full p-6 lg:p-10 relative overflow-hidden">
      {/* Content Grid - 2x2 Quadrants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full relative z-10">
        {/* Q1: Locations (Top-Left) */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary)] mb-4">
            Locații
          </h3>
          <div className="space-y-3">
            <address className="not-italic">
              <p className="font-bold text-white mb-1">Centru</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Str. Ștefan cel Mare 123<br />
                Chișinău, MD-2001
              </p>
            </address>
            <address className="not-italic">
              <p className="font-medium text-white/90 mb-1">Botanica</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Bd. Dacia 45<br />
                Chișinău, MD-2062
              </p>
            </address>
          </div>
        </div>

        {/* Q2: Social Links (Top-Right) */}
        <div className="sm:text-right">
          <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary)] mb-4">
            Conectează-te
          </h3>
          <div className="flex flex-row sm:flex-col sm:items-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-white/70 hover:text-white",
                  "transition-all duration-200 hover:-translate-x-1"
                )}
              >
                <social.icon className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Q3: Quick Links & Copyright (Bottom-Left) */}
        <div className="flex flex-col justify-end">
          <div className="flex gap-4 mb-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/50">
            © 2026 Rebalance. Toate drepturile rezervate.
          </p>
        </div>

        {/* Q4: Brand Seal (Bottom-Right) - empty for logo overlay */}
        <div className="hidden sm:block" />
      </div>

      {/* Large Brand Logo - Bottom Right, Bleed Effect */}
      <div className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] opacity-20 pointer-events-none">
        <svg
          width="300"
          height="240"
          viewBox="0 0 40 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 16C8 11.5817 11.5817 8 16 8C18.5 8 20.5 9 22 10.5C23.5 9 25.5 8 28 8C32.4183 8 36 11.5817 36 16C36 24 28 28 22 32C16 28 8 24 8 16Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>
    </div>
  );
}
