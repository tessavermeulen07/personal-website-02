type FeatureCard = {
  icon: string;
  titel: string;
  tekst: string;
};

const cards: FeatureCard[] = [
  {
    icon: "⚡",
    titel: "Razendsnel starten",
    tekst: "Begin met een kant-en-klare basis voor je Next.js-app, zonder tijd te verliezen aan setup.",
  },
  {
    icon: "🎨",
    titel: "Mooie UI met Tailwind",
    tekst: "Bouw moderne interfaces met herbruikbare componenten en consistente styling.",
  },
  {
    icon: "✅",
    titel: "Type-safe ontwikkelervaring",
    tekst: "Profiteer van TypeScript voor veilige refactors en minder runtime-fouten.",
  },
];

export function FeatureCards() {
  return (
    <section className="bg-white py-12 text-slate-900 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.titel}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-xl text-emerald-600">
                <span aria-hidden="true">{card.icon}</span>
              </div>
              <h2 className="mb-2 text-lg font-semibold tracking-tight">
                {card.titel}
              </h2>
              <p className="text-sm text-slate-600">{card.tekst}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

