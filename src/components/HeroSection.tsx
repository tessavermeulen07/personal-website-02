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
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-500 via-emerald-500 to-emerald-700 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:py-24 md:gap-8 md:px-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {titel}
        </h1>
        <p className="max-w-2xl text-balance text-base text-sky-100/90 sm:text-lg md:text-xl">
          {subtitel}
        </p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row sm:justify-center">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-sky-700 shadow-md transition hover:bg-sky-50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-700 focus-visible:ring-white"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

