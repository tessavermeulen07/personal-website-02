export function Footer() {
  const jaar = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-800">
            &copy; {jaar} Jouw Projectnaam
          </span>
          <span className="text-xs text-slate-500">
            Gebouwd met Next.js, React en Tailwind CSS.
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
          <a
            href="#"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Over
          </a>
          <a
            href="/contact"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Privacy
          </a>
          <div className="ml-2 flex items-center gap-3 sm:ml-4">
            <a
              href="#"
              aria-label="Volg op Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm transition hover:scale-110 hover:bg-slate-700"
            >
              <span aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M13 21v-7h2.5l.5-3h-3V9.5C13 8.6 13.3 8 14.8 8H16V5.2C15.3 5.1 14.6 5 13.9 5 11.4 5 9.7 6.4 9.7 9.2V11H7v3h2.7v7H13Z"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#"
              aria-label="Volg op Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm transition hover:scale-110 hover:bg-slate-700"
            >
              <span aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M9 3h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6Zm0 2A4 4 0 0 0 5 9v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H9Zm3 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm4.75-3.75a.75.75 0 1 1-.75 1.3.75.75 0 0 1 .75-1.3Z"
                  />
                </svg>
              </span>
            </a>
            <a
              href="mailto:info@example.com"
              aria-label="Stuur een e-mail"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm transition hover:scale-110 hover:bg-slate-700"
            >
              <span aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M4 6h16a2 2 0 0 1 2 2v.3l-10 5.6-10-5.6V8a2 2 0 0 1 2-2Zm-2 5.25V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.75l-9.35 5.24a2 2 0 0 1-1.9 0Z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

