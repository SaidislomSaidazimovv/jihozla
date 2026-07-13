"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "./brand";

const stages = [
  {
    t: "Parametrlar",
    d: "Ilova to'rt savol beradi: duxovka qayerda turadi, so'rg'ich qanday, muzlatgich alohidami va oshxona qaysi shaklda.",
    img: "/screens/parametrlar.jpg",
    alt: "Oshxona parametrlari: duxovka joyi va so'rg'ich turi",
  },
  {
    t: "Xona",
    d: "Devorni barmoq bilan chizasiz, o'lchamlar chizish payti o'zgarib turadi. Deraza, eshik, rozetka, suv nuqtasi va radiator o'z joyiga tushadi.",
    img: "/screens/xona.jpg",
    alt: "Xona rejasi, devor o'lchamlari bilan",
  },
  {
    t: "Joylashuv",
    d: "Ilova bir necha tayyor oshxonani o'zi yig'ib beradi, har birining narxi bilan. Yoqqanini tanlab, ustida ishlashda davom etasiz.",
    img: "/screens/variantlar.jpg",
    alt: "Ilova yig'gan tayyor oshxona varianti va narxi",
  },
  {
    t: "Konstruktor",
    d: "Shkaf, texnika va mebelni sudrab qo'yasiz. Har harakatda yuqoridagi narx yangilanadi, shuning uchun mijozga javobni shu yerda berasiz.",
    img: "/screens/katalog.jpg",
    alt: "Shkaflar katalogi va 3D oshxona",
  },
  {
    t: "Muhandislik",
    d: "Furnitura klassini tanlaysiz. Ekssentrik, shkant, petlya va tokcha ushlagichlarni ilova o'zi sanaydi va sverlovkaga tushiradi.",
    img: "/screens/muhandislik.jpg",
    alt: "Furnitura klassi va ulanishlar hisobi",
  },
  {
    t: "Smeta",
    d: "Korpus, fasad, ish stoli, furnitura, stanok ishlovi va yetkazish alohida chiqadi. Har bir modulning narxi ham ro'yxatda turadi.",
    img: "/screens/smeta.jpg",
    alt: "Smeta: bo'limlar va modullar bo'yicha narx",
  },
  {
    t: "Tayyor",
    d: "Chizmalar, raskroy va stanok fayllari tayyor. Ulanishlar tekshiruvdan o'tgach, eksport tugmasi ochiladi.",
    img: "/screens/stanok.jpg",
    alt: "Stanokka tayyor: chizmalar va eksport fayllari",
  },
];

/**
 * Desktop: the phone is pinned while the stages scroll past it, and its screen
 * swaps to whichever stage is crossing the middle of the viewport. All seven
 * screens are mounted and cross-faded, so nothing flickers or re-downloads.
 *
 * Phone: a swipeable rail instead. Pinning a tall image on a small screen would
 * eat the viewport, and a rail is what a thumb expects.
 */
export function Journey() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = rows.current.indexOf(e.target as HTMLLIElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      // A band across the upper middle of the viewport: whatever sits in it wins.
      // It is deliberately above centre so the last stage still reaches it before
      // the page runs out of scroll.
      { rootMargin: "-32% 0px -52% 0px", threshold: 0 },
    );
    for (const r of rows.current) if (r) io.observe(r);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Desktop */}
      <div className="mt-16 hidden gap-16 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] xl:gap-24">
        <div className="relative">
          <div className="sticky top-28">
            <div className="relative">
              {stages.map((s, i) => (
                // A short fade: any longer and the two screens ghost through each
                // other and the swap reads as a rendering fault.
                <div
                  key={s.t}
                  aria-hidden={i !== active}
                  className={`transition-opacity duration-200 ease-out will-change-[opacity] ${
                    i === active ? "opacity-100" : "opacity-0"
                  } ${i === 0 ? "" : "absolute inset-0"}`}
                >
                  <Phone src={s.img} alt={s.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The trailing space is what keeps the phone pinned long enough for the
            last stage to reach the observer band. Without it the phone slides away
            two stages early. */}
        <ol className="pb-[32vh]">
          {stages.map((s, i) => (
            <li
              key={s.t}
              ref={(el) => {
                rows.current[i] = el;
              }}
              className={`border-l-2 py-14 pl-8 transition-all duration-400 ${
                i === active
                  ? "border-brand-500 opacity-100"
                  : "border-ink-200 opacity-45"
              }`}
            >
              <h3
                className={`text-2xl font-bold tracking-tight transition-colors ${
                  i === active ? "text-brand-600" : "text-ink-900"
                }`}
              >
                {s.t}
              </h3>
              <p className="mt-3 max-w-[46ch] leading-relaxed text-ink-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Phone and tablet: swipeable rail */}
      <div className="mt-12 lg:hidden">
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {stages.map((s) => (
            <article key={s.t} className="w-[72%] max-w-[280px] shrink-0 snap-center">
              <Phone src={s.img} alt={s.alt} />
              <h3 className="mt-5 text-lg font-bold text-brand-600">{s.t}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{s.d}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[13.5px] text-ink-400">Yon tomonga suring</p>
      </div>
    </>
  );
}
