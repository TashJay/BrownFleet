import Logo from "./Logo";

const groups = [
  {
    title: "Solutions",
    links: ["Haulage & logistics", "Distribution fleets", "Cold chain", "PSV & matatu SACCOs", "Construction plant"],
  },
  {
    title: "Platform",
    links: ["Live tracking", "Fuel monitoring", "Driver scorecards", "Maintenance", "API docs"],
  },
  {
    title: "Company",
    links: ["About BrownFleet", "Careers in Nairobi", "Partners & fitters", "Press", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="px-3 pb-5 sm:px-5">
      <div className="bg-card mx-auto max-w-[1400px] rounded-[28px] px-5 py-12 sm:rounded-[40px] sm:px-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="text-ink-soft mt-4 max-w-xs text-[13px] leading-relaxed">
              BrownFleet Kenya Ltd. Fleet telematics engineered in Nairobi for African roads.
              Westlands Business Park, Waiyaki Way, Nairobi.
            </p>
            <div className="mt-5 flex gap-2">
              {["in", "X", "f", "IG"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="ring-ink/10 hover:bg-ink grid h-9 w-9 place-items-center rounded-full text-[11px] font-bold ring-1 transition hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-45">
                  {g.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-ink-soft hover:text-ink text-[13px] font-medium transition"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-clay text-ink-soft/70 mt-12 flex flex-col gap-3 border-t pt-6 text-[11.5px] font-medium sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} BrownFleet Kenya Ltd. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#top" className="hover:text-ink">Privacy</a>
            <a href="#top" className="hover:text-ink">Terms</a>
            <a href="#top" className="hover:text-ink">Data Protection Act 2019</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
