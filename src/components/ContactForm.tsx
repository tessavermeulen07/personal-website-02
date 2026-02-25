type ContactFormProps = {
  titel?: string;
  subtitel?: string;
};

export function ContactForm({
  titel = "Neem contact op",
  subtitel = "Stel je vraag of laat een bericht achter, dan reageren we zo snel mogelijk.",
}: ContactFormProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 sm:px-6">
        <header className="space-y-2 text-center sm:text-left">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {titel}
          </h1>
          <p className="text-sm text-slate-600 sm:text-base">{subtitel}</p>
        </header>
        <form className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="naam"
                className="block text-sm font-medium text-slate-800"
              >
                Naam
              </label>
              <input
                id="naam"
                name="naam"
                type="text"
                className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="Je naam"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-800"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="jij@example.com"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="bericht"
              className="block text-sm font-medium text-slate-800"
            >
              Bericht
            </label>
            <textarea
              id="bericht"
              name="bericht"
              rows={5}
              className="block w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              placeholder="Vertel ons waarmee we je kunnen helpen..."
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            >
              Verstuur bericht
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

