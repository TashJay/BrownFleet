import { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "../utils/cn";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled
            ? "bg-white/85 shadow-[0_8px_30px_-12px_rgba(20,17,15,0.25)] ring-1 ring-black/5 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <a href="#top" className="text-ink">
          <Logo compact />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-ink-soft hover:text-ink rounded-full px-3.5 py-2 text-[13px] font-semibold transition hover:bg-black/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-ink-soft hidden text-[12px] font-semibold sm:inline">EN / SW</span>
          <a
            href="#demo"
            className="bg-ink rounded-full px-4 py-2.5 text-[12.5px] font-bold text-white transition hover:bg-black/80"
          >
            Book a Demo
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="ring-ink/10 grid h-9 w-9 place-items-center rounded-full bg-white ring-1 md:hidden"
          >
            <div className="space-y-1">
              <span className="bg-ink block h-[2px] w-4 rounded" />
              <span className="bg-ink block h-[2px] w-4 rounded" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-black/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
