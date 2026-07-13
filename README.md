# Jihozla, veb-sayt

Mebelchilar va oshxona dizaynerlari uchun ilovaning rasmiy sayti.

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:3000
```

Boshqa buyruqlar:

```bash
npm run build      # ishlab chiqarish uchun yig'ish
npm start          # yig'ilgan saytni ishga tushirish
npm run typecheck  # TypeScript tekshiruvi
```

## Stek

- Next.js 15, App Router, Server Components
- Tailwind CSS v4
- Motion (`motion/react`), faqat kirish animatsiyasi uchun
- Phosphor Icons
- Geist va Geist Mono shriftlari, `next/font` orqali

## Nimani qayerdan o'zgartirasiz

**`lib/site.ts`** - saytdagi barcha o'zgaruvchan ma'lumot shu yerda:

| O'zgaruvchi | Vazifasi |
| --- | --- |
| `APP_STORE` | App Store havolasi |
| `PLAY_STORE` | Google Play havolasi. Hozircha `null` |
| `TELEGRAM` | Telegram kanal havolasi |
| `CONTACT_EMAIL` | Aloqa uchun pochta. Hozircha `null`, footerda ko'rinmaydi |
| `PROOF` | Muhandislik bo'limidagi raqamlar |

### Google Play

`play.google.com/store/apps/details?id=uz.jihozla.app` havolasi 2026-07-13 holatiga
404 qaytaradi, ya'ni Android ilovasi hali ochiq e'lon qilinmagan. Shuning uchun saytda
Google Play tugmasi bosilmaydigan "Tez orada" chipi sifatida turibdi.

Ilova Play Store'da chiqqach, `lib/site.ts` faylida bitta qatorni o'zgartiring:

```ts
export const PLAY_STORE: string | null = "https://play.google.com/store/apps/details?id=uz.jihozla.app";
```

Tugma butun saytda avtomatik ishlaydigan havolaga aylanadi.

### Aloqa uchun pochta

Hozircha qo'llab-quvvatlash pochtasi yo'q, shuning uchun `CONTACT_EMAIL` qiymati
`null` va footerdagi "Aloqa" ustunida faqat Telegram kanal turibdi.

Pochta ochilgach, `lib/site.ts` da yozib qo'ying:

```ts
export const CONTACT_EMAIL: string | null = "info@jihozla.uz";
```

Footerga pochta qatori o'zi qo'shiladi.

## Rasmlar

`public/screens/` ichidagi barcha rasmlar ilovaning haqiqiy ekranlari. Sahifada
hech qanday soxta interfeys chizilmagan.

`public/mark.png` va `public/wordmark.png` shaffof fonli, oq rangli. Ular CSS mask
orqali ranglanadi, shuning uchun yorug' va qorong'i rejimda ham to'g'ri ko'rinadi.

## Deploy

Vercel: repozitoriyni ulaysiz, sozlama shart emas. Next.js o'zi aniqlanadi.

Domen: `jihozla.uz`. Domen ulangach, `app/layout.tsx` dagi `metadataBase` ni
tekshiring.
