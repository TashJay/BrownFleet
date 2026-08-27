import { cn } from "../utils/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-6 w-6", className)} fill="none" aria-hidden="true">
      <path
        d="M6 21.5V12.2c0-.7.4-1.4 1-1.7l8-4.3c.6-.3 1.4-.3 2 0l8 4.3c.6.3 1 1 1 1.7v9.3"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="10" cy="22.5" r="3" stroke="currentColor" strokeWidth="2.1" />
      <circle cx="22" cy="22.5" r="3" stroke="currentColor" strokeWidth="2.1" />
      <path d="M13 22.5h6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="16" cy="14.5" r="2.2" fill="currentColor" />
    </svg>
  );
}

export default function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Mark />
      <div className="leading-none">
        <div className="text-[13px] font-extrabold tracking-[0.16em] uppercase">BrownFleet</div>
        {!compact && (
          <div className="mt-[3px] text-[8.5px] font-semibold tracking-[0.34em] uppercase opacity-55">
            Kenya
          </div>
        )}
      </div>
    </div>
  );
}
