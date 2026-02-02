"use client";

import { cn } from "@/lib/utils";

interface PriceRowProps {
  name: string;
  price: string;
  isPackage?: boolean;
}

function PriceRow({ name, price, isPackage }: PriceRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between py-2 px-3 rounded-lg",
        "bg-white hover:bg-[var(--color-grey-100)] transition-colors shadow-sm",
        isPackage && "border-l-2 border-[var(--color-primary)]"
      )}
    >
      <span className="text-sm font-medium text-[var(--color-slate-dark)]">
        {name}
      </span>
      <span className="text-sm font-bold text-[var(--color-primary-hover)] ml-4">
        {price}
      </span>
    </div>
  );
}

interface PriceCardProps {
  title: string;
  items: { name: string; price: string; isPackage?: boolean }[];
}

function PriceCard({ title, items }: PriceCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-[var(--color-grey-200)] shadow-md">
      <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary-hover)] mb-4">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <PriceRow key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const priceData = {
  manualTherapy: {
    title: "Terapie Manuală",
    items: [
      { name: "Ședință Adult (60 min)", price: "450 MDL" },
      { name: "Ședință Adolescent (45 min)", price: "350 MDL" },
      { name: "Ședință Baby (30 min)", price: "300 MDL" },
    ],
  },
  specialized: {
    title: "Terapii Specializate",
    items: [
      { name: "Terapie Viscerală", price: "500 MDL" },
      { name: "Terapie ATM", price: "450 MDL" },
      { name: "Drenaj Limfatic", price: "400 MDL" },
      { name: "Drenaj Bronșic", price: "400 MDL" },
      { name: "Gimnastică Schroth", price: "450 MDL" },
    ],
  },
  subscriptions: {
    title: "Abonamente",
    items: [
      { name: "Pachet 5 ședințe", price: "2000 MDL", isPackage: true },
      { name: "Pachet 10 ședințe", price: "3800 MDL", isPackage: true },
      { name: "Abonament Yoga (lunar)", price: "800 MDL", isPackage: true },
      { name: "Abonament Pilates (lunar)", price: "900 MDL", isPackage: true },
    ],
  },
};

export function PriceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      <PriceCard {...priceData.manualTherapy} />
      <PriceCard {...priceData.specialized} />
      <PriceCard {...priceData.subscriptions} />
    </div>
  );
}
