"use client";

import { brand, footer } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative mt-10 border-t border-white/8">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-xl font-bold text-mist-100">
              {t(brand.name)}
              <span className="text-gradient">.</span>
            </p>
            <p className="mt-4 max-w-sm text-[13px] leading-7 text-mist-400">
              {t(footer.blurb)}
            </p>
            <a
              href={`mailto:${brand.email}`}
              dir="ltr"
              className="mt-5 inline-block text-sm text-neon-300 underline underline-offset-4"
            >
              {brand.email}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.title.fa}>
                <h3 className="text-xs font-semibold tracking-wide text-mist-200 uppercase">
                  {t(column.title)}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.fa}>
                      <a
                        href="#contact"
                        className="text-[13px] text-mist-400 transition hover:text-mist-100"
                      >
                        {t(link)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-14 h-px" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-mist-500 sm:flex-row sm:items-center">
          <p>{t(footer.rights)}</p>
          <p>{t({ fa: "ساخته‌شده با Next.js و Tailwind", en: "Built with Next.js & Tailwind" })}</p>
        </div>
      </div>
    </footer>
  );
}
