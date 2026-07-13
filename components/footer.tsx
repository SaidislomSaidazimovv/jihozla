import { Logo } from "./brand";
import { APP_STORE, CONTACT_EMAIL, TELEGRAM } from "@/lib/site";

type Link = { label: string; href: string | null; ext?: boolean };

const cols: { h: string; links: Link[] }[] = [
  {
    h: "Mahsulot",
    links: [
      { label: "Jarayon", href: "#jarayon" },
      { label: "Imkoniyatlar", href: "#imkoniyat" },
      { label: "Ishlab chiqarish", href: "#ishlab-chiqarish" },
    ],
  },
  {
    h: "Yuklab olish",
    links: [
      { label: "App Store", href: APP_STORE, ext: true },
      { label: "Google Play, tez orada", href: null },
    ],
  },
  {
    h: "Aloqa",
    links: [
      { label: "Telegram kanal", href: TELEGRAM, ext: true },
      ...(CONTACT_EMAIL
        ? [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` } satisfies Link]
        : []),
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[34ch] text-[14.5px] leading-relaxed text-ink-500">
              Mebelchilar va oshxona dizaynerlari uchun ilova. O'zbekistonda ishlab chiqilgan.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.h}>
              <h3 className="text-[13px] font-semibold text-ink-900">{c.h}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {/* Tap targets stay at least 44px tall on a phone, then tighten
                        up once a mouse is likely. */}
                    {l.href ? (
                      <a
                        href={l.href}
                        {...(l.ext ? { target: "_blank", rel: "noopener" } : {})}
                        className="inline-flex min-h-11 items-center text-[14.5px] text-ink-500 transition-colors hover:text-brand-600 lg:min-h-0 lg:py-0.5"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 items-center text-[14.5px] text-ink-400 lg:min-h-0 lg:py-0.5">
                        {l.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-ink-200 pt-6 text-[13.5px] text-ink-400">
          © {new Date().getFullYear()} Jihozla. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
