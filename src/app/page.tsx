import { Navbar } from "@/components/navigation";
import { HeroSection } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import { TeamSection } from "@/components/team";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Services & Pricing Section */}
        <ServicesSection />

        {/* Team Section */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
