"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  position: string;
  experience: number;
  image?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-[var(--card-radius)] overflow-hidden aspect-[3/4]",
        "group transition-transform duration-300 hover:-translate-y-1"
      )}
    >
      {/* Background - placeholder gradient or image */}
      {member.image ? (
        <>
          <img
            src={member.image}
            alt={member.name}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity",
              isVisible ? "opacity-100" : "opacity-90"
            )}
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-slate-dark)]" />
      )}

      {/* Name overlay - top left with gradient */}
      <div
        className="absolute top-0 left-0 right-0 p-4"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.6) 0%, transparent 40%)",
        }}
      >
        <span className="text-sm font-bold text-white">{member.name}</span>
      </div>

      {/* Credentials - bottom glassmorphism strip */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/40 backdrop-blur-[10px]">
        <p className="text-xs uppercase tracking-[0.05em] text-white mb-1">
          {member.position}
        </p>
        <span className="text-xs font-semibold text-[var(--color-primary)]">
          {member.experience} Ani Exp.
        </span>
      </div>
    </div>
  );
}

// Placeholder team data with images
const teamMembers: TeamMember[] = [
  { name: "Dr. Ana Popescu", position: "Kinetoterapeut Senior", experience: 12, image: "/images/woman-specialist.jpeg" },
  { name: "Dr. Mihai Rusu", position: "Kinetoterapeut", experience: 8, image: "/images/man-specialist.jpeg" },
  { name: "Elena Moraru", position: "Terapeut Manual", experience: 6, image: "/images/woman-specialist.jpeg" },
  { name: "Ion Ceban", position: "Instructor Yoga", experience: 10, image: "/images/man-specialist.jpeg" },
  { name: "Maria Lungu", position: "Instructor Pilates", experience: 5, image: "/images/woman-specialist.jpeg" },
  { name: "Andrei Cojocaru", position: "Osteopat", experience: 15, image: "/images/man-specialist.jpeg" },
];

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  );
}
