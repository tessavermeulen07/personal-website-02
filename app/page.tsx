import { HeroSection } from "@/src/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection
        titel="Bouw snel moderne interfaces"
        subtitel="Start je Next.js-app met een heldere hero, responsive Tailwind-styling en een duidelijke call-to-action."
        ctaLabel="Aan de slag"
        ctaHref="#"
      />
    </main>
  );
}

