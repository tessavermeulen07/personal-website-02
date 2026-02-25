import { HeroSection } from "@/src/components/HeroSection";
import { FeatureCards } from "@/src/components/FeatureCards";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection
        titel="Bouw snel moderne interfaces"
        subtitel="Start je Next.js-app met een heldere hero, responsive Tailwind-styling en een duidelijke call-to-action."
        ctaLabel="Aan de slag"
        ctaHref="#"
      />
      <FeatureCards />
    </main>
  );
}

