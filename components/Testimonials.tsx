"use client";

import { testimonials } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { surface } from "@/lib/styles";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Testimonials() {
  const { t } = useLang();

  return (
    <Section
      id="testimonials"
      eyebrow={{ fa: "نظر مشتریان", en: "What clients say" }}
      title={{ fa: "بعد از تحویل چه می‌گویند", en: "Word after handover" }}
      className="pt-4"
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Reveal key={item.name.fa}>
            <figure className={`${surface} flex h-full flex-col p-7`}>
              <Icon name="quote" className="size-7 text-neon-400/60" />
              <blockquote className="mt-5 flex-1 text-[13.5px] leading-7 text-mist-300">
                {t(item.quote)}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-white/5 pt-5">
                <span
                  aria-hidden
                  className="size-9 rounded-full"
                  style={{
                    backgroundImage: `linear-gradient(140deg, ${item.hue[0]}, ${item.hue[1]})`,
                  }}
                />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-mist-100">
                    {t(item.name)}
                  </span>
                  <span className="block text-xs text-mist-500">{t(item.role)}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
