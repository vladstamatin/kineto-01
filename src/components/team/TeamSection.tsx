"use client";

import { Container, SectionHeader } from "@/components/ui";
import { TeamGrid } from "./TeamGrid";

export function TeamSection() {
  return (
    <section id="echipa" className="py-16 bg-[#1e2736]">
      <Container>
        <SectionHeader
          marker="Echipa"
          title="Specialiștii Noștri"
          subtitle="O echipă dedicată de profesioniști cu experiență vastă în recuperare medicală și wellness."
          align="center"
          variant="dark"
        />

        <TeamGrid />
      </Container>
    </section>
  );
}
