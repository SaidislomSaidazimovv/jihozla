import Image from "next/image";
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";
import { APP_STORE, PLAY_STORE } from "@/lib/site";

/** The official lockup is the wordmark on its own, in brand green. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`wordmark block h-[22px] w-[111px] text-brand-600 ${className}`}
      role="img"
      aria-label="Jihozla"
    />
  );
}

/**
 * `solid` is the primary CTA on light sections, `ghost` sits on the green band.
 * Google Play renders as a non-interactive chip while the Android listing is
 * unpublished, so no one taps through to a 404.
 */
export function StoreButtons({ tone = "solid" }: { tone?: "solid" | "ghost" }) {
  const base =
    "inline-flex min-h-12 items-center gap-3 rounded-xl px-5 py-3 text-left transition-transform duration-150 active:translate-y-px";
  const live =
    tone === "solid"
      ? `${base} bg-ink-900 text-white hover:bg-ink-800`
      : `${base} bg-white text-ink-900 hover:bg-brand-50`;
  const soon =
    tone === "solid"
      ? `${base} cursor-default border border-ink-200 text-ink-500`
      : `${base} cursor-default border border-white/40 text-white/80`;

  return (
    <div className="flex flex-wrap gap-3">
      <a href={APP_STORE} target="_blank" rel="noopener" className={live}>
        <AppleLogo size={22} weight="fill" className="shrink-0" />
        <span className="leading-tight">
          <span className="block text-[10px] font-semibold tracking-[0.12em] uppercase opacity-60">
            Yuklab oling
          </span>
          <span className="block text-[15px] font-bold">App Store</span>
        </span>
      </a>

      {PLAY_STORE ? (
        <a href={PLAY_STORE} target="_blank" rel="noopener" className={live}>
          <GooglePlayLogo size={22} weight="fill" className="shrink-0" />
          <span className="leading-tight">
            <span className="block text-[10px] font-semibold tracking-[0.12em] uppercase opacity-60">
              Yuklab oling
            </span>
            <span className="block text-[15px] font-bold">Google Play</span>
          </span>
        </a>
      ) : (
        <span className={soon} aria-disabled>
          <GooglePlayLogo size={22} weight="fill" className="shrink-0" />
          <span className="leading-tight">
            <span className="block text-[10px] font-semibold tracking-[0.12em] uppercase opacity-70">
              Tez orada
            </span>
            <span className="block text-[15px] font-bold">Google Play</span>
          </span>
        </span>
      )}
    </div>
  );
}

/**
 * Device shell around a real app screenshot. Sources are 540x1100 (from the app
 * itself), so the frame never scales them past 1x on a phone or ~1.1x on desktop.
 */
export function Phone({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Titanium side buttons, on the frame edge behind the body */}
      <span className="absolute top-[19%] -left-[2px] h-[7%] w-[3px] rounded-l bg-ink-700" aria-hidden />
      <span className="absolute top-[30%] -left-[2px] h-[11%] w-[3px] rounded-l bg-ink-700" aria-hidden />
      <span className="absolute top-[44%] -left-[2px] h-[11%] w-[3px] rounded-l bg-ink-700" aria-hidden />
      <span className="absolute top-[27%] -right-[2px] h-[15%] w-[3px] rounded-r bg-ink-700" aria-hidden />

      {/* Phone body: dark titanium rail with a bright inner edge and soft shadow.
          Radii are percentage ellipses (horizontal / vertical) so the corners
          stay phone-shaped at any size; inline style avoids Tailwind reading the
          slash as an opacity modifier. */}
      <div
        className="relative bg-gradient-to-b from-ink-700 to-ink-950 p-[3.4%] shadow-[0_30px_60px_-22px_rgba(6,59,44,0.4),0_8px_18px_-8px_rgba(0,0,0,0.35)] ring-1 ring-black/40"
        style={{ borderRadius: "13.5% / 6.6%" }}
      >
        {/* No notch or island: the app's own top bar sits at the screen edge
            (the recording hid the status bar), so any overlay would clash with
            its buttons. A clean edge-to-edge screen reads as a modern phone. */}
        <div
          className="overflow-hidden bg-white ring-1 ring-black/60"
          style={{ borderRadius: "10.5% / 5.2%" }}
        >
          <Image
            src={src}
            alt={alt}
            width={720}
            height={1429}
            priority={priority}
            sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 300px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
