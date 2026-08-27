import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function DemoCta() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", size: "10 – 49" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-[13.5px] text-white placeholder-white/35 outline-none transition focus:border-acid/70 focus:bg-white/10";

  return (
    <section id="demo" className="px-3 py-14 sm:px-5 sm:py-20">
      <div className="bg-ink relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] px-5 py-12 text-white sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-16">
        <div className="bg-acid/18 pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full blur-3xl" />
        <div className="bg-brown/40 pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="text-acid text-[11px] font-bold tracking-[0.22em] uppercase">
              Get started
            </div>
            <h2 className="tight mt-4 text-[32px] leading-[1.02] font-extrabold sm:text-[48px]">
              See your fleet on the map in 48 hours.
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-white/60">
              Book a free 20-minute demo. We&apos;ll track one of your vehicles at no cost for two
              weeks so you can see the savings before you commit.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-[12.5px] font-semibold text-white/70">
              {["No setup fee", "2-week free pilot", "Cancel anytime"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="bg-acid h-1.5 w-1.5 rounded-full" />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[26px] bg-white/[0.05] p-5 ring-1 ring-white/12 backdrop-blur-sm sm:p-7">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="bg-acid text-ink mx-auto grid h-12 w-12 place-items-center rounded-full text-xl font-black">
                    ✓
                  </div>
                  <h3 className="tight mt-5 text-[22px] font-extrabold">Asante, {form.name || "rafiki"}!</h3>
                  <p className="mx-auto mt-2 max-w-xs text-[13px] text-white/60">
                    Our Nairobi team will call you within one business hour to schedule your demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-3">
                  <input
                    required
                    className={field}
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    className={field}
                    placeholder="Company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                  <input
                    required
                    className={field}
                    placeholder="Phone (+254 ...)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <select
                    className={field + " appearance-none"}
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                  >
                    {["1 – 9", "10 – 49", "50 – 99", "100+"].map((s) => (
                      <option key={s} className="text-ink" value={s}>
                        {s} vehicles
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="text-ink w-full rounded-2xl bg-white py-3.5 text-[13.5px] font-extrabold transition hover:bg-white/90"
                  >
                    Book my free demo
                  </button>
                  <p className="pt-1 text-center text-[11px] text-white/40">
                    By submitting you agree to our data policy. We never share fleet data.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
