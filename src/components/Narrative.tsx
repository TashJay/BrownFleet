import Reveal from "./Reveal";

function Mark({ children }: { children: string }) {
  return (
    <span className="bg-ink mx-0.5 inline-block rounded-[6px] px-2 py-0.5 text-white">
      {children}
    </span>
  );
}

export default function Narrative() {
  return (
    <section className="px-3 py-14 sm:px-5 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="tight text-center text-[26px] leading-[1.28] font-extrabold sm:text-[40px] sm:leading-[1.24]">
            BrownFleet gives you <Mark>live vehicle tracking</Mark>, second-by-second telemetry and
            smart{" "}
            <span className="mx-1 inline-flex translate-y-[3px] items-center overflow-hidden rounded-[10px] align-middle ring-1 ring-black/10">
              <img
                src="/images/fleet-yard.jpg"
                alt="Fleet yard"
                className="h-8 w-20 object-cover sm:h-11 sm:w-28"
              />
            </span>{" "}
            <Mark>maintenance</Mark> scheduling that stops breakdowns before they cost you a
            delivery window — so your operation runs on data, not guesswork.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {[
              "Geofencing",
              "Fuel sensors",
              "Driver scorecards",
              "Cold-chain temp",
              "M-Pesa fuel cards",
              "NTSA compliance",
            ].map((t) => (
              <span
                key={t}
                className="ring-ink/10 text-ink-soft rounded-full bg-white px-4 py-2 text-[12.5px] font-bold ring-1"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
