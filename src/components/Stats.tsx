import Reveal from "./Reveal";

const items = [
  {
    tag: "Time saving",
    value: "20%",
    title: "less manual admin",
    body: "Automated trip sheets, fuel reports and mileage logs free your office team for work that matters.",
  },
  {
    tag: "Safety",
    value: "50%",
    title: "fewer road incidents",
    body: "Harsh braking, speeding and night-driving alerts change driver behaviour within the first month.",
  },
  {
    tag: "Efficiency",
    value: "30%",
    title: "cut in fuel spend",
    body: "Route optimisation plus siphoning detection stops litres disappearing between depots.",
  },
];

export default function Stats() {
  return (
    <section id="solutions" className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[28px] bg-white/60 px-4 py-14 sm:rounded-[40px] sm:px-8 sm:py-20">
        <Reveal className="text-center">
          <h2 className="tight text-[30px] leading-[1.02] font-extrabold sm:text-[44px]">
            Useful for business.
          </h2>
          <p className="text-ink-soft mx-auto mt-3 max-w-md text-[14.5px]">
            Our telematics improve efficiency, protect your cargo and keep drivers safe on every
            corridor.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.tag} delay={i * 90}>
              <div className="group bg-card ring-ink/6 flex h-full flex-col rounded-[24px] p-6 ring-1 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(20,17,15,0.45)]">
                <div className="text-ink-soft/70 text-[10px] font-bold tracking-[0.18em] uppercase">
                  {it.tag}
                </div>
                <div className="tight mt-10 text-[48px] leading-none font-extrabold sm:text-[58px]">
                  {it.value}
                </div>
                <div className="mt-1.5 text-[15px] font-bold">{it.title}</div>
                <p className="text-ink-soft mt-3 text-[13px] leading-relaxed">{it.body}</p>
                <div className="bg-clay mt-6 h-px w-full" />
                <div className="text-acid mt-4 text-[11.5px] font-bold opacity-0 transition group-hover:opacity-100">
                  Verified across 340 client fleets
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
