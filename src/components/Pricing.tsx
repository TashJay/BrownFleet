import { useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const plans = [
  {
    name: "Starter",
    monthly: 1200,
    tag: "1 – 9 vehicles",
    desc: "For owner-operators and small matatu or boda fleets.",
    features: [
      "Real-time GPS tracking",
      "Trip & mileage reports",
      "Engine cut-off (anti-theft)",
      "SMS + app alerts",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthly: 950,
    tag: "10 – 99 vehicles",
    desc: "The choice of distributors, haulage and cold-chain fleets.",
    highlight: true,
    features: [
      "Everything in Starter",
      "Fuel sensors & siphoning alerts",
      "Driver scorecards + RFID tags",
      "Geofencing & route playback",
      "ERP / API integration",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    monthly: 0,
    tag: "100+ vehicles",
    desc: "Cross-border corridors, cargo insurance and control-room SLA.",
    features: [
      "Everything in Growth",
      "Satellite fallback coverage",
      "Cross-border (UG, TZ, RW, SS)",
      "24/7 Nairobi control room",
      "Custom dashboards & SLAs",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="px-3 py-14 sm:px-5 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="text-center">
          <h2 className="tight text-[30px] leading-[1.02] font-extrabold sm:text-[44px]">
            Pricing in shillings.
            <br /> No hidden charges.
          </h2>
          <p className="text-ink-soft mx-auto mt-3 max-w-md text-[14.5px]">
            Per vehicle, per month. Hardware and installation included on annual plans. Pay by
            M-Pesa, bank transfer or invoice.
          </p>

          <div className="ring-ink/10 mt-7 inline-flex items-center gap-1 rounded-full bg-white p-1 ring-1">
            {[
              ["Annual", true],
              ["Monthly", false],
            ].map(([label, val]) => (
              <button
                key={String(label)}
                onClick={() => setAnnual(val as boolean)}
                className={cn(
                  "rounded-full px-4 py-2 text-[12.5px] font-bold transition",
                  annual === val ? "bg-ink text-white" : "text-ink-soft hover:bg-black/5",
                )}
              >
                {label as string}
                {val ? " · save 20%" : ""}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-[26px] p-6 transition duration-500 sm:p-8",
                  p.highlight
                    ? "bg-ink text-white shadow-[0_40px_90px_-50px_rgba(20,17,15,0.9)]"
                    : "bg-card ring-ink/6 ring-1 hover:-translate-y-1",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-extrabold">{p.name}</span>
                  {p.highlight && (
                    <span className="bg-acid text-ink rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide uppercase">
                      Most popular
                    </span>
                  )}
                </div>
                <div
                  className={cn(
                    "mt-1 text-[11.5px] font-semibold",
                    p.highlight ? "text-white/50" : "text-ink-soft/70",
                  )}
                >
                  {p.tag}
                </div>

                <div className="mt-6 flex items-end gap-1.5">
                  {p.monthly === 0 ? (
                    <span className="tight text-[36px] leading-none font-extrabold">Custom</span>
                  ) : (
                    <>
                      <span className="text-[15px] font-bold opacity-60">KES</span>
                      <span className="tight text-[44px] leading-none font-extrabold tabular-nums">
                        {annual ? Math.round(p.monthly * 0.8) : p.monthly}
                      </span>
                      <span className="mb-1 text-[12px] font-semibold opacity-60">
                        /vehicle/mo
                      </span>
                    </>
                  )}
                </div>

                <p
                  className={cn(
                    "mt-4 text-[13px] leading-relaxed",
                    p.highlight ? "text-white/60" : "text-ink-soft",
                  )}
                >
                  {p.desc}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] font-medium">
                      <svg
                        viewBox="0 0 24 24"
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          p.highlight ? "text-acid" : "text-acid",
                        )}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className={p.highlight ? "text-white/85" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={cn(
                    "mt-8 rounded-full py-3.5 text-center text-[13px] font-bold transition",
                    p.highlight
                      ? "text-ink bg-white hover:bg-white/90"
                      : "bg-ink text-white hover:bg-black/85",
                  )}
                >
                  {p.monthly === 0 ? "Talk to sales" : "Start with " + p.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
