import { useState } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "Do the trackers work outside network coverage?",
    a: "Yes. Every device stores positions offline and uploads the full trail once it reconnects, so routes through Tsavo, Turkana or the Northern Corridor are never lost. Enterprise fleets can add satellite fallback.",
  },
  {
    q: "How long does installation take?",
    a: "Our certified fitters in Nairobi, Mombasa, Nakuru, Kisumu and Eldoret install in about 42 minutes per vehicle. We usually work overnight at your yard so no vehicle misses a shift.",
  },
  {
    q: "Can I pay through M-Pesa?",
    a: "Absolutely. Pay via M-Pesa Paybill, bank transfer or monthly invoice with 30-day terms. Annual plans include hardware, SIM data and installation.",
  },
  {
    q: "Is BrownFleet NTSA and insurance compliant?",
    a: "Our devices meet NTSA speed-limiter and tracking requirements, and our reports are accepted by all major Kenyan insurers — many clients get 5–15% off cargo and motor premiums.",
  },
  {
    q: "What happens if a vehicle is stolen?",
    a: "The 24/7 control room in Westlands triggers instant alerts, coordinates with your team and can remotely immobilise the engine once the vehicle is safely stopped, while sharing the live location with recovery partners.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-3 sm:px-5">
      <div className="mx-auto grid max-w-[1400px] gap-8 rounded-[28px] bg-white/60 px-4 py-14 sm:rounded-[40px] sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14">
        <Reveal>
          <h2 className="tight text-[30px] leading-[1.03] font-extrabold sm:text-[42px]">
            Questions,
            <br /> answered.
          </h2>
          <p className="text-ink-soft mt-4 max-w-xs text-[14px]">
            Still unsure? Call our Nairobi team on{" "}
            <span className="text-ink font-bold">+254 711 204 880</span> — we answer in English or
            Kiswahili.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img
              src="/images/driver.jpg"
              alt="BrownFleet driver"
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <div className="text-ink-soft text-[12px] leading-snug font-semibold">
              Real people, real fleets.
              <br />
              Support Mon–Sat, 6am – 10pm EAT.
            </div>
          </div>
        </Reveal>

        <div className="divide-clay divide-y">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="text-[15px] font-bold sm:text-[16.5px]">{f.q}</span>
                <span
                  className={cn(
                    "ring-ink/10 mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white ring-1 transition",
                    open === i && "bg-ink rotate-45 text-white",
                  )}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-500",
                  open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <p className="text-ink-soft overflow-hidden pr-10 text-[13.5px] leading-relaxed">
                  {f.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
