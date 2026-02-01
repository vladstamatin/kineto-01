"use client";

import { Container, SectionHeader } from "@/components/ui";
import { ServiceTicker } from "./ServiceTicker";
import { PriceList } from "./PriceList";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="servicii-preturi" className="bg-[#0f1419]">
      {/* Service Ticker */}
      <ServiceTicker />

      {/* Pricing Grid */}
      <div className="py-10 md:py-14">
        <Container>
          <SectionHeader
            marker={t.services.marker}
            title={t.services.title}
            subtitle={t.services.subtitle}
            variant="dark"
          />

          {/* Mobile Image - shown at top on small screens */}
          <div className="lg:hidden mb-6">
            <div className="rounded-[var(--card-radius)] overflow-hidden h-[180px]">
              <img
                src="/images/pretty-girl-wearing-leggings-short-top-standing-side-plank-one-hand-gym-training-body-core-balance-strengthening-abs-muscles-attractive-female-doing-planking-bodyweight-exercise_343059-3112.jpg"
                alt="Terapie manuală"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Price List - now handles its own grid layout */}
          <PriceList />

          {/* Desktop Image - below pricing on large screens */}
          <div className="hidden lg:block mt-10">
            <div className="rounded-[var(--card-radius-lg)] overflow-hidden h-[380px]">
              <img
                src="/images/pretty-girl-wearing-leggings-short-top-standing-side-plank-one-hand-gym-training-body-core-balance-strengthening-abs-muscles-attractive-female-doing-planking-bodyweight-exercise_343059-3112.jpg"
                alt="Terapie manuală"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
