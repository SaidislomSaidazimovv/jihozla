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
    <div
      className={`relative rounded-[26px] bg-ink-900 p-[5px] shadow-[0_24px_50px_-18px_rgba(6,59,44,0.3)] ${className}`}
    >
      <div className="overflow-hidden rounded-[21px] bg-white">
        <Image
          src={src}
          alt={alt}
          width={540}
          height={1005}
          priority={priority}
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
