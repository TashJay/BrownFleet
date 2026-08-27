const partners = [
  "SIGINON LOGISTICS",
  "MULTIPLE HAULIERS",
  "TWIGA FOODS",
  "BOLLORÉ",
  "KENYA BREWERIES",
  "SGA SECURITY",
  "SUPERIOR TRANSPORT",
  "FARMERS CHOICE",
];

export default function LogoBar() {
  return (
    <section className="mx-auto max-w-[1400px] px-3 py-10 sm:px-5 sm:py-14">
      <p className="text-ink-soft/70 text-center text-[11px] font-bold tracking-[0.22em] uppercase">
        Moving goods for East Africa&apos;s best-run fleets
      </p>
      <div className="no-bar relative mt-6 overflow-hidden">
        <div className="animate-marquee flex w-max gap-10 sm:gap-14">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="text-ink/45 hover:text-ink text-[13px] font-extrabold tracking-[0.08em] whitespace-nowrap transition sm:text-[15px]"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="from-paper pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent" />
        <div className="from-paper pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent" />
      </div>
    </section>
  );
}
