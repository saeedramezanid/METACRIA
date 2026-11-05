"use client";

import { team, teamIntro } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { surface } from "@/lib/styles";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Team() {
  const { t } = useLang();

  return (
    <Section id="team" eyebrow={teamIntro.eyebrow} title={teamIntro.title} lede={teamIntro.lede}>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <Reveal key={member.name.fa}>
            <article className={`${surface} flex h-full gap-5 p-6`}>
              <Avatar name={t(member.name)} hue={member.hue} />
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-mist-100">
                  {t(member.name)}
                </h3>
                <p className="mt-1 text-xs font-medium text-neon-300">
                  {t(member.role)}
                </p>
                <p className="mt-3 text-[13px] leading-6 text-mist-400">
                  {t(member.focus)}
                </p>
                <p className="num mt-4 text-[11px] text-mist-500">
                  {t({
                    fa: `${member.years} سال تجربه`,
                    en: `${member.years} yrs experience`,
                  })}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Avatar({ name, hue }: { name: string; hue: [string, string] }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <span
      aria-hidden
      className="grid size-14 shrink-0 place-items-center rounded-2xl font-display text-base font-bold text-ink-950"
      style={{
        backgroundImage: `linear-gradient(140deg, ${hue[0]}, ${hue[1]})`,
      }}
    >
      {initials}
    </span>
  );
}
