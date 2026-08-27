import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const KENYA =
  "M96 122 L150 42 L252 70 L332 104 L356 212 L300 300 L214 356 L92 252 L70 200 Z";

const cities = [
  { name: "Nairobi", x: 168, y: 272 },
  { name: "Mombasa", x: 246, y: 336 },
  { name: "Kisumu", x: 100, y: 232 },
  { name: "Eldoret", x: 118, y: 190 },
  { name: "Nakuru", x: 140, y: 240 },
  { name: "Garissa", x: 268, y: 258 },
  { name: "Isiolo", x: 205, y: 190 },
];

const tabs = ["Live map", "Fuel & theft", "Driver safety", "Maintenance"] as const;
type Tab = (typeof tabs)[number];

const fleet = [
  { reg: "KDG 442T", route: "Mombasa → Nairobi", base: 78, status: "Moving" },
  { reg: "KCX 118A", route: "Nakuru → Eldoret", base: 64, status: "Moving" },
  { reg: "KBZ 907Q", route: "Nairobi CBD loop", base: 22, status: "Delivering" },
  { reg: "KDA 553L", route: "Isiolo yard", base: 0, status: "Idle" },
];

const panels: Record<Exclude<Tab, "Live map">, { title: string; rows: [string, string][] }> = {
  "Fuel & theft": {
    title: "Fuel intelligence",
    rows: [
      ["Litres monitored today", "18,420 L"],
      ["Siphoning alerts (7 days)", "3 flagged · 2 recovered"],
      ["Avg. consumption", "3.1 km / litre"],
      ["Savings this month", "KES 386,000"],
    ],
  },
  "Driver safety": {
    title: "Driver scorecards",
    rows: [
      ["Fleet safety score", "88 / 100"],
      ["Harsh braking events", "12 ↓ 41% vs last month"],
      ["Over-speeding on A109", "4 drivers flagged"],
      ["Night-driving compliance", "96%"],
    ],
  },
  Maintenance: {
    title: "Service planner",
    rows: [
      ["Vehicles due in 14 days", "9"],
      ["Open engine fault codes", "2 critical · 5 minor"],
      ["Tyre pressure warnings", "KCX 118A, KDA 553L"],
      ["Unplanned downtime", "↓ 34% since onboarding"],
    ],
  },
};

export default function Platform() {
  const [tab, setTab] = useState<Tab>("Live map");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="platform" className="px-3 sm:px-5">
      <div className="bg-ink mx-auto max-w-[1400px] overflow-hidden rounded-[28px] px-4 py-14 text-white sm:rounded-[40px] sm:px-10 sm:py-20">
        <Reveal className="max-w-2xl">
          <div className="text-acid text-[11px] font-bold tracking-[0.22em] uppercase">
            The platform
          </div>
          <h2 className="tight mt-4 text-[30px] leading-[1.03] font-extrabold sm:text-[44px]">
            One control room for every kilometre you run.
          </h2>
          <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-white/60">
            Watch the whole fleet move in real time on GSM + satellite coverage that keeps reporting
            even through Tsavo and the Northern Corridor dead zones.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-full px-4 py-2 text-[12.5px] font-bold transition",
                  tab === t
                    ? "text-ink bg-white"
                    : "bg-white/8 text-white/70 ring-1 ring-white/15 hover:bg-white/15",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-6 grid gap-4 rounded-[26px] bg-white/[0.06] p-4 ring-1 ring-white/10 lg:grid-cols-[1.15fr_1fr] sm:p-5">
            {/* map */}
            <div className="relative overflow-hidden rounded-[20px] bg-[#191614] p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.16em] text-white/45 uppercase">
                <span>Live positions · Kenya</span>
                <span className="text-acid flex items-center gap-1.5">
                  <span className="bg-acid h-1.5 w-1.5 rounded-full" /> streaming
                </span>
              </div>
              <svg viewBox="0 0 400 400" className="mx-auto h-[300px] w-full sm:h-[380px]">
                <defs>
                  <linearGradient id="kfill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2a231e" />
                    <stop offset="100%" stopColor="#1f1a17" />
                  </linearGradient>
                </defs>
                <path d={KENYA} fill="url(#kfill)" stroke="#4a3f37" strokeWidth="1.5" />
                {/* corridors */}
                <path
                  d="M246 336 Q 205 305 168 272 Q 152 258 140 240 Q 128 214 118 190"
                  stroke="#16b364"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 8"
                  opacity="0.8"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="56"
                    to="0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M168 272 Q 220 268 268 258"
                  stroke="#a9784f"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 8"
                  opacity="0.7"
                />
                <path d="M140 240 Q 118 236 100 232" stroke="#a9784f" strokeWidth="2" fill="none" />
                {cities.map((c, i) => (
                  <g key={c.name}>
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="4"
                      fill={i % 3 === 0 ? "#16b364" : "#f2f1ee"}
                      opacity="0.95"
                    />
                    <circle cx={c.x} cy={c.y} r="9" fill="none" stroke="#16b364" strokeWidth="1">
                      <animate
                        attributeName="r"
                        values="5;13"
                        dur="2.6s"
                        begin={`${i * 0.35}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;0"
                        dur="2.6s"
                        begin={`${i * 0.35}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <text
                      x={c.x + 11}
                      y={c.y + 4}
                      fill="#ffffff"
                      opacity="0.6"
                      fontSize="10"
                      fontWeight="700"
                    >
                      {c.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* right panel */}
            <div className="rounded-[20px] bg-[#191614] p-4 ring-1 ring-white/10 sm:p-5">
              {tab === "Live map" ? (
                <>
                  <div className="text-[10px] font-bold tracking-[0.16em] text-white/45 uppercase">
                    Active vehicles · 4 of 12,480
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {fleet.map((v, i) => {
                      const speed =
                        v.base === 0 ? 0 : Math.max(0, v.base + ((tick + i * 3) % 7) - 3);
                      return (
                        <div
                          key={v.reg}
                          className="flex items-center justify-between rounded-2xl bg-white/[0.05] px-4 py-3 ring-1 ring-white/10"
                        >
                          <div>
                            <div className="font-mono text-[12.5px] font-bold">{v.reg}</div>
                            <div className="text-[11px] text-white/50">{v.route}</div>
                          </div>
                          <div className="text-right">
                            <div className="tight text-[15px] font-extrabold tabular-nums">
                              {speed} km/h
                            </div>
                            <div
                              className={cn(
                                "text-[10px] font-bold",
                                v.status === "Idle" ? "text-white/40" : "text-acid",
                              )}
                            >
                              {v.status}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10">
                    <div className="text-[11px] text-white/50">Last alert</div>
                    <div className="mt-1 text-[13px] font-bold">
                      Geofence exit · Athi River depot · 04:12 EAT
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[10px] font-bold tracking-[0.16em] text-white/45 uppercase">
                    {panels[tab].title}
                  </div>
                  <div className="mt-4 divide-y divide-white/10">
                    {panels[tab].rows.map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4 py-4">
                        <span className="text-[12.5px] text-white/55">{k}</span>
                        <span className="text-right text-[13px] font-bold">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-acid/12 text-acid mt-4 rounded-2xl px-4 py-3 text-[12px] font-bold ring-1 ring-white/10">
                    Reports export to Excel, PDF or your ERP every morning at 6am.
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
