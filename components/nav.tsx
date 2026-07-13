"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./brand";
import { APP_STORE } from "@/lib/site";

const links = [
  { href: "#jarayon", label: "Jarayon" },
  { href: "#imkoniyat", label: "Imkoniyatlar" },
  { href: "#ishlab-chiqarish", label: "Ishlab chiqarish" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-ink-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-6 px-5">
        <a
          href="#"
          aria-label="Jihozla, bosh sahifa"
          className="flex min-h-11 shrink-0 items-center"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-11 items-center text-[14.5px] font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={APP_STORE}
            target="_blank"
            rel="noopener"
            className="hidden min-h-11 items-center rounded-lg bg-brand-500 px-4 text-[14px] font-semibold text-white transition-colors hover:bg-brand-600 active:translate-y-px sm:inline-flex"
          >
            Yuklab olish
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100 md:hidden"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-200 bg-ink-50 px-5 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-[15px] font-medium text-ink-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_STORE}
            target="_blank"
            rel="noopener"
            className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-brand-500 px-4 font-semibold text-white sm:hidden"
          >
            Yuklab olish
          </a>
        </nav>
      )}
    </header>
  );
}
