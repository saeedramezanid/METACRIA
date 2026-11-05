"use client";

import { plans, pricingIntro, pricingNote } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { btnGhost, btnPrimary } from "@/lib/styles";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Pricing() {
  const { t } = useLang();

  return (
    <Section id="pricing" eyebrow={pricingIntro.eyebrow} title={pricingIntro.title} lede={pricingIntro.lede}>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Reveal key={plan.name.fa}>
            <article
              className={`relative flex h-full flex-col rounded-3xl p-[1px] ${
                plan.highlighted
                  ? "brand-fill shadow-[0_40px_120px_-50px_rgb(109_84_255_/_0.85)]"
                  : "bg-white/10"
              }`}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rounded-full bg-ink-900 px-3 py-1 text-[11px] font-semibold text-neon-300 ring-1 ring-neon-400/40">
                  {t({ fa: "پرانتخاب‌ترین", en: "Most chosen" })}
                </span>
              ) : null}

              <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-ink-900/90 p-7 backdrop-blur-xl">
                <h3 className="font-display text-lg font-semibold text-mist-100">
                  {t(plan.name)}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-mist-400">
                  {t(plan.blurb)}
                </p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="num font-display text-3xl font-bold text-mist-100">
                    {t(plan.price)}
                  </span>
                  <span className="text-xs text-mist-500">{t(plan.cadence)}</span>
                </p>

                <ul className="mt-7 space-y-3 border-t border-white/5 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.fa}
                      className="flex items-start gap-3 text-[13px] leading-6 text-mist-300"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 size-4 shrink-0 text-glow-400"
                      />
                      {t(feature)}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 w-full ${plan.highlighted ? btnPrimary : btnGhost}`}
                >
                  {t(plan.cta)}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 rounded-2xl border border-white/8 bg-white/4 px-6 py-4 text-center text-[13px] leading-6 text-mist-400">
          {t(pricingNote)}
        </p>
      </Reveal>
    </Section>
  );
}
