import Reveal from "./Reveal";

const features = [
  {
    icon: "M3 7h13v10H3z M16 10h3l2 3v4h-5z",
    title: "Wide range of integrations",
    body: "Plugs into SAP, QuickBooks, Sage, Odoo and Flespi, plus the ERP your accounts team already lives in.",
  },
  {
    icon: "M4 5h16v11H4z M9 20h6",
    title: "Hardware compatibility",
    body: "Works with Teltonika, Concox and Queclink devices, fuel sensors, RFID driver tags and dash cameras.",
  },
  {
    icon: "M8 6l-5 6 5 6 M16 6l5 6-5 6",
    title: "API for custom solutions",
    body: "A documented REST API and webhooks so you can pipe live positions straight into your own systems.",
  },
  {
    icon: "M12 3v9l6 3 M3 12a9 9 0 1018 0 9 9 0 10-18 0",
    title: "Fast setup",
    body: "Our Nairobi and Mombasa fitters install in under an hour per vehicle — usually overnight at your yard.",
  },
];

export default function Compatible() {
  return (
    <section className="px-3 py-10 sm:px-5 sm:py-16">
      <div className="bg-card mx-auto grid max-w-[1400px] items-center gap-8 rounded-[28px] p-5 sm:rounded-[40px] sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
        <div>
          <Reveal>
            <h2 className="tight text-[30px] leading-[1.03] font-extrabold sm:text-[42px]">
              Compatible with
              <br /> your business.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="bg-paper ring-ink/6 grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[18px] w-[18px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold">{f.title}</h3>
                    <p className="text-ink-soft mt-1 max-w-md text-[13px] leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={340}>
            <a
              href="#demo"
              className="bg-ink mt-9 inline-block rounded-full px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85"
            >
              Talk to an integration engineer
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[24px]">
            <img
              src="/images/van-depot.jpg"
              alt="Delivery van at a Nairobi depot"
              className="h-[340px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-black/5 backdrop-blur-md">
              <div className="text-[10px] font-bold tracking-[0.16em] uppercase opacity-50">
                Install time
              </div>
              <div className="tight text-[20px] font-extrabold">42 min / vehicle</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
