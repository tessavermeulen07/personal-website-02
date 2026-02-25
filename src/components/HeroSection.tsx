/**
 * HeroSection component met verbeterde gradient,
 * betere spacing op mobiel en een animatie voor de button bij hover.
 * 
 * Props:
 * - titel: string
 * - subtitel: string
 * - ctaLabel: string (tekst op de button)
 * - ctaHref?: string (optionele link, standaard "#")
 */
type HeroSectionProps = {
  titel: string;
  subtitel: string;
  ctaLabel: string;
  ctaHref?: string;
};

export function HeroSection({
  titel,
  subtitel,
  ctaLabel,
  ctaHref = "#",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-emerald-400 via-60% to-emerald-800 text-white">
      {/* Subtiele radiale highlight bovenin */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.20)_0%,transparent_70%)]" />
      <div className="relative mx-auto flex min-h-[65vh] max-w-5xl flex-col items-center justify-center gap-6 px-2 py-10 text-center sm:gap-8 sm:px-4 sm:py-20 md:px-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {titel}
        </h1>
        <p className="max-w-2xl text-balance text-base text-sky-100/90 sm:text-lg md:text-xl">
          {subtitel}
        </p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row sm:justify-center">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-sky-700 shadow-md transition-all duration-200 ease-out hover:scale-105 hover:bg-gradient-to-r hover:from-sky-100 hover:to-emerald-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-700"
            style={{ willChange: 'transform, box-shadow' }}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
