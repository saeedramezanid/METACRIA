"use client";

import { hero, stats } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { btnGhost, btnPrimary, chip } from "@/lib/styles";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20">
      <Backdrop />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="relative">
            <HeroArt />
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-mist-300">
                <span className="size-1.5 rounded-full bg-glow-400 animate-pulse-glow" />
                {t(hero.eyebrow)}
              </span>
            </Reveal>

            <Reveal>
              <h1 className="mt-6 font-display text-4xl leading-[1.15] font-bold text-mist-100 sm:text-5xl lg:text-6xl">
                {t(hero.title)}
                <br />
                <span className="text-gradient">{t(hero.titleAccent)}</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-6 max-w-xl text-base leading-8 text-mist-300 sm:text-lg">
                {t(hero.lede)}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#contact" className={btnPrimary}>
                  {t(hero.primaryCta)}
                  <Icon name="arrow" className="size-4 rtl:-scale-x-100" />
                </a>
                <a href="#work" className={btnGhost}>
                  {t(hero.secondaryCta)}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label.fa} className="border-s border-white/10 ps-4">
                  <dt className="num font-display text-2xl font-bold text-mist-100 sm:text-3xl">
                    {t(item.value)}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-mist-500 sm:text-sm">
                    {t(item.label)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal>
          <CodeCard />
        </Reveal>
      </div>

      <StackTicker />
    </section>
  );
}

function HeroArt() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-x-14 -top-28 -bottom-8 -z-20 overflow-hidden"
    >
      <img
        src={hero.backdrop}
        alt=""
        width={1600}
        height={900}
        fetchPriority="high"
        className="size-full object-cover [mask-image:radial-gradient(72%_66%_at_50%_40%,black,transparent)]"
      />
      <div className="absolute inset-0 bg-ink-950/65" />
    </div>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines [mask-image:radial-gradient(75%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute -top-24 start-[-10%] size-[420px] animate-drift rounded-full bg-neon-500/25 blur-[120px]" />
      <div className="absolute top-10 end-[-8%] size-[380px] animate-float rounded-full bg-flux-500/20 blur-[110px]" />
      <div className="absolute bottom-[-6rem] start-1/3 size-[300px] rounded-full bg-glow-500/15 blur-[120px]" />
    </div>
  );
}

function CodeCard() {
  const lines: { indent: number; parts: [string, string][] }[] = [
    { indent: 0, parts: [["kw", "export const "], ["fn", "squad"], ["op", " = {"]] },
    {
      indent: 1,
      parts: [
        ["prop", "stack"],
        ["op", ": "],
        ["str", "['Go', 'Next.js', 'Postgres'],"],
      ],
    },
    {
      indent: 1,
      parts: [["prop", "cadence"], ["op", ": "], ["str", "'2-week sprints',"]],
    },
    { indent: 1, parts: [["prop", "onDone"], ["op", ": "], ["fn", "deploy"] ] },
    {
      indent: 2,
      parts: [
        ["kw", "await "],
        ["fn", "pipeline"],
        ["op", "."],
        ["fn", "ship"],
        ["op", "(release) "],
        ["op", "// zero-downtime"],
      ],
    },
    {
      indent: 2,
      parts: [["kw", "return "], ["fn", "dashboard"], ["op", "."], ["fn", "green"]],
    },
    { indent: 1, parts: [["op", "},"]] },
    { indent: 0, parts: [["op", "}"]] },
  ];

  const tone: Record<string, string> = {
    kw: "text-neon-300",
    fn: "text-flux-400",
    str: "text-glow-400",
    prop: "text-mist-200",
    op: "text-mist-500",
  };

  return (
    <div className="glass rounded-3xl p-1.5 shadow-[0_40px_120px_-50px_rgb(109_84_255_/_0.8)]">
      <div className="rounded-[1.35rem] bg-ink-900/80">
        <div dir="ltr" className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
          <span className="size-2.5 rounded-full bg-ember-400/70" />
          <span className="size-2.5 rounded-full bg-glow-400/60" />
          <span className="size-2.5 rounded-full bg-neon-400/60" />
          <span className="ms-3 font-mono text-[11px] text-mist-500">
            delivery.config.ts
          </span>
        </div>
        <pre
          dir="ltr"
          className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 text-mist-300 sm:text-[13px]"
        >
          <code>
            {lines.map((line, index) => (
              <div key={index} className="flex gap-4">
                <span className="w-4 shrink-0 text-end text-mist-500/40 select-none">
                  {index + 1}
                </span>
                <span style={{ paddingInlineStart: `${line.indent * 1.25}rem` }}>
                  {line.parts.map(([kind, text], part) => (
                    <span key={part} className={tone[kind]}>
                      {text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
        <div className="flex flex-wrap gap-2 border-t border-white/5 px-5 py-4">
          {["100% test coverage", "Trunk-based", "On-call rotation"].map((label) => (
            <span key={label} className={chip}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackTicker() {
  const { t } = useLang();

  return (
    <div className="relative mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
      <div className="flex items-center gap-6">
        <span className="shrink-0 text-xs text-mist-500">
          {t({ fa: "پشته‌ی فنی", en: "Stack" })}
        </span>
        <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee py-1">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex gap-10 pe-10"
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {hero.stack.map((name) => (
                  <span
                    key={name}
                    className="font-mono text-sm whitespace-nowrap text-mist-400/70"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
