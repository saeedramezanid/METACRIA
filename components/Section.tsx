"use client";

import type { ReactNode } from "react";
import type { Text } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  lede,
  aside,
  children,
  className = "",
}: {
  id: string;
  eyebrow: Text;
  title: Text;
  lede?: Text;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const { t } = useLang();

  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>{t(eyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-mist-100 sm:text-4xl">
                {t(title)}
              </h2>
              {lede ? (
                <p className="mt-4 text-base leading-8 text-mist-400">{t(lede)}</p>
              ) : null}
            </div>
            {aside}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neon-400/25 bg-neon-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-neon-300 uppercase">
      <span className="size-1.5 rounded-full bg-glow-400 animate-pulse-glow" />
      {children}
    </span>
  );
}
