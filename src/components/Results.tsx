import Reveal from "./Reveal";

export default function Results() {
  return (
    <section className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[28px] bg-white/60 px-4 py-14 sm:rounded-[40px] sm:px-8 sm:py-20">
        <Reveal className="text-center">
          <h2 className="tight text-[30px] leading-[1.02] font-extrabold sm:text-[44px]">
            Results that speak
            <br /> for themselves.
          </h2>
          <p className="text-ink-soft mx-auto mt-3 max-w-md text-[14.5px]">
            See how transporters across Kenya cut costs in their first two quarters with BrownFleet.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl sm:mt-14">
          <div className="bg-card ring-ink/6 rounded-[26px] p-5 shadow-[0_30px_80px_-50px_rgba(20,17,15,0.5)] ring-1 sm:p-8">
            <p className="tight text-[19px] leading-[1.35] font-extrabold sm:text-[26px]">
              “Since installing the <span className="text-acid">BrownFleet</span> trackers across
              our 140 lorries on the Mombasa–Kampala route, fuel losses basically stopped. In six
              months we have{" "}
              <span className="bg-ink inline-block rounded-[6px] px-2 py-0.5 text-white">
                reduced running costs by 27%.
              </span>
              ”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="from-brown to-brown-soft grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br text-[13px] font-bold text-white">
                JM
              </div>
              <div className="leading-tight">
                <div className="text-[13.5px] font-bold">James Mwangi</div>
                <div className="text-ink-soft text-[11.5px] font-medium">
                  Chief Operating Officer, Sifa Cross-Border Logistics
                </div>
              </div>
            </div>

            <div className="border-clay mt-7 rounded-2xl border p-4 sm:p-5">
              <div className="text-ink-soft/70 flex items-center justify-between text-[10px] font-bold tracking-[0.16em] uppercase">
                <span>Cost per kilometre index</span>
                <span>Jan – Sep 2026</span>
              </div>

              <div className="relative mt-3">
                <svg viewBox="0 0 700 190" className="h-40 w-full sm:h-52" fill="none">
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      x2="700"
                      y1={20 + i * 50}
                      y2={20 + i * 50}
                      stroke="#e6e1d9"
                      strokeWidth="1"
                      strokeDasharray="3 6"
                    />
                  ))}
                  <path
                    className="chart-line"
                    d="M18 34 C 140 30, 220 36, 300 92 S 430 158, 682 160"
                    stroke="#16b364"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="18" cy="34" r="6" fill="#16b364" opacity="0.25" />
                  <circle cx="18" cy="34" r="3.5" fill="#16b364" />
                  <circle cx="682" cy="160" r="6" fill="#16b364" opacity="0.25" />
                  <circle cx="682" cy="160" r="3.5" fill="#16b364" />
                </svg>
                <span className="text-ink-soft/70 absolute top-0 right-0 text-[10px] font-bold">
                  100%
                </span>
                <span className="text-acid absolute right-0 bottom-8 rounded bg-white px-1 text-[11px] font-extrabold">
                  73%
                </span>
              </div>

              <div className="text-ink-soft/70 mt-1 flex justify-between text-[10px] font-semibold">
                {["Jan", "Mar", "May", "Jul", "Sep"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            ["27%", "lower cost per km"],
            ["KES 4.1M", "fuel recovered / year"],
            ["6 weeks", "average payback period"],
          ].map(([v, l], i) => (
            <Reveal key={l} delay={i * 90}>
              <div className="ring-ink/6 rounded-2xl bg-white px-5 py-4 text-center ring-1">
                <div className="tight text-[24px] font-extrabold">{v}</div>
                <div className="text-ink-soft text-[12px] font-semibold">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
