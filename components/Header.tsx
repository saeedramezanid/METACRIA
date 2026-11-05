"use client";

import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { btnPrimary } from "@/lib/styles";
import { Icon } from "./icons";

export function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-mist-100">
              {t(brand.name)}
            </span>
            <span className="mt-1 text-[11px] text-mist-500">
              {t(brand.suffix)}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={t({ fa: "ناوبری اصلی", en: "Primary" })}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-4 py-2 text-sm text-mist-300 transition hover:bg-white/5 hover:text-mist-100"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-mist-300 transition hover:border-neon-400/50 hover:text-mist-100"
            aria-label={lang === "fa" ? "Switch to English" : "به فارسی تغییر دهید"}
          >
            <Icon name="globe" className="size-4" />
            {lang === "fa" ? "EN" : "فا"}
          </button>
          <a href="#contact" className={`hidden md:inline-flex ${btnPrimary}`}>
            {t({ fa: "شروع پروژه", en: "Start a project" })}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-mist-200 md:hidden"
            aria-expanded={open}
            aria-label={t({ fa: "منو", en: "Menu" })}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink-900/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-mist-300 last:border-0"
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`mt-4 mb-2 ${btnPrimary}`}
            >
              {t({ fa: "شروع پروژه", en: "Start a project" })}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Logo() {
  return (
    <svg viewBox="0 0 40 40" className="size-9 shrink-0" aria-hidden>
      <defs>
        <linearGradient id="nexora-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b4a6ff" />
          <stop offset="55%" stopColor="#3fa9ff" />
          <stop offset="100%" stopColor="#2ee6d6" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.5 34.5 11v18L20 37.5 5.5 29V11L20 2.5Z"
        fill="none"
        stroke="url(#nexora-mark)"
        strokeWidth="1.6"
      />
      <path
        d="M14 26V14l12 12V14"
        fill="none"
        stroke="url(#nexora-mark)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
