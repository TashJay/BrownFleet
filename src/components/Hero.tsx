import Reveal from "./Reveal";

function Chip({
  className,
  label,
  value,
  dot = "bg-acid",
}: {
  className?: string;
  label: string;
  value: string;
  dot?: string;
}) {
  return (
    <div
      className={`absolute hidden items-center gap-2.5 rounded-2xl bg-white/90 px-3.5 py-2.5 shadow-[0_10px_40px_-12px_rgba(20,17,15,0.45)] ring-1 ring-black/5 backdrop-blur-md sm:flex ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className={`pulse-ring absolute inset-0 rounded-full ${dot} opacity-70`} />
        <span className={`relative h-2.5 w-2.5 rounded-full ${dot}`} />
      </span>
      <div className="leading-tight">
        <div className="text-[9px] font-bold tracking-[0.14em] uppercase opacity-50">{label}</div>
        <div className="text-[12.5px] font-bold">{value}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-24 sm:px-5 sm:pt-28">
      <div className="bg-card mx-auto max-w-[1400px] overflow-hidden rounded-[28px] pt-14 sm:rounded-[40px] sm:pt-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="ring-ink/10 text-ink-soft inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1.5 text-[11px] font-bold tracking-wide ring-1">
              <span className="bg-acid h-1.5 w-1.5 rounded-full" />
              Trusted by 340+ Kenyan fleets · Nairobi · Mombasa · Eldoret
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="tight mt-6 text-[42px] leading-[0.94] font-extrabold sm:text-[64px] lg:text-[76px]">
              Control your fleet
              <br className="hidden sm:block" /> like never before.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-ink-soft mx-auto mt-6 max-w-xl text-[15px] leading-relaxed sm:text-base">
              Real-time GPS tracking, fuel-theft alerts and driver analytics built for Kenyan roads —
              from the Northern Corridor to the last mile in Nairobi CBD. All in one platform.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="bg-ink w-full rounded-full px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85 sm:w-auto"
              >
                Book a free demo
              </a>
              <a
                href="#platform"
                className="ring-ink/12 text-ink w-full rounded-full bg-white px-6 py-3.5 text-sm font-bold ring-1 transition hover:bg-black/[0.04] sm:w-auto"
              >
                See the platform →
              </a>
            </div>
            <p className="text-ink-soft/70 mt-4 text-[11.5px] font-medium">
              Free installation on 10+ vehicles · No setup fee · M-Pesa billing
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 px-3 pb-3 sm:mt-16 sm:px-4 sm:pb-4">
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[30px]">
            <img
              src="/images/hero-truck.jpg"
              alt="Cargo truck on a Kenyan highway"
              className="h-[280px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <Chip
              className="top-6 left-6"
              label="Live · KDG 442T"
              value="Mai Mahiu → Naivasha · 78 km/h"
            />
            <Chip
              className="right-6 bottom-20"
              label="Fuel level"
              value="64% · no anomalies"
              dot="bg-brown-soft"
            />

            <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-black/5 backdrop-blur-md sm:right-6 sm:bottom-6 sm:left-6 sm:px-5">
              {[
                ["12,480", "Vehicles tracked"],
                ["99.4%", "Signal uptime"],
                ["47", "Counties covered"],
                ["24/7", "Nairobi control room"],
              ].map(([v, l]) => (
                <div key={l} className="min-w-[70px]">
                  <div className="tight text-[17px] font-extrabold sm:text-[22px]">{v}</div>
                  <div className="text-ink-soft text-[10px] font-semibold sm:text-[11px]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
