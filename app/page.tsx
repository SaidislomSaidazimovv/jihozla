import {
  CloudCheck,
  FileArrowDown,
  PenNib,
  SealCheck,
  Star,
  Translate,
} from "@phosphor-icons/react/dist/ssr";
import { Phone, StoreButtons } from "@/components/brand";
import { Footer } from "@/components/footer";
import { Journey } from "@/components/journey";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { PROOF } from "@/lib/site";

export default function Page() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero. Split composition, product on the right, blueprint grid behind. */}
        <section className="relative overflow-hidden border-b border-ink-200">
          <div className="blueprint pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(75%_65%_at_18%_12%,#000,transparent)]" />
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 pt-14 pb-16 lg:grid-cols-[1.05fr_auto] lg:gap-12 lg:pt-24 lg:pb-24">
            <div className="max-w-[600px]">
              <h1 className="text-[32px] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-[42px] lg:text-[50px]">
                Mebelchilar va oshxona{" "}
                <span className="text-brand-500">dizaynerlari</span> uchun ilova.
              </h1>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink-600 sm:text-[17px]">
                Oshxonani 3D da yig'ing, materiallarni tanlang va darhol smeta hamda ishlab
                chiqarish uchun fayllarni oling.
              </p>
              <div className="mt-8">
                <StoreButtons />
              </div>
            </div>

            {/* Real app screens. Nothing on this page is a drawn mock-up. */}
            <div className="mx-auto flex w-full max-w-[440px] items-end justify-center gap-4 sm:gap-5">
              <Phone
                src="/screens/variantlar.jpg"
                alt="Ilova yig'gan tayyor oshxona varianti va uning narxi"
                priority
                className="w-[44%] translate-y-5"
              />
              <Phone
                src="/screens/stanok.jpg"
                alt="Stanokka tayyor ekrani: chizmalar va eksport fayllari"
                priority
                className="w-[48%]"
              />
            </div>
          </div>
        </section>

        {/* The journey. The phone is pinned and its screen follows the scroll, so the
            seven stages are shown rather than listed. */}
        <section id="jarayon" className="border-b border-ink-200 bg-white">
          <div className="mx-auto max-w-[1200px] px-5 py-18 lg:py-24">
            <Reveal>
              <h2 className="max-w-[18ch] text-[26px] leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl">
                Bo'sh xonadan stanok fayligacha.
              </h2>
              <p className="mt-4 max-w-[54ch] leading-relaxed text-ink-600">
                Yetti bosqich. Har birida narx yangilanib turadi, oxirida esa ishlab chiqarish
                uchun tayyor fayl chiqadi.
              </p>
            </Reveal>

            <Journey />
          </div>
        </section>

        {/* Feature, asset left */}
        <section id="imkoniyat" className="border-b border-ink-200">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-18 lg:grid-cols-2 lg:gap-20 lg:py-28">
            <Reveal className="order-2 lg:order-1">
              <div className="mx-auto max-w-[290px]">
                <Phone
                  src="/screens/xona.jpg"
                  alt="Xona rejasi: devor o'lchamlari, deraza va kommunikatsiya nuqtalari"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="order-1 lg:order-2">
              <h2 className="text-[26px] leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl">
                Xonani xohlaganingizcha chizing.
              </h2>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-600">
                To'rtburchak xona bilan cheklanmaysiz. Burchakli devor, chiqib turgan ustun,
                notekis o'lcham: hammasini barmoq bilan chizasiz. Deraza, eshik, rozetka, suv
                nuqtasi va radiatorni ham joyiga qo'yasiz.
              </p>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-ink-600">
                Shkaf, texnika va mebelni sudrab qo'yasiz. Yuqoridagi narx har harakatda
                yangilanadi, shuning uchun mijozga javobni shu yerda berasiz.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Feature, asset right. Second and last split in a row. */}
        <section className="border-b border-ink-200 bg-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-18 lg:grid-cols-2 lg:gap-20 lg:py-28">
            <Reveal>
              <h2 className="text-[26px] leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl">
                Shkafning ichini o'zingiz yasaysiz.
              </h2>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-600">
                Katalogdan tayyorini tanlash shart emas. Shkaf ichiga chiziq tortasiz, u
                bo'laklarga bo'linadi va har bo'lakning aniq o'lchami chiqadi. Qaysi bo'lakka
                eshik, qaysisiga tortma qo'yishni o'zingiz aytasiz.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Chiziq tortib bo'laklarga bo'lish",
                  "To'siqni surib o'lchamni o'zgartirish",
                  "Eshik va tortmalarni joylashtirish",
                  "Natijani darhol 3D da ko'rish",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <PenNib size={18} weight="duotone" className="mt-0.5 shrink-0 text-brand-500" />
                    <span className="text-[15px] text-ink-700">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-end justify-center gap-4 sm:gap-5">
                <div className="w-[45%] max-w-[220px]">
                  <Phone
                    src="/screens/toldirish2d.jpg"
                    alt="Shkaf ichi bo'laklarga bo'lingan, har bo'lakning o'lchami bilan"
                  />
                </div>
                <div className="w-[45%] max-w-[220px] translate-y-7">
                  <Phone
                    src="/screens/toldirish3d.jpg"
                    alt="Yasalgan shkaf 3D ko'rinishda, tokchalari bilan"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bento. Breaks the split rhythm. Mixed cell sizes and mixed backgrounds. */}
        <section className="border-b border-ink-200">
          <div className="mx-auto max-w-[1200px] px-5 py-18 lg:py-24">
            <Reveal>
              <h2 className="max-w-[20ch] text-[26px] leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl">
                Ustaning ish kuni bo'yicha yasalgan.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {/* Wide cell: the saved-cabinet idea, with a real screen */}
              <Reveal className="md:col-span-2">
                <div className="grid h-full gap-6 overflow-hidden rounded-2xl bg-white p-7 sm:grid-cols-[1fr_auto] sm:items-center lg:p-9">
                  <div>
                    <Star size={24} weight="duotone" className="text-brand-500" />
                    <h3 className="mt-4 text-lg font-bold">Mening shkaflarim</h3>
                    <p className="mt-2.5 max-w-[42ch] text-[15px] leading-relaxed text-ink-600">
                      O'zingizga qulay shkafni bir marta yasab, saqlab qo'yasiz. Keyingi
                      loyihalarda uni bir bosishda, to'liq sozlangan holida chiqarasiz.
                    </p>
                  </div>
                  <div className="w-[150px] justify-self-center sm:w-[160px] sm:justify-self-end">
                    <Phone
                      src="/screens/shkaflarim.jpg"
                      alt="Saqlangan shkafni loyihaga qo'shish oynasi"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Tinted cell with the engineering figures */}
              <Reveal delay={0.06}>
                <div className="flex h-full flex-col justify-between rounded-2xl bg-brand-50 p-7 lg:p-8">
                  <div>
                    <SealCheck size={24} weight="duotone" className="text-brand-600" />
                    <h3 className="mt-4 text-lg font-bold">Hisob avtomatik</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink-600">
                      Ekssentrik, shkant, petlya va tokcha ushlagichlarni ilova o'zi sanaydi.
                    </p>
                  </div>
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-brand-200 pt-6">
                    {[
                      { k: PROOF.teshik, l: "teshik" },
                      { k: PROOF.detal, l: "detal" },
                      { k: PROOF.plita, l: "m² plita" },
                    ].map((s) => (
                      <div key={s.l}>
                        <dt className="font-mono text-xl font-bold text-brand-900 lg:text-2xl">
                          {s.k}
                        </dt>
                        <dd className="mt-1 text-[12.5px] text-ink-500">{s.l}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              {/* Three closing cells, so the three-column grid ends flush */}
              {[
                {
                  icon: <Translate size={22} weight="duotone" className="text-brand-500" />,
                  t: "O'zbekcha, so'mda",
                  d: "Interfeys o'zbek va rus tilida. Valyuta so'm yoki dollar, kursni o'zingiz kiritasiz.",
                },
                {
                  icon: <CloudCheck size={22} weight="duotone" className="text-brand-500" />,
                  t: "Loyihalar bulutda",
                  d: "Telefon almashsa ham loyihangiz joyida. Boshqa qurilmadan kirib davom etasiz.",
                },
                {
                  icon: <FileArrowDown size={22} weight="duotone" className="text-brand-500" />,
                  t: "Chizmalar PDF da",
                  d: "Fasad, yuqoridan ko'rinish, ish stoli va sverlovka. Sexga bosib chiqarasiz.",
                },
              ].map((c, i) => (
                <Reveal key={c.t} delay={0.04 * i}>
                  <div className="h-full rounded-2xl bg-white p-7">
                    {c.icon}
                    <h3 className="mt-4 font-bold">{c.t}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Production. Spec panel on the left, two real screens on the right. */}
        <section id="ishlab-chiqarish" className="border-b border-ink-200 bg-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-18 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-28">
            <div>
              <Reveal>
                <h2 className="text-[26px] leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl">
                  Stanok tushunadigan fayl.
                </h2>
                <p className="mt-5 max-w-[50ch] leading-relaxed text-ink-600">
                  Smeta o'zi hisoblanadi: korpus, fasad, ish stoli, furnitura, stanok ishlovi va
                  yetkazish alohida chiqadi. So'ngra loyihani ishlab chiqarishga topshirasiz.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-9 space-y-2.5">
                  {[
                    { f: "SWJ008", d: "ChPU stanogi uchun to'liq fayl" },
                    { f: "DXF", d: "Plita kesish uchun raskroy" },
                    { f: "CSV", d: "Spetsifikatsiya, ombor va buyurtma uchun" },
                    { f: "PDF", d: "Chizmalar to'plami" },
                  ].map((x) => (
                    <li
                      key={x.f}
                      className="flex flex-wrap items-center gap-x-5 gap-y-1 rounded-xl bg-ink-50 px-5 py-3.5"
                    >
                      <span className="w-[68px] shrink-0 font-mono text-[14px] font-bold text-brand-700">
                        {x.f}
                      </span>
                      <span className="text-[14.5px] text-ink-600">{x.d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-7 flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-500">
                  <SealCheck size={18} weight="duotone" className="mt-0.5 shrink-0 text-brand-500" />
                  Eksportdan oldin ilova ulanishlarni tekshiradi. Xato bo'lsa, faylni stanokka
                  yubormaydi.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="flex items-end justify-center gap-4 sm:gap-5">
                <div className="w-[45%] max-w-[230px] translate-y-7">
                  <Phone src="/screens/smeta.jpg" alt="Smeta: bo'limlar va modullar bo'yicha" />
                </div>
                <div className="w-[45%] max-w-[230px]">
                  <Phone
                    src="/screens/muhandislik.jpg"
                    alt="Muhandislik: furnitura klassi va ulanishlar hisobi"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing band. The one saturated colour moment on the page. */}
        <section className="relative overflow-hidden bg-brand-500 text-white">
          <div className="relative mx-auto max-w-[1200px] px-5 py-18 text-center lg:py-24">
            <Reveal>
              <h2 className="mx-auto max-w-[20ch] text-[26px] leading-tight font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                Bugun yuklab oling va birinchi oshxonangizni yig'ing.
              </h2>
              <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-white/85">
                Ilova beta bosqichida. Undan ham kuchliroq yangi versiya ustida ishlayapmiz va
                sizning fikringiz uni shakllantiradi.
              </p>
              <div className="mt-8 flex justify-center">
                <StoreButtons tone="ghost" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
