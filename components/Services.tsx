"use client";

import { services, servicesIntro } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { surface } from "@/lib/styles";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Services() {
  const { t } = useLang();

  return (
    <Section id="services" eyebrow={servicesIntro.eyebrow} title={servicesIntro.title} lede={servicesIntro.lede}>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Reveal key={service.icon}>
            <article className={`${surface} h-full p-7 sm:p-8`}>
              <div className="flex items-center gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-neon-400/25 bg-neon-500/10 text-neon-300">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h3 className="font-display text-xl font-semibold text-mist-100">
                  {t(service.title)}
                </h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-mist-400">{t(service.blurb)}</p>
              <ul className="mt-6 space-y-3 border-t border-white/5 pt-6">
                {service.bullets.map((bullet) => (
                  <li key={bullet.fa} className="flex items-start gap-3 text-sm text-mist-300">
                    <Icon
                      name="check"
                      className="mt-0.5 size-4 shrink-0 text-glow-400"
                    />
                    <span className="leading-6">{t(bullet)}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
