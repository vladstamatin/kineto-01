"use client";

import { Container, SectionHeader } from "@/components/ui";
import { TeamGrid } from "./TeamGrid";
import { useLanguage } from "@/context/LanguageContext";

export function TeamSection() {
  const { t } = useLanguage();
  
  return (
    <section id="echipa" className="py-16 bg-[var(--color-section-alt)]">
      <Container>
        <SectionHeader
          marker={t.team.marker}
          title={t.team.title}
          subtitle={t.team.subtitle}
          align="center"
          variant="light"
        />

        <TeamGrid />
      </Container>
    </section>
  );
}
